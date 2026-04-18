import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  WHO_JOINS_SECRET_SOCIETIES_BODY_HTML,
  WHO_JOINS_SECRET_SOCIETIES_DATES,
  WHO_JOINS_SECRET_SOCIETIES_DESCRIPTION,
  WHO_JOINS_SECRET_SOCIETIES_HEADLINE,
  WHO_JOINS_SECRET_SOCIETIES_IMAGE,
  WHO_JOINS_SECRET_SOCIETIES_INTRO_PARAS,
  WHO_JOINS_SECRET_SOCIETIES_META_TITLE,
  WHO_JOINS_SECRET_SOCIETIES_MIN_READ,
  WHO_JOINS_SECRET_SOCIETIES_PATH,
} from "@/lib/agency-posts/who-joins-secret-societies";
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

const PATH = WHO_JOINS_SECRET_SOCIETIES_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#who-joins-secret-societies-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${WHO_JOINS_SECRET_SOCIETIES_META_TITLE} | Neothink Institute`,
  description: WHO_JOINS_SECRET_SOCIETIES_DESCRIPTION,
  pathname: PATH,
  articleOgImage: WHO_JOINS_SECRET_SOCIETIES_IMAGE,
  ogType: "article",
  article: {
    publishedTime: WHO_JOINS_SECRET_SOCIETIES_DATES.datePublished,
    modifiedTime: WHO_JOINS_SECRET_SOCIETIES_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Who Really Joins Secret Societies? The Truth Behind The Members", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WHO_JOINS_SECRET_SOCIETIES_META_TITLE} | Neothink Institute`,
  description: WHO_JOINS_SECRET_SOCIETIES_DESCRIPTION,
  datePublished: WHO_JOINS_SECRET_SOCIETIES_DATES.datePublished,
  dateModified: WHO_JOINS_SECRET_SOCIETIES_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WHO_JOINS_SECRET_SOCIETIES_META_TITLE,
  description: WHO_JOINS_SECRET_SOCIETIES_DESCRIPTION,
  datePublished: WHO_JOINS_SECRET_SOCIETIES_DATES.datePublished,
  dateModified: WHO_JOINS_SECRET_SOCIETIES_DATES.dateModified,
  authorId: schemaIds.organization,
  image: WHO_JOINS_SECRET_SOCIETIES_IMAGE.src,
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

export default function WhoJoinsSecretSocietiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="who-joins-secret-societies"
        headline={WHO_JOINS_SECRET_SOCIETIES_HEADLINE}
        introParas={WHO_JOINS_SECRET_SOCIETIES_INTRO_PARAS}
        image={WHO_JOINS_SECRET_SOCIETIES_IMAGE}
        minReadLabel={WHO_JOINS_SECRET_SOCIETIES_MIN_READ}
        bodyHtml={WHO_JOINS_SECRET_SOCIETIES_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
