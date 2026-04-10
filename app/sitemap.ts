import type { MetadataRoute } from "next";

const BASE_URL = "https://neothink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/unleashed", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neothink", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neovia", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.88 },
    { path: "/mark-hamilton", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/unified-field", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/the-way", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/published-work", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/manuscripts", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/prime-law", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/get-involved", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/free-courses", changeFrequency: "monthly" as const, priority: 0.78 },
    { path: "/neothink-mentality", changeFrequency: "monthly" as const, priority: 0.82 },
    { path: "/rise-from-rut", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/freedom-from-rights", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/beyond-tunnel-vision", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/impact-profits", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/higher-level-thinking", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/areas-of-profit", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/unlock-your-genius", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/the-prime-law-mentality", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/soaring-productivity", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/cure-to-aging", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/soar-beyond-peers", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/money-love-affair", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/keep-the-balance", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/power-of-calm", changeFrequency: "monthly" as const, priority: 0.8 },
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
