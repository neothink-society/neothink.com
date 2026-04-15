import type { MetadataRoute } from "next";

const BASE_URL = "https://neothink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/unleashed", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neothink", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/neovia", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/immortalis", changeFrequency: "monthly" as const, priority: 0.82 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.88 },
    { path: "/mark-hamilton", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/unified-field", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/the-way", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/published-work", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/manuscripts", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/prime-law", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/get-involved", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/free-courses", changeFrequency: "monthly" as const, priority: 0.78 },
    { path: "/neothink-university", changeFrequency: "monthly" as const, priority: 0.77 },
    { path: "/neothink-reviews", changeFrequency: "monthly" as const, priority: 0.76 },
    { path: "/events", changeFrequency: "monthly" as const, priority: 0.77 },
    { path: "/programs", changeFrequency: "monthly" as const, priority: 0.74 },
    { path: "/project-life", changeFrequency: "monthly" as const, priority: 0.74 },
    { path: "/twelve-visions-party", changeFrequency: "monthly" as const, priority: 0.76 },
    { path: "/the-movement", changeFrequency: "monthly" as const, priority: 0.76 },
    {
      path: "/neothink-secret-society-differs-other-groups",
      changeFrequency: "monthly" as const,
      priority: 0.74,
    },
    {
      path: "/is-neothink-just-another-self-help-book",
      changeFrequency: "monthly" as const,
      priority: 0.72,
    },
    {
      path: "/neothink-society-empowering-challenging",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/neothink-twelve-visions-party-truth",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/discern-genuine-secret-society-opportunities",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/secret-society-invitation-letter",
      changeFrequency: "monthly" as const,
      priority: 0.69,
    },
    {
      path: "/join-neothink-society-secret-meetings",
      changeFrequency: "monthly" as const,
      priority: 0.69,
    },
    {
      path: "/neothink-society-clearing-misunderstandings",
      changeFrequency: "monthly" as const,
      priority: 0.69,
    },
    {
      path: "/mark-hamiltons-neothink-surprising-logic",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/truth-about-neothink-society",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/is-neothink-society-legit",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/neothink-movement-financial-independence",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/what-people-get-wrong-neothink-university",
      changeFrequency: "monthly" as const,
      priority: 0.71,
    },
    {
      path: "/neothink-mastermind-group-success-stories",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/freedom-key-to-unlocking-true-wealth",
      changeFrequency: "monthly" as const,
      priority: 0.72,
    },
    {
      path: "/reprogram-mind-to-be-rich",
      changeFrequency: "monthly" as const,
      priority: 0.72,
    },
    {
      path: "/mark-hamiltons-story",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/immortalis-the-great-experiment-of-our-time",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/the-city-that-cures-disease-neovia",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/the-missing-key-to-universal-prosperity",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/the-greatest-mental-breakthrough",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/a-knight-in-shining-armor-immortalis",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/land-based-immortalis",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/libertarians-next-big-possibility",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/mont-pelerin-pivot-into-our-essence",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/the-grand-experiment-of-our-time",
      changeFrequency: "monthly" as const,
      priority: 0.73,
    },
    {
      path: "/friday-night-essence",
      changeFrequency: "monthly" as const,
      priority: 0.74,
    },
    {
      path: "/self-leader-secret",
      changeFrequency: "monthly" as const,
      priority: 0.74,
    },
    {
      path: "/integrated-thinking",
      changeFrequency: "monthly" as const,
      priority: 0.74,
    },
    {
      path: "/value-creator",
      changeFrequency: "monthly" as const,
      priority: 0.74,
    },
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
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.79 },
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
