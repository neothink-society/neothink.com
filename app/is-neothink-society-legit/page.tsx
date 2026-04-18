import { IsNeothinkSocietyLegitPageContent } from "@/components/is-neothink-society-legit/is-neothink-society-legit-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { INSL_DATES, INSL_HEADLINE, INSL_IMAGE, INSL_PATH } from "@/lib/is-neothink-society-legit-data";
import { INSL_FAQ } from "@/lib/is-neothink-society-legit-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = INSL_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Is the Neothink Society legit? How it works, secret-society myths, what people say, philosophy, expectations, and fit. WordPress-migrated Society article on neothink.com.";

const SPEAKABLE_INSL = [
  "main#main-content h1",
  "#insl-intro-lead",
  "#insl-what-is-the-neothink-society-h",
  "#insl-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${INSL_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: INSL_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${INSL_DATES.datePublished}T06:16:00.000Z`,
    modifiedTime: `${INSL_DATES.dateModified}T05:10:35.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Is the Neothink Society legit", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${INSL_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${INSL_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${INSL_DATES.dateModified}T05:10:35.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_INSL,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: INSL_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${INSL_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${INSL_DATES.dateModified}T05:10:35.000Z`,
  authorId: schemaIds.organization,
  image: INSL_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, INSL_FAQ);

export default function IsNeothinkSocietyLegitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <IsNeothinkSocietyLegitPageContent />
    </>
  );
}
