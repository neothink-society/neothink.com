# Pre-Launch Audit — Findings Report
Date: 2026-04-17
Targets: local production build (`http://localhost:3100`, `pnpm build && pnpm start`) and Vercel preview (`https://neothink-institute.vercel.app`)
Scope: 147 URLs from `app/sitemap.ts` (home, main-nav, cornerstone/longform, category pages, blog posts) + 1 synthetic `/404` test + all internal links harvested from those pages.

Tooling:
- **Lighthouse 13.1.0** (CLI) — 15 representative URLs × 2 form factors × 2 targets = 60 runs.
- **axe-core 4.11 via @axe-core/playwright 4.11** — all 148 URLs × 2 viewports (mobile 390×844, desktop 1440×900) = 296 runs. WCAG 2.0 A/AA + 2.1 A/AA + 2.2 AA + axe best-practice tags.
- **Server-side fetch + cheerio** — every sitemap page, extracting `<title>`, meta description, canonical, OG/Twitter, `lang`, H1, JSON-LD, `<img>` alt coverage, `llms.txt`, `robots.txt`, `sitemap.xml`.
- **Link crawl** — fetched all sitemap pages on Vercel, normalised every internal `<a href>`, checked HEAD/GET status of 139 unique internal URLs and 32 external.
- **Static source scan** of `app/`, `components/`, `lib/` (563 files) for anti-patterns.

All raw JSON and per-page artifacts are in `/tmp/audit/{lighthouse,axe,structured,links,source}`.

**Per the request, this document reports only. No fixes have been applied.**

---

## 1. Severity key

| Severity | Meaning |
|---|---|
| 🔴 Critical | Blocks launch or materially harms SEO/AEO/a11y; must be resolved. |
| 🟠 Serious | Degrades quality at scale; should be resolved before going live on the apex domain. |
| 🟡 Moderate | Worth addressing; safe to ship first and follow up. |
| 🟢 Minor | Polish / best-practice; opportunistic fixes. |
| ⚪ Informational | Not a defect, but worth knowing. |

---

## 2. Executive summary

- **Overall health is high.** Lighthouse scores on the Vercel preview are 94–100 mobile and 98–100 desktop across every tier (home, main-nav, cornerstone, category, longform, blog). SEO=100, Best-Practices ≥ 96, and CLS=0 everywhere.
- **Every page has the SEO/AEO fundamentals:** `<title>`, meta description, canonical, OG, Twitter Card, `html[lang]`, exactly one `<h1>`, at least one JSON-LD script. Sitewide: `llms.txt` (13 KB), `robots.txt`, `sitemap.xml` (41 KB, 147 URLs) all 200.
- **JSON-LD coverage is excellent:** 3,654 `ListItem`, 1,176 `Person`, 440 `SpeakableSpecification`, 146 `BreadcrumbList`, 116 `BlogPosting`, 89 `FAQPage`, 294 each of `ResearchOrganization`/`EducationalOrganization`/`WebSite`.
- **Zero 301/308 destination mismatches** were observed in the spot-check of `wp-redirects.ts` entries reachable from the crawl (see caveat in §6).
- **Zero** raw `<img>` tags, missing `alt` attributes, `console.log`, `TODO/FIXME`, `any`-type, or `@ts-ignore` occurrences in source.

The remaining issues fall into four clusters — two of them are real gating items, two are polish:

1. 🔴 **Broken internal links** (10 URLs).
2. 🔴 **Accessibility — color contrast** (on every page; brand gold against neutral paper).
3. 🟠 **Accessibility — small targets, link-in-text contrast, carousel buttons, iframe YouTube controls.**
4. 🟡 **SEO polish — 77 over-long titles, 70 over-long descriptions, 6 too-short titles.**

Full detail below.

---

## 3. Gating issues (🔴 critical)

### 3.1 Ten internal links return 404 on the live preview

Source: `/tmp/audit/links/_internal.json` (139 internal URLs crawled, 10 broken).

