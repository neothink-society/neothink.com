import { TheGrandExperimentOfOurTimePageContent } from "@/components/the-grand-experiment-of-our-time/the-grand-experiment-of-our-time-page-content";
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
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_HEADLINE,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_DESCRIPTION,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_PATH,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_SEO_TITLE,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_VIDEO_RUNTIME_MINUTES,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID,
} from "@/lib/the-grand-experiment-of-our-time-data";
import { THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ } from "@/lib/the-grand-experiment-of-our-time-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_GRAND_EXPERIMENT_OF_OUR_TIME_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#geo-intro-lead", "#geo-quick-title", "#geo-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.dateModified}T20:09:51.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The grand experiment of our time", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_DESCRIPTION,
  datePublished: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.dateModified}T20:09:51.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_GRAND_EXPERIMENT_OF_OUR_TIME_HEADLINE,
  description: THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_DESCRIPTION,
  datePublished: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.dateModified}T20:09:51.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Grand Experiment of Our Time — Neothink Society address (Mark Hamilton)",
  description: THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_GRAND_EXPERIMENT_OF_OUR_TIME_YOUTUBE_ID}`,
  durationMinutes: THE_GRAND_EXPERIMENT_OF_OUR_TIME_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheGrandExperimentOfOurTimePage() {
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
      <TheGrandExperimentOfOurTimePageContent />
    </>
  );
}
