import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { KNIGHT_IMMORTALIS_BODY_HTML } from "@/lib/a-knight-in-shining-armor-immortalis-body-html";
import {
  KNIGHT_IMMORTALIS_HEADLINE,
  KNIGHT_IMMORTALIS_INTRO_HTML,
  KNIGHT_IMMORTALIS_QUICK_ANSWER_HTML,
  KNIGHT_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/a-knight-in-shining-armor-immortalis-data";
import { KNIGHT_IMMORTALIS_FAQ } from "@/lib/a-knight-in-shining-armor-immortalis-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function AKnightInShiningArmorImmortalisPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="kni"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={KNIGHT_IMMORTALIS_HEADLINE}
      introHtml={KNIGHT_IMMORTALIS_INTRO_HTML}
      readTime="14 min read"
      quickKicker="Quick answer"
      quickTitle="Why Is Immortalis a Knight in Shining Armor?"
      quickAnswerHtml={KNIGHT_IMMORTALIS_QUICK_ANSWER_HTML}
      youtubeId={KNIGHT_IMMORTALIS_YOUTUBE_ID}
      videoTitle="Immortalis: a knight in shining armor: citizens meeting"
      bodyHtml={KNIGHT_IMMORTALIS_BODY_HTML}
      faqHeadingId="kni-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.immortalis}>Immortalis</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Great Experiment speech</Link>,{" "}
          <Link href={WP.theCityThatCuresDiseaseNeovia}>Neovia speech</Link>,{" "}
          <Link href={WP.projectLife}>Project Life</Link>, <Link href={WP.neovia}>Neovia hub</Link>.
        </>
      }
      faqItems={KNIGHT_IMMORTALIS_FAQ}
      relatedCards={[
        {
          title: "Immortalis: Great Experiment",
          description: "Prime Law Capitalism keynote.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Neovia speech",
          description: "Biotech freedom city.",
          href: WP.theCityThatCuresDiseaseNeovia,
          cta: "Read article",
        },
        {
          title: "Missing key to prosperity",
          description: "Following mode and leadership.",
          href: WP.theMissingKeyToUniversalProsperity,
          cta: "Read article",
        },
        {
          title: "Immortalis hub",
          description: "Institute overview.",
          href: WP.immortalis,
          cta: "Immortalis",
        },
      ]}
    />
  );
}
