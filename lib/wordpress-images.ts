/**
 * Canonical URLs for images that originated in the WordPress media library.
 * Files live under `public/images/...`; legacy `/wp-content/uploads/*` paths
 * redirect to these in `next.config.ts` so inbound links keep working.
 */
export const MARK_HAMILTON_PORTRAIT_URL = "/images/mark-hamilton.png" as const;

/** Free Courses page hero and body (WordPress media library). */
export const FREE_COURSES_HERO_IMAGE_URL =
  "/images/wp/2024/09/free-courses1.png" as const;
