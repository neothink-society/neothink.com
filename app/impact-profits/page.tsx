import { ImpactProfitsPageContent } from "@/components/impact-profits/impact-profits-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { IMPACT_PROFITS_FAQ, IMPACT_PROFITS_LESSON } from "@/lib/impact-profits-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./impact-profits-page.css";

const PATH = "/impact-profits";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Impact Profits | Neothink Mentality Lesson 4 | Neothink Institute",
  description:
    "Lesson 4 (Neothink Institute): impact profits, Project Curiosity, value creation, Charles Nash example; video on YouTube (KD9tcurr8qE) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 4: Impact profits", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Impact Profits | Neothink Mentality Lesson 4",
  description:
    "Impact profits, value creation, and integrated thinking at work: lesson 4 essay and FAQ by Neothink Institute.",
  datePublished: IMPACT_PROFITS_LESSON.datePublished,
  dateModified: IMPACT_PROFITS_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Impact Profits (Neothink Mentality Lesson 4)",
  description:
    "Neothink Institute essay on profit-impacting areas and value creation; embedded lesson video features Mark Hamilton.",
  datePublished: `${IMPACT_PROFITS_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${IMPACT_PROFITS_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, IMPACT_PROFITS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 4: Impact Profits",
  description:
    "Lesson video: Mark Hamilton on impact profits and value creation at work (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${IMPACT_PROFITS_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${IMPACT_PROFITS_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${IMPACT_PROFITS_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function ImpactProfitsPage() {
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
      <ImpactProfitsPageContent />
    </>
  );
}
