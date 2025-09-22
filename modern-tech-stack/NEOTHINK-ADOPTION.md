# Neothink Modern Tech Stack Adoption

Purpose: Adopt the validated 2025 AI‑native stack for Neothink while protecting SEO and operational stability. This overlays the reference docs in this folder with Neothink‑specific decisions.

## Architecture Roles

- neothink.com (this repo): Public site + logged‑in member app (post‑WordPress rebuild), SEO‑first.
- neothink-admin: Internal admin app (ops, integrations, analytics, support).
- neothink-supabase: Shared backend (schema, RLS, edge functions, event ledger + outbox, seeds, types).

## Standard Versions (Baseline)

- Node.js: 24.8.x (LTS Oct 2025)
- Next.js: 15.5.x (Turbopack dev; prod builds fallback to webpack until stable)
- React: 19.1.x (React Compiler RC optional per app)
- TypeScript: 5.9.x
- Tailwind CSS: 4.1.x (Oxide)
- Test: Vitest 3.x, Playwright 1.55+
- Build tooling: Vite 6.x (for tests/dev utilities)
- Supabase JS: ^2.57.x; SSR helper: @supabase/ssr 0.7+
- AI: Vercel AI SDK 5.x (+ provider registry)

## Adoption Decisions

- Turbopack
  - Dev: Enabled by default (`next dev --turbo`).
  - Prod: Keep webpack as default until Next announces stable Turbopack prod builds. Track release notes.
- React Compiler
  - Allowed behind a flag. Enable only on pages/components that show clear benefit and pass perf/UX checks.
- Tailwind v4
  - CSS‑first config, Oxide engine. Verify no legacy PostCSS conflicts.
- Observability & A11y
  - Add @vercel/analytics, automated Lighthouse checks, and @axe-core/playwright to each app pipeline.
- Supabase
  - Canonical schema + multi‑tenant with RLS.
  - Event ledger + outbox pattern for GHL/Intercom.
  - Webhooks via Supabase Edge Functions with HMAC/secret checks.
- Secrets
  - Service role keys: server‑only, never checked into repo; managed via env in Vercel and local `.env`.

## Repo Mapping

- neothink.com
  - App Router, SEO‑centric architecture, content migration plan, auth‑gated member area.
  - Client Supabase: anon key only; SSR uses server helpers.
- neothink-admin
  - Admin UI, integration controls, BI dashboards, worker orchestration.
  - Uses service role on server (API routes/edge), anon in browser when needed.
- neothink-supabase
  - Migrations (core, integrations, RLS), seeds, functions, types generation, monitoring views.

## Migration Notes (WordPress → Next.js)

- Preserve URLs, canonical tags, meta data; implement redirects where needed.
- Stage rollout: pre-render static content, validate Core Web Vitals, then enable dynamic features.
- Validate search coverage and CTR before switching canonical traffic to the new app.

## References

- See `README.md`, `master-index-ai-native-tech-stack.md`, and `realistic-implementation-guide-september-2025.md` in this folder for background.

