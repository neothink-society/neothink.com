-- Google Search Console Analysis for Neothink.com
-- Date: 2025-09-26
-- Analyzing Core Web Vitals, Coverage, and Performance data

-- ============================================================================
-- 1. CORE WEB VITALS ANALYSIS (Desktop)
-- ============================================================================

CREATE OR REPLACE TABLE cwv_desktop AS
SELECT * FROM read_csv_auto('gsc-neothink.com-core-web-vitals-desktop-2025-09-26/Table.csv');

SELECT 'CORE WEB VITALS (Desktop)' as analysis_section;
SELECT * FROM cwv_desktop;

-- ============================================================================
-- 2. COVERAGE ANALYSIS
-- ============================================================================

CREATE OR REPLACE TABLE coverage_critical AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Coverage-2025-09-26/Critical issues.csv');

CREATE OR REPLACE TABLE coverage_noncritical AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Coverage-2025-09-26/Non-critical issues.csv');

SELECT '
========================================
COVERAGE - CRITICAL ISSUES
========================================' as section;
SELECT * FROM coverage_critical ORDER BY Pages DESC;

SELECT '
========================================
COVERAGE - NON-CRITICAL ISSUES
========================================' as section;
SELECT * FROM coverage_noncritical ORDER BY Pages DESC;

-- Coverage Summary
SELECT '
========================================
COVERAGE SUMMARY
========================================' as section;
SELECT
    'Critical Issues' as issue_type,
    SUM(Pages) as total_pages,
    COUNT(*) as issue_count
FROM coverage_critical
UNION ALL
SELECT
    'Non-Critical Issues' as issue_type,
    SUM(Pages) as total_pages,
    COUNT(*) as issue_count
FROM coverage_noncritical;

-- ============================================================================
-- 3. PERFORMANCE ANALYSIS - PAGES
-- ============================================================================

CREATE OR REPLACE TABLE performance_pages AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Performance-on-Search-2025-09-26/Pages.csv');

SELECT '
========================================
TOP 20 PERFORMING PAGES
========================================' as section;
SELECT
    "Top pages",
    Clicks,
    Impressions,
    CTR,
    Position,
    ROUND(CAST(Clicks AS DOUBLE) / NULLIF(CAST(Impressions AS DOUBLE), 0) * 100, 2) as calculated_ctr
FROM performance_pages
WHERE Clicks > 0
ORDER BY Clicks DESC
LIMIT 20;

SELECT '
========================================
HIGH IMPRESSION LOW CLICK PAGES (Opportunity)
========================================' as section;
SELECT
    "Top pages",
    Clicks,
    Impressions,
    CTR,
    Position
FROM performance_pages
WHERE Impressions > 100
    AND Clicks < 10
ORDER BY Impressions DESC
LIMIT 20;

SELECT '
========================================
PAGES WITH EXCELLENT CTR (>5%)
========================================' as section;
SELECT
    "Top pages",
    Clicks,
    Impressions,
    CTR,
    Position
FROM performance_pages
WHERE CAST(REPLACE(CTR, '%', '') AS DOUBLE) > 5.0
ORDER BY CAST(REPLACE(CTR, '%', '') AS DOUBLE) DESC
LIMIT 20;

-- ============================================================================
-- 4. PERFORMANCE ANALYSIS - QUERIES
-- ============================================================================

CREATE OR REPLACE TABLE performance_queries AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Performance-on-Search-2025-09-26/Queries.csv');

SELECT '
========================================
TOP 20 PERFORMING QUERIES
========================================' as section;
SELECT
    "Top queries",
    Clicks,
    Impressions,
    CTR,
    Position
FROM performance_queries
WHERE Clicks > 0
ORDER BY Clicks DESC
LIMIT 20;

SELECT '
========================================
HIGH VOLUME ZERO CLICK QUERIES (Major Opportunity)
========================================' as section;
SELECT
    "Top queries",
    Clicks,
    Impressions,
    CTR,
    Position
FROM performance_queries
WHERE Impressions > 50
    AND Clicks = 0
