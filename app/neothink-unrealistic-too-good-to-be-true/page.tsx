import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_BODY_HTML,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DESCRIPTION,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_HEADLINE,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_IMAGE,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_INTRO_PARAS,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_META_TITLE,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_MIN_READ,
  NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_PATH,
} from "@/lib/agency-posts/neothink-unrealistic-too-good-to-be-true";
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

const PATH = NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-unrealistic-too-good-to-be-true-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.datePublished,
    modifiedTime: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "People Say Neothink Is Unrealistic", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DESCRIPTION,
  datePublished: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.datePublished,
  dateModified: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_META_TITLE,
  description: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DESCRIPTION,
  datePublished: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.datePublished,
  dateModified: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_IMAGE.src,
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

export default function NeothinkUnrealisticTooGoodToBeTruePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-unrealistic-too-good-to-be-true"
        headline={NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_HEADLINE}
        introParas={NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_INTRO_PARAS}
        image={NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_IMAGE}
        minReadLabel={NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_MIN_READ}
        bodyHtml={NEOTHINK_UNREALISTIC_TOO_GOOD_TO_BE_TRUE_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
