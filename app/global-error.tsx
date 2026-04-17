"use client";

/**
 * Root error boundary for failures that happen inside `app/layout.tsx` itself
 * (e.g. during metadata generation or in the SiteHeader/SiteFooter). Unlike
 * `app/error.tsx`, this component must render its own `<html>` and `<body>`
 * because the surrounding layout failed to render.
 *
 * Kept intentionally minimal: no brand CSS variables or fonts (the stylesheet
 * chain may be what failed), just inline styles that always render.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-US">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          textAlign: "center",
          background: "#FDFCFA",
          color: "#0E0E0E",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <p
          style={{
            fontSize: 10,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#B8973A",
            margin: 0,
          }}
        >
          Error
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 300,
            lineHeight: 1.1,
            margin: "16px 0 0",
            fontFamily:
              '"Cormorant Garamond", Georgia, serif',
          }}
        >
          Something went wrong.
        </h1>
        <p
          style={{
            maxWidth: 420,
            margin: "24px 0 0",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.85,
            color: "#4A4540",
          }}
        >
          An unexpected error occurred loading this page. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: 40,
            minHeight: 44,
            padding: "16px 36px",
            border: "1px solid #C8C0B0",
            background: "transparent",
            fontSize: 12,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "#4A4540",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
