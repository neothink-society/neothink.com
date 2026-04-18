import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  DEAL_WITH_FINANCIAL_STRESS_BODY_HTML,
  DEAL_WITH_FINANCIAL_STRESS_DATES,
  DEAL_WITH_FINANCIAL_STRESS_DESCRIPTION,
  DEAL_WITH_FINANCIAL_STRESS_HEADLINE,
  DEAL_WITH_FINANCIAL_STRESS_IMAGE,
  DEAL_WITH_FINANCIAL_STRESS_INTRO_PARAS,
  DEAL_WITH_FINANCIAL_STRESS_META_TITLE,
  DEAL_WITH_FINANCIAL_STRESS_MIN_READ,
  DEAL_WITH_FINANCIAL_STRESS_PATH,
} from "@/lib/agency-posts/deal-with-financial-stress";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = DEAL_WITH_FINANCIAL_STRESS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#deal-with-financial-stress-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${DEAL_WITH_FINANCIAL_STRESS_META_TITLE} | Neothink Institute`,
  description: DEAL_WITH_FINANCIAL_STRESS_DESCRIPTION,
  pathname: PATH,
  articleOgImage: DEAL_WITH_FINANCIAL_STRESS_IMAGE,
  ogType: "article",
  article: {
    publishedTime: DEAL_WITH_FINANCIAL_STRESS_DATES.datePublished,
    modifiedTime: DEAL_WITH_FINANCIAL_STRESS_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How to Deal With Financial Stress and Build a Solid Financial Foundation", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${DEAL_WITH_FINANCIAL_STRESS_META_TITLE} | Neothink Institute`,
  description: DEAL_WITH_FINANCIAL_STRESS_DESCRIPTION,
  datePublished: DEAL_WITH_FINANCIAL_STRESS_DATES.datePublished,
  dateModified: DEAL_WITH_FINANCIAL_STRESS_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: DEAL_WITH_FINANCIAL_STRESS_META_TITLE,
  description: DEAL_WITH_FINANCIAL_STRESS_DESCRIPTION,
  datePublished: DEAL_WITH_FINANCIAL_STRESS_DATES.datePublished,
  dateModified: DEAL_WITH_FINANCIAL_STRESS_DATES.dateModified,
  authorId: schemaIds.organization,
  image: DEAL_WITH_FINANCIAL_STRESS_IMAGE.src,
});

const DEFAULT_RELATED = [
  {
    title: "What is the Neothink Society?",
    description: "Public overview of programs, Project Life, and membership.",
    href: "/faq",
  },
  {
    title: "Mark Hamilton",
    description: "Founder of Neothink Institute and author of the manuscripts.",
    href: "/mark-hamilton",
  },
  {
    title: "Neothink manuscripts",
    description: "Where the movement's ideas are written down in full.",
    href: "/manuscripts",
  },
  {
    title: "Free courses",
    description: "Start learning Neothink without any cost.",
    href: "/free-courses",
  },
] as const;

export default function DealWithFinancialStressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="deal-with-financial-stress"
        headline={DEAL_WITH_FINANCIAL_STRESS_HEADLINE}
        introParas={DEAL_WITH_FINANCIAL_STRESS_INTRO_PARAS}
        image={DEAL_WITH_FINANCIAL_STRESS_IMAGE}
        minReadLabel={DEAL_WITH_FINANCIAL_STRESS_MIN_READ}
        bodyHtml={DEAL_WITH_FINANCIAL_STRESS_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
