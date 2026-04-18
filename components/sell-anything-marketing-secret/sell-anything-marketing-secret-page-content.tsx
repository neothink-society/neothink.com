import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { SELL_ANYTHING_MARKETING_SECRET_BODY_HTML } from "@/lib/sell-anything-marketing-secret-body-html";
import {
  SAMS_HEADLINE,
  SAMS_IMAGE,
  SAMS_INTRO_PARAS,
  SAMS_MIN_READ,
  SAMS_QUICK_ANSWER_KICKER,
  SAMS_QUICK_ANSWER_LEAD_STRONG,
  SAMS_QUICK_ANSWER_REST,
  SAMS_QUICK_ANSWER_TITLE,
} from "@/lib/sell-anything-marketing-secret-data";
import { SAMS_FAQ } from "@/lib/sell-anything-marketing-secret-faq";

export function SellAnythingMarketingSecretPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="sams"
      headline={SAMS_HEADLINE}
      introParas={SAMS_INTRO_PARAS}
      image={SAMS_IMAGE}
      minReadLabel={SAMS_MIN_READ}
      videoTitle={`${SAMS_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: SAMS_QUICK_ANSWER_KICKER,
        title: SAMS_QUICK_ANSWER_TITLE,
        leadStrong: SAMS_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {SAMS_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={SELL_ANYTHING_MARKETING_SECRET_BODY_HTML}
      faq={SAMS_FAQ}
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
