import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { THE_SECRET_TO_A_WEALTHY_HEALTHY_PEACEFUL_COUNTRY_BODY_HTML } from "@/lib/the-secret-to-a-wealthy-healthy-peaceful-country-body-html";
import {
  SWHPC_HEADLINE,
  SWHPC_IMAGE,
  SWHPC_INTRO_PARAS,
  SWHPC_MIN_READ,
  SWHPC_QUICK_ANSWER_KICKER,
  SWHPC_QUICK_ANSWER_REST,
  SWHPC_QUICK_ANSWER_TITLE,
  SWHPC_YOUTUBE_ID,
} from "@/lib/the-secret-to-a-wealthy-healthy-peaceful-country-data";
import { SWHPC_FAQ } from "@/lib/the-secret-to-a-wealthy-healthy-peaceful-country-faq";

export function TheSecretToAWealthyHealthyPeacefulCountryPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="swhpc"
      headline={SWHPC_HEADLINE}
      introParas={SWHPC_INTRO_PARAS}
      image={SWHPC_IMAGE}
      minReadLabel={SWHPC_MIN_READ}
      youtubeId={SWHPC_YOUTUBE_ID}
      videoTitle={`${SWHPC_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: SWHPC_QUICK_ANSWER_KICKER,
        title: SWHPC_QUICK_ANSWER_TITLE,
        rest: SWHPC_QUICK_ANSWER_REST,
      }}
      bodyHtml={THE_SECRET_TO_A_WEALTHY_HEALTHY_PEACEFUL_COUNTRY_BODY_HTML}
      faq={SWHPC_FAQ}
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
