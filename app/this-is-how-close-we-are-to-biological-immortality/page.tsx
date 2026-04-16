import { ThisIsHowCloseWeAreToBiologicalImmortalityPageContent } from "@/components/this-is-how-close-we-are-to-biological-immortality/this-is-how-close-we-are-to-biological-immortality-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  HCBI_DATES,
  HCBI_IMAGE,
  HCBI_META_TITLE,
  HCBI_PATH,
  HCBI_QUICK_ANSWER_REST,
} from "@/lib/this-is-how-close-we-are-to-biological-immortality-data";
import { HCBI_FAQ } from "@/lib/this-is-how-close-we-are-to-biological-immortality-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HCBI_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = HCBI_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#hcbi-intro-lead",
  "#hcbi-quick-title",
  "#hcbi-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${HCBI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${HCBI_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${HCBI_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "This is How Close We Are to Biological Immortality", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${HCBI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${HCBI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HCBI_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HCBI_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${HCBI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HCBI_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: HCBI_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, HCBI_FAQ);

export default function ThisIsHowCloseWeAreToBiologicalImmortalityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ThisIsHowCloseWeAreToBiologicalImmortalityPageContent />
    </>
  );
}
