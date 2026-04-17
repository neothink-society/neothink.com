import Link from "next/link";

import { NeothinkPhilosophyLongformPageContent } from "@/components/neothink-philosophy/neothink-philosophy-longform-page-content";
import { SELF_LEADER_SECRET_BODY_HTML } from "@/lib/self-leader-secret-body-html";
import {
  SELF_LEADER_SECRET_HEADLINE,
  SELF_LEADER_SECRET_INTRO_HTML,
  SELF_LEADER_SECRET_QUICK_ANSWER_HTML,
} from "@/lib/self-leader-secret-data";
import { SELF_LEADER_SECRET_FAQ } from "@/lib/self-leader-secret-faq";
import { WP } from "@/lib/wordpress-routes";

const SERIES = WP.neothinkConceptsCategory;

export function SelfLeaderSecretPageContent() {
  return (
    <NeothinkPhilosophyLongformPageContent
      idPrefix="sls"
      seriesLabel="Neothink Concepts"
      seriesHref={SERIES}
      heading={SELF_LEADER_SECRET_HEADLINE}
      introHtml={SELF_LEADER_SECRET_INTRO_HTML}
      readTime="12 min read"
      quickKicker="Quick answer"
      quickTitle="What Is the Self-Leader Secret?"
      quickAnswerHtml={SELF_LEADER_SECRET_QUICK_ANSWER_HTML}
      bodyHtml={SELF_LEADER_SECRET_BODY_HTML}
      faqHeadingId="sls-faq-heading"
      faqLead={
        <>
          Series: <Link href={WP.fridayNightEssence}>Friday-Night Essence</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.valueCreator}>Value creator</Link>. Related:{" "}
          <Link href={WP.markHamiltonsStory}>Mark Hamilton’s story</Link>,{" "}
          <Link href={WP.theMissingKeyToUniversalProsperity}>Missing key to prosperity</Link>.
        </>
      }
      faqItems={SELF_LEADER_SECRET_FAQ}
      relatedCards={[
        {
          title: "Friday-Night Essence",
          description: "Deepest motivational root.",
          href: WP.fridayNightEssence,
          cta: "Read article",
        },
        {
          title: "Integrated thinking",
          description: "Connect knowledge across domains.",
          href: WP.integratedThinking,
          cta: "Read article",
        },
        {
          title: "Value creator",
          description: "Build what did not exist.",
          href: WP.valueCreator,
          cta: "Read article",
        },
        {
          title: "Greatest mental breakthrough",
          description: "Remove the negative.",
          href: WP.theGreatestMentalBreakthrough,
          cta: "Read article",
        },
      ]}
    />
  );
}