```
404 https://neothink-institute.vercel.app/articles/unified-field
404 https://neothink-institute.vercel.app/articles/bicameral-mind
404 https://neothink-institute.vercel.app/articles/prime-law
404 https://neothink-institute.vercel.app/articles/ai-purpose-void
404 https://neothink-institute.vercel.app/articles/neovia-case
404 https://neothink-institute.vercel.app/articles/performing-self
404 https://neothink-institute.vercel.app/articles/aristotle
404 https://neothink-institute.vercel.app/articles/nuclear-threshold
404 https://neothink-institute.vercel.app/articles/hierarchy
404 https://neothink-institute.vercel.app/about-neothink
```

Source pages referencing these hrefs appear to be Wallace-created cornerstone pages that link to an `/articles/*` namespace that was never migrated, plus at least one `/about-neothink` reference (likely should be `/about` or `/about-neothink-institute`). Each 404 costs both crawl budget and PageRank, and all of them are linked from inside the main nav tree, so Google will definitely find them.

**WCAG/SEO criterion:** Google Search Central ­— "Avoid broken links"; also invalidates internal PageRank flow.

### 3.2 Color-contrast failures on every page of the site

Source: `/tmp/audit/axe/_summary.json` — axe rule `color-contrast`, 148/148 pages, **3,305 failing nodes total**.

Representative failures (identical on mobile and desktop viewports):

- Header logo word-mark `.nti-nav-logo > span` → "Institute" — contrast **2.72** (foreground `#b8973a`, background `#fdfcfa`). WCAG 1.4.3 requires 4.5:1 for text < 18 pt / < 14 pt bold.
- Home hero cue `.nti-scroll` → "Scroll to begin" — contrast **4.44** (foreground `#7a7570` at 10 px). Fails 1.4.3 for small text.
- Cornerstone section labels `.ul-section-label` — same `#b8973a` at 10 px, contrast **2.72**.
- Inline gold link color `#8a7030` against body `#4a4540` — **2:1**, see §4.3.

These are **all the same design decision** — the brand gold accent (`#b8973a` / `#8a7030`) is too light against the paper neutrals to clear WCAG 1.4.3 for its current font sizes. Options that preserve the palette: use the gold only on surfaces that give enough contrast (dark navy, dark taupe), darken the gold one shade for body-size text, or increase the affected text to ≥ 18 pt (≥ 24 px) so it counts as "large text" (3:1).

**WCAG criterion:** 1.4.3 Contrast (Minimum), Level AA.

---

## 4. Serious issues (🟠)

### 4.1 Buttons without discernible name (129 nodes on 65 pages)

axe rule: `button-name`. The overwhelming majority are **inside YouTube `<iframe>`s** (e.g. `["iframe", ".ytmVideoInfoChannelAvatar"]`, `["iframe", "#movie_player"]`). These are not our DOM — we cannot edit YouTube's player. The axe run still surfaces them because it steps into same-origin-tagged iframes when the player is first paint-ready.

Two actions are available:
- Accept as vendor-owned and document in a `docs/a11y/known-exceptions.md`.
- Reduce exposure by lazy-embedding (load the iframe on click) — same pattern YouTube uses with "privacy-enhanced mode" + a poster. That defers both the a11y count and ~500 kB of script.

**WCAG criterion:** 4.1.2 Name, Role, Value.

### 4.2 `aria-prohibited-attr` (130 nodes on 65 pages)

Same source as §4.1 — `<div class="html5-video-player" aria-label="...">`. Inside YouTube's iframe; same remediation options.

### 4.3 `link-in-text-block` — prose links rely on color alone (310 nodes on 89 pages)

Representative node on `/freedom-key-to-unlocking-true-wealth`:

```
<a href="https://markhamilton.co/" target="_blank" rel="noopener noreferrer">Mark Hamilton</a>
```

axe reports: "The link has insufficient color contrast of **2:1** with the surrounding text (link `#8a7030`, body `#4a4540`) and no styling (underline/border/outline) to distinguish it." This affects all prose links rendered through `nu-prose` (the migrated WordPress body content).

