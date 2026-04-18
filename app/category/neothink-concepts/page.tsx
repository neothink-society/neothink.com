import { NeothinkSeriesCategoryPageContent } from "@/components/neothink-series/neothink-series-category-page-content";
import {
  breadcrumbListJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NEOTHINK_CONCEPTS_CATEGORY_PATH,
  NEOTHINK_CONCEPTS_CATEGORY_SEO_DESCRIPTION,
  NEOTHINK_CONCEPTS_CATEGORY_TITLE,
  NEOTHINK_CONCEPTS_CATEGORY_INTRO,
  NEOTHINK_CONCEPTS_MIGRATED_SLUGS,
  NEOTHINK_CONCEPTS_SERIES_POSTS,
  neothinkConceptsPostHref,
  neothinkConceptsPostIsMigrated,
} from "@/lib/neothink-concepts-category-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../../neothink-university/neothink-university-page.css";
import "../../is-neothink-just-another-self-help-book/shb-page.css";
import "../../neothink-awakening/neothink-awakening-html.css";

const PATH = NEOTHINK_CONCEPTS_CATEGORY_PATH;
const DOC_TITLE = `${NEOTHINK_CONCEPTS_CATEGORY_TITLE} · Series | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#ncc-intro"] as const;

const LATEST_POST_DATE = NEOTHINK_CONCEPTS_SERIES_POSTS[0]?.date ?? "2025-12-04";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: NEOTHINK_CONCEPTS_CATEGORY_SEO_DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: NEOTHINK_CONCEPTS_CATEGORY_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: NEOTHINK_CONCEPTS_CATEGORY_SEO_DESCRIPTION,
  dateModified: `${LATEST_POST_DATE}T12:00:00.000Z`,
  pageType: "CollectionPage",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  speakableSelectors: SPEAKABLE,
});

const migratedForSchema = NEOTHINK_CONCEPTS_SERIES_POSTS.filter((p) =>
  NEOTHINK_CONCEPTS_MIGRATED_SLUGS.has(p.slug)
).map((p) => ({
  title: p.title,
  path: `/${p.slug}`,
}));

const seriesListLd = itemListJsonLd(
  PATH,
  "concepts-series-migrated",
  `${NEOTHINK_CONCEPTS_CATEGORY_TITLE}: articles on ${siteConfig.url.replace(/^https?:\/\//, "")}`,
  "Neothink Concepts posts available as native Next.js articles (same slugs as WordPress).",
  migratedForSchema
);

export default function NeothinkConceptsCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesListLd) }} />
      <NeothinkSeriesCategoryPageContent
        title={NEOTHINK_CONCEPTS_CATEGORY_TITLE}
        intro={NEOTHINK_CONCEPTS_CATEGORY_INTRO}
        headingId="ncc-hero-heading"
        introId="ncc-intro"
        posts={NEOTHINK_CONCEPTS_SERIES_POSTS}
        postHref={neothinkConceptsPostHref}
        postIsMigrated={neothinkConceptsPostIsMigrated}
      />
    </>
  );
}
