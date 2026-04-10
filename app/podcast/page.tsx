import { PodcastPageContent } from "@/components/podcast/podcast-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./podcast-page.css";

export const metadata = pageMetadata({
  title: "Unleashed — The Podcast | Neothink Institute",
  description:
    "Mark Hamilton and Wallace Hamilton on the Unified Field of Conscious Civilization. Twelve founding episodes — on YouTube.",
  pathname: "/podcast",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Podcast", path: "/podcast" },
]);

const pageLd = webPageJsonLd({
  pathname: "/podcast",
  name: "Unleashed — The Podcast | Neothink Institute",
  description:
    "Mark Hamilton and Wallace Hamilton on the Unified Field of Conscious Civilization. Twelve founding episodes — on YouTube.",
  aboutId: schemaIds.podcastSeries,
});

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <PodcastPageContent />
    </>
  );
}
