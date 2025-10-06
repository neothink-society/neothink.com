-- Google Analytics 4 Analysis for Neothink.com
-- Date: 2025-09-26
-- Analyzing Landing Pages, Traffic Acquisition, User Acquisition, Queries, and Engagement

-- ============================================================================
-- 1. LANDING PAGE ANALYSIS
-- ============================================================================

CREATE OR REPLACE TABLE landing_pages AS
SELECT * FROM read_csv_auto('ga4-neothink-com-landing-page.csv', header=true, skip=10);

SELECT '
========================================
TOP 20 LANDING PAGES BY SESSIONS
========================================' as section;
SELECT
    "Landing page",
    Sessions,
    "Active users",
    "New users",
    "Average engagement time per session" as avg_engagement,
    "Key events",
    "Session key event rate" as conversion_rate
FROM landing_pages
ORDER BY Sessions DESC
LIMIT 20;

SELECT '
========================================
HIGHEST ENGAGEMENT LANDING PAGES
========================================' as section;
SELECT
    "Landing page",
    Sessions,
    "Active users",
    "Average engagement time per session" as avg_engagement,
    "Key events"
FROM landing_pages
WHERE Sessions > 10
ORDER BY CAST("Average engagement time per session" AS DOUBLE) DESC
LIMIT 20;

SELECT '
========================================
LANDING PAGE CONVERSION ANALYSIS
========================================' as section;
SELECT
    "Landing page",
    Sessions,
    "Key events",
    "Session key event rate" as conversion_rate,
    "Average engagement time per session" as avg_engagement
FROM landing_pages
WHERE Sessions > 20
    AND CAST("Session key event rate" AS DOUBLE) > 0
ORDER BY CAST("Session key event rate" AS DOUBLE) DESC
LIMIT 20;

-- ============================================================================
-- 2. ORGANIC SEARCH QUERIES ANALYSIS
-- ============================================================================

CREATE OR REPLACE TABLE organic_queries AS
SELECT * FROM read_csv_auto('ga4-neothink-com-queries-organic-google-search.csv', header=true, skip=10);

SELECT '
========================================
TOP 20 ORGANIC SEARCH QUERIES
========================================' as section;
SELECT
    "Organic Google Search query" as query,
    "Organic Google Search clicks" as clicks,
    "Organic Google Search impressions" as impressions,
    ROUND(CAST("Organic Google Search click through rate" AS DOUBLE) * 100, 2) as ctr_percent,
    ROUND(CAST("Organic Google Search average position" AS DOUBLE), 2) as avg_position
FROM organic_queries
WHERE "Organic Google Search clicks" > 0
ORDER BY "Organic Google Search clicks" DESC
LIMIT 20;

SELECT '
========================================
BRANDED VS NON-BRANDED QUERIES (GA4)
========================================' as section;
SELECT
    CASE
        WHEN LOWER("Organic Google Search query") LIKE '%neothink%'
            OR LOWER("Organic Google Search query") LIKE '%neo think%'
            OR LOWER("Organic Google Search query") LIKE '%mark hamilton%'
            THEN 'Branded'
        ELSE 'Non-Branded'
    END as query_type,
    COUNT(*) as query_count,
    SUM("Organic Google Search clicks") as total_clicks,
    SUM("Organic Google Search impressions") as total_impressions,
    ROUND(AVG(CAST("Organic Google Search click through rate" AS DOUBLE)) * 100, 2) as avg_ctr,
    ROUND(AVG(CAST("Organic Google Search average position" AS DOUBLE)), 2) as avg_position
FROM organic_queries
GROUP BY query_type;

SELECT '
========================================
HIGH IMPRESSION ZERO CLICK QUERIES (GA4)
========================================' as section;
SELECT
    "Organic Google Search query" as query,
    "Organic Google Search clicks" as clicks,
    "Organic Google Search impressions" as impressions,
    ROUND(CAST("Organic Google Search average position" AS DOUBLE), 2) as avg_position
FROM organic_queries
WHERE "Organic Google Search impressions" > 50
    AND "Organic Google Search clicks" = 0
ORDER BY "Organic Google Search impressions" DESC
LIMIT 20;

-- ============================================================================
-- 3. TRAFFIC ACQUISITION ANALYSIS
-- ============================================================================

CREATE OR REPLACE TABLE traffic_acquisition AS
SELECT * FROM read_csv_auto('ga4-neothink-com-traffic-acquisition.csv', header=true, skip=10);

SELECT '
========================================
TRAFFIC SOURCES BY SESSION COUNT
========================================' as section;
SELECT
    "Session primary channel group (Default Channel Group)" as channel,
    Sessions,
    "Engaged sessions",
    ROUND(CAST("Engagement rate" AS DOUBLE) * 100, 2) as engagement_rate_pct,
    ROUND(CAST("Average engagement time per session" AS DOUBLE), 2) as avg_engagement_time,
    "Key events",
    ROUND(CAST("Session key event rate" AS DOUBLE) * 100, 2) as conversion_rate_pct
