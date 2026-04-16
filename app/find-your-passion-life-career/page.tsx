import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  FIND_YOUR_PASSION_LIFE_CAREER_BODY_HTML,
  FIND_YOUR_PASSION_LIFE_CAREER_DATES,
  FIND_YOUR_PASSION_LIFE_CAREER_DESCRIPTION,
  FIND_YOUR_PASSION_LIFE_CAREER_HEADLINE,
  FIND_YOUR_PASSION_LIFE_CAREER_IMAGE,
  FIND_YOUR_PASSION_LIFE_CAREER_INTRO_PARAS,
  FIND_YOUR_PASSION_LIFE_CAREER_META_TITLE,
  FIND_YOUR_PASSION_LIFE_CAREER_MIN_READ,
  FIND_YOUR_PASSION_LIFE_CAREER_PATH,
} from "@/lib/agency-posts/find-your-passion-life-career";
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

const PATH = FIND_YOUR_PASSION_LIFE_CAREER_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#find-your-passion-life-career-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${FIND_YOUR_PASSION_LIFE_CAREER_META_TITLE} | Neothink Institute`,
  description: FIND_YOUR_PASSION_LIFE_CAREER_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: FIND_YOUR_PASSION_LIFE_CAREER_DATES.datePublished,
    modifiedTime: FIND_YOUR_PASSION_LIFE_CAREER_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How to Find Your Passion in Life and Career", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FIND_YOUR_PASSION_LIFE_CAREER_META_TITLE} | Neothink Institute`,
  description: FIND_YOUR_PASSION_LIFE_CAREER_DESCRIPTION,
  datePublished: FIND_YOUR_PASSION_LIFE_CAREER_DATES.datePublished,
  dateModified: FIND_YOUR_PASSION_LIFE_CAREER_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FIND_YOUR_PASSION_LIFE_CAREER_META_TITLE,
  description: FIND_YOUR_PASSION_LIFE_CAREER_DESCRIPTION,
  datePublished: FIND_YOUR_PASSION_LIFE_CAREER_DATES.datePublished,
  dateModified: FIND_YOUR_PASSION_LIFE_CAREER_DATES.dateModified,
  authorId: schemaIds.organization,
  image: FIND_YOUR_PASSION_LIFE_CAREER_IMAGE.src,
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

export default function FindYourPassionLifeCareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="find-your-passion-life-career"
        headline={FIND_YOUR_PASSION_LIFE_CAREER_HEADLINE}
        introParas={FIND_YOUR_PASSION_LIFE_CAREER_INTRO_PARAS}
        image={FIND_YOUR_PASSION_LIFE_CAREER_IMAGE}
        minReadLabel={FIND_YOUR_PASSION_LIFE_CAREER_MIN_READ}
        bodyHtml={FIND_YOUR_PASSION_LIFE_CAREER_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
