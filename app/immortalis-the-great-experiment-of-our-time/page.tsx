import { ImmortalisTheGreatExperimentPageContent } from "@/components/immortalis-the-great-experiment/immortalis-the-great-experiment-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { IGE_DATES, IGE_META_TITLE, IGE_PATH, IGE_YOUTUBE_ID } from "@/lib/immortalis-the-great-experiment-data";
import { IGE_FAQ } from "@/lib/immortalis-the-great-experiment-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = IGE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Immortalis as the great experiment: Prime Law Capitalism, anarcho-capitalism vs order, initiatory force, Prospera, and the American experiment taken to completion. Neothink Philosophy speech on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#ige-intro-lead", "#ige-quick-title", "#ige-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${IGE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${IGE_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${IGE_META_TITLE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${IGE_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${IGE_DATES.dateModified}T17:18:59.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Immortalis: Great Experiment", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${IGE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${IGE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${IGE_DATES.dateModified}T17:18:59.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: IGE_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${IGE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${IGE_DATES.dateModified}T17:18:59.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${IGE_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, IGE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${IGE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${IGE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${IGE_YOUTUBE_ID}/hqdefault.jpg`,
  uploadDate: `${IGE_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${IGE_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function ImmortalisTheGreatExperimentPage() {
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
      <ImmortalisTheGreatExperimentPageContent />
    </>
  );
}
