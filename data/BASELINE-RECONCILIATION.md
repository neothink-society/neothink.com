# Baseline Metrics Reconciliation

**Purpose:** Resolve conflicting numbers across reports and establish single source of truth
**Last Updated:** October 6, 2025
**Status:** Official baseline - use these numbers for all strategic decisions

---

## 📊 Official Metrics (Use These)

### Traffic Baseline
- **Annual organic clicks:** 4,256 (SOURCE OF TRUTH)
- **Annual organic users:** 3,703
- **Monthly average:** 355 clicks, 309 users
- **Source:** data/metrics.csv (Sep 22, 2025 verified GA4/GSC export)

### Engagement & Quality
- **Engagement rate:** 94.48%
- **Organic engagement time:** 117.96s
- **Mobile CTR:** 16.3% (exceptional)
- **Desktop CTR:** 9.95%
- **Combined CTR:** 2.90%

### Revenue & Conversion
- **Annual organic revenue:** $13,757
- **Conversion rate:** 0.65% (direct attribution method)
- **Average order value:** $497
- **DO NOT USE:** GA4 conversion rates (broken - showing 94-100%)

### Brand Dependency
- **Official estimate:** 95% brand-dependent
- **Conservative approach:** Use 95% for planning
- **Non-branded traffic:** 5% (0.86% per GA4, but use 5% for conservative estimates)

### Content & Technical
- **Published content:** 91 pieces (32 pages + 42 posts + 17 podcasts)
- **Total URLs in ecosystem:** 143
- **Indexing issues:** 1 (Post ID 1782)

---

## 🔍 Why Numbers Differ Across Reports

### Click Count Variations

| Source | Clicks | Date | Explanation |
|--------|--------|------|-------------|
| **data/metrics.csv** | 4,256 | Sep 22, 2025 | ✅ Official baseline |
| GSC Analysis (Oct 6) | 4,309 | Oct 6, 2025 | +53 clicks (14 days more data) |
| Difference | 53 | — | Date range variation (acceptable) |

**Decision:** Use 4,256 as baseline for consistency. The 53-click difference is within normal variance and doesn't change strategy.

---

### Brand Dependency Variations

| Source | Percentage | Method | Explanation |
|--------|-----------|--------|-------------|
| **SEO Docs** | 95% | GSC query analysis | ✅ Official (conservative) |
| GA4 Report | 99% | Channel attribution | More aggressive estimate |
| GSC Analysis | 99% | Query classification | Matches GA4 |
| Difference | 4% | — | Methodology difference |

**Decision:** Use 95% as official metric (conservative approach). Reality is likely between 95-99%, but 95% is safer for planning.

**Why conservative matters:** If we're wrong and it's actually 99%, we'll exceed projections. If we claim 99% and it's only 95%, we'll underdeliver.

---

### Traffic Source Conflict (UNRESOLVED)

| Source | Finding | Status |
|--------|---------|--------|
| SEO Docs | 95% brand-dependent (organic search) | Based on GSC queries |
| GA4 Report | 49.2% referral traffic | Channel attribution |
| Status | **CONFLICTING DATA** | ⚠️ Week 1 investigation required |

**The mystery:** How can traffic be both 95% branded AND 49.2% referral?

**Possible explanations:**
1. Referral traffic IS branded (people clicking neothink links from other sites)
2. GA4 channel misconfiguration (direct traffic miscategorized as referral)
3. Referral traffic is spam/bots (needs filtering)
4. Different measurement scopes (GA4 = all traffic, SEO docs = organic only)

**Resolution required:** Week 1 investigation (see execute/data-quality-issues.md)

**Until resolved:** Use GSC organic data for SEO strategy, investigate referral separately.

---

### Conversion Rate Variations

| Source | Rate | Method | Status |
|--------|------|--------|--------|
| **Direct Attribution** | 0.65% | 4,256 clicks → $13,757 revenue | ✅ RELIABLE |
| GA4 Paid Search | 99.57% | GA4 conversion events | ❌ BROKEN |
| GA4 Organic | 94.48% | GA4 conversion events | ❌ BROKEN |
| Pre-Order Campaign | 17.65% | Specific funnel test | ✅ Valid for that funnel only |

**Decision:** Use 0.65% for all revenue projections and strategy planning.

**DO NOT USE GA4 conversion data** until tracking is fixed (Week 1 priority).

**Pre-order 17.65% is NOT site-wide:** This was a specific Mark Hamilton pre-order funnel with targeted traffic. Do not apply to cold organic search traffic.

---

### User Count Variations

| Source | Users | Period | Explanation |
|--------|-------|--------|-------------|
| data/metrics.csv | 21,137 total | Annual | ✅ Verified |
| GA4 Report | 21,105 total | Annual | -32 users (rounding) |
| Organic only | 3,703 | Annual | Subset of total |

**Decision:** Numbers match (21,137 vs 21,105 is within rounding variance). Use 21,137 from verified export.

---

## 📋 Which Metric for What Purpose

