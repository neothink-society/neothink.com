import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_BODY_HTML,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DESCRIPTION,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_HEADLINE,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_IMAGE,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_INTRO_PARAS,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_META_TITLE,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_MIN_READ,
  FEELING_STUCK_IN_LIFE_HOW_TO_FIX_PATH,
} from "@/lib/agency-posts/feeling-stuck-in-life-how-to-fix";
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

const PATH = FEELING_STUCK_IN_LIFE_HOW_TO_FIX_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#feeling-stuck-in-life-how-to-fix-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${FEELING_STUCK_IN_LIFE_HOW_TO_FIX_META_TITLE} | Neothink Institute`,
  description: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.datePublished,
    modifiedTime: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Why You’re Feeling Stuck In Life And How To Fix It", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FEELING_STUCK_IN_LIFE_HOW_TO_FIX_META_TITLE} | Neothink Institute`,
  description: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DESCRIPTION,
  datePublished: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.datePublished,
  dateModified: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_META_TITLE,
  description: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DESCRIPTION,
  datePublished: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.datePublished,
  dateModified: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_DATES.dateModified,
  authorId: schemaIds.organization,
  image: FEELING_STUCK_IN_LIFE_HOW_TO_FIX_IMAGE.src,
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

export default function FeelingStuckInLifeHowToFixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="feeling-stuck-in-life-how-to-fix"
        headline={FEELING_STUCK_IN_LIFE_HOW_TO_FIX_HEADLINE}
        introParas={FEELING_STUCK_IN_LIFE_HOW_TO_FIX_INTRO_PARAS}
        image={FEELING_STUCK_IN_LIFE_HOW_TO_FIX_IMAGE}
        minReadLabel={FEELING_STUCK_IN_LIFE_HOW_TO_FIX_MIN_READ}
        bodyHtml={FEELING_STUCK_IN_LIFE_HOW_TO_FIX_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
