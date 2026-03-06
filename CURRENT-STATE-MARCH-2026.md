# Neothink.com — Current State Assessment

**Date:** March 6, 2026
**Data Sources:** Google Search Console (12 months), Google Analytics 4 (12 months), WordPress REST API (live), SEO Inventory (strategy repo)
**Purpose:** Full documentation of current reality before rebuilding neothink.com on Next.js 16

---

## 1. Traffic Overview (Full Year: Mar 2025 → Mar 2026)

### Traffic Sources (GA4 — Sessions)

| Channel | Sessions | % of Total | Notes |
|---------|----------|------------|-------|
| Referral | 18,939 | 48% | Dominated by Zoom webinars |
| Paid Search | 8,260 | 21% | Google Ads |
| Organic Search | 5,816 | 15% | Google + Bing |
| Direct | 5,479 | 14% | Typed URL / bookmarks |
| Organic Social | 312 | 0.8% | Social media posts |
| Organic Video | 245 | 0.6% | YouTube |
| Email | 216 | 0.6% | Email marketing |
| Unassigned | 163 | 0.4% | |
| Cross-network | 92 | 0.2% | |
| **Total** | **~39,500** | **100%** | |

### Key Referral Sources (GA4 — Sessions)

| Source | Sessions |
|--------|----------|
| neothink.zoom.us | 970 |
| direct / (none) | 590 |
| google / organic | 280 |
| us02web.zoom.us | 85 |
| app.zoom.us | 66 |
| bing / organic | 62 |
| email / email marketing | 31 |

**Finding:** The "mysterious 49.2% referral traffic" from the Oct 2025 baseline investigation is **Zoom webinar traffic**. People attend masterclasses on neothink.zoom.us and then visit the website. This is the funnel working, not a data anomaly.

### Organic Search (GSC — 12 months)

| Metric | Value |
|--------|-------|
| Total clicks | 4,167 |
| Total impressions | 33,685 |
| Average CTR | 12.37% |
| Mobile traffic | 72% (2,996 clicks) |
| Desktop traffic | 26% |
| US traffic | 89% (3,723 clicks) |

**Trend:** Impressions grew from ~60-80/day (early 2025) to ~100-170/day (Jan-Feb 2026). Publishing cadence is increasing visibility.

---

## 2. Pages That Matter (Cross-Referenced: GSC + GA4)

### Tier 1 — High Traffic, High Engagement (MUST BUILD FIRST)

| Page | GSC Clicks | GA4 Sessions | Avg Engagement | Priority |
|------|-----------|-------------|----------------|----------|
| `/` (homepage) | 2,089 | 20,783 | 47s | Anchor page |
| `/about/` | 684 | 1,097 | 115s | Core identity |
| `/about-us/` | 208 | 350 | 112s | Core identity |
| `/neothink-university/` | 277 | 513 | 145s | Programs |
| `/free-courses/` | 218 | 361 | 113s | Programs |
| `/contact/` | 141 | 252 | 166s | Trust signal |
| `/immortalis/` | 122 | 250 | 149s | Movement |
| `/faq/` | 101 | 113 | 117s | Trust signal |
| `/events/` | 93 | 163 | 195s | Community |
| `/the-prime-law/` | 57 | 172 | 103s | Movement |
| `/twelve-visions-party/` | 60 | 97 | 76s | Movement |
| `/books/` | 21 | 92 | 141s | Products |

### Tier 2 — Moderate Traffic, Worth Building

| Page | GSC Clicks | GA4 Sessions | Avg Engagement | Priority |
|------|-----------|-------------|----------------|----------|
| `/the-movement/` | 72 | 64 | 49s | Identity |
| `/about-neothink/` | 71 | 60 | 94s | Identity |
| `/podcast/` | 23 | 132 | 75s | Content |
| `/our-mission/` | 26 | 46 | 76s | Identity |
| `/project-life/` | 26 | 69 | 68s | Programs |
| `/neothink-coaching-programs/` | 11 | 59 | 139s | Programs |
| `/neothink-reviews/` | — | 71 | 132s | Trust (SEO opportunity) |
| `/apply-for-membership/` | — | 56 | 190s | Conversion |
| `/newsletter/` | — | 189 | 38s | Lead capture |
| `/formula-cure-to-aging/` | 5 | 39 | 261s | Programs |

