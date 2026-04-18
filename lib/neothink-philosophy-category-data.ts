/**
 * Neothink Philosophy, WordPress category `neothink-philosophy` (id 81).
 * Listing is source-faithful to WP post order (newest first); refresh dates/titles when adding migrations.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts?categories=81
 */

import { siteConfig } from "@/lib/metadata";

export const NEOTHINK_PHILOSOPHY_CATEGORY_PATH = "/category/neothink-philosophy" as const;

export const NEOTHINK_PHILOSOPHY_CATEGORY_TITLE = "Neothink Philosophy" as const;

/** WordPress category description (plain text). */
export const NEOTHINK_PHILOSOPHY_CATEGORY_INTRO =
  "For half a century, Mark Hamilton developed the Neothink Philosophy through private meetings with dedicated members. These recordings and teachings: never before available to the general public: are now being released. Witness the foundational ideas behind the Neothink Mentality directly from the author himself. This is your access point to the inner workings of a movement fifty years in the making." as const;

export const NEOTHINK_PHILOSOPHY_CATEGORY_SEO_DESCRIPTION =
  "Neothink Philosophy series: long-form talks and essays from Mark Hamilton on Immortalis, the Prime Law, prosperity, and civilization: full series with video, recaps, and FAQ on Neothink Institute." as const;

/** Slugs that have a dedicated Next.js route at `/${slug}`. */
export const NEOTHINK_PHILOSOPHY_MIGRATED_SLUGS: ReadonlySet<string> = new Set([
  "a-knight-in-shining-armor-immortalis",
  "a-new-country-the-great-experiment-called-immortalis",
  "breaking-the-chains-on-consciousness",
  "building-the-engine-behind-immortalis",
  "creating-the-demand-to-live-forever",
  "decoding-super-puzzle",
  "how-every-individual-can-be-wealthy",
  "how-jobs-will-change",
  "how-neothink-brings-you-world-of-prosperity",
  "illusion-pollution",
  "immortalis-the-great-experiment-of-our-time",
  "land-based-immortalis",
  "libertarians-next-big-possibility",
  "live-longer",
  "mark-hamiltons-story",
  "mont-pelerin-pivot-into-our-essence",
  "spreading-immortalis-to-world-leaders",
  "starting-our-own-country",
  "strategic-briefing-for-presidents",
  "the-2400-year-mistake",
  "the-beautiful-vs-the-ugly-in-our-world-3",
  "the-city-that-cures-disease-neovia",
  "the-cult-you-never-knew-existed",
  "the-grand-experiment-of-our-time",
  "the-greatest-mental-breakthrough",
  "the-job-revolution",
  "the-missing-key-to-universal-prosperity",
  "the-two-obstacles-to-curing-aging",
  "the-unbreakable-equation",
  "the-year-capitalism-sets-the-world-free",
  "what-all-philosophies-get-wrong",
]);

export type NeothinkPhilosophySeriesPost = {
  readonly slug: string;
  readonly title: string;
  /** ISO date YYYY-MM-DD (WordPress `date`). */
  readonly date: string;
};

/**
 * All posts in category 81, newest first (as of sync with WP REST).
 */
