# Homepage Visual Alignment + SEO/AEO Optimization

**Date:** 2026-03-26
**Project:** ~/Projects/neothink.com (Next.js 16.2.1)
**Scope:** Align all homepage sections pixel-perfect with WordPress source HTML, fix Tailwind v4 font configuration, complete SEO/AEO optimizations

## Source of Truth

WordPress homepage HTML (provided by user in conversation). All visible text, colors, spacing, sizes, and hover effects match WordPress exactly. Next.js semantic improvements (blockquote, cite, aria, sr-only headings) are kept.

## 1. Design Token Fixes (`app/globals.css`)

### Font declarations in `@theme inline`

**Problem:** `--font-sans: var(--font-jost)` uses a runtime variable in a parse-time context. Fonts work via arbitrary values in components but not via Tailwind `font-sans`/`font-serif` utilities.

**Fix:** Use literal font family names and fix all font references:
```css
@theme inline {
  --font-sans: "Jost", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, serif;
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-mono: ui-monospace, monospace; /* Geist Mono not imported — use fallback */
}
```

**Component migration (~25 instances):** Replace all `font-[family-name:var(--font-cormorant-garamond)]` with `font-serif` across all section components and site-header.

### Add missing color tokens to `:root`

```css
:root {
  --gold-muted: #8A7030;      /* <em> italic text in headings */
  --border-secondary: #C8C0B0; /* outline button borders */
}
```

Note: `#C8A840` (nav CTA hover) is used only once in site-header — use raw hex inline, no variable needed.

Note: Dark-section gold (`#D4B060`) values are already correct and intentionally NOT changed.

### Add to `@theme inline`

```css
--color-gold-muted: var(--gold-muted);
--color-border-secondary: var(--border-secondary);
```

## 2. Systematic Component Fixes

Apply across ALL section components:

### Colors (swapped gold values)
- Labels/eyebrows: change `text-[#8A7030]` → `text-[#B8973A]` (or `text-gold`)
- `<em>` italic: change `text-[#B8973A]` → `text-[#8A7030]` (or `text-gold-muted`)

### Buttons (light sections)
- Primary hover: change `hover:bg-[#2a2a2a]` → `hover:bg-[#B8973A] hover:border-[#B8973A]`
- Outline border: change `border-[#E8E3D8]` → `border-[#C8C0B0]`
- Outline hover: keep `hover:border-[#B8973A] hover:text-[#B8973A]`

### Typography
- Body text: change `text-[15px]` → `text-[16px]` in all paragraph elements
- Line-height: change `leading-[1.75]` → `leading-[1.85]` in all body paragraphs
- Use `font-serif` utility instead of `font-[family-name:var(--font-cormorant-garamond)]`
- Use `font-sans` utility (implicit, default) instead of explicit font references

## 3. Per-Component Fixes

### `components/sections/hero.tsx`
- Eyebrow: `text-[#8A7030]` → `text-[#B8973A]`
- `<em>` color: already `text-[#8A7030]` — no change needed (matches WP)
- Animation delays: `0s/0.1s/0.2s/0.3s/0.5s` → `0.2s/0.4s/0.6s/0.8s/1.2s`
- Body: `text-[17px]` stays (matches WP)

### `components/sections/announcement.tsx`
- Watermark: `text-[#0E0E0E] opacity-[0.06]` → `text-[#B8973A] opacity-[0.06]` (gold tint, not black)
- Watermark position: centered → `right: -10px` right-aligned
- Badge: `px-3 py-1 text-[10px] font-medium tracking-[0.15em]` → `px-5 py-2.5 text-[11px] font-bold tracking-[0.28em]`
- Subtitle: `text-[15px]` → `text-[13px]`, color `#8A7030` → `#B8973A`
- Body: `text-[15px]` → `text-[16px]`, `leading-[1.75]` → `leading-[1.8]`
- Primary button hover: `hover:bg-[#2a2a2a]` → `hover:bg-[#B8973A] hover:border-[#B8973A]`

### `components/sections/statement.tsx`
- Line-height: `leading-[1.8]` → `leading-[1.85]`
- Paragraph gap: `gap-6` (24px) → `gap-5` (20px)

### `components/sections/unified-field.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- H2: `clamp(32px,3.5vw,46px)` → `clamp(36px,3vw,52px)`
- Em: `text-[#B8973A]` → `text-[#8A7030]`
- Card numeral: `text-[#8A7030]` → `text-[#B8973A]`
- Card padding: `p-8` → `px-10 py-9` (40px/36px)
- Button border: `border-[#E8E3D8]` → `border-[#C8C0B0]`

