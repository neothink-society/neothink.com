import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { STRATEGIC_BRIEFING_FOR_PRESIDENTS_BODY_HTML } from "@/lib/strategic-briefing-for-presidents-body-html";
import {
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_HEADLINE,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_INTRO_HTML,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_QUICK_ANSWER_HTML,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID,
} from "@/lib/strategic-briefing-for-presidents-data";
import { STRATEGIC_BRIEFING_FOR_PRESIDENTS_FAQ } from "@/lib/strategic-briefing-for-presidents-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function StrategicBriefingForPresidentsPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="sbfp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={STRATEGIC_BRIEFING_FOR_PRESIDENTS_HEADLINE}
      introHtml={STRATEGIC_BRIEFING_FOR_PRESIDENTS_INTRO_HTML}
      readTime="20 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Unified Field of Human Consciousness?"
      quickAnswerHtml={STRATEGIC_BRIEFING_FOR_PRESIDENTS_QUICK_ANSWER_HTML}
      youtubeId={STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID}
      videoTitle="A Strategic Briefing for Presidents — Neothink Society address"
      bodyHtml={STRATEGIC_BRIEFING_FOR_PRESIDENTS_BODY_HTML}
      faqHeadingId="sbfp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theTwentyFourHundredYearMistake}>The 2,400-year mistake</Link>,{" "}
          <Link href={WP.theCityThatCuresDiseaseNeovia}>Neovia</Link>,{" "}
          <Link href={WP.whatAllPhilosophiesGetWrong}>What all philosophies get wrong</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>.
        </>
      }
      faqItems={STRATEGIC_BRIEFING_FOR_PRESIDENTS_FAQ}
      relatedCards={[
        {
          title: "The 2,400-year mistake",
          description: "Plato, Aristotle, and the unified field.",
          href: WP.theTwentyFourHundredYearMistake,
          cta: "Read article",
        },
        {
          title: "Neovia",
          description: "The biotech freedom city.",
          href: WP.theCityThatCuresDiseaseNeovia,
          cta: "Read article",
        },
        {
          title: "What all philosophies get wrong",
          description: "Subtractive power and lineage.",
          href: WP.whatAllPhilosophiesGetWrong,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law operating system.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
      ]}
    />
  );
}
