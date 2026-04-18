import { SelfLeaderSecretPageContent } from "@/components/self-leader-secret/self-leader-secret-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  defaultOpenGraphImageUrl,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  SELF_LEADER_SECRET_DATES,
  SELF_LEADER_SECRET_META_TITLE,
  SELF_LEADER_SECRET_PATH,
} from "@/lib/self-leader-secret-data";
import { SELF_LEADER_SECRET_FAQ } from "@/lib/self-leader-secret-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SELF_LEADER_SECRET_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "The self-leader secret: seven steps from following mode to value creation, integrated thinking, and the Neothink mentality. Neothink Concepts article on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#sls-intro-lead", "#sls-quick-title", "#sls-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${SELF_LEADER_SECRET_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: defaultOpenGraphImageUrl(),
    alt: `${SELF_LEADER_SECRET_META_TITLE} | ${siteConfig.name}`,
    width: 1200,
    height: 630,
  },
  ogType: "article",
  article: {
    publishedTime: `${SELF_LEADER_SECRET_DATES.datePublished}T23:00:00.000Z`,
    modifiedTime: `${SELF_LEADER_SECRET_DATES.dateModified}T01:57:32.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Self-leader secret", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SELF_LEADER_SECRET_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${SELF_LEADER_SECRET_DATES.datePublished}T23:00:00.000Z`,
  dateModified: `${SELF_LEADER_SECRET_DATES.dateModified}T01:57:32.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SELF_LEADER_SECRET_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${SELF_LEADER_SECRET_DATES.datePublished}T23:00:00.000Z`,
  dateModified: `${SELF_LEADER_SECRET_DATES.dateModified}T01:57:32.000Z`,
  authorId: schemaIds.organization,
  image: defaultOpenGraphImageUrl(),
});

const faqLd = faqPageJsonLd(PATH, SELF_LEADER_SECRET_FAQ);

export default function SelfLeaderSecretPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SelfLeaderSecretPageContent />
    </>
  );
}
