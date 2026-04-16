import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_BODY_HTML,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DESCRIPTION,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_HEADLINE,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_IMAGE,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_INTRO_PARAS,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_META_TITLE,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_MIN_READ,
  NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_PATH,
} from "@/lib/agency-posts/neothink-21st-century-navigate-challenges";
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

const PATH = NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-21st-century-navigate-challenges-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.datePublished,
    modifiedTime: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink In The 21st Century", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DESCRIPTION,
  datePublished: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.datePublished,
  dateModified: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_META_TITLE,
  description: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DESCRIPTION,
  datePublished: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.datePublished,
  dateModified: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_IMAGE.src,
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

export default function Neothink21stCenturyNavigateChallengesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-21st-century-navigate-challenges"
        headline={NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_HEADLINE}
        introParas={NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_INTRO_PARAS}
        image={NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_IMAGE}
        minReadLabel={NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_MIN_READ}
        bodyHtml={NEOTHINK_21ST_CENTURY_NAVIGATE_CHALLENGES_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
