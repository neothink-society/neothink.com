import { TruthAboutNeothinkSocietyPageContent } from "@/components/truth-about-neothink-society/truth-about-neothink-society-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  TATNS_DATES,
  TATNS_HEADLINE,
  TATNS_IMAGE,
  TATNS_PATH,
} from "@/lib/truth-about-neothink-society-data";
import { TATNS_FAQ } from "@/lib/truth-about-neothink-society-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = TATNS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Separating fact from fiction on the Neothink Society: reviews, secret-society myths, coaching value, legitimacy, growth paths, and who it may fit. WordPress-migrated Society article on neothink.com.";

const SPEAKABLE_TATNS = [
  "main#main-content h1",
  "#tatns-intro-lead",
  "#tatns-what-is-the-neothink-society-h",
  "#tatns-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${TATNS_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${TATNS_DATES.datePublished}T06:16:00.000Z`,
    modifiedTime: `${TATNS_DATES.dateModified}T05:10:31.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Truth about the Neothink Society", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${TATNS_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${TATNS_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${TATNS_DATES.dateModified}T05:10:31.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_TATNS,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: TATNS_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${TATNS_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${TATNS_DATES.dateModified}T05:10:31.000Z`,
  authorId: schemaIds.organization,
  image: TATNS_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, TATNS_FAQ);

export default function TruthAboutNeothinkSocietyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TruthAboutNeothinkSocietyPageContent />
    </>
  );
}
