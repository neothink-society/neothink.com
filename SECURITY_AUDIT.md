# Neothink Security Audit – 2025-09-20

Scope: Local repos under `~/dev/active` focusing on Neothink projects and shared Supabase. Goal: eliminate hardcoded secrets, standardize env handling, and outline rotation + platform hardening.

## Findings (Actioned)

- Hardcoded credentials found in `neothink-admin/scripts`:
  - Supabase service role key, Supabase URL, Intercom access token, GHL token/location.
  - Files: `scripts/demo-sync.js`, `scripts/import-josh-simple.js`, `scripts/import-josh-complete.js`.
  - Remediation: Replaced with environment variables via `dotenv`. Added startup guards.

## Immediate Required Actions

1. Rotate exposed secrets (Supabase, Intercom, GHL):
   - Supabase: Regenerate service role key; update Vercel env + local `.env`.
   - Intercom: Rotate access token in Developer Hub; update envs.
   - GHL: Rotate private integration token; update envs.
2. Purge secrets from Git history (org-level):
   - Enable GitHub Advanced Security secret scanning + push protection on `neothink-dao/*`.
   - Run a historical secret scan (e.g., `gitleaks`) and remove/rotate any hits.
3. Repository settings (org hardening):
   - Require 2FA for all org members.
   - Branch protection: require PR reviews, disallow force-push to default branches, require status checks.
   - Require signed commits on protected branches.
4. Env management:
   - Ensure `.env` not tracked (already ignored in admin).
   - Store all production secrets in Vercel project/org envs; never in repo.

## Recommended Follow-ups

- Supabase RLS verification:
  - Verify RLS for all public tables; add tests for policies.
  - Ensure service role key used server-side only.
- Webhook security:
  - Supabase Edge Functions for GHL/Intercom must require shared secret/HMAC and strict IP allowlists if available.
- Monitoring & Alerts:
  - Add basic `sync_status` or equivalent view in Supabase for admin to monitor.
  - Wire alerts for excessive retries/failures in outbox jobs.
- CI safeguards:
  - Add lightweight secret scan (pre-commit or CI) using a local tool; block commits containing patterns like `sb_secret_`, `ghp_`, `BEGIN PRIVATE KEY`.

## Verification Checklist

- [ ] Old secret values no longer function (post-rotation test)
- [ ] GitHub org has secret scanning + push protection enabled
- [ ] Branch protections enforced on `main`/`production` branches
- [ ] No `.env` files tracked in any repos
- [ ] Admin app only uses service role key on server; anon key client-side
- [ ] Supabase policies prevent unauthorized access under anon key

---

Owner: Security lead / platform engineer

