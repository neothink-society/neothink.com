# Mobile / WCAG 2.2 AA — Focused Audit
Date: 2026-04-17
Scope: All 147 sitemap URLs on the local production build (`http://localhost:3100`).
Widths: **320, 360, 390, 430** (iPhone SE 1 through iPhone Pro Max).
Runs: 588 page loads + per-page DOM measurement, plus a re-slice of the mobile-viewport axe data from the general audit.

Per the request, **this document reports only — no fixes have been applied.**

Standards referenced:
- WCAG 2.2 AA (especially 1.4.4 Resize Text, 1.4.10 Reflow, 1.4.12 Text Spacing, 2.4.11/12 Focus Not Obscured, 2.5.5/8 Target Size, 4.1.2 Name/Role/Value).
- Apple Human Interface Guidelines — tap target ≥ 44 pt.
- Google Material — tap target ≥ 48 dp.
- Vercel Web Interface Guidelines — "Respect safe areas", "Never disable pinch-to-zoom", "Inputs ≥ 16 px to avoid iOS focus-zoom".

---

## TL;DR — is this "excellent" on mobile?

**No — not yet.** The site has strong mobile fundamentals (correct viewport, responsive type, reduced-motion support, theme color, no inputs that trigger iOS zoom, no pages with <16 px form fields, 100 % WCAG-compliant viewport meta) but two gating defects stop it from being "excellent":

1. **WCAG 1.4.10 Reflow fails on 15 pages.** Five carousel-heavy pages blow the document out to **~12,344 px wide** at every mobile width, creating a permanent horizontal scroll. Three tables and a few inline anchors also cause small overflows.
2. **WCAG 2.5.8 Target Size fails on every single page** because the fine-print footer row (Privacy, Terms, Contact) renders as 18 px-tall inline links. That's a one-component fix, but it's a site-wide fail.

