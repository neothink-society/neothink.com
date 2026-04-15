"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_BODY_HTML } from "@/lib/a-new-country-the-great-experiment-called-immortalis-body-html";
import {
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_HEADLINE,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_INTRO_HTML,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_QUICK_ANSWER_HTML,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/a-new-country-the-great-experiment-called-immortalis-data";
import { A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_FAQ } from "@/lib/a-new-country-the-great-experiment-called-immortalis-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function ANewCountryTheGreatExperimentCalledImmortalisPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="anci"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_HEADLINE}
      introHtml={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_INTRO_HTML}
      readTime="5 min read"
      quickKicker="Quick answer"
      quickTitle="What Makes Immortalis Different?"
      quickAnswerHtml={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_QUICK_ANSWER_HTML}
      youtubeId={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID}
      videoTitle="A New Country: The Great Experiment Called Immortalis"
      bodyHtml={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_BODY_HTML}
      faqHeadingId="anci-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.immortalis}>Immortalis</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Great Experiment speech</Link>,{" "}
          <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>Grand experiment of our time</Link>.
        </>
      }
      faqItems={A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_FAQ}
      relatedCards={[
        {
          title: "How every individual can be wealthy",
          description: "Ruling class removal and network state.",
          href: WP.howEveryIndividualCanBeWealthy,
          cta: "Read article",
        },
        {
          title: "The beautiful vs. the ugly",
          description: "Value creators and value destroyers.",
          href: WP.theBeautifulVsTheUglyInOurWorld3,
          cta: "Read article",
        },
        {
          title: "How jobs will change",
          description: "Labor, mind work, and super puzzles.",
          href: WP.howJobsWillChange,
          cta: "Read article",
        },
        {
          title: "A knight in shining armor",
          description: "Letters of intent and momentum.",
          href: WP.aKnightInShiningArmorImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
