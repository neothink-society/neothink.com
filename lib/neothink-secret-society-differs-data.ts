/**
 * Long-form article migrated from WordPress post `neothink-secret-society-differs-other-groups` (id 1977).
 * Inline links use `[[routeKey|anchor text]]` — see `parseNssdInline` in the page component.
 *
 * @see migration/source/neothink-secret-society-differs-other-groups.html
 */

export const NSSD_PATH = "/neothink-secret-society-differs-other-groups" as const;

export const NSSD_IMAGE = {
  src: "https://neothink.com/wp-content/uploads/2024/08/how-the-neothink-secret-society-differs.jpg",
  alt: "How the Neothink Secret Society differs from other secret groups",
  width: 1000,
  height: 667,
} as const;

/** ISO date (day) from WordPress */
export const NSSD_DATES = {
  datePublished: "2025-03-28",
  dateModified: "2026-02-06",
} as const;

export const NSSD_INTRO =
  "In a world where people constantly seek personal growth and fulfillment, the concept of Neothink by Mark Hamilton offers a transformative journey that promises to unlock hidden potential and lead to lasting happiness. This innovative approach enables individuals to break free from the constraints of traditional thinking, embracing a mindset that encourages creativity, freedom, and prosperity. Shifting focus from stagnation to dynamic growth, Neothink brings a path to personal and professional success, guiding individuals toward a more meaningful and fulfilling life filled with opportunities and achievements.";

export type NssdSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export const NSSD_SECTIONS: readonly NssdSection[] = [
  {
    id: "open-knowledge",
    title: "Promotes open knowledge sharing instead of exclusivity and secrecy",
    paragraphs: [
      "Unlike many [[podcast|secret societies]] that thrive on exclusivity and secrecy, the Neothink Society champions transparency and open knowledge sharing. This [[neothink|unique approach]] allows members to learn from each other’s experiences, promoting collective growth and innovation.",
      "The Neothink Society breaks down barriers that often separate individuals, creating an environment where information flows freely. This openness allows members to gain valuable insights and develop new skills. Encouraging collaboration and understanding, the society becomes a vibrant community where ideas thrive, and people are inspired to reach their full potential.",
    ],
  },
  {
    id: "personal-growth",
    title: "Focuses on personal growth and self-improvement over secrecy",
    paragraphs: [
      "The Neothink Society places a strong emphasis on personal growth and self-improvement rather than maintaining secrecy. Members are encouraged to focus on their individual development, utilizing the resources and support offered by the community to overcome personal challenges and achieve their goals.",
      "Neothink empowers individuals to take control of their lives, fostering a sense of [[faq|purpose]] and fulfillment. This focus on personal growth helps members cultivate a positive mindset and develop the skills necessary to succeed in various aspects of life.",
    ],
  },
  {
    id: "integrated-thinking",
    title: "Encourages integrated thinking rather than dogmatic beliefs",
    paragraphs: [
      "Integrated thinking is a core principle of the Neothink Society, setting it apart from groups that promote dogmatic beliefs. Encouraging members to think critically and question existing norms fosters a culture of innovation and creativity.",
      "This approach allows individuals to break free from restrictive patterns of thought, opening up new possibilities for personal and professional growth. Integrated thinking enables members to see the bigger picture. It makes connections between different ideas and concepts, ultimately leading to more effective problem-solving and decision-making.",
    ],
  },
  {
    id: "empowerment",
    title: "Prioritizes individual empowerment and creative potential over control",
    paragraphs: [
      "The Neothink Society prioritizes individual empowerment and creative potential, bringing members the tools and support they need to harness their talents and achieve success. Emphasizing personal strengths and abilities, the society encourages people to take charge of their lives and pursue their passions without external limitations.",
      "This emphasis on empowerment fosters a sense of independence and self-confidence, allowing individuals to explore new opportunities and reach their full potential. Nurturing creativity and innovation, Neothink inspires members to make meaningful contributions to society and create a life of purpose and fulfillment.",
    ],
  },
  {
    id: "practical-tools",
    title: "Offers practical tools for success in life and business",
    paragraphs: [
      "Neothink provides its members with practical tools for achieving success in both life and business. These resources include strategic planning, goal-setting techniques, and problem-solving skills designed to help individuals navigate challenges and seize opportunities.",
      "Equipping members with these valuable tools, the society empowers them to make informed decisions and pursue their ambitions confidently. This focus on practical skills enables members to enhance their personal and professional lives, leading to increased satisfaction and accomplishment. Through Neothink, individuals gain the knowledge and abilities necessary to thrive in today’s competitive world.",
    ],
  },
  {
    id: "community",
    title: "Fosters community support and collaboration among members",
    paragraphs: [
      "Community support and collaboration are key elements of the Neothink Society, creating a nurturing environment where members can connect and grow together. This supportive network allows individuals to share experiences, exchange ideas, and collaborate on projects, fostering a sense of camaraderie and mutual respect.",
      "Working together, members can achieve more than they could individually, leveraging the collective strength of the community to overcome obstacles and accomplish shared goals. A collaborative spirit enhances personal development and builds strong, lasting relationships, making the Neothink Society a true community of like-minded individuals striving for success.",
    ],
  },
  {
    id: "cta",
    title: "Join the Neothink Society to explore Neothink programs with us",
    paragraphs: [
      "Discover the life-changing potential of Neothink by Mark Hamilton and [[joinExternal|join the Neothink Society]] to unlock a world of opportunities. Our programs are designed to help you break free from the ordinary and [[aboutSociety|explore Neothink programs]] that focus on your growth and happiness.",
      "At the Neothink Society, we believe in empowering individuals to achieve their dreams. By joining us, you’ll gain access to a supportive community and valuable resources that can transform your life. Let us be your guide on the path to prosperity and fulfillment.",
    ],
  },
] as const;

/** Route keys for `[[key|label]]` (except external). */
export const NSSD_INLINE_HREF: Record<string, string> = {
  podcast: "/podcast",
  neothink: "/neothink",
  faq: "/faq",
};

export const NSSD_JOIN_EXTERNAL = "https://www.theneothinksociety.com/join-the-neothink-society/";
