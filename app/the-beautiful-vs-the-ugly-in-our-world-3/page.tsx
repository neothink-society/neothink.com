import { TheBeautifulVsTheUglyInOurWorld3PageContent } from "@/components/the-beautiful-vs-the-ugly-in-our-world-3/the-beautiful-vs-the-ugly-in-our-world-3-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_DATES,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_HEADLINE,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_META_DESCRIPTION,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_PATH,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_SEO_TITLE,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_VIDEO_RUNTIME_MINUTES,
  THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID,
} from "@/lib/the-beautiful-vs-the-ugly-in-our-world-3-data";
import { THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_FAQ } from "@/lib/the-beautiful-vs-the-ugly-in-our-world-3-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#bvuw-intro-lead", "#bvuw-quick-title", "#bvuw-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-14T03:55:08.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_SEO_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_META_DESCRIPTION,
  datePublished: `${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-14T03:55:08.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_HEADLINE,
  description: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_META_DESCRIPTION,
  datePublished: `${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-14T03:55:08.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Beautiful vs. the Ugly in Our World — Neothink Philosophy (Mark Hamilton)",
  description: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_YOUTUBE_ID}`,
  durationMinutes: THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheBeautifulVsTheUglyInOurWorld3Page() {
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
      <TheBeautifulVsTheUglyInOurWorld3PageContent />
    </>
  );
}
