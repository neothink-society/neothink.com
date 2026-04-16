"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { LIVE_LONGER_BODY_HTML } from "@/lib/live-longer-body-html";
import {
  LIVE_LONGER_HEADLINE,
  LIVE_LONGER_INTRO_HTML,
  LIVE_LONGER_QUICK_ANSWER_HTML,
  LIVE_LONGER_YOUTUBE_ID,
} from "@/lib/live-longer-data";
import { LIVE_LONGER_FAQ } from "@/lib/live-longer-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function LiveLongerPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="llong"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={LIVE_LONGER_HEADLINE}
      introHtml={LIVE_LONGER_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Are the Three Obstacles to Curing Aging?"
      quickAnswerHtml={LIVE_LONGER_QUICK_ANSWER_HTML}
      youtubeId={LIVE_LONGER_YOUTUBE_ID}
      videoTitle="Live Longer!"
      bodyHtml={LIVE_LONGER_BODY_HTML}
      faqHeadingId="llong-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.startingOurOwnCountry}>Starting our own country</Link>,{" "}
          <Link href={WP.theMissingKeyToUniversalProsperity}>The missing key to universal prosperity</Link>,{" "}
          <Link href={WP.montPelerinPivotIntoOurEssence}>Mont Pelerin pivot</Link>,{" "}
          <Link href={WP.aKnightInShiningArmorImmortalis}>A knight in shining armor</Link>.
        </>
      }
      faqItems={LIVE_LONGER_FAQ}
      relatedCards={[
        {
          title: "Starting our own country",
          description: "Two puzzle pieces for the super puzzle.",
          href: WP.startingOurOwnCountry,
          cta: "Read article",
        },
        {
          title: "Decoding Super Puzzle",
          description: "Secret formula for curing aging.",
          href: WP.decodingSuperPuzzle,
          cta: "Read article",
        },
        {
          title: "The missing key to universal prosperity",
          description: "Following mode and self-leader mentality.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
        {
          title: "Mont Pelerin pivot",
          description: "Medical mecca messaging.",
          href: WP.montPelerinPivotIntoOurEssence,
          cta: "Read article",
        },
      ]}
    />
  );
}
