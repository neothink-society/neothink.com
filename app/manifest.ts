import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Neothink Institute",
    short_name: "Neothink",
    description:
      "The intellectual foundation for the next stage of human civilization.",
    start_url: "/",
    display: "browser",
    background_color: "#FDFCFA",
    theme_color: "#B8973A",
    icons: [
      {
        src: "/images/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-source.png",
        sizes: "1000x1000",
        type: "image/png",
      },
    ],
  };
}
