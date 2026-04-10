/**
 * Phase 0 — WordPress → Next.js URL migration.
 * Populate `entries` from WP XML sitemaps + Search Console “top pages”,
 * then map each row to a `next.config` redirect (301), rewrite, or 410.
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
