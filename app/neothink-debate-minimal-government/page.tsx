import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_BODY_HTML,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DESCRIPTION,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_HEADLINE,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_IMAGE,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_INTRO_PARAS,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_META_TITLE,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_MIN_READ,
  NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_PATH,
} from "@/lib/agency-posts/neothink-debate-minimal-government";
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

const PATH = NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#neothink-debate-minimal-government-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.datePublished,
    modifiedTime: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Neothink Debate", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_META_TITLE} | Neothink Institute`,
  description: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DESCRIPTION,
  datePublished: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.datePublished,
  dateModified: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_META_TITLE,
  description: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DESCRIPTION,
  datePublished: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.datePublished,
  dateModified: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_DATES.dateModified,
  authorId: schemaIds.organization,
  image: NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_IMAGE.src,
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

export default function NeothinkDebateMinimalGovernmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="neothink-debate-minimal-government"
        headline={NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_HEADLINE}
        introParas={NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_INTRO_PARAS}
        image={NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_IMAGE}
        minReadLabel={NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_MIN_READ}
        bodyHtml={NEOTHINK_DEBATE_MINIMAL_GOVERNMENT_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
