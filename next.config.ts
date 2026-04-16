import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { wpRedirects } from "./lib/migration/wp-redirects";

/** Directory containing this config (the Next.js app root). Used to pin Turbopack when multiple lockfiles exist. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: projectRoot,
  },
  images: {
    // All site-owned images live under `public/images/**` (see
    // `scripts/localize-wp-images.mjs`). Gravatar is kept because testimonial
    // avatars are served by Automattic's CDN.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  async redirects() {
    return [
      // Historical WordPress URL redirects (post slugs, tags, legacy paths).
      ...wpRedirects,

      // Founder portrait: the WordPress media library stored it under an
      // auto-generated Screenshot-* filename that is poor for image SEO. The
      // canonical URL is `/images/mark-hamilton.png`; preserve inbound links
      // by redirecting both the legacy WP path and the intermediate
      // `/images/wp/...` path that `scripts/localize-wp-images.mjs` would have
      // otherwise produced.
      {
        source:
          "/wp-content/uploads/2025/12/Screenshot-2025-12-23-at-6.04.23-PM.png",
        destination: "/images/mark-hamilton.png",
        permanent: true,
      },
      {
        source:
          "/images/wp/2025/12/Screenshot-2025-12-23-at-6.04.23-PM.png",
        destination: "/images/mark-hamilton.png",
        permanent: true,
      },

      // Generic: every remaining `/wp-content/uploads/*` image that was
      // downloaded to `public/images/wp/*` now redirects to its new canonical
      // URL so inbound hotlinks, Pinterest pins, and OpenGraph share cards
      // keep resolving after the DNS cutover.
      {
        source: "/wp-content/uploads/:path*",
        destination: "/images/wp/:path*",
        permanent: true,
      },

      // WordPress housekeeping URLs. These have zero SEO value on their own
      // but are heavily crawled; sending them to the homepage or a sensible
      // target avoids wasted crawl budget and inadvertent 404 reports.
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/", destination: "/", permanent: true },
      { source: "/feed/atom", destination: "/", permanent: true },
      { source: "/feed/atom/", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/comments/feed/", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/wp-json", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      // WP 5.5+ split sitemaps (e.g. `/wp-sitemap-posts-post-1.xml`) live at a
      // single URL segment; path-to-regexp forbids `*` directly after a dash.
      { source: "/wp-sitemap-:segment", destination: "/sitemap.xml", permanent: true },

      // WordPress author archives collapse to the single organizational About
      // page since the Institute publishes under one voice rather than by
      // individual author bylines.
      { source: "/author", destination: "/about", permanent: true },
      { source: "/author/:slug", destination: "/about", permanent: true },
      { source: "/author/:slug/", destination: "/about", permanent: true },
      { source: "/author/:slug/page/:page", destination: "/about", permanent: true },

      {
        source: "/unleashed/download",
        destination: "/unleashed.pdf",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
