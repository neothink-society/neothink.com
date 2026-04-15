"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { HOW_JOBS_WILL_CHANGE_BODY_HTML } from "@/lib/how-jobs-will-change-body-html";
import {
  HOW_JOBS_WILL_CHANGE_HEADLINE,
  HOW_JOBS_WILL_CHANGE_INTRO_HTML,
  HOW_JOBS_WILL_CHANGE_QUICK_ANSWER_HTML,
  HOW_JOBS_WILL_CHANGE_YOUTUBE_ID,
} from "@/lib/how-jobs-will-change-data";
import { HOW_JOBS_WILL_CHANGE_FAQ } from "@/lib/how-jobs-will-change-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function HowJobsWillChangePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="hjwc"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={HOW_JOBS_WILL_CHANGE_HEADLINE}
      introHtml={HOW_JOBS_WILL_CHANGE_INTRO_HTML}
      readTime="10 min read"
      quickKicker="Quick answer"
      quickTitle="How Will Jobs Change?"
      quickAnswerHtml={HOW_JOBS_WILL_CHANGE_QUICK_ANSWER_HTML}
      youtubeId={HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}
      videoTitle="How Jobs Will Change in 2026"
      bodyHtml={HOW_JOBS_WILL_CHANGE_BODY_HTML}
      faqHeadingId="hjwc-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theBeautifulVsTheUglyInOurWorld3}>The beautiful vs. the ugly</Link>,{" "}
          <Link href={WP.theMissingKeyToUniversalProsperity}>The missing key to universal prosperity</Link>,{" "}
          <Link href={WP.howNeothinkBringsYouWorldOfProsperity}>How Neothink brings prosperity</Link>,{" "}
          <Link href={WP.immortalis}>Immortalis</Link>.
        </>
      }
      faqItems={HOW_JOBS_WILL_CHANGE_FAQ}
      relatedCards={[
        {
          title: "The beautiful vs. the ugly",
          description: "Value creators and destroyers.",
          href: WP.theBeautifulVsTheUglyInOurWorld3,
          cta: "Read article",
        },
        {
          title: "A new country: Immortalis",
          description: "The great experiment.",
          href: WP.aNewCountryTheGreatExperimentCalledImmortalis,
          cta: "Read article",
        },
        {
          title: "The missing key to universal prosperity",
          description: "Following mode and self-leader mentality.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
        {
          title: "Decoding Super Puzzle",
          description: "Secret formula for curing aging (series on neothink.com).",
          href: "/decoding-super-puzzle",
          cta: "Read article",
        },
      ]}
    />
  );
}
