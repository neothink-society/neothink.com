import Link from "next/link";

import { FOOTER_COLUMNS } from "@/lib/footer-navigation";

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
        <div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4"
          style={{ marginBottom: "64px" }}
        >
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.label} aria-label={`Footer: ${col.label}`}>
              <p
                className="uppercase tracking-[0.22em] text-[#B8973A]"
                style={{ fontSize: "10px", marginBottom: "20px" }}
              >
                {col.label}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href + link.name}>
                    <Link
                      href={link.href}
                      className="font-light text-[#FDFCFA]/50 transition-colors hover:text-[#FDFCFA]/80"
                      style={{ fontSize: "13px" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div
          className="border-t"
          style={{
            borderColor: "rgba(253,252,250,0.08)",
            paddingTop: "32px",
          }}
        >
          <p
            className="font-light text-[#FDFCFA]/30"
            style={{ fontSize: "12px" }}
          >
            &copy; 2026{" "}
            <span className="font-serif text-[#FDFCFA]/50">
              The Neothink Institute
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
