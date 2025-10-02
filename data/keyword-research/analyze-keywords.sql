-- DuckDB Keyword Research Analysis
-- Analyzes 43,588 keywords across 20 CSV files for SEO intelligence
-- Created: October 2, 2025

-- Import all keyword research data with union_by_name to handle schema variations
CREATE TABLE keywords_raw AS
SELECT * FROM read_csv_auto('/Users/avolve/Downloads/keyword-*.csv',
    header=true,
    ignore_errors=true,
    union_by_name=true,
    filename=true);

-- Clean and standardize data
CREATE TABLE keywords_clean AS
SELECT
    REGEXP_EXTRACT(filename, 'keyword-([^-]+)-', 1) as topic,
    REGEXP_EXTRACT(filename, '-([^.]+)\.csv', 1) as platform,
    "Modifier Type" as modifier_type,
    Modifier as modifier,
    Suggestion as keyword_phrase,
    Language as language,
    Region as region,
    Keyword as seed_keyword,
    TRY_CAST("Search Volume" as INTEGER) as search_volume,
    TRY_CAST("Cost Per Click" as DECIMAL(10,2)) as cpc
FROM keywords_raw
WHERE "Search Volume" IS NOT NULL
    AND "Search Volume" != '-'
    AND "Search Volume" != ''
    AND TRY_CAST("Search Volume" as INTEGER) > 0;

-- Brand Keywords Analysis
CREATE TABLE brand_keywords AS
SELECT
    topic,
    platform,
    keyword_phrase,
    search_volume,
    cpc,
    CASE
        WHEN LOWER(keyword_phrase) LIKE '%neothink%' THEN 'neothink'
        WHEN LOWER(keyword_phrase) LIKE '%mark hamilton%' THEN 'mark-hamilton'
        ELSE 'other'
    END as brand_type
FROM keywords_clean
WHERE topic IN ('neothink', 'mark-hamilton', 'neothink-society');

-- Non-Brand Opportunity Keywords
CREATE TABLE nonbrand_opportunities AS
SELECT
    topic,
    platform,
    modifier_type,
    keyword_phrase,
    search_volume,
    cpc,
    -- Intent classification
    CASE
        WHEN modifier_type = 'Questions' THEN 'informational'
        WHEN LOWER(keyword_phrase) LIKE '%how to%' THEN 'informational'
        WHEN LOWER(keyword_phrase) LIKE '%best%' THEN 'commercial'
        WHEN LOWER(keyword_phrase) LIKE '%buy%' OR LOWER(keyword_phrase) LIKE '%course%' THEN 'transactional'
        ELSE 'navigational'
    END as search_intent,
    -- Neothink relevance score
    CASE
        WHEN LOWER(keyword_phrase) LIKE '%consciousness%' OR LOWER(keyword_phrase) LIKE '%thinking%' THEN 5
        WHEN LOWER(keyword_phrase) LIKE '%philosophy%' OR LOWER(keyword_phrase) LIKE '%growth%' THEN 4
        WHEN LOWER(keyword_phrase) LIKE '%success%' OR LOWER(keyword_phrase) LIKE '%wealth%' THEN 3
        WHEN LOWER(keyword_phrase) LIKE '%improvement%' OR LOWER(keyword_phrase) LIKE '%development%' THEN 3
        ELSE 2
    END as relevance_score
FROM keywords_clean
WHERE topic NOT IN ('neothink', 'mark-hamilton', 'neothink-society');

-- Top Opportunities by Topic (High Volume + High Relevance)
CREATE TABLE top_opportunities_by_topic AS
SELECT
    topic,
    platform,
    keyword_phrase,
    search_volume,
    cpc,
    search_intent,
    relevance_score,
    (search_volume * relevance_score) as opportunity_score
FROM nonbrand_opportunities
WHERE search_volume >= 100
    AND relevance_score >= 3
ORDER BY opportunity_score DESC;

-- Question-Based Content Opportunities
CREATE TABLE question_opportunities AS
SELECT
    topic,
    keyword_phrase,
    search_volume,
    relevance_score
FROM nonbrand_opportunities
WHERE modifier_type = 'Questions'
    AND search_volume >= 10
ORDER BY search_volume DESC, relevance_score DESC;

-- Summary Statistics
CREATE TABLE keyword_summary AS
SELECT
    'Total Keywords' as metric,
    COUNT(*) as value,
    NULL as breakdown
FROM keywords_clean
UNION ALL
SELECT
    'Total Search Volume' as metric,
    SUM(search_volume) as value,
    NULL as breakdown
FROM keywords_clean
UNION ALL
SELECT
    'Brand Keywords' as metric,
    COUNT(*) as value,
    STRING_AGG(DISTINCT topic, ', ') as breakdown
FROM brand_keywords
UNION ALL
SELECT
    'Non-Brand Keywords' as metric,
    COUNT(*) as value,
    STRING_AGG(DISTINCT topic, ', ') as breakdown
FROM nonbrand_opportunities
UNION ALL
SELECT
    'High-Value Opportunities (>100 vol)' as metric,
    COUNT(*) as value,
    NULL as breakdown
FROM top_opportunities_by_topic;

-- Export results
COPY keyword_summary TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/summary-statistics.csv' (HEADER, DELIMITER ',');

COPY (SELECT * FROM top_opportunities_by_topic LIMIT 200)
TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/top-200-opportunities.csv' (HEADER, DELIMITER ',');

COPY (SELECT * FROM question_opportunities LIMIT 100)
TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/top-100-questions.csv' (HEADER, DELIMITER ',');

COPY (
    SELECT
        topic,
        COUNT(*) as total_keywords,
        SUM(search_volume) as total_volume,
        AVG(search_volume) as avg_volume,
        MAX(search_volume) as max_volume,
        AVG(cpc) as avg_cpc
    FROM keywords_clean
    GROUP BY topic
    ORDER BY total_volume DESC
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/topic-analysis.csv' (HEADER, DELIMITER ',');

COPY (
    SELECT
        platform,
        topic,
        COUNT(*) as keyword_count,
        SUM(search_volume) as total_volume
    FROM keywords_clean
    GROUP BY platform, topic
    ORDER BY total_volume DESC
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/platform-breakdown.csv' (HEADER, DELIMITER ',');

-- High-intent commercial keywords for Neothink alignment
COPY (
    SELECT
        keyword_phrase,
        topic,
        platform,
        search_volume,
        cpc,
        relevance_score
    FROM nonbrand_opportunities
    WHERE (LOWER(keyword_phrase) LIKE '%course%'
        OR LOWER(keyword_phrase) LIKE '%program%'
        OR LOWER(keyword_phrase) LIKE '%training%'
        OR LOWER(keyword_phrase) LIKE '%book%')
        AND search_volume >= 50
    ORDER BY search_volume DESC
    LIMIT 100
) TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/commercial-opportunities.csv' (HEADER, DELIMITER ',');

-- Brand keyword detailed analysis
COPY (SELECT * FROM brand_keywords ORDER BY search_volume DESC)
TO '/Users/avolve/dev/active/neothink/neothink-com/data/keyword-research/brand-keywords-full.csv' (HEADER, DELIMITER ',');
