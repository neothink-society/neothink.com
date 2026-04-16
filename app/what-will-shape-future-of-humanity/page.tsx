import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_BODY_HTML,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DESCRIPTION,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_HEADLINE,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_IMAGE,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_INTRO_PARAS,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_META_TITLE,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_MIN_READ,
  WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_PATH,
} from "@/lib/agency-posts/what-will-shape-future-of-humanity";
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

const PATH = WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#what-will-shape-future-of-humanity-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_META_TITLE} | Neothink Institute`,
  description: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.datePublished,
    modifiedTime: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What Will Shape The Future Of Humanity? These Powerful Forces Will Define It", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_META_TITLE} | Neothink Institute`,
  description: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DESCRIPTION,
  datePublished: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.datePublished,
  dateModified: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_META_TITLE,
  description: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DESCRIPTION,
  datePublished: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.datePublished,
  dateModified: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_DATES.dateModified,
  authorId: schemaIds.organization,
  image: WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_IMAGE.src,
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

export default function WhatWillShapeFutureOfHumanityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="what-will-shape-future-of-humanity"
        headline={WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_HEADLINE}
        introParas={WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_INTRO_PARAS}
        image={WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_IMAGE}
        minReadLabel={WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_MIN_READ}
        bodyHtml={WHAT_WILL_SHAPE_FUTURE_OF_HUMANITY_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