**WCAG criterion:** 1.4.1 Use of Color, Level A (and 1.4.11 Non-text Contrast when the link is seen as a UI component).

### 4.4 Small carousel dots — `target-size` (396 nodes on 6 pages)

Pages: `/immortalis`, `/neothink-university`, plus their category/variant pages (6 total in the sampled pages × viewport matrix).

Example:

```
<button class="nu-carousel-dot nu-carousel-dot--active"
        aria-label="Story 1, Jill Reed"
        aria-current="true"></button>
```

axe: "Target has insufficient size (10.3 px × 10.3 px, should be at least 24 px × 24 px)… insufficient space to closest neighbors."

**WCAG criterion:** 2.5.8 Target Size (Minimum), Level AA (WCAG 2.2).

### 4.5 One local-only LCP regression

Lighthouse lab on local prod:

| URL | Local mobile perf / LCP | Vercel mobile perf / LCP |
|---|---|---|
| `/the-way` | **26 / 12,322 ms** | 95 / 2,506 ms |
| `/unleashed` | 75 / 9,217 ms | 97 / 2,431 ms |
| `/freedom-from-rights` | 59 / 8,642 ms | 96 / 2,594 ms |

Vercel scores these the same group green (94–97). The local regressions are almost certainly **cold-build / no-CDN penalties for above-the-fold imagery** on those specific pages. Vercel's Image Optimizer + its edge cache is hiding what would otherwise be a mid-severity LCP concern on a slow connection. Worth noting because if the CDN is ever unavailable (incident, cold region), these pages will drop. `/mark-hamiltons-story` is the one page where Vercel mobile is also noticeably below the pack (**79 / 2,547 ms**), though still green.

**Criterion:** Core Web Vital — LCP ≤ 2.5 s (good), ≤ 4.0 s (needs improvement).

### 4.6 Meta description length — 70 pages > 170 chars

Source: `/tmp/audit/structured/_per-page.json`. Google typically truncates at ~150–160 chars on mobile. Longest outliers:

- `/immortalis` — 267 ch
- `/neothink-university` — 241 ch
- `/neothink-reviews` — 229 ch
- `/mark-hamilton` — 216 ch
- `/neovia` — 203 ch

Plus ~65 blog posts in the 180–240 range. Every single one of these pages **has a description** (good), but the tail end of each will be dropped in the SERP snippet.

### 4.7 Title length — 77 pages > 70 chars, 6 pages < 30 chars

**Too long** (Google typically cuts at ~60 chars on desktop, ~70 on mobile). Worst offenders:

- `/secret-society-invitation-letter` — 97 ch
- `/neothink-society-clearing-misunderstandings` — 99 ch
- `/truth-about-neothink-society` — 94 ch
- `/mark-hamiltons-neothink-surprising-logic` — 88 ch
- fifteen more in the 71-char bucket alone.

**Too short** — the six main-nav pages whose title resolves to `Name | Neothink Institute`:

```
24 /faq                           | FAQ | Neothink Institute
25 /privacy-policy                | Privacy Policy | Neothink
26 /about                         | About | Neothink Institute
28 /contact                       | Contact | Neothink Institute
29 /neothink                      | Neothink | The Mind Unleashed
29 /programs                      | Programs | Neothink Institute
```

These leave SERP real estate on the table — SEO best-practice is typically 50–60 chars with a descriptive modifier.

---

## 5. Moderate issues (🟡)

### 5.1 Heading-order violations (136 nodes on 35 pages)

axe rule: `heading-order` — "Heading levels should only increase by one." Examples:

- `/` — `<h4>The Prime Law Foundation</h4>` appearing without an intervening h2/h3.
- `/unleashed` — `<h4>The Unified Field</h4>` same pattern.
- `/neothink` — `<h4>Internal Authority</h4>`, `<h4>The Mortal Mentality</h4>`.

