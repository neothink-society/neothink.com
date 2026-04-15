import { TheGrandExperimentOfOurTimePageContent } from "@/components/the-grand-experiment-of-our-time/the-grand-experiment-of-our-time-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";
import { pageMetadata } from "@/lib/seo-metadata";
import {
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_TITLE,
  THE_GRAND_EXPERIMENT_OF_OUR_TIME_PATH,
} from "@/lib/the-grand-experiment-of-our-time-data";
import { THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ } from "@/lib/the-grand-experiment-of-our-time-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_GRAND_EXPERIMENT_OF_OUR_TIME_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "The grand experiment of our time: America’s founding parallel, the Prime Law, libertarian thought, and Immortalis as medical mecca — Neothink Philosophy on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#geo-intro-lead", "#geo-quick-title", "#geo-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
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
  name: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.dateModified}T20:09:51.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_GRAND_EXPERIMENT_OF_OUR_TIME_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${THE_GRAND_EXPERIMENT_OF_OUR_TIME_DATES.dateModified}T20:09:51.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, THE_GRAND_EXPERIMENT_OF_OUR_TIME_FAQ);

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
      <TheGrandExperimentOfOurTimePageContent />
    </>
  );
}
