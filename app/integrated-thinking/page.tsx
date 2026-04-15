import { IntegratedThinkingPageContent } from "@/components/integrated-thinking/integrated-thinking-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  INTEGRATED_THINKING_DATES,
  INTEGRATED_THINKING_META_TITLE,
  INTEGRATED_THINKING_PATH,
} from "@/lib/integrated-thinking-data";
import { INTEGRATED_THINKING_FAQ } from "@/lib/integrated-thinking-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = INTEGRATED_THINKING_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Integrated thinking: percepts, concepts, puzzle-pictures, Neothinking, and tools like the Ten-Second Miracle. Neothink Concepts article on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#itc-intro-lead", "#itc-quick-title", "#itc-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${INTEGRATED_THINKING_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${INTEGRATED_THINKING_DATES.datePublished}T11:00:00.000Z`,
    modifiedTime: `${INTEGRATED_THINKING_DATES.dateModified}T01:57:43.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Integrated thinking", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${INTEGRATED_THINKING_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${INTEGRATED_THINKING_DATES.datePublished}T11:00:00.000Z`,
  dateModified: `${INTEGRATED_THINKING_DATES.dateModified}T01:57:43.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: INTEGRATED_THINKING_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${INTEGRATED_THINKING_DATES.datePublished}T11:00:00.000Z`,
  dateModified: `${INTEGRATED_THINKING_DATES.dateModified}T01:57:43.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, INTEGRATED_THINKING_FAQ);

export default function IntegratedThinkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <IntegratedThinkingPageContent />
    </>
  );
}