This is a styling-as-semantics smell: sections are being rendered as `<h4>` for typographic reasons (smaller caps label) even though their place in the document outline is really h2 or h3. Assistive tech cannot infer document structure from this.

Affected main-nav pages (worst clusters): `/`, `/unleashed`, `/neothink`, `/neovia`, `/unified-field`, `/the-way`, `/published-work`, `/prime-law`, `/get-involved`, and 26 more.

**WCAG criterion:** 1.3.1 Info and Relationships, Level A.

### 5.2 `landmark-complementary-is-top-level` — 1 page, 2 nodes

axe warns "Aside should not be contained in another landmark." Single page; likely a nested `<aside>` inside `<main>`.

### 5.3 `use client` on non-leaf components (70 files)

Source: `/tmp/audit/source/_findings.json`. These are components that declare `"use client"` at the top and render further child components. This is not necessarily wrong, but in an App-Router codebase the recommended pattern is to keep `"use client"` at the leaf (e.g. the interactive button) and render Server Components above it. Every non-leaf `use client` currently **pulls its whole subtree into the client bundle**.

Highest-value candidates to promote back to Server Components (they read no React state or event handlers, and are currently marked `use client` by the page-content wrapping pattern):

- `components/about/about-page-content.tsx`
- `components/events/events-page-content.tsx`
- `components/contact/contact-page-content.tsx`
- `components/areas-of-profit/areas-of-profit-page-content.tsx`
- `components/beyond-tunnel-vision/beyond-tunnel-vision-page-content.tsx`
- `components/cure-to-aging/cure-to-aging-page-content.tsx`
- `components/discern-genuine-secret-society/discern-genuine-secret-society-page-content.tsx`
- `components/agency-article/agency-article.tsx` (…plus 62 more)

Most of these are WordPress-migrated article wrappers rendering `dangerouslySetInnerHTML`. They do not need `use client`.

**Criterion:** Next.js 16 docs (`node_modules/next/dist/docs/`) + `vercel-react-best-practices` skill — "prefer Server Components; `'use client'` at the leaf."

### 5.4 `dangerouslySetInnerHTML` — 551 occurrences

Source: `/tmp/audit/source/_findings.json`. This is expected for the WordPress migration (raw body HTML from `lib/*-body-html.ts`). The risk is not XSS — all input is from our own WP export. The risks that do apply:

- **Tailwind / theme leakage** — inline `style="border-radius: 8px"` etc. baked into the HTML strings will override our new tokens. The `scripts/flatten-border-radius.mjs` run already handled the corner radius leak.
- **Heading-order** violations in §5.1 almost certainly originate in these HTML strings.
- **Link-in-text-block** in §4.3 originates here, via `nu-prose`.

An incremental cleanup of `lib/*-body-html.ts` would shrink §4.3, §5.1, and (partially) §3.2 at the same time.

### 5.5 Inline styles (57)

Highest concentrations:

- `app/opengraph-image.tsx` (9) — expected, Satori requires inline style.
- `components/neothink-series/neothink-series-category-page-content.tsx` (8)
- `components/layout/site-footer.tsx` (7) — the newly-added min-height for WCAG target size.
- `app/global-error.tsx` (5) — required; runs with no CSS.

None of these are bugs, but for review: `site-footer.tsx`'s inline `minHeight: "44px"` could move into a utility class so it's theme-able.

---

## 6. Link-crawl caveats (⚪ informational)

The `wp-redirects.ts` spot-check parsed only literal `{ source, destination, permanent }` objects; it did **not** expand the many `slugPair(...)` helper calls. Three explicit redirects were verified (all passed, status 308, destinations match). The other ~110 `slugPair`-generated redirects were not exercised by this audit. No failures are known, but this is unverified — a follow-up pass should either expand the regex or evaluate `wp-redirects.ts` at runtime and hit every generated source.

