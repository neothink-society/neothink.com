"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_BODY_HTML } from "@/lib/the-beautiful-vs-the-ugly-in-our-world-3-body-html";
import {
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_HEADLINE,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_INTRO_HTML,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_QUICK_ANSWER_HTML,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID,
} from "@/lib/the-beautiful-vs-the-ugly-in-our-world-3-data";
import { THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_FAQ } from "@/lib/the-beautiful-vs-the-ugly-in-our-world-3-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheBeautifulVsTheUglyInOurWorld3PageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="bvuw"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_HEADLINE}
      introHtml={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_INTRO_HTML}
      readTime="10 min read"
      quickKicker="Quick answer"
      quickTitle="What Divides the Beautiful from the Ugly?"
      quickAnswerHtml={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_QUICK_ANSWER_HTML}
      youtubeId={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID}
      videoTitle="The Beautiful vs. the Ugly in Our World"
      bodyHtml={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_BODY_HTML}
      faqHeadingId="bvuw-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.howEveryIndividualCanBeWealthy}>How every individual can be wealthy</Link>,{" "}
          <Link href={WP.theCultYouNeverKnewExisted}>The cult you never knew existed</Link>,{" "}
          <Link href={WP.theMissingKeyToUniversalProsperity}>The missing key to universal prosperity</Link>,{" "}
          <Link href={WP.primeLaw}>Prime Law</Link>.
        </>
      }
      faqItems={THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_FAQ}
      relatedCards={[
        {
          title: "A new country: Immortalis",
          description: "Protection-only government and no ruling class.",
          href: WP.aNewCountryTheGreatExperimentCalledImmortalis,
          cta: "Read article",
        },
        {
          title: "How jobs will change",
          description: "Automation and jobs of the mind.",
          href: WP.howJobsWillChange,
          cta: "Read article",
        },
        {
          title: "The cult you never knew existed",
          description: "Ruling class as cult.",
          href: WP.theCultYouNeverKnewExisted,
          cta: "Read article",
        },
        {
          title: "Mark Hamilton's story",
          description: "Breaking the following mode.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
      ]}
    />
  );
}
