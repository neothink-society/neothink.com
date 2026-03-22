"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "Unified Field", href: "/unified-field" },
  { label: "Neovia", href: "/neovia" },
  { label: "The Way", href: "/the-way" },
  { label: "Neothink", href: "/neothink" },
  { label: "Mark Hamilton", href: "/mark-hamilton" },
  { label: "Published Work", href: "/published-work" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu and unlock body scroll when resizing past breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/[0.96] backdrop-blur-lg transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[rgba(184,151,58,0.3)]"
          : "border-b border-[rgba(184,151,58,0.15)]"
      }`}
    >
      {/* Top row: logo + hamburger */}
      <div className="relative flex items-center justify-center px-6 pt-3 pb-2 md:px-12">
        <a
          href="/"
          className="font-[family-name:var(--font-cormorant-garamond)] text-[18px] font-light tracking-[0.1em] text-[#0E0E0E]"
        >
          Neothink{" "}
          <span className="text-[#B8973A]">Institute</span>
        </a>
        {/* Hamburger — visible below 860px */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-end justify-center gap-[5px] min-h-[44px] min-w-[44px] p-2 min-[860px]:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-[1.5px] bg-[#0E0E0E] transition-all duration-300 ${
              menuOpen
                ? "w-[22px] translate-y-[6.5px] rotate-45"
                : "w-[22px]"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-[#B8973A] transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-[28px]"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-[#0E0E0E] transition-all duration-300 ${
              menuOpen
                ? "w-[22px] -translate-y-[6.5px] -rotate-45"
                : "w-[22px]"
            }`}
          />
        </button>
      </div>

      {/* Bottom row: nav links — hidden below 860px */}
      <nav aria-label="Main navigation" className="hidden min-[860px]:flex items-center justify-center gap-0 px-6 md:px-12">
        {NAV_LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center">
            {i > 0 && (
              <span className="mx-3 inline-block h-[3px] w-[3px] rounded-full bg-[#B8973A] opacity-40" />
            )}
            <a
              href={link.href}
              className="inline-block py-3 px-4 text-[11px] font-medium uppercase tracking-[0.13em] text-[#4A4540] transition-colors duration-200 hover:text-[#B8973A]"
            >
              {link.label}
            </a>
          </span>
        ))}
        <span className="mx-3 inline-block h-[3px] w-[3px] rounded-full bg-[#B8973A] opacity-40" />
        <a
          href="/unleashed"
          className="ml-0 inline-block bg-[#B8973A] px-[18px] py-[7px] text-[11px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#D4B060]"
        >
          Read Unleashed
        </a>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        role={menuOpen ? "dialog" : undefined}
        aria-modal={menuOpen ? "true" : undefined}
        aria-label={menuOpen ? "Navigation menu" : undefined}
        className={`min-[860px]:hidden fixed inset-x-0 top-[62px] bottom-0 bg-[#FDFCFA] transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-6 pt-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#E8E3D8] py-4 min-h-[44px] flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-[#4A4540] transition-colors duration-200 hover:text-[#B8973A]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6">
            <a
              href="/unleashed"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[#B8973A] py-3 text-center text-[12px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#D4B060]"
            >
              Read Unleashed
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
