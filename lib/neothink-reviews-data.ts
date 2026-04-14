/**
 * Editorial content migrated from WordPress page `neothink-reviews` (Elementor ID 1574).
 * Legacy WP testimonial submission form is not ported; visitors are directed to Contact.
 *
 * @see migration/source/neothink-reviews.html
 */

export const NEOTHINK_REVIEWS_HERO_SUB =
  "Read member stories from people who describe how the Neothink Society and the Neothink idea system affected their lives—from personal growth to business. This page is published by the Neothink Institute as public context; individual experiences are member-submitted and not independent third-party verification.";

export const NEOTHINK_REVIEWS_SECTION_TITLE = "Member stories: real experiences with the Neothink Society";

export const NEOTHINK_REVIEWS_SECTION_LEAD =
  "Powerful stories from Neothink Society members who describe transforming their lives. From personal growth to business success, these reviews highlight how members frame the impact of adopting the Neothink mindset. The carousel below uses the same member-voice set featured across other Society hubs on this site (33 voices).";

/** External archives linked from the legacy page (third-party / legacy sites). */
export const NEOTHINK_REVIEWS_EXTERNAL_ARCHIVES = [
  {
    name: "50,000 reviews (legacy Society site)",
    description: "Large archive of member reviews hosted on a legacy Neothink Society property.",
    href: "https://www.neothinksociety.com/",
  },
  {
    name: "Messages to Mark Hamilton",
    description: "Archive of member messages on a legacy Society site.",
    href: "https://www.theneothinksociety.com/",
  },
  {
    name: "Letters to Mark Hamilton",
    description: "Testimonials and letters collection (legacy TVP-related site).",
    href: "https://www.markhamilton-neothink-tvp.com/testimonials/",
  },
] as const;

export { NEOTHINK_UNIVERSITY_TESTIMONIALS as NEOTHINK_REVIEWS_TESTIMONIALS } from "./neothink-university-testimonials.generated";
