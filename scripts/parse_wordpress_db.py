#!/usr/bin/env python3
"""
Parse WordPress database backup to extract complete content inventory.
"""

import re
import csv
import json
from datetime import datetime
from collections import defaultdict

DB_FILE = "/Users/avolve/dev/active/neothink/neothink-com/assets/wordpress-backup/extracted/dup-installer/dup-database__ae8b9cf-18163955.sql"
OUTPUT_CSV = "/Users/avolve/dev/active/neothink/neothink-com/data/wordpress-content-inventory-complete.csv"
OUTPUT_MD = "/Users/avolve/dev/active/neothink/neothink-com/data/wordpress-database-analysis.md"

def parse_insert_values(line):
    """Parse INSERT INTO VALUES statement and extract tuples."""
    # Find the VALUES part
    match = re.search(r'VALUES\s+(.+);', line, re.DOTALL)
    if not match:
        return []

    values_part = match.group(1)

    # Split by ),( to get individual records
    # Handle escaped characters and nested parentheses
    records = []
    current = []
    depth = 0
    in_string = False
    escape_next = False

    for char in values_part:
        if escape_next:
            current.append(char)
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            current.append(char)
            continue

        if char == "'" and not escape_next:
            in_string = not in_string

        if not in_string:
            if char == '(':
                if depth > 0:
                    current.append(char)
                depth += 1
            elif char == ')':
                depth -= 1
                if depth > 0:
                    current.append(char)
                elif depth == 0:
                    # End of a record
                    records.append(''.join(current))
                    current = []
            elif char == ',' and depth == 0:
                # Skip commas between records
                continue
            else:
                if depth > 0:
                    current.append(char)
        else:
            current.append(char)

    return records

def parse_record_fields(record):
    """Parse a single record into fields."""
    fields = []
    current = []
    in_string = False
    escape_next = False
    depth = 0

    for char in record:
        if escape_next:
            current.append(char)
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            current.append(char)
            continue

        if char == "'" and not escape_next:
            in_string = not in_string
            current.append(char)
            continue

        if not in_string:
            if char == '(':
                depth += 1
                current.append(char)
            elif char == ')':
                depth -= 1
                current.append(char)
            elif char == ',' and depth == 0:
                # Field separator
                fields.append(''.join(current).strip())
                current = []
            else:
                current.append(char)
        else:
            current.append(char)

    # Add last field
    if current:
        fields.append(''.join(current).strip())

    return fields

def clean_field(field):
    """Clean a field value."""
    field = field.strip()
    if field.startswith("'") and field.endswith("'"):
        field = field[1:-1]
    if field == 'NULL':
        return None
    # Unescape
    field = field.replace("\\'", "'")
    field = field.replace("\\\\", "\\")
    field = field.replace("\\n", "\n")
    field = field.replace("\\r", "\r")
    field = field.replace("\\t", "\t")
    return field

def extract_posts():
    """Extract all posts from wpll_posts table."""
    posts = []
    post_types_count = defaultdict(int)
    status_count = defaultdict(int)

    print("Extracting posts from database...")

    with open(DB_FILE, 'r', encoding='utf-8', errors='replace') as f:
        in_posts_insert = False
        buffer = ""

        for line in f:
            # Check if this is a wpll_posts INSERT
            if 'INSERT INTO `wpll_posts`' in line:
                in_posts_insert = True
                buffer = line

                # Check if statement ends on same line
                if line.rstrip().endswith(';'):
                    # Parse this line
                    records = parse_insert_values(buffer)
                    for record in records:
                        fields = parse_record_fields(record)
                        if len(fields) >= 23:
                            post_id = clean_field(fields[0])
                            post_date = clean_field(fields[2])
                            post_title = clean_field(fields[5])
                            post_status = clean_field(fields[7])
                            post_name = clean_field(fields[11])
                            post_type = clean_field(fields[20])

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

                    in_posts_insert = False
                    buffer = ""
                continue

            if in_posts_insert:
                buffer += line
                if line.rstrip().endswith(';'):
                    # End of INSERT statement
                    records = parse_insert_values(buffer)
                    for record in records:
                        fields = parse_record_fields(record)
                        if len(fields) >= 23:
                            post_id = clean_field(fields[0])
                            post_date = clean_field(fields[2])
                            post_title = clean_field(fields[5])
                            post_status = clean_field(fields[7])
                            post_name = clean_field(fields[11])
                            post_type = clean_field(fields[20])

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

                    in_posts_insert = False
                    buffer = ""

    print(f"Found {len(posts)} published posts")
    print(f"Post types: {dict(post_types_count)}")
    print(f"Status counts: {dict(status_count)}")

    return posts, dict(post_types_count), dict(status_count)