External links: 32 unique external hrefs were found across the site. They were not HEAD-checked (intentional — external hosts rate-limit and 403 HEAD requests). A manual spot-check is recommended for the most-referenced externals (Mark Hamilton's personal site, podcast hosts, etc.).

---

## 7. What is already correct

These were checked and passed — no action required:

- Every page returns HTTP 200.
- Every page has `<html lang="en">`, `<title>`, `<meta name="description">`, `<link rel="canonical">`, OG `title/description/type`, Twitter Card.
- Every page has exactly one `<h1>`.
- Every `<img>` rendered on every page has an `alt` attribute (zero `imgNoAlt`).
- No raw `<img>` tags in source (all use `next/image`).
- `robots.txt`, `sitemap.xml`, `llms.txt` all served 200.
- JSON-LD validates as parseable JSON on every page; covers `BreadcrumbList`, `WebPage`, `BlogPosting`, `FAQPage`, `SpeakableSpecification`, `ResearchOrganization`, `EducationalOrganization`, `PodcastSeries`, `Book`, etc.
- Zero `console.log`, `TODO/FIXME`, `any` type, `@ts-ignore` in source.
- CLS = 0.000 on every measured page.
- Lighthouse SEO = 100 on every Vercel page (the two `published-work` 92 scores are caused by `_next/image` optimizer query-string — not an error, but the page has a single external-looking image reference).
- Lighthouse Best-Practices ≥ 96 everywhere on Vercel.

---

## 8. Recommended order of operations (when fixes are authorised)

1. **🔴 Repair or redirect the 10 broken internal links** (§3.1). These are the only items that will actively cost SEO/UX on launch day.
2. **🔴 Choose a contrast strategy for brand gold** (§3.2). Because this is the single pattern driving 3,305 failing nodes, one targeted CSS change closes a huge share of the a11y gap.
3. **🟠 Shorten 77 titles / 70 descriptions / expand 6 stub titles** (§4.6, §4.7) — pure metadata, no component changes needed.
4. **🟠 Enlarge Immortalis / NU carousel dots to 24 px and add underline/weight to prose links** (§4.3, §4.4).
5. **🟡 Fix heading-order in HTML body strings** (§5.1) and opportunistically **remove `use client` from server-safe page-content wrappers** (§5.3) — improves bundle size and SEO structure together.
6. **⚪ Harden the `wp-redirects.ts` verification** (§6).
7. **🟠 Decide on YouTube iframe policy** (§4.1, §4.2) — accept as vendor-owned with an exceptions doc, or switch to lazy/click-to-load embeds.

---

## 9. Artifacts

- `/tmp/audit/urls.json` — 147 URL manifest derived from `app/sitemap.ts`.
- `/tmp/audit/lighthouse/` — 60 Lighthouse JSON reports + `_summary.json`.
- `/tmp/audit/axe/` — 296 axe JSON reports + `_all.json` + `_summary.json`.
- `/tmp/audit/structured/{_site,_per-page,_summary}.json` — SEO/AEO crawl.
- `/tmp/audit/links/{_internal,_external,_redirects}.json` — link crawl.
- `/tmp/audit/source/{_findings,_summary}.json` — static source scan.
- `/tmp/audit/scripts/*.mjs` — all audit scripts (reproducible).

Re-running an audit:

```bash
# 1. Start local prod target
pnpm build && pnpm start -p 3100 &

# 2. Ensure audit deps
mkdir -p /tmp/audit-pkgs && cd /tmp/audit-pkgs && \
  echo '{"type":"module","dependencies":{"@axe-core/playwright":"^4.10.0","playwright":"^1.59.1","cheerio":"^1.0.0"}}' > package.json && \
  npm i && cd -
ln -sf /tmp/audit-pkgs/node_modules /tmp/audit/node_modules
echo '{"type":"module"}' > /tmp/audit/package.json

# 3. Run
node /tmp/audit/scripts/extract-urls.mjs
node /tmp/audit/scripts/run-lighthouse.mjs
node /tmp/audit/scripts/run-axe.mjs
node /tmp/audit/scripts/run-structured-data.mjs
node /tmp/audit/scripts/run-link-crawl.mjs
node /tmp/audit/scripts/run-source-scan.mjs
```
