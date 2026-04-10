import { HigherLevelThinkingPageContent } from "@/components/higher-level-thinking/higher-level-thinking-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { HIGHER_LEVEL_THINKING_FAQ, HIGHER_LEVEL_THINKING_LESSON } from "@/lib/higher-level-thinking-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./higher-level-thinking-page.css";

const PATH = "/higher-level-thinking";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Higher Level Thinking | Neothink Mentality Lesson 5 | Neothink Institute",
  description:
    "Lesson 5 (Neothink Institute): integrated thinking as higher level thinking, Project Curiosity, and the Neothink mentality; video on YouTube (EVauhNelWOQ) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${HIGHER_LEVEL_THINKING_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${HIGHER_LEVEL_THINKING_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 5: Higher level thinking", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Higher Level Thinking | Neothink Mentality Lesson 5",
  description:
    "Integrated thinking, higher level perspective at work, and the Neothink mentality: lesson 5 essay and FAQ by Neothink Institute.",
  datePublished: HIGHER_LEVEL_THINKING_LESSON.datePublished,
  dateModified: HIGHER_LEVEL_THINKING_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Higher Level Thinking (Neothink Mentality Lesson 5)",
  description:
    "Neothink Institute essay on integrated thinking and higher level perspective; embedded lesson video features Mark Hamilton.",
  datePublished: `${HIGHER_LEVEL_THINKING_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${HIGHER_LEVEL_THINKING_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, HIGHER_LEVEL_THINKING_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 5: Higher Level Thinking",
  description:
    "Lesson video: Mark Hamilton on integrated thinking and higher level thinking at work (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${HIGHER_LEVEL_THINKING_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${HIGHER_LEVEL_THINKING_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${HIGHER_LEVEL_THINKING_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${HIGHER_LEVEL_THINKING_LESSON.youtubeId}`,
  durationMinutes: HIGHER_LEVEL_THINKING_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function HigherLevelThinkingPage() {
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
      <HigherLevelThinkingPageContent />
    </>
  );
}
