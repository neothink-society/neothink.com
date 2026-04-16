import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_BODY_HTML,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_DESCRIPTION,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_HEADLINE,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_IMAGE,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_INTRO_PARAS,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_META_TITLE,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_MIN_READ,
  DOUBTS_ABOUT_NEOTHINK_SOCIETY_PATH,
} from "@/lib/agency-posts/doubts-about-neothink-society";
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

const PATH = DOUBTS_ABOUT_NEOTHINK_SOCIETY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#doubts-about-neothink-society-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${DOUBTS_ABOUT_NEOTHINK_SOCIETY_META_TITLE} | Neothink Institute`,
  description: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.datePublished,
    modifiedTime: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What To Do If You’re Having Doubts About The Neothink Society", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${DOUBTS_ABOUT_NEOTHINK_SOCIETY_META_TITLE} | Neothink Institute`,
  description: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DESCRIPTION,
  datePublished: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.datePublished,
  dateModified: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: DOUBTS_ABOUT_NEOTHINK_SOCIETY_META_TITLE,
  description: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DESCRIPTION,
  datePublished: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.datePublished,
  dateModified: DOUBTS_ABOUT_NEOTHINK_SOCIETY_DATES.dateModified,
  authorId: schemaIds.organization,
  image: DOUBTS_ABOUT_NEOTHINK_SOCIETY_IMAGE.src,
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

export default function DoubtsAboutNeothinkSocietyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="doubts-about-neothink-society"
        headline={DOUBTS_ABOUT_NEOTHINK_SOCIETY_HEADLINE}
        introParas={DOUBTS_ABOUT_NEOTHINK_SOCIETY_INTRO_PARAS}
        image={DOUBTS_ABOUT_NEOTHINK_SOCIETY_IMAGE}
        minReadLabel={DOUBTS_ABOUT_NEOTHINK_SOCIETY_MIN_READ}
        bodyHtml={DOUBTS_ABOUT_NEOTHINK_SOCIETY_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
