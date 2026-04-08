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

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Announcement />
      <Statement />
      <div className="cv-auto">
        <UnifiedField />
      </div>
      <div className="cv-auto">
        <Founder />
      </div>
      <div className="cv-auto">
        <Podcast />
      </div>
      <div className="cv-auto">
        <Neovia />
      </div>
      <div className="cv-auto">
        <TheWay />
      </div>
      <div className="cv-auto">
        <NeothinkSection />
      </div>
      <div className="cv-auto">
        <PrimeLaw />
      </div>
      <div className="cv-auto">
        <PublishedWork />
      </div>
    </main>
  );
}
