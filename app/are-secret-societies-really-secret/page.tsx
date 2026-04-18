import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  ARE_SECRET_SOCIETIES_REALLY_SECRET_BODY_HTML,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_DESCRIPTION,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_HEADLINE,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_IMAGE,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_INTRO_PARAS,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_META_TITLE,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_MIN_READ,
  ARE_SECRET_SOCIETIES_REALLY_SECRET_PATH,
} from "@/lib/agency-posts/are-secret-societies-really-secret";
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

const PATH = ARE_SECRET_SOCIETIES_REALLY_SECRET_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#are-secret-societies-really-secret-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${ARE_SECRET_SOCIETIES_REALLY_SECRET_META_TITLE} | Neothink Institute`,
  description: ARE_SECRET_SOCIETIES_REALLY_SECRET_DESCRIPTION,
  pathname: PATH,
  articleOgImage: ARE_SECRET_SOCIETIES_REALLY_SECRET_IMAGE,
  ogType: "article",
  article: {
    publishedTime: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.datePublished,
    modifiedTime: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Are ‘Secret Societies’ Really That Secret?", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${ARE_SECRET_SOCIETIES_REALLY_SECRET_META_TITLE} | Neothink Institute`,
  description: ARE_SECRET_SOCIETIES_REALLY_SECRET_DESCRIPTION,
  datePublished: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.datePublished,
  dateModified: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ARE_SECRET_SOCIETIES_REALLY_SECRET_META_TITLE,
  description: ARE_SECRET_SOCIETIES_REALLY_SECRET_DESCRIPTION,
  datePublished: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.datePublished,
  dateModified: ARE_SECRET_SOCIETIES_REALLY_SECRET_DATES.dateModified,
  authorId: schemaIds.organization,
  image: ARE_SECRET_SOCIETIES_REALLY_SECRET_IMAGE.src,
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

export default function AreSecretSocietiesReallySecretPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="are-secret-societies-really-secret"
        headline={ARE_SECRET_SOCIETIES_REALLY_SECRET_HEADLINE}
        introParas={ARE_SECRET_SOCIETIES_REALLY_SECRET_INTRO_PARAS}
        image={ARE_SECRET_SOCIETIES_REALLY_SECRET_IMAGE}
        minReadLabel={ARE_SECRET_SOCIETIES_REALLY_SECRET_MIN_READ}
        bodyHtml={ARE_SECRET_SOCIETIES_REALLY_SECRET_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
