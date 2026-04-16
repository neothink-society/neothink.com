import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { SEPARATING_HEROES_FROM_DREAMERS_BODY_HTML } from "@/lib/separating-heroes-from-dreamers-body-html";
import {
  SHFD_HEADLINE,
  SHFD_IMAGE,
  SHFD_INTRO_PARAS,
  SHFD_MIN_READ,
  SHFD_QUICK_ANSWER_KICKER,
  SHFD_QUICK_ANSWER_REST,
  SHFD_QUICK_ANSWER_TITLE,
  SHFD_YOUTUBE_ID,
} from "@/lib/separating-heroes-from-dreamers-data";
import { SHFD_FAQ } from "@/lib/separating-heroes-from-dreamers-faq";

export function SeparatingHeroesFromDreamersPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="shfd"
      headline={SHFD_HEADLINE}
      introParas={SHFD_INTRO_PARAS}
      image={SHFD_IMAGE}
      minReadLabel={SHFD_MIN_READ}
      youtubeId={SHFD_YOUTUBE_ID}
      videoTitle={`${SHFD_HEADLINE} — Mark Hamilton`}
      quickAnswer={{
        kicker: SHFD_QUICK_ANSWER_KICKER,
        title: SHFD_QUICK_ANSWER_TITLE,
        rest: SHFD_QUICK_ANSWER_REST,
      }}
      bodyHtml={SEPARATING_HEROES_FROM_DREAMERS_BODY_HTML}
      faq={SHFD_FAQ}
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
