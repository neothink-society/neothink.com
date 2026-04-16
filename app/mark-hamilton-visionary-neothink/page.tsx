import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  MARK_HAMILTON_VISIONARY_NEOTHINK_BODY_HTML,
  MARK_HAMILTON_VISIONARY_NEOTHINK_DATES,
  MARK_HAMILTON_VISIONARY_NEOTHINK_DESCRIPTION,
  MARK_HAMILTON_VISIONARY_NEOTHINK_HEADLINE,
  MARK_HAMILTON_VISIONARY_NEOTHINK_IMAGE,
  MARK_HAMILTON_VISIONARY_NEOTHINK_INTRO_PARAS,
  MARK_HAMILTON_VISIONARY_NEOTHINK_META_TITLE,
  MARK_HAMILTON_VISIONARY_NEOTHINK_MIN_READ,
  MARK_HAMILTON_VISIONARY_NEOTHINK_PATH,
} from "@/lib/agency-posts/mark-hamilton-visionary-neothink";
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

const PATH = MARK_HAMILTON_VISIONARY_NEOTHINK_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#mark-hamilton-visionary-neothink-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${MARK_HAMILTON_VISIONARY_NEOTHINK_META_TITLE} | Neothink Institute`,
  description: MARK_HAMILTON_VISIONARY_NEOTHINK_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.datePublished,
    modifiedTime: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Mark Hamilton", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MARK_HAMILTON_VISIONARY_NEOTHINK_META_TITLE} | Neothink Institute`,
  description: MARK_HAMILTON_VISIONARY_NEOTHINK_DESCRIPTION,
  datePublished: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.datePublished,
  dateModified: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MARK_HAMILTON_VISIONARY_NEOTHINK_META_TITLE,
  description: MARK_HAMILTON_VISIONARY_NEOTHINK_DESCRIPTION,
  datePublished: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.datePublished,
  dateModified: MARK_HAMILTON_VISIONARY_NEOTHINK_DATES.dateModified,
  authorId: schemaIds.organization,
  image: MARK_HAMILTON_VISIONARY_NEOTHINK_IMAGE.src,
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

export default function MarkHamiltonVisionaryNeothinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="mark-hamilton-visionary-neothink"
        headline={MARK_HAMILTON_VISIONARY_NEOTHINK_HEADLINE}
        introParas={MARK_HAMILTON_VISIONARY_NEOTHINK_INTRO_PARAS}
        image={MARK_HAMILTON_VISIONARY_NEOTHINK_IMAGE}
        minReadLabel={MARK_HAMILTON_VISIONARY_NEOTHINK_MIN_READ}
        bodyHtml={MARK_HAMILTON_VISIONARY_NEOTHINK_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
