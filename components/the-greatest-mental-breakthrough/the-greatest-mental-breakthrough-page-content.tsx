"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { GREATEST_MENTAL_BREAKTHROUGH_BODY_HTML } from "@/lib/the-greatest-mental-breakthrough-body-html";
import {
  GMB_HEADLINE,
  GMB_INTRO_HTML,
  GMB_QUICK_ANSWER_HTML,
  GMB_YOUTUBE_ID,
} from "@/lib/the-greatest-mental-breakthrough-data";
import { GMB_FAQ } from "@/lib/the-greatest-mental-breakthrough-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheGreatestMentalBreakthroughPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="gmb"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={GMB_HEADLINE}
      introHtml={GMB_INTRO_HTML}
      readTime="14 min read"
      quickKicker="Quick answer"
      quickTitle="What is the greatest mental breakthrough?"
      quickAnswerHtml={GMB_QUICK_ANSWER_HTML}
      youtubeId={GMB_YOUTUBE_ID}
      videoTitle="Mark Hamilton on removing the negative"
      bodyHtml={GREATEST_MENTAL_BREAKTHROUGH_BODY_HTML}
      faqHeadingId="gmb-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theMissingKeyToUniversalProsperity}>Missing key to prosperity</Link>,{" "}
          <Link href={WP.reprogramMindToBeRich}>Reprogram your mind</Link>,{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.valueCreator}>Value creator</Link>.
        </>
      }
      faqItems={GMB_FAQ}
      relatedCards={[
        {
          title: "Missing key to prosperity",
          description: "Following mode and self-leadership.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
        {
          title: "Reprogram your mind",
          description: "Neothink Awakening deep dive.",
          href: WP.reprogramMindToBeRich,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Integrated thinking and value creation.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
        {
          title: "Freedom & wealth",
          description: "Neothink Awakening companion piece.",
          href: WP.freedomKeyToUnlockingTrueWealth,
          cta: "Read article",
        },
      ]}
    />
  );
}
