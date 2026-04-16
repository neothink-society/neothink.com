"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { STARTING_OUR_OWN_COUNTRY_BODY_HTML } from "@/lib/starting-our-own-country-body-html";
import {
  STARTING_OUR_OWN_COUNTRY_HEADLINE,
  STARTING_OUR_OWN_COUNTRY_INTRO_HTML,
  STARTING_OUR_OWN_COUNTRY_QUICK_ANSWER_HTML,
  STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID,
} from "@/lib/starting-our-own-country-data";
import { STARTING_OUR_OWN_COUNTRY_FAQ } from "@/lib/starting-our-own-country-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function StartingOurOwnCountryPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="sooc"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={STARTING_OUR_OWN_COUNTRY_HEADLINE}
      introHtml={STARTING_OUR_OWN_COUNTRY_INTRO_HTML}
      readTime="8 min read"
      quickKicker="Quick answer"
      quickTitle="What Are the Two Puzzle Pieces of Immortalis?"
      quickAnswerHtml={STARTING_OUR_OWN_COUNTRY_QUICK_ANSWER_HTML}
      youtubeId={STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID}
      videoTitle="Starting Our Own Country Is Closer Than You Think!"
      bodyHtml={STARTING_OUR_OWN_COUNTRY_BODY_HTML}
      faqHeadingId="sooc-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.decodingSuperPuzzle}>Decoding Super Puzzle</Link>,{" "}
          <Link href={WP.liveLonger}>Live longer</Link>, <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>Grand experiment of our time</Link>.
        </>
      }
      faqItems={STARTING_OUR_OWN_COUNTRY_FAQ}
      relatedCards={[
        {
          title: "Decoding Super Puzzle",
          description: "Three-component aging formula.",
          href: WP.decodingSuperPuzzle,
          cta: "Read article",
        },
        {
          title: "Live longer",
          description: "Three obstacles after RAADfest.",
          href: WP.liveLonger,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Physical territory strategy.",
          href: WP.landBasedImmortalis,
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
