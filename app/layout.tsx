import type { Metadata } from "next";
import { cormorantGaramond, jost } from "@/lib/fonts";
import { generateSiteMetadata } from "@/lib/metadata";
import { getStructuredDataGraph } from "@/lib/structured-data";
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
        {children}
      </body>
    </html>
  );
}
