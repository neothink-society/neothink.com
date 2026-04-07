import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Mark Hamilton | Founder, Neothink Institute",
  description:
    "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia, the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
  alternates: { canonical: "/mark-hamilton" },
  openGraph: {
    title: "Mark Hamilton | Founder, Neothink Institute",
    description:
      "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia, the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
    url: "https://neothink.com/mark-hamilton",
    type: "profile",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const BODY_OF_WORK = [
  {
    href: "/unified-field",
    label: "The Discovery",
    title: "The Unified Field",
    description:
      "A fifty-year investigation into why hierarchy suppresses consciousness and what the structure of a civilization without it would look like. The theoretical foundation of everything that follows.",
    arrow: "Explore the Framework",
  },
  {
    href: "/unleashed",
    label: "The Magnum Opus",
    title: "Unleashed",
    description:
      "The complete synthesis of Hamilton's research on consciousness, hierarchy, and the architecture of human liberation. The primary text of the Neothink framework.",
    arrow: "Read the Book",
  },
  {
    href: "/neovia",
    label: "The Civilizational Design",
    title: "Neovia",
    description:
      "The first jurisdiction explicitly designed to operate without initiated force. A physical civilization built on the premise that consciousness, when freed from hierarchy, can govern itself.",
    arrow: "See the Project",
  },
  {
    href: "/neothink",
    label: "The Operating System",
    title: "Neothink",
    description:
      "The cognitive architecture that hierarchy suppressed for 2,400 years. Hamilton's articulation of what consciousness does when it is no longer blocked by external authority.",
    arrow: "Explore Neothink",
  },
  {
    href: "/prime-law",
    label: "The Constitutional Foundation",
    title: "The Prime Law",
    description:
      "The single constitutional principle that makes Neovia possible: no person, group, or government may initiate force against another. Simple. Absolute. Civilization-changing.",
    arrow: "Read the Prime Law",
  },
  {
    href: "/published-work",
    label: "The Corpus",
    title: "Published Work",
    description:
      "The full body of Hamilton's writing across five decades, from the earliest manuscripts to the most recent civilizational analyses. Every published text, accessible in one place.",
    arrow: "Browse Published Work",
  },
] as const;

const ARTICLES = [
  {
    href: "/articles/bicameral-mind",
    category: "Consciousness",
    title: "When the Gods Fell Silent",
    description:
      "On Julian Jaynes, the bicameral mind, and why the cognitive collapse of 1200 BC is the key to understanding everything that followed.",
  },
  {
    href: "/articles/aristotle",
    category: "The Lineage",
    title: "Aristotle: The Only Full Breakthrough",
    description:
      "Why Aristotle came closer to the Neothink mentality than anyone in the 2,400 years since, and what happened to his work.",
  },
  {
    href: "/articles/prime-law",
    category: "Political Theory",
    title: "The Prime Law",
    description:
      "The case for a single constitutional principle as the foundation of civilization, and why every alternative has failed.",
  },
  {
    href: "/articles/nuclear-threshold",
    category: "Existential Risk",
    title: "The Nuclear Decision Threshold",
    description:
      "A civilizational analysis of the conditions under which nuclear weapons become likely to be used, and what prevents it.",
  },
  {
    href: "/articles/neovia-case",
    category: "Neovia",
    title: "The Case for Neovia",
    description:
      "Why a new jurisdiction is the correct solution to the problem of hierarchy, and what makes Neovia structurally different from every prior attempt.",
  },
  {
    href: "/articles/hierarchy",
    category: "Civilizational Theory",
    title: "Hierarchy",
    description:
      "A structural analysis of hierarchy across two millennia: how it installs itself, how it maintains itself, and why it is not a permanent feature of human civilization.",
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
      name: "Mark Hamilton",
      item: "https://neothink.com/mark-hamilton",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mark Hamilton | Founder, Neothink Institute",
  description:
    "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia, the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
  url: "https://neothink.com/mark-hamilton",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MarkHamiltonPage() {
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
          aria-labelledby="mh-hero-heading"
          className="relative border-b border-[#E8E3D8] px-6 pb-[120px] pt-[160px] md:px-12 max-md:pb-20"
        >
          <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_380px] lg:gap-20">
            {/* Left */}
            <div>
              <p
                className="nti-reveal mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
                style={{ animationDelay: "0.2s" }}
              >
                The Architect
              </p>
              <h1
                id="mh-hero-heading"
                className="nti-reveal font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#0E0E0E]"
                style={{
                  fontSize: "clamp(48px, 6.5vw, 80px)",
                  animationDelay: "0.4s",
                }}
              >
                Mark Hamilton
              </h1>
              <p
                className="nti-reveal mt-5 text-[14px] font-medium uppercase tracking-[0.1em] text-[#B8973A]"
                style={{ animationDelay: "0.5s" }}
              >
                Civilizational Theorist &middot; Systems Philosopher &middot;
                Founder, Neothink Institute
              </p>
              <p
                className="nti-reveal mt-8 text-[17px] font-light leading-[1.9] text-[#4A4540]"
                style={{ animationDelay: "0.6s" }}
              >
                Mark Hamilton has spent five decades doing what almost no one
                else has attempted: treating civilization itself as an
                engineering problem. Not a political problem, not a moral
                problem, not an economic problem. A structural one. His work
                begins with a single question about why human consciousness has
                never been allowed to operate at full power, and follows that
                question to its logical conclusion.
              </p>
            </div>

            {/* Right: portrait */}
            <div className="relative w-full">
              <div
                className="relative overflow-hidden bg-[#F4F1EC]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/mark-hamilton.png"
                  alt="Mark Hamilton, Founder of the Neothink Institute"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
              {/* Caption overlay */}
              <div className="bg-[#0E0E0E] px-6 py-5">
                <p className="font-serif text-[18px] font-light text-[#FDFCFA]">
                  Mark Hamilton
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#B8973A]">
                  Founder, Neothink Institute
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: The Radical Question ─────────────────────────────── */}
        <section
          aria-label="The radical question"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[740px] text-center">
            <blockquote>
              <p className="font-serif text-[clamp(24px,2.8vw,40px)] font-light leading-[1.4] text-[#FDFCFA]">
                Where others sought better rulers, better laws, or better
                ideologies, Hamilton asked a more fundamental question:{" "}
                <em className="text-[#D4B060]">
                  what if hierarchy itself is the problem?
                </em>{" "}
                And more importantly:{" "}
                <em className="text-[#D4B060]">what replaces it?</em>
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── Section 3: The Story ─────────────────────────────────────────── */}
        <section
          aria-labelledby="mh-story-heading"
          className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Story
            </p>
            <h2
              id="mh-story-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              A man who loved humanity too much to accept that{" "}
              <em className="text-[#8A7030]">
                self-destruction was its destiny.
              </em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Mark Hamilton was born into a family of ideas. His father, Frank R.
              Wallace, spent his life developing a philosophy of rational self-interest
              and value creation that formed the intellectual foundation Hamilton
              would later build on. The starting point was not politics or economics
              but something more fundamental:{" "}
              <strong>
                a theory of human consciousness and why it was being suppressed.
              </strong>
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The question Hamilton inherited and then transformed was this: if
              human beings are capable of extraordinary creativity, productivity,
              and benevolence, why does civilization consistently produce war,
              poverty, and stagnation? The standard answers pointed to human
              nature, to resource scarcity, to inevitable historical forces. Hamilton
              found these answers unconvincing. He believed they were{" "}
              <strong>
                the wrong answers to the wrong question.
              </strong>
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The right question, he concluded, was not why humans failed to live
              up to their potential. The right question was what structural feature
              of civilization was actively preventing them from doing so.
            </p>

            {/* Pull quote 1 */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[22px] italic leading-[1.5] text-[#4A4540]">
                Hamilton called it the 2,400-year civilizational detour: the
                period beginning with the suppression of Aristotelian rationalism
                in which hierarchy became the organizing principle of every human
                institution, including the human mind itself.
              </p>
            </blockquote>

            <p className="text-[16px] font-light leading-[1.9] text-[#4A4540]">
              His answer was hierarchy. Not hierarchy in the casual sense of
              org charts and pecking orders, but{" "}
              <strong>
                hierarchy as the systematic use of initiated force to organize
                human activity.
              </strong>{" "}
              Governments that compel compliance through threat of violence.
              Economic systems that extract value through monopoly and coercion.
              Religions and ideologies that demand submission to external
              authority. All of these, Hamilton argued, share a common structure.
              And that structure has a common effect: it blocks the human mind
              from operating at full power.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Fifty Years
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Hamilton began the research that would become the Unified Field in
              the mid-1970s. It was not a short project. Over the following five
              decades, he developed, tested, discarded, and rebuilt the theoretical
              framework that would eventually account for the full arc of
              civilizational history and point toward what comes next.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              During this period he also built the Neothink Society, an
              organization designed to test whether the principles he was
              developing could actually change how people think and live. The
              organization became a laboratory for the ideas. It still is.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The work was not academic. Hamilton was not interested in publishing
              papers or winning arguments. He was interested in{" "}
              <strong>solving the problem.</strong> The distinction matters.
              Academic frameworks optimize for peer recognition. Hamilton&rsquo;s
              framework optimized for one thing: being correct about how civilization
              works and what would have to change for it to work differently.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Discovery
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The central discovery of Hamilton&rsquo;s work is what he calls the
              Unified Field of Conscious Civilization: a theoretical framework
              that identifies hierarchy as the single structural suppressor of
              consciousness across all of recorded history, and maps the
              conditions under which that suppression ends.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The framework integrates cognitive science, political theory,
              economics, and civilizational history into a single causal picture.
              It does not treat these as separate fields. It treats them as{" "}
              <strong>
                different expressions of the same underlying structure.
              </strong>{" "}
              The bicameral mind described by Julian Jaynes. The suppression of
              Aristotelian rationalism. The persistent failure of political
              revolution to produce genuine freedom. The economic underperformance
              of every society organized around extraction rather than creation.
              Hamilton argues these are not separate phenomena. They are the same
              phenomenon at different scales.
            </p>

            {/* Pull quote 2 */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[22px] italic leading-[1.5] text-[#4A4540]">
                Hamilton&rsquo;s work is distinctive for treating civilization as
                an engineering problem. Not a moral problem. Not a political problem.
                A structural one, with a structural solution.
              </p>
            </blockquote>

            <h3 className="font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Build
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The framework produced three outputs. The first is{" "}
              <strong>Neothink</strong>: the cognitive architecture of the
              uncovered mind. The second is the{" "}
              <strong>Prime Law</strong>: the single constitutional principle on
              which a civilization without initiated force can be grounded. The
              third is <strong>Neovia</strong>: the first jurisdiction explicitly
              designed to operate under that principle.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              These are not three separate projects. They are three phases of one
              project. The cognitive architecture is what a freed mind operates
              from. The Prime Law is the legal foundation that makes freedom
              possible at civilizational scale. Neovia is the physical
              instantiation of what happens when both are implemented.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Hamilton is currently completing{" "}
              <strong>
                <em>Unleashed</em>
              </strong>
              , the book that synthesizes fifty years of research into a single
              integrated text. It is the primary document of the Neothink
              framework and the most complete account of the civilizational
              analysis he has been developing since the 1970s.
            </p>
          </div>
        </section>

        {/* ── Section 4: The Body of Work ──────────────────────────────────── */}
        <section
          aria-labelledby="mh-work-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Body of Work
            </p>
            <h2
              id="mh-work-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Five decades.{" "}
              <em className="text-[#8A7030]">One integrated vision.</em>
            </h2>
            <p className="nti-reveal mt-6 max-w-[640px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Hamilton&rsquo;s output spans cognitive science, political theory,
              constitutional design, and civilizational architecture. Each piece
              is a component of the same integrated framework.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2">
              {BODY_OF_WORK.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nti-reveal group block bg-[#F4F1EC] px-10 py-10 transition-colors duration-200 hover:bg-[#FDFCFA]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.85] text-[#4A4540]">
                    {item.description}
                  </p>
                  <p className="mt-6 flex items-center gap-2 text-[13px] font-medium tracking-[0.04em] text-[#B8973A] transition-gap duration-200 group-hover:gap-3">
                    {item.arrow}
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: In His Own Words ──────────────────────────────────── */}
        <section
          aria-labelledby="mh-words-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div className="nti-reveal">
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  In His Own Words
                </p>
                <h2
                  id="mh-words-heading"
                  className="font-serif text-[clamp(32px,3vw,48px)] font-light leading-[1.1] text-[#0E0E0E]"
                >
                  Read{" "}
                  <em className="text-[#8A7030]">Unleashed.</em>
                </h2>
                <p className="mt-6 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  <em>Unleashed</em> is the synthesis of fifty years of
                  research on consciousness, hierarchy, and the architecture of
                  human liberation. It is the primary text of the Neothink
                  framework, written by Hamilton in his own voice.
                </p>
                <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  The book does not summarize the framework. It builds it, from
                  first principles, in the order in which the logic demands.
                  Read online or download the PDF.
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

              {/* Right: book display */}
              <div className="nti-reveal relative flex flex-col items-center justify-center overflow-hidden bg-[#0E0E0E] px-10 py-14">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 40%, rgba(184,151,58,0.12) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 text-center">
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D4B060]">
                    The Magnum Opus
                  </p>
                  <p className="mt-6 font-serif text-[42px] font-light italic leading-[1.1] text-[#FDFCFA]">
                    Unleashed
                  </p>
                  <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[rgba(253,252,250,0.45)]">
                    The Unified Field of Conscious Civilization
                  </p>
                  <p className="mt-6 text-[13px] font-medium tracking-[0.06em] text-[#D4B060]">
                    Mark Hamilton
                  </p>
                  <div className="mx-auto mt-8 h-px w-12 bg-[rgba(184,151,58,0.3)]" />
                  <p className="mt-8 text-[14px] font-light leading-[1.85] text-[rgba(253,252,250,0.55)]">
                    Fifty years. One integrated framework. The complete
                    account of why hierarchy suppresses consciousness and what
                    civilization looks like when it does not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Podcast ───────────────────────────────────────────── */}
        <section
          aria-labelledby="mh-podcast-heading"
          className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
              {/* Icon block */}
              <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center bg-[#0E0E0E]">
                <span
                  className="font-serif text-[36px] font-light italic leading-none text-[#D4B060]"
                  aria-hidden="true"
                >
                  U
                </span>
              </div>

              {/* Text */}
              <div>
                <h3
                  id="mh-podcast-heading"
                  className="font-serif text-[clamp(24px,2.5vw,36px)] font-light leading-[1.2] text-[#0E0E0E]"
                >
                  <em className="text-[#8A7030]">Unleashed</em> &mdash; The
                  Podcast
                </h3>
                <p className="mt-4 max-w-[560px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
                  Mark Hamilton in conversation on consciousness, hierarchy,
                  civilizational design, and the ideas behind the Unified Field.
                  Extended discussions on the themes of the book, available in
                  audio form.
                </p>
                <Link
                  href="/podcast"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#B8973A] transition-opacity duration-200 hover:opacity-70"
                >
                  Coming Soon &mdash; Subscribe
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: Selected Articles ─────────────────────────────────── */}
        <section
          aria-labelledby="mh-articles-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              Selected Work
            </p>
            <h2
              id="mh-articles-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              From Mark Hamilton
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="nti-reveal group block bg-[#FDFCFA] px-8 py-9 transition-colors duration-200 hover:bg-[#F4F1EC]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                    {article.category}
                  </p>
                  <h3 className="mt-3 font-serif text-[20px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.8] text-[#4A4540]">
                    {article.description}
                  </p>
                  <p className="mt-6 flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[#B8973A] transition-gap duration-200 group-hover:gap-3">
                    Read
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/published-work"
                className="inline-flex min-h-[44px] items-center justify-center border border-[#C8C0B0] px-10 text-[13px] font-medium uppercase tracking-[0.12em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A] hover:text-[#FDFCFA]"
              >
                View All Published Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
