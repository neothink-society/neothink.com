import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { FINDING_ACHIEVING_YOUR_LIFE_PURPOSE_BODY_HTML } from "@/lib/finding-achieving-your-life-purpose-body-html";
import {
  FAYLP_HEADLINE,
  FAYLP_IMAGE,
  FAYLP_INTRO_PARAS,
  FAYLP_MIN_READ,
  FAYLP_QUICK_ANSWER_KICKER,
  FAYLP_QUICK_ANSWER_LEAD_STRONG,
  FAYLP_QUICK_ANSWER_REST,
  FAYLP_QUICK_ANSWER_TITLE,
  FAYLP_YOUTUBE_ID,
} from "@/lib/finding-achieving-your-life-purpose-data";
import { FAYLP_FAQ } from "@/lib/finding-achieving-your-life-purpose-faq";

export function FindingAchievingYourLifePurposePageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="faylp"
      headline={FAYLP_HEADLINE}
      introParas={FAYLP_INTRO_PARAS}
      image={FAYLP_IMAGE}
      minReadLabel={FAYLP_MIN_READ}
      youtubeId={FAYLP_YOUTUBE_ID}
      videoTitle={`${FAYLP_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: FAYLP_QUICK_ANSWER_KICKER,
        title: FAYLP_QUICK_ANSWER_TITLE,
        leadStrong: FAYLP_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {FAYLP_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={FINDING_ACHIEVING_YOUR_LIFE_PURPOSE_BODY_HTML}
      faq={FAYLP_FAQ}
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
