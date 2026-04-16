import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_BODY_HTML,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DESCRIPTION,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_HEADLINE,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_IMAGE,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_INTRO_PARAS,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_META_TITLE,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_MIN_READ,
  SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_PATH,
} from "@/lib/agency-posts/self-leadership-strategies-empower-yourself";
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

const PATH = SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#self-leadership-strategies-empower-yourself-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_META_TITLE} | Neothink Institute`,
  description: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.datePublished,
    modifiedTime: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "9 Self-Leadership Strategies To Empower Yourself", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_META_TITLE} | Neothink Institute`,
  description: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DESCRIPTION,
  datePublished: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.datePublished,
  dateModified: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_META_TITLE,
  description: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DESCRIPTION,
  datePublished: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.datePublished,
  dateModified: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_DATES.dateModified,
  authorId: schemaIds.organization,
  image: SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_IMAGE.src,
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

export default function SelfLeadershipStrategiesEmpowerYourselfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="self-leadership-strategies-empower-yourself"
        headline={SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_HEADLINE}
        introParas={SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_INTRO_PARAS}
        image={SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_IMAGE}
        minReadLabel={SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_MIN_READ}
        bodyHtml={SELF_LEADERSHIP_STRATEGIES_EMPOWER_YOURSELF_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
