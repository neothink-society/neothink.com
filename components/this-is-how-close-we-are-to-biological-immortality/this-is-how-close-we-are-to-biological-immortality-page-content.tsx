import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { THIS_IS_HOW_CLOSE_WE_ARE_TO_BIOLOGICAL_IMMORTALITY_BODY_HTML } from "@/lib/this-is-how-close-we-are-to-biological-immortality-body-html";
import {
  HCBI_HEADLINE,
  HCBI_IMAGE,
  HCBI_INTRO_PARAS,
  HCBI_MIN_READ,
  HCBI_QUICK_ANSWER_KICKER,
  HCBI_QUICK_ANSWER_REST,
  HCBI_QUICK_ANSWER_TITLE,
  HCBI_YOUTUBE_ID,
} from "@/lib/this-is-how-close-we-are-to-biological-immortality-data";
import { HCBI_FAQ } from "@/lib/this-is-how-close-we-are-to-biological-immortality-faq";

export function ThisIsHowCloseWeAreToBiologicalImmortalityPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="hcbi"
      headline={HCBI_HEADLINE}
      introParas={HCBI_INTRO_PARAS}
      image={HCBI_IMAGE}
      minReadLabel={HCBI_MIN_READ}
      youtubeId={HCBI_YOUTUBE_ID}
      videoTitle={`${HCBI_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: HCBI_QUICK_ANSWER_KICKER,
        title: HCBI_QUICK_ANSWER_TITLE,
        rest: HCBI_QUICK_ANSWER_REST,
      }}
      bodyHtml={THIS_IS_HOW_CLOSE_WE_ARE_TO_BIOLOGICAL_IMMORTALITY_BODY_HTML}
      faq={HCBI_FAQ}
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
