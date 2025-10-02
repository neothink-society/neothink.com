#!/usr/bin/env python3
"""
Simple WordPress database parser - handles quoted VALUES format.
"""

import re
import csv
from datetime import datetime
from collections import defaultdict

DB_FILE = "/Users/avolve/dev/active/neothink/neothink-com/assets/wordpress-backup/extracted/dup-installer/dup-database__ae8b9cf-18163955.sql"
OUTPUT_CSV = "/Users/avolve/dev/active/neothink/neothink-com/data/wordpress-content-inventory-complete.csv"
OUTPUT_MD = "/Users/avolve/dev/active/neothink/neothink-com/data/wordpress-database-analysis.md"

def split_csv_values(line):
    """Split a line by commas, respecting quoted strings."""
    values = []
    current = []
    in_quotes = False
    escape_next = False

    for char in line:
        if escape_next:
            current.append(char)
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            current.append(char)
            continue

        if char == '"':
            in_quotes = not in_quotes
            continue

        if char == ',' and not in_quotes:
            values.append(''.join(current))
            current = []
            continue

        current.append(char)

    if current:
        values.append(''.join(current))

    return values

def extract_posts():
    """Extract all posts."""
    posts = []
    post_types_count = defaultdict(int)
    status_count = defaultdict(int)

    print("Extracting posts from database...")

    with open(DB_FILE, 'r', encoding='utf-8', errors='replace') as f:
        for line in f:
            if not line.startswith('INSERT INTO `wpll_posts` VALUES('):
                continue

            # Extract VALUES part
            match = re.search(r'VALUES\((.*)\);', line)
            if not match:
                continue

            values_str = match.group(1)
            fields = split_csv_values(values_str)

            if len(fields) >= 23:
                post_id = fields[0].strip()
                post_date = fields[2].strip()
                post_title = fields[5].strip()
                post_status = fields[7].strip()
                post_name = fields[11].strip()
                post_type = fields[20].strip()

                post_types_count[post_type] += 1
                status_count[post_status] += 1

                if post_status == 'publish':
                    posts.append({
                        'post_id': post_id,
                        'post_date': post_date,
                        'post_title': post_title,
                        'post_status': post_status,
                        'post_name': post_name,
                        'post_type': post_type
                    })

    print(f"Found {len(posts)} published posts")
    print(f"Post types (all): {dict(post_types_count)}")
    print(f"Status counts: {dict(status_count)}")

    return posts, dict(post_types_count), dict(status_count)

def extract_postmeta():
    """Extract Yoast SEO meta."""
    yoast_meta = defaultdict(dict)

    print("\nExtracting Yoast SEO meta...")

    with open(DB_FILE, 'r', encoding='utf-8', errors='replace') as f:
        for line in f:
            if not line.startswith('INSERT INTO `wpll_postmeta` VALUES('):
                continue

            match = re.search(r'VALUES\((.*)\);', line)
            if not match:
                continue

            values_str = match.group(1)
            fields = split_csv_values(values_str)

            if len(fields) >= 4:
                post_id = fields[1].strip()
                meta_key = fields[2].strip()
                meta_value = fields[3].strip()

                if meta_key == '_yoast_wpseo_title':
                    yoast_meta[post_id]['yoast_title'] = meta_value
                elif meta_key == '_yoast_wpseo_metadesc':
                    yoast_meta[post_id]['yoast_metadesc'] = meta_value

    print(f"Found Yoast meta for {len(yoast_meta)} posts")

    return dict(yoast_meta)

