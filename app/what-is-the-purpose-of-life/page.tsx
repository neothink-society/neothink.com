import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  WHAT_IS_THE_PURPOSE_OF_LIFE_BODY_HTML,
  WHAT_IS_THE_PURPOSE_OF_LIFE_DATES,
  WHAT_IS_THE_PURPOSE_OF_LIFE_DESCRIPTION,
  WHAT_IS_THE_PURPOSE_OF_LIFE_HEADLINE,
  WHAT_IS_THE_PURPOSE_OF_LIFE_IMAGE,
  WHAT_IS_THE_PURPOSE_OF_LIFE_INTRO_PARAS,
  WHAT_IS_THE_PURPOSE_OF_LIFE_META_TITLE,
  WHAT_IS_THE_PURPOSE_OF_LIFE_MIN_READ,
  WHAT_IS_THE_PURPOSE_OF_LIFE_PATH,
} from "@/lib/agency-posts/what-is-the-purpose-of-life";
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

const PATH = WHAT_IS_THE_PURPOSE_OF_LIFE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#what-is-the-purpose-of-life-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${WHAT_IS_THE_PURPOSE_OF_LIFE_META_TITLE} | Neothink Institute`,
  description: WHAT_IS_THE_PURPOSE_OF_LIFE_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.datePublished,
    modifiedTime: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What Is The Purpose Of Life and How Can We Discover It?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WHAT_IS_THE_PURPOSE_OF_LIFE_META_TITLE} | Neothink Institute`,
  description: WHAT_IS_THE_PURPOSE_OF_LIFE_DESCRIPTION,
  datePublished: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.datePublished,
  dateModified: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WHAT_IS_THE_PURPOSE_OF_LIFE_META_TITLE,
  description: WHAT_IS_THE_PURPOSE_OF_LIFE_DESCRIPTION,
  datePublished: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.datePublished,
  dateModified: WHAT_IS_THE_PURPOSE_OF_LIFE_DATES.dateModified,
  authorId: schemaIds.organization,
  image: WHAT_IS_THE_PURPOSE_OF_LIFE_IMAGE.src,
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

export default function WhatIsThePurposeOfLifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="what-is-the-purpose-of-life"
        headline={WHAT_IS_THE_PURPOSE_OF_LIFE_HEADLINE}
        introParas={WHAT_IS_THE_PURPOSE_OF_LIFE_INTRO_PARAS}
        image={WHAT_IS_THE_PURPOSE_OF_LIFE_IMAGE}
        minReadLabel={WHAT_IS_THE_PURPOSE_OF_LIFE_MIN_READ}
        bodyHtml={WHAT_IS_THE_PURPOSE_OF_LIFE_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
