"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Menu open/close side effects: body lock, focus management, keyboard, resize
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      // Focus first link in drawer
      const firstLink = drawerRef.current?.querySelector("a");
      if (firstLink) (firstLink as HTMLElement).focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        // Escape closes menu
        if (e.key === "Escape") {
          setMenuOpen(false);
          return;
        }

        // Focus trap: Tab cycles within drawer
        if (e.key === "Tab" && drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
            'a, button, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      const handleResize = () => {
        if (window.innerWidth >= 860) setMenuOpen(false);
      };

      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize, { passive: true });

      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    }

    document.body.style.overflow = "";

    // Return focus to hamburger button when menu closes
    menuButtonRef.current?.focus();
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FDFCFA]/[0.96] backdrop-blur-lg transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_2px_24px_rgba(0,0,0,0.06)] border-b border-[rgba(184,151,58,0.3)]"
          : "border-b border-[rgba(184,151,58,0.15)]"
      }`}
    >
      {/* Top row: logo + hamburger */}
      <div className="relative flex items-center justify-center px-6 pt-3 pb-2 md:px-12 border-b border-[rgba(184,151,58,0.1)]">
        <Link
          href="/"
          className="font-serif text-[18px] font-normal tracking-[0.1em] text-[#0E0E0E]"
        >
          Neothink{" "}
          <span className="text-[#B8973A]">Institute</span>
        </Link>
        {/* Hamburger — visible below 860px */}
        <button
          ref={menuButtonRef}
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
              <span className="mx-0.5 inline-block h-[3px] w-[3px] rounded-full bg-[#B8973A] opacity-40" />
            )}
            <Link
              href={link.href}
              className="inline-block py-3 px-4 text-[11px] font-medium uppercase tracking-[0.13em] text-[#4A4540] transition-colors duration-200 hover:text-[#B8973A]"
            >
              {link.label}
            </Link>
          </span>
        ))}
        <Link
          href="/unleashed"
          className="ml-0 inline-block bg-[#B8973A] px-[18px] py-[7px] text-[11px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#C8A840]"
        >
          Read Unleashed
        </Link>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#E8E3D8] py-4 min-h-[44px] flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-[#4A4540] transition-colors duration-200 hover:text-[#B8973A]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="/unleashed"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[#B8973A] py-3 text-center text-[12px] font-medium uppercase tracking-[0.13em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#C8A840]"
            >
              Read Unleashed
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
