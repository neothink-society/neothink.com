import { TheJobRevolutionPageContent } from "@/components/the-job-revolution/the-job-revolution-page-content";
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
  THE_JOB_REVOLUTION_DATES,
  THE_JOB_REVOLUTION_HEADLINE,
  THE_JOB_REVOLUTION_META_DESCRIPTION,
  THE_JOB_REVOLUTION_PATH,
  THE_JOB_REVOLUTION_SEO_TITLE,
  THE_JOB_REVOLUTION_VIDEO_RUNTIME_MINUTES,
  THE_JOB_REVOLUTION_YOUTUBE_ID,
} from "@/lib/the-job-revolution-data";
import { THE_JOB_REVOLUTION_FAQ } from "@/lib/the-job-revolution-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_JOB_REVOLUTION_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_JOB_REVOLUTION_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#tjr-intro-lead", "#tjr-quick-title", "#tjr-faq-heading"] as const;

const MODIFIED = "2026-02-12T16:40:06.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_JOB_REVOLUTION_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${THE_JOB_REVOLUTION_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${THE_JOB_REVOLUTION_HEADLINE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${THE_JOB_REVOLUTION_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The job revolution", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_JOB_REVOLUTION_META_DESCRIPTION,
  datePublished: `${THE_JOB_REVOLUTION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_JOB_REVOLUTION_HEADLINE,
  description: THE_JOB_REVOLUTION_META_DESCRIPTION,
  datePublished: `${THE_JOB_REVOLUTION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${THE_JOB_REVOLUTION_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, THE_JOB_REVOLUTION_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Job Revolution: How Pure Capitalism Makes Everything Free: Neothink Society address (Mark Hamilton)",
  description: THE_JOB_REVOLUTION_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_JOB_REVOLUTION_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_JOB_REVOLUTION_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_JOB_REVOLUTION_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_JOB_REVOLUTION_YOUTUBE_ID}`,
  durationMinutes: THE_JOB_REVOLUTION_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheJobRevolutionPage() {
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
      <TheJobRevolutionPageContent />
    </>
  );
}
