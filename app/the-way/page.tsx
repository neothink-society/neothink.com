import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Way is the practice of correcting the structural error that caged your mind. Subtractive, not additive. Compatible with everything you already believe.",
  alternates: { canonical: "/the-way" },
  openGraph: {
    title: "The Way | The Personal Path of Conscious Awakening",
    description:
      "The Way is the practice of correcting the structural error that caged your mind. Subtractive, not additive. Compatible with everything you already believe.",
    url: "https://neothink.com/the-way",
    type: "article",
  },
};

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
      name: "The Way",
      item: "https://neothink.com/the-way",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Way is the practice of correcting the structural error that caged your mind. Subtractive, not additive. Compatible with everything you already believe.",
  url: "https://neothink.com/the-way",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const THREE_STAGES = [
  {
    numeral: "I",
    title: "The Waking",
    description:
      "You begin to see the structure — the inherited framework that was placed over your mind before you were old enough to question it. This is not a dramatic event. It is a quiet recognition: the architecture that felt like reality is a construction. And constructions can be examined.",
    tag: "Recognition",
  },
  {
    numeral: "II",
    title: "The Clearing",
    description:
      "You begin removing what was placed there. Not adding new beliefs, new philosophies, new authorities. Removing the false ones. Layer by layer, the covering comes off. The process is subtractive by nature. Nothing genuine is lost. Only the overlay.",
    tag: "Subtraction",
  },
  {
    numeral: "III",
    title: "The Living",
    description:
      "What remains after the clearing is not a new self. It is the original self — the one that existed before the world put it to sleep. You live from that place. Not as a philosophy. Not as a practice you remember to do. As the ground you stand on.",
    tag: "Integration",
  },
] as const;

