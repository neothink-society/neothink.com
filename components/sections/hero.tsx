export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-[120px] md:px-12">
      <div className="mx-auto w-full max-w-[1160px]">
        <p
          className="nti-reveal mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
          style={{ animationDelay: "0.2s" }}
        >
          Neothink Institute
        </p>
        <h1
          id="hero-heading"
          className="nti-reveal max-w-[820px] mb-9 font-serif font-light leading-[1.08] tracking-[-0.01em] text-[clamp(48px,6vw,86px)] text-[#0E0E0E]"
          style={{ animationDelay: "0.4s" }}
        >
          The intellectual foundation for the{" "}
          <em className="text-[#8A7030]">next stage</em> of human civilization.
        </h1>
        <p
          className="nti-reveal mb-[52px] max-w-[560px] text-[17px] font-light leading-[1.75] text-[#4A4540]"
          style={{ animationDelay: "0.6s" }}
        >
          For fifty years, the Neothink Institute has been developing the
          unified framework for understanding and correcting the structural
          error at the root of civilization&rsquo;s recurring cycles of collapse. As
          artificial intelligence accelerates human capability and existential
          risk simultaneously, that framework is no longer theoretical. The
          window to act is open and closing.
        </p>
        <div
          className="nti-reveal flex flex-wrap gap-4"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="/unified-field"
            className="inline-flex items-center min-h-[44px] bg-[#0E0E0E] border border-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
          >
            Explore the Framework
          </a>
          <a
            href="/neovia"
            className="inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
          >
            See What We&rsquo;re Building
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#E8E3D8] to-transparent" />

      {/* Scroll indicator */}
      <span
        className="nti-reveal absolute bottom-8 left-6 text-[10px] font-medium uppercase tracking-[0.15em] text-[#7A7570] md:left-12"
        style={{ animationDelay: "1.2s" }}
      >
        Scroll to begin
      </span>
    </section>
  );
}
