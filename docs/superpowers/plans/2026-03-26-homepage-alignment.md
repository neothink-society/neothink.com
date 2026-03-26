# Homepage Visual Alignment + SEO/AEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the Next.js homepage pixel-perfect with the WordPress source HTML while completing SEO/AEO optimizations.

**Architecture:** Single-pass update across 14 files. Design tokens first (globals.css), then systematic component fixes in dependency order (header → sections top-to-bottom → structured data). No new dependencies. No new files. All changes are CSS values, markup attributes, and data constants.

**Tech Stack:** Next.js 16.2.1, React 19.2.4, Tailwind CSS 4.2.2, TypeScript 5

**Spec:** `docs/superpowers/specs/2026-03-26-homepage-alignment-design.md`

---

### Task 1: Design Tokens — Fix fonts and add color tokens in globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Fix font declarations in `@theme inline`**

Replace the four font lines (lines 10-13) in `@theme inline`:
```css
/* REPLACE these lines: */
--font-sans: var(--font-jost);
--font-serif: var(--font-cormorant-garamond);
--font-mono: var(--font-geist-mono);
--font-heading: var(--font-cormorant-garamond);

/* WITH: */
--font-sans: "Jost", ui-sans-serif, system-ui, sans-serif;
--font-serif: "Cormorant Garamond", Georgia, serif;
--font-heading: "Cormorant Garamond", Georgia, serif;
--font-mono: ui-monospace, monospace;
```

- [ ] **Step 2: Add missing color tokens to `:root`**

Add after line 66 (`--cream: #F4F1EC;`):
```css
--gold-muted: #8A7030;
--border-secondary: #C8C0B0;
```

- [ ] **Step 3: Add new tokens to `@theme inline`**

Add after `--color-cream` line:
```css
--color-gold-muted: var(--gold-muted);
--color-border-secondary: var(--border-secondary);
```

- [ ] **Step 4: Verify build**

