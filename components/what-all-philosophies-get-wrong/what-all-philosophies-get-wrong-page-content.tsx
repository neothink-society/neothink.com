import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { WHAT_ALL_PHILOSOPHIES_GET_WRONG_BODY_HTML } from "@/lib/what-all-philosophies-get-wrong-body-html";
import {
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_HEADLINE,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_INTRO_HTML,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_QUICK_ANSWER_HTML,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID,
} from "@/lib/what-all-philosophies-get-wrong-data";
import { WHAT_ALL_PHILOSOPHIES_GET_WRONG_FAQ } from "@/lib/what-all-philosophies-get-wrong-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function WhatAllPhilosophiesGetWrongPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="wap"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={WHAT_ALL_PHILOSOPHIES_GET_WRONG_HEADLINE}
      introHtml={WHAT_ALL_PHILOSOPHIES_GET_WRONG_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What do all philosophies get wrong?"
      quickAnswerHtml={WHAT_ALL_PHILOSOPHIES_GET_WRONG_QUICK_ANSWER_HTML}
      youtubeId={WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID}
      videoTitle="What All Philosophies Get Wrong — Neothink Society address"
      bodyHtml={WHAT_ALL_PHILOSOPHIES_GET_WRONG_BODY_HTML}
      faqHeadingId="wap-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>The grand experiment of our time</Link>.
        </>
      }
      faqItems={WHAT_ALL_PHILOSOPHIES_GET_WRONG_FAQ}
      relatedCards={[
        {
          title: "The greatest mental breakthrough",
          description: "Finite negatives, infinite positives, and leverage from removal.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Neo-Tech, Neothink, Prime Law, and Immortalis.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "Integrated thinking",
          description: "Wider integrations and seeing what specialists miss.",
          href: WP.integratedThinking,
          cta: "Read article",
        },
        {
          title: "Breaking the chains on consciousness",
          description: "Plato, force, survival pressures, and transcendent drive.",
          href: WP.breakingTheChainsOnConsciousness,
          cta: "Read article",
        },
      ]}
    />
  );
}
