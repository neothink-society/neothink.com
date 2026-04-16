import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { PHILOSOPHER_MAKE_YOUR_LIFE_EXCITING_AGAIN_DO_THIS_BODY_HTML } from "@/lib/philosopher-make-your-life-exciting-again-do-this-body-html";
import {
  PMLEA_HEADLINE,
  PMLEA_IMAGE,
  PMLEA_INTRO_PARAS,
  PMLEA_MIN_READ,
  PMLEA_QUICK_ANSWER_KICKER,
  PMLEA_QUICK_ANSWER_REST,
  PMLEA_QUICK_ANSWER_TITLE,
  PMLEA_YOUTUBE_ID,
} from "@/lib/philosopher-make-your-life-exciting-again-do-this-data";
import { PMLEA_FAQ } from "@/lib/philosopher-make-your-life-exciting-again-do-this-faq";

export function PhilosopherMakeYourLifeExcitingAgainDoThisPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="pmlea"
      headline={PMLEA_HEADLINE}
      introParas={PMLEA_INTRO_PARAS}
      image={PMLEA_IMAGE}
      minReadLabel={PMLEA_MIN_READ}
      youtubeId={PMLEA_YOUTUBE_ID}
      videoTitle={`${PMLEA_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: PMLEA_QUICK_ANSWER_KICKER,
        title: PMLEA_QUICK_ANSWER_TITLE,
        rest: PMLEA_QUICK_ANSWER_REST,
      }}
      bodyHtml={PHILOSOPHER_MAKE_YOUR_LIFE_EXCITING_AGAIN_DO_THIS_BODY_HTML}
      faq={PMLEA_FAQ}
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
