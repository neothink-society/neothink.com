/**
 * FAQ hub migrated from WordPress page `faq` (Elementor ID 2041).
 * Broken copy in source HTML (“acting as a for their…”) is repaired here.
 *
 * @see migration/source/faq.html
 */

export const SOCIETY_FAQ_INTRO =
  "On this FAQ you will find answers to common questions about how the Neothink Society describes its work helping people move toward happiness, purpose, and prosperity. The Neothink Institute publishes this page on neothink.com as public context; membership, coaching platforms, and product specifics are handled through Society and partner channels.";

export const SOCIETY_FAQ_IMAGES = {
  header: {
    src: "https://neothink.com/wp-content/uploads/2024/09/faq1.png",
    alt: "Neothink Society frequently asked questions",
    width: 1000,
    height: 667,
  },
  projectLife: {
    src: "https://neothink.com/wp-content/uploads/2024/09/faq2.png",
    alt: "Project Life — health and longevity",
    width: 1000,
    height: 667,
  },
  ascension: {
    src: "https://neothink.com/wp-content/uploads/2024/09/faq3.png",
    alt: "Ascension — business and growth community",
    width: 1000,
    height: 667,
  },
} as const;

export type SocietyFaqEntry = {
  readonly id: string;
  readonly question: string;
  /** Paragraphs shown in order; concatenated for FAQPage JSON-LD. */
  readonly paragraphs: readonly string[];
  readonly imageKey?: keyof typeof SOCIETY_FAQ_IMAGES;
};

export const SOCIETY_FAQ_ENTRIES: readonly SocietyFaqEntry[] = [
  {
    id: "what-is-neothink-society",
    question: "What is the Neothink Society?",
    paragraphs: [
      "The Neothink Society is a community dedicated to empowering individuals to elevate their lives and society through the Neothink idea system—often described as a catalyst for personal growth. The stated goal is to guide people toward a fulfilling life, fostering happiness through freedom, passion, purpose, and prosperity.",
      "For decades, the Society has emphasized long-term member relationships, with many people staying involved for years. The framing is practical: help individuals escape stagnation and build a life with more excitement and love.",
    ],
  },
  {
    id: "what-programs",
    question: "What programs does the Neothink Society offer?",
    paragraphs: [
      "The Society describes several program families. Two highlighted on the original FAQ are Neothink University and Neothink Coaching Programs.",
      "Neothink University offers masterclasses and personalized coaching oriented toward excitement, happiness, purpose, passion, freedom, and love. On this site, Neothink University is the paid Society program hub (distinct from the Institute’s free public courses).",
      "Neothink Coaching Programs offer group coaching across business, marketing, success, wealth, mindset, fulfillment, happiness, relationships, confidence, purpose, time management, productivity, and health.",
    ],
  },
  {
    id: "what-is-project-life",
    question: "What is Project Life?",
    imageKey: "projectLife",
    paragraphs: [
      "Project Life focuses on anti-aging research and nutraceuticals to support lifespan and healthspan. The Society describes supplements and diet and nutrition guidance, with science-backed ingredients at practical doses.",
      "Positioning is member-empowering: take greater control of health and longevity within the Society ecosystem.",
    ],
  },
  {
    id: "formula-cure-aging",
    question: "What is the Formula to Cure Aging?",
    paragraphs: [
      "The Formula to Cure Aging initiative, associated with Mark Hamilton’s public writing, addresses mortality and consciousness by combining two threads: making individual lives deeply worth living (demand for longevity) and fostering societal conditions for scientific progress (supply of solutions).",
      "It is described in connection with the Neothink Country / Immortalis vision—rapid, benevolent progress. For the public lesson that overlaps this theme on this site, see the Neothink Mentality module on curing aging.",
    ],
  },
  {
    id: "what-is-neothink-country",
    question: "What is Neothink Country?",
    paragraphs: [
      "Neothink Country is described as a community with a vision of a society where individuals thrive with minimal coercion—principles centered on freedom without harm to others, toward universal wealth, health, and peace. The narrative begins as a network-style community with the long-range aim of physical territory.",
      "The Immortalis page on neothink.com summarizes a closely related Society vision in the Neothink Institute’s public voice.",
    ],
  },
  {
    id: "how-to-join",
    question: "How do I join the Neothink Society?",
    paragraphs: [
      "The legacy FAQ directs people to explore membership options on neothink.com and choose paths that fit—personal development, business coaching, or longevity-focused offerings.",
      "On this site, start with Free Courses or Get Involved for public entry points; use Contact for routing. Paid University and private Society onboarding are not the same as the free public library.",
    ],
  },
  {
    id: "what-is-ascension",
    question: "What is Ascension?",
    imageKey: "ascension",
    paragraphs: [
      "Ascension is described as a membership community platform focused on business, marketing, AI, mindset, and health. The FAQ lists benefits such as a step-by-step business roadmap, an integrated business platform, an AI assistant, monthly courses, weekly calls, expert training, accountability, community support, and networking.",
      "Details and enrollment live with the Ascension product team; this page summarizes the positioning only.",
    ],
  },
  {
    id: "how-to-contact",
    question: "How do I contact the Neothink Society?",
    paragraphs: [
      "Use neothink.com (this site) for Institute contact and published resources. The Contact page is the right starting point for general inquiries; specific programs may route you to Society or partner channels.",
    ],
  },
] as const;

/** Plain Q&A for `faqPageJsonLd` — must match visible copy. */
export const SOCIETY_FAQ_FOR_JSON_LD = SOCIETY_FAQ_ENTRIES.map((e) => ({
  question: e.question,
  answer: e.paragraphs.join(" "),
})) as readonly { question: string; answer: string }[];

export { NEOTHINK_UNIVERSITY_TESTIMONIALS as SOCIETY_FAQ_TESTIMONIALS } from "./neothink-university-testimonials.generated";
