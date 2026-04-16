import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { THE_FUTURE_OF_HUMANITY_BUILDING_A_NEW_COUNTRY_WITHOUT_RULERS_BODY_HTML } from "@/lib/the-future-of-humanity-building-a-new-country-without-rulers-body-html";
import {
  FHBNCWR_HEADLINE,
  FHBNCWR_IMAGE,
  FHBNCWR_INTRO_PARAS,
  FHBNCWR_MIN_READ,
  FHBNCWR_QUICK_ANSWER_KICKER,
  FHBNCWR_QUICK_ANSWER_REST,
  FHBNCWR_QUICK_ANSWER_TITLE,
  FHBNCWR_YOUTUBE_ID,
} from "@/lib/the-future-of-humanity-building-a-new-country-without-rulers-data";
import { FHBNCWR_FAQ } from "@/lib/the-future-of-humanity-building-a-new-country-without-rulers-faq";

export function TheFutureOfHumanityBuildingANewCountryWithoutRulersPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="fhbncwr"
      headline={FHBNCWR_HEADLINE}
      introParas={FHBNCWR_INTRO_PARAS}
      image={FHBNCWR_IMAGE}
      minReadLabel={FHBNCWR_MIN_READ}
      youtubeId={FHBNCWR_YOUTUBE_ID}
      videoTitle={`${FHBNCWR_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: FHBNCWR_QUICK_ANSWER_KICKER,
        title: FHBNCWR_QUICK_ANSWER_TITLE,
        rest: FHBNCWR_QUICK_ANSWER_REST,
      }}
      bodyHtml={THE_FUTURE_OF_HUMANITY_BUILDING_A_NEW_COUNTRY_WITHOUT_RULERS_BODY_HTML}
      faq={FHBNCWR_FAQ}
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
