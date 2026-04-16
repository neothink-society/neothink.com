import { IllusionPollutionPageContent } from "@/components/illusion-pollution/illusion-pollution-page-content";
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
  ILLUSION_POLLUTION_DATES,
  ILLUSION_POLLUTION_HEADLINE,
  ILLUSION_POLLUTION_META_DESCRIPTION,
  ILLUSION_POLLUTION_PATH,
  ILLUSION_POLLUTION_SEO_TITLE,
  ILLUSION_POLLUTION_VIDEO_RUNTIME_MINUTES,
  ILLUSION_POLLUTION_YOUTUBE_ID,
} from "@/lib/illusion-pollution-data";
import { ILLUSION_POLLUTION_FAQ } from "@/lib/illusion-pollution-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = ILLUSION_POLLUTION_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${ILLUSION_POLLUTION_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#ilp-intro-lead", "#ilp-quick-title", "#ilp-faq-heading"] as const;

const MODIFIED = "2026-02-12T16:39:50.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: ILLUSION_POLLUTION_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${ILLUSION_POLLUTION_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Illusion pollution", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: ILLUSION_POLLUTION_META_DESCRIPTION,
  datePublished: `${ILLUSION_POLLUTION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ILLUSION_POLLUTION_HEADLINE,
  description: ILLUSION_POLLUTION_META_DESCRIPTION,
  datePublished: `${ILLUSION_POLLUTION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, ILLUSION_POLLUTION_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Illusion Pollution: Why Good People Support What Destroys Them — Neothink Society address (Mark Hamilton)",
  description: ILLUSION_POLLUTION_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${ILLUSION_POLLUTION_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${ILLUSION_POLLUTION_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${ILLUSION_POLLUTION_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${ILLUSION_POLLUTION_YOUTUBE_ID}`,
  durationMinutes: ILLUSION_POLLUTION_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function IllusionPollutionPage() {
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
      <IllusionPollutionPageContent />
    </>
  );
}
