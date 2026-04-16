import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_BODY_HTML,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DESCRIPTION,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_HEADLINE,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_IMAGE,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_INTRO_PARAS,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_META_TITLE,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_MIN_READ,
  SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_PATH,
} from "@/lib/agency-posts/secret-society-letters-selling-happiness";
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

const PATH = SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#secret-society-letters-selling-happiness-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_META_TITLE} | Neothink Institute`,
  description: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.datePublished,
    modifiedTime: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Secret Society Letters", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_META_TITLE} | Neothink Institute`,
  description: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DESCRIPTION,
  datePublished: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.datePublished,
  dateModified: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_META_TITLE,
  description: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DESCRIPTION,
  datePublished: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.datePublished,
  dateModified: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_DATES.dateModified,
  authorId: schemaIds.organization,
  image: SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_IMAGE.src,
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

export default function SecretSocietyLettersSellingHappinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="secret-society-letters-selling-happiness"
        headline={SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_HEADLINE}
        introParas={SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_INTRO_PARAS}
        image={SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_IMAGE}
        minReadLabel={SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_MIN_READ}
        bodyHtml={SECRET_SOCIETY_LETTERS_SELLING_HAPPINESS_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
