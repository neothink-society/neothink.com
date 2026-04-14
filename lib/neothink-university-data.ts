/**
 * Editorial content migrated from WordPress page `neothink-university` (Elementor ID 2051).
 * @see migration/source/neothink-university.html
 */

export const NEOTHINK_UNIVERSITY_MISSION =
  "At Neothink University, our mission is to help you unlock your full potential. Unlike traditional institutions, we serve as your guide to a life brimming with purpose and excitement. Equipped with the tools and expertise to uncover your true passions, we are dedicated to helping you build a life you eagerly anticipate each day—one where you pursue what you love and make a meaningful impact.";

export const NEOTHINK_UNIVERSITY_ABOUT = {
  lead:
    "Neothink University is a paid program offering of The Neothink Society—the private education organization that delivers structured learning and mentoring in the Neothink idea system. The Neothink Institute is the public research institute (this site, public media); the Society is the private education side. Our mission is simple: to help people discover a life worth living.",
  body: "At Neothink University, we offer a range of paid programs designed to help you find your true calling, ignite your passion, and achieve financial freedom. We tailor our offerings to meet the needs of each member, delivering valuable insights and practical knowledge you can apply to everyday life. Enrollment and fees are handled through Society channels—not as free, self-serve public courses.",
} as const;

export type NuProgram = { readonly title: string; readonly body: string };

export const NEOTHINK_UNIVERSITY_PROGRAMS: readonly NuProgram[] = [
  {
    title: "Passion Development Course",
    body: "Keeping your passion alive is crucial for a fulfilling life. This course brings strategies to help you fuel your daily life with enthusiasm and excitement. Learn how to stay motivated and turn your passions into a driving force for success.",
  },
  {
    title: "Prosperity Pathway",
    body: "Financial freedom is a key component of a prosperous life. This pathway provides practical steps and advice to help you achieve financial independence.",
  },
  {
    title: "Mindset Mastery",
    body: "Your mindset plays a significant role in your success and happiness. This program helps you overcome obstacles and achieve your goals. Learn how to harness the power of your mind to create the life you desire.",
  },
  {
    title: "Health and Wellness Program",
    body: "True happiness includes physical and mental well-being. This program offers guidance on maintaining a healthy lifestyle, including nutrition advice.",
  },
] as const;

export type NuBullet = { readonly title: string; readonly body: string };

export const NEOTHINK_UNIVERSITY_BENEFITS: readonly NuBullet[] = [
  {
    title: "Experienced Mentors",
    body: "Learn from experts with decades of experience.",
  },
  {
    title: "Supportive Community",
    body: "Join a network of like-minded individuals.",
  },
  {
    title: "Proven Methods",
    body: "Use time-tested techniques and strategies.",
  },
  {
    title: "Personal Growth",
    body: "Experience significant personal and professional development.",
  },
] as const;

export const NEOTHINK_UNIVERSITY_WHY_SOCIETY: readonly NuBullet[] = [
  {
    title: "Long-standing Experience",
    body: "Over 45 years of dedicated service.",
  },
  {
    title: "Member-Centric Approach",
    body: "We put our members first in everything we do.",
  },
  {
    title: "Positive Transformation",
    body: "Our programs are designed to bring real, positive change.",
  },
] as const;

/** Full Strong Testimonials export (33) — regenerated from WP HTML; see `scripts/extract-neothink-university-testimonials.mjs`. */
export type { NuTestimonial, NuTestimonialImage } from "./neothink-university-testimonials.generated";
export { NEOTHINK_UNIVERSITY_TESTIMONIALS } from "./neothink-university-testimonials.generated";
