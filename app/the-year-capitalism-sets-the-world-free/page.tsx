import { TheYearCapitalismSetsTheWorldFreePageContent } from "@/components/the-year-capitalism-sets-the-world-free/the-year-capitalism-sets-the-world-free-page-content";
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
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_DATES,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_HEADLINE,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_META_DESCRIPTION,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_PATH,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_SEO_TITLE,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_VIDEO_RUNTIME_MINUTES,
  THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID,
} from "@/lib/the-year-capitalism-sets-the-world-free-data";
import { THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_FAQ } from "@/lib/the-year-capitalism-sets-the-world-free-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#tyc-intro-lead", "#tyc-quick-title", "#tyc-faq-heading"] as const;

const MODIFIED = "2026-02-12T16:39:56.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The year capitalism sets the world free", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_META_DESCRIPTION,
  datePublished: `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_HEADLINE,
  description: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_META_DESCRIPTION,
  datePublished: `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Year Capitalism Sets the World Free — Neothink Society address (Mark Hamilton)",
  description: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_YOUTUBE_ID}`,
  durationMinutes: THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheYearCapitalismSetsTheWorldFreePage() {
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
      <TheYearCapitalismSetsTheWorldFreePageContent />
    </>
  );
}
