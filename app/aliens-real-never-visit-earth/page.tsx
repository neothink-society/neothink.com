import { AliensRealNeverVisitEarthPageContent } from "@/components/aliens-real-never-visit-earth/aliens-real-never-visit-earth-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  ARNV_DATES,
  ARNV_IMAGE,
  ARNV_META_TITLE,
  ARNV_PATH,
  ARNV_QUICK_ANSWER_REST,
} from "@/lib/aliens-real-never-visit-earth-data";
import { ARNV_FAQ } from "@/lib/aliens-real-never-visit-earth-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = ARNV_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = ARNV_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#arnv-intro-lead",
  "#arnv-quick-title",
  "#arnv-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${ARNV_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: ARNV_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${ARNV_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${ARNV_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Aliens Are Real… But They’ll Never Visit Earth", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${ARNV_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${ARNV_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${ARNV_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ARNV_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${ARNV_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${ARNV_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: ARNV_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, ARNV_FAQ);

export default function AliensRealNeverVisitEarthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <AliensRealNeverVisitEarthPageContent />
    </>
  );
}
