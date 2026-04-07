import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete Unified Field of Conscious Civilization by Mark Hamilton. Fifty years of research tracing consciousness from the silence of the gods to Neovia.",
  alternates: { canonical: "/unleashed" },
  openGraph: {
    title: "Unleashed: The Promethean Promise | Mark Hamilton",
    description:
      "The complete Unified Field of Conscious Civilization by Mark Hamilton. Fifty years of research tracing consciousness from the silence of the gods to Neovia.",
    url: "https://neothink.com/unleashed",
    type: "article",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

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
      name: "Unleashed",
      item: "https://neothink.com/unleashed",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete Unified Field of Conscious Civilization by Mark Hamilton. Fifty years of research tracing consciousness from the silence of the gods to Neovia.",
  url: "https://neothink.com/unleashed",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  about: { "@id": "https://neothink.com/#unleashed" },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const TOC_PARTS = [
  {
    type: "front" as const,
    label: "Introduction",
    title: "The Promethean Promise",
    items: [
      {
        chapter: null,
        title: "The Promethean Promise",
        description:
          "The framing address: what this work is, why it exists, and what becomes possible for civilization and for the individual reader when the full synthesis is received.",
      },
    ],
  },
  {
    type: "part" as const,
    partNumber: "One",
    label: "Part One",
    title: "The Unified Field of Conscious Civilization",
    items: [
      {
        chapter: 0,
        title: "The Silence of the Gods",
        description:
          "The bicameral collapse of 1200 BC and the authority vacuum that followed. Why consciousness becoming self-directed did not produce freedom — and what hierarchy did in the moment that followed.",
      },
      {
        chapter: 1,
        title: "The First Hierarchies",
        description:
          "How organized authority emerged to fill the vacuum left by the gods. The structural logic of control that has operated — without interruption — across 3,200 years of recorded history.",
      },
      {
        chapter: 2,
        title: "Socrates and the First Inquisition",
        description:
          "The execution of Athens' most honest thinker and what it reveals about the permanent structural relationship between conscious inquiry and political authority.",
      },
      {
        chapter: 3,
        title: "Plato's Gambit",
        description:
          "The idealist turn that reversed the Aristotelian promise and established the template for every subsequent system of thought-control, from theology to modern ideology.",
      },
      {
        chapter: 4,
        title: "Aristotle at the Edge",
        description:
          "How close the ancient world came to the Neothink breakthrough — and the structural conditions that prevented Aristotle's framework from becoming civilizational architecture.",
      },
      {
        chapter: 5,
        title: "Alexander and the Last Chance",
        description:
          "The brief window between 336 and 323 BC when a single man's reach might have restructured the ancient world. What that window reveals about individual consciousness and civilizational trajectory.",
      },
      {
        chapter: 6,
        title: "Jesus and the Hierarchy of Heaven",
        description:
          "How the most radical teaching of personal consciousness in the ancient world was systematically converted into the most comprehensive system of external authority ever constructed.",
      },
      {
        chapter: 7,
        title: "Augustine and the Architecture of Submission",
        description:
          "The theological framework that institutionalized hierarchy as moral necessity — and the 1,500 years of civilizational consequences that followed from that single structural move.",
      },
      {
        chapter: 8,
        title: "The Long Night",
        description:
          "A structural analysis of the Dark Ages as the predictable outcome of maximum initiated force. Not a historical accident. A civilizational law operating at full scale.",
      },
      {
        chapter: 9,
        title: "The Return of Light",
        description:
          "The Renaissance as partial force-reduction and the measurable expansion of consciousness, art, science, and commerce that followed. The civilizational law in reverse.",
      },
      {
        chapter: 10,
        title: "The Mind Unleashed",
        description:
          "The American founding as the most successful partial implementation of force-reduction in modern history — and why its subsequent reversal followed the same structural logic as every previous regression.",
      },
      {
        chapter: 11,
        title: "The Law of Humanity",
        description:
          "A formal statement of the civilizational law: as initiated force increases, consciousness contracts. As initiated force decreases, consciousness expands. The mechanism behind every rise and fall in recorded history.",
      },
      {
        chapter: 12,
        title: "The Century of Blood",
        description:
          "The twentieth century as civilizational proof of concept: the precise correlation between the rise of the state and the production of mass human suffering.",
      },
      {
        chapter: 13,
        title: "The Conservation of Consciousness",
        description:
          "On the structural parallel between the conservation laws of physics and the behavior of human consciousness under varying degrees of initiated force. Why consciousness cannot be destroyed — only suppressed.",
      },
      {
        chapter: 14,
        title: "The Covering",
        description:
          "An examination of the psychological mechanisms through which hierarchy conceals its own operation — and the precise moment at which the covering becomes visible to a sufficiently integrated mind.",
      },
      {
        chapter: 15,
        title: "The Performing Self",
        description:
          "How external authority produces a self that performs rather than exists. The psychological cost of a life organized around compliance rather than creation.",
      },
      {
        chapter: 16,
        title: "The New Human",
        description:
          "A description of the cognitive architecture that hierarchy suppressed for 2,400 years — and what becomes possible when it is uncovered. The operating system of the freed mind.",
      },
      {
        chapter: 17,
        title: "The Mortal vs. the Immortal Mind",
        description:
          "The structural difference between a mind that defers to external authority and a mind that generates its own integrated picture of reality. The cognitive distinction that determines civilizational trajectory.",
      },
      {
        chapter: 18,
        title: "The Prime Law",
        description:
          "The single constitutional principle upon which a civilization without hierarchy rests: no person, group, or government may initiate force against another. The legal architecture of freedom.",
      },
      {
        chapter: 19,
        title: "The Case for Neovia",
        description:
          "Why a new civilizational architecture is necessary — not as utopian aspiration, but as structural requirement. The conditions under which initiated force can be removed at the civilizational level.",
      },
      {
        chapter: 20,
        title: "The Next Civilization",
        description:
          "A structural description of what civilization looks like when initiated force is removed: the economic dynamics, the social patterns, the cognitive consequences of a society organized around value creation.",
      },
      {
        chapter: 21,
        title: "The Purpose Void",
        description:
          "Why advanced artificial intelligence without a value framework represents an existential threat — and why the Neothink framework is uniquely suited to provide the purpose architecture that alignment requires.",
      },
      {
        chapter: 22,
        title: "The Supermind",
        description:
          "On the convergence of Neothink cognitive architecture and artificial intelligence: what becomes possible when the integrated human mind operates in conjunction with systems of unlimited information processing.",
      },
      {
        chapter: 23,
        title: "Consciousness Before Universe",
        description:
          "The philosophical foundation of the Neothink framework: an examination of the primacy of consciousness in the structure of reality and its implications for civilizational architecture.",
      },
      {
        chapter: 24,
        title: "The Outward Arc",
        description:
          "The long view: the trajectory of consciousness from bicameral origins through suppression and toward the condition of full self-direction. The structural argument that the correction is not merely possible but inevitable.",
      },
    ],
  },
  {
    type: "back" as const,
    label: "Closing",
    title: "Epilogue, Afterword, and Conclusion",
    items: [
      {
        chapter: null,
        title: "Epilogue",
        description:
          "What comes after. The civilizational horizon that opens once initiated force is removed — and the individual horizon that opens once the covering is lifted.",
      },
      {
        chapter: null,
        title: "Afterword",
        description:
          "On the fifty-year arc of research that produced this work: what was discovered, what was discarded, and what the process of synthesis itself revealed about the structure of consciousness.",
      },
      {
        chapter: null,
        title: "Conclusion",
        description:
          "The Promethean promise delivered. A direct address to the reader on what this synthesis means, what it asks, and what becomes possible from this point forward.",
      },
    ],
  },
] as const;

const EXPLORE_LINKS = [
  {
    label: "The Unified Field",
    description: "The complete theoretical framework behind Unleashed.",
    href: "/unified-field",
  },
  {
    label: "Neovia",
    description: "The civilizational architecture the framework describes.",
    href: "/neovia",
  },
  {
    label: "The Way",
    description: "The personal development path for the individual.",
    href: "/the-way",
  },
  {
    label: "The Unleashed Podcast",
    description: "Mark Hamilton and Wallace Hamilton in conversation.",
    href: "/podcast",
  },
  {
    label: "Mark Hamilton",
    description: "The author and fifty-year arc of research.",
    href: "/mark-hamilton",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UnleashedPage() {
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
      <main id="main-content">

        {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
        <section
          aria-labelledby="unleashed-hero-heading"
          className="relative overflow-hidden bg-[#0E0E0E] px-6 pb-[120px] pt-[180px] text-center md:px-12 max-md:pt-[140px] max-md:pb-[80px]"
        >
          {/* Radial gradient overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,176,96,0.12) 0%, rgba(14,14,14,0) 70%)",
            }}
          />

          <div className="relative mx-auto max-w-[640px]">
            {/* Label */}
            <p
              className="nti-reveal mb-5 text-[11px] font-medium uppercase tracking-[0.22em]"
              style={{ color: "#D4B060", animationDelay: "0.2s" }}
            >
              The Magnum Opus
            </p>

            {/* H1 */}
            <h1
              id="unleashed-hero-heading"
              className="nti-reveal font-serif italic font-light leading-[1.0] tracking-[-0.01em] text-[#FDFCFA]"
              style={{
                fontSize: "clamp(56px, 7vw, 100px)",
                animationDelay: "0.4s",
              }}
            >
              Unleashed
            </h1>

            {/* Subtitle */}
            <p
              className="nti-reveal mt-4 text-[14px] font-medium uppercase tracking-[0.2em]"
              style={{ color: "#D4B060", animationDelay: "0.55s" }}
            >
              The Promethean Promise
            </p>

            {/* Author */}
            <p
              className="nti-reveal mt-5 text-[16px] font-light"
              style={{ color: "rgba(253,252,250,0.6)", animationDelay: "0.65s" }}
            >
              by{" "}
              <span style={{ color: "rgba(253,252,250,0.85)" }}>
                Mark Hamilton
              </span>
            </p>

            {/* Gold rule */}
            <div
              className="nti-reveal mx-auto mt-7"
              style={{
                width: 48,
                height: 1,
                backgroundColor: "#D4B060",
                animationDelay: "0.75s",
              }}
              aria-hidden="true"
            />

            {/* Description */}
            <p
              className="nti-reveal mx-auto mt-7 text-[16px] font-light leading-[1.85]"
              style={{
                color: "rgba(253,252,250,0.45)",
                maxWidth: 540,
                animationDelay: "0.85s",
              }}
            >
              The complete delivery of the Unified Field of Conscious
              Civilization. Fifty years of research tracing the arc of
              consciousness from the silence of the gods to Neovia — and the
              single structural law that governs every civilization in between.
            </p>

            {/* Buttons */}
            <div
              className="nti-reveal mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "1.1s" }}
            >
              <a
                href="/unleashed.pdf"
                download
                className="inline-block bg-[#D4B060] px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#E8C878]"
              >
                Download PDF
              </a>
              <a
                href="#toc"
                className="inline-block border border-[rgba(253,252,250,0.25)] px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.13em] text-[rgba(253,252,250,0.7)] transition-colors duration-200 hover:border-[rgba(253,252,250,0.5)] hover:text-[#FDFCFA]"
              >
                View Table of Contents
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 2: Overview ───────────────────────────────────────────── */}
        <section
          aria-labelledby="unleashed-overview-heading"
          className="border-b border-[#E8E3D8] bg-[#FDFCFA] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-start">

              {/* Left: text */}
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  About This Work
                </p>
                <h2
                  id="unleashed-overview-heading"
                  className="font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.15] text-[#0E0E0E]"
                >
                  The synthesis that{" "}
                  <em className="text-[#8A7030]">everything else points toward.</em>
                </h2>
                <div className="mt-8 space-y-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                  <p>
                    <strong className="font-medium text-[#0E0E0E]">
                      Unleashed: The Promethean Promise
                    </strong>{" "}
                    is the capstone work of the Neothink Institute. It is the
                    first complete delivery of the Unified Field of Conscious
                    Civilization: a single integrated framework that accounts
                    for the full arc of civilizational history, identifies the
                    structural suppressor of consciousness, and maps the
                    conditions for its removal.
                  </p>
                  <p>
                    The work traces the arc from the bicameral collapse of
                    1200 BC through the{" "}
                    <strong className="font-medium text-[#0E0E0E]">
                      2,400-year suppression of the Aristotelian tradition
                    </strong>
                    , through every major civilization since — Rome, the Dark
                    Ages, the Renaissance, the American founding, the
                    twentieth century — to the present threshold. One law.
                    Every rise. Every fall. Every consequence.
                  </p>
                  <p>
                    It ends not with diagnosis but with architecture: the
                    structural conditions under which initiated force is
                    removed, consciousness is freed to operate at full power,
                    and the long detour ends. The{" "}
                    <strong className="font-medium text-[#0E0E0E]">
                      Promethean promise
                    </strong>{" "}
                    — fire returned to humanity — fulfilled.
                  </p>
                </div>
              </div>

              {/* Right: stats 2×2 grid with gap-px trick */}
              <div className="flex flex-col gap-px bg-[#E8E3D8]">
                <div className="grid grid-cols-2 gap-px bg-[#E8E3D8]">
                  {[
                    { value: "4", label: "Parts" },
                    { value: "24", label: "Chapters" },
                    { value: "2,400+", label: "Years Analyzed" },
                    { value: "50", label: "Years Research" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center bg-[#FDFCFA] px-8 py-10 text-center"
                    >
                      <p
                        className="font-serif font-light leading-[1]"
                        style={{ fontSize: 36, color: "#B8973A" }}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7A7570]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 3: Table of Contents ─────────────────────────────────── */}
        <section
          id="toc"
          aria-labelledby="unleashed-toc-heading"
          className="bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">

            {/* TOC header */}
            <div className="mb-14 max-w-[640px]">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                Table of Contents
              </p>
              <h2
                id="unleashed-toc-heading"
                className="font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.15] text-[#0E0E0E]"
              >
                The full arc, chapter{" "}
                <em className="text-[#8A7030]">by chapter.</em>
              </h2>
              <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                Twenty-four chapters spanning 3,200 years of civilizational
                history, plus an introduction, epilogue, afterword, and
                conclusion. A complete record of the suppression and the
                correction.
              </p>
            </div>

            {/* TOC parts */}
            <div className="space-y-14">
              {TOC_PARTS.map((part) => (
                <div key={part.label}>

                  {/* Part header */}
                  <div className="mb-6 border-b-2 border-[#B8973A] pb-4">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                      {part.label}
                    </p>
                    <h3 className="font-serif text-[28px] font-light leading-[1.2] text-[#0E0E0E]">
                      {part.title}
                    </h3>
                  </div>

                  {/* Chapter rows */}
                  <div className="flex flex-col">
                    {part.items.map((item, idx) => (
                      <div
                        key={item.title}
                        className={`grid items-start gap-6 border-b border-[#E8E3D8] py-5 transition-colors duration-150 hover:bg-[#EDE8DE] cursor-default ${
                          idx === 0 ? "border-t border-[#E8E3D8]" : ""
                        }`}
                        style={{ gridTemplateColumns: "60px 1fr" }}
                      >
                        {/* Chapter number / bullet */}
                        <div className="flex items-start justify-center pt-0.5">
                          {item.chapter !== null ? (
                            <span className="font-serif text-[16px] font-light text-[#B8973A]">
                              {item.chapter}
                            </span>
                          ) : (
                            <span
                              className="mt-2 block rounded-full bg-[#B8973A]"
                              style={{ width: 5, height: 5 }}
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div>
                          <p className="font-serif text-[20px] font-light leading-[1.2] text-[#0E0E0E]">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[13px] font-light leading-[1.7] text-[#7A7570]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 4: Context / Connection ─────────────────────────────── */}
        <section
          aria-labelledby="unleashed-explore-heading"
          className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-start">

              {/* Left: text */}
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  Continue Exploring
                </p>
                <h2
                  id="unleashed-explore-heading"
                  className="font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.15] text-[#0E0E0E]"
                >
                  The framework{" "}
                  <em className="text-[#8A7030]">in full context.</em>
                </h2>
                <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                  Unleashed does not stand alone. It is the synthesis of a
                  larger body of work spanning the Unified Field, the
                  architecture of Neovia, the personal path of The Way, and
                  the ongoing research conversations of the Unleashed podcast.
                  Each thread extends the whole.
                </p>
              </div>

              {/* Right: link cards with gap-px trick */}
              <div className="flex flex-col gap-px bg-[#E8E3D8]">
                {EXPLORE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between bg-[#F4F1EC] px-6 py-5 transition-colors duration-150 hover:bg-[#EDE8DE]"
                  >
                    <div>
                      <p className="text-[15px] font-medium text-[#0E0E0E] transition-colors duration-150 group-hover:text-[#B8973A]">
                        {link.label}
                      </p>
                      <p className="mt-0.5 text-[12px] font-light text-[#7A7570]">
                        {link.description}
                      </p>
                    </div>
                    <span
                      className="ml-4 shrink-0 text-[#B8973A] transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