def extract_postmeta():
    """Extract Yoast SEO meta from wpll_postmeta table."""
    yoast_meta = defaultdict(dict)

    print("\nExtracting Yoast SEO meta...")

    with open(DB_FILE, 'r', encoding='utf-8', errors='replace') as f:
        in_postmeta_insert = False
        buffer = ""

        for line in f:
            if 'INSERT INTO `wpll_postmeta`' in line:
                in_postmeta_insert = True
                buffer = line

                if line.rstrip().endswith(';'):
                    records = parse_insert_values(buffer)
                    for record in records:
                        fields = parse_record_fields(record)
                        if len(fields) >= 4:
                            post_id = clean_field(fields[1])
                            meta_key = clean_field(fields[2])
                            meta_value = clean_field(fields[3])

                            if meta_key == '_yoast_wpseo_title':
                                yoast_meta[post_id]['yoast_title'] = meta_value
                            elif meta_key == '_yoast_wpseo_metadesc':
                                yoast_meta[post_id]['yoast_metadesc'] = meta_value

                    in_postmeta_insert = False
                    buffer = ""
                continue

            if in_postmeta_insert:
                buffer += line
                if line.rstrip().endswith(';'):
                    records = parse_insert_values(buffer)
                    for record in records:
                        fields = parse_record_fields(record)
                        if len(fields) >= 4:
                            post_id = clean_field(fields[1])
                            meta_key = clean_field(fields[2])
                            meta_value = clean_field(fields[3])

                            if meta_key == '_yoast_wpseo_title':
                                yoast_meta[post_id]['yoast_title'] = meta_value
                            elif meta_key == '_yoast_wpseo_metadesc':
                                yoast_meta[post_id]['yoast_metadesc'] = meta_value

                    in_postmeta_insert = False
                    buffer = ""

    print(f"Found Yoast meta for {len(yoast_meta)} posts")

    return dict(yoast_meta)

def main():
    """Main execution."""
    print("WordPress Database Analysis")
    print("=" * 60)

    # Extract posts
    posts, post_types, status_counts = extract_posts()

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

    # Count by type
    published_by_type = defaultdict(int)
    for post in posts:
        published_by_type[post['post_type']] += 1

    # Count Yoast coverage
    with_title = sum(1 for p in posts if p.get('yoast_title'))
    with_desc = sum(1 for p in posts if p.get('yoast_metadesc'))

    # Generate report
    print(f"\nWriting analysis to {OUTPUT_MD}...")

    report = f"""# WordPress Database Analysis

**Source:** 20250918 WordPress Backup
**Database:** dup-database__ae8b9cf-18163955.sql
**Analysis Date:** {datetime.now().strftime('%Y-%m-%d')}

## Content Count Verification

### Total Published Content
- **Total Published:** {len(posts)} pieces
- **Pages:** {published_by_type.get('page', 0)}
- **Posts:** {published_by_type.get('post', 0)}
- **Podcasts:** {published_by_type.get('podcast', 0)}
- **Other:** {sum(v for k, v in published_by_type.items() if k not in ['page', 'post', 'podcast'])}

**Claimed in STATUS.md:** 232 pieces (37 pages + 44 posts + 39 podcasts)
**Actual in Database:** {len(posts)} published pieces
**Verification:** {'✅ MATCH' if len(posts) >= 220 and len(posts) <= 240 else '❌ DISCREPANCY'}

### All Post Types (Including Unpublished)
{chr(10).join(f"- **{k}:** {v}" for k, v in sorted(post_types.items(), key=lambda x: -x[1]))}

### Status Distribution
{chr(10).join(f"- **{k}:** {v}" for k, v in sorted(status_counts.items(), key=lambda x: -x[1]))}

## Content by Type

### Pages (post_type='page', post_status='publish')
**Total:** {published_by_type.get('page', 0)} pages

### Posts (post_type='post', post_status='publish')
**Total:** {published_by_type.get('post', 0)} posts

### Podcasts
**Total:** {published_by_type.get('podcast', 0)} podcasts

## Yoast SEO Meta Coverage

- **Posts with Yoast Title:** {with_title} / {len(posts)} = {with_title/len(posts)*100:.1f}%
- **Posts with Yoast Meta Desc:** {with_desc} / {len(posts)} = {with_desc/len(posts)*100:.1f}%
- **Posts with NEITHER:** {len([p for p in posts if not p.get('yoast_title') and not p.get('yoast_metadesc')])} (need optimization)

## Critical Findings

1. **Total Published Content:** {len(posts)} pieces found in database
2. **Content Types:** {', '.join(f"{k}={v}" for k, v in published_by_type.items())}
3. **Yoast SEO Coverage:** {with_desc}/{len(posts)} ({with_desc/len(posts)*100:.1f}%) have meta descriptions
4. **Missing Optimization:** {len(posts) - with_desc} posts need Yoast meta descriptions

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
    print(f"\nTotal published: {len(posts)}")
    print(f"Pages: {published_by_type.get('page', 0)}")
    print(f"Posts: {published_by_type.get('post', 0)}")
    print(f"Podcasts: {published_by_type.get('podcast', 0)}")

if __name__ == '__main__':
    main()
