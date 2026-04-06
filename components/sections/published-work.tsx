import Link from "next/link";

const ARTICLES: { slug: string; tag: string; title: string; description: string; author: string; category: string }[] = [
  {
    slug: "unified-field",
    tag: "Civilizational Theory",
    title: "The Unified Field of Conscious Civilization: A Complete Introduction",
    description:
      "The synthesis linking individual cognition, social order, and political legitimacy to a single underlying structure. And why it changes everything.",
    author: "Mark Hamilton",
    category: "Foundational",
  },
  {
    slug: "bicameral-mind",
    tag: "Consciousness Studies",
    title: "The Bicameral Mind and Its Modern Residue",
    description:
      "Julian Jaynes identified the psychological rupture that created civilization as we know it. What he could not complete, the Unified Field now closes.",
    author: "Neothink Institute",
    category: "Lexicon",
  },
  {
    slug: "prime-law",
    tag: "Political Theory",
    title: "The Prime Law: Why the Prohibition of Initiated Force Is a Natural Law, Not an Ideology",
    description:
      "Every civilization that has violated the Law of Humanity has paid the same price. The Prime Law codifies what history has already proven.",
    author: "Mark Hamilton",
    category: "Policy",
  },
  {
    slug: "ai-purpose-void",
    tag: "AI & Civilization",
    title: "The Purpose Void: What AI Is About to Do to Human Identity",
    description:
      "Silicon Valley says people will \u201Cjust be more creative.\u201D They don\u2019t understand the depth of the void they are opening or what actually fills it.",
    author: "Wallace Hamilton",
    category: "Current",
  },
  {
    slug: "neovia-case",
    tag: "Neovia",
    title: "The Case for Neovia: Why the Anti-Extinction Architecture Must Be Built Now",
    description:
      "As long as hierarchy legitimizes force and AI accelerates decisions, nuclear annihilation is not a risk. It is a statistical certainty. Neovia is the only exit.",
    author: "Mark Hamilton",
    category: "Strategic",
  },
  {
    slug: "performing-self",
    tag: "The Way",
    title: "The Performing Self: Why You Are Not Who You Think You Are",
    description:
      "The version of you that has been running your life is not you. It is a character built to survive the hierarchy. This is how to find what\u2019s underneath.",
    author: "Wallace Hamilton",
    category: "Personal",
  },
];

export function PublishedWork() {
  return (
    <section id="published-work" aria-labelledby="published-work-heading" className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
          Published Work
        </p>
        <h2 id="published-work-heading" className="mb-[52px] font-serif text-[clamp(32px,2.8vw,46px)] font-light leading-[1.1] text-[#0E0E0E]">
          From the Institute
        </h2>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="nti-reveal group block bg-[#F4F1EC] px-8 py-9 no-underline transition-colors duration-200 hover:bg-[#FDFCFA] border border-[#E8E3D8] -mt-px first:mt-0 md:[&:nth-child(-n+2)]:mt-0 lg:[&:nth-child(-n+3)]:mt-0 md:-ml-px md:first:ml-0 md:[&:nth-child(2n+1)]:ml-0 lg:[&:nth-child(2n+1)]:ml-px lg:[&:nth-child(3n+1)]:ml-0"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                {article.tag}
              </span>
              <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                {article.title}
              </h3>
              <p className="mt-3 text-[14px] font-light leading-[1.65] text-[#4A4540]">
                {article.description}
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A7570]">
                {article.author} &middot; {article.category}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/published-work"
            className="inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#B8973A]"
          >
            View All Published Work
          </Link>
        </div>
      </div>
    </section>
  );
}
