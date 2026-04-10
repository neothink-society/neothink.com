import type { Metadata, Viewport } from "next";
import { cormorantGaramond, jost } from "@/lib/fonts";
import { generateSiteMetadata, siteConfig } from "@/lib/metadata";
import { getStructuredDataGraph } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = generateSiteMetadata();

/** Matches `app/manifest.ts` theme — mobile browser chrome + PWA-adjacent hints. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFCFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0E" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredDataGraph();

  return (
    <html
      lang="en-US"
      className={`${cormorantGaramond.variable} ${jost.variable} antialiased`}
    >
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href={`${siteConfig.url}/sitemap.xml`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
