"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_BODY_HTML } from "@/lib/building-the-engine-behind-immortalis-body-html";
import {
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_HEADLINE,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_INTRO_HTML,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_QUICK_ANSWER_HTML,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/building-the-engine-behind-immortalis-data";
import { BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_FAQ } from "@/lib/building-the-engine-behind-immortalis-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function BuildingTheEngineBehindImmortalisPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="bebi"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_HEADLINE}
      introHtml={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_INTRO_HTML}
      readTime="15 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Engine Behind Immortalis?"
      quickAnswerHtml={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_QUICK_ANSWER_HTML}
      youtubeId={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}
      videoTitle="Building the Engine Behind Immortalis — Neothink Society address"
      bodyHtml={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_BODY_HTML}
      faqHeadingId="bebi-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.spreadingImmortalisToWorldLeaders}>Spreading Immortalis to world leaders</Link>,{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis: the great experiment</Link>,{" "}
          <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>.
        </>
      }
      faqItems={BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_FAQ}
      relatedCards={[
        {
          title: "Spreading Immortalis to world leaders",
          description: "Prime Law coalition and heads of state.",
          href: WP.spreadingImmortalisToWorldLeaders,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Following mode and the Neo-Tech lineage.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
        {
          title: "Immortalis: the great experiment",
          description: "Citizenship and public growth.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Medical mecca and physical nation.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
