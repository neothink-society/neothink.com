import { FreeCoursesPageContent } from "@/components/free-courses/free-courses-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./free-courses-page.css";

export const metadata = pageMetadata({
  title: "Free Courses & Public Content | Neothink Institute",
  description:
    "Start with the Neothink Mentality course, then Unleashed, Published Work, the podcast, The Way, manuscripts, and the core framework pages. One hub for free public material.",
  pathname: "/free-courses",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Free courses", path: "/free-courses" },
]);

const pageLd = webPageJsonLd({
  pathname: "/free-courses",
  name: "Free Courses & Public Content | Neothink Institute",
  description:
    "Start with the Neothink Mentality course, then Unleashed, Published Work, the podcast, The Way, manuscripts, and the core framework pages. One hub for free public material.",
  aboutId: schemaIds.organization,
});

export default function FreeCoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <FreeCoursesPageContent />
    </>
  );
}
