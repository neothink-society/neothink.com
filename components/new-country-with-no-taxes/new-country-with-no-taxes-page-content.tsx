import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { NEW_COUNTRY_WITH_NO_TAXES_BODY_HTML } from "@/lib/new-country-with-no-taxes-body-html";
import {
  NCNT_HEADLINE,
  NCNT_IMAGE,
  NCNT_INTRO_PARAS,
  NCNT_MIN_READ,
  NCNT_QUICK_ANSWER_KICKER,
  NCNT_QUICK_ANSWER_LEAD_STRONG,
  NCNT_QUICK_ANSWER_REST,
  NCNT_QUICK_ANSWER_TITLE,
  NCNT_YOUTUBE_ID,
} from "@/lib/new-country-with-no-taxes-data";
import { NCNT_FAQ } from "@/lib/new-country-with-no-taxes-faq";

export function NewCountryWithNoTaxesPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="ncnt"
      headline={NCNT_HEADLINE}
      introParas={NCNT_INTRO_PARAS}
      image={NCNT_IMAGE}
      minReadLabel={NCNT_MIN_READ}
      youtubeId={NCNT_YOUTUBE_ID}
      videoTitle={`${NCNT_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: NCNT_QUICK_ANSWER_KICKER,
        title: NCNT_QUICK_ANSWER_TITLE,
        leadStrong: NCNT_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {NCNT_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={NEW_COUNTRY_WITH_NO_TAXES_BODY_HTML}
      faq={NCNT_FAQ}
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