### Tier 3 — Blog Posts With Any Organic Traction

Only a handful of blog posts earn meaningful traffic:

| Post | GSC Clicks | GA4 Sessions | Topic |
|------|-----------|-------------|-------|
| `/secret-society-invitation-have-you-received...` | 34 | 40 | Legitimacy |
| `/whats-the-truth-about-the-neothink-society...` | 25 | 25 | Legitimacy |
| `/how-the-neothink-secret-society-differs...` | 8 | 53 | Legitimacy |
| `/what-is-the-neothink-society/` | — | 48 | Identity |
| `/why-youre-not-passionate-about-anything...` | — | 82 | SEO content |
| `/why-youre-feeling-stuck-in-life...` | — | 76 | SEO content |
| `/is-the-neothink-society-legit...` | 5 | 20 | Legitimacy |

**Pattern:** The only blog posts that get traffic are **legitimacy/trust content** (people vetting Neothink) and **generic SEO content** (feeling stuck, passion). The philosophical and movement content (Philosophy, Awakening, Mentality categories — 64 posts) gets almost zero organic traffic.

### Anomaly — `/testimonials/`

| Metric | Value |
|--------|-------|
| GA4 Sessions | 8,259 (2nd highest after homepage) |
| GA4 Active Users | 7,651 |
| Avg Engagement | 10.7s (very low) |
| GSC Clicks | 4 |

This page gets massive GA4 traffic but almost zero organic search traffic. The 10.7s engagement suggests people land and leave quickly. Possible explanations: bot traffic, internal redirect target, or linked from Zoom/email campaigns as social proof.

---

## 3. Top Search Queries (GSC — 12 months)

### Brand Queries (95%+ of traffic)

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| neothink | 730 | 3,372 | 21.7% | 2.1 |
| neothink society | 725 | 2,340 | 31.0% | 1.1 |
| mark hamilton neothink | 317 | 1,112 | 28.5% | 1.8 |
| neothink mark hamilton | 203 | 1,001 | 20.3% | 1.3 |
| neothink university | 125 | 335 | 37.3% | 1.4 |
| neo think | 80 | 626 | 12.8% | 3.3 |
| neothink book | 45 | 503 | 9.0% | 3.3 |
| what is neothink | 42 | 189 | 22.2% | 1.5 |
| neothink society phone number | 36 | 330 | 10.9% | 3.8 |
| neothink society books | 28 | 337 | 8.3% | 3.2 |
| neothink book summary | 22 | 353 | 6.2% | 2.2 |
| neothink society reviews | 17 | 269 | 6.3% | 5.3 |
| twelve visions party | 17 | 132 | 12.9% | 5.0 |
| the prime law | 15 | 277 | 5.4% | 5.8 |
| mark hamilton author | 14 | 419 | 3.3% | 7.3 |
| neothink institute | 12 | 92 | 13.0% | 4.2 |
| mark hamilton books | 12 | 388 | 3.1% | 5.3 |

### High-Impression, Low-Click Opportunities

| Query | Clicks | Impressions | CTR | Position | Opportunity |
|-------|--------|-------------|-----|----------|-------------|
| **neothink reviews** | **1** | **1,210** | **0.08%** | **16.6** | Dedicated reviews page could capture 100+ clicks |
| mark hamilton books | 12 | 388 | 3.1% | 5.3 | Better books page with structured data |
| mark hamilton author | 14 | 419 | 3.3% | 7.3 | Dedicated Mark Hamilton bio page |
| neothink books | 3 | 337 | 0.9% | 4.2 | Books page optimization |
| neothink society phone number | 36 | 330 | 10.9% | 3.8 | Clear contact info on site |
| neothink book summary | 22 | 353 | 6.2% | 2.2 | Book summary/overview content |
| neothink society reviews | 17 | 269 | 6.3% | 5.3 | Reviews page |
| secret society | 0 | 170 | 0% | 44.3 | Long-term keyword expansion |
| ascension personal growth | 0 | 170 | 0% | 25.0 | Ascension page optimization |

---

## 4. Indexing Health (GSC — March 2026)

| Status | Pages | Concern Level |
|--------|-------|---------------|
| **Indexed** | ~130 | OK |
| Discovered — not indexed | 66 | High — Google won't index |
| Crawled — not indexed | 64 | High — Google rejected after reading |
| Excluded by noindex | 56 | Intentional |
| Page with redirect | 27 | Normal |
| Not found (404) | 25 | Should be cleaned up |
| Alternate canonical | 12 | Duplicate signals |
| Google chose different canonical | 5 | Google disagrees with setup |

