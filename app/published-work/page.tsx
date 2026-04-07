import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Published Work | Neothink Institute Research Library",
  description:
    "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
  alternates: { canonical: "/published-work" },
  openGraph: {
    title: "Published Work | Neothink Institute Research Library",
    description:
      "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
    url: "https://neothink.com/published-work",
    type: "website",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const UNIFIED_FIELD_ARTICLES = [
  {
    tag: "The Unified Field",
    title: "When Gods Fell Silent",
    description:
      "The collapse of the bicameral mind in 1200 BC and the civilizational vacuum it created. The moment human consciousness became self-directed — and hierarchy immediately moved to fill the space.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Socrates and the First Inquisition",
    description:
      "How Athens executed its most honest thinker and what that event reveals about the structural relationship between conscious inquiry and political authority across all subsequent history.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Plato's Gambit",
    description:
      "The idealist turn that reversed the Aristotelian promise: how Plato's Forms established the template for every subsequent system of thought-control, from theology to modern ideology.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Aristotle at the Edge",
    description:
      "How close the ancient world came to the Neothink breakthrough — and why it failed. The structural conditions that prevented Aristotle's framework from becoming civilizational architecture.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Alexander and the Last Chance",
    description:
      "The brief window between 336 and 323 BC when a single man's reach might have restructured the ancient world. What that window reveals about the relationship between individual consciousness and civilizational trajectory.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Jesus and the Hierarchy of Heaven",
    description:
      "How the most radical teaching of personal consciousness in the ancient world was systematically converted into the most comprehensive system of external authority ever constructed.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "Augustine and the Architecture of Submission",
    description:
      "The theological framework that institutionalized hierarchy as moral necessity — and the 1,500 years of civilizational consequences that followed from that single structural move.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "The Long Night",
    description:
      "A structural analysis of the Dark Ages as the predictable outcome of maximum initiated force. Not a historical accident. A civilizational law operating at full scale.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "The Return of Light",
    description:
      "The Renaissance as partial force-reduction and the measurable expansion of consciousness, art, science, and commerce that followed. The civilizational law in reverse.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "The Mind Unleashed",
    description:
      "The American founding as the most successful partial implementation of force-reduction in modern history — and why its subsequent reversal followed the same structural logic as every previous regression.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "The Law of Humanity",
    description:
      "A formal statement of the civilizational law: as initiated force increases, consciousness contracts. As initiated force decreases, consciousness expands. The mechanism behind every rise and fall in recorded history.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Unified Field",
    title: "The Century of Blood",
    description:
      "The twentieth century as civilizational proof of concept: the precise correlation between the rise of the state and the production of mass human suffering. The numbers that cannot be explained any other way.",
    author: "Mark Hamilton",
  },
] as const;

const NEOVIA_ARTICLES = [
  {
    tag: "Neovia",
    title: "The Prime Law",
    description:
      "The single constitutional principle upon which Neovia is founded: no person, group, or government may initiate force against another. The legal architecture of a civilization without hierarchy.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neovia",
    title: "The Case for Neovia",
    description:
      "Why a new civilizational architecture is necessary — not as utopian aspiration, but as structural requirement. The conditions under which initiated force can be removed at the civilizational level.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neovia",
    title: "The Next Civilization",
    description:
      "A structural description of what civilization looks like when initiated force is removed: the economic dynamics, the social patterns, the cognitive consequences of a society organized around value creation rather than value extraction.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neovia",
    title: "Life Under the Prime Law",
    description:
      "A concrete examination of daily life, commerce, dispute resolution, and social organization under a Prime Law framework. Not theory — structural prediction based on the civilizational law applied in reverse.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neovia",
    title: "The Civilization That Almost Was",
    description:
      "The historical near-misses: the moments when the structural conditions for Neovia nearly existed, what prevented them from crystallizing, and what those near-misses reveal about the path to realization.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neovia",
    title: "Hierarchy and Its Discontents",
    description:
      "A systematic accounting of what hierarchy costs: in human potential suppressed, value destroyed, suffering generated, and civilizational advancement delayed. The invoice that 2,400 years of force has produced.",
    author: "Mark Hamilton",
  },
] as const;

const NEOTHINK_ARTICLES = [
  {
    tag: "Neothink",
    title: "The New Human",
    description:
      "A description of the cognitive architecture that hierarchy suppressed for 2,400 years — and what becomes possible when it is uncovered. The operating system of the freed mind.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neothink",
    title: "The Mortal vs. the Immortal Mind",
    description:
      "The structural difference between a mind that defers to external authority and a mind that generates its own integrated picture of reality. The cognitive distinction that determines civilizational trajectory.",
    author: "Mark Hamilton",
  },
  {
    tag: "Neothink",
    title: "The Gift of Sight",
    description:
      "On the specific perceptual capability that the Neothink mentality provides: the ability to see through appearances, past illusions, to the causal structure of reality. Once given, it cannot be taken back.",
    author: "Mark Hamilton",
  },
] as const;

const THE_WAY_ARTICLES = [
  {
    tag: "The Way",
    title: "The Covering",
    description:
      "An examination of the psychological mechanisms through which hierarchy conceals its own operation — and the precise moment at which the covering becomes visible to a sufficiently integrated mind.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Way",
    title: "The Performing Self",
    description:
      "How external authority produces a self that performs rather than exists: the psychological cost of a life organized around compliance rather than creation, and what remains when the performance ends.",
    author: "Mark Hamilton",
  },
  {
    tag: "The Way",
    title: "The False World and the Golden World",
    description:
      "A structural contrast between the civilization organized around initiated force — its aesthetics, its incentives, its human costs — and the civilization organized around value creation that the Prime Law makes possible.",
    author: "Mark Hamilton",
  },
] as const;

const AI_RISK_ARTICLES = [
  {
    tag: "AI & Existential Risk",
    title: "The Purpose Void",
    description:
      "Why advanced artificial intelligence without a value framework represents an existential threat — and why the Neothink framework is uniquely suited to provide the purpose architecture that alignment requires.",
    author: "Mark Hamilton",
  },
  {
    tag: "AI & Existential Risk",
    title: "The Nuclear Decision Threshold",
    description:
      "A structural analysis of how initiated force logic, when combined with weapons of mass destruction, produces the conditions for civilizational termination — and the precise intervention required to prevent it.",
    author: "Mark Hamilton",
  },
  {
    tag: "AI & Existential Risk",
    title: "The Supermind",
    description:
      "On the convergence of Neothink cognitive architecture and artificial intelligence: what becomes possible when the integrated human mind operates in conjunction with systems of unlimited information processing.",
    author: "Mark Hamilton",
  },
] as const;

const CIVILIZATION_ARTICLES = [
  {
    tag: "Civilization",
    title: "Consciousness Before Universe",
    description:
      "The philosophical foundation of the Neothink framework: an examination of the primacy of consciousness in the structure of reality and its implications for civilizational architecture.",
    author: "Mark Hamilton",
  },
  {
    tag: "Civilization",
    title: "The Conservation of Consciousness",
    description:
      "On the structural parallel between the conservation laws of physics and the behavior of human consciousness under varying degrees of initiated force. Why consciousness cannot be destroyed — only suppressed.",
    author: "Mark Hamilton",
  },
  {
    tag: "Civilization",
    title: "The Outward Arc",
    description:
      "The long view: the trajectory of consciousness from bicameral origins through suppression and toward the condition of full self-direction. The structural argument that the correction is not merely possible but inevitable.",
    author: "Mark Hamilton",
  },
] as const;

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
      name: "Published Work",
      item: "https://neothink.com/published-work",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Published Work | Neothink Institute Research Library",
  description:
    "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
  url: "https://neothink.com/published-work",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

interface ArticleCardProps {
  tag: string;
  title: string;
  description: string;
  author: string;
}

function ArticleCard({ tag, title, description, author }: ArticleCardProps) {
  return (
    <div className="group relative rounded-sm border border-[#E8E3D8] bg-[#FDFCFA] p-6 transition-colors duration-200 hover:bg-[#F4F1EC] cursor-default">
      {/* Coming Soon badge */}
      <span className="absolute right-4 top-4 border border-[#E8E3D8] bg-[#FDFCFA] px-2 py-0.5 text-[8px] font-medium uppercase tracking-[0.16em] text-[#7A7570]">
        Coming Soon
      </span>

      {/* Tag */}
      <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#B8973A] pr-20">
        {tag}
      </p>

      {/* Title */}
      <h3 className="font-serif text-[21px] font-light leading-[1.25] text-[#0E0E0E]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[14px] font-light leading-[1.75] text-[#4A4540]">
        {description}
      </p>

      {/* Footer */}
      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7A7570]">
        {author}
      </p>
    </div>
  );
}

