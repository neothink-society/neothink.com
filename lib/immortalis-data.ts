/**
 * Editorial content migrated from WordPress page `immortalis` (Elementor ID 2056).
 * Spam injected into legacy HTML (unrelated third-party link) was removed from the mission copy.
 *
 * @see migration/source/immortalis.html
 */

export const IMMORTALIS_HERO_INTRO =
  "Freedom, innovation, and human flourishing: these are the cornerstones of Immortalis: a bold vision for a new society. This concept aims to reshape how we think about governance and human progress, offering a fresh approach to building a thriving community.";

export const IMMORTALIS_ABOUT = {
  lead:
    "Immortalis is more than an idea; it represents a movement to establish a new nation where individuals can achieve their full potential without limits. Initially a digital community, the goal is to transition to a physical country that embodies these core principles.",
  mission:
    "The mission is to foster universal Wealth, Health, and Peace for all citizens: principles oriented toward removing barriers to progress and unlocking human potential on a grand scale.",
  digitalFirst:
    "The journey begins in the digital realm, where an online community of forward-thinking individuals is already aligning with this vision. As it expands, the focus shifts toward securing real-world territory to bring Immortalis to life.",
} as const;

export const IMMORTALIS_IMAGES = {
  heroVisual: {
    src: "/images/wp/2024/09/neothink-country-1.png",
    alt: "Neothink Country, conceptual landscape for the Immortalis vision",
    width: 1000,
    height: 667,
  },
  benefitsVisual: {
    src: "/images/wp/2024/09/neothink-country-2.png",
    alt: "Neothink Country, community and progress",
    width: 1000,
    height: 667,
  },
} as const;

export type ImmortalisBullet = { readonly title: string; readonly body: string };

/** Citizen benefits (visible list + ItemList JSON-LD). */
export const IMMORTALIS_CITIZEN_BENEFITS: readonly ImmortalisBullet[] = [
  {
    title: "True freedom",
    body: "A level of personal and economic freedom rarely seen in conventional systems.",
  },
  {
    title: "Rapid progress",
    body: "A society designed to accelerate technological and social advancement.",
  },
  {
    title: "Wealth creation",
    body: "An environment that encourages entrepreneurship and innovation.",
  },
  {
    title: "Health focus",
    body: "Access to cutting-edge health technologies and research.",
  },
  {
    title: "Peace and stability",
    body: "A community built on mutual respect and non-aggression.",
  },
  {
    title: "Global network",
    body: "Connection with like-minded individuals around the world.",
  },
  {
    title: "Future-focused",
    body: "A hand in shaping the future of human civilization.",
  },
] as const;

export const IMMORTALIS_PRIME_LAW = {
  lead:
    "At the heart of Immortalis lies the Prime Law: its fundamental constitution: no person or government may initiate force against another person or their property.",
  body: "The Prime Law creates a framework for a society without political manipulation or coercion. It allows for genuine freedom while helping protect the rights and safety of all citizens.",
} as const;

export const IMMORTALIS_WHY_SOCIETY = {
  lead:
    "The Neothink Society brings decades of experience in personal development and societal innovation to Immortalis. The commitment to members reflects a dedication to helping individuals reach their full potential: with practical knowledge and integrated, forward-looking perspective.",
  body: "By joining The Neothink Society, you access resources and a community of like-minded people working to turn the vision of Immortalis into reality. If you have questions about Immortalis, reach out through the Institute’s contact channels.",
} as const;

/** Same Strong Testimonials set as Neothink University on WordPress (view id 3). */
export type { NuTestimonial } from "./neothink-university-testimonials.generated";
export { NEOTHINK_UNIVERSITY_TESTIMONIALS as IMMORTALIS_TESTIMONIALS } from "./neothink-university-testimonials.generated";
