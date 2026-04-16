import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  HOW_TO_HAVE_FUN_AS_ADULT_BODY_HTML,
  HOW_TO_HAVE_FUN_AS_ADULT_DATES,
  HOW_TO_HAVE_FUN_AS_ADULT_DESCRIPTION,
  HOW_TO_HAVE_FUN_AS_ADULT_HEADLINE,
  HOW_TO_HAVE_FUN_AS_ADULT_IMAGE,
  HOW_TO_HAVE_FUN_AS_ADULT_INTRO_PARAS,
  HOW_TO_HAVE_FUN_AS_ADULT_META_TITLE,
  HOW_TO_HAVE_FUN_AS_ADULT_MIN_READ,
  HOW_TO_HAVE_FUN_AS_ADULT_PATH,
} from "@/lib/agency-posts/how-to-have-fun-as-adult";
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

const PATH = HOW_TO_HAVE_FUN_AS_ADULT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#how-to-have-fun-as-adult-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${HOW_TO_HAVE_FUN_AS_ADULT_META_TITLE} | Neothink Institute`,
  description: HOW_TO_HAVE_FUN_AS_ADULT_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: HOW_TO_HAVE_FUN_AS_ADULT_DATES.datePublished,
    modifiedTime: HOW_TO_HAVE_FUN_AS_ADULT_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Adulting Doesn’t Have To Be Boring", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${HOW_TO_HAVE_FUN_AS_ADULT_META_TITLE} | Neothink Institute`,
  description: HOW_TO_HAVE_FUN_AS_ADULT_DESCRIPTION,
  datePublished: HOW_TO_HAVE_FUN_AS_ADULT_DATES.datePublished,
  dateModified: HOW_TO_HAVE_FUN_AS_ADULT_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HOW_TO_HAVE_FUN_AS_ADULT_META_TITLE,
  description: HOW_TO_HAVE_FUN_AS_ADULT_DESCRIPTION,
  datePublished: HOW_TO_HAVE_FUN_AS_ADULT_DATES.datePublished,
  dateModified: HOW_TO_HAVE_FUN_AS_ADULT_DATES.dateModified,
  authorId: schemaIds.organization,
  image: HOW_TO_HAVE_FUN_AS_ADULT_IMAGE.src,
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

export default function HowToHaveFunAsAdultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="how-to-have-fun-as-adult"
        headline={HOW_TO_HAVE_FUN_AS_ADULT_HEADLINE}
        introParas={HOW_TO_HAVE_FUN_AS_ADULT_INTRO_PARAS}
        image={HOW_TO_HAVE_FUN_AS_ADULT_IMAGE}
        minReadLabel={HOW_TO_HAVE_FUN_AS_ADULT_MIN_READ}
        bodyHtml={HOW_TO_HAVE_FUN_AS_ADULT_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
