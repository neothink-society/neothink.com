import { NeothinkSeriesCategoryPageContent } from "@/components/neothink-series/neothink-series-category-page-content";
import {
  NEOTHINK_PHILOSOPHY_CATEGORY_INTRO,
  NEOTHINK_PHILOSOPHY_CATEGORY_TITLE,
  NEOTHINK_PHILOSOPHY_SERIES_POSTS,
  neothinkPhilosophyPostHref,
  neothinkPhilosophyPostIsMigrated,
} from "@/lib/neothink-philosophy-category-data";

export function NeothinkPhilosophyCategoryPageContent() {
  return (
    <NeothinkSeriesCategoryPageContent
      title={NEOTHINK_PHILOSOPHY_CATEGORY_TITLE}
      intro={NEOTHINK_PHILOSOPHY_CATEGORY_INTRO}
      headingId="npc-hero-heading"
      introId="npc-intro"
      posts={NEOTHINK_PHILOSOPHY_SERIES_POSTS}
      postHref={neothinkPhilosophyPostHref}
      postIsMigrated={neothinkPhilosophyPostIsMigrated}
    />
  );
}
