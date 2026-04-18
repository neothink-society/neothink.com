import { HowJobsWillChangePageContent } from "@/components/how-jobs-will-change/how-jobs-will-change-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  HOW_JOBS_WILL_CHANGE_DATES,
  HOW_JOBS_WILL_CHANGE_HEADLINE,
  HOW_JOBS_WILL_CHANGE_META_DESCRIPTION,
  HOW_JOBS_WILL_CHANGE_PATH,
  HOW_JOBS_WILL_CHANGE_SEO_TITLE,
  HOW_JOBS_WILL_CHANGE_VIDEO_RUNTIME_MINUTES,
  HOW_JOBS_WILL_CHANGE_YOUTUBE_ID,
} from "@/lib/how-jobs-will-change-data";
import { HOW_JOBS_WILL_CHANGE_FAQ } from "@/lib/how-jobs-will-change-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HOW_JOBS_WILL_CHANGE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${HOW_JOBS_WILL_CHANGE_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#hjwc-intro-lead", "#hjwc-quick-title", "#hjwc-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: HOW_JOBS_WILL_CHANGE_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${HOW_JOBS_WILL_CHANGE_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${HOW_JOBS_WILL_CHANGE_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-12T20:10:10.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: HOW_JOBS_WILL_CHANGE_SEO_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: HOW_JOBS_WILL_CHANGE_META_DESCRIPTION,
  datePublished: `${HOW_JOBS_WILL_CHANGE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:10.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HOW_JOBS_WILL_CHANGE_HEADLINE,
  description: HOW_JOBS_WILL_CHANGE_META_DESCRIPTION,
  datePublished: `${HOW_JOBS_WILL_CHANGE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:10.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, HOW_JOBS_WILL_CHANGE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "How Jobs Will Change in 2026 — Neothink Philosophy (Mark Hamilton)",
  description: HOW_JOBS_WILL_CHANGE_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${HOW_JOBS_WILL_CHANGE_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${HOW_JOBS_WILL_CHANGE_YOUTUBE_ID}`,
  durationMinutes: HOW_JOBS_WILL_CHANGE_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function HowJobsWillChangePage() {
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
      <HowJobsWillChangePageContent />
    </>
  );
}
