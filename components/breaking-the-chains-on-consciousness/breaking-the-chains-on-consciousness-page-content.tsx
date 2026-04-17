import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_BODY_HTML } from "@/lib/breaking-the-chains-on-consciousness-body-html";
import {
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_HEADLINE,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_INTRO_HTML,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_QUICK_ANSWER_HTML,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID,
} from "@/lib/breaking-the-chains-on-consciousness-data";
import { BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_FAQ } from "@/lib/breaking-the-chains-on-consciousness-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function BreakingTheChainsOnConsciousnessPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="btco"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_HEADLINE}
      introHtml={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_INTRO_HTML}
      readTime="15 min read"
      quickKicker="Quick answer"
      quickTitle="What Are the Chains on Consciousness?"
      quickAnswerHtml={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_QUICK_ANSWER_HTML}
      youtubeId={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}
      videoTitle="Breaking The Chains On Consciousness — Neothink Society address"
      bodyHtml={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_BODY_HTML}
      faqHeadingId="btco-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>,{" "}
          <Link href={WP.whatAllPhilosophiesGetWrong}>What all philosophies get wrong</Link>,{" "}
          <Link href={WP.theCityThatCuresDiseaseNeovia}>Neovia</Link>.
        </>
      }
      faqItems={BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_FAQ}
      relatedCards={[
        {
          title: "The unbreakable equation",
          description: "Neo-Tech, Neothink, Prime Law, and the Nuclear Decision Threshold.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "What all philosophies get wrong",
          description: "Subtractive power from Rand through Hamilton.",
          href: WP.whatAllPhilosophiesGetWrong,
          cta: "Read article",
        },
        {
          title: "The greatest mental breakthrough",
          description: "Bicameral mind, following mode, and removing the negative.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
        {
          title: "Neovia",
          description: "The biotech freedom city and removing the health chain.",
          href: WP.theCityThatCuresDiseaseNeovia,
          cta: "Read article",
        },
      ]}
    />
  );
}
