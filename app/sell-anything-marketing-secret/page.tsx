import { SellAnythingMarketingSecretPageContent } from "@/components/sell-anything-marketing-secret/sell-anything-marketing-secret-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  SAMS_DATES,
  SAMS_IMAGE,
  SAMS_META_TITLE,
  SAMS_PATH,
  SAMS_QUICK_ANSWER_REST,
} from "@/lib/sell-anything-marketing-secret-data";
import { SAMS_FAQ } from "@/lib/sell-anything-marketing-secret-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SAMS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = SAMS_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#sams-intro-lead",
  "#sams-quick-title",
  "#sams-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${SAMS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: SAMS_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${SAMS_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${SAMS_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Want to Sell Anything? Here’s the $350 Million Secret", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SAMS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${SAMS_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SAMS_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SAMS_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${SAMS_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SAMS_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: SAMS_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, SAMS_FAQ);

export default function SellAnythingMarketingSecretPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SellAnythingMarketingSecretPageContent />
    </>
  );
}
