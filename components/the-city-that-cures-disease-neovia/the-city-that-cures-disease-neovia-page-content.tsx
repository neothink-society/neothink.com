"use client";

import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { NEOVIA_SPEECH_BODY_HTML } from "@/lib/the-city-that-cures-disease-neovia-body-html";
import {
  NEOVIA_SPEECH_HEADLINE,
  NEOVIA_SPEECH_INTRO_HTML,
  NEOVIA_SPEECH_QUICK_ANSWER_HTML,
  NEOVIA_SPEECH_YOUTUBE_ID,
} from "@/lib/the-city-that-cures-disease-neovia-data";
import { NEOVIA_SPEECH_FAQ } from "@/lib/the-city-that-cures-disease-neovia-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = "https://neothink.com/category/neothink-philosophy/";

export function TheCityThatCuresDiseaseNeoviaPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="nvsp"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={NEOVIA_SPEECH_HEADLINE}
      introHtml={NEOVIA_SPEECH_INTRO_HTML}
      readTime="14 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Neovia?"
      quickAnswerHtml={NEOVIA_SPEECH_QUICK_ANSWER_HTML}
      youtubeId={NEOVIA_SPEECH_YOUTUBE_ID}
      videoTitle="The City That Cures Disease: Neovia"
      bodyHtml={NEOVIA_SPEECH_BODY_HTML}
      faqHeadingId="nvsp-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.neovia}>Neovia</Link> hub, <Link href={WP.immortalis}>Immortalis</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Great Experiment</Link>,{" "}
          <Link href={WP.projectLife}>Project Life</Link>, <Link href={WP.primeLaw}>Prime Law</Link>.
        </>
      }
      faqItems={NEOVIA_SPEECH_FAQ}
      relatedCards={[
        {
          title: "Immortalis: Great Experiment",
          description: "Prime Law Capitalism speech.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Neovia hub",
          description: "Institute vision page.",
          href: WP.neovia,
          cta: "Neovia",
        },
        {
          title: "Mark Hamilton’s story",
          description: "Philosophy series.",
          href: WP.markHamiltonsStory,
          cta: "Read article",
        },
        {
          title: "Project Life",
          description: "Longevity program family.",
          href: WP.projectLife,
          cta: "Project Life",
        },
      ]}
    />
  );
}
