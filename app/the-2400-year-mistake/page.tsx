import { The2400YearMistakePageContent } from "@/components/the-2400-year-mistake/the-2400-year-mistake-page-content";
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
  THE_2400_YEAR_MISTAKE_DATES,
  THE_2400_YEAR_MISTAKE_HEADLINE,
  THE_2400_YEAR_MISTAKE_META_DESCRIPTION,
  THE_2400_YEAR_MISTAKE_PATH,
  THE_2400_YEAR_MISTAKE_SEO_TITLE,
  THE_2400_YEAR_MISTAKE_VIDEO_RUNTIME_MINUTES,
  THE_2400_YEAR_MISTAKE_YOUTUBE_ID,
} from "@/lib/the-2400-year-mistake-data";
import { THE_2400_YEAR_MISTAKE_FAQ } from "@/lib/the-2400-year-mistake-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_2400_YEAR_MISTAKE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_2400_YEAR_MISTAKE_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#t24-intro-lead", "#t24-quick-title", "#t24-faq-heading"] as const;

const MODIFIED = "2026-02-14T04:10:45.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_2400_YEAR_MISTAKE_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${THE_2400_YEAR_MISTAKE_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The 2,400-year mistake", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_2400_YEAR_MISTAKE_META_DESCRIPTION,
  datePublished: `${THE_2400_YEAR_MISTAKE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_2400_YEAR_MISTAKE_HEADLINE,
  description: THE_2400_YEAR_MISTAKE_META_DESCRIPTION,
  datePublished: `${THE_2400_YEAR_MISTAKE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, THE_2400_YEAR_MISTAKE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The 2,400-Year Mistake That Hijacked Western Civilization — Neothink Society address (Mark Hamilton)",
  description: THE_2400_YEAR_MISTAKE_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_2400_YEAR_MISTAKE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_2400_YEAR_MISTAKE_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_2400_YEAR_MISTAKE_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_2400_YEAR_MISTAKE_YOUTUBE_ID}`,
  durationMinutes: THE_2400_YEAR_MISTAKE_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function The2400YearMistakePage() {
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
      <The2400YearMistakePageContent />
    </>
  );
}
