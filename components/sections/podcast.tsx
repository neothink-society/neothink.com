export function Podcast() {
  return (
    <section id="podcast" aria-labelledby="podcast-heading" className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
          The Flagship
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: text */}
          <div className="nti-reveal">
            <h2 id="podcast-heading" className="font-serif text-[clamp(32px,2.8vw,46px)] font-light leading-[1.1] text-[#0E0E0E]">
              <em className="text-[#8A7030]">Unleashed</em> &mdash; The Podcast
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
              Mark Hamilton and Wallace Hamilton in conversation delivering the
              Unified Field of Conscious Civilization to the world for the first
              time. The discovery that explains why the human mind was caged,
              why civilization keeps collapsing, and what replaces it.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.85] text-[#4A4540]">
              Twelve founding episodes tracing the complete arc: from the
              collapse of the bicameral mind and the silence of the gods,
              through Socrates, Plato, Aristotle, Jesus, and the 2,400-year
              detour, to the Prime Law, Neovia, and the civilization that comes
              next.
            </p>
            <a
              href="https://www.youtube.com/@realmarkhamilton"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center min-h-[44px] bg-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
            >
              Coming Soon &mdash; Subscribe
            </a>
          </div>

          {/* Right: visual block */}
          <div className="nti-reveal flex items-center justify-center">
            <div
              className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E0E0E] px-8 py-16"
              style={{
                aspectRatio: "4/3",
                background:
                  "radial-gradient(ellipse at center, rgba(184,151,58,0.08) 0%, #0E0E0E 70%)",
              }}
            >
              <p className="font-serif text-[48px] font-light italic leading-none text-[#FDFCFA]">
                Unleashed
              </p>
              <p className="mt-3 text-[12px] font-light tracking-[0.15em] text-[rgba(253,252,250,0.45)]">
                A Podcast by Mark Hamilton &amp; Wallace Hamilton
              </p>
              <a
                href="https://www.youtube.com/@realmarkhamilton"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-[rgba(184,151,58,0.3)] px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4B060] transition-all duration-200 hover:border-[rgba(184,151,58,0.7)] hover:text-[#B8973A]"
              >
                12 Founding Episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
