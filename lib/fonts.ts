import { Cormorant_Garamond, Jost } from "next/font/google";

/**
 * Brand fonts for the Neothink Institute. Site CSS references the
 * `--font-cormorant-garamond` / `--font-jost` names that `next/font`
 * emits here; shadcn/Sera's `--font-heading` and `--font-sans` slots
 * are aliased to these in `app/globals.css` so the UI primitives
 * inherit brand typography without duplicating font loads.
 */
export const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});
