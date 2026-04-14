import { WP } from "@/lib/wordpress-routes";

/**
 * Migrated from WordPress page `project-life` (id 2066, Elementor on-page id 2066).
 * Copy is tightened to the Neothink Institute public register; offerings and structure follow the legacy page.
 *
 * @see https://neothink.com/wp-json/wp/v2/pages?slug=project-life
 */

export const PROJECT_LIFE_PATH = "/project-life" as const;

export const PROJECT_LIFE_WP = {
  pageId: "2066",
  dateModified: "2026-01-06",
} as const;

export const PROJECT_LIFE_HERO_IMAGE = {
  src: "https://neothink.com/wp-content/uploads/2024/09/project-life-1.png",
  alt: "Project Life — longevity and health within the Neothink Society",
  width: 1000,
  height: 667,
} as const;

export const PROJECT_LIFE_SECTION_IMAGE = {
  src: "https://neothink.com/wp-content/uploads/2024/09/project-life-2.png",
  alt: "Project Life — research-backed health support",
  width: 1000,
  height: 667,
} as const;

export const PROJECT_LIFE_INTRO =
  "Project Life addresses a common concern: time feels as if it moves faster, and aging narrows what people feel they can still do. The Society describes this initiative as part of its work to extend vitality and health: research, formulations, and services aimed at slowing decline and supporting a fuller life. The Neothink Institute publishes this page as public context; enrollment and clinical details are handled through Society channels.";

export const PROJECT_LIFE_ABOUT_TITLE = "About Project Life";
export const PROJECT_LIFE_ABOUT_LEAD =
  "The Society groups Project Life around three areas: anti-aging research, nutraceuticals, and personalized health support. The research side tracks scientific work on aging; formulations emphasize evidence-informed ingredients at practical doses; services include telemedicine-style access, biological age assessment, and nutrition guidance described as tailored to the individual.";

export const PROJECT_LIFE_PILLARS: readonly { title: string; body: string }[] = [
  {
    title: "Anti-aging research",
    body: "Project Life is framed around sustained research into mechanisms of aging and strategies to slow or reverse decline, with the stated aim of translating findings into member-facing value.",
  },
  {
    title: "Nutraceuticals",
    body: "Supplements are described as formulated from current science, with ingredient choices and dosing oriented toward efficacy rather than trend.",
  },
  {
    title: "Personalized health solutions",
    body: "Beyond one-size products, the Society describes remote consultation options, biological age testing, and structured diet and nutrition guidance aligned to individual markers.",
  },
];

export const PROJECT_LIFE_BENEFITS_TITLE = "What members are told to expect";
export const PROJECT_LIFE_BENEFITS_LEAD =
  "Legacy copy positions enrollment as investing in a future where aging is less of a hard ceiling on a meaningful life. The following points summarize how Project Life is described publicly.";

export const PROJECT_LIFE_BENEFITS: readonly { title: string; body: string }[] = [
  {
    title: "Research orientation",
    body: "Access to ongoing anti-aging research themes and conclusions as the team publishes or shares them with members.",
  },
  {
    title: "Formulations tied to evidence",
    body: "Nutraceuticals described as grounded in published science, with product design aimed at measurable support rather than generic wellness branding.",
  },
  {
    title: "Personalization",
    body: "Health guidance framed as adapted to the member, including consultations, testing, and nutrition plans rather than a single fixed protocol.",
  },
  {
    title: "Bundled support",
    body: "Testing, remote access to expertise, and nutrition materials presented as one coordinated layer, not only isolated SKUs.",
  },
];

export const PROJECT_LIFE_WHY_TITLE = "Why the Neothink Society context matters";
export const PROJECT_LIFE_WHY_LEAD =
  "The original page ties Project Life to the broader Society: long member relationships, programs built around member outcomes, and community. That framing is preserved here in summary form.";

export const PROJECT_LIFE_WHY: readonly { title: string; body: string }[] = [
  {
    title: "Depth of experience",
    body: "The Society emphasizes decades of continuity in its programs and member base.",
  },
  {
    title: "Member-first design",
    body: "Initiatives are described as shaped around member needs rather than one-off transactions.",
  },
  {
    title: "Innovation",
    body: "Positioning highlights staying current with science and delivery models relevant to longevity.",
  },
  {
    title: "Community",
    body: "Membership is framed as joining a supportive peer environment, not only purchasing products.",
  },
];

export const PROJECT_LIFE_CONTACT_LEAD =
  "For questions about Project Life, routing, or how this initiative fits other Society paths, use Contact on this site.";

export const PROJECT_LIFE_SECONDARY_TITLE = "Where to go next";
export const PROJECT_LIFE_SECONDARY_LEAD =
  "Public research and free lessons stay on the Institute side; Project Life itself is a Society program family. Use these links to stay oriented.";

export const PROJECT_LIFE_SECONDARY: readonly { title: string; body: string; href: string; cta: string }[] = [
  {
    title: "FAQ: What is Project Life?",
    body: "Short institutional summary of Project Life alongside other Society offerings.",
    href: `${WP.faq}#what-is-project-life`,
    cta: "Open FAQ section",
  },
  {
    title: "Neothink University",
    body: "Paid Society education hub (distinct from free public courses on this site).",
    href: WP.neothinkUniversity,
    cta: "Neothink University",
  },
  {
    title: "Formula to cure aging (FAQ)",
    body: "How public writing connects longevity demand with civilizational supply of progress.",
    href: `${WP.faq}#formula-cure-aging`,
    cta: "Read FAQ entry",
  },
  {
    title: "Contact",
    body: "Institute routing for serious inquiries.",
    href: WP.contact,
    cta: "Contact",
  },
];
