/**
 * Neothink Mentality lesson 13: Keep the Balance (WordPress post id 4813).
 * Video: https://www.youtube.com/watch?v=rpQMiAdKD0c
 * @see migration/source/keep-the-balance.html (fetch via wp-fetch-page)
 */
export const KEEP_THE_BALANCE_LESSON = {
  number: 13,
  slug: "/keep-the-balance",
  title: "Keep the Balance",
  shortTitle: "Keep the balance",
  youtubeId: "rpQMiAdKD0c",
  datePublished: "2026-01-16",
  dateModified: "2026-02-11",
  readTimeMinutes: 7,
  /** ~3:50 spoken runtime on YouTube */
  videoRuntimeMinutes: 4,
} as const;

export const KEEP_THE_BALANCE_TAKEAWAYS = [
  "Treat balance as a life compass: it keeps direction aligned with happiness when work accelerates.",
  "Left-brain reflex (“too busy”) is common; deliberately inviting right-brain, emotional input often leads to saying yes to family and recreation.",
  "Value creation (work) delivers happiness by fulfilling creative essence; value reflection (loved ones) lets you feel and “cash in” on that happiness.",
  "Harmonize creation and reflection; don’t merely prioritize one over the other.",
] as const;

export const KEEP_THE_BALANCE_LEFT_REFLEX = [
  "Instant “no: I’m too busy” when invited to step away",
  "Logical, in-the-moment pressure from schedules and output",
  "Risk of exhilaration over new creations crowding out other life domains",
  "Happiness built but not fully lived or shared",
] as const;

export const KEEP_THE_BALANCE_HARMONY = [
  "Pause and let the emotional, creative side weigh in",
  "Say yes to simple recreation (e.g. pickleball) or bigger adventures",
  "Keep family, health, and public connection on the map as you scale success",
  "Pair building value with experiencing it alongside people who matter",
] as const;

export const KEEP_THE_BALANCE_STEPS = [
  {
    title: "Name what matters",
    body:
      "Hamilton lists family, writing and readers, business and customers, health, and, now public, videos and audience relationship. Write your own short list as your balance sheet.",
  },
  {
    title: "Catch the reflex",
    body:
      "When someone you love asks for time together, notice the automatic “too busy” surge. Label it as the logical brain’s first pass, not the final answer.",
  },
  {
    title: "Invite the right brain",
    body:
      "Let the more emotional, subconscious side participate. The talk says that more often than not, he ends up doing the recreational thing, and is glad he did.",
  },
  {
    title: "Hold creation and reflection together",
    body:
      "Work fulfills essence through value creation; time with loved ones is value reflection that turns effort into felt happiness. Aim for harmony, not permanent priority of one pole.",
  },
  {
    title: "Expect busier seasons",
    body:
      "As the Neothink Mentality journey ramps success, guardrails matter: exhilaration over creations can eclipse other important areas unless balance stays intentional.",
  },
] as const;

export const KEEP_THE_BALANCE_FAQ = [
  {
    question: "Does “harmony” mean a 50/50 time split?",
    answer:
      "No. Hamilton frames harmony as integrating value creation and value reflection, not a rigid calendar formula. The point is neither building happiness nor experiencing it alone is enough; both need each other.",
  },
  {
    question: "Is the left brain / right brain science literal?",
    answer:
      "The video uses the split as a teaching metaphor: logical, immediate “can’t” vs emotional, relational pull toward people and play. Use whatever language works for you; the behavior is noticing reflex vs fuller choice.",
  },
  {
    question: "What if my work is how I help my family financially?",
    answer:
      "The lesson isn’t anti-work: it assumes meaningful value creation. It warns that success without reflection can hollow out the happiness work was meant to support. Small, consistent yeses to connection still count.",
  },
  {
    question: "How does this connect to the prior lesson on money and value?",
    answer:
      "After reframing money as an effect of value, output can accelerate. This lesson is the counterweight: don’t let that acceleration erase relationships and health, the domains that let you feel the payoff.",
  },
  {
    question: "What if I’m not a parent or spouse?",
    answer:
      "Swap “loved ones” for the people and communities where you experience meaning: friends, mentors, chosen family. Reflection is still the channel where happiness from creation becomes lived experience.",
  },
] as const;
