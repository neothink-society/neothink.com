import { NeothinkMovementFinancialIndependencePageContent } from "@/components/neothink-movement-financial-independence/neothink-movement-financial-independence-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NMFI_DATES,
  NMFI_HEADLINE,
  NMFI_IMAGE,
  NMFI_PATH,
} from "@/lib/neothink-movement-financial-independence-data";
import { NMFI_FAQ } from "@/lib/neothink-movement-financial-independence-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = NMFI_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How the Neothink Movement supports financial independence: entrepreneurship, value creation, planning, risk, integrated thinking, decisions, and motivation. WordPress-migrated Society article on neothink.com.";

const SPEAKABLE_NMFI = [
  "main#main-content h1",
  "#nmfi-intro-lead",
  "#nmfi-encourages-entrepreneurship-by-providing-tools-for-business-success-h",
  "#nmfi-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${NMFI_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: NMFI_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${NMFI_DATES.datePublished}T12:49:19.000Z`,
    modifiedTime: `${NMFI_DATES.dateModified}T16:01:08.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Movement & financial independence", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NMFI_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${NMFI_DATES.datePublished}T12:49:19.000Z`,
  dateModified: `${NMFI_DATES.dateModified}T16:01:08.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NMFI,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NMFI_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${NMFI_DATES.datePublished}T12:49:19.000Z`,
  dateModified: `${NMFI_DATES.dateModified}T16:01:08.000Z`,
  authorId: schemaIds.organization,
  image: NMFI_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NMFI_FAQ);

export default function NeothinkMovementFinancialIndependencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkMovementFinancialIndependencePageContent />
    </>
  );
}
