import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_BODY_HTML,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_DESCRIPTION,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_HEADLINE,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_IMAGE,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_INTRO_PARAS,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_META_TITLE,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_MIN_READ,
  EXCEL_AT_WORK_33_PRACTICAL_TIPS_PATH,
} from "@/lib/agency-posts/excel-at-work-33-practical-tips";
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

const PATH = EXCEL_AT_WORK_33_PRACTICAL_TIPS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#excel-at-work-33-practical-tips-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${EXCEL_AT_WORK_33_PRACTICAL_TIPS_META_TITLE} | Neothink Institute`,
  description: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DESCRIPTION,
  pathname: PATH,
  articleOgImage: EXCEL_AT_WORK_33_PRACTICAL_TIPS_IMAGE,
  ogType: "article",
  article: {
    publishedTime: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.datePublished,
    modifiedTime: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How To Excel At Work", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${EXCEL_AT_WORK_33_PRACTICAL_TIPS_META_TITLE} | Neothink Institute`,
  description: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DESCRIPTION,
  datePublished: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.datePublished,
  dateModified: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: EXCEL_AT_WORK_33_PRACTICAL_TIPS_META_TITLE,
  description: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DESCRIPTION,
  datePublished: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.datePublished,
  dateModified: EXCEL_AT_WORK_33_PRACTICAL_TIPS_DATES.dateModified,
  authorId: schemaIds.organization,
  image: EXCEL_AT_WORK_33_PRACTICAL_TIPS_IMAGE.src,
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

export default function ExcelAtWork33PracticalTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="excel-at-work-33-practical-tips"
        headline={EXCEL_AT_WORK_33_PRACTICAL_TIPS_HEADLINE}
        introParas={EXCEL_AT_WORK_33_PRACTICAL_TIPS_INTRO_PARAS}
        image={EXCEL_AT_WORK_33_PRACTICAL_TIPS_IMAGE}
        minReadLabel={EXCEL_AT_WORK_33_PRACTICAL_TIPS_MIN_READ}
        bodyHtml={EXCEL_AT_WORK_33_PRACTICAL_TIPS_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
