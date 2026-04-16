import { EscapeTheMatrixNowPageContent } from "@/components/escape-the-matrix-now/escape-the-matrix-now-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  EMN_DATES,
  EMN_IMAGE,
  EMN_META_TITLE,
  EMN_PATH,
  EMN_QUICK_ANSWER_REST,
} from "@/lib/escape-the-matrix-now-data";
import { EMN_FAQ } from "@/lib/escape-the-matrix-now-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = EMN_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = EMN_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#emn-intro-lead",
  "#emn-quick-title",
  "#emn-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${EMN_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${EMN_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${EMN_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Escape the Matrix NOW", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${EMN_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${EMN_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${EMN_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: EMN_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${EMN_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${EMN_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: EMN_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, EMN_FAQ);

export default function EscapeTheMatrixNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <EscapeTheMatrixNowPageContent />
    </>
  );
}
