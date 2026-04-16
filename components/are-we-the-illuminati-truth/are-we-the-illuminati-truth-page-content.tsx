import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { ARE_WE_THE_ILLUMINATI_TRUTH_BODY_HTML } from "@/lib/are-we-the-illuminati-truth-body-html";
import {
  AWTI_HEADLINE,
  AWTI_IMAGE,
  AWTI_INTRO_PARAS,
  AWTI_MIN_READ,
  AWTI_QUICK_ANSWER_KICKER,
  AWTI_QUICK_ANSWER_LEAD_STRONG,
  AWTI_QUICK_ANSWER_REST,
  AWTI_QUICK_ANSWER_TITLE,
  AWTI_YOUTUBE_ID,
} from "@/lib/are-we-the-illuminati-truth-data";
import { AWTI_FAQ } from "@/lib/are-we-the-illuminati-truth-faq";

export function AreWeTheIlluminatiTruthPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="awti"
      headline={AWTI_HEADLINE}
      introParas={AWTI_INTRO_PARAS}
      image={AWTI_IMAGE}
      minReadLabel={AWTI_MIN_READ}
      youtubeId={AWTI_YOUTUBE_ID}
      videoTitle={`${AWTI_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: AWTI_QUICK_ANSWER_KICKER,
        title: AWTI_QUICK_ANSWER_TITLE,
        leadStrong: AWTI_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {AWTI_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={ARE_WE_THE_ILLUMINATI_TRUTH_BODY_HTML}
      faq={AWTI_FAQ}
      related={DEFAULT_RELATED}
    />
  );
}

const DEFAULT_RELATED = [
  {
    title: "Neothink Awakening",
    description: "All articles in the series.",
    href: "/category/neothink-awakening",
  },
  {
    title: "Freedom & true wealth",
    description: "Awakening companion on Prime Law, Immortalis.",
    href: "/freedom-key-to-unlocking-true-wealth",
  },
  {
    title: "Reprogram your mind",
    description: "Awakening companion on Neothink thinking.",
    href: "/reprogram-mind-to-be-rich",
  },
  {
    title: "Neothink Mentality",
    description: "Structured public course.",
    href: "/neothink-mentality",
  },
] as const;