### `components/sections/founder.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- Subtitle: `text-[11px]` → `text-[13px]`, color `#8A7030` → `#B8973A`
- Body: `text-[15px]` → `text-[16px]`, `leading-[1.75]` → `leading-[1.85]`
- Add `<strong>` on "Unified Field of Conscious Civilization" and "Neovia" in body text
- Pullquote: `text-[18px]` → `text-[17px]`
- Caption overlay: gradient → solid `rgba(14,14,14,0.92)`
- Caption name: `text-[14px]` system font → `font-serif text-[18px] font-normal`
- Button border: `border-[#E8E3D8]` → `border-[#C8C0B0]`

### `components/sections/podcast.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- H2: `clamp(36px,4vw,52px)` → `clamp(32px,2.8vw,46px)`
- Em: `text-[#B8973A]` → `text-[#8A7030]`
- Body: `text-[15px]` → `text-[16px]`, `leading-[1.75]` → `leading-[1.85]`
- Button hover: `hover:bg-[#2a2a2a]` → `hover:bg-[#B8973A] hover:border-[#B8973A]`
- Visual subtitle: `text-[#FDFCFA]/65` → `text-[rgba(253,252,250,0.45)]`
- "12 Founding Episodes": make clickable `<a>` linking to YouTube, style `text-[11px] tracking-[0.18em] text-[#D4B060]` with hover
- YouTube URL: verify `@realmarkhamilton` vs `@neothinkinstitute` — use WP value `@realmarkhamilton`

### `components/sections/neovia.tsx`
- Watermark: centered → right-aligned `right: -20px`
- H2: `clamp(32px,3.5vw,46px)` → `clamp(36px,3vw,52px)`
- Body: `text-[15px]` → `text-[16px]`, `leading-[1.75]` → `leading-[1.85]`
- Stats grid: open `gap-6` → bordered cells with `1px` gap bg trick using `rgba(255,255,255,0.08)` background
- Stats label: `font-medium` → `font-normal` (400)
- "Prime Law" stat: add `<br>` between Prime and Law
- Feature padding: `p-6` → `px-9 py-8` (36px/32px)
- Feature h4: `text-[18px]` → `text-[20px]`
- Feature desc opacity: `text-[#FDFCFA]/65` → `text-[rgba(253,252,250,0.5)]`
- Feature hover: `bg-[#161614]` → `bg-[rgba(184,151,58,0.06)]` (gold tint)

### `components/sections/the-way.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- Quote: `text-[20px]` → `text-[22px]`, `items-start` → `items-center`
- Stage padding: `p-8` → `px-10 py-12` (40px/48px)
- Stage h3: `text-[24px]` → `text-[28px]`
- Stage body: `text-[14px] leading-[1.7]` → `text-[15px] leading-[1.8]`
- Stage tag: `text-[#8A7030]` → `text-[#B8973A]`
- Footer quote: `text-[18px]` → `text-[28px]`
- Footer quote: wrap text in quotation marks
- Add `<i>what is.</i>` italic emphasis in Stage I description
- Button hover: `hover:bg-[#2a2a2a]` → `hover:bg-[#B8973A] hover:border-[#B8973A]`

### `components/sections/neothink-section.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- H2: `clamp(36px,4vw,52px)` → `clamp(32px,2.8vw,46px)`
- Em: `text-[#B8973A]` → `text-[#8A7030]`
- Body line-height: `leading-[1.75]` → `leading-[1.85]`
- Capability layout: flex with border → grid gap `1px` bg trick with `#E8E3D8`
- Capability padding: `py-5` → `px-7 py-6` (28px/24px)
- Capability hover: add `hover:bg-[#FDFCFA]`
- Capability desc: `text-[13px]` → `text-[14px]`
- Add `<em>what is.</em>` in "See What Others Cannot" description
- Button border: `border-[#E8E3D8]` → `border-[#C8C0B0]`
- Button hover: add `hover:text-[#B8973A]` (WP goes gold text)

### `components/sections/prime-law.tsx`
- Link tracking: `tracking-[0.1em]` → `tracking-[0.15em]`
- Link hover: `hover:tracking-[0.18em]` → `hover:tracking-[0.22em]`
- Line-height: `leading-[1.7]` → `leading-[1.65]`

