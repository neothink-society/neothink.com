import { LiveLongerPageContent } from "@/components/live-longer/live-longer-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  LIVE_LONGER_DATES,
  LIVE_LONGER_HEADLINE,
  LIVE_LONGER_META_DESCRIPTION,
  LIVE_LONGER_PATH,
  LIVE_LONGER_SEO_TITLE,
  LIVE_LONGER_VIDEO_RUNTIME_MINUTES,
  LIVE_LONGER_YOUTUBE_ID,
} from "@/lib/live-longer-data";
import { LIVE_LONGER_FAQ } from "@/lib/live-longer-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = LIVE_LONGER_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${LIVE_LONGER_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#llong-intro-lead", "#llong-quick-title", "#llong-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: LIVE_LONGER_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${LIVE_LONGER_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-12T20:09:58.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: LIVE_LONGER_SEO_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: LIVE_LONGER_META_DESCRIPTION,
  datePublished: `${LIVE_LONGER_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:09:58.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: LIVE_LONGER_HEADLINE,
  description: LIVE_LONGER_META_DESCRIPTION,
  datePublished: `${LIVE_LONGER_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:09:58.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, LIVE_LONGER_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Live Longer! — Neothink Philosophy (Mark Hamilton)",
  description: LIVE_LONGER_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${LIVE_LONGER_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${LIVE_LONGER_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${LIVE_LONGER_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${LIVE_LONGER_YOUTUBE_ID}`,
  durationMinutes: LIVE_LONGER_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function LiveLongerPage() {
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
      <LiveLongerPageContent />
    </>
  );
}
