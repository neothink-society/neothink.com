import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { THINK_LIKE_ELON_MUSK_MIND_HACKS_BODY_HTML } from "@/lib/think-like-elon-musk-mind-hacks-body-html";
import {
  TLEMMH_HEADLINE,
  TLEMMH_IMAGE,
  TLEMMH_INTRO_PARAS,
  TLEMMH_MIN_READ,
  TLEMMH_QUICK_ANSWER_KICKER,
  TLEMMH_QUICK_ANSWER_LEAD_STRONG,
  TLEMMH_QUICK_ANSWER_REST,
  TLEMMH_QUICK_ANSWER_TITLE,
  TLEMMH_YOUTUBE_ID,
} from "@/lib/think-like-elon-musk-mind-hacks-data";
import { TLEMMH_FAQ } from "@/lib/think-like-elon-musk-mind-hacks-faq";

export function ThinkLikeElonMuskMindHacksPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="tlemmh"
      headline={TLEMMH_HEADLINE}
      introParas={TLEMMH_INTRO_PARAS}
      image={TLEMMH_IMAGE}
      minReadLabel={TLEMMH_MIN_READ}
      youtubeId={TLEMMH_YOUTUBE_ID}
      videoTitle={`${TLEMMH_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: TLEMMH_QUICK_ANSWER_KICKER,
        title: TLEMMH_QUICK_ANSWER_TITLE,
        leadStrong: TLEMMH_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {TLEMMH_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={THINK_LIKE_ELON_MUSK_MIND_HACKS_BODY_HTML}
      faq={TLEMMH_FAQ}
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
