import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { CREATING_THE_DEMAND_TO_LIVE_FOREVER_BODY_HTML } from "@/lib/creating-the-demand-to-live-forever-body-html";
import {
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_HEADLINE,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_INTRO_HTML,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_QUICK_ANSWER_HTML,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID,
} from "@/lib/creating-the-demand-to-live-forever-data";
import { CREATING_THE_DEMAND_TO_LIVE_FOREVER_FAQ } from "@/lib/creating-the-demand-to-live-forever-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function CreatingTheDemandToLiveForeverPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="ctd"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={CREATING_THE_DEMAND_TO_LIVE_FOREVER_HEADLINE}
      introHtml={CREATING_THE_DEMAND_TO_LIVE_FOREVER_INTRO_HTML}
      readTime="14 min read"
      quickKicker="Quick answer"
      quickTitle="Why Don’t People Want to Live Forever?"
      quickAnswerHtml={CREATING_THE_DEMAND_TO_LIVE_FOREVER_QUICK_ANSWER_HTML}
      youtubeId={CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID}
      videoTitle="Creating the Demand to Live Forever — Neothink Society address"
      bodyHtml={CREATING_THE_DEMAND_TO_LIVE_FOREVER_BODY_HTML}
      faqHeadingId="ctd-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theTwoObstaclesToCuringAging}>The two obstacles to curing aging</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.illusionPollution}>Illusion pollution</Link>,{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>.
        </>
      }
      faqItems={CREATING_THE_DEMAND_TO_LIVE_FOREVER_FAQ}
      relatedCards={[
        {
          title: "The two obstacles to curing aging",
          description: "Stagnation, regulation, and the longevity formula.",
          href: WP.theTwoObstaclesToCuringAging,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Neo-Tech, Neothink, Immortalis.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "Illusion pollution",
          description: "Ruling-class cult and conditioning.",
          href: WP.illusionPollution,
          cta: "Read article",
        },
        {
          title: "The greatest mental breakthrough",
          description: "Thinking levels and removing the negative.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
      ]}
    />
  );
}
