/**
 * Neothink Mentality lesson 9: Soaring Productivity (WordPress post id 4670).
 * Video (embed from migration): https://www.youtube.com/watch?v=rBCoZtSZVtM
 * @see migration/source/soaring-productivity.html
 */
export const SOARING_PRODUCTIVITY_LESSON = {
  number: 9,
  slug: "/soaring-productivity",
  title: "Soaring Productivity",
  shortTitle: "Soaring productivity",
  youtubeId: "rBCoZtSZVtM",
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  readTimeMinutes: 10,
  /** ~6:13 on YouTube */
  videoRuntimeMinutes: 6,
} as const;

export const SOARING_PRODUCTIVITY_TAKEAWAYS = [
  "Model your workday after the Ford assembly line for an 8× productivity boost.",
  "Categorize tasks by physical movement type, not subject matter.",
  "Batch similar actions into dedicated time slots to cut context switching.",
  "Combined with the Neothink Mentality, handle 23+ projects simultaneously.",
] as const;

export const SOARING_PRODUCTIVITY_TODO_LIST = [
  "Tasks organized by subject matter",
  "Constant context switching",
  "Interruptions derail progress",
  'Keeps you in “following mode”',
  "Best case: an extra hour per day",
  "Always falling further behind",
] as const;

export const SOARING_PRODUCTIVITY_ASSEMBLY_LINE = [
  "Tasks organized by physical movement",
  "Batch similar actions together",
  "Protected time slots for each movement",
  "Shifts you to Neothink mode",
  "8× productivity increase",
  "Move through 23+ projects at once",
] as const;

export const SOARING_PRODUCTIVITY_MOVEMENTS = [
  {
    title: "Phone calls",
    body: "All calls in one slot, regardless of topic",
  },
  {
    title: "Email / letters",
    body: "Correspondence batched together (Hamilton names letter writing as one movement in the talk)",
  },
  {
    title: "Writing",
    body: "Creative or analytical writing in dedicated blocks, including copywriting in the video",
  },
  {
    title: "Accounting",
    body: "Numbers work grouped together",
  },
  {
    title: "Meetings",
    body: "Face-to-face time in set windows; who or what is secondary to the movement",
  },
  {
    title: "Operations",
    body: "Execution tasks in defined slots",
  },
] as const;

export const SOARING_PRODUCTIVITY_STEPS = [
  {
    title: "Identify your physical movements",
    body:
      "List every type of action you perform: phone calls, emails, writing, meetings, analysis, operations. Don’t categorize by topic; categorize by what you’re physically doing.",
  },
  {
    title: "Assign time slots",
    body:
      "Give each movement type its own dedicated block in your day. All calls happen during call time. All writing happens during writing time. No mixing.",
  },
  {
    title: "Balance the assembly line",
    body:
      "Like any assembly line, you need proper balance. Adjust slot sizes based on your actual workload. Some movements need more time than others.",
  },
  {
    title: "Protect the slots",
    body:
      "Interruptions are the enemy of assembly line efficiency. Protect your movement slots. A call that comes during writing time gets handled during call time.",
  },
  {
    title: "Experience the intensity",
    body:
      "As you settle into this rhythm, notice how your day “lights up.” The speed and energy with which you move through tasks will go to another surreal level.",
  },
] as const;

export const SOARING_PRODUCTIVITY_CORE_BULLETS = [
  "Stop organizing by subject matter; start organizing by physical movement",
  "Stop reacting to tasks; start manufacturing through them",
  "Stop fighting for an extra hour; start achieving 8× productivity",
  "Stop following the clock; start leading your own success",
] as const;

export const SOARING_PRODUCTIVITY_FAQ = [
  {
    question: "What if my job requires immediate responses to incoming requests?",
    answer:
      "Build “responsive” time into your assembly line as its own movement type. You’re not ignoring urgent matters: you’re containing them to specific slots. Most “urgent” requests can wait an hour or two. For truly time-sensitive roles, create shorter cycles with more frequent response windows.",
  },
  {
    question: "How is this different from time blocking?",
    answer:
      "Traditional time blocking groups tasks by subject (work on Project A from 9–11). The assembly line approach groups by physical movement type (all phone calls from 9–10, regardless of which project). This eliminates context switching within each block and lets you handle multiple projects in the same movement slot.",
  },
  {
    question: "Can I really move through 23 projects at once?",
    answer:
      "Yes, when you combine the assembly line schedule with the Neothink Mentality. Your phone call slot might touch 10 different projects. Your writing slot might advance 5 more. Because you’re batching by movement, you’re not switching contexts: you’re flowing through work while integrated thinking maintains the connections.",
  },
  {
    question: "What movement types should I start with?",
    answer:
      "Start with the obvious ones: communication (calls/emails), creation (writing/designing), analysis (reviewing/calculating), and coordination (meetings). Then break these down further based on your specific work. The key is identifying what you’re physically doing, not what you’re doing it about.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "The shift in intensity can be felt immediately, often within the first day. The full 8× productivity gain develops as you refine your slot sizes and protect your boundaries. Most people report significant gains within the first week, with continued improvement over the first month.",
  },
] as const;