**130 pages Google refuses to index** after crawling. This is a content quality signal. Many of the WordPress pages are thin Elementor templates with little unique content. Building clean, purpose-built pages will solve this.

---

## 5. WordPress Content Inventory (Live — March 6, 2026)

### Posts: 114 total (112 legit + 2 Russian spam)

| Category | Posts | Date Range | Organic Traffic |
|----------|-------|------------|-----------------|
| Philosophy | 20 | Feb-Mar 2026 | Near zero |
| Awakening | 26 | Jan-Mar 2026 | Near zero (too new) |
| Mentality | 14 | Jan 2026 | Near zero |
| Concepts | 4 | Dec 2025 | Near zero |
| Uncategorized | 50 | Jul 2024 - Sep 2025 | Low; legitimacy posts get some |

### Pages: 37 total

| SEO Data | Count |
|----------|-------|
| Has Rank Math SEO data | 0 |
| Missing all SEO metadata | 37 |

Every single page is missing SEO title, meta description, and focus keyword.

### Podcasts: 17 (Seriously Simple Podcasting plugin)

Mirror the Awakening blog post topics. Zero organic traction.

### Spam/Cleanup Needed

- 2 Russian spam posts (IDs 6462, 6464) — delete
- Sample Page (ID 2) — delete
- 25 broken 404 URLs in GSC
- Duplicate pages (`about-duplicate-494-new`, `customer-testimonials-duplicate-1574-new`)

---

## 6. Engagement Patterns (GA4)

### Highest Engagement Pages (avg seconds)

| Page | Avg Engagement Time | What This Tells Us |
|------|--------------------|--------------------|
| `/formula-cure-to-aging/` | 261s (4.3 min) | Deep interest in aging/health |
| `/events/` | 195s (3.2 min) | People exploring events seriously |
| `/apply-for-membership/` | 190s (3.2 min) | Serious consideration |
| `/contact/` | 166s (2.8 min) | People composing messages |
| `/immortalis/` | 149s (2.5 min) | Vision resonates |
| `/neothink-university/` | 145s (2.4 min) | Evaluating programs |
| `/neothink-coaching-programs/` | 139s (2.3 min) | Evaluating programs |
| `/neothink-reviews/` | 132s (2.2 min) | Vetting before purchase |
| `/about/` | 115s (1.9 min) | Learning about org |
| `/free-courses/` | 113s (1.9 min) | Evaluating free offerings |
| `/about-us/` | 112s (1.9 min) | Learning about org |
| `/the-prime-law/` | 103s (1.7 min) | Reading philosophy |

### Lowest Engagement (Landing Pages)

| Page | Avg Engagement | What This Tells Us |
|------|---------------|--------------------|
| `/testimonials/` | 10.7s | Bounce — likely bot/redirect traffic |
| `/blog/` | 18s | Index page, quick scan |
| `/privacy-policy/` | 6s | Legal page, expected |
| `/neocheating/neo-tech/neothink` | 7s | Old URL pattern |
| `/sample-page/` | 2.3s | Should not exist |

---

## 7. Conversion Signals

### GA4 Conversion Tracking: STILL BROKEN

Key event rate shows 97-100% across almost all pages. This is impossible and means the tracking setup is firing events on every page view. **Do not use GA4 conversion data for decisions.**

### Proxy Conversion Indicators

| Signal | Data Point |
|--------|-----------|
| Newsletter signups | 222 sessions hit `/newsletter-signup-thank-you/` |
| Contact form submissions | 58 sessions hit `/contact-form-submitted/` |
| Membership interest | 56 sessions on `/apply-for-membership/` with 190s engagement |
| `/apply-for-membership/` has 587 pageviews | People visiting it multiple times |

### Revenue Attribution (from Oct 2025 baseline — still valid)

| Metric | Value |
|--------|-------|
| Estimated annual organic revenue | $13,757 |
| Conversion rate (direct attribution) | 0.65% |
| Average order value | $497 |

---

## 8. What People Are Looking For (Search Intent Analysis)

Based on top queries and page engagement, visitors fall into clear buckets:

