import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_BODY_HTML,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DESCRIPTION,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_HEADLINE,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_IMAGE,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_INTRO_PARAS,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_META_TITLE,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_MIN_READ,
  GOOD_FINANCIAL_HABITS_CHANGE_LIFE_PATH,
} from "@/lib/agency-posts/good-financial-habits-change-life";
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

const PATH = GOOD_FINANCIAL_HABITS_CHANGE_LIFE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#good-financial-habits-change-life-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${GOOD_FINANCIAL_HABITS_CHANGE_LIFE_META_TITLE} | Neothink Institute`,
  description: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.datePublished,
    modifiedTime: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "18 Good Financial Habits That Can Change Your Life", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${GOOD_FINANCIAL_HABITS_CHANGE_LIFE_META_TITLE} | Neothink Institute`,
  description: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DESCRIPTION,
  datePublished: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.datePublished,
  dateModified: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_META_TITLE,
  description: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DESCRIPTION,
  datePublished: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.datePublished,
  dateModified: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_DATES.dateModified,
  authorId: schemaIds.organization,
  image: GOOD_FINANCIAL_HABITS_CHANGE_LIFE_IMAGE.src,
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

export default function GoodFinancialHabitsChangeLifePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="good-financial-habits-change-life"
        headline={GOOD_FINANCIAL_HABITS_CHANGE_LIFE_HEADLINE}
        introParas={GOOD_FINANCIAL_HABITS_CHANGE_LIFE_INTRO_PARAS}
        image={GOOD_FINANCIAL_HABITS_CHANGE_LIFE_IMAGE}
        minReadLabel={GOOD_FINANCIAL_HABITS_CHANGE_LIFE_MIN_READ}
        bodyHtml={GOOD_FINANCIAL_HABITS_CHANGE_LIFE_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
