import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_BODY_HTML,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DESCRIPTION,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_HEADLINE,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_IMAGE,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_INTRO_PARAS,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_META_TITLE,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_MIN_READ,
  NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_PATH,
} from "@/lib/agency-posts/neothink-books-reveal-secret-world";
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

const PATH = NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-books-reveal-secret-world-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.datePublished,
    modifiedTime: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Books", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DESCRIPTION,
  datePublished: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.datePublished,
  dateModified: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_META_TITLE,
  description: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DESCRIPTION,
  datePublished: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.datePublished,
  dateModified: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_IMAGE.src,
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

export default function NeothinkBooksRevealSecretWorldPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-books-reveal-secret-world"
        headline={NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_HEADLINE}
        introParas={NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_INTRO_PARAS}
        image={NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_IMAGE}
        minReadLabel={NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_MIN_READ}
        bodyHtml={NEOTHINK_BOOKS_REVEAL_SECRET_WORLD_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
