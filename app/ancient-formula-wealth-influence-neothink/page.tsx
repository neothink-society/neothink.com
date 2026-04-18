import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_BODY_HTML,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DESCRIPTION,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_HEADLINE,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_IMAGE,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_INTRO_PARAS,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_META_TITLE,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_MIN_READ,
  ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_PATH,
} from "@/lib/agency-posts/ancient-formula-wealth-influence-neothink";
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

const PATH = ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#ancient-formula-wealth-influence-neothink-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_META_TITLE} | Neothink Institute`,
  description: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DESCRIPTION,
  pathname: PATH,
  articleOgImage: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_IMAGE,
  ogType: "article",
  article: {
    publishedTime: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.datePublished,
    modifiedTime: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Ancient Formula For Wealth And Influence", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_META_TITLE} | Neothink Institute`,
  description: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DESCRIPTION,
  datePublished: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.datePublished,
  dateModified: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_META_TITLE,
  description: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DESCRIPTION,
  datePublished: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.datePublished,
  dateModified: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_DATES.dateModified,
  authorId: schemaIds.organization,
  image: ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_IMAGE.src,
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

export default function AncientFormulaWealthInfluenceNeothinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="ancient-formula-wealth-influence-neothink"
        headline={ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_HEADLINE}
        introParas={ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_INTRO_PARAS}
        image={ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_IMAGE}
        minReadLabel={ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_MIN_READ}
        bodyHtml={ANCIENT_FORMULA_WEALTH_INFLUENCE_NEOTHINK_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
