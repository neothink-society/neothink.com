import Link from "next/link";

import {
  FOOTER_FINE_PRINT_LINKS,
  FOOTER_PRIMARY_LINKS,
} from "@/lib/footer-navigation";

/**
 * Minimalist editorial footer. Renders only the main pages Wallace created
 * (header-nav set + the pages those link to), plus a single fine-print row
 * for legal/contact. Structured so screen readers get a labelled primary
 * nav region and crawlers get a matching `ItemList` (see
 * `getFooterNavigationItemListSchema`).
 */
export function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      style={{ backgroundColor: "#0E0E0E" }}
      className="w-full"
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1160px",
          padding: "80px 48px 40px",
        }}
      >
        <nav aria-label="Primary pages" style={{ marginBottom: "48px" }}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_PRIMARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-light text-[#FDFCFA]/70 transition-colors hover:text-[#B8973A]"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.01em",
                    display: "inline-block",
                    minHeight: "44px",
                    lineHeight: "44px",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="flex flex-col gap-4 border-t sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: "rgba(253,252,250,0.08)",
            paddingTop: "24px",
          }}
        >
          <p
            className="font-light text-[#FDFCFA]/60"
            style={{ fontSize: "12px", letterSpacing: "0.02em" }}
          >
            &copy; 2026{" "}
            <span className="font-serif text-[#FDFCFA]/75">
              The Neothink Institute
            </span>
            . All Rights Reserved.
          </p>
          <nav aria-label="Legal and contact">
            <ul
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ fontSize: "12px", letterSpacing: "0.02em" }}
            >
              {FOOTER_FINE_PRINT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-light text-[#FDFCFA]/60 transition-colors hover:text-[#FDFCFA]/90"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
