import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_JOB_REVOLUTION_BODY_HTML } from "@/lib/the-job-revolution-body-html";
import {
  THE_JOB_REVOLUTION_HEADLINE,
  THE_JOB_REVOLUTION_INTRO_HTML,
  THE_JOB_REVOLUTION_QUICK_ANSWER_HTML,
  THE_JOB_REVOLUTION_YOUTUBE_ID,
} from "@/lib/the-job-revolution-data";
import { THE_JOB_REVOLUTION_FAQ } from "@/lib/the-job-revolution-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheJobRevolutionPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="tjr"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_JOB_REVOLUTION_HEADLINE}
      introHtml={THE_JOB_REVOLUTION_INTRO_HTML}
      readTime="18 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Job Revolution?"
      quickAnswerHtml={THE_JOB_REVOLUTION_QUICK_ANSWER_HTML}
      youtubeId={THE_JOB_REVOLUTION_YOUTUBE_ID}
      videoTitle="The Job Revolution — Neothink Society address"
      bodyHtml={THE_JOB_REVOLUTION_BODY_HTML}
      faqHeadingId="tjr-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theYearCapitalismSetsTheWorldFree}>The year capitalism sets the world free</Link>,{" "}
          <Link href={WP.howJobsWillChange}>How jobs will change</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>,{" "}
          <Link href={WP.howNeothinkBringsYouWorldOfProsperity}>How Neothink brings prosperity</Link>.
        </>
      }
      faqItems={THE_JOB_REVOLUTION_FAQ}
      relatedCards={[
        {
          title: "The year capitalism sets the world free",
          description: "Pure capitalism, tithe, and universal wealth.",
          href: WP.theYearCapitalismSetsTheWorldFree,
          cta: "Read article",
        },
        {
          title: "How jobs will change",
          description: "Labor vs. mind, automation, super puzzles.",
          href: WP.howJobsWillChange,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law and removing initiatory force.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
        {
          title: "How Neothink brings you a world of prosperity",
          description: "Following mode and mass prosperity.",
          href: WP.howNeothinkBringsYouWorldOfProsperity,
          cta: "Read article",
        },
      ]}
    />
  );
}
