import Link from "next/link";

export function Announcement() {
  return (
    <section aria-labelledby="announcement-heading" className="relative border-t-[3px] border-t-[#B8973A] border-b border-b-[#E8E3D8] bg-[#F4F1EC] px-6 py-20 md:px-12 md:py-20">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10px] top-1/2 -translate-y-1/2 select-none font-serif text-[260px] font-light italic text-[#B8973A] opacity-[0.06]"
      >
        Unleashed
      </span>

      <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 md:grid-cols-[1fr_360px] md:gap-20">
        {/* Book cover — shows first on mobile */}
        <div className="order-1 md:order-2 flex justify-center">
          <div role="img" aria-label="Book cover for Unleashed: The Promethean Promise by Mark Hamilton" className="relative w-full max-w-[320px] overflow-hidden shadow-2xl" style={{ aspectRatio: "2/3" }}>
            {/* Book body */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1508] to-[#2e2010]" />
            {/* Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-[#0E0E0E]/60 to-transparent" />
            {/* Page edges */}
            <div className="absolute right-0 top-2 bottom-2 w-[5px] bg-[#E8E3D8]/30" />
            {/* New Release ribbon */}
            <div className="absolute -right-8 top-6 w-32 rotate-45 bg-[#B8973A] py-1 text-center text-[9px] font-medium uppercase tracking-wider text-[#0E0E0E]">
              New Release
            </div>
            {/* Content */}
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                New Release
              </p>
              <p aria-hidden="true" className="font-serif text-[52px] font-light italic leading-none text-[#FDFCFA]">
                Unleashed
              </p>
              <p className="mt-3 text-[13px] font-light tracking-[0.08em] text-[#D4B060]">
                The Promethean Promise
              </p>
              <div className="mt-8 h-px w-12 bg-[#B8973A]/40" />
              <p className="mt-4 text-[12px] font-light tracking-[0.12em] text-[#FDFCFA]/60">
                Mark Hamilton
              </p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="order-2 md:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="relative flex items-center gap-2 rounded-sm bg-[#B8973A] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#FDFCFA]">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-[#FDFCFA] opacity-75" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FDFCFA]" />
              </span>
              New Release
            </span>
          </div>
          <h2 id="announcement-heading" className="font-serif text-[clamp(40px,5vw,64px)] font-light italic leading-[1.1] text-[#0E0E0E]">
            Unleashed
          </h2>
          <p className="mt-2 text-[13px] font-light uppercase tracking-[0.18em] text-[#B8973A]">
            The Promethean Promise
          </p>
          <p className="mt-6 max-w-[480px] text-[16px] font-light leading-[1.8] text-[#4A4540]">
            After fifty years of research, the complete Unified Field of
            Conscious Civilization is now available. The first synthesis
            identifying the single structural pattern governing every empire,
            every collapse, and every human destiny in recorded history.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/unleashed"
              className="inline-flex items-center min-h-[44px] bg-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
            >
              Read the Full Work
            </Link>
            <Link
              href="/unleashed/download"
              className="inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
