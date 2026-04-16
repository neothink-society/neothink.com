/**
 * Article migrated from WordPress post `is-neothink-just-another-self-help-book` (id 3593).
 * Agency-era post (published 2025-08-25). Body copy matches WP `content.rendered` (Feb 2026 snapshot);
 * inline links are expressed as `[[key|label]]` for Next. The philosophies article resolves to the migrated
 * Neothink Philosophy route {@link WP.whatAllPhilosophiesGetWrong}.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/3593
 */

import { WP } from "@/lib/wordpress-routes";

export const IS_NEOTHINK_SELF_HELP_PATH = "/is-neothink-just-another-self-help-book" as const;

export const IS_NEOTHINK_SELF_HELP_WP = {
  postId: "3593",
} as const;

export const IS_NEOTHINK_SELF_HELP_IMAGE = {
  src: "/images/wp/2025/09/stack-open-books-flipped-pages-gray-background-learning-reading-self.jpg",
  alt: "Is Neothink Just Another Self-Help Book?",
  width: 1000,
  height: 667,
} as const;

export const IS_NEOTHINK_SELF_HELP_DATES = {
  datePublished: "2025-08-25",
  dateModified: "2026-02-06",
} as const;

/** Opening paragraphs (hero); link in para 3 matches WP anchor on integrated thinking. */
export const IS_NEOTHINK_SELF_HELP_INTRO_PARAS: readonly string[] = [
  "Self-help books promise a lot. They offer tips, routines, and motivational lines designed to get readers back on track. However, as most people quickly learn, reading them rarely changes anything long-term. A quick burst of motivation fades, the habits don't stick, and you're left searching for the following answer. That's where the Neothink approach stands out.",
  "If you're looking for a Neothink book summary, what makes it different? The truth is, Neothink isn't built to entertain or to lift your spirits temporarily. It's designed to teach a new way of thinking that directly connects to how you live, work, and create.",
  "Neothink started over four decades ago as a breakthrough system for individual growth. It began with books but grew into something far larger: a society of people who apply [[integratedThinking|integrated thinking]] to business, health, relationships, and purpose. We’ve never positioned ourselves as a motivational brand. Instead, we built a system that members apply in real life with long-term results.",
];

