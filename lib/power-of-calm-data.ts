/**
 * Neothink Mentality lesson 14: Power of Calm (WordPress post id 4825).
 * Video: https://www.youtube.com/watch?v=mXp6tLVO2Hg
 * @see migration/source/power-of-calm.html (fetch via wp-fetch-page)
 */
export const POWER_OF_CALM_LESSON = {
  number: 14,
  slug: "/power-of-calm",
  title: "Power of Calm",
  shortTitle: "Power of calm",
  youtubeId: "mXp6tLVO2Hg",
  datePublished: "2026-01-17",
  dateModified: "2026-02-11",
  readTimeMinutes: 9,
  /** ~9:43 spoken runtime on YouTube */
  videoRuntimeMinutes: 10,
} as const;

export const POWER_OF_CALM_TAKEAWAYS = [
  "Chronic panic and overwhelm cap growth: Hamilton uses a print-shop owner stuck at the scale of “his little print shop” as the cautionary image.",
  "A deliberate shift to calm, sincere demeanor can change business outcomes and how people respond to you overnight.",
  "Children are said to sense irrationality and to lean toward calm, rational adults; lessons land through a calm voice without losing control.",
  "In investing and partnerships, calm reads as reliability; anxiety erodes rational decisions and how much others want you in the room.",
] as const;

export const POWER_OF_CALM_PANIC_MODE = [
  "Desk or shop “piling up” faster than you can clear it",
  "Confusion, stress, and a default story of being overwhelmed",
  "Others withdraw, like children recoiling from parental blowups",
  "Rational decisions and long-term deals get harder to defend",
] as const;

export const POWER_OF_CALM_CALM_MODE = [
  "Composed presence under load: fiction’s Blake Carrington used as a young Hamilton’s mental model",
  "Sincere, collected interaction with staff and counterparts",
  "Parenting through steady voice rather than tantrum-for-tantrum",
  "Partners keep you close because you handle stress without getting riled",
] as const;

export const POWER_OF_CALM_STEPS = [
  {
    title: "Name your “Dennis” pattern",
    body:
      "Notice where panic, anxiety, or overwhelm show up first: queues backing up, hours stretching, chest-tight “can’t cope” thinking.",
  },
  {
    title: "Pick a calm reference",
    body:
      "Hamilton borrowed a TV oil tycoon’s composure as a deliberate contrast: not as biography, but as a posture to practice at work.",
  },
  {
    title: "Make it a decision",
    body:
      "He describes the turn as a simple internal decision: stop rehearsing the frantic identity; show up calm, collected, sincere.",
  },
  {
    title: "Test it where stakes are human",
    body:
      "With children or teams, calm is framed as the channel where lessons actually register; fear teaches little except avoidance.",
  },
  {
    title: "Protect judgment in money",
    body:
      "Markets and projects reward rationality; if those around you sense panic, clout and opportunity can slip away.",
  },
] as const;

export const POWER_OF_CALM_FAQ = [
  {
    question: "Do I have to fake being emotionless?",
    answer:
      "The talk contrasts panic with calm and sincere, not numb. The goal is regulated presence so reason and care stay available, not a flat affect.",
  },
  {
    question: "Was Blake Carrington a real role model?",
    answer:
      "Hamilton treats Dynasty as fiction he watched as a young man and used as a visual shorthand for composure under pressure, not as a moral endorsement of the character’s choices.",
  },
  {
    question: "What about legitimate urgency?",
    answer:
      "Urgency and panic differ. The lesson targets the habitual overwhelmed state that caps capacity; you can move fast without broadcasting anxiety.",
  },
  {
    question: "How does this follow “keep the balance”?",
    answer:
      "Balance protects relationships and reflection; calm protects judgment and influence under load. Together they address different failure modes as success compounds.",
  },
  {
    question: "Is the Grand Canyon Skywalk story verifiable?",
    answer:
      "It is Hamilton’s account of why a major partner wanted him in the deal: stressful build, many stakeholders, preference for a steady counterpart. Treat it as on-video testimony, not independent due diligence.",
  },
] as const;
