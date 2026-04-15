"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { LIBERTARIANS_NEXT_BIG_POSSIBILITY_BODY_HTML } from "@/lib/libertarians-next-big-possibility-body-html";
import {
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_HEADLINE,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_INTRO_HTML,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_QUICK_ANSWER_HTML,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID,
} from "@/lib/libertarians-next-big-possibility-data";
import { LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ } from "@/lib/libertarians-next-big-possibility-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = "https://neothink.com/category/neothink-philosophy/";

export function LibertariansNextBigPossibilityPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="lnb"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={LIBERTARIANS_NEXT_BIG_POSSIBILITY_HEADLINE}
      introHtml={LIBERTARIANS_NEXT_BIG_POSSIBILITY_INTRO_HTML}
      readTime="10 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Libertarians’ Next Big Possibility?"
      quickAnswerHtml={LIBERTARIANS_NEXT_BIG_POSSIBILITY_QUICK_ANSWER_HTML}
      youtubeId={LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}
      videoTitle="Libertarians’ Next Big Possibility — Neothink Society address"
      bodyHtml={LIBERTARIANS_NEXT_BIG_POSSIBILITY_BODY_HTML}
      faqHeadingId="lnb-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.landBasedImmortalis}>Land-based Immortalis</Link>,{" "}
          <Link href={WP.theGrandExperimentOfOurTime}>Grand experiment of our time</Link>,{" "}
          <Link href={WP.primeLaw}>Prime Law</Link>, <Link href={WP.immortalis}>Immortalis</Link>.
        </>
      }
      faqItems={LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ}
      relatedCards={[
        {
          title: "Land-based Immortalis",
          description: "Three land tracks and the biomedical freedom zone.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
        {
          title: "The grand experiment of our time",
          description: "Founding parallels and the Prime Law constitution.",
          href: WP.theGrandExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "The Mont Pelerin pivot",
          description: "Messaging, essence, and the medical mecca.",
          href: WP.montPelerinPivotIntoOurEssence,
          cta: "Read article",
        },
        {
          title: "A knight in shining armor",
          description: "Letters of intent and the universal message.",
          href: WP.aKnightInShiningArmorImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
