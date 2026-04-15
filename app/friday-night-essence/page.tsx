import { FridayNightEssencePageContent } from "@/components/friday-night-essence/friday-night-essence-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  FRIDAY_NIGHT_ESSENCE_DATES,
  FRIDAY_NIGHT_ESSENCE_META_TITLE,
  FRIDAY_NIGHT_ESSENCE_PATH,
} from "@/lib/friday-night-essence-data";
import { FRIDAY_NIGHT_ESSENCE_FAQ } from "@/lib/friday-night-essence-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = FRIDAY_NIGHT_ESSENCE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Friday-Night Essence: your deepest motivational root, Downstream Focus, and the path from producer to value creator. Neothink Concepts article on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#fne-intro-lead", "#fne-quick-title", "#fne-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${FRIDAY_NIGHT_ESSENCE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${FRIDAY_NIGHT_ESSENCE_DATES.datePublished}T23:04:47.000Z`,
    modifiedTime: `${FRIDAY_NIGHT_ESSENCE_DATES.dateModified}T01:57:20.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Friday-Night Essence", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FRIDAY_NIGHT_ESSENCE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${FRIDAY_NIGHT_ESSENCE_DATES.datePublished}T23:04:47.000Z`,
  dateModified: `${FRIDAY_NIGHT_ESSENCE_DATES.dateModified}T01:57:20.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FRIDAY_NIGHT_ESSENCE_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${FRIDAY_NIGHT_ESSENCE_DATES.datePublished}T23:04:47.000Z`,
  dateModified: `${FRIDAY_NIGHT_ESSENCE_DATES.dateModified}T01:57:20.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, FRIDAY_NIGHT_ESSENCE_FAQ);

export default function FridayNightEssencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <FridayNightEssencePageContent />
    </>
  );
}
