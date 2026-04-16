import { NewCountryWithNoTaxesPageContent } from "@/components/new-country-with-no-taxes/new-country-with-no-taxes-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NCNT_DATES,
  NCNT_IMAGE,
  NCNT_META_TITLE,
  NCNT_PATH,
  NCNT_QUICK_ANSWER_REST,
} from "@/lib/new-country-with-no-taxes-data";
import { NCNT_FAQ } from "@/lib/new-country-with-no-taxes-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = NCNT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = NCNT_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#ncnt-intro-lead",
  "#ncnt-quick-title",
  "#ncnt-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${NCNT_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${NCNT_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${NCNT_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "A New Country with No Taxes?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NCNT_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${NCNT_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${NCNT_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NCNT_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${NCNT_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${NCNT_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: NCNT_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NCNT_FAQ);

export default function NewCountryWithNoTaxesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NewCountryWithNoTaxesPageContent />
    </>
  );
}
