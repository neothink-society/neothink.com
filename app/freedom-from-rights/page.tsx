import { FreedomFromRightsPageContent } from "@/components/freedom-from-rights/freedom-from-rights-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { FREEDOM_FROM_RIGHTS_FAQ, FREEDOM_FROM_RIGHTS_LESSON } from "@/lib/freedom-from-rights-data";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./freedom-from-rights-page.css";

const PATH = "/freedom-from-rights";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Freedom from Rights | Neothink Mentality Lesson 2 | Neothink Institute",
  description:
    "Lesson 2 (Neothink Institute): Bill of Rights, DEI and ESG, Prime Law, integrated thinking, essay and FAQ; video features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${FREEDOM_FROM_RIGHTS_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${FREEDOM_FROM_RIGHTS_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 2: Freedom from rights", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Freedom from Rights | Neothink Mentality Lesson 2",
  description:
    "Neothink Institute essay on political illusion: Bill of Rights, initiatory force, Prime Law, integrated thinking; lesson 2 video and FAQ.",
  datePublished: FREEDOM_FROM_RIGHTS_LESSON.datePublished,
  dateModified: FREEDOM_FROM_RIGHTS_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Freedom from Rights (Neothink Mentality Lesson 2)",
  description:
    "Neothink Institute essay on the Prime Law and rights-based illusions; embedded lesson video features Mark Hamilton.",
  datePublished: `${FREEDOM_FROM_RIGHTS_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${FREEDOM_FROM_RIGHTS_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, FREEDOM_FROM_RIGHTS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 2: Freedom from Rights",
  description:
    "Lesson video: Mark Hamilton on the Prime Law, initiatory force, and rights language (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${FREEDOM_FROM_RIGHTS_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${FREEDOM_FROM_RIGHTS_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${FREEDOM_FROM_RIGHTS_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${FREEDOM_FROM_RIGHTS_LESSON.youtubeId}`,
  durationMinutes: FREEDOM_FROM_RIGHTS_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function FreedomFromRightsPage() {
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
      <FreedomFromRightsPageContent />
    </>
  );
}
