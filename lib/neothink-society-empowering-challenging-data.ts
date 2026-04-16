/**
 * Article migrated from WordPress post `neothink-society-empowering-and-challenging` (id 3581).
 * Agency-era post (published 2025-08-18). Body matches WP `content.rendered` (Feb 2026 snapshot).
 * `the-greatest-mental-breakthrough` is a legacy WP path not yet in this Next app.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/3581
 */

import { WP } from "@/lib/wordpress-routes";

export const NSEC_PATH = "/neothink-society-empowering-challenging" as const;

export const NSEC_WP = {
  postId: "3581",
} as const;

export const NSEC_IMAGE = {
  src: "/images/wp/2025/09/studio-portrait-smiling-mature-businesswoman-plain-background.jpg",
  alt: "How The Neothink Society Can Be Both Empowering And Challenging",
  width: 1000,
  height: 667,
} as const;

export const NSEC_DATES = {
  datePublished: "2025-08-18",
  dateModified: "2026-02-06",
} as const;

export const NSEC_INTRO_PARAS: readonly string[] = [
  "Every movement that challenges [[integratedThinking|conventional thinking]] sparks both inspiration and resistance, and The Neothink Society is no exception. The Neothink Society complaints often come from those encountering our ideas for the first time, questioning a system that dares to break away from traditional norms.",
  "At the same time, many embrace our philosophy and discover a radically new way of living. This paradox is natural, as real change requires stepping beyond the familiar and into a reality where the future no longer mirrors the past.",
];

export type NsecSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export const NSEC_SECTIONS: readonly NsecSection[] = [
  {
    id: "facing-the-neothink-society-complaints",
    title: "Facing The Neothink Society Complaints",
    paragraphs: [
      "When people raise concerns about our methods, what they often reveal is a more profound discomfort with transformation itself. It is easier to stay in familiar patterns than to confront the demand for growth.",
      "Some people find it challenging to integrate our teachings into their daily lives because old habits do not disappear overnight. Others resist the direct approach we take to help individuals identify stagnation in their lives and replace it with value creation, freedom, and passion.",
      "Complaints emerge because the shift requires responsibility and discipline. We never present success as effortless, and this can feel challenging for anyone conditioned to expect shortcuts.",
      "Many members who once struggled with these very doubts now look back with gratitude. They see that the friction of early resistance prepared them to break cycles of limitation. They learn to create wealth, build loving relationships, and claim control over their own destiny. The initial challenge becomes the very foundation for [[selfLeaderSecret|empowerment]].",
    ],
  },
  {
    id: "the-neothink-secret-society",
    title: "The Neothink Secret Society",
    paragraphs: [
      "The phrase “the Neothink secret society” has carried intrigue for decades. Some call us a secret because the knowledge we share has not been available in traditional institutions. We open the door to principles that allow individuals to build lives filled with purpose and prosperity. What once seemed hidden becomes accessible to those ready to apply it.",
      "The secrecy label also reflects the exclusivity of our community. Our members commit to growth and contribute to a culture where shared [[greatestMentalBreakthrough|breakthroughs]] accelerate personal transformation. This environment produces loyalty that often lasts for decades.",
      "Our network creates a safe place for individuals to pursue ideas that break old molds. In that sense, the so-called secrecy exists only to protect the integrity of the journey, not to exclude anyone willing to embrace it.",
    ],
  },
  {
    id: "is-secret-society-a-true-story",
    title: "Is Secret Society a True Story?",
    paragraphs: [
      "Questions about legitimacy appear often in conversations about movements that challenge convention. People want to know, “Is Secret Society a true story, or just another marketing tale?” The truth has always been visible in the lives of our members.",
      "Stories of individuals breaking through stagnation, starting businesses, transforming relationships, and living with purpose reflect reality. Skeptics who search for proof need only listen to those who have lived the results.",
      "Our decades of history back this reality. We have been present for over forty-five years, growing a network of committed individuals across the globe. Our events, teachings, and university programs serve thousands who once searched for direction and now live with passion and clarity.",
    ],
  },
  {
    id: "why-empowerment-feels-like-a-challenge",
    title: "Why Empowerment Feels like a Challenge",
    paragraphs: [
      "Empowerment never follows a straight path because it asks people to dismantle old thought patterns and replace them with stronger frameworks that demand more of them.",
      "When we invite our members to confront the areas of their life that no longer serve them, the process can feel uncomfortable, yet that discomfort signals real progress. Growth cannot take root without accountability and effort, and empowerment has no lasting foundation without both.",
      "Once our members embrace that process, the challenge begins to transform into exhilaration. They uncover passions they had long buried and skills they never thought to cultivate, and those discoveries open the door to new opportunities.",
      "Instead of living with the limited vision of simply getting by, they expand into a mindset of value creation that redefines what they believe is possible. That shift takes them from routine existence into a life filled with purpose, and the very struggle that once felt overwhelming becomes the turning point of their growth.",
    ],
  },
  {
    id: "building-community-and-longevity",
    title: "Building Community and Longevity",
    paragraphs: [
      "Our members often speak about the strength of the community. Decades of loyalty prove the lasting impact of society. People remain because they find connection, mentorship, and energy that fuels their own journey. Clubhouses, university courses, and live events create environments where transformation is shared.",
      "Longevity also comes from the adaptability of our system. What remains constant over our decades of work is our commitment to freedom, passion, purpose, and prosperity. Members who commit to the long term find their lives reshaped in ways that ripple across careers, families, and personal development.",
    ],
  },
  {
    id: "transformation-that-lasts",
    title: "Transformation that Lasts",
    paragraphs: [
      "Empowerment and challenge are two sides of the same coin. Without challenge, empowerment has no foundation. Without empowerment, challenge has no reward.",
      "The Neothink Society thrives in this space because we believe people deserve a life of freedom and exhilaration. The critics who voice complaints often reveal the very resistance that must be overcome to reach transformation.",
      "If you want to learn more about [[aboutSociety|The Neothink Society]], or if you feel ready to take your own step toward transformation, we invite you to [[joinExternal|join The Neothink Society]] today.",
    ],
  },
] as const;

export const NSEC_JOIN_EXTERNAL = "https://www.theneothinksociety.com/join-the-neothink-society/";

export const NSEC_GREATEST_MENTAL_URL = "/the-greatest-mental-breakthrough" as const;

export const NSEC_ABOUT_SOCIETY_HREF = `${WP.about}#ab-society-heading` as const;

export const NSEC_INLINE_HREF: Record<string, string> = {
  integratedThinking: WP.integratedThinking,
  selfLeaderSecret: WP.selfLeaderSecret,
};
