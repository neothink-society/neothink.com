import { KeepTheBalancePageContent } from "@/components/keep-the-balance/keep-the-balance-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { KEEP_THE_BALANCE_FAQ, KEEP_THE_BALANCE_LESSON } from "@/lib/keep-the-balance-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./keep-the-balance-page.css";

const PATH = "/keep-the-balance";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Keep the Balance | Neothink Mentality Lesson 13 | Neothink Institute",
  description:
    "Lesson 13 (Neothink Institute): harmonize value creation with value reflection, family, health, and happiness as you get busier; video on YouTube (rpQMiAdKD0c) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${KEEP_THE_BALANCE_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${KEEP_THE_BALANCE_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 13: Keep the balance", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Keep the Balance | Neothink Mentality Lesson 13",
  description:
    "Value creation vs value reflection, left-brain busy reflex, and balance as a happiness compass: lesson 13 essay and FAQ by Neothink Institute.",
  datePublished: KEEP_THE_BALANCE_LESSON.datePublished,
  dateModified: KEEP_THE_BALANCE_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Keep the Balance (Neothink Mentality Lesson 13)",
  description:
    "Neothink Institute essay on harmonizing work and life reflection; embedded lesson video features Mark Hamilton.",
  datePublished: `${KEEP_THE_BALANCE_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${KEEP_THE_BALANCE_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, KEEP_THE_BALANCE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 13: Keep the Balance",
  description:
    "Lesson video: Mark Hamilton on balance, value reflection, and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${KEEP_THE_BALANCE_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${KEEP_THE_BALANCE_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${KEEP_THE_BALANCE_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${KEEP_THE_BALANCE_LESSON.youtubeId}`,
  durationMinutes: KEEP_THE_BALANCE_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function KeepTheBalancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <KeepTheBalancePageContent />
    </>
  );
}