### For Revenue Projections
- **Baseline:** 4,256 annual clicks
- **Conversion:** 0.65% (direct attribution)
- **AOV:** $497
- **Formula:** Clicks × 0.65% × $497 = Revenue

**Example:** Phase 1 adds 780 annual clicks → 780 × 0.65% × $497 = $2,520 additional revenue

### For Traffic Analysis
- **Baseline:** 4,256 annual clicks (GSC verified)
- **CTR:** 2.90% average (Mobile 16.3%, Desktop 9.95%)
- **Impressions:** 148,894 annual
- **Source:** Google Search Console data

### For Brand Dependency
- **Use:** 95% brand-dependent (conservative)
- **Implications:** 5% non-branded = 213 clicks/year from discovery
- **Target:** Reduce to 60-70% branded through Phase 4 keyword expansion

### For Engagement Quality
- **Use:** 94.48% engagement rate
- **Validation:** 117.96s organic engagement time
- **Benchmark:** Must maintain >94% through all optimizations

### For Content Strategy
- **Baseline:** 91 published pieces
- **Categories:** 32 pages, 42 posts, 17 podcasts
- **Status:** All uncategorized (Phase 2 priority)

---

## 🚫 DO NOT Use These Metrics

### ❌ GA4 Conversion Rates
**All channels showing 94-100% conversion** - This is impossible and indicates:
- Events firing on every page view
- Bot traffic not filtered
- Duplicate event tracking

**Status:** BROKEN - Week 1 fix required

**Until fixed:** Use direct attribution (0.65%) only.

### ❌ Referral Traffic Percentage (49.2%)
**Status:** Under investigation - conflicts with brand dependency data

**Do not use until:**
- Sources identified and validated
- Reconciled with GSC organic data
- Confirmed not spam/bot traffic

### ❌ Pre-Order Conversion (17.65%) for Site-Wide Projections
**This was a specific funnel:** Mark Hamilton book pre-order with targeted traffic

**Do not apply to:**
- Cold organic search traffic
- Non-Mark Hamilton content
- Site-wide conversion estimates

**Can use for:** Mark Hamilton keyword expansion revenue projections only

---

## ✅ Reliable vs Unreliable Breakdown

### Reliable Metrics (Use for Strategy)
- ✅ GSC clicks: 4,256 annual
- ✅ GSC impressions: 148,894 annual
- ✅ GSC CTR: 2.90%
- ✅ GSC positions: All ranking data
- ✅ Direct attribution conversion: 0.65%
- ✅ Engagement rate: 94.48%
- ✅ Organic engagement time: 117.96s
- ✅ Mobile/Desktop CTR split: 16.3% / 9.95%
- ✅ Content count: 91 published pieces
- ✅ Revenue baseline: $13,757 annual

### Unreliable Metrics (Do Not Use)
- ❌ GA4 conversion rates (all channels)
- ❌ GA4 funnel analysis (depends on broken events)
- ❌ Referral traffic percentage (under investigation)
- ❌ Pre-order conversion for site-wide use

### Needs Validation (Week 1)
- ⚠️ Referral traffic sources (49.2%)
- ⚠️ Traffic source breakdown (GA4 vs GSC conflict)
- ⚠️ Paid search percentage (24% - may be bot-inflated)
- ⚠️ Exact brand dependency (95% vs 99%)

---

## 📈 Impact on Strategic Planning

### Conservative Approach (Official)
Use these numbers for all planning and projections:
- 4,256 annual clicks baseline
- 95% brand-dependent (5% non-branded)
- 0.65% conversion rate
- $13,757 annual revenue
- 94.48% engagement rate (must maintain)

**Why conservative:** Better to underestimate and overdeliver than promise aggressive targets and miss.

### Aggressive Scenario (For Context Only)
If optimistic assumptions prove true:
- 4,309 clicks (Oct 6 data)
- 99% brand-dependent (0.86% non-branded)
- Higher conversion on Mark Hamilton content
- Referral traffic is legitimate and additive

**Do not use for planning** - this is best-case scenario only.

---

## 🔄 Update Triggers

**This document must be updated when:**
1. Week 1 investigation resolves traffic source mystery
2. GA4 conversion tracking is fixed and validated
3. Any new verified data exports are processed
4. Phase results significantly differ from projections

**Last verification:** October 6, 2025
**Next review:** After Week 1 investigation complete (target: October 13, 2025)

---

## 📞 Questions to Ask If Numbers Don't Match

**If you see different numbers in a document, ask:**

1. What date was the data exported? (Date range matters)
2. What source? (GA4 vs GSC vs direct attribution)
3. Is it verified in data/metrics.csv?
4. Is it marked as reliable or unreliable in this doc?

**When in doubt:** Default to data/metrics.csv line marked "SOURCE OF TRUTH"

---

**Bottom line:** Use 4,256 clicks, 0.65% conversion, 95% brand-dependent, 94.48% engagement for all strategic decisions. Everything else is either under investigation or date variance.
