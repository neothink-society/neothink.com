import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  WHAT_DO_SECRET_SOCIETIES_DO_BODY_HTML,
  WHAT_DO_SECRET_SOCIETIES_DO_DATES,
  WHAT_DO_SECRET_SOCIETIES_DO_DESCRIPTION,
  WHAT_DO_SECRET_SOCIETIES_DO_HEADLINE,
  WHAT_DO_SECRET_SOCIETIES_DO_IMAGE,
  WHAT_DO_SECRET_SOCIETIES_DO_INTRO_PARAS,
  WHAT_DO_SECRET_SOCIETIES_DO_META_TITLE,
  WHAT_DO_SECRET_SOCIETIES_DO_MIN_READ,
  WHAT_DO_SECRET_SOCIETIES_DO_PATH,
} from "@/lib/agency-posts/what-do-secret-societies-do";
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

const PATH = WHAT_DO_SECRET_SOCIETIES_DO_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#what-do-secret-societies-do-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${WHAT_DO_SECRET_SOCIETIES_DO_META_TITLE} | Neothink Institute`,
  description: WHAT_DO_SECRET_SOCIETIES_DO_DESCRIPTION,
  pathname: PATH,
  articleOgImage: WHAT_DO_SECRET_SOCIETIES_DO_IMAGE,
  ogType: "article",
  article: {
    publishedTime: WHAT_DO_SECRET_SOCIETIES_DO_DATES.datePublished,
    modifiedTime: WHAT_DO_SECRET_SOCIETIES_DO_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What Do Secret Societies Do? Understanding Their Purpose And Existence", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WHAT_DO_SECRET_SOCIETIES_DO_META_TITLE} | Neothink Institute`,
  description: WHAT_DO_SECRET_SOCIETIES_DO_DESCRIPTION,
  datePublished: WHAT_DO_SECRET_SOCIETIES_DO_DATES.datePublished,
  dateModified: WHAT_DO_SECRET_SOCIETIES_DO_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WHAT_DO_SECRET_SOCIETIES_DO_META_TITLE,
  description: WHAT_DO_SECRET_SOCIETIES_DO_DESCRIPTION,
  datePublished: WHAT_DO_SECRET_SOCIETIES_DO_DATES.datePublished,
  dateModified: WHAT_DO_SECRET_SOCIETIES_DO_DATES.dateModified,
  authorId: schemaIds.organization,
  image: WHAT_DO_SECRET_SOCIETIES_DO_IMAGE.src,
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

export default function WhatDoSecretSocietiesDoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="what-do-secret-societies-do"
        headline={WHAT_DO_SECRET_SOCIETIES_DO_HEADLINE}
        introParas={WHAT_DO_SECRET_SOCIETIES_DO_INTRO_PARAS}
        image={WHAT_DO_SECRET_SOCIETIES_DO_IMAGE}
        minReadLabel={WHAT_DO_SECRET_SOCIETIES_DO_MIN_READ}
        bodyHtml={WHAT_DO_SECRET_SOCIETIES_DO_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
