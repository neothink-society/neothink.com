/**
 * Article migrated from WordPress post `discern-genuine-secret-society-opportunities` (id 3305).
 * Agency-era post (published 2025-06-09). Body matches WP `content.rendered` (Feb 2026 snapshot).
 * Original “live coaching” link pointed at `neothink-coaching-programs`; on this site use Programs hub.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/3305
 */

import { WP } from "@/lib/wordpress-routes";

export const DGSS_PATH = "/discern-genuine-secret-society-opportunities" as const;

export const DGSS_WP = {
  postId: "3305",
} as const;

export const DGSS_IMAGE = {
  src: "https://neothink.com/wp-content/uploads/2025/07/fraud-investigation-examining-evidence.jpg",
  alt: "How To Discern Genuine Secret Society Opportunities From Fraud",
  width: 1000,
  height: 667,
} as const;

export const DGSS_DATES = {
  datePublished: "2025-06-09",
  dateModified: "2026-02-06",
} as const;

export const DGSS_INTRO_PARAS: readonly string[] = [
  "Not all secret societies are scams. However, learning how to tell genuine secret society opportunities from fraud has never been more important. In a time when many people are searching for direction, meaning, or connection, it’s easy to be drawn to promises that sound profound but ultimately disappoint.",
  "At the [[aboutSociety|Neothink Society]], we’ve spent over 35 years helping individuals escape false hopes and access real tools that create lasting change. People deserve more than vague promises. They deserve a clear path to personal success and fulfillment.",
  "Here’s how to tell the difference between something authentic and something deceptive.",
];

export type DgssSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
};

export const DGSS_SECTIONS: readonly DgssSection[] = [
  {
    id: "real-societies-focus-on-self-leadership-not-control",
    title: "Real Societies Focus on Self-Leadership, Not Control",
    paragraphs: [
      "A true society teaches you how to lead your own life. It does not demand conformity or limit how you think, believe, or act. Our mission is to help members become Self-Leaders – people who build wealth, find happiness, and create a purpose on their own terms.",
      "If an organization tries to dictate your thoughts or requires loyalty without reason, take it as an early warning sign. Control is never part of genuine growth.",
    ],
  },
  {
    id: "empty-promises-signal-a-trap",
    title: "Empty Promises Signal a Trap",
    paragraphs: [
      "Be cautious of offers that sound too easy. If someone promises instant success, wealth, or power without meaningful effort, you’re likely looking at a trap. Many fake groups use flashy language and emotional hype to pull people in.",
      "We don’t offer shortcuts. Our members work toward real transformation through skill-building, mentorship, and a long-term system that touches every area of life, including business, relationships, mindset, and purpose. Change takes time and effort, not just a payment.",
    ],
  },
  {
    id: "ask-what-do-you-actually-get",
    title: "Ask: What Do You Actually Get?",
    paragraphs: [
      "Never join a group without knowing what you’ll receive. Fraudulent societies often sell mystery, but the mystery is not a product. You might get access to a vague idea, a symbol, or an empty title.",
      "Neothink is different. We provide step-by-step training, [[programs|live coaching]], business platforms, and a support system that keeps growing with you. There is no hidden pitch. You are joining a program designed for real-life application and long-term success.",
    ],
  },
  {
    id: "real-societies-are-transparent-about-their-mission",
    title: "Real Societies Are Transparent About Their Mission",
    paragraphs: [
      "Fraud thrives in confusion. If you can't understand what a group really stands for, or no one will clearly explain the mission, something is off.",
      "We are upfront about our vision. Neothink exists to help people unlock personal and financial freedom. Through personalized coaching, interactive masterclasses, and our community business platform, Ascension, we help members move from stagnation to achievement. We also believe in creating a peaceful digital country guided by reason and choice, not pressure or control.",
      "You have the right to ask questions and expect clear answers. A real society is open about its leaders, its goals, and its methods.",
    ],
  },
  {
    id: "you-should-feel-empowered-not-pressured",
    title: "You Should Feel Empowered, Not Pressured",
    paragraphs: [
      "Some organizations use pressure to push people into joining. They’ll warn you that you’re missing out or that your opportunity will vanish if you don’t act fast.",
      "We don’t use those tactics. Our focus is on invitation, not persuasion. We want people to join with clarity and confidence. That’s why we offer a free strategy session: to give you a real look at who we are before you decide. If you feel rushed or guilted into joining, step back and reconsider. Empowerment comes with space to think.",
    ],
  },
  {
    id: "a-real-community-offers-real-support",
    title: "A Real Community Offers Real Support",
    paragraphs: [
      "A real society builds strong relationships among its members. Not just names on a list or users in a group chat, but real people committed to growth and success. We connect our members through local Clubhouses, [[events|live events]], and mentorship programs. We believe in active support, not just onboarding. Our network thrives on shared values, honest conversation, and continued engagement.",
      "Fake groups often avoid any real connection. If there is no clear way to talk to others, to ask questions, or to meet leadership, be cautious.",
    ],
  },
  {
    id: "look-for-a-track-record",
    title: "Look For a Track Record",
    paragraphs: [
      "A legitimate society doesn’t appear overnight. It builds over time, supported by a history of consistent growth, meaningful programs, and satisfied members. A real community leaves a trail of impact you can see and verify.",
      "At The Neothink Society, we’ve spent decades helping people reshape their lives. Many of our members have been with us from the beginning, continuing to grow through each phase of their journey. That kind of loyalty says something. Business owners, professionals, parents, and visionaries across the world have used our system to pursue lasting success and their stories speak louder than any sales pitch.",
      "When evaluating any group, take a close look at its timeline. Has it stood the test of time? Are there clear testimonials? Do members talk about real progress in their personal and professional lives? If those answers are missing, it may be time to walk away.",
    ],
  },
  {
    id: "watch-how-the-group-makes-you-feel",
    title: "Watch How the Group Makes You Feel",
    paragraphs: [
      "Trust your gut. A fake society may try to scare you or shame you. It may use fear to make you stay or guilt to make you pay. A genuine society gives you hope. It teaches you to think clearly and act with confidence.",
      "Here, we speak to the best in people. We believe that each individual already has what it takes to lead, to create, and to thrive. Our goal is to bring that to the surface, not to manipulate or coerce.",
      "You should feel inspired, not intimidated. You should feel calm, not hurried. And you should feel capable, not dependent.",
      "[[joinExternal|We invite you]] to talk with us. Join a free strategy session and see how our teachings can help you live the life you were meant to live. Take control and ask the right questions. Let’s find the society that helps you grow, not one that leaves you lost.",
      "Let your future begin with knowledge, confidence, and the right system behind you.",
    ],
  },
] as const;

export const DGSS_JOIN_EXTERNAL = "https://www.theneothinksociety.com/join-the-neothink-society/";

export const DGSS_ABOUT_SOCIETY_HREF = `${WP.about}#ab-society-heading` as const;

export const DGSS_INLINE_HREF: Record<string, string> = {
  programs: WP.programs,
  events: WP.events,
};
