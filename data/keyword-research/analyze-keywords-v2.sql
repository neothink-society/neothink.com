-- DuckDB Keyword Research Analysis V2
-- Analyzes 43,588 keywords across 20 CSV files for SEO intelligence
-- Created: October 2, 2025

-- Import all CSVs individually (skip first title row)
CREATE TABLE keywords_all AS
SELECT
    'neothink' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-neothink-google.csv', skip=1)
UNION ALL
SELECT
    'mark-hamilton' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-mark-hamilton-google.csv', skip=1)
UNION ALL
SELECT
    'self-improvement' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-self-improvement-google.csv', skip=1)
UNION ALL
SELECT
    'entrepreneurship' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-entrepreneurship-google.csv', skip=1)
UNION ALL
SELECT
    'happiness' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-happiness-google.csv', skip=1)
UNION ALL
SELECT
    'intelligence' as topic,
    'google' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-intelligence-google.csv', skip=1)
UNION ALL
SELECT
    'neothink' as topic,
    'youtube' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-neothink-youtube.csv', skip=1)
UNION ALL
SELECT
    'happiness' as topic,
    'youtube' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-happiness-youtube.csv', skip=1)
UNION ALL
SELECT
    'intelligence' as topic,
    'youtube' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-intelligence-youtube.csv', skip=1)
UNION ALL
SELECT
    'intelligence' as topic,
    'tiktok' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-intelligence-tiktok.csv', skip=1)
UNION ALL
SELECT
    'entrepreneurship' as topic,
    'tiktok' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-entrepreneurship-tiktok.csv', skip=1)
UNION ALL
SELECT
    'self-improvement' as topic,
    'tiktok' as platform,
    * EXCLUDE filename
FROM read_csv_auto('/Users/avolve/Downloads/keyword-self-improvement-tiktok.csv', skip=1);

-- Clean and type cast
CREATE TABLE keywords_clean AS
SELECT
    topic,
    platform,
    "Modifier Type" as modifier_type,
    Modifier as modifier,
    Suggestion as keyword_phrase,
    Language as language,
    Region as region,
    Keyword as seed_keyword,
    TRY_CAST("Search Volume" as INTEGER) as search_volume,
    TRY_CAST("Cost Per Click" as DECIMAL(10,2)) as cpc
FROM keywords_all
WHERE "Search Volume" IS NOT NULL
    AND "Search Volume" != '-'
    AND "Search Volume" != ''
    AND TRY_CAST("Search Volume" as INTEGER) > 0;

-- Summary statistics
COPY (
    SELECT
        'Total Analyzed Keywords' as metric,
        COUNT(*) as count,
        SUM(search_volume) as total_volume
    FROM keywords_clean
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/summary.csv' (HEADER);

-- Top 200 opportunities by volume
COPY (
    SELECT
        topic,
        platform,
        keyword_phrase,
        search_volume,
        cpc,
        modifier_type
    FROM keywords_clean
    WHERE topic NOT IN ('neothink', 'mark-hamilton')
        AND search_volume >= 100
    ORDER BY search_volume DESC
    LIMIT 200
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/top-200-nonbrand.csv' (HEADER);

-- Brand keywords
COPY (
    SELECT * FROM keywords_clean
    WHERE topic IN ('neothink', 'mark-hamilton')
    ORDER BY search_volume DESC
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/brand-keywords.csv' (HEADER);

-- Question keywords (high content opportunity)
COPY (
    SELECT
        topic,
        keyword_phrase,
        search_volume,
        platform
    FROM keywords_clean
    WHERE modifier_type = 'Questions'
        AND search_volume >= 10
        AND topic NOT IN ('neothink', 'mark-hamilton')
    ORDER BY search_volume DESC
    LIMIT 100
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/top-100-questions.csv' (HEADER);

-- Topic analysis
COPY (
    SELECT
        topic,
        platform,
        COUNT(*) as keyword_count,
        SUM(search_volume) as total_volume,
        AVG(search_volume) as avg_volume,
        MAX(search_volume) as max_volume
    FROM keywords_clean
    GROUP BY topic, platform
    ORDER BY total_volume DESC
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/topic-platform-analysis.csv' (HEADER);

-- High-value commercial intent
COPY (
    SELECT
        topic,
        keyword_phrase,
        search_volume,
        cpc,
        platform
    FROM keywords_clean
    WHERE (
        LOWER(keyword_phrase) LIKE '%course%'
        OR LOWER(keyword_phrase) LIKE '%training%'
        OR LOWER(keyword_phrase) LIKE '%program%'
        OR LOWER(keyword_phrase) LIKE '%book%'
    )
    AND search_volume >= 50
    AND topic NOT IN ('neothink', 'mark-hamilton')
    ORDER BY search_volume DESC
    LIMIT 100
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/commercial-intent.csv' (HEADER);
