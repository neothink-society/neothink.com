"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { IMMORTALIS_GREAT_EXPERIMENT_BODY_HTML } from "@/lib/immortalis-the-great-experiment-body-html";
import {
  IGE_HEADLINE,
  IGE_INTRO_HTML,
  IGE_QUICK_ANSWER_HTML,
  IGE_YOUTUBE_ID,
} from "@/lib/immortalis-the-great-experiment-data";
import { IGE_FAQ } from "@/lib/immortalis-the-great-experiment-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = "https://neothink.com/category/neothink-philosophy/";

export function ImmortalisTheGreatExperimentPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="ige"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={IGE_HEADLINE}
      introHtml={IGE_INTRO_HTML}
      readTime="18 min read"
      quickKicker="Quick answer"
      quickTitle="What Makes Immortalis the Great Experiment?"
      quickAnswerHtml={IGE_QUICK_ANSWER_HTML}
      youtubeId={IGE_YOUTUBE_ID}
      videoTitle="Immortalis: The Great Experiment of Our Time"
      bodyHtml={IMMORTALIS_GREAT_EXPERIMENT_BODY_HTML}
      faqHeadingId="ige-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.primeLaw}>Prime Law</Link>, <Link href={WP.immortalis}>Immortalis</Link>,{" "}
          <Link href={WP.theCityThatCuresDiseaseNeovia}>Neovia speech</Link>,{" "}
          <Link href={WP.freedomKeyToUnlockingTrueWealth}>Freedom &amp; wealth</Link>,{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>.
        </>
      }
      faqItems={IGE_FAQ}
      relatedCards={[
        {
          title: "Neovia speech",
          description: "City that cures disease.",
          href: WP.theCityThatCuresDiseaseNeovia,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Following mode to Neothink.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
        {
          title: "Prime Law",
          description: "Institute hub.",
          href: WP.primeLaw,
          cta: "Prime Law",
        },
        {
          title: "Twelve Visions Party",
          description: "Political movement page.",
          href: WP.twelveVisionsParty,
          cta: "TVP",
        },
      ]}
    />
  );
}
