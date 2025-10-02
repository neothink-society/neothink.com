#!/usr/bin/env python3
"""
SEO Inventory Builder
Merges WordPress database export with GSC performance data to create comprehensive SEO inventory.
"""

import csv
import sys
from urllib.parse import urlparse
from pathlib import Path

# File paths
WP_CSV = "/Users/avolve/dev/active/neothink/neothink-com/data/wordpress-content-inventory-complete.csv"
GSC_CSV = "/Users/avolve/dev/active/neothink/neothink-com/data/gsc/gsc-neothink.com-Performance-on-Search-2025-09-26/Pages.csv"
OUTPUT_CSV = "/Users/avolve/dev/active/neothink/neothink-com/data/seo-inventory-master.csv"

def normalize_url(url):
    """Extract slug from URL for matching"""
    if not url:
        return None
    # Remove trailing slash
    url = url.rstrip('/')
    # Extract path from full URL
    if url.startswith('http'):
        path = urlparse(url).path
    else:
        path = url
    # Remove leading slash
    return path.lstrip('/')

def load_wordpress_data():
    """Load WordPress content data"""
    wp_data = {}
    with open(WP_CSV, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter='\t')
        for row in reader:
            slug = row['post_name']
            wp_data[slug] = {
                'id': row['ID'],
                'type': row['post_type'],
                'title': row['post_title'],
                'slug': slug,
                'date': row['post_date'],
                'status': row['post_status'],
                'yoast_title': row['yoast_title'] if row['yoast_title'] != 'NULL' else '',
                'yoast_meta': row['yoast_meta'] if row['yoast_meta'] != 'NULL' else ''
            }
    return wp_data

