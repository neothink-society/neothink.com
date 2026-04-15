"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { MISSING_KEY_UNIVERSAL_PROSPERITY_BODY_HTML } from "@/lib/the-missing-key-to-universal-prosperity-body-html";
import {
  MKUP_HEADLINE,
  MKUP_INTRO_HTML,
  MKUP_QUICK_ANSWER_HTML,
  MKUP_YOUTUBE_ID,
} from "@/lib/the-missing-key-to-universal-prosperity-data";
import { MKUP_FAQ } from "@/lib/the-missing-key-to-universal-prosperity-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = "https://neothink.com/category/neothink-philosophy/";

export function TheMissingKeyToUniversalProsperityPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="mkup"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={MKUP_HEADLINE}
      introHtml={MKUP_INTRO_HTML}
      readTime="16 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Missing Key to Universal Prosperity?"
      quickAnswerHtml={MKUP_QUICK_ANSWER_HTML}
      youtubeId={MKUP_YOUTUBE_ID}
      videoTitle="The Missing Key to Universal Prosperity — Neothink Society address"
      bodyHtml={MISSING_KEY_UNIVERSAL_PROSPERITY_BODY_HTML}
      faqHeadingId="mkup-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theGreatestMentalBreakthrough}>Greatest mental breakthrough</Link>,{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>,{" "}
          <Link href={WP.reprogramMindToBeRich}>Reprogram your mind</Link>,{" "}
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>.
        </>
      }
      faqItems={MKUP_FAQ}
      relatedCards={[
        {
          title: "Greatest mental breakthrough",
          description: "Removing the negative vs. adding the positive.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
        {
          title: "Knight in shining armor",
          description: "Immortalis as a universal message.",
          href: WP.aKnightInShiningArmorImmortalis,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Following mode and subtle mysticism.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
        {
          title: "Immortalis hub",
          description: "Institute vision page.",
          href: WP.immortalis,
          cta: "Immortalis",
        },
      ]}
    />
  );
}
