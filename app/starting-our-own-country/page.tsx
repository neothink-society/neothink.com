import { StartingOurOwnCountryPageContent } from "@/components/starting-our-own-country/starting-our-own-country-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  STARTING_OUR_OWN_COUNTRY_DATES,
  STARTING_OUR_OWN_COUNTRY_HEADLINE,
  STARTING_OUR_OWN_COUNTRY_META_DESCRIPTION,
  STARTING_OUR_OWN_COUNTRY_PATH,
  STARTING_OUR_OWN_COUNTRY_SEO_TITLE,
  STARTING_OUR_OWN_COUNTRY_VIDEO_RUNTIME_MINUTES,
  STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID,
} from "@/lib/starting-our-own-country-data";
import { STARTING_OUR_OWN_COUNTRY_FAQ } from "@/lib/starting-our-own-country-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = STARTING_OUR_OWN_COUNTRY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${STARTING_OUR_OWN_COUNTRY_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#sooc-intro-lead", "#sooc-quick-title", "#sooc-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: STARTING_OUR_OWN_COUNTRY_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${STARTING_OUR_OWN_COUNTRY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-12T20:10:02.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Starting our own country", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: STARTING_OUR_OWN_COUNTRY_META_DESCRIPTION,
  datePublished: `${STARTING_OUR_OWN_COUNTRY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:02.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: STARTING_OUR_OWN_COUNTRY_HEADLINE,
  description: STARTING_OUR_OWN_COUNTRY_META_DESCRIPTION,
  datePublished: `${STARTING_OUR_OWN_COUNTRY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:02.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, STARTING_OUR_OWN_COUNTRY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Starting Our Own Country Is Closer Than You Think! — Neothink Philosophy (Mark Hamilton)",
  description: STARTING_OUR_OWN_COUNTRY_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${STARTING_OUR_OWN_COUNTRY_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${STARTING_OUR_OWN_COUNTRY_YOUTUBE_ID}`,
  durationMinutes: STARTING_OUR_OWN_COUNTRY_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function StartingOurOwnCountryPage() {
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
      <StartingOurOwnCountryPageContent />
    </>
  );
}
