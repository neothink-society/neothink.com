import { TrumpsVictoryBeginningNewEraPageContent } from "@/components/trumps-victory-beginning-new-era/trumps-victory-beginning-new-era-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  TVBNE_DATES,
  TVBNE_IMAGE,
  TVBNE_META_TITLE,
  TVBNE_PATH,
  TVBNE_QUICK_ANSWER_REST,
} from "@/lib/trumps-victory-beginning-new-era-data";
import { TVBNE_FAQ } from "@/lib/trumps-victory-beginning-new-era-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = TVBNE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = TVBNE_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#tvbne-intro-lead",
  "#tvbne-quick-title",
  "#tvbne-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${TVBNE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${TVBNE_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${TVBNE_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Is Trump’s Victory the Beginning of a New Era?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${TVBNE_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${TVBNE_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${TVBNE_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: TVBNE_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${TVBNE_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${TVBNE_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: TVBNE_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, TVBNE_FAQ);

export default function TrumpsVictoryBeginningNewEraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TrumpsVictoryBeginningNewEraPageContent />
    </>
  );
}
