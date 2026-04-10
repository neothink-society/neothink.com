/**
 * Neothink Mentality lesson 2 — Freedom from Rights (WordPress post id 4563).
 * @see migration/source/freedom-from-rights.html
 */
export const FREEDOM_FROM_RIGHTS_LESSON = {
  number: 2,
  slug: "/freedom-from-rights",
  title: "Freedom from Rights",
  shortTitle: "Freedom from rights",
  youtubeId: "dHOJdl0ndHs",
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  readTimeMinutes: 10,
  /** ~9:23 on YouTube */
  videoRuntimeMinutes: 9,
} as const;

export const FREEDOM_FROM_RIGHTS_TAKEAWAYS = [
  "Lesson 1 trains integrated thinking at work; this lesson trains the same Neothink mentality on civic illusion—business, politics, media, and law.",
  "The Bill of Rights is widely celebrated, yet Hamilton argues it stopped one integration short: it entrenched the habit of adding “rights” to law—each layer enforced, often with initiatory force.",
  "Examples such as DEI- and ESG-style mandates illustrate how good-sounding “rights” can shrink real freedom when compliance is compelled.",
  "The alternative is not more stacked “positives” but removing the negative—initiatory force—through one Prime Law, as Hamilton recites in the video.",
] as const;

export const FREEDOM_FROM_RIGHTS_ADDING_RIGHTS = [
  "Each new “right” or regulation arrives with good-sounding language",
  "Enforcement still rests on initiatory force or the threat of force",
  "The pattern can be extended as interests relabel the next mandate",
  "DEI, ESG, and similar programs illustrate how rights-talk can mask compliance costs",
  "Insiders keep defining what counts as the next protected category",
  "Citizens must comply even when the underlying rule is wrong or harmful",
] as const;

export const FREEDOM_FROM_RIGHTS_REMOVING_FORCE = [
  "Removes the harmful pattern at the root",
  "No exceptions clause—harder to game selectively",
  "Leaves room for voluntary coordination among individuals",
  "Prevents a permanent power class above the citizenry",
  "Anchors law in protection rather than rule-by-discretion",
  "Individuals keep initiative over their own paths",
] as const;

export const FREEDOM_FROM_RIGHTS_SEE_THROUGH_STEPS = [
  {
    title: "Identify the claimed positive",
    body: 'What “right” or “protection” is offered? How is it framed as beneficial? Notice language that discourages scrutiny.',
  },
  {
    title: "Find the force behind it",
    body: "How will it be enforced? What happens if someone does not comply? Laws and regulations ultimately rest on force or the threat of force.",
  },
  {
    title: "Trace who benefits",
    body: "Who gains discretion? Who decides what counts as the “right”? Follow incentives and authority, not slogans.",
  },
  {
    title: "Measure actual freedom",
    body: "Does the proposal widen or narrow your room to choose? New obligations, taxes, or penalties are signals.",
  },
  {
    title: "Apply the Prime Law test",
    body: "Does it require initiatory force? If yes, it conflicts with the Prime Law. Protective force against aggression is a different category.",
  },
] as const;

/** Prime Law — wording aligned with Institute materials. */
export const FREEDOM_FROM_RIGHTS_PRIME_LAW = {
  preamble:
    "The purpose of life is to prosper and live happily. The function of government is to provide the conditions that let individuals fulfill that purpose. The Prime Law guarantees those conditions by forbidding the use of initiatory force, fraud, or coercion by any person or group against any individual, property, or contract.",
  articles: [
    {
      label: "Article 1",
      text: "No person, group of persons, or government shall initiate force, threat of force, or fraud against any individual’s self, property, or contract.",
    },
    {
      label: "Article 2",
      text: "Force is morally and legally justified only for protection from those who violate Article 1.",
    },
    {
      label: "Article 3",
      text: "No exceptions shall exist for Articles 1 and 2.",
    },
  ],
} as const;

export const FREEDOM_FROM_RIGHTS_FAQ = [
  {
    question: "Isn’t the Bill of Rights essential to American freedom?",
    answer:
      "The specific protections in the Bill of Rights matter. Hamilton’s critique targets the recurring practice of adding new “rights” to law in ways that expand force-backed mandates. The Prime Law is framed to secure genuine freedoms while blocking that expansion mechanism.",
  },
  {
    question: "How would society function without government force?",
    answer:
      "The Prime Law does not eliminate protective force. It rules out initiatory force—force used first to compel. Defensive force against criminals, fraud, and external aggression remains justified under Article 2. Government’s role narrows to protection, not open-ended compulsion.",
  },
  {
    question: "What about taxes? How would government be funded?",
    answer:
      "Taxation collected through compulsion is initiatory force under this framework and would not stand. Services would need voluntary funding models. Hamilton’s longer work explores how protection and infrastructure can be financed without forced extraction—and the prosperity effects of keeping wealth in creators’ hands.",
  },
  {
    question: "Is the Prime Law realistic as a 28th Amendment?",
    answer:
      "Hamilton frames it as the constitutional completion the Founders approached: a deeply integrated book-length argument replaces the old political design with the Prime Law as the 28th Amendment. Incumbents resist; the open question is demand from a public trained in integrated thinking.",
  },
  {
    question: "How does seeing through illusions help me personally?",
    answer:
      "You make cleaner decisions about work, money, and commitments when you can separate slogans from enforcement. Recognizing when a “right” narrows your options is a practical advantage in business and in life.",
  },
] as const;
