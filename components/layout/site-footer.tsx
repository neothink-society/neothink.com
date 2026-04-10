import Link from "next/link";

import { WP } from "@/lib/wordpress-routes";

type FooterLink = {
  href: string;
  text: string;
  /** Opens in new tab + noopener when href is https */
  newTab?: boolean;
};

/**
 * Footer IA: framework (ideas + founder), vision (flagship build), path (follow & participate).
 * Podcast sits with participation/follow — clearer topical grouping than pairing only with Neovia.
 */
const columns: { label: string; links: FooterLink[] }[] = [
  {
    label: "The Framework",
    links: [
      { href: WP.unifiedField, text: "Unified Field" },
      { href: WP.primeLaw, text: "Prime Law" },
      { href: WP.neothink, text: "Neothink" },
      { href: WP.unleashed, text: "Unleashed" },
      { href: WP.about, text: "About" },
      { href: WP.markHamilton, text: "Mark Hamilton" },
    ],
  },
  {
    label: "The Vision",
    links: [{ href: WP.neovia, text: "Neovia" }],
  },
  {
    label: "The Path",
    links: [
      { href: WP.theWay, text: "The Way" },
      { href: WP.getInvolved, text: "Get Involved" },
      { href: WP.podcast, text: "Podcast & video" },
      { href: WP.publishedWork, text: "Published Work" },
      { href: WP.manuscripts, text: "Manuscripts" },
      { href: WP.contact, text: "Contact" },
    ],
  },
];

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
          className="grid grid-cols-1 gap-12 sm:grid-cols-3"
          style={{ marginBottom: "64px" }}
        >
          {columns.map((col) => (
            <nav key={col.label} aria-label={`Footer: ${col.label}`}>
              <p
                className="uppercase tracking-[0.22em] text-[#B8973A]"
                style={{ fontSize: "10px", marginBottom: "20px" }}
              >
                {col.label}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href + link.text}>
                    <Link
                      href={link.href}
                      className="font-light text-[#FDFCFA]/50 transition-colors hover:text-[#FDFCFA]/80"
                      style={{ fontSize: "13px" }}
                      {...(link.newTab
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.text}
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
