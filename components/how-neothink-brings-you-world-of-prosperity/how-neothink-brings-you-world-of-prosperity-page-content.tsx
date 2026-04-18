import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_BODY_HTML } from "@/lib/how-neothink-brings-you-world-of-prosperity-body-html";
import {
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_HEADLINE,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_INTRO_HTML,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_QUICK_ANSWER_HTML,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID,
} from "@/lib/how-neothink-brings-you-world-of-prosperity-data";
import { HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_FAQ } from "@/lib/how-neothink-brings-you-world-of-prosperity-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function HowNeothinkBringsYouWorldOfProsperityPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="hnwp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_HEADLINE}
      introHtml={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_INTRO_HTML}
      readTime="8 min read"
      quickKicker="Quick answer"
      quickTitle="What is Neothink's solution for universal prosperity?"
      quickAnswerHtml={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_QUICK_ANSWER_HTML}
      youtubeId={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID}
      videoTitle="How Neothink Brings You a World of Prosperity: Neothink Society address"
      bodyHtml={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_BODY_HTML}
      faqHeadingId="hnwp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.howEveryIndividualCanBeWealthy}>How every individual can be wealthy</Link>,{" "}
          <Link href={WP.theCultYouNeverKnewExisted}>The cult you never knew existed</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>The grand experiment of our time</Link>.
        </>
      }
      faqItems={HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_FAQ}
      relatedCards={[
        {
          title: "How every individual can be wealthy",
          description: "Prime Law, following mode, and network state path.",
          href: WP.howEveryIndividualCanBeWealthy,
          cta: "Read article",
        },
        {
          title: "The cult you never knew existed",
          description: "Ruling class, initiatory force, and Immortalis.",
          href: WP.theCultYouNeverKnewExisted,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Neo-Tech, Neothink, Prime Law, and civilization.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "The grand experiment of our time",
          description: "America, Immortalis, and codifying libertarian thought.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
      ]}
    />
  );
}
