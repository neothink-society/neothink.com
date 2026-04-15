"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { LAND_BASED_IMMORTALIS_BODY_HTML } from "@/lib/land-based-immortalis-body-html";
import {
  LAND_BASED_IMMORTALIS_HEADLINE,
  LAND_BASED_IMMORTALIS_INTRO_HTML,
  LAND_BASED_IMMORTALIS_QUICK_ANSWER_HTML,
  LAND_BASED_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/land-based-immortalis-data";
import { LAND_BASED_IMMORTALIS_FAQ } from "@/lib/land-based-immortalis-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function LandBasedImmortalisPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="lbi"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={LAND_BASED_IMMORTALIS_HEADLINE}
      introHtml={LAND_BASED_IMMORTALIS_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Land-Based Immortalis?"
      quickAnswerHtml={LAND_BASED_IMMORTALIS_QUICK_ANSWER_HTML}
      youtubeId={LAND_BASED_IMMORTALIS_YOUTUBE_ID}
      videoTitle="Land-Based Immortalis — citizens meeting"
      bodyHtml={LAND_BASED_IMMORTALIS_BODY_HTML}
      faqHeadingId="lbi-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.libertariansNextBigPossibility}>Libertarians’ next big possibility</Link>,{" "}
          <Link href={WP.montPelerinPivotIntoOurEssence}>Mont Pelerin pivot</Link>,{" "}
          <Link href={WP.aKnightInShiningArmorImmortalis}>Knight in shining armor</Link>,{" "}
          <Link href={WP.immortalis}>Immortalis hub</Link>.
        </>
      }
      faqItems={LAND_BASED_IMMORTALIS_FAQ}
      relatedCards={[
        {
          title: "Libertarians’ next big possibility",
          description: "Prime Law capitalism and order without government.",
          href: WP.libertariansNextBigPossibility,
          cta: "Read article",
        },
        {
          title: "The Mont Pelerin pivot",
          description: "Essence, medical mecca, and the face to the world.",
          href: WP.montPelerinPivotIntoOurEssence,
          cta: "Read article",
        },
        {
          title: "The grand experiment of our time",
          description: "America’s founding parallel and the second experiment.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Immortalis: Great Experiment",
          description: "Prime Law Capitalism keynote.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
      ]}
    />
  );
}
