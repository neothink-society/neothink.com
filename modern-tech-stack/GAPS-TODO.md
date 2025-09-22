# Neothink Modern Stack – Gaps & TODOs

Purpose: Track what to verify/update as we tailor the stack to Neothink and fill any research gaps.

## Tech Validation (Recheck latest)

- Node 24.8
  - Confirm native TS flag defaults and any breaking changes for Next 15.5/React 19.
- Next 15.5
  - Turbopack prod status, flags, known regressions; confirm webpack fallback path.
- React Compiler
  - Current RC version, recommended config, and safe rollout pattern.
- Tailwind 4.1
  - CSS‑first config in Next 15; confirm any PostCSS interplay and plugin compat.
- TypeScript 5.9
  - Build acceleration best practices with Node 24; confirm editor/tsserver stability.
- Vercel AI SDK 5
  - Provider registry usage, streaming patterns, structured output latest.
- Supabase CLI/Functions
  - CLI version parity; Deno runtime notes; local vs remote function deployment.
- Observability/A11y
  - Latest guidelines for @vercel/analytics and @axe-core/playwright setup.

## Repo-Specific Tasks

neothink-admin
- [ ] Remove hardcoded Supabase service role keys from `scripts/*.js`; use env vars.
- [ ] Add Tailwind v4 CSS‑first config verification (and remove legacy PostCSS if unused).
- [ ] Optional: enable React Compiler on a small surface with measurements.
- [ ] Add @vercel/analytics and minimal a11y/perf CI checks.
- [ ] Add a Supabase SSR healthcheck route/page (read from a public view).

neothink-supabase
- [ ] Bump `engines.node` to `>=24.8.0` and `typescript` to `^5.9.x` where applicable.
- [ ] Ensure `types:generate` runs in deploy workflows; commit `types/database.ts`.
- [ ] Add/verify monitoring views used by admin (e.g., `public.sync_status`).
- [ ] Confirm webhook functions (`ghl-webhook`, `intercom-webhook`) exist with secret checks.
- [ ] Validate RLS coverage for all public tables; add tests where missing.

neothink.com (post‑rebuild)
- [ ] SEO migration plan: URL mapping, canonicals, sitemaps, redirects.
- [ ] Performance budget + CWV targets; test in staging.
- [ ] Auth wiring to shared Supabase; role mapping.

## Process

- Prioritize security fixes and secret scrubbing first.
- Tackle foundation upgrades (Node/TS/Tailwind) before enabling optional features (React Compiler, Turbopack prod).
- Measure improvements per the benchmarks in `realistic-implementation-guide-september-2025.md`.

