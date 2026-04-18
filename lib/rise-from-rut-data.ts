/**
 * Neothink Mentality lesson 1: rise from the routine rut (WordPress post id 4314).
 * @see migration/source/rise-from-rut.html
 */
export const RISE_FROM_RUT_LESSON = {
  number: 1,
  slug: "/rise-from-rut",
  title: "Rise from the Routine Rut",
  shortTitle: "Rise from rut",
  youtubeId: "CALubtBDbiQ",
  /** ISO dates from WordPress export */
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  /** Approximate reading time for on-page essay text. */
  readTimeMinutes: 12,
  /** Matches the lesson video on this page. */
  videoRuntimeMinutes: 15,
} as const;

export const RISE_FROM_RUT_TAKEAWAYS = [
  "The following-mode mentality keeps people in routine ruts by focusing on tasks instead of value creation.",
  "Integrated thinking connects parts of a system so opportunities invisible to specialization become visible.",
  "The lesson video is Hamilton’s first-person account: at fifteen, night-shift dishwasher, essence-thinking versus task-thinking at the same job.",
  "The Neothink mentality is trained with specific tools; the next lesson introduces Project Curiosity.",
] as const;

export const RISE_FROM_RUT_FOLLOWING_MODE = [
  "Focuses only on assigned tasks",
  "Reacts to instructions",
  "Treats work as a list of chores",
  "Limited by specialized thinking",
  "Stays in the routine rut",
  "Waits to be told what to do",
] as const;

export const RISE_FROM_RUT_INTEGRATED = [
  "Seeks the essence of the business or system",
  "Identifies opportunities proactively",
  "Views work through value-creating structure",
  "Unlimited by integration across domains",
  "Creates a path forward",
  "Acts from internal causality",
] as const;

export const RISE_FROM_RUT_STEPS = [
  {
    title: "Shift your perspective",
    body: 'Stop seeing only “tasks to complete.” Ask what creates value in the system you are in.',
  },
  {
    title: "Gather puzzle pieces",
    body: "Observe customers, process, pain, flow. Do not filter too early. Let data accumulate.",
  },
  {
    title: "Let integration happen",
    body: "Connection often completes when the conscious mind is quiet, not when you force a conclusion.",
  },
  {
    title: "Recognize the pattern",
    body: "When the picture snaps together, the solution is obvious because relationships are visible.",
  },
  {
    title: "Act on the vision",
    body: "Integrated insight works in pictures. Communicate clearly and move.",
  },
] as const;

/** FAQ: aligned with visible page; used for JSON-LD. */
export const RISE_FROM_RUT_FAQ = [
  {
    question: "Can anyone develop integrated thinking?",
    answer:
      "Yes. Most people are trained into hyperspecialization and following mode, so integration does not feel natural at first. It is trainable: the shift is from “what am I told to do” to “what creates value here,” supported by tools and repetition.",
  },
  {
    question: "How long does it take to develop the Neothink mentality?",
    answer:
      "It varies. Some people see the pattern quickly once they understand the distinction. Others need weeks of deliberate practice. In the lesson video, Hamilton describes weeks of watching the business through a different lens before the breakthrough on the night he took out the trash.",
  },
  {
    question: "What is the difference between integrated thinking and just thinking harder?",
    answer:
      "Integrated thinking is not effort quantity. It is a change in what you look at: from isolated tasks to connected systems, from assigned duties to value-creating structure. It is qualitative, not quantitative.",
  },
  {
    question: "Why do most people stay stuck in following mode?",
    answer:
      "Schools and workplaces reward compliance and task completion. That conditioning is deep. Breaking it requires conscious recognition of the pattern, then practice in a different mental motion.",
  },
  {
    question: "How do I start practicing integrated thinking today?",
    answer:
      "Ask: what is the essence of this business or system? What creates value here? Observe without forcing an answer. Notice customers, friction, unmet needs. Integration often completes when you are not straining for it.",
  },
] as const;
