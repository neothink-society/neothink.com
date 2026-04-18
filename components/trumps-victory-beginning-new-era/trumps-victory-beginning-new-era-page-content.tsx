import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { TRUMPS_VICTORY_BEGINNING_NEW_ERA_BODY_HTML } from "@/lib/trumps-victory-beginning-new-era-body-html";
import {
  TVBNE_HEADLINE,
  TVBNE_IMAGE,
  TVBNE_INTRO_PARAS,
  TVBNE_MIN_READ,
  TVBNE_QUICK_ANSWER_KICKER,
  TVBNE_QUICK_ANSWER_LEAD_STRONG,
  TVBNE_QUICK_ANSWER_REST,
  TVBNE_QUICK_ANSWER_TITLE,
  TVBNE_YOUTUBE_ID,
} from "@/lib/trumps-victory-beginning-new-era-data";
import { TVBNE_FAQ } from "@/lib/trumps-victory-beginning-new-era-faq";

export function TrumpsVictoryBeginningNewEraPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="tvbne"
      headline={TVBNE_HEADLINE}
      introParas={TVBNE_INTRO_PARAS}
      image={TVBNE_IMAGE}
      minReadLabel={TVBNE_MIN_READ}
      youtubeId={TVBNE_YOUTUBE_ID}
      videoTitle={`${TVBNE_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: TVBNE_QUICK_ANSWER_KICKER,
        title: TVBNE_QUICK_ANSWER_TITLE,
        leadStrong: TVBNE_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {TVBNE_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={TRUMPS_VICTORY_BEGINNING_NEW_ERA_BODY_HTML}
      faq={TVBNE_FAQ}
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