### Bucket 1: Brand Verification (largest group)
**Queries:** "neothink", "neothink society", "neothink reviews", "is neothink legit", "neothink society reviews"
**Pages they visit:** Homepage, About, About Us, FAQ, Reviews, legitimacy blog posts
**Intent:** "I heard about this — is it real? Can I trust it?"
**Action needed:** Strong identity pages, reviews/testimonials, clear answers to skepticism

### Bucket 2: Mark Hamilton Research
**Queries:** "mark hamilton neothink", "mark hamilton author", "mark hamilton books", "neothink book summary"
**Pages they visit:** About, Books, blog posts about Mark Hamilton
**Intent:** "Who is Mark Hamilton? What has he written?"
**Action needed:** Dedicated Mark Hamilton bio page, comprehensive books page with structured data

### Bucket 3: Program Evaluation
**Queries:** "neothink university", "neothink courses", "neothink coaching"
**Pages they visit:** University, Free Courses, Coaching Programs, Formula Cure to Aging
**Intent:** "What do they offer? Is it worth it?"
**Action needed:** Clear program pages with outcomes, pricing clarity, social proof

### Bucket 4: Philosophy/Movement Interest
**Queries:** "twelve visions party", "the prime law", "neothink institute", "what is neothink"
**Pages they visit:** The Prime Law, Twelve Visions Party, Immortalis, The Movement
**Intent:** "What do they believe? What's the vision?"
**Action needed:** Term/entity pages that explain each concept clearly — AEO-optimized for AI citations

### Bucket 5: Vetting Before Purchase (from ads/webinars)
**Queries:** Often direct visits (no search query)
**Pages they visit:** Homepage → About → Reviews → Contact → Apply
**Source:** Zoom webinars, paid ads, email campaigns
**Intent:** "I saw the ad/webinar — let me check the website before I commit"
**Action needed:** A polished, trustworthy site that converts ad/webinar traffic

---

## 9. Brand Dependency & Non-Branded Opportunity

### Current State

| Metric | Value |
|--------|-------|
| Brand-dependent traffic | ~95% |
| Non-branded organic clicks | ~200/year |
| Top non-branded query | "secret society" variants, "self-improvement" |

### Expansion Targets

The term/entity pages strategy directly addresses this. Each Neothink-specific term creates a new ranking opportunity:
- "neothink mentality" — own this completely
- "integrated thinking" — philosophical framework
- "friday night essence" — unique concept
- "value creator" — business philosophy
- "prime law" — political philosophy
- "immortalis" — digital nation concept
- "neovia" — cure disease city

These aren't high-volume keywords today, but they're **zero competition** and become the canonical source when AI models answer questions about these terms.

---

## 10. Technical Issues to Resolve in Rebuild

1. **25 broken 404 URLs** in Google's index — need redirects or cleanup
2. **130 pages not indexed** — thin content, duplicate signals
3. **GA4 conversion tracking broken** — needs fresh setup on new site
4. **No structured data** — zero JSON-LD on any page
5. **All 37 pages missing SEO metadata** — no titles, descriptions, or focus keywords
6. **Duplicate content** — multiple about pages (/about, /about-us, /about-neothink), multiple testimonial pages
7. **Spam/test content** — Russian spam posts, sample page, test page, duplicate pages
8. **Elementor bloat** — WordPress Elementor generates heavy, slow markup
9. **Missing canonical URLs** — Google choosing different canonicals on 5 pages
10. **No RSS feed** — missed syndication opportunity

---

## 11. Pages to Build (Priority Order)

### Phase 1 — Core Identity (Ship First)

These pages represent 80%+ of organic traffic and are what people see when vetting Neothink:

1. **Homepage** — 2,089 GSC clicks, 20,783 GA4 sessions
2. **About** — consolidate /about + /about-us + /about-neothink (combined: 963 GSC clicks)
3. **Contact** — 141 GSC clicks, 166s engagement
4. **FAQ** — 101 GSC clicks, schema opportunity
5. **Our Mission** — 26 GSC clicks, identity statement
6. **Mark Hamilton** — NEW (317 clicks for "mark hamilton neothink" query, no dedicated page)
7. **Reviews** — NEW/improved (1,210 impressions for "neothink reviews" with 0.08% CTR)

### Phase 2 — Programs & Movement

