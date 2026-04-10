/**
 * Phase 0 — WordPress → Next.js URL migration.
 *
 * 1. **Inventory (automated):** run `pnpm migration:inventory` to refresh
 *    `data/migration/url-inventory.json` from live `neothink.com/sitemap.xml`.
 * 2. **Priority:** merge Search Console “Pages” (and Analytics) so high-traffic
 *    URLs are decided first.
 * 3. **Matrix:** add rows here (`sourcePath` = WP path, often trailing slash on
 *    the old site — match what WP serves). Then wire into `next.config` `redirects()`.
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
