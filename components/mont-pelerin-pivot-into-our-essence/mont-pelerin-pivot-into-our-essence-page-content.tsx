import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { MONT_PELERIN_PIVOT_INTO_OUR_ESSENCE_BODY_HTML } from "@/lib/mont-pelerin-pivot-into-our-essence-body-html";
import {
  MONT_PELERIN_PIVOT_HEADLINE,
  MONT_PELERIN_PIVOT_INTRO_HTML,
  MONT_PELERIN_PIVOT_QUICK_ANSWER_HTML,
  MONT_PELERIN_PIVOT_YOUTUBE_ID,
} from "@/lib/mont-pelerin-pivot-into-our-essence-data";
import { MONT_PELERIN_PIVOT_FAQ } from "@/lib/mont-pelerin-pivot-into-our-essence-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function MontPelerinPivotIntoOurEssencePageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="mpp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={MONT_PELERIN_PIVOT_HEADLINE}
      introHtml={MONT_PELERIN_PIVOT_INTRO_HTML}
      readTime="16 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Mont Pelerin Pivot?"
      quickAnswerHtml={MONT_PELERIN_PIVOT_QUICK_ANSWER_HTML}
      youtubeId={MONT_PELERIN_PIVOT_YOUTUBE_ID}
      videoTitle="The Mont Pelerin Pivot — citizens meeting"
      bodyHtml={MONT_PELERIN_PIVOT_INTO_OUR_ESSENCE_BODY_HTML}
      faqHeadingId="mpp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.theGrandExperimentOfOurTime}>Grand experiment of our time</Link>,{" "}
          <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.libertariansNextBigPossibility}>Libertarians’ next big possibility</Link>,{" "}
          <Link href={WP.aKnightInShiningArmorImmortalis}>Knight in shining armor</Link>.
        </>
      }
      faqItems={MONT_PELERIN_PIVOT_FAQ}
      relatedCards={[
        {
          title: "The grand experiment of our time",
          description: "Second founding: Prime Law and libertarian thought.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Physical territory and the three-track strategy.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
        {
          title: "Libertarians’ next big possibility",
          description: "Prime Law capitalism and governance without government.",
          href: WP.libertariansNextBigPossibility,
          cta: "Read article",
        },
        {
          title: "A knight in shining armor",
          description: "How the pivoted message lands in the real world.",
          href: WP.aKnightInShiningArmorImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
