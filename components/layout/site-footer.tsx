import Link from "next/link";

const columns = [
  {
    label: "The Framework",
    links: [
      { href: "/unified-field", text: "Unified Field" },
      { href: "/prime-law", text: "Prime Law" },
      { href: "/neothink", text: "Neothink" },
      { href: "/unleashed", text: "Unleashed" },
      { href: "/mark-hamilton", text: "Mark Hamilton" },
    ],
  },
  {
    label: "The Vision",
    links: [
      { href: "/neovia", text: "Neovia" },
      { href: "/unleashed", text: "Podcast" },
    ],
  },
  {
    label: "The Path",
    links: [
      { href: "/the-way", text: "The Way" },
      { href: "/published-work", text: "Published Work" },
      { href: "/contact", text: "Contact" },
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
        {/* Three-column grid */}
        <div
          className="grid grid-cols-1 gap-12 sm:grid-cols-3"
          style={{ marginBottom: "64px" }}
        >
          {columns.map((col) => (
            <div key={col.label}>
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
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
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
