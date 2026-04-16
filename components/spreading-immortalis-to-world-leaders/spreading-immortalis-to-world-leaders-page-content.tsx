"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { SPREADING_IMMORTALIS_TO_WORLD_LEADERS_BODY_HTML } from "@/lib/spreading-immortalis-to-world-leaders-body-html";
import {
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_HEADLINE,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_INTRO_HTML,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_QUICK_ANSWER_HTML,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID,
} from "@/lib/spreading-immortalis-to-world-leaders-data";
import { SPREADING_IMMORTALIS_TO_WORLD_LEADERS_FAQ } from "@/lib/spreading-immortalis-to-world-leaders-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function SpreadingImmortalisToWorldLeadersPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="siwl"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_HEADLINE}
      introHtml={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_INTRO_HTML}
      readTime="20 min read"
      quickKicker="Quick answer"
      quickTitle="How Is Immortalis Reaching World Leaders?"
      quickAnswerHtml={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_QUICK_ANSWER_HTML}
      youtubeId={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}
      videoTitle="Spreading Immortalis to World Leaders — Neothink Society address"
      bodyHtml={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_BODY_HTML}
      faqHeadingId="siwl-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.buildingTheEngineBehindImmortalis}>Building the engine behind Immortalis</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.startingOurOwnCountry}>Starting our own country</Link>.
        </>
      }
      faqItems={SPREADING_IMMORTALIS_TO_WORLD_LEADERS_FAQ}
      relatedCards={[
        {
          title: "Building the engine behind Immortalis",
          description: "Business ecosystem, publishers, and scale.",
          href: WP.buildingTheEngineBehindImmortalis,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law and Neo-Tech lineage.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Physical nation and medical mecca path.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
        {
          title: "Starting our own country",
          description: "Puzzle pieces and All Citizens Meeting.",
          href: WP.startingOurOwnCountry,
          cta: "Read article",
        },
      ]}
    />
  );
}