8. **Neothink University** — 277 GSC clicks, 145s engagement
9. **Free Courses** — 218 GSC clicks
10. **Books** — 21 GSC clicks but 388 impressions for "mark hamilton books"
11. **Immortalis** — 122 GSC clicks, 149s engagement
12. **The Prime Law** — 57 GSC clicks
13. **Twelve Visions Party** — 60 GSC clicks
14. **Project Life** — 26 GSC clicks
15. **Formula Cure to Aging** — 5 GSC clicks but 261s engagement
16. **The Movement** — 72 GSC clicks
17. **Events** — 93 GSC clicks, 195s engagement
18. **Coaching Programs** — 11 GSC clicks, 139s engagement

### Phase 3 — Term/Entity Pages (AEO Strategy)

Build dedicated pages for each Neothink term. Each page optimized for AI citation:
- Neothink, Neothink Mentality, Neo-Tech, Mysticism
- Integrated Thinking, Value Creator, Self-Leader, Friday Night Essence
- Ten-Second Miracle, Mini Days, Powerthinking, Following Mode
- The Awakening, The Clearing, The Living, etc.
- Dr. Frank R. Wallace, Wallace Hamilton

### Phase 4 — Content Sections

- `/articles/` — curated WordPress content (legitimacy posts, best philosophical content)
- `/podcast/` — when podcast launches
- Membership application funnel
- Newsletter with lead capture

---

## 12. URLs That Need 301 Redirects

Any URL change from WordPress to Next.js needs a permanent redirect to preserve SEO equity.

### Must Redirect (Have Organic Traffic)

| WordPress URL | Recommended Next.js URL |
|---------------|------------------------|
| `/about/` | `/about` (keep) |
| `/about-us/` | `/about` (consolidate) |
| `/about-neothink/` | `/about` (consolidate) |
| `/neothink-university/` | `/neothink-university` (keep) |
| `/free-courses/` | `/free-courses` (keep) |
| `/contact/` | `/contact` (keep) |
| `/immortalis/` | `/immortalis` (keep) |
| `/faq/` | `/faq` (keep) |
| `/the-prime-law/` | `/the-prime-law` (keep) |
| `/twelve-visions-party/` | `/twelve-visions-party` (keep) |
| `/books/` | `/books` (keep) |
| `/events/` | `/events` (keep) |
| `/podcast/` | `/podcast` (keep) |
| `/the-movement/` | `/the-movement` (keep) |
| `/our-mission/` | `/our-mission` (keep) |
| `/project-life/` | `/project-life` (keep) |
| `/blog/` | `/articles` (if renamed) or `/blog` (keep) |
| `/testimonials/` | `/reviews` (upgrade) |
| `/programs/` | redirect to relevant page |
| `/neothink-reviews/` | `/reviews` (consolidate) |
| `/customer-testimonials/` | `/reviews` (consolidate) |

### Blog Posts With Traffic (redirect to /articles/[slug] if renaming)

| WordPress URL | GSC Clicks |
|---------------|-----------|
| `/secret-society-invitation-have-you-received-this-letter-what-does-it-mean/` | 34 |
| `/whats-the-truth-about-the-neothink-society-separating-fact-from-fiction/` | 25 |
| `/how-the-neothink-secret-society-differs-from-other-secret-groups/` | 8 |
| `/is-the-neothink-society-legit-everything-you-need-to-know/` | 5 |

---

## 13. Key Metrics to Track Post-Launch

| Metric | Current Baseline | Target |
|--------|-----------------|--------|
| Organic clicks/year | 4,167 | 8,000+ (within 6 months) |
| Indexed pages | ~130 | 50-70 quality pages (fewer but all indexed) |
| Brand dependency | 95% | 70-80% (term pages capture non-branded) |
| "neothink reviews" clicks | 1 | 200+ (dedicated page) |
| Average CTR (all queries) | 12.37% | 15%+ (better meta descriptions) |
| Pages missing SEO data | 37/37 | 0/all pages |
| Core Web Vitals | Unknown (Elementor) | All green (Next.js 16) |
| Structured data types | 0 | Organization, Person, Article, FAQPage, Book, VideoObject, BreadcrumbList |
| GA4 conversion tracking | Broken | Working correctly |
| Newsletter signups/year | ~222 (proxy estimate) | Track accurately |
| Contact form submissions/year | ~58 (proxy estimate) | Track accurately |
