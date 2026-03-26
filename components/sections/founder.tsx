import Image from "next/image";

const CREDENTIALS = [
  {
    title: "Neothink Corpus",
    description:
      "Multi-decade body of work spanning psychology, economics, political theory, and civilizational design, published across millions of words of manuscripts, books, and strategic briefings.",
  },
  {
    title: "Unified Field of Conscious Civilization",
    description:
      "The first complete synthesis linking individual cognition, social order, economic productivity, and political legitimacy to a single underlying structure.",
  },
  {
    title: "Neovia \u2014 Prime Law Civilization Prototype",
    description:
      "Conceived as an anti-extinction architecture: the first jurisdictional solution to the collision between nuclear-era civilization and artificial intelligence.",
  },
  {
    title: "Decades of Independent Research",
    description:
      "Founded the Neothink Institute. Three generations of civilizational development, now entering its public phase.",
  },
] as const;

export function Founder() {
  return (
    <section aria-labelledby="founder-heading" className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
          The Founder
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_480px] lg:gap-[100px]">
          {/* Left column */}
          <div className="nti-reveal">
            <h2 id="founder-heading" className="font-serif text-[clamp(36px,4vw,52px)] font-light leading-[1.1] text-[#0E0E0E]">
              Mark Hamilton
            </h2>
            <span className="mt-3 block text-[13px] font-medium uppercase tracking-[0.14em] text-[#B8973A]">
              Civilizational Theorist &middot; Systems Philosopher &middot; Founder, Neothink Institute
            </span>

            <p className="mt-8 text-[16px] font-light leading-[1.85] text-[#4A4540]">
              Mark Hamilton is an American civilizational theorist and
              institutional founder whose work spans five decades of research
              into consciousness, economics, political theory, and
              civilizational design.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.85] text-[#4A4540]">
              He is the architect of the <strong>Unified Field of Conscious
              Civilization,</strong> the synthesis identifying the single structural
              variable that determines whether civilizations flourish or
              collapse, and the originator of <strong>Neovia</strong>, the first proposed
              civilization designed entirely around the Prime Law prohibition of
              initiated force.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.85] text-[#4A4540]">
              Hamilton&rsquo;s most consequential contribution was not merely
              diagnosing civilization&rsquo;s structural error, but designing its
              correction. His work is distinctive for treating civilization as
              an engineering problem rather than a political debate, and for
              insisting that consciousness is not merely personal, but
              civilizational.
            </p>

            <blockquote className="mt-8">
              <p className="font-serif text-[17px] italic leading-[1.6] text-[#7A7570]">
                &ldquo;Where others sought better rulers, better laws, or better
                ideologies, Hamilton asked a more fundamental question: what if
                hierarchy itself is the problem?&rdquo;
              </p>
            </blockquote>

            {/* Credentials */}
            <div className="mt-10 flex flex-col">
              {CREDENTIALS.map((cred, i) => (
                <div
                  key={i}
                  className={`flex gap-4 py-5 ${
                    i > 0 ? "border-t border-[#E8E3D8]" : ""
                  }`}
                >
                  <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B8973A]" />
                  <div>
                    <p className="text-[14px] font-medium text-[#0E0E0E]">
                      {cred.title}
                    </p>
                    <p className="mt-1 text-[13px] font-light leading-[1.6] text-[#4A4540]">
                      {cred.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/mark-hamilton"
              className="mt-8 inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
            >
              Full Biography &amp; Published Work
            </a>
          </div>

          {/* Right column: portrait */}
          <div className="nti-reveal">
            <div className="relative overflow-hidden bg-[#F4F1EC]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/mark-hamilton.png"
                alt="Mark Hamilton, Founder of the Neothink Institute"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(14,14,14,0.92)] px-6 pb-5">
                <p className="font-serif text-[18px] font-normal text-[#FDFCFA]">
                  Mark Hamilton
                </p>
                <p className="text-[11px] font-light tracking-[0.06em] text-[#FDFCFA]/60">
                  Founder, Neothink Institute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
