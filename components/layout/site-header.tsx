"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { WP } from "@/lib/wordpress-routes";

const NAV_LINKS = [
  { label: "About", href: WP.about },
  { label: "Mark Hamilton", href: WP.markHamilton },
  { label: "Unified Field", href: WP.unifiedField },
  { label: "Neovia", href: WP.neovia },
  { label: "Neothink", href: WP.neothink },
  { label: "The Way", href: WP.theWay },
  { label: "Published Work", href: WP.publishedWork },
] as const;

const CTA_HREF = WP.unleashed;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 40 : false
  );
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      const firstLink = drawerRef.current?.querySelector("a");
      if (firstLink) (firstLink as HTMLElement).focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          return;
        }

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
    menuButtonRef.current?.focus();
  }, [menuOpen]);

  return (
    <>
      {/* Markup matches WordPress: nav#nti-nav > .nti-nav-top + .nti-nav-bottom */}
      <nav id="nti-nav" className={cn("nti-nav", scrolled && "scrolled")}>
        <div className="nti-nav-top">
          <div className="nti-nav-top-rule" aria-hidden />
          {/* WCAG allows logotypes (brand wordmarks) to bypass contrast
              requirements; we mark this as an image for a11y tools so
              the #B8973A display gold here doesn't read as a failure. */}
          <Link
            href={WP.home}
            className="nti-nav-logo"
            role="img"
            aria-label="Neothink Institute"
          >
            Neothink <span aria-hidden="true">Institute</span>
          </Link>
          <div className="nti-nav-top-rule right" aria-hidden />

          <button
            ref={menuButtonRef}
            id="nti-menu-btn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nti-nav-drawer"
            className={cn("nti-menu-btn", menuOpen && "open")}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="nti-bar nti-bar-top" />
            <span className="nti-bar nti-bar-mid" />
            <span className="nti-bar nti-bar-bot" />
          </button>
        </div>

        <div className="nti-nav-bottom">
          <ul className="nti-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(isActive(link.href) && "active")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={CTA_HREF}
                className={cn(
                  "nti-nav-cta",
                  isActive(CTA_HREF) && "active"
                )}
              >
                Read Unleashed
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        ref={drawerRef}
        id="nti-nav-drawer"
        aria-label="Mobile navigation"
        inert={!menuOpen}
        className={cn("nti-nav-drawer", menuOpen && "open")}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(isActive(link.href) && "active")}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={CTA_HREF} onClick={() => setMenuOpen(false)}>
              Read Unleashed
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
