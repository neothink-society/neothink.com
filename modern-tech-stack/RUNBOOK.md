# Neothink Modern Stack Runbook (Local + Staging)

Purpose: Concrete steps to run the shared Supabase and apps locally with the validated stack.

## Prerequisites

- Node.js 24.8.x (use `nvm`), npm 10+
- Docker Desktop (for Supabase local)
- Supabase CLI (latest)

## Start Shared Supabase (Local)

```bash
cd ~/dev/active/neothink-supabase
supabase start
supabase db reset            # run all migrations/seed
supabase functions deploy    # deploy local functions
npm run types:generate       # generate types to types/database.ts
```

Notes
- Local Studio: http://localhost:54324
- DB: postgresql://postgres:postgres@localhost:54322/postgres
- API: http://localhost:54321

## Run Admin App (Local)

```bash
cd ~/dev/active/neothink-admin
cp .env.example .env         # fill values below

# Required env
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_ANON_KEY=eyJhbGciOi... (from `supabase start` output)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi... (server-only usage)

npm install
npm run dev                  # Next 15.5 dev with Turbopack
```

Checklist
- Browser console shows no Supabase auth errors.
- Basic page fetch from a public view/table works.

## Run neothink.com (Local)

Until the rebuild, focus is SEO docs and planning. When Next app is introduced:

```bash
cd ~/dev/active/neothink
# npm install
# npm run dev
```

Guidelines
- Use anon key client-side; server routes use secret via env.
- Preserve SEO: URL structures, canonicals, sitemaps, redirects.

## Staging/Production Notes

- Vercel Project Settings
  - Set `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and for admin, server routes use `SUPABASE_SERVICE_ROLE_KEY`.
  - Add integration/webhook secrets (GHL, Intercom) at org/project scope.
- Supabase
  - Use `npm run deploy:staging` / `deploy:production` from `neothink-supabase`.
  - Run `types:generate` before deploy; commit generated types.

## Security

- Do not commit `.env` or any secrets.
- Remove any hardcoded service role keys from scripts.
- Enforce RLS and verify policies for all public tables.

