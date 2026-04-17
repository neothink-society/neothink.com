import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { DECODING_SUPER_PUZZLE_BODY_HTML } from "@/lib/decoding-super-puzzle-body-html";
import {
  DECODING_SUPER_PUZZLE_HEADLINE,
  DECODING_SUPER_PUZZLE_INTRO_HTML,
  DECODING_SUPER_PUZZLE_QUICK_ANSWER_HTML,
  DECODING_SUPER_PUZZLE_YOUTUBE_ID,
} from "@/lib/decoding-super-puzzle-data";
import { DECODING_SUPER_PUZZLE_FAQ } from "@/lib/decoding-super-puzzle-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function DecodingSuperPuzzlePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="dsp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={DECODING_SUPER_PUZZLE_HEADLINE}
      introHtml={DECODING_SUPER_PUZZLE_INTRO_HTML}
      readTime="15 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Secret Formula for Curing Aging?"
      quickAnswerHtml={DECODING_SUPER_PUZZLE_QUICK_ANSWER_HTML}
      youtubeId={DECODING_SUPER_PUZZLE_YOUTUBE_ID}
      videoTitle="Decoding Super Puzzle: The Secret Formula for Curing Aging"
      bodyHtml={DECODING_SUPER_PUZZLE_BODY_HTML}
      faqHeadingId="dsp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.primeLaw}>Prime Law</Link>, <Link href={WP.immortalis}>Immortalis</Link>,{" "}
          <Link href={WP.startingOurOwnCountry}>Starting our own country</Link>,{" "}
          <Link href={WP.liveLonger}>Live longer</Link>.
        </>
      }
      faqItems={DECODING_SUPER_PUZZLE_FAQ}
      relatedCards={[
        {
          title: "How jobs will change",
          description: "Automation, mind work, and super puzzles.",
          href: WP.howJobsWillChange,
          cta: "Read article",
        },
        {
          title: "Starting our own country",
          description: "Two puzzle pieces and the medical mecca.",
          href: WP.startingOurOwnCountry,
          cta: "Read article",
        },
        {
          title: "Live longer",
          description: "RAADfest, three obstacles, Immortalis.",
          href: WP.liveLonger,
          cta: "Read article",
        },
        {
          title: "The grand experiment of our time",
          description: "America, Prime Law, second experiment.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
      ]}
    />
  );
}
