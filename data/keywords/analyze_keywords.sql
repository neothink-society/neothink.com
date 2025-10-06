-- Keyword Research Analysis for Neothink.com
-- Analyzing 20 keyword research files across Google, YouTube, TikTok, Instagram
-- Date: October 6, 2025

-- ============================================================================
-- PART 1: DATA LOADING
-- ============================================================================

-- Branded Keywords (Google)
CREATE OR REPLACE TABLE kw_neothink_google AS
SELECT *, 'neothink' as topic, 'google' as platform, 'branded' as category
FROM read_csv_auto('keyword-neothink-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_neothink_society_google AS
SELECT *, 'neothink-society' as topic, 'google' as platform, 'branded' as category
FROM read_csv_auto('keyword-neothink-society-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_mark_hamilton_google AS
SELECT *, 'mark-hamilton' as topic, 'google' as platform, 'branded' as category
FROM read_csv_auto('keyword-mark-hamilton-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_neothink_youtube AS
SELECT *, 'neothink' as topic, 'youtube' as platform, 'branded' as category
FROM read_csv_auto('keyword-neothink-youtube.csv', skip=1, header=true);

-- Non-Branded Keywords (Google)
CREATE OR REPLACE TABLE kw_self_improvement_google AS
SELECT *, 'self-improvement' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-self-improvement-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_entrepreneurship_google AS
SELECT *, 'entrepreneurship' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-entrepreneurship-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_happiness_google AS
SELECT *, 'happiness' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-happiness-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_intelligence_google AS
SELECT *, 'intelligence' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-intelligence-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_prosperity_google AS
SELECT *, 'prosperity' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-prosperity-google.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_longevity_google AS
SELECT *, 'longevity' as topic, 'google' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-longevity-google.csv', skip=1, header=true);

-- YouTube Keywords
CREATE OR REPLACE TABLE kw_self_improvement_youtube AS
SELECT *, 'self-improvement' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-self-improvement-youtube.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_entrepreneurship_youtube AS
SELECT *, 'entrepreneurship' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-entrepreneurship-youtube.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_happiness_youtube AS
SELECT *, 'happiness' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-happiness-youtube.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_intelligence_youtube AS
SELECT *, 'intelligence' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-intelligence-youtube.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_prosperity_youtube AS
SELECT *, 'prosperity' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-prosperity-youtube.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_longevity_youtube AS
SELECT *, 'longevity' as topic, 'youtube' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-longevity-youtube.csv', skip=1, header=true);

-- TikTok Keywords
CREATE OR REPLACE TABLE kw_self_improvement_tiktok AS
SELECT *, 'self-improvement' as topic, 'tiktok' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-self-improvement-tiktok.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_entrepreneurship_tiktok AS
SELECT *, 'entrepreneurship' as topic, 'tiktok' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-entrepreneurship-tiktok.csv', skip=1, header=true);

CREATE OR REPLACE TABLE kw_intelligence_tiktok AS
SELECT *, 'intelligence' as topic, 'tiktok' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-intelligence-tiktok.csv', skip=1, header=true);

-- Instagram Keywords
CREATE OR REPLACE TABLE kw_intelligence_instagram AS
SELECT *, 'intelligence' as topic, 'instagram' as platform, 'non-branded' as category
FROM read_csv_auto('keyword-intelligence-instagram.csv', skip=1, header=true);

-- ============================================================================
-- PART 2: UNIFIED KEYWORD DATABASE
-- ============================================================================

CREATE OR REPLACE TABLE all_keywords AS
SELECT * FROM kw_neothink_google
UNION ALL SELECT * FROM kw_neothink_society_google
UNION ALL SELECT * FROM kw_mark_hamilton_google
UNION ALL SELECT * FROM kw_neothink_youtube
UNION ALL SELECT * FROM kw_self_improvement_google
UNION ALL SELECT * FROM kw_entrepreneurship_google
UNION ALL SELECT * FROM kw_happiness_google
UNION ALL SELECT * FROM kw_intelligence_google
UNION ALL SELECT * FROM kw_prosperity_google
UNION ALL SELECT * FROM kw_longevity_google
UNION ALL SELECT * FROM kw_self_improvement_youtube
UNION ALL SELECT * FROM kw_entrepreneurship_youtube
UNION ALL SELECT * FROM kw_happiness_youtube
UNION ALL SELECT * FROM kw_intelligence_youtube
UNION ALL SELECT * FROM kw_prosperity_youtube
UNION ALL SELECT * FROM kw_longevity_youtube
UNION ALL SELECT * FROM kw_self_improvement_tiktok
UNION ALL SELECT * FROM kw_entrepreneurship_tiktok
UNION ALL SELECT * FROM kw_intelligence_tiktok
UNION ALL SELECT * FROM kw_intelligence_instagram;

-- ============================================================================
-- PART 3: ANALYSIS QUERIES
-- ============================================================================

SELECT '
========================================
KEYWORD DATABASE SUMMARY
========================================' as section;

SELECT
    COUNT(*) as total_keywords,
    COUNT(DISTINCT topic) as unique_topics,
    COUNT(DISTINCT platform) as unique_platforms,
    SUM(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE 0 END) as total_search_volume
FROM all_keywords;

SELECT '
========================================
KEYWORDS BY PLATFORM
========================================' as section;

SELECT
    platform,
    COUNT(*) as keyword_count,
    SUM(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE 0 END) as total_search_volume,
    ROUND(AVG(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE NULL END), 0) as avg_search_volume
FROM all_keywords
GROUP BY platform
ORDER BY keyword_count DESC;

SELECT '
========================================
KEYWORDS BY TOPIC
========================================' as section;

SELECT
    topic,
    platform,
    COUNT(*) as keyword_count,
    SUM(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE 0 END) as total_search_volume
FROM all_keywords
GROUP BY topic, platform
ORDER BY total_search_volume DESC;

SELECT '
========================================
BRANDED VS NON-BRANDED COMPARISON
========================================' as section;

SELECT
    category,
    COUNT(*) as keyword_count,
    SUM(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE 0 END) as total_search_volume,
    ROUND(AVG(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE NULL END), 0) as avg_search_volume
FROM all_keywords
GROUP BY category
ORDER BY total_search_volume DESC;

SELECT '
========================================
TOP 50 KEYWORDS BY SEARCH VOLUME (ALL PLATFORMS)
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    platform,
    category,
    "Search Volume" as search_volume,
    "Cost Per Click" as cpc
FROM all_keywords
WHERE "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) IS NOT NULL
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 50;

SELECT '
========================================
HIGH VOLUME NON-BRANDED KEYWORDS (Google)
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    "Search Volume" as search_volume,
    "Cost Per Click" as cpc,
    "Modifier Type" as type
FROM all_keywords
WHERE platform = 'google'
    AND category = 'non-branded'
    AND "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) > 1000
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 50;

SELECT '
========================================
QUESTION-BASED KEYWORDS (All Platforms)
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    platform,
    "Search Volume" as search_volume,
    "Cost Per Click" as cpc
FROM all_keywords
WHERE "Modifier Type" = 'Questions'
    AND "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) > 10
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 50;

SELECT '
========================================
LOW COMPETITION HIGH VOLUME OPPORTUNITIES
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    platform,
    "Search Volume" as search_volume,
    "Cost Per Click" as cpc
FROM all_keywords
WHERE "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) > 500
    AND ("Cost Per Click" = '0.0' OR "Cost Per Click" = '0' OR "Cost Per Click" = '-')
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 50;

SELECT '
========================================
BRANDED KEYWORD PERFORMANCE
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    platform,
    "Search Volume" as search_volume,
    "Cost Per Click" as cpc
FROM all_keywords
WHERE category = 'branded'
    AND "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 30;

SELECT '
========================================
YOUTUBE CONTENT OPPORTUNITIES
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    "Search Volume" as search_volume,
    "Modifier Type" as type
FROM all_keywords
WHERE platform = 'youtube'
    AND "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) > 100
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 50;

SELECT '
========================================
TIKTOK CONTENT OPPORTUNITIES
========================================' as section;

SELECT
    Suggestion as keyword,
    topic,
    "Search Volume" as search_volume
FROM all_keywords
WHERE platform = 'tiktok'
    AND "Search Volume" != '-'
    AND "Search Volume" IS NOT NULL
    AND TRY_CAST("Search Volume" AS INTEGER) > 100
ORDER BY TRY_CAST("Search Volume" AS INTEGER) DESC
LIMIT 30;

SELECT '
========================================
TOPIC COVERAGE SUMMARY
========================================' as section;

SELECT
    topic,
    category,
    COUNT(*) as keyword_variations,
    SUM(CASE WHEN "Search Volume" != '-' AND "Search Volume" IS NOT NULL THEN TRY_CAST("Search Volume" AS INTEGER) ELSE 0 END) as total_market_volume,
    COUNT(DISTINCT platform) as platform_coverage
FROM all_keywords
GROUP BY topic, category
ORDER BY total_market_volume DESC;
