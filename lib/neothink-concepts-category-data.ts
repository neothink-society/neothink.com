/**
 * Neothink Concepts, WordPress category `neothink-concepts` (id 84).
 * Listing matches WP post order (newest first).
 *
 * @see https://neothink.com/wp-json/wp/v2/posts?categories=84
 */

import { siteConfig } from "@/lib/metadata";

export const NEOTHINK_CONCEPTS_CATEGORY_PATH = "/category/neothink-concepts" as const;

export const NEOTHINK_CONCEPTS_CATEGORY_TITLE = "Neothink Concepts" as const;

/** Category has no WP description; institute-aligned summary for the hub. */
export const NEOTHINK_CONCEPTS_CATEGORY_INTRO =
  "Neothink Concepts are focused articles on the cognitive toolkit behind creation and self-direction: Friday-Night Essence as your deepest motivational root, the self-leader path beyond following mode, integrated thinking across domains, and shifting from maintaining value to creating it. Read in any order; together they show how Neothink applies in work and life." as const;

export const NEOTHINK_CONCEPTS_CATEGORY_SEO_DESCRIPTION =
  "Neothink Concepts series: Friday-Night Essence, self-leadership, integrated thinking, and value creation: canonical articles on Neothink Institute." as const;

/** All Concepts posts listed in this category currently have Next.js routes. */
export const NEOTHINK_CONCEPTS_MIGRATED_SLUGS: ReadonlySet<string> = new Set([
  "friday-night-essence",
  "integrated-thinking",
  "self-leader-secret",
  "value-creator",
]);

export type NeothinkConceptsSeriesPost = {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
};

export const NEOTHINK_CONCEPTS_SERIES_POSTS: readonly NeothinkConceptsSeriesPost[] = [
  { slug: "value-creator", title: "Value Creator: Stop Maintaining and Start Building", date: "2025-12-04" },
  { slug: "integrated-thinking", title: "Integrated Thinking: See What Specialists Always Miss", date: "2025-12-03" },
  { slug: "self-leader-secret", title: "The Self-Leader Secret: Break Free from the Following Mode", date: "2025-12-02" },
  {
    slug: "friday-night-essence",
    title: "Friday-Night Essence: The Question That Changes Everything",
    date: "2025-12-01",
  },
];

export function neothinkConceptsPostHref(slug: string): string {
  if (NEOTHINK_CONCEPTS_MIGRATED_SLUGS.has(slug)) return `/${slug}`;
  return `${siteConfig.url}/${slug}/`;
}

export function neothinkConceptsPostIsMigrated(slug: string): boolean {
  return NEOTHINK_CONCEPTS_MIGRATED_SLUGS.has(slug);
}
