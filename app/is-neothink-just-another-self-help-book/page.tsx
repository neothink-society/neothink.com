import { IsNeothinkSelfHelpBookPageContent } from "@/components/is-neothink-self-help-book/is-neothink-self-help-book-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  IS_NEOTHINK_SELF_HELP_DATES,
  IS_NEOTHINK_SELF_HELP_IMAGE,
  IS_NEOTHINK_SELF_HELP_PATH,
} from "@/lib/is-neothink-self-help-book-data";
import { IS_NEOTHINK_SELF_HELP_FAQ } from "@/lib/is-neothink-self-help-book-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./shb-page.css";

const PATH = IS_NEOTHINK_SELF_HELP_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Is Neothink just another self-help book? How Neothink literature, integrated thinking, Society programs, and longevity initiatives are framed versus quick motivational reading. Public article on neothink.com.";

const SPEAKABLE_SHB = [
  "main#main-content h1",
  "#shb-intro-lead",
  "#shb-neothink-book-summary-understanding-the-foundation-h",
  "#shb-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "Is Neothink Just Another Self-Help Book? | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${IS_NEOTHINK_SELF_HELP_DATES.datePublished}T12:01:53.000Z`,
    modifiedTime: `${IS_NEOTHINK_SELF_HELP_DATES.dateModified}T15:53:55.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Is Neothink self-help?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Is Neothink Just Another Self-Help Book? | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${IS_NEOTHINK_SELF_HELP_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${IS_NEOTHINK_SELF_HELP_DATES.dateModified}T15:53:55.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_SHB,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Is Neothink Just Another Self-Help Book?",
  description: DESCRIPTION,
  datePublished: `${IS_NEOTHINK_SELF_HELP_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${IS_NEOTHINK_SELF_HELP_DATES.dateModified}T15:53:55.000Z`,
  authorId: schemaIds.organization,
  image: IS_NEOTHINK_SELF_HELP_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, IS_NEOTHINK_SELF_HELP_FAQ);

export default function IsNeothinkSelfHelpBookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <IsNeothinkSelfHelpBookPageContent />
    </>
  );
}