interface SectionHeaderProps {
  id: string;
  title: string;
  count: number;
  category: string;
}

function SectionHeader({ id, title, count, category }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-end justify-between border-b-2 border-[#B8973A] pb-4">
      <h2
        id={id}
        className="font-serif text-[clamp(28px,3vw,40px)] font-light leading-[1.1] text-[#0E0E0E]"
      >
        {title}
      </h2>
      <p className="mb-0.5 shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7A7570]">
        {count} {category}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PublishedWorkPage() {
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
          aria-labelledby="pw-hero-heading"
          className="border-b border-[#E8E3D8] px-6 pb-[100px] pt-[160px] text-center md:px-12 max-md:pt-[120px] max-md:pb-20"
        >
          <div className="mx-auto max-w-[700px]">
            <p
              className="nti-reveal mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
              style={{ animationDelay: "0.2s" }}
            >
              From the Institute
            </p>
            <h1
              id="pw-hero-heading"
              className="nti-reveal font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#0E0E0E]"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                animationDelay: "0.4s",
              }}
            >
              Published{" "}
              <em className="text-[#8A7030]">Work</em>
            </h1>
            <p
              className="nti-reveal mx-auto mt-8 max-w-[580px] text-[17px] font-light leading-[1.8] text-[#4A4540]"
              style={{ animationDelay: "0.6s" }}
            >
              Research, analysis, and original scholarship from the Neothink
              Institute. The intellectual foundation behind the Unified Field,
              Neovia, The Way, and Neothink — assembled across fifty years of
              investigation into the single structural pattern governing
              civilizational history.
            </p>
          </div>
        </section>

        {/* ── Section 2: Filter Nav ─────────────────────────────────────────── */}
        <nav
          aria-label="Browse by category"
          className="border-b border-[#E8E3D8] bg-[#F4F1EC] px-6 py-8 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="flex items-center gap-4 overflow-x-auto pb-1">
              <span className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-[#7A7570]">
                Browse by
              </span>
              <div className="flex items-center gap-2">
                {[
                  { label: "All Work", href: "#all-work" },
                  { label: "The Unified Field", href: "#unified-field" },
                  { label: "Neovia", href: "#neovia" },
                  { label: "Neothink", href: "#neothink" },
                  { label: "The Way", href: "#the-way" },
                  { label: "Civilization", href: "#civilization" },
                  { label: "AI & Existential Risk", href: "#ai-existential-risk" },
                ].map((tag, i) => (
                  <a
                    key={tag.href}
                    href={tag.href}
                    className={`shrink-0 border px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-150 ${
                      i === 0
                        ? "border-[#B8973A] text-[#B8973A]"
                        : "border-[#E8E3D8] text-[#4A4540] hover:border-[#B8973A] hover:text-[#B8973A]"
                    }`}
                  >
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* ── Section 3: Featured — Unleashed ──────────────────────────────── */}
        <section
          id="all-work"
          aria-labelledby="pw-unleashed-heading"
          className="bg-[#0E0E0E] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              {/* Left: text */}
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  Featured Work
                </p>
                <h2
                  id="pw-unleashed-heading"
                  className="font-serif text-[48px] font-light italic leading-[1.05] text-[#FDFCFA]"
                >
                  Unleashed
                </h2>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  The Promethean Promise
                </p>
                <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#A09A90]">
                  The capstone work of the Neothink Institute. A systematic
                  examination of why consciousness has been suppressed for
                  2,400 years, how that suppression operates at the structural
                  level, and what becomes possible — for individuals and for
                  civilization — when initiated force is removed completely.
                  Fifty years of research. One integrated framework. The
                  Promethean promise fulfilled.
                </p>
                <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.1em] text-[#4A4540]">
                  By{" "}
                  <span className="text-[#D4B060]">Mark Hamilton</span>
                  {" "}· Neothink Institute
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/unleashed"
                    className="inline-block bg-[#D4B060] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#E8C878]"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/manuscripts"
                    className="inline-block border border-[#2A2826] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.13em] text-[#A09A90] transition-colors duration-200 hover:border-[#4A4540] hover:text-[#FDFCFA]"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>

              {/* Right: stats card */}
              <div className="rounded-sm border border-[#2A2826] bg-[#141412] p-8">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D4B060]">
                  By the Numbers
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "24", label: "Chapters" },
                    { value: "2,400+", label: "Years Analyzed" },
                    { value: "50", label: "Years Research" },
                    { value: "4", label: "Parts" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l-2 border-[#B8973A] pl-4">
                      <p className="font-serif text-[36px] font-light leading-[1] text-[#FDFCFA]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#4A4540]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: The Unified Field ─────────────────────────────────── */}
        <section
          id="unified-field"
          aria-labelledby="pw-uf-heading"
          className="bg-[#FDFCFA] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-uf-heading"
              title="The Unified Field"
              count={UNIFIED_FIELD_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {UNIFIED_FIELD_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Neovia ─────────────────────────────────────────────── */}
        <section
          id="neovia"
          aria-labelledby="pw-neovia-heading"
          className="bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-neovia-heading"
              title="Neovia"
              count={NEOVIA_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {NEOVIA_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Neothink ───────────────────────────────────────────── */}
        <section
          id="neothink"
          aria-labelledby="pw-neothink-heading"
          className="bg-[#FDFCFA] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-neothink-heading"
              title="Neothink"
              count={NEOTHINK_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {NEOTHINK_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: The Way ────────────────────────────────────────────── */}
        <section
          id="the-way"
          aria-labelledby="pw-theway-heading"
          className="bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-theway-heading"
              title="The Way"
              count={THE_WAY_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {THE_WAY_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: AI & Existential Risk ─────────────────────────────── */}
        <section
          id="ai-existential-risk"
          aria-labelledby="pw-ai-heading"
          className="bg-[#FDFCFA] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-ai-heading"
              title="AI & Existential Risk"
              count={AI_RISK_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {AI_RISK_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 9: Civilization ───────────────────────────────────────── */}
        <section
          id="civilization"
          aria-labelledby="pw-civ-heading"
          className="bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <SectionHeader
              id="pw-civ-heading"
              title="Civilization"
              count={CIVILIZATION_ARTICLES.length}
              category="Articles"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CIVILIZATION_ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 10: Manuscripts ───────────────────────────────────────── */}
        <section
          aria-labelledby="pw-manuscripts-heading"
          className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-20 md:px-12"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
              {/* Left: text */}
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                  The Complete Works
                </p>
                <h2
                  id="pw-manuscripts-heading"
                  className="font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.15] text-[#0E0E0E]"
                >
                  Mark Hamilton&rsquo;s published{" "}
                  <em className="text-[#8A7030]">manuscripts.</em>
                </h2>
                <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                  The full body of work: original manuscripts, research
                  compilations, and foundational texts produced across five
                  decades of investigation into the structure of consciousness,
                  hierarchy, and civilizational destiny. The intellectual
                  foundation of the Neothink Institute, available in full.
                </p>
                <div className="mt-8">
                  <Link
                    href="/manuscripts"
                    className="inline-block bg-[#B8973A] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#C8A840]"
                  >
                    Explore the Manuscripts
                  </Link>
                </div>
              </div>

              {/* Right: manuscript link cards */}
              <div className="flex flex-col gap-px bg-[#E8E3D8]">
                {[
                  {
                    title: "Unleashed",
                    subtitle: "The Promethean Promise",
                    href: "/unleashed",
                  },
                  {
                    title: "Neothink Manuscripts",
                    subtitle: "The Complete Library",
                    href: "/manuscripts",
                  },
                  {
                    title: "Neo-Tech Discovery",
                    subtitle: "The Original Research",
                    href: "/manuscripts",
                  },
                  {
                    title: "Prime Law Papers",
                    subtitle: "Constitutional Architecture",
                    href: "/manuscripts",
                  },
                ].map((manuscript) => (
                  <Link
                    key={manuscript.title}
                    href={manuscript.href}
                    className="group flex items-center justify-between bg-[#FDFCFA] px-6 py-5 transition-colors duration-150 hover:bg-[#F4F1EC]"
                  >
                    <div>
                      <p className="text-[15px] font-medium text-[#0E0E0E] group-hover:text-[#B8973A] transition-colors duration-150">
                        {manuscript.title}
                      </p>
                      <p className="mt-0.5 text-[12px] font-light text-[#7A7570]">
                        {manuscript.subtitle}
                      </p>
                    </div>
                    <span
                      className="text-[#B8973A] transition-transform duration-150 group-hover:translate-x-1"
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
