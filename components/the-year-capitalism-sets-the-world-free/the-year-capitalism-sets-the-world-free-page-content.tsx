import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_BODY_HTML } from "@/lib/the-year-capitalism-sets-the-world-free-body-html";
import {
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_HEADLINE,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_INTRO_HTML,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_QUICK_ANSWER_HTML,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID,
} from "@/lib/the-year-capitalism-sets-the-world-free-data";
import { THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_FAQ } from "@/lib/the-year-capitalism-sets-the-world-free-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheYearCapitalismSetsTheWorldFreePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="tyc"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_HEADLINE}
      introHtml={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_INTRO_HTML}
      readTime="16 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Pure Capitalism?"
      quickAnswerHtml={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_QUICK_ANSWER_HTML}
      youtubeId={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}
      videoTitle="The Year Capitalism Sets the World Free: Neothink Society address"
      bodyHtml={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_BODY_HTML}
      faqHeadingId="tyc-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theJobRevolution}>The job revolution</Link>,{" "}
          <Link href={WP.libertariansNextBigPossibility}>Libertarians’ next big possibility</Link>,{" "}
          <Link href={WP.howEveryIndividualCanBeWealthy}>How every individual can be wealthy</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>.
        </>
      }
      faqItems={THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_FAQ}
      relatedCards={[
        {
          title: "The job revolution",
          description: "Pure capitalism and jobs of the mind.",
          href: WP.theJobRevolution,
          cta: "Read article",
        },
        {
          title: "Libertarians’ next big possibility",
          description: "Prime Law capitalism.",
          href: WP.libertariansNextBigPossibility,
          cta: "Read article",
        },
        {
          title: "How every individual can be wealthy",
          description: "Removing the ruling class.",
          href: WP.howEveryIndividualCanBeWealthy,
          cta: "Read article",
        },
        {
          title: "The unbreakable equation",
          description: "Prime Law protection.",
          href: WP.theUnbreakableEquation,
          cta: "Read article",
        },
      ]}
    />
  );
}
