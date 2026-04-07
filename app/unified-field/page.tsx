import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "The Unified Field of Conscious Civilization | Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across recorded history.",
  alternates: { canonical: "/unified-field" },
  openGraph: {
    title: "The Unified Field of Conscious Civilization | Neothink Institute",
    description:
      "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across recorded history.",
    url: "https://neothink.com/unified-field",
    type: "article",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const FOUR_PILLARS = [
  {
    numeral: "I",
    title: "The Bicameral Origin",
    description:
      "Julian Jaynes identified a cognitive rupture in 1200 BC: the collapse of the bicameral mind and the emergence of conscious self-direction. Hamilton extends this finding to its civilizational consequences. The rupture did not produce liberation. It produced a vacuum of authority that hierarchy immediately filled. The story of civilization since is the story of that substitution.",
  },
  {
    numeral: "II",
    title: "The Aristotelian Interruption",
    description:
      "For a brief period between 400 and 300 BC, the Aristotelian tradition came within reach of a complete breakthrough: a philosophy grounded in observation, integration, and reason rather than authority. That breakthrough was suppressed — first by the political institutions of Athens, then by the rise of Christianity, then by every subsequent hierarchy that recognized its threat. The 2,400-year detour begins here.",
  },
  {
    numeral: "III",
    title: "The Civilizational Law",
    description:
      "Hamilton identifies a single natural law that governs the rise and fall of every civilization: as initiated force increases, consciousness contracts and civilization declines. As initiated force decreases, consciousness expands and civilization advances. This is not a moral claim. It is a structural one — a pattern that holds across every empire, every economy, and every historical era examined.",
  },
  {
    numeral: "IV",
    title: "The Correction",
    description:
      "The Unified Field does not end with diagnosis. It ends with architecture: the structural conditions under which initiated force is removed at the civilizational level, consciousness is freed to operate at full power, and the 2,400-year detour ends. That architecture is Neovia. The cognitive framework it requires is Neothink. The legal foundation it rests on is the Prime Law.",
  },
] as const;

const TIMELINE_ITEMS = [
  {
    date: "~3200 BC",
    title: "The First Hierarchies",
    description:
      "Writing and organized religion emerge simultaneously in Mesopotamia. Both serve the same function: encoding and enforcing the authority of a ruling class over a subject population.",
  },
  {
    date: "~1200 BC",
    title: "The Bicameral Collapse",
    description:
      "The bicameral mind — in which human beings experienced their own cognition as the voice of gods — collapses. Consciousness becomes self-directed. Hierarchy moves immediately to fill the authority vacuum.",
  },
  {
    date: "~500 BC",
    title: "The Greek Awakening",
    description:
      "The pre-Socratics begin treating the world as an object of rational investigation. For the first time, the organizing principle of inquiry is evidence, not authority. The window for breakthrough opens.",
  },
  {
    date: "~350 BC",
    title: "The Aristotelian Peak",
    description:
      "Aristotle achieves the most complete integration of rational method and empirical observation in the ancient world. He comes closer to the Neothink mentality than any figure in the 2,400 years that follow.",
  },
  {
    date: "~300 BC",
    title: "The Suppression",
    description:
      "The Aristotelian tradition is systematically dismantled by Platonic idealism, then by the rising authority of Christianity. The organizing principle of Western civilization shifts from reason to revelation.",
  },
  {
    date: "~400 AD",
    title: "The Dark Ages Begin",
    description:
      "The institutional consolidation of religious authority produces maximal suppression of independent consciousness. Force is total. Consciousness contracts accordingly. The civilizational law is visible at full scale.",
  },
  {
    date: "~1400 AD",
    title: "The Renaissance",
    description:
      "The rediscovery of Aristotelian texts catalyzes a partial recovery of rational method. The grip of force loosens in limited domains. Art, science, and commerce advance in direct proportion.",
  },
  {
    date: "~1776 AD",
    title: "The American Experiment",
    description:
      "The most successful partial implementation of force reduction in modern history. Constitutional limits on government produce the most rapid expansion of prosperity, innovation, and consciousness in recorded time.",
  },
  {
    date: "~1900 AD",
    title: "The Statist Regression",
    description:
      "Progressive and totalitarian movements reverse the American experiment. Government expands across every domain. The civilizational law reasserts itself: force rises, consciousness contracts.",
  },
  {
    date: "~1970 AD",
    title: "Hamilton Begins",
    description:
      "Mark Hamilton begins the research program that will eventually become the Unified Field: a systematic investigation of why hierarchy suppresses consciousness and what the structure of civilization without it would look like.",
  },
  {
    date: "~2020 AD",
    title: "The Synthesis",
    description:
      "The Unified Field of Conscious Civilization is complete: a single integrated framework that accounts for the full arc of civilizational history, identifies the structural suppressor of consciousness, and maps the conditions for its removal.",
  },
  {
    date: "Now",
    title: "The Correction",
    description:
      "Neovia — the first civilizational architecture explicitly designed to remove initiated force at the structural level — moves from framework to implementation. The 2,400-year detour reaches its conclusion.",
  },
] as const;

const CIVILIZATIONAL_LAW_EXAMPLES = [
  {
    direction: "Force Recedes",
    arrow: "↑",
    isRise: false,
    title: "Early America",
    description:
      "Constitutional limits on government produced the most rapid expansion of prosperity, liberty, and innovation in recorded history. The correlation between force reduction and civilizational advance is precise and measurable.",
  },
  {
    direction: "Force Rises",
    arrow: "↓",
    isRise: true,
    title: "Soviet Union",
    description:
      "Maximum state control — over economics, culture, science, and personal life — produced universal poverty, intellectual stagnation, and eventual collapse. The civilizational law operated exactly as predicted.",
  },
  {
    direction: "Force Recedes",
    arrow: "↑",
    isRise: false,
    title: "The Renaissance",
    description:
      "As religious authority's grip on inquiry loosened, art, science, and commerce exploded simultaneously. The expansion was not caused by new resources or new technology. It was caused by reduced suppression.",
  },
  {
    direction: "Force Rises",
    arrow: "↓",
    isRise: true,
    title: "The Dark Ages",
    description:
      "Maximum religious and political force produced a thousand years of stagnation. Literacy fell. Innovation ceased. Life expectancy declined. The mechanism was structural, not incidental.",
  },
] as const;

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://neothink.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Unified Field",
      item: "https://neothink.com/unified-field",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Unified Field of Conscious Civilization | Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across recorded history.",
  url: "https://neothink.com/unified-field",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function UnifiedFieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SiteHeader />
      <main id="main-content">

        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="uf-hero-heading"
          className="border-b border-[#E8E3D8] px-6 pb-[100px] pt-[180px] text-center md:px-12 max-md:pt-[120px] max-md:pb-20"
        >
          <div className="mx-auto max-w-[800px]">
            <p
              className="nti-reveal mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
              style={{ animationDelay: "0.2s" }}
            >
              The Foundational Discovery
            </p>
            <h1
              id="uf-hero-heading"
              className="nti-reveal font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#0E0E0E]"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                animationDelay: "0.4s",
              }}
            >
              The Unified Field of{" "}
              <em className="text-[#8A7030]">Conscious Civilization</em>
            </h1>
            <p
              className="nti-reveal mx-auto mt-8 max-w-[600px] text-[17px] font-light leading-[1.8] text-[#4A4540]"
              style={{ animationDelay: "0.6s" }}
            >
              The first complete synthesis identifying the single structural
              pattern governing every empire, every economy, and every human
              destiny across recorded history.
            </p>
            <p
              className="nti-reveal mt-6 text-[13px] font-medium uppercase tracking-[0.1em] text-[#4A4540]"
              style={{ animationDelay: "0.8s" }}
            >
              By{" "}
              <span className="text-[#B8973A]">Mark Hamilton</span>
              {" "}·{" "}Neothink Institute · 50 Years of Research
            </p>
          </div>
        </section>

        {/* ── Section 2: Opening Statement ─────────────────────────────────── */}
        <section
          aria-label="Opening statement"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[780px] text-center">
            <blockquote>
              <p className="font-serif text-[clamp(22px,2.6vw,38px)] font-light leading-[1.5] text-[#FDFCFA]">
                Every political system, every economic model, every religion, and
                every ideology ever attempted by human civilization shares one
                structural feature: they are all built on the assumption that
                human consciousness must be directed by an external authority.
                That assumption is not a philosophical position. It is a remnant
                of an{" "}
                <em className="text-[#D4B060]">earlier form of mind.</em>{" "}
                And it is{" "}
                <em className="text-[#D4B060]">obsolete.</em>
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── Section 3: The Argument ───────────────────────────────────────── */}
        <section
          aria-labelledby="uf-argument-heading"
          className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Argument
            </p>
            <h2
              id="uf-argument-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              What the Unified Field{" "}
              <em className="text-[#8A7030]">reveals</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Unified Field of Conscious Civilization is not a political
              theory. It is not an economic model. It is not a philosophy in the
              conventional sense. It is a structural analysis of the single
              causal mechanism that has governed the rise and fall of every
              civilization in recorded history, and a map of what changes when
              that mechanism is removed.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              That mechanism is{" "}
              <strong>initiated force</strong>: the use of coercion — by
              governments, religions, or any other institution — to direct human
              behavior and thought. Hamilton&rsquo;s argument is that this single
              structural feature is responsible for{" "}
              <strong>
                every major form of human suffering, stagnation, and
                civilizational failure
              </strong>{" "}
              across recorded history. Not as one factor among many. As the
              primary cause.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Rupture
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The story begins in 1200 BC, with a cognitive event that Julian
              Jaynes described in 1976 and Hamilton recognized as the key to
              understanding everything that followed. Before that date, human
              beings operated with what Jaynes called the bicameral mind: a
              cognitive architecture in which one hemisphere of the brain issued
              commands experienced as the voice of gods, and the other obeyed.
              Consciousness in the modern sense — self-directed, self-aware,
              capable of independent judgment — did not yet exist.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Around 1200 BC, under the pressure of civilizational collapse,
              mass migration, and the breakdown of the social structures that
              maintained bicameral authority, that architecture failed. Humanity
              was thrown into consciousness without preparation, without
              institutions designed for it, and without a framework for what
              independent cognition was for. The result was not liberation. It
              was disorientation — and an immediate, desperate search for
              external authority to replace the internal authority that had
              collapsed.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[24px] italic leading-[1.5] text-[#7A7570]">
                Hierarchy did not create the human need for external authority.
                It exploited a cognitive emergency. And it has been exploiting
                that emergency for 3,200 years.
              </p>
            </blockquote>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Emergency System
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Into that vacuum stepped hierarchy: kings, priests, emperors, and
              eventually the modern state. These institutions did not create
              human vulnerability to external authority. They exploited a
              cognitive emergency. They offered structure in place of disorientation
              and demanded submission as the price. The arrangement was initially
              functional. It is now the primary obstacle to civilizational advance.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Hamilton&rsquo;s framework treats this not as a moral failing but
              as a structural fact. The hierarchical organization of civilization
              was not a mistake. It was an emergency response that{" "}
              <strong>outlived its emergency.</strong> Understanding this is
              prerequisite to understanding why every attempt to reform hierarchy
              from within — every revolution, every democratic movement, every
              constitutional redesign — has produced the same outcome: a new
              hierarchy in place of the old one.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Lost Breakthrough
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              There was one moment in Western history when a genuine alternative
              was within reach. Between approximately 400 and 300 BC, the
              Aristotelian tradition developed a method of inquiry grounded in
              observation, integration, and reason rather than authority. For
              the first time in recorded history, the organizing principle of
              knowledge was not{" "}
              <em>what the gods commanded</em> or{" "}
              <em>what the rulers decreed</em> but{" "}
              <em>what the evidence showed.</em>
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              That tradition was suppressed — first by Plato&rsquo;s idealism,
              which subordinated observation to abstract forms, then by the
              systematic dismantling of Greek intellectual culture under the
              Roman Empire and its successor, the Christian Church. By 400 AD,
              the most advanced rational tradition in human history had been
              effectively erased, and the organizing principle of Western
              civilization had reverted to revelation and hierarchy.
            </p>

            {/* Pull quote 2 */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[24px] italic leading-[1.5] text-[#7A7570]">
                Aristotle came closer to the Neothink mentality than any figure
                in the 2,400 years that followed. What happened to his tradition
                is not an accident of history. It is the central fact of it.
              </p>
            </blockquote>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The 2,400-Year Detour
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Hamilton calls the period from 300 BC to the present the{" "}
              <strong>2,400-year civilizational detour</strong>: the interval in
              which hierarchy, having suppressed the only tradition capable of
              replacing it, consolidated itself as the universal and apparently
              permanent organizing principle of human civilization. Every
              subsequent development — the Renaissance, the Enlightenment, the
              American Revolution, the Industrial Revolution — represents a
              partial loosening of hierarchical control, producing advances
              proportional to the degree of loosening. But none achieved the
              structural removal of initiated force. All eventually re-established
              a new hierarchy in place of the old.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The detour has had a specific cost. Every century of hierarchical
              organization is a century in which{" "}
              <strong>
                human consciousness operated at a fraction of its potential.
              </strong>{" "}
              The wealth not created, the diseases not cured, the art not made,
              the lives not lived — these are not abstractions. They are the
              measurable cost of a structural suppressor that has been operating
              for 3,200 years.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Correction
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Unified Field does not end with diagnosis. It ends with a
              structural prescription: the conditions under which initiated force
              is removed at the civilizational level, consciousness is freed to
              operate without external suppression, and the 2,400-year detour
              ends. That prescription has three components. The first is{" "}
              <strong>Neothink</strong> — the cognitive architecture of the
              uncovered mind. The second is the{" "}
              <strong>Prime Law</strong> — the constitutional principle that
              makes freedom possible at civilizational scale. The third is{" "}
              <strong>Neovia</strong> — the first jurisdiction explicitly
              designed to operate under that principle.
            </p>
          </div>
        </section>

        {/* ── Section 4: Four Pillars ───────────────────────────────────────── */}
        <section
          aria-labelledby="uf-pillars-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Four Pillars of the Unified Field
            </p>
            <h2
              id="uf-pillars-heading"
              className="nti-reveal text-center font-serif text-[clamp(30px,3vw,48px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              The structural argument,{" "}
              <em className="text-[#8A7030]">pillar by pillar</em>
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2">
              {FOUR_PILLARS.map((pillar) => (
                <div
                  key={pillar.numeral}
                  className="nti-reveal bg-[#F4F1EC] px-[44px] py-[48px] transition-colors duration-200 hover:bg-[#FDFCFA]"
                >
                  <p className="font-serif text-[13px] font-normal uppercase tracking-[0.18em] text-[#B8973A]">
                    {pillar.numeral}
                  </p>
                  <h3 className="mt-4 font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-light leading-[1.8] text-[#4A4540]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: The Complete Arc ───────────────────────────────────── */}
        <section
          aria-labelledby="uf-arc-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            {/* 2-col header */}
            <div className="mb-16 grid grid-cols-1 items-end gap-[80px] lg:grid-cols-2">
              <h2
                id="uf-arc-heading"
                className="nti-reveal font-serif text-[clamp(30px,3vw,48px)] font-light leading-[1.1] text-[#0E0E0E]"
              >
                The Complete Arc of{" "}
                <em className="text-[#8A7030]">Conscious Civilization</em>
              </h2>
              <p className="text-[16px] font-light leading-[1.9] text-[#4A4540]">
                Hamilton&rsquo;s framework maps the full span of recorded
                history as a single coherent arc: from the bicameral collapse
                through the 2,400-year detour to the structural correction now
                underway. Twelve moments. One pattern.
              </p>
            </div>

            {/* 3-col timeline grid */}
            <div className="grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2 lg:grid-cols-3">
              {TIMELINE_ITEMS.map((item) => (
                <div
                  key={item.date}
                  className="nti-reveal bg-[#FDFCFA] px-[32px] py-[36px] transition-colors duration-200 hover:bg-[#F4F1EC]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                    {item.date}
                  </p>
                  <h3 className="mt-3 font-serif text-[20px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.8] text-[#4A4540]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Civilizational Law ────────────────────────────────── */}
        <section
          aria-labelledby="uf-law-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[700px] text-center">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
              The Natural Law of Humanity
            </p>
            <h2
              id="uf-law-heading"
              className="nti-reveal font-serif text-[clamp(28px,3vw,46px)] font-light leading-[1.2] text-[#FDFCFA]"
            >
              As force rises, civilization{" "}
              <em className="text-[#D4B060]">collapses.</em>
              <br />
              As force recedes, civilization{" "}
              <em className="text-[#D4B060]">soars.</em>
            </h2>
            <p className="mx-auto mt-8 text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.65)]">
              This is not a philosophical claim. It is an empirical one, derived
              from the systematic analysis of civilizational history across every
              era and every geography. Hamilton calls it the Natural Law of
              Humanity: the single causal law that governs the trajectory of
              every civilization that has ever existed.
            </p>
          </div>

          {/* 2-col examples grid */}
          <div className="mx-auto mt-16 max-w-[700px] grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] sm:grid-cols-2">
            {CIVILIZATIONAL_LAW_EXAMPLES.map((example) => (
              <div
                key={example.title}
                className="nti-reveal bg-[#0E0E0E] px-8 py-9 transition-colors duration-200 hover:bg-[#141412]"
              >
                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
                    example.isRise ? "text-[#C75050]" : "text-[#D4B060]"
                  }`}
                >
                  {example.direction} {example.arrow}
                </p>
                <h3 className="mt-3 font-serif text-[20px] font-normal leading-[1.3] text-[#FDFCFA]">
                  {example.title}
                </h3>
                <p className="mt-3 text-[14px] font-light leading-[1.8] text-[rgba(253,252,250,0.55)]">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 7: Read Unleashed ─────────────────────────────────────── */}
        <section
          aria-labelledby="uf-book-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div className="nti-reveal">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  The Magnum Opus
                </p>
                <h2
                  id="uf-book-heading"
                  className="font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
                >
                  Read{" "}
                  <em className="text-[#8A7030]">Unleashed</em>
                </h2>
                <p className="mt-6 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  <em>Unleashed</em> is the primary text of the Unified Field:
                  the complete synthesis of fifty years of research into
                  consciousness, hierarchy, and the architecture of human
                  liberation. It builds the framework from first principles, in
                  the order in which the logic demands.
                </p>
                <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  The book does not summarize the framework. It is the
                  framework. Every chapter advances the argument. Every
                  conclusion is load-bearing. Read online or download the full
                  text.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/unleashed"
                    className="inline-flex min-h-[44px] items-center justify-center bg-[#0E0E0E] px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
                  >
                    Read Online
                  </Link>
                  <Link
                    href="/unleashed/pdf"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[#C8C0B0] px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A] hover:text-[#FDFCFA]"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>

              {/* Right: Book display card */}
              <div className="nti-reveal flex flex-col items-center justify-center border border-[#E8E3D8] bg-[#F4F1EC] px-10 py-14 text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#B8973A]">
                  Neothink Institute
                </p>
                <p className="mt-8 font-serif text-[48px] font-light italic leading-[1.1] text-[#0E0E0E]">
                  Unleashed
                </p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                  The Promethean Promise
                </p>
                <p className="mt-6 text-[13px] font-medium tracking-[0.06em] text-[#4A4540]">
                  Mark Hamilton
                </p>
                <div className="mx-auto mt-8 h-px w-12 bg-[#C8C0B0]" />
                <div className="mt-8 grid grid-cols-2 gap-8 text-center">
                  <div>
                    <p className="font-serif text-[28px] font-light text-[#0E0E0E]">
                      24
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#B8973A]">
                      Chapters
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-[28px] font-light text-[#0E0E0E]">
                      2,400
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#B8973A]">
                      Years Covered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 8: Author ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="uf-author-heading"
          className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-14">
              {/* Avatar */}
              <div
                className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-[#E8E3D8]"
                aria-hidden="true"
              >
                <span className="font-serif text-[32px] font-light text-[#4A4540]">
                  MH
                </span>
              </div>

              {/* Text */}
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  The Author
                </p>
                <h2
                  id="uf-author-heading"
                  className="font-serif text-[clamp(28px,2.8vw,44px)] font-light leading-[1.1] text-[#0E0E0E]"
                >
                  Mark Hamilton
                </h2>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#B8973A]">
                  Civilizational Theorist &middot; Founder, Neothink Institute
                </p>
                <p className="mt-6 max-w-[600px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  Mark Hamilton has spent five decades treating civilization as
                  an engineering problem. Not a political problem, not a moral
                  problem — a structural one, with a structural solution. The
                  Unified Field is the result of that investigation: a complete
                  causal account of why hierarchy suppresses consciousness, how
                  long it has been doing so, and what changes when the
                  suppression ends.
                </p>
                <Link
                  href="/mark-hamilton"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#B8973A] transition-opacity duration-200 hover:opacity-70"
                >
                  Full Biography <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
