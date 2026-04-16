"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { INTEGRATED_THINKING_BODY_HTML } from "@/lib/integrated-thinking-body-html";
import {
  INTEGRATED_THINKING_HEADLINE,
  INTEGRATED_THINKING_INTRO_HTML,
  INTEGRATED_THINKING_QUICK_ANSWER_HTML,
} from "@/lib/integrated-thinking-data";
import { INTEGRATED_THINKING_FAQ } from "@/lib/integrated-thinking-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkConceptsCategory;

export function IntegratedThinkingPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="itc"
      seriesLabel="Neothink Concepts"
      seriesHref={SERIES}
      heading={INTEGRATED_THINKING_HEADLINE}
      introHtml={INTEGRATED_THINKING_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Integrated Thinking?"
      quickAnswerHtml={INTEGRATED_THINKING_QUICK_ANSWER_HTML}
      bodyHtml={INTEGRATED_THINKING_BODY_HTML}
      faqHeadingId="itc-faq-heading"
      faqLead={
        <>
          Series: <Link href={WP.fridayNightEssence}>Friday-Night Essence</Link>,{" "}
          <Link href={WP.selfLeaderSecret}>Self-leader secret</Link>,{" "}
          <Link href={WP.valueCreator}>Value creator</Link>. Related:{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>Greatest mental breakthrough</Link>,{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>.
        </>
      }
      faqItems={INTEGRATED_THINKING_FAQ}
      relatedCards={[
        {
          title: "Value creator",
          description: "Creation powered by integration.",
          href: WP.valueCreator,
          cta: "Read article",
        },
        {
          title: "Self-leader secret",
          description: "Following mode to self-leadership.",
          href: WP.selfLeaderSecret,
          cta: "Read article",
        },
        {
          title: "Friday-Night Essence",
          description: "Find your motivational root.",
          href: WP.fridayNightEssence,
          cta: "Read article",
        },
        {
          title: "Missing key to prosperity",
          description: "Self-leader mentality.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
      ]}
    />
  );
}