def main():
    """Main execution."""
    print("WordPress Database Analysis")
    print("=" * 60)

    # Extract posts
    posts, post_types, status_counts = extract_posts()

    if len(posts) == 0:
        print("\nERROR: No posts found!")
        return

    # Extract Yoast meta
    yoast_meta = extract_postmeta()

    # Combine data
    for post in posts:
        post_id = post['post_id']
        if post_id in yoast_meta:
            post['yoast_title'] = yoast_meta[post_id].get('yoast_title', '')
            post['yoast_metadesc'] = yoast_meta[post_id].get('yoast_metadesc', '')
        else:
            post['yoast_title'] = ''
            post['yoast_metadesc'] = ''

    # Write CSV
    print(f"\nWriting CSV to {OUTPUT_CSV}...")
    with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['post_id', 'post_type', 'post_title', 'post_name', 'post_date',
                     'yoast_title', 'yoast_metadesc', 'post_status']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for post in posts:
            writer.writerow({
                'post_id': post['post_id'],
                'post_type': post['post_type'],
                'post_title': post['post_title'],
                'post_name': post['post_name'],
                'post_date': post['post_date'],
                'yoast_title': post.get('yoast_title', ''),
                'yoast_metadesc': post.get('yoast_metadesc', ''),
                'post_status': post['post_status']
            })

    # Count by type (normalize ss_podcast to podcast)
    published_by_type = defaultdict(int)
    for post in posts:
        post_type = post['post_type']
        # Normalize ss_podcast to podcast for reporting
        if post_type == 'ss_podcast':
            post_type = 'podcast'
        published_by_type[post_type] += 1

    # Count Yoast coverage
    with_title = sum(1 for p in posts if p.get('yoast_title'))
    with_desc = sum(1 for p in posts if p.get('yoast_metadesc'))

    # Generate report
    print(f"\nWriting analysis to {OUTPUT_MD}...")

    total_claimed = 232
    pages_claimed = 37
    posts_claimed = 44
    podcasts_claimed = 39

    pages_actual = published_by_type.get('page', 0)
    posts_actual = published_by_type.get('post', 0)
    podcasts_actual = published_by_type.get('podcast', 0)
    total_actual = len(posts)

    verification = "✅ MATCH" if abs(total_actual - total_claimed) <= 10 else "❌ DISCREPANCY"

    report = f"""# WordPress Database Analysis

**Source:** 20250918 WordPress Backup
**Database:** dup-database__ae8b9cf-18163955.sql
**Analysis Date:** {datetime.now().strftime('%Y-%m-%d')}

## Content Count Verification

### Total Published Content
- **Total Published:** {total_actual} pieces
- **Pages:** {pages_actual}
- **Posts:** {posts_actual}
- **Podcasts:** {podcasts_actual}
- **Other:** {sum(v for k, v in published_by_type.items() if k not in ['page', 'post', 'podcast'])}

**Claimed in STATUS.md:** {total_claimed} pieces ({pages_claimed} pages + {posts_claimed} posts + {podcasts_claimed} podcasts)
**Actual in Database:** {total_actual} published pieces ({pages_actual} pages + {posts_actual} posts + {podcasts_actual} podcasts)
**Verification:** {verification}

{f"**Discrepancy:** {total_actual - total_claimed} pieces difference" if abs(total_actual - total_claimed) > 0 else ""}

### All Post Types (Including Unpublished)
{chr(10).join(f"- **{k}:** {v}" for k, v in sorted(post_types.items(), key=lambda x: -x[1]))}

### Status Distribution
{chr(10).join(f"- **{k}:** {v}" for k, v in sorted(status_counts.items(), key=lambda x: -x[1]))}

## Content by Type

### Pages (post_type='page', post_status='publish')
**Total:** {pages_actual} pages

Top 10 pages:
{chr(10).join(f"{i+1}. {p['post_title']} ({p['post_name']})" for i, p in enumerate([p for p in posts if p['post_type'] == 'page'][:10]))}

### Posts (post_type='post', post_status='publish')
**Total:** {posts_actual} posts

Most recent 10 posts:
{chr(10).join(f"{i+1}. {p['post_title']} ({p['post_date'][:10]})" for i, p in enumerate(sorted([p for p in posts if p['post_type'] == 'post'], key=lambda x: x['post_date'], reverse=True)[:10]))}

### Podcasts (post_type='ss_podcast', post_status='publish')
**Total:** {podcasts_actual} podcasts

Most recent 10 podcasts:
{chr(10).join(f"{i+1}. {p['post_title']} ({p['post_date'][:10]})" for i, p in enumerate(sorted([p for p in posts if p['post_type'] == 'ss_podcast'], key=lambda x: x['post_date'], reverse=True)[:10]))}


## Yoast SEO Meta Coverage

- **Posts with Yoast Title:** {with_title} / {total_actual} = {with_title/total_actual*100:.1f}%
- **Posts with Yoast Meta Desc:** {with_desc} / {total_actual} = {with_desc/total_actual*100:.1f}%
- **Posts with NEITHER:** {len([p for p in posts if not p.get('yoast_title') and not p.get('yoast_metadesc')])} (need optimization)

## Critical Findings

1. **Total Published Content:** {total_actual} pieces found in database
   - Claimed: {total_claimed} | Actual: {total_actual} | Difference: {total_actual - total_claimed}

2. **Content Type Breakdown:**
   - Pages: Claimed {pages_claimed} | Actual {pages_actual} | Difference {pages_actual - pages_claimed}
   - Posts: Claimed {posts_claimed} | Actual {posts_actual} | Difference {posts_actual - posts_claimed}
   - Podcasts: Claimed {podcasts_claimed} | Actual {podcasts_actual} | Difference {podcasts_actual - podcasts_claimed}

3. **Yoast SEO Coverage:** {with_desc}/{total_actual} ({with_desc/total_actual*100:.1f}%) have meta descriptions

4. **Missing Optimization:** {total_actual - with_desc} posts need Yoast meta descriptions

5. **Content Distribution:**
{chr(10).join(f"   - {k}: {v} ({v/sum(published_by_type.values())*100:.1f}%)" for k, v in sorted(published_by_type.items(), key=lambda x: -x[1]))}

## Next Steps

1. Cross-reference with GSC data from content-inventory.md
2. Identify pages in WordPress but not in GSC (expected ~109)
3. Identify high-traffic pages with missing/poor meta descriptions
4. Optimize content gaps

---

**Complete data exported to:** `{OUTPUT_CSV}`
"""

    with open(OUTPUT_MD, 'w', encoding='utf-8') as f:
        f.write(report)

    print("\nDone!")
    print(f"CSV: {OUTPUT_CSV}")
    print(f"Analysis: {OUTPUT_MD}")
    print(f"\n=== SUMMARY ===")
    print(f"Total published: {total_actual} (claimed {total_claimed})")
    print(f"Pages: {pages_actual} (claimed {pages_claimed})")
    print(f"Posts: {posts_actual} (claimed {posts_claimed})")
    print(f"Podcasts: {podcasts_actual} (claimed {podcasts_claimed})")
    print(f"Yoast meta desc coverage: {with_desc/total_actual*100:.1f}%")

if __name__ == '__main__':
    main()