const CONNECTION_CARDS = [
  {
    href: "/unified-field",
    title: "The Unified Field",
    desc: "The structural diagnosis. Why the covering exists and where it came from.",
    arrow: "Read the Diagnosis",
  },
  {
    href: "/neovia",
    title: "Neovia",
    desc: "The first civilization designed for fully conscious human beings.",
    arrow: "Explore Neovia",
  },
  {
    href: "/neothink",
    title: "Neothink",
    desc: "The operating system of the uncovered mind.",
    arrow: "What Is Neothink",
  },
  {
    href: "/podcast",
    title: "The Podcast",
    desc: "Conversations at the edge of consciousness, civilization, and what comes next.",
    arrow: "Listen Now",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TheWayPage() {
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
          aria-labelledby="tw-hero-heading"
          className="border-b border-[#E8E3D8] px-6 pb-[100px] pt-[160px] text-center md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[780px]">
            <p
              className="nti-reveal mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
              style={{ animationDelay: "0.2s" }}
            >
              The Personal Path
            </p>
            <h1
              id="tw-hero-heading"
              className="nti-reveal font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#0E0E0E]"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                animationDelay: "0.4s",
              }}
            >
              The Unified Field, lived{" "}
              <em className="text-[#8A7030]">from the inside.</em>
            </h1>
            <p
              className="nti-reveal mx-auto mt-8 max-w-[600px] text-[17px] font-light leading-[1.8] text-[#4A4540]"
              style={{ animationDelay: "0.6s" }}
            >
              The Way is not a belief system. It is not a practice you add to
              your life. It is the process of removing what was placed over the
              mind you already have — and returning to the consciousness that was
              always yours.
            </p>
            <p
              className="nti-reveal mt-6 text-[13px] font-medium uppercase tracking-[0.1em] text-[#4A4540]"
              style={{ animationDelay: "0.8s" }}
            >
              A practice of the{" "}
              <span className="text-[#B8973A]">Neothink Institute</span>
            </p>
          </div>
        </section>

        {/* ── Section 2: Opening ───────────────────────────────────────────── */}
        <section
          aria-label="Opening statement"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[740px] text-center">
            <blockquote>
              <p className="font-serif text-[clamp(22px,2.6vw,38px)] font-light leading-[1.5] text-[#FDFCFA]">
                When you were a child, your mind was on fire. Then the world{" "}
                <em className="text-[#D4B060]">put it to sleep.</em> You are
                not broken. You were never broken. You were{" "}
                <em className="text-[#D4B060]">covered.</em>
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── Section 3: The Diagnosis ──────────────────────────────────────── */}
        <section
          aria-labelledby="tw-diagnosis-heading"
          className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Individual Diagnosis
            </p>
            <h2
              id="tw-diagnosis-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              You were not taught to think.{" "}
              <em className="text-[#8A7030]">You were taught to obey.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Unified Field identifies the structural mechanism that has
              suppressed human consciousness for 3,200 years:{" "}
              <strong>initiated force</strong> — the use of coercion by
              governments, religions, institutions, and social systems to direct
              human thought and behavior from the outside.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Way is what that discovery looks like at the level of a single
              human being. The civilizational diagnosis becomes a personal one.
              The structural error that shaped empires also shaped you — your
              beliefs, your sense of authority, your relationship to your own
              mind. Not because you were weak. Because the structure was{" "}
              <strong>designed</strong> to produce exactly this result.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[24px] italic leading-[1.5] text-[#7A7570]">
                The covering is not a metaphor. It is a specific, identifiable
                structure — placed over the mind by external authorities before
                you were old enough to consent to or resist it.
              </p>
            </blockquote>

            <p className="text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Most approaches to human growth ask you to add something: new
              habits, new beliefs, new frameworks, new disciplines. The Way asks
              the opposite question. What if the problem is not what you lack,
              but what was placed on top of you? What if the fire is still
              there, simply waiting for the covering to come off?
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              A Subtractive Practice
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Way is subtractive by design. You are not building a new self.
              You are uncovering the original one. The process involves seeing
              the structure that was placed over your mind, identifying it
              clearly enough to distinguish it from your actual thinking, and
              then — methodically, without drama — removing it.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Nothing genuine is lost in this process. Every capacity you
              actually have remains. What falls away is the overlay: the
              inherited authorities, the borrowed fears, the beliefs you adopted
              from systems that needed you compliant rather than conscious.
            </p>
          </div>
        </section>

        {/* ── Section 4: Two Worlds ─────────────────────────────────────────── */}
        <section
          aria-labelledby="tw-two-worlds-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] sm:grid-cols-2">
              {/* Left: False World */}
              <div className="nti-reveal bg-[#0E0E0E] px-[48px] py-[56px] max-md:px-8 max-md:py-12">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7A7570]">
                  What Most People Experience
                </p>
                <h3
                  id="tw-two-worlds-heading"
                  className="font-serif text-[28px] font-light leading-[1.2] text-[#FDFCFA]"
                >
                  The False World
                </h3>
                <p className="mt-6 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  A persistent sense that the rules of life were written by
                  someone else — and that your role is to navigate them, not
                  author them. Creativity that surfaces and then retreats.
                  Authority that feels borrowed rather than owned.
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  Ambition that stops short of itself. Ideas that arrive fully
                  formed and then dissolve before they can be acted on. The
                  recurring sense that there is more — but that it belongs to
                  someone else, in some other life.
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  This is not a character defect. It is a structural result. The
                  covering was placed there by external authorities whose
                  survival depended on your compliance. It worked exactly as
                  designed.
                </p>
              </div>

              {/* Right: Golden World */}
              <div className="nti-reveal bg-[#0E0E0E] px-[48px] py-[56px] max-md:px-8 max-md:py-12">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  What Becomes Visible
                </p>
                <h3 className="font-serif text-[28px] font-light leading-[1.2] text-[#FDFCFA]">
                  The{" "}
                  <em className="text-[#D4B060]">Golden</em> World
                </h3>
                <p className="mt-6 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  The same reality, seen from beneath the covering instead of
                  through it. Problems that were opaque become transparent.
                  Patterns that were invisible become obvious. The mind
                  operates on its own authority — not borrowed, not derived,
                  not secondhand.
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  Creativity that does not retreat. Ideas that move from
                  recognition to action without the internal friction that
                  stopped them before. The sense — quiet, not dramatic — that
                  you are the author of your own thinking.
                </p>
                <p className="mt-5 text-[15px] leading-[1.85] text-[rgba(253,252,250,0.55)]">
                  This is not a new state. It is the original state — the one
                  the child had before the world intervened. The Way is simply
                  the path back to it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Three Stages ───────────────────────────────────────── */}
        <section
          aria-labelledby="tw-stages-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            {/* Header row */}
            <div className="mb-16 grid grid-cols-1 items-end gap-[80px] lg:grid-cols-[1fr_480px]">
              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  The Process
                </p>
                <h2
                  id="tw-stages-heading"
                  className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
                >
                  Three stages. One{" "}
                  <em className="text-[#8A7030]">direction.</em>
                </h2>
              </div>
              <p className="text-[16px] font-light leading-[1.9] text-[#4A4540]">
                The Way does not move in circles. It moves in one direction:
                toward the original mind, through the accumulated layers that
                obscure it. The stages are not weeks in a program. They are
                movements of understanding.
              </p>
            </div>

            {/* Stage cards */}
            <div className="grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-3">
              {THREE_STAGES.map((stage) => (
                <div
                  key={stage.numeral}
                  className="nti-reveal bg-[#F4F1EC] px-[40px] py-[48px] transition-colors duration-200 hover:bg-[#FDFCFA] max-md:px-8 max-md:py-10"
                >
                  <span
                    className="mb-6 block font-serif font-light text-[#E8E3D8]"
                    style={{ fontSize: "64px", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {stage.numeral}
                  </span>
                  <h3 className="font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-[#4A4540]">
                    {stage.description}
                  </p>
                  <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                    {stage.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: The Practice ───────────────────────────────────────── */}
        <section
          aria-labelledby="tw-practice-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              How It Works
            </p>
            <h2
              id="tw-practice-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Not a regimen. A{" "}
              <em className="text-[#8A7030]">reorientation.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Way does not ask you to meditate for twenty minutes each
              morning, attend weekly sessions, or adopt a new vocabulary. It
              asks something more fundamental: that you begin to notice the
              structure of your own thinking — specifically, where that thinking
              was authored by you and where it was installed by external
              authorities.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Seeing
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The first movement is perception. You learn to see the covering —
              to identify, in real time, when your thinking is operating inside
              a framework that was given to you rather than chosen by you. This
              is not self-criticism. It is structural observation. The covering
              is not your fault. Seeing it clearly is the beginning of the
              practice.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Most people, when they first begin this process, are surprised by
              how pervasive the structure is. Not in the dramatic places they
              expected — politics, religion, ideology — but in the quiet
              assumptions beneath them. The beliefs about what kind of thinking
              is acceptable. The internal voices that function as borrowed
              authorities. The automatic stops that appear before genuine
              inquiry can go too far.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Clearing
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The second movement is removal. Once you can see a piece of the
              covering clearly — once you can distinguish an inherited belief
              from a genuine conclusion — you can set it down. Not dramatically.
              Not with ritual or ceremony. You simply stop carrying something
              that was never yours.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The clearing is ongoing. There is no single moment of total
              revelation followed by permanent freedom. The practice is the
              repeated application of the same movement: see the structure,
              identify it precisely, remove what is not genuinely yours. Layer
              by layer.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Living
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The third movement is not a destination. It is what happens when
              enough of the covering is gone that you begin operating from a
              different ground. Decisions feel different. Thinking feels
              different. Not because you acquired new tools, but because the
              tools you always had are no longer suppressed.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is compatible with every life you are already living.
              Compatible with every belief you already hold. The Way does not
              require you to abandon your religion, change your politics, or
              dismantle your relationships. It requires only that you begin to
              distinguish between what you actually think and what was placed
              there before you could think at all.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[24px] italic leading-[1.5] text-[#7A7570]">
                The mind that comes back is not a new mind. It is the original
                one — the one the child had before the world intervened. That
                mind does not need to be built. It only needs to be uncovered.
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── Section 7: Differentiator ─────────────────────────────────────── */}
        <section
          aria-labelledby="tw-differentiator-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] text-center md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[700px]">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
              What Makes This Different
            </p>
            <h2
              id="tw-differentiator-heading"
              className="nti-reveal font-serif text-[clamp(30px,3vw,48px)] font-light leading-[1.15] text-[#FDFCFA]"
            >
              Compatible with{" "}
              <em className="text-[#D4B060]">everything</em> you already
              believe.
            </h2>

            <p className="mt-8 text-[17px] font-light leading-[1.8] text-[rgba(253,252,250,0.65)]">
              The Way does not ask you to adopt a new worldview. It does not
              compete with your religion, your philosophy, or your existing
              understanding of how life works. It addresses something beneath
              all of those: the structural layer that was installed before any
              of your current beliefs existed.
            </p>

            <p className="mt-6 text-[17px] font-light leading-[1.8] text-[rgba(253,252,250,0.65)]">
              Remove the covering and your existing beliefs become more yours —
              held more freely, tested more honestly, and either confirmed or
              updated on their own merits. The Way is not a replacement. It is
              the ground on which everything else becomes genuine.
            </p>
          </div>
        </section>

        {/* ── Section 8: Connection ─────────────────────────────────────────── */}
        <section
          aria-labelledby="tw-connection-heading"
          className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: context */}
            <div className="nti-reveal">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                The Bigger Picture
              </p>
              <h2
                id="tw-connection-heading"
                className="font-serif text-[clamp(28px,2.8vw,40px)] font-light leading-[1.2] text-[#0E0E0E]"
              >
                The personal path and the{" "}
                <em className="italic text-[#8A7030]">civilizational one</em>{" "}
                are the same.
              </h2>
              <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                The Way is not separate from the larger work. The same
                structural error that suppressed consciousness at the
                civilizational level — initiated force, imposed authority,
                inherited hierarchy — suppressed it in you as well.{" "}
                <strong>
                  What the Unified Field diagnoses for civilization, The Way
                  corrects for the individual.
                </strong>
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                Neothink is the operating system of the uncovered mind — how
                consciousness naturally functions when the covering is gone.
                Neovia is the civilizational architecture designed to make that
                possible at scale.{" "}
                <strong>
                  The Way is where it begins: one mind, returning to itself.
                </strong>
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                Everything built here — the framework, the civilization, the
                practice — starts with this. With the individual. With the
                recognition that the fire was never extinguished. Only covered.
              </p>
            </div>

            {/* Right: link cards */}
            <div className="nti-reveal">
              <div className="border border-[#E8E3D8]">
                {CONNECTION_CARDS.map((card, i) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className={`group block min-h-[44px] bg-[#F4F1EC] px-[32px] py-[28px] transition-colors duration-200 hover:bg-[#FDFCFA] ${
                      i > 0 ? "border-t border-[#E8E3D8]" : ""
                    }`}
                  >
                    <h3 className="font-serif text-[20px] font-normal leading-[1.3] text-[#0E0E0E]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[13px] font-light leading-[1.7] text-[#4A4540]">
                      {card.desc}
                    </p>
                    <span className="mt-3 inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-[#B8973A] transition-colors duration-200 group-hover:text-[#8A7030]">
                      {card.arrow} ›
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 9: CTA ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="tw-cta-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] text-center md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[640px]">
            <h2
              id="tw-cta-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,52px)] font-light italic leading-[1.1] text-[#0E0E0E]"
            >
              Return to the ground.
            </h2>
            <p className="mt-6 text-[17px] font-light leading-[1.8] text-[#4A4540]">
              The fire was never gone. The mind you were born with — curious,
              generative, unafraid — is still there. The Way is simply the
              practice of uncovering it. You can begin now. No prerequisites.
              No prior beliefs required.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-involved"
                className="min-h-[44px] inline-flex items-center justify-center border border-[#0E0E0E] bg-[#0E0E0E] px-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
              >
                Begin The Way
              </Link>
              <Link
                href="/podcast"
                className="min-h-[44px] inline-flex items-center justify-center border border-[#C8C0B0] px-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#B8973A]"
              >
                Listen to the Podcast
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
