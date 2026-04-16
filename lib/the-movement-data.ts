import { WP } from "@/lib/wordpress-routes";

/**
 * WordPress page `the-movement` (id 1643): REST `content.rendered` is empty; live HTML uses
 * Elementor template 1632 with an empty main container. Rank Math JSON-LD on the live page
 * references `datePublished` 2024-07-01, `dateModified` 2026-01-06, and primary image
 * `youtube-banner-neothink-institute-ready.png`.
 *
 * On-site copy reflects the two-fold Neothink movement (individual via Ascension, collective via
 * Immortalis), aligned with the Institute voice in `docs/brand/NTI-Brand-Guidelines.md`.
 *
 * @see migration/source/the-movement.html (full document capture; main article region blank)
 */

export const MOVEMENT_PATH = "/the-movement" as const;

/** FAQ article id from `lib/society-faq-page.ts` / `FaqPageContent`. */
export const MOVEMENT_ASCENSION_FAQ_HREF = `${WP.faq}#what-is-ascension` as const;

export const MOVEMENT_WP = {
  pageId: "1643",
  datePublished: "2024-07-01",
  dateModified: "2026-01-06",
} as const;

/** Matches Rank Math `primaryImageOfPage` on the legacy URL. */
export const MOVEMENT_HERO_IMAGE = {
  src: "/images/wp/2026/02/youtube-banner-neothink-institute-ready.png",
  alt: "Neothink Institute: civilizational research and public orientation",
  width: 2560,
  height: 1440,
} as const;

export const MOVEMENT_INTRO =
  "The Neothink movement is two-fold, and the two sides reinforce each other. There is a virtuously selfish line of effort: you become capable, honest, and productive on purpose. There is a virtuously selfless line of effort: you help replace structures that depend on force with structures that reward value, contract, and clarity. The Institute publishes the civilizational proof in public; Society programs are where many people walk the individual and collective paths in depth.";

export const MOVEMENT_TWO_FOLD_TITLE = "Individual journey and collective journey";

export const MOVEMENT_INDIVIDUAL = {
  eyebrow: "Virtuously selfish",
  title: "Ascension and the new human",
  paragraphs: [
    "This side of the movement is the work on yourself without apology, because a civilization of value creators requires people who can think in integrated chains, lead themselves, and build. Ascension is the Society expression of that lane: general self-improvement and entrepreneurship, leveled through serious stages of development toward the mentality of the value creator, the integrated thinker, and the self-leader. It is not vanity. It is capacity.",
    "The public curriculum on this site (for example Neothink Mentality) orients the same operating system at the level of lessons and exercises. Ascension is the deeper community and business stack for those who are ready to compound it in the real world.",
  ],
  links: [
    {
      href: MOVEMENT_ASCENSION_FAQ_HREF,
      cta: "What is Ascension? (FAQ)",
      note: "Society positioning and benefits; enrollment runs through Society channels.",
    },
    {
      href: WP.neothinkMentality,
      cta: "Neothink Mentality",
      note: "Foundational mentality lessons on the Institute site.",
    },
  ],
} as const;

export const MOVEMENT_COLLECTIVE = {
  eyebrow: "Virtuously selfless",
  title: "Immortalis and the civilizational correction",
  paragraphs: [
    "This side of the movement is the work on society: business, social, and political systems that embody a different paradigm than the one that has dominated for millennia. Immortalis names the lane where paradigm-shifting enterprise and institutional imagination meet the Prime Law and the long-range society vision, including what the public materials still sometimes call Neothink Country.",
    "There is far more beneath both journeys than a single page can hold. The point is the pairing: you do not get a durable collective correction without individuals who can actually build, and you do not get a serious individual arc without a horizon larger than private comfort.",
  ],
  links: [
    {
      href: WP.immortalis,
      cta: "Immortalis",
      note: "Society-scale vision and context on this site.",
    },
    {
      href: WP.twelveVisionsParty,
      cta: "Twelve Visions Party",
      note: "Political expression of the Twelve Visions framework in public voice.",
    },
  ],
} as const;

export const MOVEMENT_FRAMEWORK_TITLE = "Same geometry, two scales";
export const MOVEMENT_FRAMEWORK_PARAGRAPHS: readonly string[] = [
  "Both journeys hang from the same research: the Unified Field of Conscious Civilization, The Way and Neothink at the level of mind, the Prime Law and Neovia at the level of law and society. When you read the Institute’s public pages, you are looking at the map. When you enter Society programs, you are walking the territory.",
];

export const MOVEMENT_RELATED_TITLE = "Where to go next";
export const MOVEMENT_RELATED: readonly { title: string; body: string; href: string; cta: string }[] = [
  {
    title: "Unified Field",
    body: "The synthesis that makes the civilizational error visible and names what replaces it.",
    href: WP.unifiedField,
    cta: "Read the Unified Field",
  },
  {
    title: "Prime Law",
    body: "The constitutional prohibition of initiated force that grounds the collective correction.",
    href: WP.primeLaw,
    cta: "Prime Law",
  },
  {
    title: "Neovia",
    body: "The civilizational destination: society structured so consciousness and contract can compound.",
    href: WP.neovia,
    cta: "Neovia",
  },
  {
    title: "Get Involved",
    body: "Invest, advise, build, or take the next step into the work.",
    href: WP.getInvolved,
    cta: "Get Involved",
  },
  {
    title: "Contact",
    body: "Serious questions, media, or collaboration routes through the Institute.",
    href: WP.contact,
    cta: "Contact",
  },
];

export const MOVEMENT_CLOSING =
  "If you are new here, start with the Unified Field, then follow either journey above. If you already know which lane is yours, use the links in that section or go straight to Get Involved.";
