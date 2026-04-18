import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { ILLUSION_POLLUTION_BODY_HTML } from "@/lib/illusion-pollution-body-html";
import {
  ILLUSION_POLLUTION_HEADLINE,
  ILLUSION_POLLUTION_INTRO_HTML,
  ILLUSION_POLLUTION_QUICK_ANSWER_HTML,
  ILLUSION_POLLUTION_YOUTUBE_ID,
} from "@/lib/illusion-pollution-data";
import { ILLUSION_POLLUTION_FAQ } from "@/lib/illusion-pollution-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function IllusionPollutionPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="ilp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={ILLUSION_POLLUTION_HEADLINE}
      introHtml={ILLUSION_POLLUTION_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Illusion Pollution?"
      quickAnswerHtml={ILLUSION_POLLUTION_QUICK_ANSWER_HTML}
      youtubeId={ILLUSION_POLLUTION_YOUTUBE_ID}
      videoTitle="Illusion Pollution: Neothink Society address"
      bodyHtml={ILLUSION_POLLUTION_BODY_HTML}
      faqHeadingId="ilp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theCultYouNeverKnewExisted}>The cult you never knew existed</Link>,{" "}
          <Link href={WP.creatingTheDemandToLiveForever}>Creating the demand to live forever</Link>,{" "}
          <Link href={WP.howEveryIndividualCanBeWealthy}>How every individual can be wealthy</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>.
        </>
      }
      faqItems={ILLUSION_POLLUTION_FAQ}
      relatedCards={[
        {
          title: "The cult you never knew existed",
          description: "Ruling class, Immortalis, and control.",
          href: WP.theCultYouNeverKnewExisted,
          cta: "Read article",
        },
        {
          title: "Creating the demand to live forever",
          description: "Stagnation, Neothink, and longevity demand.",
          href: WP.creatingTheDemandToLiveForever,
          cta: "Read article",
        },
        {
          title: "How every individual can be wealthy",
          description: "Network state and removing extractors.",
          href: WP.howEveryIndividualCanBeWealthy,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law and seeing through illusions.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
      ]}
    />
  );
}