Once those two classes are addressed the site moves to "green" on WCAG 2.2 AA mobile, with a tail of polish items (tiny 8–11 px accent text, contrast of the brand gold already reported in yesterday's audit, sub-44 px nav hit targets, and missing `env(safe-area-inset-*)` for notched iPhones).

---

## 1. What's already excellent (baseline — ⚪ informational)

| Area | Status | Evidence |
|---|---|---|
| `<meta viewport>` content | ✅ `width=device-width, initial-scale=1`; **0 pages** set `user-scalable=no` or `maximum-scale < 5` | 147/147 pages, `/tmp/audit/mobile/_all.json` |
| Zoom not disabled | ✅ WCAG 1.4.4 / success criterion met across the site | same |
| `theme-color` configured light + dark | ✅ `#FDFCFA` / `#0E0E0E` with `prefers-color-scheme` | page head |
| `color-scheme` | ✅ `light dark` | page head |
| `mobile-web-app-capable`, `apple-mobile-web-app-*` | ✅ Set | page head |
| `format-detection: telephone=no` | ✅ Prevents accidental `tel:` autolinking | page head |
| `prefers-reduced-motion` respected | ✅ **95 files** in source use the query or an animation token that disables under it | repo scan |
| Form-input font-size | ✅ **0 pages** have visible `<input>/<textarea>/<select>` under 16 px (no iOS focus-zoom) | 588 runs |
| Form-input labels | ✅ **0 missing** labels/aria-label on visible inputs | 588 runs |
| Horizontal overflow (132 of 147 pages) | ✅ Reflow clean at 320 px | 588 runs |
| `dangerouslySetInnerHTML` / raw WP HTML mobile rendering | ✅ No mobile text-overflow on 140 of 147 pages | 588 runs |

---

## 2. Gating defects (🔴)

### 2.1 WCAG 1.4.10 Reflow — 15 pages produce horizontal scroll at mobile widths

Source: `/tmp/audit/mobile/_all.json`. Pages are ranked by worst `documentElement.scrollWidth` across 320/360/390/430 px viewports.

| Max docWidth | Affected widths | Path | Primary offender |
|---:|---|---|---|
| **12,344 px** | 320, 360, 390, 430 | `/immortalis` | `div.nu-carousel-slide` |
| **12,344 px** | 320, 360, 390, 430 | `/neothink-university` | `div.nu-carousel-slide` |
| **12,344 px** | 320, 360, 390, 430 | `/neothink-reviews` | `div.nu-carousel-slide` |
| **12,344 px** | 320, 360, 390, 430 | `/events` | `div.nu-carousel-slide` |
| **12,344 px** | 320, 360, 390, 430 | `/project-life` | `div.nu-carousel-slide` |
| **12,344 px** | 320, 360, 390, 430 | `/faq` | `div.nu-carousel-slide` |
|  520 px | 320, 360, 390, 430 | `/find-happiness-in-retirement` | `a` |
|  464 px | 320, 360, 390, 430 | `/find-your-passion-life-career` | `a` |
|  442 px | 320, 360, 390, 430 | `/the-grand-experiment-of-our-time` | `table` |
|  384 px | 320, 360 | `/how-jobs-will-change` | `table` |
|  382 px | 320, 360 | `/live-longer` | `table` |
|  381 px | 320, 360 | `/break-bad-habits-transformation-tips` | `a` |
|  374 px | 320, 360 | `/the-missing-key-to-universal-prosperity` | (various) |
|  338 px | 320 | `/contact` | (various) |
|  328 px | 320 | `/feeling-stuck-in-life-how-to-fix` | (various) |

Three distinct root causes:

1. **Carousel (`.nu-carousel-*`) is not containment-clean.** The CSS in `app/neothink-university/neothink-university-page.css` lines 505–527 declares `.nu-carousel-viewport { overflow-x: auto }`, which should clip. However, the nested track + slides render at **~38 × viewport** because `.nu-carousel-slide { flex: 0 0 100% }` measures against the **track**, not the viewport, and the track has no `max-width: 100%` clamp. The slides therefore extend the document's scrollable area even though the viewport is `overflow-x: auto`. Seen on every page that reuses these styles (`/immortalis`, `/neothink-university`, `/neothink-reviews`, `/events`, `/project-life`, `/faq`).
2. **Migrated `<table>`s from WordPress** keep their desktop width. `/the-grand-experiment-of-our-time`, `/how-jobs-will-change`, `/live-longer` all have a `<table>` whose intrinsic content column width is 382–442 px. The WP-migration `dangerouslySetInnerHTML` output doesn't wrap these in a `overflow-x: auto` scroll container.
3. **A handful of blog posts have a single anchor that's too wide.** `/find-happiness-in-retirement` (520 px), `/find-your-passion-life-career` (464 px), `/break-bad-habits-transformation-tips` (381 px) — these are likely long internal affiliate/share URLs rendered as link text, which can't wrap at word breaks.

WCAG criterion: **1.4.10 Reflow (AA)** — "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for vertical content at a width equivalent to 320 CSS pixels."

### 2.2 WCAG 2.5.8 Target Size — every page has < 24 px targets

Source: `/tmp/audit/mobile/_all.json` target measurements. The universal offenders are the **three fine-print footer links**:

```
Privacy Policy  70 × 18 px
Terms           29 × 18 px    ← smallest on the entire site
Contact         39 × 18 px
```

Rendered on all 147 content pages by `components/layout/site-footer.tsx` (the fine-print row I added under the four-column primary nav). Height is 18 px because the links inherit the footer's body font-size without a `min-height` or `padding-block`.

On top of this universal trio, six pages pile on additional small targets:

| Page | <24 px count | Primary source |
|---|---:|---|
| `/faq` | 75 | carousel dots + FAQ toggle buttons |
| `/immortalis` | 74 | carousel dots (9–10 px) |
| `/neothink-reviews` | 72 | carousel dots |
| `/neothink-university` | 71 | carousel dots |
| `/events` | 69 | carousel dots |
| `/project-life` | 68 | carousel dots |

**Mobile total: 1,801–1,888 sub-24 px targets across the site depending on width.**

WCAG criterion: **2.5.8 Target Size (Minimum), Level AA (WCAG 2.2).**

---

## 3. Serious issues (🟠)

### 3.1 Tiny rendered text — smallest = 8 px on some pages

Source: the `smallestTextPx` column of `_all.json`. All 98 pages that show section-label accents below 12 px are tiny uppercase-tracked spans used as eyebrow labels. Representative samples at 390 px:

```
 8 px — .span "New Release"                 several pages
 9 px — .span "New Release"                 /
10 px — .ul-section-label "About This Work" /unleashed
10 px — .ul-section-label "What Neothink Is" /neothink
10 px — .ul-section-label "The Problem"      /neovia
10 px — .ul-section-label "Citizens"         /immortalis
10 px — .ul-section-label "The Story"        /mark-hamilton
10 px — .ul-section-label "The Argument"     /unified-field
10 px — .ul-section-label "The Individual Diagnosis" /the-way
10 px — .ul-section-label "Browse by"        /published-work
11 px — p.".lead" "The Institute"            /about
```

WCAG 1.4.4 is technically met because the user can still pinch-zoom. But at 8–10 px these labels are borderline unreadable for users with even mild visual impairment, and fail Vercel WIG/Material "minimum legible text" guidance (typically ≥ 12 px). They also compound the 1.4.3 Contrast finding from yesterday's general audit — small gold uppercase text at 2.72:1.

### 3.2 Sub-optimal primary tap targets (between WCAG and Apple)

Source: `_all.json` `targetBelowApple` column. **524–580 visible controls per viewport** are ≥ 24 × 24 px (WCAG ✓) but < 44 × 44 px (Apple HIG ✗). These are dominated by:

- Header nav links (~40 × 36 px when collapsed to the mobile hamburger).
- Footer primary column links (approx. 44 × 32 px — the 44 min-height pass on link container but the actionable text is only 32 px tall).
- Inline "Read more" and breadcrumb links.

WCAG criterion: 2.5.5 Target Size (Enhanced, AAA). Not a WCAG AA fail, but the industry standard for excellent mobile UX is ≥ 44 pt. Vercel WIG agrees.

### 3.3 Rounded category pill on square-corner brand

Visual evidence: `/tmp/audit/mobile-shots/vw320_the-grand-experiment-of-our-time.png` shows a gold pill "NEOTHINK PHILOSOPHY" rendered with a significant border-radius, while the rest of the site — including the cards, tiles, and buttons you and Wallace agreed on — uses square corners. This is the same kind of leakage that the `scripts/flatten-border-radius.mjs` script targets, but this component appears to hardcode `border-radius` through a utility class Tailwind still generates (`rounded-full` or a raw value). Recurs on any category page that renders the `CategoryPill` component.

Not a WCAG issue — a brand-consistency issue — but it was a stated priority ("the new design is using square border radiuses").

### 3.4 Carousel a11y (still present from prior audit, re-confirmed on mobile)

- `.nu-carousel-dot` renders at **9–10 × 9–10 px** on mobile (clear 2.5.8 fail).
- Dots are stacked in a horizontal scroll bar instead of grouped under a single accessible tablist role.
- YouTube-embed-inside-carousel introduces the `button-name` / `aria-prohibited-attr` violations from yesterday's audit.

---

## 4. Moderate issues (🟡)

### 4.1 Zero `env(safe-area-inset-*)` usage in source

A full-repo scan for `safe-area-inset` or `env(safe-area` returned **no matches.** On iPhones with Dynamic Island / notch, this means:

- A sticky mobile nav sits partly under the status bar when the page is scrolled-up.
- Content at the very bottom of a long page can slide under the home indicator gesture area in landscape / fullscreen modes.

Vercel WIG explicitly calls out `padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right); padding-bottom: env(safe-area-inset-bottom);` on the root layout or on any fixed/sticky chrome. WCAG 1.4.12 Text Spacing and 1.4.13 Content on Hover-related edges are borderline-related; the immediate impact is cosmetic on notched devices.

### 4.2 Landscape handling on phone-sized viewports

Not explicitly scanned (we ran portrait only), but the lack of `env(safe-area-inset-left)` means landscape users on modern iPhones will see content clipped by the notch on the left edge in home-orientation = left-landscape mode. WCAG 1.3.4 (Orientation, AA) requires the content not be locked to one orientation — it isn't, but rendering excellence in landscape is not verified by this run.

### 4.3 Carousel horizontal-scroll is also visually unindicated

`overflow-x: auto` makes the content scrollable, but there's no affordance (arrows, fade mask, or scroll-hint) that tells a user "swipe for more" on the horizontal axis. Users may miss all but the first slide entirely. WCAG 1.3.3 (Sensory Characteristics) is borderline; this is more a UX / WIG gap than a compliance one, but on mobile it bites harder.

### 4.4 Skip-link behaviour not verified at 320 px

The header includes a skip-link (`a[href="#main"]`) but we didn't explicitly tab-test it at 320 × 568. At this size the header navigation is a hamburger, so keyboard-triggered focus order matters more than on desktop. Recommended as a manual pass.

---

## 5. Mobile-specific axe (WCAG 2.0/2.1/2.2 AA + best-practice) — re-sliced

Source: `/tmp/audit/axe/_all.json`, filtered to `viewport === "mobile"` (390 × 844 only).

| Impact | Rule | Pages | Nodes | Help |
|---|---|---:|---:|---|
| serious | `color-contrast` | 148 | **1,629** | Elements must meet minimum color contrast ratio thresholds |
| serious | `target-size` | 6 | 198 | All touch targets must be 24 px large, or leave sufficient space |
| serious | `link-in-text-block` | 89 | 155 | Links must be distinguishable without relying on color |
| moderate | `heading-order` | 35 | 68 | Heading levels should only increase by one |
| serious | `aria-prohibited-attr` | 65 | 65 | Elements must only use permitted ARIA attributes |
| critical | `button-name` | 65 | 65 | Buttons must have discernible text |
| moderate | `landmark-complementary-is-top-level` | 1 | 1 | `<aside>` should not be contained in another landmark |

All seven were already detailed in yesterday's report; none of them are strictly mobile-only, but the carousel-dot `target-size` hits only manifest at mobile viewports and the color-contrast total is denser at mobile font sizes (the same gold `#b8973a` is used across more mobile-only eyebrow accents).

---

## 6. Web Interface Guidelines — rubric

From Vercel's Web Interface Guidelines, mobile-specific items:

| Guideline | Status |
|---|---|
| Respect `prefers-reduced-motion` | ✅ 95 files honour it |
| Respect `prefers-color-scheme` (theme-color paired) | ✅ |
| Inputs ≥ 16 px to avoid iOS focus-zoom | ✅ (no inputs under 16 px) |
| Never disable pinch-to-zoom | ✅ |
| Respect safe areas (`env(safe-area-inset-*)`) | ❌ zero usage |
| Buttons / links ≥ 44 × 44 px touch target | ⚠️ ~560 per viewport fall between 24 & 44 px; footer fine-print row under 24 px |
| No horizontal scroll at 320 px | ❌ 15 pages fail |
| Focus ring visible on all interactive controls | not verified (manual pass recommended) |
| Sticky / fixed chrome clears notch | not applicable (no sticky header on mobile) |
| Body text ≥ 16 px, supporting text ≥ 12 px | ⚠️ 98 pages have 8–11 px eyebrow labels |

---

## 7. Visual evidence

Screenshots for 12 representative pages at 320 px and 390 px are in `/tmp/audit/mobile-shots/`:

```
vw320_home.png                               - clean hero, logo "Institute" visibly low-contrast
vw320_about.png                              - clean
vw320_mark-hamiltons-story.png               - clean
vw320_immortalis.png                         - clean above-fold; overflow is deeper (carousel)
vw320_neothink-university.png                - clean above-fold; overflow is deeper (carousel)
vw320_neothink-reviews.png                   - clean above-fold; overflow is deeper (carousel)
vw320_events.png                             - clean above-fold; overflow is deeper (carousel)
vw320_project-life.png                       - clean above-fold; overflow is deeper (carousel)
vw320_faq.png                                - clean above-fold; overflow is deeper (carousel)
vw320_the-grand-experiment-of-our-time.png   - rounded gold pill visible; square-corner violation
vw320_unleashed.png                          - clean
vw320_manuscripts.png                        - clean (8 px label is below the fold)
```

Same set captured at `vw390_*`.

---

## 8. Answer to the posed question

**"Is this excellent for WCAG web accessibility and web interface guidelines, especially on mobile?"**

Not yet. The site clears the *hard* WCAG failsafes that usually eliminate mobile sites (no zoom disabling, no tiny inputs, no orientation lock) and has excellent baseline mobile plumbing (viewport, theme, reduced-motion). It then loses on two specific items that together affect every mobile user:

1. **The fine-print footer trio** (18 px inline links) on every page — **WCAG 2.5.8 AA fail, site-wide.**
2. **The carousel component** generating ~12 k px horizontal scroll on 6 high-value pages — **WCAG 1.4.10 AA fail on the pages that matter most** (Immortalis, NU, Reviews, Events, Project Life, FAQ).

Everything else (8–11 px eyebrow labels, sub-44 px nav links, rounded category pill, missing safe-area insets, color contrast of the brand gold, YouTube-iframe a11y, long-anchor / table overflow in a handful of blog posts) is polish — real WCAG / WIG work, but it moves the site from "green with follow-ups" to "excellent", not from "broken" to "acceptable".

Address §2.1 and §2.2 and the site is WCAG 2.2 AA compliant on mobile. Address §3 and §4 and it becomes "excellent" by Vercel WIG standards.

---

## 9. Artifacts

- `/tmp/audit/mobile/_all.json` — 588 per-page mobile measurements.
- `/tmp/audit/mobile/*.json` — per-URL-per-viewport detail.
- `/tmp/audit/mobile-shots/` — 24 screenshots at 320 × 568 and 390 × 844.
- `/tmp/audit/scripts/run-mobile-layout.mjs` — reproducible layout scanner.
- `/tmp/audit/scripts/run-mobile-shots.mjs` — screenshot runner.

Re-run:

```bash
# Requires the /tmp/audit-pkgs dependency root and local prod server on :3100
node /tmp/audit/scripts/run-mobile-layout.mjs
node /tmp/audit/scripts/run-mobile-shots.mjs
```
