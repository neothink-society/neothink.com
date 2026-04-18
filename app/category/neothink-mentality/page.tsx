import Link from "next/link";

import { NeothinkSeriesCategoryPageContent } from "@/components/neothink-series/neothink-series-category-page-content";
import {
  breadcrumbListJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NEOTHINK_MENTALITY_CATEGORY_PATH,
  NEOTHINK_MENTALITY_CATEGORY_SEO_DESCRIPTION,
  NEOTHINK_MENTALITY_CATEGORY_TITLE,
  NEOTHINK_MENTALITY_CATEGORY_INTRO,
  NEOTHINK_MENTALITY_MIGRATED_SLUGS,
  NEOTHINK_MENTALITY_SERIES_POSTS,
  neothinkMentalityPostHref,
  neothinkMentalityPostIsMigrated,
} from "@/lib/neothink-mentality-category-data";
import { siteConfig } from "@/lib/metadata";
import { WP } from "@/lib/wordpress-routes";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../../neothink-university/neothink-university-page.css";
import "../../is-neothink-just-another-self-help-book/shb-page.css";
import "../../neothink-awakening/neothink-awakening-html.css";

const PATH = NEOTHINK_MENTALITY_CATEGORY_PATH;
const DOC_TITLE = `${NEOTHINK_MENTALITY_CATEGORY_TITLE} · Lesson series | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#nmc-intro"] as const;

const LATEST_POST_DATE = NEOTHINK_MENTALITY_SERIES_POSTS[0]?.date ?? "2026-01-17";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: NEOTHINK_MENTALITY_CATEGORY_SEO_DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: NEOTHINK_MENTALITY_CATEGORY_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: NEOTHINK_MENTALITY_CATEGORY_SEO_DESCRIPTION,
  dateModified: `${LATEST_POST_DATE}T12:00:00.000Z`,
  pageType: "CollectionPage",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  speakableSelectors: SPEAKABLE,
});

const migratedForSchema = NEOTHINK_MENTALITY_SERIES_POSTS.filter((p) =>
  NEOTHINK_MENTALITY_MIGRATED_SLUGS.has(p.slug)
).map((p) => ({
  title: p.title,
  path: `/${p.slug}`,
}));

const seriesListLd = itemListJsonLd(
  PATH,
  "mentality-series-lessons",
  `${NEOTHINK_MENTALITY_CATEGORY_TITLE}: lessons on ${siteConfig.url.replace(/^https?:\/\//, "")}`,
  "Neothink Mentality lesson posts on neothink.com (same slugs as WordPress). See also /neothink-mentality for the course overview.",
  migratedForSchema
);

export default function NeothinkMentalityCategoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesListLd) }} />
      <NeothinkSeriesCategoryPageContent
        title={NEOTHINK_MENTALITY_CATEGORY_TITLE}
        intro={NEOTHINK_MENTALITY_CATEGORY_INTRO}
        headingId="nmc-hero-heading"
        introId="nmc-intro"
        posts={NEOTHINK_MENTALITY_SERIES_POSTS}
        postHref={neothinkMentalityPostHref}
        postIsMigrated={neothinkMentalityPostIsMigrated}
        introFooter={
          <p
            className="nu-hero-sub"
            style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto", marginTop: 12 }}
          >
            <Link
              href={WP.neothinkMentality}
              className="font-medium text-[#0e0e0e] underline decoration-[#b8973a]/40 underline-offset-4 transition-colors hover:decoration-[#b8973a]"
              style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
            >
              Course overview, videos, and FAQ
            </Link>
            {", the public arc for these fourteen lessons."}
          </p>
        }
      />
    </>
  );
}
