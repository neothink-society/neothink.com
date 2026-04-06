import type { MetadataRoute } from "next";

const BASE_URL = "https://neothink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    // Additional routes will be added as pages are built
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        "en-US": `${BASE_URL}${route.path}`,
      },
    },
  }));
}
