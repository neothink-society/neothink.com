import { TheSecretToAWealthyHealthyPeacefulCountryPageContent } from "@/components/the-secret-to-a-wealthy-healthy-peaceful-country/the-secret-to-a-wealthy-healthy-peaceful-country-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  SWHPC_DATES,
  SWHPC_IMAGE,
  SWHPC_META_TITLE,
  SWHPC_PATH,
  SWHPC_QUICK_ANSWER_REST,
} from "@/lib/the-secret-to-a-wealthy-healthy-peaceful-country-data";
import { SWHPC_FAQ } from "@/lib/the-secret-to-a-wealthy-healthy-peaceful-country-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SWHPC_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = SWHPC_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#swhpc-intro-lead",
  "#swhpc-quick-title",
  "#swhpc-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${SWHPC_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: SWHPC_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${SWHPC_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${SWHPC_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "The Secret to a Wealthy, Healthy, and Peaceful Country", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SWHPC_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${SWHPC_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SWHPC_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SWHPC_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${SWHPC_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SWHPC_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: SWHPC_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, SWHPC_FAQ);

export default function TheSecretToAWealthyHealthyPeacefulCountryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TheSecretToAWealthyHealthyPeacefulCountryPageContent />
    </>
  );
}
