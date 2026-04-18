import { MarkHamiltonsNeothinkSurprisingLogicPageContent } from "@/components/mark-hamiltons-neothink-surprising-logic/mark-hamiltons-neothink-surprising-logic-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  MHNSL_DATES,
  MHNSL_HEADLINE,
  MHNSL_IMAGE,
  MHNSL_PATH,
} from "@/lib/mark-hamiltons-neothink-surprising-logic-data";
import { MHNSL_FAQ } from "@/lib/mark-hamiltons-neothink-surprising-logic-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = MHNSL_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Mark Hamilton’s Neothink: logic and structure over mysticism, the shift from following mode to thinking mode, creation-driven life, community, and long-term vision. WordPress-migrated Society article on neothink.com.";

const SPEAKABLE_MHNSL = [
  "main#main-content h1",
  "#mhnsl-intro-lead",
  "#mhnsl-a-new-approach-to-thought-and-action-h",
  "#mhnsl-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${MHNSL_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: MHNSL_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${MHNSL_DATES.datePublished}T09:30:26.000Z`,
    modifiedTime: `${MHNSL_DATES.dateModified}T05:10:11.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Mark Hamilton’s Neothink: surprising logic", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MHNSL_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${MHNSL_DATES.datePublished}T09:30:26.000Z`,
  dateModified: `${MHNSL_DATES.dateModified}T05:10:11.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MHNSL,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MHNSL_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${MHNSL_DATES.datePublished}T09:30:26.000Z`,
  dateModified: `${MHNSL_DATES.dateModified}T05:10:11.000Z`,
  authorId: schemaIds.organization,
  image: MHNSL_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, MHNSL_FAQ);

export default function MarkHamiltonsNeothinkSurprisingLogicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <MarkHamiltonsNeothinkSurprisingLogicPageContent />
    </>
  );
}
