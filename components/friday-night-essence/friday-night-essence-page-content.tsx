"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { FRIDAY_NIGHT_ESSENCE_BODY_HTML } from "@/lib/friday-night-essence-body-html";
import {
  FRIDAY_NIGHT_ESSENCE_HEADLINE,
  FRIDAY_NIGHT_ESSENCE_INTRO_HTML,
  FRIDAY_NIGHT_ESSENCE_QUICK_ANSWER_HTML,
} from "@/lib/friday-night-essence-data";
import { FRIDAY_NIGHT_ESSENCE_FAQ } from "@/lib/friday-night-essence-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkConceptsCategory;

export function FridayNightEssencePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="fne"
      seriesLabel="Neothink Concepts"
      seriesHref={SERIES}
      heading={FRIDAY_NIGHT_ESSENCE_HEADLINE}
      introHtml={FRIDAY_NIGHT_ESSENCE_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Friday-Night Essence?"
      quickAnswerHtml={FRIDAY_NIGHT_ESSENCE_QUICK_ANSWER_HTML}
      bodyHtml={FRIDAY_NIGHT_ESSENCE_BODY_HTML}
      faqHeadingId="fne-faq-heading"
      faqLead={
        <>
          Next in series: <Link href={WP.selfLeaderSecret}>Self-leader secret</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.valueCreator}>Value creator</Link>. Related:{" "}
          <Link href={WP.reprogramMindToBeRich}>Reprogram your mind</Link>,{" "}
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>.
        </>
      }
      faqItems={FRIDAY_NIGHT_ESSENCE_FAQ}
      relatedCards={[
        {
          title: "Self-leader secret",
          description: "Seven steps out of following mode.",
          href: WP.selfLeaderSecret,
          cta: "Read article",
        },
        {
          title: "Integrated thinking",
          description: "Percepts, concepts, puzzle-pictures.",
          href: WP.integratedThinking,
          cta: "Read article",
        },
        {
          title: "Value creator",
          description: "Production vs. creation.",
          href: WP.valueCreator,
          cta: "Read article",
        },
        {
          title: "Reprogram your mind",
          description: "Neothink Awakening.",
          href: WP.reprogramMindToBeRich,
          cta: "Read article",
        },
      ]}
    />
  );
}
