import { StrategicBriefingForPresidentsPageContent } from "@/components/strategic-briefing-for-presidents/strategic-briefing-for-presidents-page-content";
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
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_DATES,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_HEADLINE,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_META_DESCRIPTION,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_PATH,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_SEO_TITLE,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_VIDEO_RUNTIME_MINUTES,
  STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID,
} from "@/lib/strategic-briefing-for-presidents-data";
import { STRATEGIC_BRIEFING_FOR_PRESIDENTS_FAQ } from "@/lib/strategic-briefing-for-presidents-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = STRATEGIC_BRIEFING_FOR_PRESIDENTS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${STRATEGIC_BRIEFING_FOR_PRESIDENTS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#sbfp-intro-lead", "#sbfp-quick-title", "#sbfp-faq-heading"] as const;

const MODIFIED = "2026-02-12T16:39:59.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: STRATEGIC_BRIEFING_FOR_PRESIDENTS_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${STRATEGIC_BRIEFING_FOR_PRESIDENTS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Strategic briefing for presidents", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: STRATEGIC_BRIEFING_FOR_PRESIDENTS_META_DESCRIPTION,
  datePublished: `${STRATEGIC_BRIEFING_FOR_PRESIDENTS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: STRATEGIC_BRIEFING_FOR_PRESIDENTS_HEADLINE,
  description: STRATEGIC_BRIEFING_FOR_PRESIDENTS_META_DESCRIPTION,
  datePublished: `${STRATEGIC_BRIEFING_FOR_PRESIDENTS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, STRATEGIC_BRIEFING_FOR_PRESIDENTS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "A Strategic Briefing for Presidents: The Structural Fix for Civilization — Neothink Society address (Mark Hamilton)",
  description: STRATEGIC_BRIEFING_FOR_PRESIDENTS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${STRATEGIC_BRIEFING_FOR_PRESIDENTS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${STRATEGIC_BRIEFING_FOR_PRESIDENTS_YOUTUBE_ID}`,
  durationMinutes: STRATEGIC_BRIEFING_FOR_PRESIDENTS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function StrategicBriefingForPresidentsPage() {
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
      <StrategicBriefingForPresidentsPageContent />
    </>
  );
}
