import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_BODY_HTML } from "@/lib/how-every-individual-can-be-wealthy-body-html";
import {
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_HEADLINE,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_INTRO_HTML,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_QUICK_ANSWER_HTML,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID,
} from "@/lib/how-every-individual-can-be-wealthy-data";
import { HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_FAQ } from "@/lib/how-every-individual-can-be-wealthy-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function HowEveryIndividualCanBeWealthyPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="heiw"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_HEADLINE}
      introHtml={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_INTRO_HTML}
      readTime="6 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Only Way Every Individual Can Be Wealthy?"
      quickAnswerHtml={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_QUICK_ANSWER_HTML}
      youtubeId={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID}
      videoTitle="How Every Individual Can Be Wealthy: Neothink Society address"
      bodyHtml={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_BODY_HTML}
      faqHeadingId="heiw-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theCultYouNeverKnewExisted}>The cult you never knew existed</Link>,{" "}
          <Link href={WP.howNeothinkBringsYouWorldOfProsperity}>How Neothink brings prosperity</Link>,{" "}
          <Link href={WP.theGreatestMentalBreakthrough}>The greatest mental breakthrough</Link>,{" "}
          <Link href={WP.theMissingKeyToUniversalProsperity}>The missing key to universal prosperity</Link>.
        </>
      }
      faqItems={HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_FAQ}
      relatedCards={[
        {
          title: "The cult you never knew existed",
          description: "Ruling class, cult dynamics, and Immortalis.",
          href: WP.theCultYouNeverKnewExisted,
          cta: "Read article",
        },
        {
          title: "How Neothink brings prosperity",
          description: "Going public and civilization-scale change.",
          href: WP.howNeothinkBringsYouWorldOfProsperity,
          cta: "Read article",
        },
        {
          title: "The missing key to universal prosperity",
          description: "Following mode and self-leader mentality.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
        {
          title: "The greatest mental breakthrough",
          description: "Removing the negative vs. adding the positive.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
      ]}
    />
  );
}
