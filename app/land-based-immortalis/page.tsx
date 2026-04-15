import { LandBasedImmortalisPageContent } from "@/components/land-based-immortalis/land-based-immortalis-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  LAND_BASED_IMMORTALIS_DATES,
  LAND_BASED_IMMORTALIS_META_TITLE,
  LAND_BASED_IMMORTALIS_PATH,
} from "@/lib/land-based-immortalis-data";
import { LAND_BASED_IMMORTALIS_FAQ } from "@/lib/land-based-immortalis-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = LAND_BASED_IMMORTALIS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Land-based Immortalis: European MOU, U.S. federal land, Argentina, and the biomedical freedom zone — Neothink Philosophy progress report on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#lbi-intro-lead", "#lbi-quick-title", "#lbi-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${LAND_BASED_IMMORTALIS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Land-based Immortalis", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${LAND_BASED_IMMORTALIS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: LAND_BASED_IMMORTALIS_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, LAND_BASED_IMMORTALIS_FAQ);

export default function LandBasedImmortalisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <LandBasedImmortalisPageContent />
    </>
  );
}
