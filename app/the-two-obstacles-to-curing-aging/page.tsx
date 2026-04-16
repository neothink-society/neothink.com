import { TheTwoObstaclesToCuringAgingPageContent } from "@/components/the-two-obstacles-to-curing-aging/the-two-obstacles-to-curing-aging-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";
import { pageMetadata } from "@/lib/seo-metadata";
import {
  THE_TWO_OBSTACLES_TO_CURING_AGING_DATES,
  THE_TWO_OBSTACLES_TO_CURING_AGING_HEADLINE,
  THE_TWO_OBSTACLES_TO_CURING_AGING_META_DESCRIPTION,
  THE_TWO_OBSTACLES_TO_CURING_AGING_PATH,
  THE_TWO_OBSTACLES_TO_CURING_AGING_SEO_TITLE,
  THE_TWO_OBSTACLES_TO_CURING_AGING_VIDEO_RUNTIME_MINUTES,
  THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID,
} from "@/lib/the-two-obstacles-to-curing-aging-data";
import { THE_TWO_OBSTACLES_TO_CURING_AGING_FAQ } from "@/lib/the-two-obstacles-to-curing-aging-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_TWO_OBSTACLES_TO_CURING_AGING_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_TWO_OBSTACLES_TO_CURING_AGING_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#tto-intro-lead", "#tto-quick-title", "#tto-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_TWO_OBSTACLES_TO_CURING_AGING_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${THE_TWO_OBSTACLES_TO_CURING_AGING_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-12T17:46:11.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The two obstacles to curing aging", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_TWO_OBSTACLES_TO_CURING_AGING_META_DESCRIPTION,
  datePublished: `${THE_TWO_OBSTACLES_TO_CURING_AGING_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T17:46:11.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_TWO_OBSTACLES_TO_CURING_AGING_HEADLINE,
  description: THE_TWO_OBSTACLES_TO_CURING_AGING_META_DESCRIPTION,
  datePublished: `${THE_TWO_OBSTACLES_TO_CURING_AGING_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T17:46:11.000Z",
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, THE_TWO_OBSTACLES_TO_CURING_AGING_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Two Obstacles to Curing Aging — Neothink Society address (Mark Hamilton)",
  description: THE_TWO_OBSTACLES_TO_CURING_AGING_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_TWO_OBSTACLES_TO_CURING_AGING_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_TWO_OBSTACLES_TO_CURING_AGING_YOUTUBE_ID}`,
  durationMinutes: THE_TWO_OBSTACLES_TO_CURING_AGING_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheTwoObstaclesToCuringAgingPage() {
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
      <TheTwoObstaclesToCuringAgingPageContent />
    </>
  );
}
