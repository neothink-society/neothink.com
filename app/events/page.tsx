import { EventsPageContent } from "@/components/events/events-page-content";
import { EVENTS_PATH, EVENTS_WP } from "@/lib/events-data";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./events-page.css";

const PATH = EVENTS_PATH;

const DESCRIPTION =
  "Neothink Society events: workshops, speakers, and community gatherings for personal growth, integrated thinking, and meaningful connection. Public page on neothink.com by the Neothink Institute.";

const SPEAKABLE_EVENTS = [
  "main#main-content h1",
  "#ev-hero-sub",
  "#ev-about-heading",
  "#ev-stories-heading",
] as const;

export const metadata = pageMetadata({
  title: "Upcoming Events | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Events", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Upcoming Events | Neothink Institute",
  description: DESCRIPTION,
  dateModified: `${EVENTS_WP.dateModified}T15:30:04.000Z`,
  aboutId: schemaIds.society,
  speakableSelectors: SPEAKABLE_EVENTS,
});

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <EventsPageContent />
    </>
  );
}
