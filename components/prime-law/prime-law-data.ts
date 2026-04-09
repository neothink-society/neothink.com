/** Prime Law page — structured content from WordPress export */

export const PREAMBLE_PARAGRAPHS = [
  "The purpose of human life is to prosper and live happily.",
  "The function of government is to provide the conditions that let individuals fulfill that purpose.",
  "The Prime Law guarantees those conditions by forbidding the use of initiatory force, fraud, or coercion by any person or group against any individual, property, or contract.",
] as const;

export const PRIME_ARTICLES = [
  {
    num: "Article 1",
    text: "No person, group of persons, or government shall initiate force, threat of force, or fraud against any individual's self, property, or contract.",
  },
  {
    num: "Article 2",
    text: "Force is morally and legally justified only for protection from those who violate Article 1.",
  },
  {
    num: "Article 3",
    text: "No exceptions shall exist for Articles 1 and 2.",
  },
] as const;

export const LAW_NOTE =
  "Three articles. No exceptions. The first constitutional framework in history built on the absolute prohibition of initiated force. Not as aspiration. As structure.";

export const PROOF_ITEMS = [
  {
    direction: "recedes" as const,
    title: "Early America (1776-1900s)",
    body:
      "Unprecedented limits on force. Power divided. Markets largely free. Individuals assumed competent. The result: the greatest explosion of innovation, wealth, and social mobility in human history.",
    result: "Civilization soars",
    resultTone: "positive" as const,
  },
  {
    direction: "rises" as const,
    title: "Soviet Union (1917-1991)",
    body:
      "Total state authority over production, speech, movement, and thought. Markets abolished. Property seized. Dissent criminalized. The result: famine, purges, gulags. Tens of millions dead.",
    result: "Civilization collapses",
    resultTone: "negative" as const,
  },
  {
    direction: "recedes" as const,
    title: "The Renaissance (1300s-1600s)",
    body:
      "Aristotle recovered. Reason rehabilitated. Inquiry permitted. The result: science, art, and human capability accelerated beyond all prior precedent.",
    result: "Civilization soars",
    resultTone: "positive" as const,
  },
  {
    direction: "rises" as const,
    title: "The Dark Ages (500-1200 AD)",
    body:
      "Plato's hierarchy baptized into permanent doctrine. Inquiry criminalized. Knowledge suppressed. Nature declared corrupt. The result: a thousand years of stagnation, poverty, and suffering.",
    result: "Civilization collapses",
    resultTone: "negative" as const,
  },
  {
    direction: "recedes" as const,
    title: "The Enlightenment (1600s-1800s)",
    body:
      "Reason trusted. Individual judgment valued. Authority questioned. Markets freed. The result: scientific revolution, political revolution, industrial revolution. Human productive power multiplied beyond all precedent.",
    result: "Civilization soars",
    resultTone: "positive" as const,
  },
  {
    direction: "rises" as const,
    title: "Maoist China (1949-1976)",
    body:
      "Central planning replaced markets. Knowledge became criminal. Expertise was persecuted. The Great Leap Forward produced the largest famine in human history. The Cultural Revolution weaponized ideology against intellect.",
    result: "Civilization collapses",
    resultTone: "negative" as const,
  },
] as const;

export const COMPARISON_ROWS = [
  {
    label: "Authority",
    old: "External. Imposed from above. Obedience enforced through punishment.",
    new: "Internal. Self-generated. Voluntary association and contractual governance.",
  },
  {
    label: "Economics",
    old: "Distorted by confiscation, regulation, and political extraction. Wealth concentrated through force.",
    new: "Generative. Wealth compounds through value creation. No confiscation or distortion.",
  },
  {
    label: "Innovation",
    old: "Licensed, regulated, and suppressed. Permission required. Deviation punished.",
    new: "Unrestrained. No permission required. Experimentation and competition accelerate naturally.",
  },
  {
    label: "Education",
    old: "Obedience, memorization, compliance. Prepares citizens for managed dependence.",
    new: "Reasoning, creation, integration. Prepares individuals for self-directed lives.",
  },
  {
    label: "Peace",
    old: "Maintained through deterrence. Fragile. Requires constant enforcement.",
    new: "Structural. Emerges naturally from abundance and voluntary association. No deterrence needed.",
  },
  {
    label: "Consciousness",
    old: "Compressed, throttled, redirected toward survival. The mind adapts to the cage.",
    new: "Unleashed. No ceiling. The mind operates at full power for the first time in history.",
  },
  {
    label: "Trajectory",
    old: "Cyclical. Rise, corruption, collapse, reset. Every civilization on this model eventually falls.",
    new: "Ascending. Continuous compounding of innovation, prosperity, and conscious capacity. No collapse cycle.",
  },
] as const;
