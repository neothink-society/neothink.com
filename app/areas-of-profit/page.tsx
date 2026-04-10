import { AreasOfProfitPageContent } from "@/components/areas-of-profit/areas-of-profit-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { AREAS_OF_PROFIT_FAQ, AREAS_OF_PROFIT_LESSON } from "@/lib/areas-of-profit-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./areas-of-profit-page.css";

const PATH = "/areas-of-profit";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Areas of Profit | Neothink Mentality Lesson 6 | Neothink Institute",
  description:
    "Lesson 6 (Neothink Institute): areas of purpose, mini-company model, division of essence; video on YouTube (Kiz5xLm6ksk) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${AREAS_OF_PROFIT_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${AREAS_OF_PROFIT_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 6: Areas of profit", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Areas of Profit | Neothink Mentality Lesson 6",
  description:
    "Areas of purpose, mini-companies, and division of essence at work: lesson 6 essay and FAQ by Neothink Institute.",
  datePublished: AREAS_OF_PROFIT_LESSON.datePublished,
  dateModified: AREAS_OF_PROFIT_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Areas of Profit (Neothink Mentality Lesson 6)",
  description:
    "Neothink Institute essay on profit channels and the mini-company model; embedded lesson video features Mark Hamilton.",
  datePublished: `${AREAS_OF_PROFIT_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${AREAS_OF_PROFIT_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, AREAS_OF_PROFIT_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 6: Areas of Profit",
  description:
    "Lesson video: Mark Hamilton on areas of purpose and division of essence (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${AREAS_OF_PROFIT_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${AREAS_OF_PROFIT_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${AREAS_OF_PROFIT_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${AREAS_OF_PROFIT_LESSON.youtubeId}`,
  durationMinutes: AREAS_OF_PROFIT_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function AreasOfProfitPage() {
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
      <AreasOfProfitPageContent />
    </>
  );
}