export type ShbSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export const IS_NEOTHINK_SELF_HELP_SECTIONS: readonly ShbSection[] = [
  {
    id: "neothink-book-summary-understanding-the-foundation",
    title: "Neothink Book Summary: Understanding the Foundation",
    paragraphs: [
      "The Neothink books introduce a concept we call integrated thinking. It’s a method that connects logic, creativity, and purpose in a way that helps people solve problems, set meaningful goals, and produce real value. This type of thinking replaces scattered effort with clear direction.",
      "Many of our members first discover Neothink through the literature. These books introduce a step-by-step shift in perspective. Instead of teaching surface-level strategies, they delve into mental patterns and demonstrate how to build a life based on creation rather than reaction.",
      "The system is rooted in something we call the Twelve Visions, which serve as guiding principles for personal and professional development. These visions include clear, practical frameworks for improving health, building wealth, developing romantic partnerships, and achieving inner peace.",
      "As readers explore the Neothink books, they begin seeing themselves as [[valueCreator|value creators]]; people who build businesses, lead families, and contribute to communities with purpose. They stop waiting for motivation and start acting on structured thinking.",
    ],
  },
  {
    id: "why-people-ask-if-the-secret-society-is-real",
    title: "Why People Ask if the Secret Society Is Real",
    paragraphs: [
      "Over the years, a phrase has followed us around: “The secret society is real.” People ask about it because the experience of Neothink feels different from typical personal development groups. It operates as a living community where people actually use the tools they read about.",
      "We’ve had members stay with us not just for months but for decades. That kind of long-term connection grows from results. People change their careers, improve their relationships, take control of their health, and live with a stronger sense of identity and direction.",
      "With more than 2 million members across 140+ countries, Neothink has built a quiet but powerful presence. Members often meet in local clubhouses or at larger live events, including our annual World Summit. They’re places where ideas get sharpened and where people support each other’s growth.",
      "This reputation of being a “secret society” has little to do with secrecy and everything to do with substance. Most people don’t expect a personal development platform to feel like a real community. Most don't expect it to work.",
    ],
  },
  {
    id: "what-happens-after-reading-neothink-books",
    title: "What Happens After Reading Neothink Books",
    paragraphs: [
      "Reading the books is just the beginning. Once people grasp the core of integrated thinking, they’re usually ready for more. That’s when they move into the tools and programs we've built to take these concepts even further.",
      "We created the Ascension Platform to help our members apply Neothink principles in practical ways. It offers everything from health and productivity tools to AI-powered business systems, all built on the same thinking introduced in the books. Members use these tools to start new ventures, optimize their daily routines, and upgrade their long-term goals.",
      "There’s also access to group coaching and private mentorship focused on growth areas like mindset, relationships, finances, and personal branding. These sessions help members build their own customized success models using what they learned in the books.",
      "Then there’s Project Life, one of our most forward-thinking initiatives. This program focuses on physical longevity: combining the latest research in nutraceuticals, telemedicine, biological age testing, and custom health plans to help people live longer, stronger lives.",
      "All these systems work together. Nothing in Neothink operates in isolation. The books provide the intellectual base, whereas the community and tools provide the structure for long-term action.",
    ],
  },
  {
    id: "how-the-neothink-society-grew-from-a-set-of-ideas-into-a-movement",
    title: "How The Neothink Society Grew from a Set of Ideas Into a Movement",
    paragraphs: [
      "We’ve been doing this work for over 45 years at The Neothink Society. What started as a vision for self-leadership grew into an entire ecosystem. As more people began to see results, the network expanded. With it, we offer a more in-depth understanding.",
      "Neothink now includes Neothink University, a learning hub with free and advanced courses in personal development, entrepreneurship, and wellness. The university connects directly with everything in the books, turning theory into usable knowledge.",
      "We also created an internal business platform called FLOW, which helps members run their own companies using systems based on Neothink thinking. With it, they can manage leads, automate outreach, and grow efficiently; all while staying aligned with their personal values.",
      "Our goal has never changed. We help people break out of stagnation and reclaim their momentum. Neothink does that with systems, support, and a mindset that sticks.",
    ],
  },
  {
    id: "is-neothink-just-another-self-help-book",
    title: "Is Neothink Just Another Self-Help Book?",
    paragraphs: [
      "The short answer is no. Neothink books are not meant to inspire for a few days and then fade. They introduce a system that people use to change how they think and live. The results are real because the thinking is real.",
      "What makes The Neothink Society unique isn’t just the books. It’s how everything connects: the [[philosophiesWrong|philosophy]], the people, the tools, and the long-term outcomes.",
      "If you're looking to move past temporary motivation and step into long-term growth, you're in the right place. You can [[joinExternal|join The Neothink Society]] and experience what it’s like to think, live, and grow with intention. Read more about [[aboutSociety|The Neothink Society]] to understand who we are and how this system developed.",
    ],
  },
] as const;

/** Same external join target as in WordPress. */
export const IS_NEOTHINK_JOIN_EXTERNAL = "https://www.theneothinksociety.com/join-the-neothink-society/";

/** Society section on About (WP used `#what-is-neothink-society`; this app uses `ab-society-heading`). */
export const SHB_ABOUT_SOCIETY_HREF = `${WP.about}#ab-society-heading` as const;

/** Route keys for `[[key|label]]` (see component for joinExternal, aboutSociety, philosophiesWrong). */
export const SHB_INLINE_HREF: Record<string, string> = {
  integratedThinking: WP.integratedThinking,
  valueCreator: WP.valueCreator,
  philosophiesWrong: WP.whatAllPhilosophiesGetWrong,
};
