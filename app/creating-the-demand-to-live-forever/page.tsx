import { CreatingTheDemandToLiveForeverPageContent } from "@/components/creating-the-demand-to-live-forever/creating-the-demand-to-live-forever-page-content";
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
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_DATES,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_HEADLINE,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_META_DESCRIPTION,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_PATH,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_SEO_TITLE,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_VIDEO_RUNTIME_MINUTES,
  CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID,
} from "@/lib/creating-the-demand-to-live-forever-data";
import { CREATING_THE_DEMAND_TO_LIVE_FOREVER_FAQ } from "@/lib/creating-the-demand-to-live-forever-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = CREATING_THE_DEMAND_TO_LIVE_FOREVER_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${CREATING_THE_DEMAND_TO_LIVE_FOREVER_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#ctd-intro-lead", "#ctd-quick-title", "#ctd-faq-heading"] as const;

const MODIFIED = "2026-02-12T16:39:53.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: CREATING_THE_DEMAND_TO_LIVE_FOREVER_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${CREATING_THE_DEMAND_TO_LIVE_FOREVER_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Creating the demand to live forever", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: CREATING_THE_DEMAND_TO_LIVE_FOREVER_META_DESCRIPTION,
  datePublished: `${CREATING_THE_DEMAND_TO_LIVE_FOREVER_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: CREATING_THE_DEMAND_TO_LIVE_FOREVER_HEADLINE,
  description: CREATING_THE_DEMAND_TO_LIVE_FOREVER_META_DESCRIPTION,
  datePublished: `${CREATING_THE_DEMAND_TO_LIVE_FOREVER_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, CREATING_THE_DEMAND_TO_LIVE_FOREVER_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Creating the Demand to Live Forever — Neothink Society address (Mark Hamilton)",
  description: CREATING_THE_DEMAND_TO_LIVE_FOREVER_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${CREATING_THE_DEMAND_TO_LIVE_FOREVER_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${CREATING_THE_DEMAND_TO_LIVE_FOREVER_YOUTUBE_ID}`,
  durationMinutes: CREATING_THE_DEMAND_TO_LIVE_FOREVER_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function CreatingTheDemandToLiveForeverPage() {
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
      <CreatingTheDemandToLiveForeverPageContent />
    </>
  );
}