export const NEOTHINK_PHILOSOPHY_SERIES_POSTS: readonly NeothinkPhilosophySeriesPost[] = [
  { slug: "how-neothink-brings-you-world-of-prosperity", title: "How Neothink Brings You a World of Prosperity", date: "2026-03-17" },
  { slug: "the-cult-you-never-knew-existed", title: "The Cult You Never Knew Existed", date: "2026-03-16" },
  { slug: "how-every-individual-can-be-wealthy", title: "How Every Individual Can Be Wealthy", date: "2026-03-15" },
  {
    slug: "a-new-country-the-great-experiment-called-immortalis",
    title: "A New Country: The Great Experiment Called Immortalis",
    date: "2026-03-14",
  },
  { slug: "the-beautiful-vs-the-ugly-in-our-world-3", title: "The Beautiful vs. the Ugly in Our World", date: "2026-03-13" },
  { slug: "how-jobs-will-change", title: "How Jobs Will Change in 2026", date: "2026-03-12" },
  {
    slug: "decoding-super-puzzle",
    title: "Decoding Super Puzzle: The Secret Formula for Curing Aging",
    date: "2026-03-11",
  },
  { slug: "starting-our-own-country", title: "Starting Our Own Country Is Closer Than You Think!", date: "2026-03-10" },
  { slug: "live-longer", title: "Live Longer!", date: "2026-03-09" },
  { slug: "the-missing-key-to-universal-prosperity", title: "The Missing Key to Universal Prosperity", date: "2026-03-08" },
  { slug: "the-grand-experiment-of-our-time", title: "The Grand Experiment of Our Time", date: "2026-03-07" },
  { slug: "mont-pelerin-pivot-into-our-essence", title: "The Mont Pelerin Pivot: Into Our Essence", date: "2026-03-06" },
  {
    slug: "a-knight-in-shining-armor-immortalis",
    title: "A Knight in Shining Armor: How Immortalis Is Changing the World",
    date: "2026-03-05",
  },
  {
    slug: "land-based-immortalis",
    title: "Land-Based Immortalis: From Digital Nation to Physical Reality",
    date: "2026-03-04",
  },
  {
    slug: "libertarians-next-big-possibility",
    title: "Libertarians' Next Big Possibility: Prime Law Capitalism",
    date: "2026-03-03",
  },
  { slug: "breaking-the-chains-on-consciousness", title: "Breaking The Chains On Consciousness", date: "2026-02-27" },
  { slug: "the-city-that-cures-disease-neovia", title: "The City That Cures Disease: Neovia", date: "2026-02-26" },
  { slug: "the-two-obstacles-to-curing-aging", title: "The Two Obstacles to Curing Aging", date: "2026-02-25" },
  { slug: "mark-hamiltons-story", title: "Mark Hamilton's Story: Breaking the Following Mode", date: "2026-02-24" },
  {
    slug: "immortalis-the-great-experiment-of-our-time",
    title: "Immortalis: The Great Experiment of Our Time",
    date: "2026-02-23",
  },
  { slug: "spreading-immortalis-to-world-leaders", title: "Spreading Immortalis to World Leaders", date: "2026-02-22" },
  { slug: "building-the-engine-behind-immortalis", title: "Building the Engine Behind Immortalis", date: "2026-02-21" },
  {
    slug: "the-job-revolution",
    title: "The Job Revolution: How Pure Capitalism Makes Everything Free",
    date: "2026-02-20",
  },
  {
    slug: "the-2400-year-mistake",
    title: "The 2,400-Year Mistake That Hijacked Western Civilization",
    date: "2026-02-19",
  },
  {
    slug: "strategic-briefing-for-presidents",
    title: "A Strategic Briefing for Presidents: The Structural Fix for Civilization",
    date: "2026-02-18",
  },
  {
    slug: "the-year-capitalism-sets-the-world-free",
    title: "The Year Capitalism Sets the World Free",
    date: "2026-02-17",
  },
  { slug: "creating-the-demand-to-live-forever", title: "Creating the Demand to Live Forever", date: "2026-02-16" },
  {
    slug: "illusion-pollution",
    title: "Illusion Pollution: Why Good People Support What Destroys Them",
    date: "2026-02-15",
  },
  {
    slug: "the-unbreakable-equation",
    title: "The Unbreakable Equation: Neo-Tech, Neothink, and the Prime Law",
    date: "2026-02-14",
  },
  {
    slug: "what-all-philosophies-get-wrong",
    title: "Renowned Philosopher EXPOSES What All Philosophies Get Wrong",
    date: "2025-11-03",
  },
  {
    slug: "the-greatest-mental-breakthrough",
    title: "The Greatest Mental Breakthrough: Why Removing the Negative Outperforms Adding the Positive",
    date: "2025-10-21",
  },
];

export function neothinkPhilosophyPostHref(slug: string): string {
  if (NEOTHINK_PHILOSOPHY_MIGRATED_SLUGS.has(slug)) return `/${slug}`;
  return `${siteConfig.url}/${slug}/`;
}

export function neothinkPhilosophyPostIsMigrated(slug: string): boolean {
  return NEOTHINK_PHILOSOPHY_MIGRATED_SLUGS.has(slug);
}
