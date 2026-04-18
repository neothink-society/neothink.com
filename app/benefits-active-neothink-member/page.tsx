import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_BODY_HTML,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_DESCRIPTION,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_HEADLINE,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_IMAGE,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_INTRO_PARAS,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_META_TITLE,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_MIN_READ,
  BENEFITS_ACTIVE_NEOTHINK_MEMBER_PATH,
} from "@/lib/agency-posts/benefits-active-neothink-member";
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

const PATH = BENEFITS_ACTIVE_NEOTHINK_MEMBER_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#benefits-active-neothink-member-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${BENEFITS_ACTIVE_NEOTHINK_MEMBER_META_TITLE} | Neothink Institute`,
  description: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DESCRIPTION,
  pathname: PATH,
  articleOgImage: BENEFITS_ACTIVE_NEOTHINK_MEMBER_IMAGE,
  ogType: "article",
  article: {
    publishedTime: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.datePublished,
    modifiedTime: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Benefits Of Becoming An Active Neothink Member", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${BENEFITS_ACTIVE_NEOTHINK_MEMBER_META_TITLE} | Neothink Institute`,
  description: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DESCRIPTION,
  datePublished: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.datePublished,
  dateModified: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: BENEFITS_ACTIVE_NEOTHINK_MEMBER_META_TITLE,
  description: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DESCRIPTION,
  datePublished: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.datePublished,
  dateModified: BENEFITS_ACTIVE_NEOTHINK_MEMBER_DATES.dateModified,
  authorId: schemaIds.organization,
  image: BENEFITS_ACTIVE_NEOTHINK_MEMBER_IMAGE.src,
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

export default function BenefitsActiveNeothinkMemberPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="benefits-active-neothink-member"
        headline={BENEFITS_ACTIVE_NEOTHINK_MEMBER_HEADLINE}
        introParas={BENEFITS_ACTIVE_NEOTHINK_MEMBER_INTRO_PARAS}
        image={BENEFITS_ACTIVE_NEOTHINK_MEMBER_IMAGE}
        minReadLabel={BENEFITS_ACTIVE_NEOTHINK_MEMBER_MIN_READ}
        bodyHtml={BENEFITS_ACTIVE_NEOTHINK_MEMBER_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
