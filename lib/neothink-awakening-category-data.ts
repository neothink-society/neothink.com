/**
 * Neothink Awakening — WordPress category `neothink-awakening` (id 80).
 * Listing matches WP post order (newest first); refresh when the category changes.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts?categories=80
 */

import { siteConfig } from "@/lib/metadata";

export const NEOTHINK_AWAKENING_CATEGORY_PATH = "/category/neothink-awakening" as const;

export const NEOTHINK_AWAKENING_CATEGORY_TITLE = "Neothink Awakening" as const;

/** Derived from WordPress category description; trimmed of off-site signup CTA for this domain. */
export const NEOTHINK_AWAKENING_CATEGORY_INTRO =
  "The Neothink Awakening is a global movement founded on Mark Hamilton's decades of research into human potential. What began as a private community of self-leaders is now open to the public—bringing practical tools for dismantling limiting beliefs and building a value-driven life. Through the Neothink philosophy, thousands have transformed their mindset, unlocked creativity, and achieved personal freedom. Explore teachings, strategies, and insights from Mark Hamilton on Neothink Institute." as const;

export const NEOTHINK_AWAKENING_CATEGORY_SEO_DESCRIPTION =
  "Neothink Awakening series: Mark Hamilton articles on mindset, freedom, wealth, leadership, and civilization—full list with native reading on neothink.com where articles are migrated." as const;

export const NEOTHINK_AWAKENING_MIGRATED_SLUGS: ReadonlySet<string> = new Set([
  "freedom-key-to-unlocking-true-wealth",
  "reprogram-mind-to-be-rich",
  "how-to-raise-a-genius",
]);

export type NeothinkAwakeningSeriesPost = {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
};

export const NEOTHINK_AWAKENING_SERIES_POSTS: readonly NeothinkAwakeningSeriesPost[] = [
  { slug: "universal-wealth-secrets-the-solution-exposed", title: "Universal Wealth Secrets: The Solution Exposed", date: "2026-03-02" },
  {
    slug: "the-secret-to-a-wealthy-healthy-peaceful-country",
    title: "The Secret to a Wealthy, Healthy, and Peaceful Country",
    date: "2026-03-01",
  },
  { slug: "separating-heroes-from-dreamers", title: "Separating Heroes from Dreamers: The Impact Moment", date: "2026-02-28" },
  {
    slug: "how-to-be-a-leader-the-one-thing-holding-you-back",
    title: "How to Be a Leader: The One Thing Holding You Back",
    date: "2026-02-13",
  },
  { slug: "philosopher-make-your-life-exciting-again-do-this", title: "PHILOSOPHER: Make Your Life Exciting Again – DO THIS", date: "2026-02-12" },
  { slug: "a-society-without-politics-poverty-or-war", title: "A Society Without Politics, Poverty, or War", date: "2026-02-11" },
  {
    slug: "the-future-of-humanity-building-a-new-country-without-rulers",
    title: "The Future of Humanity: Building a New Country Without Rulers",
    date: "2026-02-10",
  },
  {
    slug: "this-is-how-close-we-are-to-biological-immortality",
    title: "This is How Close We Are to Biological Immortality",
    date: "2026-02-09",
  },
  {
    slug: "youre-being-manipulated-they-use-guilt-to-control-you",
    title: "You're Being Manipulated! They use Guilt to Control You!",
    date: "2026-02-07",
  },
  { slug: "escape-the-matrix-now", title: "Escape the Matrix NOW", date: "2026-02-06" },
  {
    slug: "finding-achieving-your-life-purpose",
    title: "A Process for Finding & Achieving Your Life's Purpose",
    date: "2026-02-05",
  },
  {
    slug: "think-like-elon-musk-mind-hacks",
    title: "Think Like Elon Musk: The Mind Hacks That Build Billion-Dollar Empires",
    date: "2026-02-04",
  },
  { slug: "new-country-with-no-taxes", title: "A New Country with No Taxes?", date: "2026-02-03" },
  { slug: "why-neothink-makes-you-irresistible", title: "The Surprising Reason Neothink Makes You IRRESISTIBLE", date: "2026-02-02" },
  { slug: "freedom-key-to-unlocking-true-wealth", title: "Freedom is the KEY to Unlocking True Wealth in 2026", date: "2026-01-31" },
  { slug: "freeing-hidden-geniuses-elon-musk", title: "Freeing Society's Hidden Geniuses with Elon Musk", date: "2026-01-30" },
  { slug: "sell-anything-marketing-secret", title: "Want to Sell Anything in 2025? Here's the Secret!", date: "2026-01-29" },
  { slug: "never-be-manipulated-again", title: "Watch This To NEVER Be Manipulated Again", date: "2026-01-28" },
  { slug: "trumps-victory-beginning-new-era", title: "Is Trump's Victory the Beginning of a New Era?", date: "2026-01-27" },
  {
    slug: "aliens-real-never-visit-earth",
    title: "Aliens Are Real… But They'll Never Visit Earth – Here's Why",
    date: "2026-01-26",
  },
  {
    slug: "are-we-the-illuminati-truth",
    title: "Are We the Illuminati? The Truth Behind the Allegations – Mark Hamilton Explains",
    date: "2026-01-24",
  },
  {
    slug: "reprogram-mind-to-be-rich",
    title: "REPROGRAM Your Mind to be Rich in One Hour…. The Neothink Approach",
    date: "2026-01-23",
  },
  { slug: "mark-hamilton-luck-350-million", title: "How Mark Hamilton Used LUCK to Make 350 Million Dollars", date: "2026-01-22" },
  {
    slug: "secret-society-reveals-civilizations-hope",
    title: "The Secret Society Reveals Civilization's ONLY Hope for a Good Future",
    date: "2026-01-21",
  },
  { slug: "future-of-humanity-everything-free", title: "The Future of Humanity: Everything becomes FREE", date: "2026-01-20" },
  {
    slug: "how-to-raise-a-genius",
    title: "How to Raise a GENIUS: Always Ask Them THIS One Question",
    date: "2026-01-19",
  },
];

export function neothinkAwakeningPostHref(slug: string): string {
  if (NEOTHINK_AWAKENING_MIGRATED_SLUGS.has(slug)) return `/${slug}`;
  return `${siteConfig.url}/${slug}/`;
}

export function neothinkAwakeningPostIsMigrated(slug: string): boolean {
  return NEOTHINK_AWAKENING_MIGRATED_SLUGS.has(slug);
}
