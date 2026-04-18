import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  FIND_HAPPINESS_IN_RETIREMENT_BODY_HTML,
  FIND_HAPPINESS_IN_RETIREMENT_DATES,
  FIND_HAPPINESS_IN_RETIREMENT_DESCRIPTION,
  FIND_HAPPINESS_IN_RETIREMENT_HEADLINE,
  FIND_HAPPINESS_IN_RETIREMENT_IMAGE,
  FIND_HAPPINESS_IN_RETIREMENT_INTRO_PARAS,
  FIND_HAPPINESS_IN_RETIREMENT_META_TITLE,
  FIND_HAPPINESS_IN_RETIREMENT_MIN_READ,
  FIND_HAPPINESS_IN_RETIREMENT_PATH,
} from "@/lib/agency-posts/find-happiness-in-retirement";
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

const PATH = FIND_HAPPINESS_IN_RETIREMENT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#find-happiness-in-retirement-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${FIND_HAPPINESS_IN_RETIREMENT_META_TITLE} | Neothink Institute`,
  description: FIND_HAPPINESS_IN_RETIREMENT_DESCRIPTION,
  pathname: PATH,
  articleOgImage: FIND_HAPPINESS_IN_RETIREMENT_IMAGE,
  ogType: "article",
  article: {
    publishedTime: FIND_HAPPINESS_IN_RETIREMENT_DATES.datePublished,
    modifiedTime: FIND_HAPPINESS_IN_RETIREMENT_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "7 Ways To Find Happiness in Retirement", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FIND_HAPPINESS_IN_RETIREMENT_META_TITLE} | Neothink Institute`,
  description: FIND_HAPPINESS_IN_RETIREMENT_DESCRIPTION,
  datePublished: FIND_HAPPINESS_IN_RETIREMENT_DATES.datePublished,
  dateModified: FIND_HAPPINESS_IN_RETIREMENT_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FIND_HAPPINESS_IN_RETIREMENT_META_TITLE,
  description: FIND_HAPPINESS_IN_RETIREMENT_DESCRIPTION,
  datePublished: FIND_HAPPINESS_IN_RETIREMENT_DATES.datePublished,
  dateModified: FIND_HAPPINESS_IN_RETIREMENT_DATES.dateModified,
  authorId: schemaIds.organization,
  image: FIND_HAPPINESS_IN_RETIREMENT_IMAGE.src,
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

export default function FindHappinessInRetirementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="find-happiness-in-retirement"
        headline={FIND_HAPPINESS_IN_RETIREMENT_HEADLINE}
        introParas={FIND_HAPPINESS_IN_RETIREMENT_INTRO_PARAS}
        image={FIND_HAPPINESS_IN_RETIREMENT_IMAGE}
        minReadLabel={FIND_HAPPINESS_IN_RETIREMENT_MIN_READ}
        bodyHtml={FIND_HAPPINESS_IN_RETIREMENT_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
