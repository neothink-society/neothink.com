"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_GRAND_EXPERIMENT_OF_OUR_TIME_BODY_HTML } from "@/lib/the-grand-experiment-of-our-time-body-html";
import {
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_HEADLINE,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_INTRO_HTML,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_QUICK_ANSWER_HTML,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID,
} from "@/lib/the-grand-experiment-of-our-time-data";
import { THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ } from "@/lib/the-grand-experiment-of-our-time-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = "https://neothink.com/category/neothink-philosophy/";

export function TheGrandExperimentOfOurTimePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="geo"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_GRAND_EXPERIMENT_OF_OUR_TIME_HEADLINE}
      introHtml={THE_GRAND_EXPERIMENT_OF_OUR_TIME_INTRO_HTML}
      readTime="14 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Grand Experiment of Our Time?"
      quickAnswerHtml={THE_GRAND_EXPERIMENT_OF_OUR_TIME_QUICK_ANSWER_HTML}
      youtubeId={THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}
      videoTitle="The Grand Experiment of Our Time — Neothink Society address"
      bodyHtml={THE_GRAND_EXPERIMENT_OF_OUR_TIME_BODY_HTML}
      faqHeadingId="geo-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.montPelerinPivotIntoOurEssence}>Mont Pelerin pivot</Link>,{" "}
          <Link href={WP.libertariansNextBigPossibility}>Libertarians’ next big possibility</Link>,{" "}
          <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis: Great Experiment speech</Link>.
        </>
      }
      faqItems={THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ}
      relatedCards={[
        {
          title: "The Mont Pelerin pivot",
          description: "Essence, medical mecca, and turnkey packages.",
          href: WP.montPelerinPivotIntoOurEssence,
          cta: "Read article",
        },
        {
          title: "Libertarians’ next big possibility",
          description: "Prime Law capitalism and the non-aggression principle.",
          href: WP.libertariansNextBigPossibility,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Europe, U.S. federal land, and Argentina.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
        {
          title: "A knight in shining armor",
          description: "Universal appeal and biomedical momentum.",
          href: WP.aKnightInShiningArmorImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