def load_gsc_data():
    """Load GSC performance data"""
    gsc_data = {}
    with open(GSC_CSV, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row['Top pages']
            slug = normalize_url(url)
            gsc_data[slug] = {
                'url': url,
                'clicks': row['Clicks'],
                'impressions': row['Impressions'],
                'ctr': row['CTR'],
                'position': row['Position']
            }
    return gsc_data

def merge_data(wp_data, gsc_data):
    """Merge WordPress and GSC data"""
    merged = []

    # Track which GSC URLs were matched
    matched_gsc_urls = set()

    # Process all WordPress content
    for slug, wp_info in wp_data.items():
        gsc_info = gsc_data.get(slug, {})

        if gsc_info:
            matched_gsc_urls.add(slug)
            indexation_status = 'Indexed - Has Traffic'
            traffic_status = 'Live' if int(gsc_info['clicks']) > 0 else 'Zero-Click'
        else:
            indexation_status = 'Not in GSC / No Traffic'
            traffic_status = 'No Data'

        merged.append({
            'wp_id': wp_info['id'],
            'content_type': wp_info['type'],
            'title': wp_info['title'],
            'slug': slug,
            'url': f"https://neothink.com/{slug}/",
            'publish_date': wp_info['date'],
            'yoast_title': wp_info['yoast_title'],
            'yoast_meta': wp_info['yoast_meta'],
            'has_yoast_meta': 'Yes' if wp_info['yoast_meta'] else 'No',
            'indexation_status': indexation_status,
            'traffic_status': traffic_status,
            'gsc_clicks': gsc_info.get('clicks', '0'),
            'gsc_impressions': gsc_info.get('impressions', '0'),
            'gsc_ctr': gsc_info.get('ctr', '0%'),
            'gsc_position': gsc_info.get('position', '—'),
            'priority': calculate_priority(wp_info, gsc_info, indexation_status, traffic_status)
        })

    # Add GSC URLs not in WordPress (likely old/deleted content)
    for slug, gsc_info in gsc_data.items():
        if slug not in matched_gsc_urls:
            merged.append({
                'wp_id': 'N/A',
                'content_type': 'Unknown',
                'title': 'Not in WordPress',
                'slug': slug,
                'url': gsc_info['url'],
                'publish_date': 'Unknown',
                'yoast_title': '',
                'yoast_meta': '',
                'has_yoast_meta': 'N/A',
                'indexation_status': 'In GSC but not WordPress',
                'traffic_status': 'Orphaned',
                'gsc_clicks': gsc_info['clicks'],
                'gsc_impressions': gsc_info['impressions'],
                'gsc_ctr': gsc_info['ctr'],
                'gsc_position': gsc_info['position'],
                'priority': 'INVESTIGATE'
            })

    return merged

def calculate_priority(wp_info, gsc_info, indexation_status, traffic_status):
    """Calculate optimization priority"""
    if not gsc_info:
        return 'P3-Not Indexed'

    clicks = int(gsc_info.get('clicks', 0))
    impressions = int(gsc_info.get('impressions', 0).replace(',', ''))
    has_meta = bool(wp_info.get('yoast_meta'))

    # P1: High impressions but zero clicks
    if impressions > 100 and clicks == 0:
        return 'P1-Zero Click Crisis'

    # P1: High traffic but no meta
    if clicks > 50 and not has_meta:
        return 'P1-Missing Meta (High Traffic)'

    # P2: Moderate impressions, zero clicks
    if impressions > 20 and clicks == 0:
        return 'P2-Zero Click'

    # P2: Moderate traffic, no meta
    if clicks > 10 and not has_meta:
        return 'P2-Missing Meta'

    # P2: Low CTR (<2%) with decent impressions
    if impressions > 100:
        ctr_val = float(gsc_info.get('ctr', '0%').replace('%', ''))
        if ctr_val < 2.0 and ctr_val > 0:
            return 'P2-Low CTR'

    # P3: Has traffic but could optimize
    if clicks > 0 and not has_meta:
        return 'P3-Optimize Meta'

    # P3: Low impressions, zero clicks
    if clicks == 0:
        return 'P3-Zero Click (Low Volume)'

    # P4: Everything else
    return 'P4-Maintain'

def write_output(merged_data):
    """Write merged data to CSV"""
    fieldnames = [
        'wp_id', 'content_type', 'title', 'slug', 'url', 'publish_date',
        'yoast_title', 'yoast_meta', 'has_yoast_meta',
        'indexation_status', 'traffic_status', 'priority',
        'gsc_clicks', 'gsc_impressions', 'gsc_ctr', 'gsc_position'
    ]

    # Sort by priority then clicks
    priority_order = {
        'P1-Zero Click Crisis': 1,
        'P1-Missing Meta (High Traffic)': 2,
        'P2-Zero Click': 3,
        'P2-Missing Meta': 4,
        'P2-Low CTR': 5,
        'P3-Not Indexed': 6,
        'P3-Optimize Meta': 7,
        'P3-Zero Click (Low Volume)': 8,
        'P4-Maintain': 9,
        'INVESTIGATE': 0
    }

    merged_data.sort(key=lambda x: (
        priority_order.get(x['priority'], 99),
        -int(x['gsc_clicks'])
    ))

    with open(OUTPUT_CSV, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(merged_data)

    return len(merged_data)

def print_summary(merged_data):
    """Print summary statistics"""
    priority_order = {
        'P1-Zero Click Crisis': 1,
        'P1-Missing Meta (High Traffic)': 2,
        'P2-Zero Click': 3,
        'P2-Missing Meta': 4,
        'P2-Low CTR': 5,
        'P3-Not Indexed': 6,
        'P3-Optimize Meta': 7,
        'P3-Zero Click (Low Volume)': 8,
        'P4-Maintain': 9,
        'INVESTIGATE': 0
    }

    total = len(merged_data)
    wp_total = sum(1 for x in merged_data if x['wp_id'] != 'N/A')
    gsc_total = sum(1 for x in merged_data if x['indexation_status'] != 'Not in GSC / No Traffic')
    zero_click = sum(1 for x in merged_data if x['traffic_status'] == 'Zero-Click')
    no_meta = sum(1 for x in merged_data if x['has_yoast_meta'] == 'No' and x['wp_id'] != 'N/A')

    # Priority counts
    priorities = {}
    for item in merged_data:
        p = item['priority']
        priorities[p] = priorities.get(p, 0) + 1

    print("\n" + "="*70)
    print("SEO INVENTORY SUMMARY")
    print("="*70)
    print(f"\n📊 Total Entries: {total}")
    print(f"   ├─ WordPress Content: {wp_total} pieces")
    print(f"   ├─ GSC URLs: {gsc_total} indexed")
    print(f"   └─ Orphaned URLs: {total - wp_total} (in GSC but not WordPress)")

    print(f"\n🚨 Critical Issues:")
    print(f"   ├─ Zero-Click Pages: {zero_click} ({zero_click/total*100:.1f}%)")
    print(f"   └─ Missing Yoast Meta: {no_meta} ({no_meta/wp_total*100:.1f}%)")

    print(f"\n🎯 Optimization Priorities:")
    for priority in sorted(priorities.keys(), key=lambda x: priority_order.get(x, 99)):
        count = priorities[priority]
        print(f"   ├─ {priority}: {count}")

    print(f"\n✅ Output File: {OUTPUT_CSV}")
    print("="*70 + "\n")

if __name__ == "__main__":
    print("Building SEO Inventory...")
    print(f"Loading WordPress data from: {WP_CSV}")
    wp_data = load_wordpress_data()
    print(f"  → Loaded {len(wp_data)} WordPress entries")

    print(f"Loading GSC data from: {GSC_CSV}")
    gsc_data = load_gsc_data()
    print(f"  → Loaded {len(gsc_data)} GSC URLs")

    print("Merging data sources...")
    merged = merge_data(wp_data, gsc_data)

    print(f"Writing output...")
    count = write_output(merged)

    print_summary(merged)

    sys.exit(0)
