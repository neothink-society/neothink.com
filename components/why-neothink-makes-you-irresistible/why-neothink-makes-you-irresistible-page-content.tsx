import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { WHY_NEOTHINK_MAKES_YOU_IRRESISTIBLE_BODY_HTML } from "@/lib/why-neothink-makes-you-irresistible-body-html";
import {
  WNMYI_HEADLINE,
  WNMYI_IMAGE,
  WNMYI_INTRO_PARAS,
  WNMYI_MIN_READ,
  WNMYI_QUICK_ANSWER_KICKER,
  WNMYI_QUICK_ANSWER_LEAD_STRONG,
  WNMYI_QUICK_ANSWER_REST,
  WNMYI_QUICK_ANSWER_TITLE,
  WNMYI_YOUTUBE_ID,
} from "@/lib/why-neothink-makes-you-irresistible-data";
import { WNMYI_FAQ } from "@/lib/why-neothink-makes-you-irresistible-faq";

export function WhyNeothinkMakesYouIrresistiblePageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="wnmyi"
      headline={WNMYI_HEADLINE}
      introParas={WNMYI_INTRO_PARAS}
      image={WNMYI_IMAGE}
      minReadLabel={WNMYI_MIN_READ}
      youtubeId={WNMYI_YOUTUBE_ID}
      videoTitle={`${WNMYI_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: WNMYI_QUICK_ANSWER_KICKER,
        title: WNMYI_QUICK_ANSWER_TITLE,
        leadStrong: WNMYI_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {WNMYI_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={WHY_NEOTHINK_MAKES_YOU_IRRESISTIBLE_BODY_HTML}
      faq={WNMYI_FAQ}
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
