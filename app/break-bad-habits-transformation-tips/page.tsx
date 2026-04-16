import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_BODY_HTML,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DESCRIPTION,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_HEADLINE,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_IMAGE,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_INTRO_PARAS,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_META_TITLE,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_MIN_READ,
  BREAK_BAD_HABITS_TRANSFORMATION_TIPS_PATH,
} from "@/lib/agency-posts/break-bad-habits-transformation-tips";
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

const PATH = BREAK_BAD_HABITS_TRANSFORMATION_TIPS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#break-bad-habits-transformation-tips-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${BREAK_BAD_HABITS_TRANSFORMATION_TIPS_META_TITLE} | Neothink Institute`,
  description: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.datePublished,
    modifiedTime: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How To Break Bad Habits", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${BREAK_BAD_HABITS_TRANSFORMATION_TIPS_META_TITLE} | Neothink Institute`,
  description: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DESCRIPTION,
  datePublished: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.datePublished,
  dateModified: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_META_TITLE,
  description: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DESCRIPTION,
  datePublished: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.datePublished,
  dateModified: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_DATES.dateModified,
  authorId: schemaIds.organization,
  image: BREAK_BAD_HABITS_TRANSFORMATION_TIPS_IMAGE.src,
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

export default function BreakBadHabitsTransformationTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="break-bad-habits-transformation-tips"
        headline={BREAK_BAD_HABITS_TRANSFORMATION_TIPS_HEADLINE}
        introParas={BREAK_BAD_HABITS_TRANSFORMATION_TIPS_INTRO_PARAS}
        image={BREAK_BAD_HABITS_TRANSFORMATION_TIPS_IMAGE}
        minReadLabel={BREAK_BAD_HABITS_TRANSFORMATION_TIPS_MIN_READ}
        bodyHtml={BREAK_BAD_HABITS_TRANSFORMATION_TIPS_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
