import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { HOW_TO_BE_A_LEADER_THE_ONE_THING_HOLDING_YOU_BACK_BODY_HTML } from "@/lib/how-to-be-a-leader-the-one-thing-holding-you-back-body-html";
import {
  HBL1TH_HEADLINE,
  HBL1TH_IMAGE,
  HBL1TH_INTRO_PARAS,
  HBL1TH_MIN_READ,
  HBL1TH_QUICK_ANSWER_KICKER,
  HBL1TH_QUICK_ANSWER_LEAD_STRONG,
  HBL1TH_QUICK_ANSWER_REST,
  HBL1TH_QUICK_ANSWER_TITLE,
  HBL1TH_YOUTUBE_ID,
} from "@/lib/how-to-be-a-leader-the-one-thing-holding-you-back-data";
import { HBL1TH_FAQ } from "@/lib/how-to-be-a-leader-the-one-thing-holding-you-back-faq";

export function HowToBeALeaderTheOneThingHoldingYouBackPageContent() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="hbl1th"
      headline={HBL1TH_HEADLINE}
      introParas={HBL1TH_INTRO_PARAS}
      image={HBL1TH_IMAGE}
      minReadLabel={HBL1TH_MIN_READ}
      youtubeId={HBL1TH_YOUTUBE_ID}
      videoTitle={`${HBL1TH_HEADLINE}, Mark Hamilton`}
      quickAnswer={{
        kicker: HBL1TH_QUICK_ANSWER_KICKER,
        title: HBL1TH_QUICK_ANSWER_TITLE,
        leadStrong: HBL1TH_QUICK_ANSWER_LEAD_STRONG,
        rest: <> {HBL1TH_QUICK_ANSWER_REST}</>,
      }}
      bodyHtml={HOW_TO_BE_A_LEADER_THE_ONE_THING_HOLDING_YOU_BACK_BODY_HTML}
      faq={HBL1TH_FAQ}
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
