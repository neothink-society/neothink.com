"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_UNBREAKABLE_EQUATION_BODY_HTML } from "@/lib/the-unbreakable-equation-body-html";
import {
  THE_UNBREAKABLE_EQUATION_HEADLINE,
  THE_UNBREAKABLE_EQUATION_INTRO_HTML,
  THE_UNBREAKABLE_EQUATION_QUICK_ANSWER_HTML,
  THE_UNBREAKABLE_EQUATION_YOUTUBE_ID,
} from "@/lib/the-unbreakable-equation-data";
import { THE_UNBREAKABLE_EQUATION_FAQ } from "@/lib/the-unbreakable-equation-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheUnbreakableEquationPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="ueq"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_UNBREAKABLE_EQUATION_HEADLINE}
      introHtml={THE_UNBREAKABLE_EQUATION_INTRO_HTML}
      readTime="15 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Unbreakable Equation?"
      quickAnswerHtml={THE_UNBREAKABLE_EQUATION_QUICK_ANSWER_HTML}
      youtubeId={THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}
      videoTitle="The Unbreakable Equation — Neothink Society address"
      bodyHtml={THE_UNBREAKABLE_EQUATION_BODY_HTML}
      faqHeadingId="ueq-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.whatAllPhilosophiesGetWrong}>What all philosophies get wrong</Link>,{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>The grand experiment of our time</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis: Great Experiment</Link>.
        </>
      }
      faqItems={THE_UNBREAKABLE_EQUATION_FAQ}
      relatedCards={[
        {
          title: "What all philosophies get wrong",
          description: "Why traditional philosophy fails — subtractive vs. additive progress.",
          href: WP.whatAllPhilosophiesGetWrong,
          cta: "Read article",
        },
        {
          title: "The greatest mental breakthrough",
          description: "Removing the negative outperforms adding the positive.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
        {
          title: "The grand experiment of our time",
          description: "America, Immortalis, and codifying libertarian thought.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Immortalis: Great Experiment",
          description: "Prime Law capitalism and the society-scale vision.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
      ]}
    />
  );
}
