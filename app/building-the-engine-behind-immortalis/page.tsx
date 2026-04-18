import { BuildingTheEngineBehindImmortalisPageContent } from "@/components/building-the-engine-behind-immortalis/building-the-engine-behind-immortalis-page-content";
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
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_DATES,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_HEADLINE,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_META_DESCRIPTION,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_PATH,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_SEO_TITLE,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/building-the-engine-behind-immortalis-data";
import { BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_FAQ } from "@/lib/building-the-engine-behind-immortalis-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#bebi-intro-lead", "#bebi-quick-title", "#bebi-faq-heading"] as const;

const MODIFIED = "2026-02-13T03:54:45.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Building the engine behind Immortalis", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_HEADLINE,
  description: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Building the Engine Behind Immortalis — Neothink Society address (Mark Hamilton)",
  description: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_YOUTUBE_ID}`,
  durationMinutes: BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function BuildingTheEngineBehindImmortalisPage() {
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
      <BuildingTheEngineBehindImmortalisPageContent />
    </>
  );
}
