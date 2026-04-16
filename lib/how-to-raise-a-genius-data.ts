/**
 * Neothink Awakening article from WordPress post `how-to-raise-a-genius` (id 5027).
 * Published 2026-01-19, in-house editorial. The rich Elementor body lives in
 * `how-to-raise-a-genius-body-html.ts` (regenerate via
 * `node scripts/extract-awakening-bodies.mjs`).
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/5027
 */
import type { AwakeningArticleImage } from "@/components/neothink-awakening/neothink-awakening-article";

export const HTRG_PATH = "/how-to-raise-a-genius" as const;

export const HTRG_IMAGE: AwakeningArticleImage = {
  src: "/images/wp/2026/01/how-to-raise-a-genius-the-one-question-thumbnail.jpg",
  alt: "How to raise a genius — Neothink Awakening article",
  width: 1280,
  height: 720,
};

export const HTRG_DATES = {
  datePublished: "2026-01-19",
  dateModified: "2026-02-11",
} as const;

/** `<title>` / Open Graph — mirrors the WordPress title. */
export const HTRG_META_TITLE = "How to Raise a Genius: Always Ask Them THIS One Question" as const;

/** H1 matches in-page Elementor heading. */
export const HTRG_HEADLINE = "How to Raise a Genius" as const;

/** Video first surfaces this URL via Elementor `data-settings.youtube_url`. */
export const HTRG_YOUTUBE_ID = "SxRXvKZSAR4" as const;

export const HTRG_MIN_READ = "8 min read" as const;

export const HTRG_INTRO_PARAS: readonly string[] = [
  "There’s a technique that can transform a child today into a genius tomorrow. It sounds bold—maybe even unbelievable—but the principle behind it is the same one that separates super achievers like Elon Musk, Steve Jobs, and Henry Ford from everyone else.",
  "The technique is remarkably simple. But its simplicity hides profound power.",
];

export const HTRG_QUICK_ANSWER_KICKER = "Quick answer" as const;
export const HTRG_QUICK_ANSWER_TITLE = "How do you raise a genius?" as const;
export const HTRG_QUICK_ANSWER_LEAD_STRONG =
  "Ask your child one simple question after they share their day: “What did you THINK about that?”" as const;
