/**
 * Article migrated from WordPress post `neothink-twelve-visions-party-truth` (id 3598).
 * Agency-era post (published 2025-09-01). Body matches WP `content.rendered` (Feb 2026 snapshot).
 * `new-country-with-no-taxes` is a legacy WP path not yet in this Next app.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/3598
 */

import { WP } from "@/lib/wordpress-routes";

export const NTV_TRUTH_PATH = "/neothink-twelve-visions-party-truth" as const;

export const NTV_TRUTH_WP = {
  postId: "3598",
} as const;

export const NTV_TRUTH_IMAGE = {
  src: "/images/wp/2025/09/book-opened-in-library-on-wooden-shelf-education-background-with-copy-space-for-text-toned.jpg",
  alt: "Neothink And The Twelve Visions Party: The Untold Truth",
  width: 1000,
  height: 667,
} as const;

export const NTV_TRUTH_DATES = {
  datePublished: "2025-09-01",
  dateModified: "2026-02-06",
} as const;

export const NTV_TRUTH_INTRO_PARAS: readonly string[] = [
  "A different ideation has been growing beneath the surface of political frustration and personal stagnation for decades. The Neothink Society and the Twelve Visions Party have carved out their own lane, driven by innovation, logic, and a laser focus on unlocking human potential.",
  "It’s about replacing stagnation with creation. The path to a better world doesn’t run through old political systems or worn-out motivational slogans. It begins with individuals who stop waiting for change and start building it from within.",
];

export type NtvSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export const NTV_TRUTH_SECTIONS: readonly NtvSection[] = [
  {
    id: "a-clear-neothink-society-summary-that-cuts-through-the-noise",
    title: "A Clear Neothink Society Summary that Cuts Through the Noise",
    paragraphs: [
      "The Neothink Society is a movement that challenges how people think, live, and operate in the world. It doesn’t cater to mainstream ideals or recycle generic philosophies. Instead, it introduces a structured way of thinking designed to unlock what’s already within: creativity, drive, vision, and value.",
      "We apply proven principles that help people break away from the anti-civilization traps that limit wealth, health, and happiness. Our members become active creators. This mindset extends beyond personal development. It lays the groundwork for broader social transformation through the Twelve Visions Party.",
      "The Twelve Visions Party takes the ideas of Neothink and expands them to the world stage. We believe that when people are free to create and live without restriction, society naturally rises. This party exists to remove artificial obstacles ([[noTaxesLegacy|taxes]], regulations, forced redistribution) that keep people locked into mediocrity.",
      "Mark Hamilton, the architect behind both The Neothink Society and the Twelve Visions Party, has made it clear: individuals drive progress, not institutions. When people learn to build value instead of chasing power or reacting to fear, they uplift the entire system around them.",
    ],
  },
  {
    id: "is-the-neothink-society-legit-lets-talk-facts",
    title: "Is The Neothink Society Legit? Let's Talk Facts",
    paragraphs: [
      "We understand why people ask if The Neothink Society is legit. In a world filled with quick-fix gurus and hollow philosophies, it’s not easy to find systems that stand the test of time. We built our reputation through results; one member, one breakthrough, one transformation at a time.",
      "Thousands of individuals across the globe have used the Neothink system to reshape how they live and think. These results have strengthened over the years. That’s why our membership is built on commitment. Many of our members have been with us for decades because they’ve applied our principles in real ways and seen the outcome for themselves.",
      "If you’re the kind of person who looks for accountability, you can explore our standing through The Neothink Society BBB listing. We welcome transparency because we’ve got nothing to hide. What you’ll find isn’t a product built for fast sales. It’s a movement built for people who want long-term freedom and fulfillment.",
      "The same holds for the Twelve Visions Party. When [[primeLawMentality|coercion]] disappears and creativity takes its place, society rises across the board. That’s a pattern we’ve already seen in our members and a pattern we know can scale nationally.",
    ],
  },
  {
    id: "why-we-still-push-forward",
    title: "Why We Still Push Forward",
    paragraphs: [
      "The more noise modern life throws at people, the more important clarity becomes. We give people a lens through which they can view the world differently and act decisively. That shift in perspective reshapes how people approach problems, opportunities, and decisions in every part of their lives.",
      "Our members stop operating in reaction to their circumstances and start taking full ownership of their outcomes. They leave behind the frameworks that trap so many people in lives they never truly chose. Then, they begin to create something better for those around them.",
      "When you strip away illusions and connect with the principles of value creation, freedom, and logical thinking, the world begins to open up. You stop seeing limitations as permanent and start treating them as design flaws you now have the tools to fix. That’s the power behind The Neothink Society, and it’s the foundation for the Twelve Visions Party as well.",
    ],
  },
  {
    id: "how-to-get-involved-with-the-neothink-society",
    title: "How to Get Involved with The Neothink Society",
    paragraphs: [
      "We exist to offer tools, structure, and a path forward. The Neothink Society is about learning how to lead your own life without compromise and without waiting for someone else to change the rules.",
      "Suppose you're ready to start building from that kind of foundation. In that case, you can [[joinExternal|join The Neothink Society]] and begin connecting with a community of builders, creators, and forward-thinking individuals who are reshaping reality. If you’d like to learn more about how we started and why we’re still growing after decades, we invite you to read up more about [[aboutSociety|The Neothink Society]].",
      "We’re building what comes next, and we’re doing it with logic, purpose, and a refusal to settle for less than the lives we were meant to lead.",
    ],
  },
] as const;

export const NTV_TRUTH_JOIN_EXTERNAL = "https://www.theneothinksociety.com/join-the-neothink-society/";

export const NTV_TRUTH_NO_TAXES_LEGACY_URL = "/new-country-with-no-taxes" as const;

export const NTV_TRUTH_ABOUT_SOCIETY_HREF = `${WP.about}#ab-society-heading` as const;

export const NTV_TRUTH_INLINE_HREF: Record<string, string> = {
  primeLawMentality: WP.thePrimeLawMentality,
};
