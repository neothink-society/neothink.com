import { ANewCountryTheGreatExperimentCalledImmortalisPageContent } from "@/components/a-new-country-the-great-experiment-called-immortalis/a-new-country-the-great-experiment-called-immortalis-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_DATES,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_HEADLINE,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_META_DESCRIPTION,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_PATH,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_SEO_TITLE,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/a-new-country-the-great-experiment-called-immortalis-data";
import { A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_FAQ } from "@/lib/a-new-country-the-great-experiment-called-immortalis-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#anci-intro-lead", "#anci-quick-title", "#anci-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-14T04:13:18.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_SEO_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-14T04:13:18.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_HEADLINE,
  description: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-14T04:13:18.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "A New Country: The Great Experiment Called Immortalis — Neothink Philosophy (Mark Hamilton)",
  description: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_YOUTUBE_ID}`,
  durationMinutes: A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function ANewCountryTheGreatExperimentCalledImmortalisPage() {
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
      <ANewCountryTheGreatExperimentCalledImmortalisPageContent />
    </>
  );
}
