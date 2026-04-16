import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { ALIENS_REAL_NEVER_VISIT_EARTH_BODY_HTML } from "@/lib/aliens-real-never-visit-earth-body-html";
import {
  ARNV_HEADLINE,
  ARNV_IMAGE,
  ARNV_INTRO_PARAS,
  ARNV_MIN_READ,
  ARNV_QUICK_ANSWER_KICKER,
  ARNV_QUICK_ANSWER_LEAD_STRONG,
  ARNV_QUICK_ANSWER_REST,
  ARNV_QUICK_ANSWER_TITLE,
  ARNV_YOUTUBE_ID,
} from "@/lib/aliens-real-never-visit-earth-data";
import { ARNV_FAQ } from "@/lib/aliens-real-never-visit-earth-faq";

export function AliensRealNeverVisitEarthPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="arnv"
      headline={ARNV_HEADLINE}
      introParas={ARNV_INTRO_PARAS}
      image={ARNV_IMAGE}
      minReadLabel={ARNV_MIN_READ}
      youtubeId={ARNV_YOUTUBE_ID}
      videoTitle={`${ARNV_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: ARNV_QUICK_ANSWER_KICKER,
        title: ARNV_QUICK_ANSWER_TITLE,
        leadStrong: ARNV_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {ARNV_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={ALIENS_REAL_NEVER_VISIT_EARTH_BODY_HTML}
      faq={ARNV_FAQ}
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
