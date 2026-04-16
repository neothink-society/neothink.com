import { NeothinkPhilosophyCategoryPageContent } from "@/components/neothink-philosophy/neothink-philosophy-category-page-content";
import {
  breadcrumbListJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NEOTHINK_PHILOSOPHY_CATEGORY_PATH,
  NEOTHINK_PHILOSOPHY_CATEGORY_SEO_DESCRIPTION,
  NEOTHINK_PHILOSOPHY_CATEGORY_TITLE,
  NEOTHINK_PHILOSOPHY_MIGRATED_SLUGS,
  NEOTHINK_PHILOSOPHY_SERIES_POSTS,
} from "@/lib/neothink-philosophy-category-data";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../../neothink-university/neothink-university-page.css";
import "../../is-neothink-just-another-self-help-book/shb-page.css";
import "../../neothink-awakening/neothink-awakening-html.css";

const PATH = NEOTHINK_PHILOSOPHY_CATEGORY_PATH;
const DOC_TITLE = `${NEOTHINK_PHILOSOPHY_CATEGORY_TITLE} · Series | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#npc-intro"] as const;

/** Latest post date in the series (for freshness signals). */
const LATEST_POST_DATE = NEOTHINK_PHILOSOPHY_SERIES_POSTS[0]?.date ?? "2026-03-17";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: NEOTHINK_PHILOSOPHY_CATEGORY_SEO_DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: NEOTHINK_PHILOSOPHY_CATEGORY_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: NEOTHINK_PHILOSOPHY_CATEGORY_SEO_DESCRIPTION,
  dateModified: `${LATEST_POST_DATE}T12:00:00.000Z`,
  pageType: "CollectionPage",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  speakableSelectors: SPEAKABLE,
});

const migratedForSchema = NEOTHINK_PHILOSOPHY_SERIES_POSTS.filter((p) =>
  NEOTHINK_PHILOSOPHY_MIGRATED_SLUGS.has(p.slug)
).map((p) => ({
  title: p.title,
  path: `/${p.slug}`,
}));

const seriesListLd = itemListJsonLd(
  PATH,
  "philosophy-series-migrated",
  `${NEOTHINK_PHILOSOPHY_CATEGORY_TITLE} — articles on neothink.com`,
  "Long-form Neothink Philosophy posts available as native Next.js articles (same slugs as WordPress).",
  migratedForSchema
);

export default function NeothinkPhilosophyCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesListLd) }} />
      <NeothinkPhilosophyCategoryPageContent />
    </>
  );
}
