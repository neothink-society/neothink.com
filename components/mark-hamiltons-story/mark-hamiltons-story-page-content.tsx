import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { MARK_HAMILTONS_STORY_BODY_HTML } from "@/lib/mark-hamiltons-story-body-html";
import {
  MH_STORY_HEADLINE,
  MH_STORY_INTRO_HTML,
  MH_STORY_QUICK_ANSWER_HTML,
  MH_STORY_YOUTUBE_ID,
} from "@/lib/mark-hamiltons-story-data";
import { MH_STORY_FAQ } from "@/lib/mark-hamiltons-story-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function MarkHamiltonsStoryPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="mhs"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={MH_STORY_HEADLINE}
      introHtml={MH_STORY_INTRO_HTML}
      readTime="20 min read"
      quickKicker="Quick answer"
      quickTitle="What Is Mark Hamilton’s Story?"
      quickAnswerHtml={MH_STORY_QUICK_ANSWER_HTML}
      youtubeId={MH_STORY_YOUTUBE_ID}
      videoTitle="Mark Hamilton’s story: Neothink Society"
      bodyHtml={MARK_HAMILTONS_STORY_BODY_HTML}
      faqHeadingId="mhs-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.valueCreator}>Value creator</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis: Great Experiment</Link>,{" "}
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>, <Link href={WP.markHamilton}>Mark Hamilton</Link>{" "}
          hub.
        </>
      }
      faqItems={MH_STORY_FAQ}
      relatedCards={[
        {
          title: "Immortalis: Great Experiment",
          description: "Prime Law Capitalism speech.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Neovia speech",
          description: "Biotech freedom city blueprint.",
          href: WP.theCityThatCuresDiseaseNeovia,
          cta: "Read article",
        },
        {
          title: "Reprogram your mind",
          description: "Neothink Awakening.",
          href: WP.reprogramMindToBeRich,
          cta: "Read article",
        },
        {
          title: "Immortalis hub",
          description: "Institute vision page.",
          href: WP.immortalis,
          cta: "Immortalis",
        },
      ]}
    />
  );
}
