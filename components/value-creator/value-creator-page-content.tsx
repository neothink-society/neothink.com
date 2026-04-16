"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { VALUE_CREATOR_BODY_HTML } from "@/lib/value-creator-body-html";
import {
  VALUE_CREATOR_HEADLINE,
  VALUE_CREATOR_INTRO_HTML,
  VALUE_CREATOR_QUICK_ANSWER_HTML,
} from "@/lib/value-creator-data";
import { VALUE_CREATOR_FAQ } from "@/lib/value-creator-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkConceptsCategory;

export function ValueCreatorPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="vc"
      seriesLabel="Neothink Concepts"
      seriesHref={SERIES}
      heading={VALUE_CREATOR_HEADLINE}
      introHtml={VALUE_CREATOR_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Value Creation?"
      quickAnswerHtml={VALUE_CREATOR_QUICK_ANSWER_HTML}
      bodyHtml={VALUE_CREATOR_BODY_HTML}
      faqHeadingId="vc-faq-heading"
      faqLead={
        <>
          Series: <Link href={WP.fridayNightEssence}>Friday-Night Essence</Link>,{" "}
          <Link href={WP.selfLeaderSecret}>Self-leader secret</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>. Related:{" "}
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>,{" "}
          <Link href={WP.areasOfProfit}>Areas of profit</Link>.
        </>
      }
      faqItems={VALUE_CREATOR_FAQ}
      relatedCards={[
        {
          title: "Integrated thinking",
          description: "Snap knowledge into new pictures.",
          href: WP.integratedThinking,
          cta: "Read article",
        },
        {
          title: "Friday-Night Essence",
          description: "Fuel for creation.",
          href: WP.fridayNightEssence,
          cta: "Read article",
        },
        {
          title: "Self-leader secret",
          description: "Producer to creator.",
          href: WP.selfLeaderSecret,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Value creators vs. producers.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
      ]}
    />
  );
}
