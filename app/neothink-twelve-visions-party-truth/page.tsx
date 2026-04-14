import { NeothinkTwelveVisionsPartyTruthPageContent } from "@/components/neothink-twelve-visions-party-truth/neothink-twelve-visions-party-truth-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { NTV_TRUTH_DATES, NTV_TRUTH_IMAGE, NTV_TRUTH_PATH } from "@/lib/neothink-twelve-visions-party-truth-data";
import { NTV_TRUTH_FAQ } from "@/lib/neothink-twelve-visions-party-truth-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = NTV_TRUTH_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Neothink and the Twelve Visions Party: Society summary, legitimacy, coercion vs creativity, and how to get involved. Agency-era article preserved from WordPress; published by the Neothink Institute as public context.";

const SPEAKABLE_NTV = [
  "main#main-content h1",
  "#ntv-intro-lead",
  "#ntv-a-clear-neothink-society-summary-that-cuts-through-the-noise-h",
  "#ntv-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "Neothink And The Twelve Visions Party: The Untold Truth | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${NTV_TRUTH_DATES.datePublished}T12:01:53.000Z`,
    modifiedTime: `${NTV_TRUTH_DATES.dateModified}T15:53:18.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink & Twelve Visions Party", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Neothink And The Twelve Visions Party: The Untold Truth | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${NTV_TRUTH_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${NTV_TRUTH_DATES.dateModified}T15:53:18.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NTV,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Neothink And The Twelve Visions Party: The Untold Truth",
  description: DESCRIPTION,
  datePublished: `${NTV_TRUTH_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${NTV_TRUTH_DATES.dateModified}T15:53:18.000Z`,
  authorId: schemaIds.organization,
  image: NTV_TRUTH_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NTV_TRUTH_FAQ);

export default function NeothinkTwelveVisionsPartyTruthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkTwelveVisionsPartyTruthPageContent />
    </>
  );
}
