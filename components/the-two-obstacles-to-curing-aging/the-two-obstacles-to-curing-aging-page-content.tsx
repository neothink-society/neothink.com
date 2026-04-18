import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_TWO_OBSTACLES_TO_CURING_AGING_BODY_HTML } from "@/lib/the-two-obstacles-to-curing-aging-body-html";
import {
  THE_TWO_OBSTACLES_TO_CURING_AGING_HEADLINE,
  THE_TWO_OBSTACLES_TO_CURING_AGING_INTRO_HTML,
  THE_TWO_OBSTACLES_TO_CURING_AGING_QUICK_ANSWER_HTML,
  THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID,
} from "@/lib/the-two-obstacles-to-curing-aging-data";
import { THE_TWO_OBSTACLES_TO_CURING_AGING_FAQ } from "@/lib/the-two-obstacles-to-curing-aging-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheTwoObstaclesToCuringAgingPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="tto"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_TWO_OBSTACLES_TO_CURING_AGING_HEADLINE}
      introHtml={THE_TWO_OBSTACLES_TO_CURING_AGING_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Are the Two Obstacles to Curing Aging?"
      quickAnswerHtml={THE_TWO_OBSTACLES_TO_CURING_AGING_QUICK_ANSWER_HTML}
      youtubeId={THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID}
      videoTitle="The Two Obstacles to Curing Aging: Neothink Society address"
      bodyHtml={THE_TWO_OBSTACLES_TO_CURING_AGING_BODY_HTML}
      faqHeadingId="tto-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.liveLonger}>Live longer</Link>,{" "}
          <Link href={WP.decodingSuperPuzzle}>Decoding Super Puzzle</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis</Link>.
        </>
      }
      faqItems={THE_TWO_OBSTACLES_TO_CURING_AGING_FAQ}
      relatedCards={[
        {
          title: "Live longer",
          description: "RAADfest, obstacles, and the mortal vs. immortal mentality.",
          href: WP.liveLonger,
          cta: "Read article",
        },
        {
          title: "Decoding Super Puzzle",
          description: "The aging formula and billionaire strategy.",
          href: WP.decodingSuperPuzzle,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Neo-Tech, Neothink, and the Prime Law.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "Immortalis: the great experiment",
          description: "Vision, citizenship, and the movement going public.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
      ]}
    />
  );
}
