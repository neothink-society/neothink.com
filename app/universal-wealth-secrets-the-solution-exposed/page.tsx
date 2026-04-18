import { UniversalWealthSecretsTheSolutionExposedPageContent } from "@/components/universal-wealth-secrets-the-solution-exposed/universal-wealth-secrets-the-solution-exposed-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  UWSSE_DATES,
  UWSSE_IMAGE,
  UWSSE_META_TITLE,
  UWSSE_PATH,
  UWSSE_YOUTUBE_ID,
  UWSSE_QUICK_ANSWER_REST,
} from "@/lib/universal-wealth-secrets-the-solution-exposed-data";
import { UWSSE_FAQ } from "@/lib/universal-wealth-secrets-the-solution-exposed-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = UWSSE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = UWSSE_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#uwsse-intro-lead",
  "#uwsse-quick-title",
  "#uwsse-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${UWSSE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: UWSSE_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${UWSSE_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${UWSSE_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Universal Wealth Secrets", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${UWSSE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${UWSSE_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${UWSSE_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: UWSSE_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${UWSSE_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${UWSSE_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: UWSSE_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, UWSSE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${UWSSE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${UWSSE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${UWSSE_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${UWSSE_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${UWSSE_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function UniversalWealthSecretsTheSolutionExposedPage() {
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
      <UniversalWealthSecretsTheSolutionExposedPageContent />
    </>
  );
}
