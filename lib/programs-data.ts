import { WP } from "@/lib/wordpress-routes";

/**
 * WordPress page `programs` (id 1645): REST `content.rendered` is empty (Elementor shell only).
 * This hub orients visitors to Society program families that are described across this site and the FAQ.
 *
 * @see https://neothink.com/wp-json/wp/v2/pages?slug=programs
 */

export const PROGRAMS_PATH = "/programs" as const;

export const PROGRAMS_WP = {
  pageId: "1645",
  dateModified: "2026-01-06",
} as const;

/** FAQ article ids from `lib/society-faq-page.ts`. */
export const PROGRAMS_FAQ_PROGRAMS_HREF = `${WP.faq}#what-programs` as const;
export const PROGRAMS_FAQ_ASCENSION_HREF = `${WP.faq}#what-is-ascension` as const;

export const PROGRAMS_INTRO =
  "The Neothink Society describes several program families. This page is a simple map: each card links to the public page or FAQ section that explains positioning on neothink.com. The Institute publishes research and free entry material here; paid programs, coaching stacks, and private communities are introduced on this site but fulfilled through Society and partner channels.";

export const PROGRAMS_CARDS_TITLE = "Program families";
export const PROGRAMS_CARDS: readonly { title: string; body: string; href: string; cta: string }[] = [
  {
    title: "Neothink University",
    body: "Paid Society education: masterclasses and personalized coaching themes around purpose, passion, prosperity, and related aims. Distinct from the free public learning hub.",
    href: WP.neothinkUniversity,
    cta: "Neothink University",
  },
  {
    title: "Neothink Coaching Programs",
    body: "Group coaching across business, marketing, mindset, wealth, relationships, health, productivity, and related topics. Summarized in the FAQ; enrollment through Society channels.",
    href: PROGRAMS_FAQ_PROGRAMS_HREF,
    cta: "FAQ: Society programs",
  },
  {
    title: "Project Life",
    body: "Longevity-focused track: research themes, nutraceuticals, and personalized health support as publicly described.",
    href: WP.projectLife,
    cta: "Project Life",
  },
  {
    title: "Ascension",
    body: "Business, AI, mindset, and health community platform with roadmap, training, and peer support. FAQ summarizes benefits; product detail sits with Ascension.",
    href: PROGRAMS_FAQ_ASCENSION_HREF,
    cta: "FAQ: Ascension",
  },
  {
    title: "Free learning (Institute)",
    body: "Complimentary public courses and lessons on this site, including Neothink Mentality modules. Not a substitute for paid Society programs.",
    href: WP.freeCourses,
    cta: "Free courses",
  },
  {
    title: "Events",
    body: "Society gatherings, workshops, and speakers as listed on the public events page.",
    href: WP.events,
    cta: "Events",
  },
];

export const PROGRAMS_CLOSING =
  "If you are unsure which path fits, start with the Society FAQ, then Free Courses for public material or Contact for routing.";
