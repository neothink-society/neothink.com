import { RiseFromRutPageContent } from "@/components/rise-from-rut/rise-from-rut-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { RISE_FROM_RUT_FAQ, RISE_FROM_RUT_LESSON } from "@/lib/rise-from-rut-data";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./rise-from-rut-page.css";

const PATH = "/rise-from-rut";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Rise from the Routine Rut | Neothink Mentality Lesson 1 | Neothink Institute",
  description:
    "Lesson 1 (Neothink Institute): following mode vs integrated thinking, essay and FAQ; video features Mark Hamilton. Public Neothink Mentality series.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${RISE_FROM_RUT_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${RISE_FROM_RUT_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 1: Rise from rut", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Rise from the Routine Rut | Neothink Mentality Lesson 1",
  description:
    "Integrated thinking and following mode: lesson 1 of the Neothink Mentality series with video, FAQ, and essay by Neothink Institute.",
  datePublished: RISE_FROM_RUT_LESSON.datePublished,
  dateModified: RISE_FROM_RUT_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Rise from the Routine Rut (Neothink Mentality Lesson 1)",
  description:
    "Neothink Institute essay on following mode and integrated thinking; embedded lesson video features Mark Hamilton.",
  datePublished: `${RISE_FROM_RUT_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${RISE_FROM_RUT_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, RISE_FROM_RUT_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 1: Rise from the Routine Rut",
  description: "Lesson video: Mark Hamilton on integrated thinking and following mode (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${RISE_FROM_RUT_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${RISE_FROM_RUT_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${RISE_FROM_RUT_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${RISE_FROM_RUT_LESSON.youtubeId}`,
  durationMinutes: RISE_FROM_RUT_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function RiseFromRutPage() {
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
      <RiseFromRutPageContent />
    </>
  );
}
