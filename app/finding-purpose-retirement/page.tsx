import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  FINDING_PURPOSE_RETIREMENT_BODY_HTML,
  FINDING_PURPOSE_RETIREMENT_DATES,
  FINDING_PURPOSE_RETIREMENT_DESCRIPTION,
  FINDING_PURPOSE_RETIREMENT_HEADLINE,
  FINDING_PURPOSE_RETIREMENT_IMAGE,
  FINDING_PURPOSE_RETIREMENT_INTRO_PARAS,
  FINDING_PURPOSE_RETIREMENT_META_TITLE,
  FINDING_PURPOSE_RETIREMENT_MIN_READ,
  FINDING_PURPOSE_RETIREMENT_PATH,
} from "@/lib/agency-posts/finding-purpose-retirement";
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

const PATH = FINDING_PURPOSE_RETIREMENT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#finding-purpose-retirement-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${FINDING_PURPOSE_RETIREMENT_META_TITLE} | Neothink Institute`,
  description: FINDING_PURPOSE_RETIREMENT_DESCRIPTION,
  pathname: PATH,
  articleOgImage: FINDING_PURPOSE_RETIREMENT_IMAGE,
  ogType: "article",
  article: {
    publishedTime: FINDING_PURPOSE_RETIREMENT_DATES.datePublished,
    modifiedTime: FINDING_PURPOSE_RETIREMENT_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Embracing Retirement", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FINDING_PURPOSE_RETIREMENT_META_TITLE} | Neothink Institute`,
  description: FINDING_PURPOSE_RETIREMENT_DESCRIPTION,
  datePublished: FINDING_PURPOSE_RETIREMENT_DATES.datePublished,
  dateModified: FINDING_PURPOSE_RETIREMENT_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FINDING_PURPOSE_RETIREMENT_META_TITLE,
  description: FINDING_PURPOSE_RETIREMENT_DESCRIPTION,
  datePublished: FINDING_PURPOSE_RETIREMENT_DATES.datePublished,
  dateModified: FINDING_PURPOSE_RETIREMENT_DATES.dateModified,
  authorId: schemaIds.organization,
  image: FINDING_PURPOSE_RETIREMENT_IMAGE.src,
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

export default function FindingPurposeRetirementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="finding-purpose-retirement"
        headline={FINDING_PURPOSE_RETIREMENT_HEADLINE}
        introParas={FINDING_PURPOSE_RETIREMENT_INTRO_PARAS}
        image={FINDING_PURPOSE_RETIREMENT_IMAGE}
        minReadLabel={FINDING_PURPOSE_RETIREMENT_MIN_READ}
        bodyHtml={FINDING_PURPOSE_RETIREMENT_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
