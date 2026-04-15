import { WhatAllPhilosophiesGetWrongPageContent } from "@/components/what-all-philosophies-get-wrong/what-all-philosophies-get-wrong-page-content";
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
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_DATES,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_HEADLINE,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_META_DESCRIPTION,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_PATH,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_SEO_TITLE,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_VIDEO_RUNTIME_MINUTES,
  WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID,
} from "@/lib/what-all-philosophies-get-wrong-data";
import { WHAT_ALL_PHILOSOPHIES_GET_WRONG_FAQ } from "@/lib/what-all-philosophies-get-wrong-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = WHAT_ALL_PHILOSOPHIES_GET_WRONG_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${WHAT_ALL_PHILOSOPHIES_GET_WRONG_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#wap-intro-lead", "#wap-quick-title", "#wap-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: WHAT_ALL_PHILOSOPHIES_GET_WRONG_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${WHAT_ALL_PHILOSOPHIES_GET_WRONG_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: "2026-02-10T19:44:17.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What all philosophies get wrong", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: WHAT_ALL_PHILOSOPHIES_GET_WRONG_META_DESCRIPTION,
  datePublished: `${WHAT_ALL_PHILOSOPHIES_GET_WRONG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: "2026-02-10T19:44:17.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WHAT_ALL_PHILOSOPHIES_GET_WRONG_HEADLINE,
  description: WHAT_ALL_PHILOSOPHIES_GET_WRONG_META_DESCRIPTION,
  datePublished: `${WHAT_ALL_PHILOSOPHIES_GET_WRONG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: "2026-02-10T19:44:17.000Z",
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, WHAT_ALL_PHILOSOPHIES_GET_WRONG_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "What All Philosophies Get Wrong — Neothink Society address (Mark Hamilton)",
  description: WHAT_ALL_PHILOSOPHIES_GET_WRONG_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${WHAT_ALL_PHILOSOPHIES_GET_WRONG_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${WHAT_ALL_PHILOSOPHIES_GET_WRONG_YOUTUBE_ID}`,
  durationMinutes: WHAT_ALL_PHILOSOPHIES_GET_WRONG_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function WhatAllPhilosophiesGetWrongPage() {
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
      <WhatAllPhilosophiesGetWrongPageContent />
    </>
  );
}