ORDER BY Impressions DESC
LIMIT 20;

SELECT '
========================================
BRANDED VS NON-BRANDED PERFORMANCE
========================================' as section;
SELECT
    CASE
        WHEN LOWER("Top queries") LIKE '%neothink%'
            OR LOWER("Top queries") LIKE '%neo think%'
            OR LOWER("Top queries") LIKE '%mark hamilton%'
            THEN 'Branded'
        ELSE 'Non-Branded'
    END as query_type,
    COUNT(*) as query_count,
    SUM(Clicks) as total_clicks,
    SUM(Impressions) as total_impressions,
    ROUND(AVG(CAST(REPLACE(CTR, '%', '') AS DOUBLE)), 2) as avg_ctr,
    ROUND(AVG(Position), 2) as avg_position
FROM performance_queries
GROUP BY query_type;

-- ============================================================================
-- 5. PERFORMANCE ANALYSIS - DEVICES
-- ============================================================================

CREATE OR REPLACE TABLE performance_devices AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Performance-on-Search-2025-09-26/Devices.csv');

SELECT '
========================================
DEVICE BREAKDOWN
========================================' as section;
SELECT * FROM performance_devices ORDER BY Clicks DESC;

-- ============================================================================
-- 6. PERFORMANCE ANALYSIS - COUNTRIES
-- ============================================================================

CREATE OR REPLACE TABLE performance_countries AS
SELECT * FROM read_csv_auto('gsc-neothink.com-Performance-on-Search-2025-09-26/Countries.csv');

SELECT '
========================================
TOP 20 COUNTRIES BY TRAFFIC
========================================' as section;
SELECT * FROM performance_countries ORDER BY Clicks DESC LIMIT 20;

-- ============================================================================
-- 7. KEY METRICS SUMMARY
-- ============================================================================

SELECT '
========================================
OVERALL PERFORMANCE SUMMARY
========================================' as section;
SELECT
    SUM(Clicks) as total_clicks,
    SUM(Impressions) as total_impressions,
    ROUND(SUM(Clicks) * 100.0 / SUM(Impressions), 2) as overall_ctr,
    ROUND(AVG(Position), 2) as avg_position
FROM performance_pages;

SELECT '
========================================
QUERY PERFORMANCE TIERS
========================================' as section;
SELECT
    CASE
        WHEN Position <= 3 THEN 'Top 3'
        WHEN Position <= 10 THEN 'Top 10'
        WHEN Position <= 20 THEN 'Top 20'
        ELSE 'Beyond 20'
    END as position_tier,
    COUNT(*) as query_count,
    SUM(Clicks) as total_clicks,
    SUM(Impressions) as total_impressions,
    ROUND(AVG(CAST(REPLACE(CTR, '%', '') AS DOUBLE)), 2) as avg_ctr
FROM performance_queries
GROUP BY position_tier
ORDER BY
    CASE
        WHEN position_tier = 'Top 3' THEN 1
        WHEN position_tier = 'Top 10' THEN 2
        WHEN position_tier = 'Top 20' THEN 3
        ELSE 4
    END;

SELECT '
========================================
PAGE PERFORMANCE DISTRIBUTION
========================================' as section;
SELECT
    CASE
        WHEN Clicks > 100 THEN '100+ clicks'
        WHEN Clicks > 50 THEN '50-100 clicks'
        WHEN Clicks > 10 THEN '10-50 clicks'
        WHEN Clicks > 0 THEN '1-10 clicks'
        ELSE 'Zero clicks'
    END as click_tier,
    COUNT(*) as page_count,
    SUM(Impressions) as total_impressions
FROM performance_pages
GROUP BY click_tier
ORDER BY
    CASE
        WHEN click_tier = '100+ clicks' THEN 1
        WHEN click_tier = '50-100 clicks' THEN 2
        WHEN click_tier = '10-50 clicks' THEN 3
        WHEN click_tier = '1-10 clicks' THEN 4
        ELSE 5
    END;
