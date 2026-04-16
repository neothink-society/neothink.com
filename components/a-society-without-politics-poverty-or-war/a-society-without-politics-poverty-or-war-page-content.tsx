import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { A_SOCIETY_WITHOUT_POLITICS_POVERTY_OR_WAR_BODY_HTML } from "@/lib/a-society-without-politics-poverty-or-war-body-html";
import {
  SWPPW_HEADLINE,
  SWPPW_IMAGE,
  SWPPW_INTRO_PARAS,
  SWPPW_MIN_READ,
  SWPPW_QUICK_ANSWER_KICKER,
  SWPPW_QUICK_ANSWER_REST,
  SWPPW_QUICK_ANSWER_TITLE,
  SWPPW_YOUTUBE_ID,
} from "@/lib/a-society-without-politics-poverty-or-war-data";
import { SWPPW_FAQ } from "@/lib/a-society-without-politics-poverty-or-war-faq";

export function ASocietyWithoutPoliticsPovertyOrWarPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="swppw"
      headline={SWPPW_HEADLINE}
      introParas={SWPPW_INTRO_PARAS}
      image={SWPPW_IMAGE}
      minReadLabel={SWPPW_MIN_READ}
      youtubeId={SWPPW_YOUTUBE_ID}
      videoTitle={`${SWPPW_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: SWPPW_QUICK_ANSWER_KICKER,
        title: SWPPW_QUICK_ANSWER_TITLE,
        rest: SWPPW_QUICK_ANSWER_REST,
      }}
      bodyHtml={A_SOCIETY_WITHOUT_POLITICS_POVERTY_OR_WAR_BODY_HTML}
      faq={SWPPW_FAQ}
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
