import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_BODY_HTML,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_DESCRIPTION,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_HEADLINE,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_IMAGE,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_INTRO_PARAS,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_META_TITLE,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_MIN_READ,
  MAKE_MONEY_STAY_AT_HOME_MOM_2025_PATH,
} from "@/lib/agency-posts/make-money-stay-at-home-mom-2025";
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

const PATH = MAKE_MONEY_STAY_AT_HOME_MOM_2025_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#make-money-stay-at-home-mom-2025-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${MAKE_MONEY_STAY_AT_HOME_MOM_2025_META_TITLE} | Neothink Institute`,
  description: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DESCRIPTION,
  pathname: PATH,
  articleOgImage: MAKE_MONEY_STAY_AT_HOME_MOM_2025_IMAGE,
  ogType: "article",
  article: {
    publishedTime: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.datePublished,
    modifiedTime: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How To Make Money As A Stay-At-Home Mom In 2025", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MAKE_MONEY_STAY_AT_HOME_MOM_2025_META_TITLE} | Neothink Institute`,
  description: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DESCRIPTION,
  datePublished: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.datePublished,
  dateModified: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MAKE_MONEY_STAY_AT_HOME_MOM_2025_META_TITLE,
  description: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DESCRIPTION,
  datePublished: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.datePublished,
  dateModified: MAKE_MONEY_STAY_AT_HOME_MOM_2025_DATES.dateModified,
  authorId: schemaIds.organization,
  image: MAKE_MONEY_STAY_AT_HOME_MOM_2025_IMAGE.src,
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

export default function MakeMoneyStayAtHomeMom2025Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="make-money-stay-at-home-mom-2025"
        headline={MAKE_MONEY_STAY_AT_HOME_MOM_2025_HEADLINE}
        introParas={MAKE_MONEY_STAY_AT_HOME_MOM_2025_INTRO_PARAS}
        image={MAKE_MONEY_STAY_AT_HOME_MOM_2025_IMAGE}
        minReadLabel={MAKE_MONEY_STAY_AT_HOME_MOM_2025_MIN_READ}
        bodyHtml={MAKE_MONEY_STAY_AT_HOME_MOM_2025_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
