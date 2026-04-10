/**
 * Phase 0 — WordPress → Next.js URL migration.
 *
 * 1. **Inventory:** `pnpm migration:inventory` → `data/migration/url-inventory.json`
 *    (live XML sitemaps).
 * 2. **GSC:** drop Search Console exports under `data/migration/gsc/<date>/`
 *    (see `performance-pages.csv`), then `pnpm migration:merge-gsc` →
 *    `data/migration/url-inventory-gsc-merged.json` (sort by clicks for priority).
 * 3. **Matrix:** add rows below for paths that need review; implemented 301s
 *    live in `lib/migration/wp-redirects.ts` (imported by `next.config.ts`).
 */

export type RedirectDisposition = "301" | "302" | "410" | "tbd";

export type RedirectMatrixEntry = {
  /** Path on the old site (leading slash, no hostname). */
  sourcePath: string;
  /** Target path on this app, full URL, or omit for 410 / undecided. */
  target?: string;
  disposition: RedirectDisposition;
  notes?: string;
};

/** Append-only list; keep sorted by `sourcePath` once data exists. */
export const REDIRECT_MATRIX: RedirectMatrixEntry[] = [];
