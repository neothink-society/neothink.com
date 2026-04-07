import type { Metadata } from "next";
import { cormorantGaramond, jost } from "@/lib/fonts";
import { generateSiteMetadata } from "@/lib/metadata";
import { getStructuredDataGraph } from "@/lib/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = generateSiteMetadata();

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
