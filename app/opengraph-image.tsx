import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Neothink Institute: The Intellectual Foundation for the Next Stage of Human Civilization";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  // Load font from local file bundled with the project
  const fontData = await readFile(
    join(process.cwd(), "lib/fonts/CormorantGaramond-Light.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0E0E0E",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top decorative line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, #B8973A 0%, #D4B060 50%, #B8973A 100%)",
          }}
        />

        {/* Institute name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: "#B8973A",
              fontFamily: "Cormorant Garamond",
            }}
          >
            Neothink Institute
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#B8973A",
            marginBottom: "40px",
            opacity: 0.5,
          }}
        />

        {/* Main text */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#FDFCFA",
            textAlign: "center",
            maxWidth: "900px",
            fontFamily: "Cormorant Garamond",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>The intellectual foundation for the </span>
          <span style={{ color: "#D4B060" }}>next stage</span>
          <span> of human civilization.</span>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.15em",
              color: "#FDFCFA",
              opacity: 0.4,
              fontFamily: "Cormorant Garamond",
            }}
          >
            neothink.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: fontData,
          style: "normal" as const,
          weight: 300 as const,
        },
      ],
    }
  );
}
