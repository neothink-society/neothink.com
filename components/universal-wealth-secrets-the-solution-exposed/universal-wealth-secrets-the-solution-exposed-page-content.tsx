import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { UNIVERSAL_WEALTH_SECRETS_THE_SOLUTION_EXPOSED_BODY_HTML } from "@/lib/universal-wealth-secrets-the-solution-exposed-body-html";
import {
  UWSSE_HEADLINE,
  UWSSE_IMAGE,
  UWSSE_INTRO_PARAS,
  UWSSE_MIN_READ,
  UWSSE_QUICK_ANSWER_KICKER,
  UWSSE_QUICK_ANSWER_REST,
  UWSSE_QUICK_ANSWER_TITLE,
  UWSSE_YOUTUBE_ID,
} from "@/lib/universal-wealth-secrets-the-solution-exposed-data";
import { UWSSE_FAQ } from "@/lib/universal-wealth-secrets-the-solution-exposed-faq";

export function UniversalWealthSecretsTheSolutionExposedPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="uwsse"
      headline={UWSSE_HEADLINE}
      introParas={UWSSE_INTRO_PARAS}
      image={UWSSE_IMAGE}
      minReadLabel={UWSSE_MIN_READ}
      youtubeId={UWSSE_YOUTUBE_ID}
      videoTitle={`${UWSSE_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: UWSSE_QUICK_ANSWER_KICKER,
        title: UWSSE_QUICK_ANSWER_TITLE,
        rest: UWSSE_QUICK_ANSWER_REST,
      }}
      bodyHtml={UNIVERSAL_WEALTH_SECRETS_THE_SOLUTION_EXPOSED_BODY_HTML}
      faq={UWSSE_FAQ}
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
