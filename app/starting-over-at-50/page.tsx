import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  STARTING_OVER_AT_50_BODY_HTML,
  STARTING_OVER_AT_50_DATES,
  STARTING_OVER_AT_50_DESCRIPTION,
  STARTING_OVER_AT_50_HEADLINE,
  STARTING_OVER_AT_50_IMAGE,
  STARTING_OVER_AT_50_INTRO_PARAS,
  STARTING_OVER_AT_50_META_TITLE,
  STARTING_OVER_AT_50_MIN_READ,
  STARTING_OVER_AT_50_PATH,
} from "@/lib/agency-posts/starting-over-at-50";
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

const PATH = STARTING_OVER_AT_50_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#starting-over-at-50-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${STARTING_OVER_AT_50_META_TITLE} | Neothink Institute`,
  description: STARTING_OVER_AT_50_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: STARTING_OVER_AT_50_DATES.datePublished,
    modifiedTime: STARTING_OVER_AT_50_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Is Starting Over At 50 Too Late For Success?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${STARTING_OVER_AT_50_META_TITLE} | Neothink Institute`,
  description: STARTING_OVER_AT_50_DESCRIPTION,
  datePublished: STARTING_OVER_AT_50_DATES.datePublished,
  dateModified: STARTING_OVER_AT_50_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: STARTING_OVER_AT_50_META_TITLE,
  description: STARTING_OVER_AT_50_DESCRIPTION,
  datePublished: STARTING_OVER_AT_50_DATES.datePublished,
  dateModified: STARTING_OVER_AT_50_DATES.dateModified,
  authorId: schemaIds.organization,
  image: STARTING_OVER_AT_50_IMAGE.src,
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

export default function StartingOverAt50Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="starting-over-at-50"
        headline={STARTING_OVER_AT_50_HEADLINE}
        introParas={STARTING_OVER_AT_50_INTRO_PARAS}
        image={STARTING_OVER_AT_50_IMAGE}
        minReadLabel={STARTING_OVER_AT_50_MIN_READ}
        bodyHtml={STARTING_OVER_AT_50_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
