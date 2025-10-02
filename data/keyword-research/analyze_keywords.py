#!/usr/bin/env python3
"""
Keyword Research Analysis for Neothink.com
Analyzes 43,588 keywords across 20 CSV files using DuckDB
Created: October 2, 2025
"""

import duckdb
import glob

# Initialize DuckDB
con = duckdb.connect('keyword_intelligence.db')

# Define keyword files mapping
keyword_files = {
    'neothink-google': '/Users/avolve/Downloads/keyword-neothink-google.csv',
    'mark-hamilton-google': '/Users/avolve/Downloads/keyword-mark-hamilton-google.csv',
    'neothink-society-google': '/Users/avolve/Downloads/keyword-neothink-society-google.csv',
    'self-improvement-google': '/Users/avolve/Downloads/keyword-self-improvement-google.csv',
    'entrepreneurship-google': '/Users/avolve/Downloads/keyword-entrepreneurship-google.csv',
    'happiness-google': '/Users/avolve/Downloads/keyword-happiness-google.csv',
    'intelligence-google': '/Users/avolve/Downloads/keyword-intelligence-google.csv',
    'longevity-google': '/Users/avolve/Downloads/keyword-longevity-google.csv',
    'prosperity-google': '/Users/avolve/Downloads/keyword-prosperity-google.csv',
    'neothink-youtube': '/Users/avolve/Downloads/keyword-neothink-youtube.csv',
    'happiness-youtube': '/Users/avolve/Downloads/keyword-happiness-youtube.csv',
    'intelligence-youtube': '/Users/avolve/Downloads/keyword-intelligence-youtube.csv',
    'entrepreneurship-youtube': '/Users/avolve/Downloads/keyword-entrepreneurship-youtube.csv',
    'longevity-youtube': '/Users/avolve/Downloads/keyword-longevity-youtube.csv',
    'prosperity-youtube': '/Users/avolve/Downloads/keyword-prosperity-youtube.csv',
    'self-improvement-youtube': '/Users/avolve/Downloads/keyword-self-improvement-youtube.csv',
    'intelligence-tiktok': '/Users/avolve/Downloads/keyword-intelligence-tiktok.csv',
    'entrepreneurship-tiktok': '/Users/avolve/Downloads/keyword-entrepreneurship-tiktok.csv',
    'self-improvement-tiktok': '/Users/avolve/Downloads/keyword-self-improvement-tiktok.csv',
    'intelligence-instagram': '/Users/avolve/Downloads/keyword-intelligence-instagram.csv',
}

print("Importing keyword data...")
# Create combined table
con.execute("""
    CREATE TABLE IF NOT EXISTS keywords_all (
        topic VARCHAR,
        platform VARCHAR,
        modifier_type VARCHAR,
        modifier VARCHAR,
        keyword_phrase VARCHAR,
        language VARCHAR,
        region VARCHAR,
        seed_keyword VARCHAR,
        search_volume INTEGER,
        cpc DECIMAL(10,2)
    )
""")

# Import each file
for key, filepath in keyword_files.items():
    try:
        topic, platform = key.rsplit('-', 1)
        print(f"Importing {key}...")
        con.execute(f"""
            INSERT INTO keywords_all
            SELECT
                '{topic}' as topic,
                '{platform}' as platform,
                "Modifier Type",
                Modifier,
                Suggestion,
                Language,
                Region,
                Keyword,
                TRY_CAST("Search Volume" as INTEGER),
                TRY_CAST("Cost Per Click" as DECIMAL(10,2))
            FROM read_csv_auto('{filepath}', skip=1)
            WHERE "Search Volume" IS NOT NULL
                AND "Search Volume" != '-'
                AND "Search Volume" != ''
                AND TRY_CAST("Search Volume" as INTEGER) > 0
        """)
    except Exception as e:
        print(f"Error importing {key}: {e}")

print("\nGenerating analysis reports...")

# Summary statistics
summary = con.execute("""
    SELECT
        COUNT(*) as total_keywords,
        SUM(search_volume) as total_volume,
        COUNT(DISTINCT topic) as topics,
        COUNT(DISTINCT platform) as platforms
    FROM keywords_all
""").fetchone()

print(f"\nTotal Keywords: {summary[0]:,}")
print(f"Total Search Volume: {summary[1]:,}")
print(f"Topics: {summary[2]}")
print(f"Platforms: {summary[3]}")

