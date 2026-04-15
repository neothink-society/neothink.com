import { LibertariansNextBigPossibilityPageContent } from "@/components/libertarians-next-big-possibility/libertarians-next-big-possibility-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_TITLE,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_PATH,
} from "@/lib/libertarians-next-big-possibility-data";
import { LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ } from "@/lib/libertarians-next-big-possibility-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = LIBERTARIANS_NEXT_BIG_POSSIBILITY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Prime Law capitalism: governance without government, order without rule of man, and why anarcho-capitalism needed the Prime Law — Neothink Philosophy on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#lnb-intro-lead", "#lnb-quick-title", "#lnb-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Libertarians’ next big possibility", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ);

export default function LibertariansNextBigPossibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <LibertariansNextBigPossibilityPageContent />
    </>
  );
}
