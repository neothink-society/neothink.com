import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_BODY_HTML,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DESCRIPTION,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_HEADLINE,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_IMAGE,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_INTRO_PARAS,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_META_TITLE,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_MIN_READ,
  NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_PATH,
} from "@/lib/agency-posts/neothink-manuscripts-skepticism-to-success";
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

const PATH = NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-manuscripts-skepticism-to-success-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.datePublished,
    modifiedTime: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Manuscripts", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DESCRIPTION,
  datePublished: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.datePublished,
  dateModified: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_META_TITLE,
  description: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DESCRIPTION,
  datePublished: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.datePublished,
  dateModified: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_IMAGE.src,
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

export default function NeothinkManuscriptsSkepticismToSuccessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-manuscripts-skepticism-to-success"
        headline={NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_HEADLINE}
        introParas={NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_INTRO_PARAS}
        image={NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_IMAGE}
        minReadLabel={NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_MIN_READ}
        bodyHtml={NEOTHINK_MANUSCRIPTS_SKEPTICISM_TO_SUCCESS_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
