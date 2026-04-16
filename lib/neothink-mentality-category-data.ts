/**
 * Neothink Mentality — WordPress category `neothink-mentality` (id 39).
 * All category posts have on-site lesson routes; order is newest first (WP REST).
 *
 * @see https://neothink.com/wp-json/wp/v2/posts?categories=39
 */

import { siteConfig } from "@/lib/metadata";

export const NEOTHINK_MENTALITY_CATEGORY_PATH = "/category/neothink-mentality" as const;

export const NEOTHINK_MENTALITY_CATEGORY_TITLE = "Neothink Mentality" as const;

/** WordPress category description (plain text). */
export const NEOTHINK_MENTALITY_CATEGORY_INTRO =
  "The Neothink Mentality represents the next stage of human cognitive evolution. For half a century, these tools have helped people break free from what holds most of humanity back: the unconscious habit of following rather than creating. With over 3 million collector's edition books sold worldwide, this proven system is now accessible to you. Move beyond limitation and into integrated, self-directed thinking." as const;

export const NEOTHINK_MENTALITY_CATEGORY_SEO_DESCRIPTION =
  "Neothink Mentality series: fourteen public video lessons on integrated thinking—full index with on-site lesson pages, course hub at /neothink-mentality, published by Neothink Institute." as const;

export const NEOTHINK_MENTALITY_MIGRATED_SLUGS: ReadonlySet<string> = new Set([
  "power-of-calm",
  "keep-the-balance",
  "money-love-affair",
  "soar-beyond-peers",
  "cure-to-aging",
  "soaring-productivity",
  "the-prime-law-mentality",
  "unlock-your-genius",
  "areas-of-profit",
  "higher-level-thinking",
  "impact-profits",
  "beyond-tunnel-vision",
  "freedom-from-rights",
  "rise-from-rut",
]);

export type NeothinkMentalitySeriesPost = {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
};

export const NEOTHINK_MENTALITY_SERIES_POSTS: readonly NeothinkMentalitySeriesPost[] = [
  { slug: "power-of-calm", title: "Neothink Mentality: Power of Calm", date: "2026-01-17" },
  { slug: "keep-the-balance", title: "Neothink Mentality: Keep The Balance", date: "2026-01-16" },
  { slug: "money-love-affair", title: "Neothink Mentality: Money Love Affair", date: "2026-01-15" },
  { slug: "soar-beyond-peers", title: "Neothink Mentality: Soar Beyond Peers", date: "2026-01-14" },
  { slug: "cure-to-aging", title: "Neothink Mentality: Cure to Aging", date: "2026-01-13" },
  { slug: "soaring-productivity", title: "Neothink Mentality: Soaring Productivity", date: "2026-01-12" },
  { slug: "the-prime-law-mentality", title: "Neothink Mentality: The Prime Law", date: "2026-01-10" },
  { slug: "unlock-your-genius", title: "Neothink Mentality: Unlock Your Genius", date: "2026-01-09" },
  { slug: "areas-of-profit", title: "Neothink Mentality: Areas of Profit", date: "2026-01-08" },
  { slug: "higher-level-thinking", title: "Neothink Mentality: Higher Level Thinking", date: "2026-01-07" },
  { slug: "impact-profits", title: "Neothink Mentality: Impact Profits", date: "2026-01-06" },
  { slug: "beyond-tunnel-vision", title: "Neothink Mentality: Beyond Tunnel Vision", date: "2026-01-05" },
  { slug: "freedom-from-rights", title: "Neothink Mentality: Freedom From Rights", date: "2026-01-02" },
  { slug: "rise-from-rut", title: "Neothink Mentality: Rise From Rut", date: "2026-01-01" },
];

export function neothinkMentalityPostHref(slug: string): string {
  if (NEOTHINK_MENTALITY_MIGRATED_SLUGS.has(slug)) return `/${slug}`;
  return `${siteConfig.url}/${slug}/`;
}

export function neothinkMentalityPostIsMigrated(slug: string): boolean {
  return NEOTHINK_MENTALITY_MIGRATED_SLUGS.has(slug);
}
