import Link from "next/link";

import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { HOW_TO_RAISE_A_GENIUS_BODY_HTML } from "@/lib/how-to-raise-a-genius-body-html";
import {
  HTRG_HEADLINE,
  HTRG_IMAGE,
  HTRG_INTRO_PARAS,
  HTRG_MIN_READ,
  HTRG_QUICK_ANSWER_KICKER,
  HTRG_QUICK_ANSWER_LEAD_STRONG,
  HTRG_QUICK_ANSWER_TITLE,
  HTRG_YOUTUBE_ID,
} from "@/lib/how-to-raise-a-genius-data";
import { HTRG_FAQ } from "@/lib/how-to-raise-a-genius-faq";
import { WP } from "@/lib/wordpress-routes";

export function HowToRaiseAGeniusPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="htrg"
      headline={HTRG_HEADLINE}
      introParas={HTRG_INTRO_PARAS}
      image={HTRG_IMAGE}
      minReadLabel={HTRG_MIN_READ}
      youtubeId={HTRG_YOUTUBE_ID}
      videoTitle="How to raise a genius — Mark Hamilton"
      quickAnswer={{
        kicker: HTRG_QUICK_ANSWER_KICKER,
        title: HTRG_QUICK_ANSWER_TITLE,
        leadStrong: HTRG_QUICK_ANSWER_LEAD_STRONG,
        rest: (
          <>
            {" "}
            This forces them out of the automatic see-react-tell pattern (the &ldquo;following mode&rdquo;) and into
            their inner mind space where introspection, subjective thinking, and self-leadership develop. This is the
            foundational difference between children who become geniuses and those who stay stuck in reactive patterns
            their entire lives.
          </>
        ),
      }}
      bodyHtml={HOW_TO_RAISE_A_GENIUS_BODY_HTML}
      faq={HTRG_FAQ}
      faqLead={
        <>
          Related: <Link href={WP.selfLeaderSecret}>Self-leader secret</Link>,{" "}
          <Link href={WP.reprogramMindToBeRich}>Reprogram your mind</Link>,{" "}
          <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>.
        </>
      }
      related={[
        {
          title: "Self-leader secret",
          description: "Neothink Concepts companion on self-leadership.",
          href: WP.selfLeaderSecret,
        },
        {
          title: "Reprogram your mind",
          description: "Awakening article on Neothink thinking.",
          href: WP.reprogramMindToBeRich,
        },
        {
          title: "Integrated thinking",
          description: "See what specialists miss.",
          href: WP.integratedThinking,
        },
        {
          title: "Neothink Mentality",
          description: "Structured public course.",
          href: WP.neothinkMentality,
        },
      ]}
    />
  );
}
