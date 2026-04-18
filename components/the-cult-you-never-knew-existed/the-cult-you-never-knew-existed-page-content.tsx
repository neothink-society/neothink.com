import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { THE_CULT_YOU_NEVER_KNEW_EXISTED_BODY_HTML } from "@/lib/the-cult-you-never-knew-existed-body-html";
import {
  THE_CULT_YOU_NEVER_KNEW_EXISTED_HEADLINE,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_INTRO_HTML,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_QUICK_ANSWER_HTML,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID,
} from "@/lib/the-cult-you-never-knew-existed-data";
import { THE_CULT_YOU_NEVER_KNEW_EXISTED_FAQ } from "@/lib/the-cult-you-never-knew-existed-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkPhilosophyCategory;

export function TheCultYouNeverKnewExistedPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="tcy"
      seriesLabel="Neothink Philosophy"
      seriesHref={SERIES}
      heading={THE_CULT_YOU_NEVER_KNEW_EXISTED_HEADLINE}
      introHtml={THE_CULT_YOU_NEVER_KNEW_EXISTED_INTRO_HTML}
      readTime="8 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Cult We All Live In?"
      quickAnswerHtml={THE_CULT_YOU_NEVER_KNEW_EXISTED_QUICK_ANSWER_HTML}
      youtubeId={THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}
      videoTitle="The Cult You Never Knew Existed: Neothink Society address"
      bodyHtml={THE_CULT_YOU_NEVER_KNEW_EXISTED_BODY_HTML}
      faqHeadingId="tcy-faq-heading"
      faqLead={
        <>
          Related: <Link href={WP.howEveryIndividualCanBeWealthy}>How every individual can be wealthy</Link>,{" "}
          <Link href={WP.howNeothinkBringsYouWorldOfProsperity}>How Neothink brings prosperity</Link>,{" "}
          <Link href={WP.immortalisGreatExperimentOfOurTime}>Immortalis: Great Experiment</Link>,{" "}
          <Link href={WP.theUnbreakableEquation}>The unbreakable equation</Link>.
        </>
      }
      faqItems={THE_CULT_YOU_NEVER_KNEW_EXISTED_FAQ}
      relatedCards={[
        {
          title: "How every individual can be wealthy",
          description: "Removing the ruling class and the Prime Law.",
          href: WP.howEveryIndividualCanBeWealthy,
          cta: "Read article",
        },
        {
          title: "How Neothink brings you prosperity",
          description: "Following mode and honest market business.",
          href: WP.howNeothinkBringsYouWorldOfProsperity,
          cta: "Read article",
        },
        {
          title: "Immortalis: Great Experiment",
          description: "Society-scale vision and Prime Law capitalism.",
          href: WP.immortalisGreatExperimentOfOurTime,
          cta: "Read article",
        },
        {
          title: "Land-based Immortalis",
          description: "Digital nation to physical reality.",
          href: WP.landBasedImmortalis,
          cta: "Read article",
        },
      ]}
    />
  );
}