FROM traffic_acquisition
ORDER BY Sessions DESC;

SELECT '
========================================
CHANNEL PERFORMANCE COMPARISON
========================================' as section;
SELECT
    "Session primary channel group (Default Channel Group)" as channel,
    Sessions,
    ROUND(CAST("Engagement rate" AS DOUBLE) * 100, 2) as engagement_rate_pct,
    ROUND(CAST("Average engagement time per session" AS DOUBLE), 2) as avg_engagement_time,
    ROUND(CAST("Events per session" AS DOUBLE), 2) as events_per_session,
    ROUND(CAST("Session key event rate" AS DOUBLE) * 100, 2) as conversion_rate_pct
FROM traffic_acquisition
ORDER BY Sessions DESC;

-- ============================================================================
-- 4. USER ACQUISITION ANALYSIS
-- ============================================================================

CREATE OR REPLACE TABLE user_acquisition AS
SELECT * FROM read_csv_auto('ga4-neothink-com-user-acquisition.csv', header=true, skip=10);

SELECT '
========================================
USER ACQUISITION BY CHANNEL
========================================' as section;
SELECT
    "First user primary channel group (Default Channel Group)" as channel,
    "Total users",
    "New users",
    "Returning users",
    ROUND(CAST("Average engagement time per active user" AS DOUBLE), 2) as avg_engagement_time,
    ROUND(CAST("Engaged sessions per active user" AS DOUBLE), 2) as engaged_sessions_per_user,
    "Key events",
    ROUND(CAST("User key event rate" AS DOUBLE) * 100, 2) as user_conversion_rate_pct
FROM user_acquisition
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
FROM user_acquisition;

-- ============================================================================
-- 5. KEY METRICS SUMMARY
-- ============================================================================

SELECT '
========================================
OVERALL TRAFFIC SUMMARY
========================================' as section;
SELECT
    SUM(Sessions) as total_sessions,
    SUM("Engaged sessions") as total_engaged_sessions,
    ROUND(AVG(CAST("Engagement rate" AS DOUBLE)) * 100, 2) as avg_engagement_rate,
    SUM("Key events") as total_key_events
FROM traffic_acquisition;

SELECT '
========================================
LANDING PAGE SUMMARY
========================================' as section;
SELECT
    COUNT(*) as total_landing_pages,
    SUM(Sessions) as total_sessions,
    SUM("Active users") as total_active_users,
    SUM("New users") as total_new_users,
    SUM("Key events") as total_key_events,
    ROUND(AVG(CAST("Average engagement time per session" AS DOUBLE)), 2) as avg_engagement_time
FROM landing_pages;

SELECT '
========================================
CONVERSION FUNNEL ANALYSIS
========================================' as section;
SELECT
    'Traffic Acquisition' as stage,
    SUM(Sessions) as sessions,
    SUM("Key events") as key_events,
    ROUND(SUM("Key events") * 100.0 / NULLIF(SUM(Sessions), 0), 2) as conversion_rate_pct
FROM traffic_acquisition
UNION ALL
SELECT
    'Landing Pages' as stage,
    SUM(Sessions) as sessions,
    SUM("Key events") as key_events,
    ROUND(SUM("Key events") * 100.0 / NULLIF(SUM(Sessions), 0), 2) as conversion_rate_pct
FROM landing_pages;

SELECT '
========================================
TOP CONVERSION LANDING PAGES
========================================' as section;
SELECT
    "Landing page",
    Sessions,
    "Key events",
    ROUND(CAST("Session key event rate" AS DOUBLE) * 100, 2) as conversion_rate_pct,
    ROUND(CAST("Average engagement time per session" AS DOUBLE), 2) as avg_engagement_time
FROM landing_pages
WHERE Sessions > 50
    AND "Key events" > 100
ORDER BY "Key events" DESC
LIMIT 15;

SELECT '
========================================
PAID VS ORGANIC PERFORMANCE
========================================' as section;
SELECT
    CASE
        WHEN "Session primary channel group (Default Channel Group)" IN ('Paid Search', 'Cross-network') THEN 'Paid'
        WHEN "Session primary channel group (Default Channel Group)" IN ('Organic Search', 'Organic Social', 'Organic Video') THEN 'Organic'
        ELSE 'Other'
    END as traffic_type,
    SUM(Sessions) as total_sessions,
    SUM("Key events") as total_key_events,
    ROUND(AVG(CAST("Engagement rate" AS DOUBLE)) * 100, 2) as avg_engagement_rate,
    ROUND(AVG(CAST("Average engagement time per session" AS DOUBLE)), 2) as avg_engagement_time,
    ROUND(SUM("Key events") * 100.0 / NULLIF(SUM(Sessions), 0), 2) as conversion_rate_pct
FROM traffic_acquisition
GROUP BY traffic_type
ORDER BY total_sessions DESC;
