import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { ESCAPE_THE_MATRIX_NOW_BODY_HTML } from "@/lib/escape-the-matrix-now-body-html";
import {
  EMN_HEADLINE,
  EMN_IMAGE,
  EMN_INTRO_PARAS,
  EMN_MIN_READ,
  EMN_QUICK_ANSWER_KICKER,
  EMN_QUICK_ANSWER_REST,
  EMN_QUICK_ANSWER_TITLE,
  EMN_YOUTUBE_ID,
} from "@/lib/escape-the-matrix-now-data";
import { EMN_FAQ } from "@/lib/escape-the-matrix-now-faq";

export function EscapeTheMatrixNowPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="emn"
      headline={EMN_HEADLINE}
      introParas={EMN_INTRO_PARAS}
      image={EMN_IMAGE}
      minReadLabel={EMN_MIN_READ}
      youtubeId={EMN_YOUTUBE_ID}
      videoTitle={`${EMN_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: EMN_QUICK_ANSWER_KICKER,
        title: EMN_QUICK_ANSWER_TITLE,
        rest: EMN_QUICK_ANSWER_REST,
      }}
      bodyHtml={ESCAPE_THE_MATRIX_NOW_BODY_HTML}
      faq={EMN_FAQ}
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