### `components/sections/published-work.tsx`
- Label: `text-[#8A7030]` → `text-[#B8973A]`
- Label spacing: `mb-2` → `mb-5` (20px)
- H2: `clamp(36px,4vw,52px)` → `clamp(32px,2.8vw,46px)`
- Cards: add `slug` field to `ARTICLES` data array, wrap each `<article>` in `<a href="/articles/{slug}">` tag
- Slugs: `unified-field`, `bicameral-mind`, `prime-law`, `ai-purpose-void`, `neovia-case`, `performing-self`
- Card tag: `text-[#8A7030]` → `text-[#B8973A]`, `tracking-[0.15em]` → `tracking-[0.2em]`
- Card background: add `bg-[#F4F1EC]` (cream)
- Card padding: `p-7` → `px-8 py-9` (32px/36px)
- Card hover: keep `hover:bg-[#FDFCFA]`
- Button border: `border-[#E8E3D8]` → `border-[#C8C0B0]`
- Button hover: add `hover:text-[#B8973A]`
- Article link slugs: unified-field, bicameral-mind, prime-law, ai-purpose-void, neovia-case, performing-self

### `components/layout/site-header.tsx`
- Logo: `font-light` → `font-normal` (400)
- Top row: add `border-b border-[rgba(184,151,58,0.1)]`
- Dot separators: `mx-3` → `mx-0.5` (2px spacing)
- Remove extra dot before CTA (WP has none before last item)
- CTA hover: `hover:bg-[#D4B060]` → `hover:bg-[#C8A840]`
- Scrolled shadow: `shadow-[0_1px_8px_...]` → `shadow-[0_2px_24px_rgba(0,0,0,0.06)]`

### `components/layout/site-footer.tsx`
- Needs full comparison with WP footer (not provided yet — keep current)

## 4. SEO/AEO Optimizations (Invisible)

### Fix dual H1
- Currently hero has `<h1>` — keep this one
- If any other section also has `<h1>`, demote to `<h2>`
- Verify with grep across all components

### Entity emphasis
- Add `<strong>` to key entity mentions in body text where WP uses `<strong>`:
  - `founder.tsx`: "Unified Field of Conscious Civilization" and "Neovia" (confirmed in WP source)
- For AEO-only entity emphasis (not in WP), use `<strong class="font-light">` to mark entities without visual weight change (body text is `font-light` 300, default `<strong>` would jump to 700):
  - "Prime Law" (first mention per section)
  - "Mark Hamilton" (first mention per section)
  - "Neothink mentality" (first mention)
- This helps AI engines identify entities for citation without changing visual design

### Inline emphasis requiring ReactNode
- `the-way.tsx` Stage I: change `description` from `string` to `ReactNode` to support `<i>what is.</i>`
- `neothink-section.tsx` "See What Others Cannot": same change for `<em>what is.</em>`
- Update the `STAGES` and `CAPABILITIES` const arrays to use `as const satisfies` with `ReactNode` description type

### Structured data updates (`lib/structured-data.ts`)
- Add LinkedIn to `sameAs`: `https://www.linkedin.com/company/neothink-institute`
- Update Twitter URL: `https://twitter.com/NeothinkHQ` → `https://x.com/NeothinkHQ`

### Heading hierarchy verification
- Ensure no heading levels are skipped (H1 → H3 without H2)
- All sections should use H2 for section headings, H3 for subsections

## 5. Files Modified

1. `app/globals.css` — font fix, new tokens
2. `components/sections/hero.tsx`
3. `components/sections/announcement.tsx`
4. `components/sections/statement.tsx`
5. `components/sections/unified-field.tsx`
6. `components/sections/founder.tsx`
7. `components/sections/podcast.tsx`
8. `components/sections/neovia.tsx`
9. `components/sections/the-way.tsx`
10. `components/sections/neothink-section.tsx`
11. `components/sections/prime-law.tsx`
12. `components/sections/published-work.tsx`
13. `components/layout/site-header.tsx`
14. `lib/structured-data.ts`

## 6. Verification

After all changes:
1. `pnpm build` — must succeed with no errors
2. `pnpm typecheck` — must pass
3. **Font utility verification:** inspect rendered page, confirm `font-sans` produces Jost and `font-serif` produces Cormorant Garamond in computed styles
4. **Visual comparison at 3 breakpoints:** 375px (mobile), 768px (tablet), 1280px (desktop) — compare each section against WP
5. **Hover state testing:** manually verify all button hover colors (gold on light sections, gold-light on dark sections)
6. **Animation timing:** verify hero entrance sequence feels natural at 0.2/0.4/0.6/0.8/1.2s delays
7. Lighthouse audit: target 90+ performance, 95+ accessibility, 100 SEO
8. Rich Results Test: validate JSON-LD structured data
9. Check heading hierarchy: only one H1, no skipped levels
10. **Contrast check:** verify `#8A7030` on `#F4F1EC` passes WCAG AA for large text (headings only — confirmed ~3.2:1 ratio, passes AA large text threshold of 3:1)
11. **Article links:** verify `/articles/*` links don't 404 (pages may not exist yet — acceptable, links are correct for future)
