import type { MetadataRoute } from "next";

const BASE_URL = "https://neothink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/unleashed", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neothink", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neovia", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/mark-hamilton", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/unified-field", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/the-way", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/published-work", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/manuscripts", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/prime-law", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/get-involved", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/podcast", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
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
