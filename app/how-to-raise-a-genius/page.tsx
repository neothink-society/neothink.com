import { HowToRaiseAGeniusPageContent } from "@/components/how-to-raise-a-genius/how-to-raise-a-genius-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  HTRG_DATES,
  HTRG_IMAGE,
  HTRG_META_TITLE,
  HTRG_PATH,
} from "@/lib/how-to-raise-a-genius-data";
import { HTRG_FAQ } from "@/lib/how-to-raise-a-genius-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HTRG_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Mark Hamilton on the one question that breaks a child out of the following mode and opens the inner mind space: “What did you THINK about that?” How introspection seeds curiosity, vectors, and super achievement.";

const SPEAKABLE = [
  "main#main-content h1",
  "#htrg-intro-lead",
  "#htrg-quick-title",
  "#htrg-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${HTRG_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: HTRG_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${HTRG_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${HTRG_DATES.dateModified}T02:58:36.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "How to raise a genius", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${HTRG_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${HTRG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HTRG_DATES.dateModified}T02:58:36.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HTRG_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${HTRG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HTRG_DATES.dateModified}T02:58:36.000Z`,
  authorId: schemaIds.organization,
  image: HTRG_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, HTRG_FAQ);

export default function HowToRaiseAGeniusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HowToRaiseAGeniusPageContent />
    </>
  );
}