Run: `cd ~/Projects/neothink.com && pnpm build`
Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css
git commit -m "fix: use literal font names in @theme inline, add missing color tokens"
```

---

### Task 2: Site Header — Visual alignment

**Files:**
- Modify: `components/layout/site-header.tsx`

- [ ] **Step 1: Fix logo font weight**

Line 72: change `font-light` to `font-normal`

- [ ] **Step 2: Add top row bottom border**

Line 69, the top row div: add `border-b border-[rgba(184,151,58,0.1)]` to className.

- [ ] **Step 3: Fix dot separator spacing**

Line 113: change `mx-3` to `mx-0.5`

- [ ] **Step 4: Remove dot before CTA**

Delete line 123 (the extra dot span before the "Read Unleashed" link).

- [ ] **Step 5: Fix CTA hover color**

Line 126: change `hover:bg-[#D4B060]` to `hover:bg-[#C8A840]`

- [ ] **Step 6: Fix scrolled shadow**

Line 63: change `shadow-[0_1px_8px_rgba(0,0,0,0.06)]` to `shadow-[0_2px_24px_rgba(0,0,0,0.06)]`

- [ ] **Step 7: Replace font arbitrary values with font-serif**

Replace all `font-[family-name:var(--font-cormorant-garamond)]` with `font-serif` in this file.

- [ ] **Step 8: Verify typecheck**

Run: `cd ~/Projects/neothink.com && pnpm typecheck`

- [ ] **Step 9: Commit**

```bash
git add components/layout/site-header.tsx
git commit -m "fix: align site header with WordPress source — logo weight, dots, shadow, CTA hover"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Fix eyebrow color**

Line 8: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix animation delays**

Change `animationDelay` values:
- Eyebrow (line 8): `"0s"` → `"0.2s"`
- H1 (line 14): `"0.1s"` → `"0.4s"`
- Subtitle (line 20): `"0.2s"` → `"0.6s"`
- Actions (line 31): `"0.3s"` → `"0.8s"`
- Scroll indicator (line 54): `"0.5s"` → `"1.2s"`

- [ ] **Step 3: Fix primary button hover**

Line 36: change `hover:bg-[#2a2a2a]` to `hover:bg-[#B8973A] hover:border-[#B8973A]`. Add `border border-[#0E0E0E]` if not already present (WP has explicit border).

- [ ] **Step 4: Fix outline button border**

Line 42: change `border-[#E8E3D8]` to `border-[#C8C0B0]`

- [ ] **Step 5: Replace font arbitrary values with font-serif**

Replace `font-[family-name:var(--font-cormorant-garamond)]` with `font-serif`.

- [ ] **Step 6: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "fix: align hero section — eyebrow color, animation timing, button hover"
```

---

### Task 4: Announcement Section

**Files:**
- Modify: `components/sections/announcement.tsx`

- [ ] **Step 1: Fix watermark color and position**

Line 7-9: change `text-[#0E0E0E]` to `text-[#B8973A]`. Change positioning from centered (`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`) to right-aligned. Use: `right-[-10px] top-1/2 -translate-y-1/2` and remove left/translateX.

- [ ] **Step 2: Fix badge styling**

Line 48: change `px-3 py-1 text-[10px] font-medium tracking-[0.15em]` to `px-5 py-2.5 text-[11px] font-bold tracking-[0.28em]`

- [ ] **Step 3: Fix subtitle**

Line 59: change `text-[15px]` to `text-[13px]`, change `text-[#8A7030]` to `text-[#B8973A]`, change tracking to `tracking-[0.18em]`

- [ ] **Step 4: Fix body text**

Lines 62, 67: change `text-[15px]` to `text-[16px]`, change `leading-[1.75]` to `leading-[1.8]`

- [ ] **Step 5: Fix primary button hover**

Line 71: change `hover:bg-[#2a2a2a]` to `hover:bg-[#B8973A] hover:border-[#B8973A]`

- [ ] **Step 6: Fix outline button border**

Line 77: change `border-[#E8E3D8]` to `border-[#C8C0B0]`

- [ ] **Step 7: Replace font arbitrary values with font-serif**

- [ ] **Step 8: Commit**

```bash
git add components/sections/announcement.tsx
git commit -m "fix: align announcement section — watermark, badge, subtitle, buttons"
```

---

### Task 5: Statement Section

**Files:**
- Modify: `components/sections/statement.tsx`

- [ ] **Step 1: Fix body line-height**

Lines 25, 29, 40: change `leading-[1.8]` to `leading-[1.85]`

- [ ] **Step 2: Fix paragraph gap**

Line 24: change `gap-6` to `gap-5`

- [ ] **Step 3: Replace font arbitrary values with font-serif**

- [ ] **Step 4: Commit**

```bash
git add components/sections/statement.tsx
git commit -m "fix: align statement section — line-height, paragraph gap"
```

---

### Task 6: Unified Field Section

**Files:**
- Modify: `components/sections/unified-field.tsx`

- [ ] **Step 1: Fix label color**

Line 33: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix H2 clamp**

Line 41: change `text-[clamp(32px,3.5vw,46px)]` to `text-[clamp(36px,3vw,52px)]`

- [ ] **Step 3: Fix em color**

Line 45: change `text-[#B8973A]` to `text-[#8A7030]`

- [ ] **Step 4: Fix body text**

Lines 47, 54: change `text-[15px]` to `text-[16px]` if not already, and `leading-[1.75]` to `leading-[1.8]` (WP uses 1.8 for this section)

- [ ] **Step 5: Fix card numeral color**

Line 77: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 6: Fix card padding**

Line 73: change `p-8` to `px-10 py-9`

- [ ] **Step 7: Fix button border**

Line 62: change `border-[#E8E3D8]` to `border-[#C8C0B0]`

- [ ] **Step 8: Replace font arbitrary values with font-serif**

- [ ] **Step 9: Commit**

```bash
git add components/sections/unified-field.tsx
git commit -m "fix: align unified field section — colors, sizes, card padding, button border"
```

---

### Task 7: Founder Section

**Files:**
- Modify: `components/sections/founder.tsx`

- [ ] **Step 1: Fix label color**

Line 31: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix subtitle**

Line 40: change `text-[11px]` to `text-[13px]`, change `text-[#8A7030]` to `text-[#B8973A]`, change tracking to `tracking-[0.14em]`

- [ ] **Step 3: Fix body text size and line-height**

Lines 44, 50, 58: change `text-[15px]` to `text-[16px]`, change `leading-[1.75]` to `leading-[1.85]`

- [ ] **Step 4: Add `<strong>` entity emphasis**

Line ~51: wrap "Unified Field of Conscious Civilization" in `<strong>` tags
Line ~53: wrap "Neovia" in `<strong>` tags
(These match the WP source which uses `<strong>` on these terms)

- [ ] **Step 5: Fix pullquote size**

Line 68: change `text-[18px]` to `text-[17px]`

- [ ] **Step 6: Fix caption overlay**

Line 116: change `bg-gradient-to-t from-[#0E0E0E]/80 to-transparent` to `bg-[rgba(14,14,14,0.92)]`

- [ ] **Step 7: Fix caption name font**

Line 118: change `text-[14px] font-normal` to `font-serif text-[18px] font-normal`

- [ ] **Step 8: Fix button border**

Line 99: change `border-[#E8E3D8]` to `border-[#C8C0B0]`

- [ ] **Step 9: Replace font arbitrary values with font-serif**

- [ ] **Step 10: Commit**

```bash
git add components/sections/founder.tsx
git commit -m "fix: align founder section — subtitle, body text, caption, entity emphasis"
```

---

### Task 8: Podcast Section

**Files:**
- Modify: `components/sections/podcast.tsx`

- [ ] **Step 1: Fix label color**

Line 5: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix H2 clamp**

Line 12: change `text-[clamp(36px,4vw,52px)]` to `text-[clamp(32px,2.8vw,46px)]`

- [ ] **Step 3: Fix em color**

Line 13: change `text-[#B8973A]` to `text-[#8A7030]`

- [ ] **Step 4: Fix body text**

Lines 16, 22: change `text-[15px]` to `text-[16px]`, change `leading-[1.75]` to `leading-[1.85]`

- [ ] **Step 5: Fix button hover**

Line 32: change `hover:bg-[#2a2a2a]` to `hover:bg-[#B8973A] hover:border-[#B8973A]`

- [ ] **Step 6: Fix YouTube URL**

Line 29: change `https://youtube.com/@neothinkinstitute` to `https://www.youtube.com/@realmarkhamilton`

- [ ] **Step 7: Fix visual subtitle opacity**

Line 52: change `text-[#FDFCFA]/65` to `text-[rgba(253,252,250,0.45)]`

- [ ] **Step 8: Make "12 Founding Episodes" a link**

Line 54: change `<div>` wrapper to `<a href="https://www.youtube.com/@realmarkhamilton" target="_blank" rel="noopener noreferrer">` with hover styling `hover:border-[rgba(184,151,58,0.7)] hover:text-[#B8973A]`. Change text to `text-[11px] tracking-[0.18em] text-[#D4B060]`.

- [ ] **Step 9: Replace font arbitrary values with font-serif**

- [ ] **Step 10: Commit**

```bash
git add components/sections/podcast.tsx
git commit -m "fix: align podcast section — colors, sizes, YouTube URL, episode link"
```

---

### Task 9: Neovia Section

**Files:**
- Modify: `components/sections/neovia.tsx`

- [ ] **Step 1: Fix watermark position**

Line 42: change from centered to right-aligned. Replace `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2` with `right-[-20px] top-1/2 -translate-y-1/2`.

- [ ] **Step 2: Fix H2 clamp**

Line 55: change `text-[clamp(32px,3.5vw,46px)]` to `text-[clamp(36px,3vw,52px)]`

- [ ] **Step 3: Fix body text**

Lines 60, 67, 74: change `text-[15px]` to `text-[16px]`, change `leading-[1.75]` to `leading-[1.85]`

- [ ] **Step 4: Rebuild stats grid with bordered cells**

Replace the current `grid grid-cols-2 gap-6` stats layout with:
```tsx
<div className="mt-10 grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)]">
  {STATS.map((stat) => (
    <div key={stat.label} className="bg-[rgba(14,14,14,0.6)] px-8 py-7">
      <p className="font-serif text-[36px] font-light leading-none text-[#D4B060]">
        {stat.value === "Prime Law" ? <>Prime<br />Law</> : stat.value}
      </p>
      <p className="mt-2 text-[12px] font-normal uppercase tracking-[0.12em] text-[rgba(253,252,250,0.45)]">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

- [ ] **Step 5: Fix feature card styling**

Lines 106-119: change `p-6` to `px-9 py-8`, change h3 `text-[18px]` to `text-[20px]`, change desc opacity from `text-[#FDFCFA]/65` to `text-[rgba(253,252,250,0.5)]`, change hover from `hover:bg-[#161614]` to `hover:bg-[rgba(184,151,58,0.06)]`.

- [ ] **Step 6: Replace font arbitrary values with font-serif**

- [ ] **Step 7: Commit**

```bash
git add components/sections/neovia.tsx
git commit -m "fix: align neovia section — watermark, stats grid, feature cards"
```

---

### Task 10: The Way Section

**Files:**
- Modify: `components/sections/the-way.tsx`

- [ ] **Step 1: Fix label color**

Line 29: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix intro quote**

Line 50: change `text-[20px]` to `text-[22px]`, change `items-start` to `items-center`

- [ ] **Step 3: Fix stage card styling**

Lines 68-84: change padding `p-8` to `px-10 py-12`, change h3 `text-[24px]` to `text-[28px]`, change body `text-[14px] leading-[1.7]` to `text-[15px] leading-[1.8]`

- [ ] **Step 4: Fix stage tag color**

Line 81: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 5: Add inline italic to Stage I**

Change `STAGES` array: convert `description` type from plain string to `ReactNode`. Update Stage I description to include `<i>what is.</i>` italic:
```tsx
description: <>The recognition that you have been asleep. Learning to see through illusions down to <i>what is.</i> Become aware of the conditioned self and imprints of external authority installed without your knowledge.</>,
```
Remove `as const` from array (ReactNode isn't const-compatible). Type the array explicitly.

- [ ] **Step 6: Fix footer quote size and add quotation marks**

Line 91: change `text-[18px]` to `text-[28px]`. Wrap text in curly quotes:
`&ldquo;We do not tell you who you are. We show you how to remove all that is not you. What is left, is you.&rdquo;`

- [ ] **Step 7: Fix button hover**

Line 97: change `hover:bg-[#2a2a2a]` to `hover:bg-[#B8973A] hover:border-[#B8973A]`

- [ ] **Step 8: Replace font arbitrary values with font-serif**

- [ ] **Step 9: Commit**

```bash
git add components/sections/the-way.tsx
git commit -m "fix: align the-way section — quote, stage cards, footer, italic emphasis"
```

---

### Task 11: Neothink Section

**Files:**
- Modify: `components/sections/neothink-section.tsx`

- [ ] **Step 1: Fix label color**

Line 33: change `text-[#8A7030]` to `text-[#B8973A]`

- [ ] **Step 2: Fix H2 clamp**

Line 40: change `text-[clamp(36px,4vw,52px)]` to `text-[clamp(32px,2.8vw,46px)]`

- [ ] **Step 3: Fix em color**

Line 42: change `text-[#B8973A]` to `text-[#8A7030]`

- [ ] **Step 4: Fix body line-height**

Lines 44, 50, 57: change `leading-[1.75]` to `leading-[1.85]`

- [ ] **Step 5: Rebuild capability list with grid gap trick**

Replace current flex layout with bordered grid:
```tsx
<div className="bg-[#E8E3D8] border border-[#E8E3D8]">
  {CAPABILITIES.map((cap, i) => (
    <div
      key={i}
      className={`nti-reveal flex gap-4 bg-[#F4F1EC] px-7 py-6 transition-colors duration-200 hover:bg-[#FDFCFA] ${i > 0 ? "mt-px" : ""}`}
    >
      <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B8973A]" />
      <div>
        <p className="text-[14px] font-medium text-[#0E0E0E]">{cap.title}</p>
        <p className="mt-1 text-[14px] font-light leading-[1.65] text-[#4A4540]">{cap.description}</p>
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 6: Add inline emphasis to "See What Others Cannot"**

Convert `CAPABILITIES` description type to `ReactNode`. Update the second capability:
```tsx
description: <>The ability to see reality directly, through illusion, past appearances, down to <em>what is.</em> Once given, it cannot be taken back.</>,
```

- [ ] **Step 7: Fix button**

Line 65: change `border-[#E8E3D8]` to `border-[#C8C0B0]`, add `hover:text-[#B8973A]`

- [ ] **Step 8: Replace font arbitrary values with font-serif**

- [ ] **Step 9: Commit**

```bash
git add components/sections/neothink-section.tsx
git commit -m "fix: align neothink section — colors, capability grid, italic emphasis"
```

---

### Task 12: Prime Law Section

**Files:**
- Modify: `components/sections/prime-law.tsx`

- [ ] **Step 1: Fix link tracking**

Line 22: change `tracking-[0.1em]` to `tracking-[0.15em]`

- [ ] **Step 2: Fix link hover tracking**

Line 22: change `hover:tracking-[0.18em]` to `hover:tracking-[0.22em]`

- [ ] **Step 3: Fix blockquote line-height**

Line 9: change `leading-[1.7]` to `leading-[1.65]`

- [ ] **Step 4: Replace font arbitrary values with font-serif**

- [ ] **Step 5: Commit**

```bash
git add components/sections/prime-law.tsx
git commit -m "fix: align prime law section — tracking, line-height"
```

---

### Task 13: Published Work Section

**Files:**
- Modify: `components/sections/published-work.tsx`

- [ ] **Step 1: Add slug field to ARTICLES data**

Add `slug` to each article object:
```tsx
{ slug: "unified-field", tag: "Civilizational Theory", title: "The Unified Field...", ... },
{ slug: "bicameral-mind", tag: "Consciousness Studies", title: "The Bicameral Mind...", ... },
{ slug: "prime-law", tag: "Political Theory", title: "The Prime Law...", ... },
{ slug: "ai-purpose-void", tag: "AI & Civilization", title: "The Purpose Void...", ... },
{ slug: "neovia-case", tag: "Neovia", title: "The Case for Neovia...", ... },
{ slug: "performing-self", tag: "The Way", title: "The Performing Self...", ... },
```

- [ ] **Step 2: Fix label color and spacing**

Line 56: change `text-[#8A7030]` to `text-[#B8973A]`, change `mb-2` to `mb-5`

- [ ] **Step 3: Fix H2 clamp**

Line 59: change `text-[clamp(36px,4vw,52px)]` to `text-[clamp(32px,2.8vw,46px)]`

- [ ] **Step 4: Wrap cards in links**

Change each `<article>` to be wrapped in `<a href={`/articles/${article.slug}`}>`. The `<a>` tag becomes the outer element with the card styling, `<article>` remains inside for semantics:
```tsx
<a
  key={article.slug}
  href={`/articles/${article.slug}`}
  className="nti-reveal group block bg-[#F4F1EC] px-8 py-9 transition-colors duration-200 hover:bg-[#FDFCFA] border border-[#E8E3D8] -mt-px first:mt-0 md:[&:nth-child(-n+2)]:mt-0 lg:[&:nth-child(-n+3)]:mt-0 md:-ml-px md:first:ml-0 md:[&:nth-child(2n+1)]:ml-0 lg:[&:nth-child(2n+1)]:ml-px lg:[&:nth-child(3n+1)]:ml-0"
>
```

- [ ] **Step 5: Fix card tag color and tracking**

Change `text-[#8A7030]` to `text-[#B8973A]`, change `tracking-[0.15em]` to `tracking-[0.2em]`

- [ ] **Step 6: Fix button**

Change `border-[#E8E3D8]` to `border-[#C8C0B0]`, add `hover:text-[#B8973A]`

- [ ] **Step 7: Replace font arbitrary values with font-serif**

- [ ] **Step 8: Commit**

```bash
git add components/sections/published-work.tsx
git commit -m "fix: align published work — cards as links, slugs, colors, spacing"
```

---

### Task 14: Structured Data + SEO/AEO

**Files:**
- Modify: `lib/structured-data.ts`

- [ ] **Step 1: Add LinkedIn to sameAs**

In `getOrganizationSchema()` sameAs array (line 37), add:
`"https://www.linkedin.com/company/neothink-institute"`

- [ ] **Step 2: Update Twitter URL**

In sameAs array, change `"https://twitter.com/NeothinkHQ"` to `"https://x.com/NeothinkHQ"`

- [ ] **Step 3: Commit**

```bash
git add lib/structured-data.ts
git commit -m "fix: update structured data — add LinkedIn, update X/Twitter URL"
```

---

### Task 15: Final Verification

- [ ] **Step 1: Typecheck**

Run: `cd ~/Projects/neothink.com && pnpm typecheck`
Expected: No errors.

- [ ] **Step 2: Build**

Run: `cd ~/Projects/neothink.com && pnpm build`
Expected: Build succeeds.

- [ ] **Step 3: Start dev server**

Run: `cd ~/Projects/neothink.com && pnpm dev`
Open http://localhost:3000

- [ ] **Step 4: Font verification**

In browser DevTools, inspect any heading element. Confirm computed `font-family` is `"Cormorant Garamond"`. Inspect body text, confirm `"Jost"`.

- [ ] **Step 5: Visual spot-check at 3 breakpoints**

Check at 375px, 768px, 1280px:
- Gold eyebrow labels are bright `#B8973A`
- Italic `<em>` text in headings is muted `#8A7030`
- Primary button hover goes gold
- Outline button borders are warm `#C8C0B0`
- Stats grid in Neovia has bordered cells
- Footer quote in The Way is large (28px)
- Published work cards are clickable links

- [ ] **Step 6: Heading hierarchy check**

Run: `grep -rn '<h1' ~/Projects/neothink.com/components/`
Expected: Only one result — `hero.tsx`.

- [ ] **Step 7: Hover state verification**

Manually hover all CTA buttons. Confirm gold hover on light sections, gold-light on dark sections.
