import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NOT_PASSIONATE_ABOUT_ANYTHING_BODY_HTML,
  NOT_PASSIONATE_ABOUT_ANYTHING_DATES,
  NOT_PASSIONATE_ABOUT_ANYTHING_DESCRIPTION,
  NOT_PASSIONATE_ABOUT_ANYTHING_HEADLINE,
  NOT_PASSIONATE_ABOUT_ANYTHING_IMAGE,
  NOT_PASSIONATE_ABOUT_ANYTHING_INTRO_PARAS,
  NOT_PASSIONATE_ABOUT_ANYTHING_META_TITLE,
  NOT_PASSIONATE_ABOUT_ANYTHING_MIN_READ,
  NOT_PASSIONATE_ABOUT_ANYTHING_PATH,
} from "@/lib/agency-posts/not-passionate-about-anything";
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

const PATH = NOT_PASSIONATE_ABOUT_ANYTHING_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#not-passionate-about-anything-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NOT_PASSIONATE_ABOUT_ANYTHING_META_TITLE} | Neothink Institute`,
  description: NOT_PASSIONATE_ABOUT_ANYTHING_DESCRIPTION,
  pathname: PATH,
  articleOgImage: NOT_PASSIONATE_ABOUT_ANYTHING_IMAGE,
  ogType: "article",
  article: {
    publishedTime: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.datePublished,
    modifiedTime: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Why You’re Not Passionate About Anything and What to Do About It", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NOT_PASSIONATE_ABOUT_ANYTHING_META_TITLE} | Neothink Institute`,
  description: NOT_PASSIONATE_ABOUT_ANYTHING_DESCRIPTION,
  datePublished: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.datePublished,
  dateModified: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NOT_PASSIONATE_ABOUT_ANYTHING_META_TITLE,
  description: NOT_PASSIONATE_ABOUT_ANYTHING_DESCRIPTION,
  datePublished: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.datePublished,
  dateModified: NOT_PASSIONATE_ABOUT_ANYTHING_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NOT_PASSIONATE_ABOUT_ANYTHING_IMAGE.src,
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

export default function NotPassionateAboutAnythingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="not-passionate-about-anything"
        headline={NOT_PASSIONATE_ABOUT_ANYTHING_HEADLINE}
        introParas={NOT_PASSIONATE_ABOUT_ANYTHING_INTRO_PARAS}
        image={NOT_PASSIONATE_ABOUT_ANYTHING_IMAGE}
        minReadLabel={NOT_PASSIONATE_ABOUT_ANYTHING_MIN_READ}
        bodyHtml={NOT_PASSIONATE_ABOUT_ANYTHING_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
