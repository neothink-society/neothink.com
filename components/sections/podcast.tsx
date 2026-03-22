export function Podcast() {
  return (
    <section id="podcast" aria-labelledby="podcast-heading" className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A7030]">
          The Flagship
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: text */}
          <div className="nti-reveal">
            <h2 id="podcast-heading" className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(36px,4vw,52px)] font-light leading-[1.1] text-[#0E0E0E]">
              <em className="text-[#B8973A]">Unleashed</em> &mdash; The Podcast
            </h2>
            <p className="mt-6 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              Mark Hamilton and Wallace Hamilton in conversation delivering the
              Unified Field of Conscious Civilization to the world for the first
              time. The discovery that explains why the human mind was caged,
              why civilization keeps collapsing, and what replaces it.
            </p>
            <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              Twelve founding episodes tracing the complete arc: from the
              collapse of the bicameral mind and the silence of the gods,
              through Socrates, Plato, Aristotle, Jesus, and the 2,400-year
              detour, to the Prime Law, Neovia, and the civilization that comes
              next.
            </p>
            <a
              href="https://youtube.com/@neothinkinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center min-h-[44px] bg-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#2a2a2a]"
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
              <p className="font-[family-name:var(--font-cormorant-garamond)] text-[48px] font-light italic leading-none text-[#FDFCFA]">
                Unleashed
              </p>
              <p className="mt-3 text-[12px] font-light tracking-[0.15em] text-[#FDFCFA]/65">
                A Podcast by Mark Hamilton &amp; Wallace Hamilton
              </p>
              <div className="mt-8 border border-[#B8973A]/30 px-4 py-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                  12 Founding Episodes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