# Export summary
con.execute("""
    COPY (
        SELECT
            'Total Keywords' as metric,
            COUNT(*) as value
        FROM keywords_all
        UNION ALL
        SELECT
            'Total Volume',
            SUM(search_volume)
        FROM keywords_all
        UNION ALL
        SELECT
            'Avg Volume',
            CAST(AVG(search_volume) as INTEGER)
        FROM keywords_all
    ) TO 'summary.csv' (HEADER)
""")

# Top 200 non-brand opportunities
con.execute("""
    COPY (
        SELECT
            topic,
            platform,
            keyword_phrase,
            search_volume,
            cpc,
            modifier_type
        FROM keywords_all
        WHERE topic NOT IN ('neothink', 'mark-hamilton', 'neothink-society')
            AND search_volume >= 100
        ORDER BY search_volume DESC
        LIMIT 200
    ) TO 'top-200-nonbrand.csv' (HEADER)
""")

# Brand keywords
con.execute("""
    COPY (
        SELECT * FROM keywords_all
        WHERE topic IN ('neothink', 'mark-hamilton', 'neothink-society')
        ORDER BY search_volume DESC
    ) TO 'brand-keywords.csv' (HEADER)
""")

# Question opportunities
con.execute("""
    COPY (
        SELECT
            topic,
            keyword_phrase,
            search_volume,
            platform,
            modifier_type
        FROM keywords_all
        WHERE modifier_type = 'Questions'
            AND search_volume >= 10
            AND topic NOT IN ('neothink', 'mark-hamilton', 'neothink-society')
        ORDER BY search_volume DESC
        LIMIT 100
    ) TO 'top-100-questions.csv' (HEADER)
""")

# Topic analysis
con.execute("""
    COPY (
        SELECT
            topic,
            platform,
            COUNT(*) as keyword_count,
            SUM(search_volume) as total_volume,
            CAST(AVG(search_volume) as INTEGER) as avg_volume,
            MAX(search_volume) as max_volume
        FROM keywords_all
        GROUP BY topic, platform
        ORDER BY total_volume DESC
    ) TO 'topic-platform-analysis.csv' (HEADER)
""")

# Commercial intent keywords
con.execute("""
    COPY (
        SELECT
            topic,
            keyword_phrase,
            search_volume,
            cpc,
            platform
        FROM keywords_all
        WHERE (
            LOWER(keyword_phrase) LIKE '%course%'
            OR LOWER(keyword_phrase) LIKE '%training%'
            OR LOWER(keyword_phrase) LIKE '%program%'
            OR LOWER(keyword_phrase) LIKE '%book%'
        )
        AND search_volume >= 50
        AND topic NOT IN ('neothink', 'mark-hamilton', 'neothink-society')
        ORDER BY search_volume DESC
        LIMIT 100
    ) TO 'commercial-intent.csv' (HEADER)
""")

# High relevance keywords for Neothink philosophy
con.execute("""
    COPY (
        SELECT
            topic,
            keyword_phrase,
            search_volume,
            platform,
            CASE
                WHEN LOWER(keyword_phrase) LIKE '%consciousness%' OR LOWER(keyword_phrase) LIKE '%thinking%' THEN 5
                WHEN LOWER(keyword_phrase) LIKE '%philosophy%' OR LOWER(keyword_phrase) LIKE '%growth%' THEN 4
                WHEN LOWER(keyword_phrase) LIKE '%success%' OR LOWER(keyword_phrase) LIKE '%wealth%' THEN 3
                ELSE 2
            END as relevance_score
        FROM keywords_all
        WHERE topic NOT IN ('neothink', 'mark-hamilton', 'neothink-society')
            AND search_volume >= 100
            AND (
                LOWER(keyword_phrase) LIKE '%consciousness%'
                OR LOWER(keyword_phrase) LIKE '%thinking%'
                OR LOWER(keyword_phrase) LIKE '%philosophy%'
                OR LOWER(keyword_phrase) LIKE '%growth%'
            )
        ORDER BY relevance_score DESC, search_volume DESC
        LIMIT 100
    ) TO 'high-relevance-keywords.csv' (HEADER)
""")

print("\n✅ Analysis complete! Generated reports:")
print("  - summary.csv")
print("  - top-200-nonbrand.csv")
print("  - brand-keywords.csv")
print("  - top-100-questions.csv")
print("  - topic-platform-analysis.csv")
print("  - commercial-intent.csv")
print("  - high-relevance-keywords.csv")

con.close()
