import { ValueCreatorPageContent } from "@/components/value-creator/value-creator-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { VALUE_CREATOR_DATES, VALUE_CREATOR_META_TITLE, VALUE_CREATOR_PATH } from "@/lib/value-creator-data";
import { VALUE_CREATOR_FAQ } from "@/lib/value-creator-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = VALUE_CREATOR_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Value creator vs. value producer: burden of life, work as play, Division of Essence, and the God-Man. Neothink Concepts article on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#vc-intro-lead", "#vc-quick-title", "#vc-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${VALUE_CREATOR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${VALUE_CREATOR_DATES.datePublished}T11:00:00.000Z`,
    modifiedTime: `${VALUE_CREATOR_DATES.dateModified}T01:57:54.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Value creator", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${VALUE_CREATOR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${VALUE_CREATOR_DATES.datePublished}T11:00:00.000Z`,
  dateModified: `${VALUE_CREATOR_DATES.dateModified}T01:57:54.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: VALUE_CREATOR_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${VALUE_CREATOR_DATES.datePublished}T11:00:00.000Z`,
  dateModified: `${VALUE_CREATOR_DATES.dateModified}T01:57:54.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, VALUE_CREATOR_FAQ);

export default function ValueCreatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ValueCreatorPageContent />
    </>
  );
}
