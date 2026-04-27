import { Hero } from "@/components/sections/hero";
import { Declaration } from "@/components/sections/declaration";
import { Announcement } from "@/components/sections/announcement";
import { UnifiedField } from "@/components/sections/unified-field";
import { Founder } from "@/components/sections/founder";
import { Podcast } from "@/components/sections/podcast";
import { Neovia } from "@/components/sections/neovia";
import { TheWay } from "@/components/sections/the-way";
import { NeothinkSection } from "@/components/sections/neothink-section";
import { PrimeLaw } from "@/components/sections/prime-law";
import { PublishedWork } from "@/components/sections/published-work";
import { Closing } from "@/components/sections/closing";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Declaration />
      <Announcement />
      <UnifiedField />
      <Founder />
      <Podcast />
      <Neovia />
      <TheWay />
      <NeothinkSection />
      <PrimeLaw />
      <PublishedWork />
      <Closing />
    </main>
  );
}
