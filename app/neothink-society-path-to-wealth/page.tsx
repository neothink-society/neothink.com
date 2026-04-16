import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_BODY_HTML,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_DESCRIPTION,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_HEADLINE,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_IMAGE,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_INTRO_PARAS,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_META_TITLE,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_MIN_READ,
  NEOTHINK_SOCIETY_PATH_TO_WEALTH_PATH,
} from "@/lib/agency-posts/neothink-society-path-to-wealth";
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

const PATH = NEOTHINK_SOCIETY_PATH_TO_WEALTH_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-society-path-to-wealth-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_SOCIETY_PATH_TO_WEALTH_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.datePublished,
    modifiedTime: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Society", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_SOCIETY_PATH_TO_WEALTH_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DESCRIPTION,
  datePublished: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.datePublished,
  dateModified: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_SOCIETY_PATH_TO_WEALTH_META_TITLE,
  description: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DESCRIPTION,
  datePublished: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.datePublished,
  dateModified: NEOTHINK_SOCIETY_PATH_TO_WEALTH_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_SOCIETY_PATH_TO_WEALTH_IMAGE.src,
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

export default function NeothinkSocietyPathToWealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-society-path-to-wealth"
        headline={NEOTHINK_SOCIETY_PATH_TO_WEALTH_HEADLINE}
        introParas={NEOTHINK_SOCIETY_PATH_TO_WEALTH_INTRO_PARAS}
        image={NEOTHINK_SOCIETY_PATH_TO_WEALTH_IMAGE}
        minReadLabel={NEOTHINK_SOCIETY_PATH_TO_WEALTH_MIN_READ}
        bodyHtml={NEOTHINK_SOCIETY_PATH_TO_WEALTH_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
