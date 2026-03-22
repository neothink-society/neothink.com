import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { Announcement } from "@/components/sections/announcement";
import { Statement } from "@/components/sections/statement";
import { UnifiedField } from "@/components/sections/unified-field";
import { Founder } from "@/components/sections/founder";
import { Podcast } from "@/components/sections/podcast";
import { Neovia } from "@/components/sections/neovia";
import { TheWay } from "@/components/sections/the-way";
import { NeothinkSection } from "@/components/sections/neothink-section";
import { PrimeLaw } from "@/components/sections/prime-law";
import { PublishedWork } from "@/components/sections/published-work";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Announcement />
        <Statement />
        <UnifiedField />
        <Founder />
        <Podcast />
        <Neovia />
        <TheWay />
        <NeothinkSection />
        <PrimeLaw />
        <PublishedWork />
      </main>
      <SiteFooter />
    </>
  );
}
