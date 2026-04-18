import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { YOURE_BEING_MANIPULATED_THEY_USE_GUILT_TO_CONTROL_YOU_BODY_HTML } from "@/lib/youre-being-manipulated-they-use-guilt-to-control-you-body-html";
import {
  YBMG_HEADLINE,
  YBMG_IMAGE,
  YBMG_INTRO_PARAS,
  YBMG_MIN_READ,
  YBMG_QUICK_ANSWER_KICKER,
  YBMG_QUICK_ANSWER_LEAD_STRONG,
  YBMG_QUICK_ANSWER_REST,
  YBMG_QUICK_ANSWER_TITLE,
  YBMG_YOUTUBE_ID,
} from "@/lib/youre-being-manipulated-they-use-guilt-to-control-you-data";
import { YBMG_FAQ } from "@/lib/youre-being-manipulated-they-use-guilt-to-control-you-faq";

export function YoureBeingManipulatedTheyUseGuiltToControlYouPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="ybmg"
      headline={YBMG_HEADLINE}
      introParas={YBMG_INTRO_PARAS}
      image={YBMG_IMAGE}
      minReadLabel={YBMG_MIN_READ}
      youtubeId={YBMG_YOUTUBE_ID}
      videoTitle={`${YBMG_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: YBMG_QUICK_ANSWER_KICKER,
        title: YBMG_QUICK_ANSWER_TITLE,
        leadStrong: YBMG_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {YBMG_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={YOURE_BEING_MANIPULATED_THEY_USE_GUILT_TO_CONTROL_YOU_BODY_HTML}
      faq={YBMG_FAQ}
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
