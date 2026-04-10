import { CureToAgingPageContent } from "@/components/cure-to-aging/cure-to-aging-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { CURE_TO_AGING_FAQ, CURE_TO_AGING_LESSON } from "@/lib/cure-to-aging-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./cure-to-aging-page.css";

const PATH = "/cure-to-aging";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Cure to Aging | Neothink Mentality Lesson 10 | Neothink Institute",
  description:
    "Lesson 10 (Neothink Institute): demand for longevity, value creators, initiatory force and regulation; video on YouTube (vnLK2BAN3Lw) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${CURE_TO_AGING_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${CURE_TO_AGING_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 10: Cure to aging", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Cure to Aging | Neothink Mentality Lesson 10",
  description:
    "Longevity demand, Neothink Mentality, Prime Law, and regulatory supply: lesson 10 essay and FAQ by Neothink Institute.",
  datePublished: CURE_TO_AGING_LESSON.datePublished,
  dateModified: CURE_TO_AGING_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Cure to Aging (Neothink Mentality Lesson 10)",
  description:
    "Neothink Institute essay on curing aging, demand and supply, and the Prime Law; embedded lesson video features Mark Hamilton.",
  datePublished: `${CURE_TO_AGING_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${CURE_TO_AGING_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, CURE_TO_AGING_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 10: Cure to Aging",
  description:
    "Lesson video: Mark Hamilton on longevity, demand for life, and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${CURE_TO_AGING_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${CURE_TO_AGING_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${CURE_TO_AGING_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${CURE_TO_AGING_LESSON.youtubeId}`,
  durationMinutes: CURE_TO_AGING_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function CureToAgingPage() {
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
      <CureToAgingPageContent />
    </>
  );
}
