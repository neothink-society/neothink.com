"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_2400_YEAR_MISTAKE_BODY_HTML } from "@/lib/the-2400-year-mistake-body-html";
import {
  THE_2400_YEAR_MISTAKE_HEADLINE,
  THE_2400_YEAR_MISTAKE_INTRO_HTML,
  THE_2400_YEAR_MISTAKE_QUICK_ANSWER_HTML,
  THE_2400_YEAR_MISTAKE_YOUTUBE_ID,
} from "@/lib/the-2400-year-mistake-data";
import { THE_2400_YEAR_MISTAKE_FAQ } from "@/lib/the-2400-year-mistake-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function The2400YearMistakePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="t24"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_2400_YEAR_MISTAKE_HEADLINE}
      introHtml={THE_2400_YEAR_MISTAKE_INTRO_HTML}
      readTime="20 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the 2,400-Year Mistake?"
      quickAnswerHtml={THE_2400_YEAR_MISTAKE_QUICK_ANSWER_HTML}
      youtubeId={THE_2400_YEAR_MISTAKE_YOUTUBE_ID}
      videoTitle="The 2,400-Year Mistake — Neothink Society address"
      bodyHtml={THE_2400_YEAR_MISTAKE_BODY_HTML}
      faqHeadingId="t24-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.strategicBriefingForPresidents}>Strategic briefing for presidents</Link>,{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>,{" "}
          <Link href={WP.breakingTheChainsOnConsciousness}>Breaking the chains on consciousness</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>.
        </>
      }
      faqItems={THE_2400_YEAR_MISTAKE_FAQ}
      relatedCards={[
        {
          title: "Strategic briefing for presidents",
          description: "Unified field and Neovia as structural fix.",
          href: WP.strategicBriefingForPresidents,
          cta: "Read article",
        },
        {
          title: "The greatest mental breakthrough",
          description: "Bicameral mind and consciousness.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
        {
          title: "Breaking the chains on consciousness",
          description: "Plato, force, and Immortalis.",
          href: WP.breakingTheChainsOnConsciousness,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law and Neo-Tech.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
      ]}
    />
  );
}
