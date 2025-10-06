-- Google Analytics 4 Analysis for Neothink.com
-- Date: 2025-09-26
-- Simplified analysis focusing on key metrics

-- ============================================================================
-- 1. LANDING PAGE ANALYSIS
-- ============================================================================

SELECT '
========================================
TOP 20 LANDING PAGES BY SESSIONS
========================================' as section;

SELECT * FROM read_csv_auto('ga4-neothink-com-landing-page.csv', skip=10, header=true)
ORDER BY Sessions DESC
LIMIT 20;

SELECT '
========================================
LANDING PAGE METRICS SUMMARY
========================================' as section;

SELECT
    COUNT(*) as total_landing_pages,
    SUM(Sessions) as total_sessions,
    SUM("Active users") as total_active_users,
    SUM("New users") as total_new_users,
    SUM("Key events") as total_key_events,
    ROUND(AVG("Average engagement time per session"), 2) as avg_engagement_time
FROM read_csv_auto('ga4-neothink-com-landing-page.csv', skip=10, header=true);

-- ============================================================================
-- 2. TRAFFIC ACQUISITION ANALYSIS
-- ============================================================================

SELECT '
========================================
TRAFFIC SOURCES BY SESSION COUNT
========================================' as section;

SELECT * FROM read_csv_auto('ga4-neothink-com-traffic-acquisition.csv', skip=10, header=true)
ORDER BY Sessions DESC;

-- ============================================================================
-- 3. USER ACQUISITION ANALYSIS
-- ============================================================================

SELECT '
========================================
USER ACQUISITION BY CHANNEL
========================================' as section;

SELECT * FROM read_csv_auto('ga4-neothink-com-user-acquisition.csv', skip=10, header=true)
ORDER BY "Total users" DESC;

SELECT '
========================================
NEW VS RETURNING USERS
========================================' as section;

SELECT
    SUM("New users") as total_new_users,
    SUM("Returning users") as total_returning_users,
    ROUND(SUM("New users") * 100.0 / NULLIF(SUM("Total users"), 0), 2) as new_user_pct,
    ROUND(SUM("Returning users") * 100.0 / NULLIF(SUM("Total users"), 0), 2) as returning_user_pct
FROM read_csv_auto('ga4-neothink-com-user-acquisition.csv', skip=10, header=true);

-- ============================================================================
-- 4. ORGANIC SEARCH QUERIES ANALYSIS
-- ============================================================================

SELECT '
========================================
TOP 20 ORGANIC SEARCH QUERIES
========================================' as section;

SELECT
    *,
    ROUND("Organic Google Search click through rate" * 100, 2) as ctr_percent
FROM read_csv_auto('ga4-neothink-com-queries-organic-google-search.csv', skip=10, header=true)
WHERE "Organic Google Search clicks" > 0
ORDER BY "Organic Google Search clicks" DESC
LIMIT 20;

SELECT '
========================================
ORGANIC QUERIES SUMMARY
========================================' as section;

SELECT
    COUNT(*) as total_queries,
    SUM("Organic Google Search clicks") as total_clicks,
    SUM("Organic Google Search impressions") as total_impressions,
    ROUND(AVG("Organic Google Search click through rate") * 100, 2) as avg_ctr_pct,
    ROUND(AVG("Organic Google Search average position"), 2) as avg_position
FROM read_csv_auto('ga4-neothink-com-queries-organic-google-search.csv', skip=10, header=true);
