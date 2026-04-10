import { SoaringProductivityPageContent } from "@/components/soaring-productivity/soaring-productivity-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { SOARING_PRODUCTIVITY_FAQ, SOARING_PRODUCTIVITY_LESSON } from "@/lib/soaring-productivity-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./soaring-productivity-page.css";

const PATH = "/soaring-productivity";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Soaring Productivity | Neothink Mentality Lesson 9 | Neothink Institute",
  description:
    "Lesson 9 (Neothink Institute): assembly-line productivity, physical movements, Ford 8× analogy; video on YouTube (rBCoZtSZVtM) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 9: Soaring productivity", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Soaring Productivity | Neothink Mentality Lesson 9",
  description:
    "Assembly-line scheduling by physical movement, 8× productivity framing, and Neothink Mentality: lesson 9 essay and FAQ by Neothink Institute.",
  datePublished: SOARING_PRODUCTIVITY_LESSON.datePublished,
  dateModified: SOARING_PRODUCTIVITY_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Soaring Productivity (Neothink Mentality Lesson 9)",
  description:
    "Neothink Institute essay on movement-based scheduling and productivity; embedded lesson video features Mark Hamilton.",
  datePublished: `${SOARING_PRODUCTIVITY_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${SOARING_PRODUCTIVITY_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, SOARING_PRODUCTIVITY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 9: Soaring Productivity",
  description:
    "Lesson video: Mark Hamilton on assembly-line productivity and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${SOARING_PRODUCTIVITY_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${SOARING_PRODUCTIVITY_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${SOARING_PRODUCTIVITY_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function SoaringProductivityPage() {
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
      <SoaringProductivityPageContent />
    </>
  );
}
