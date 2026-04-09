/** Table of contents — aligned with WordPress Unleashed page export */

export type TocChapter = {
  /** Display number; empty string renders an empty column cell */
  num: string;
  title: string;
  description: string;
};

export const INTRO_PART = {
  label: "Introduction",
  partTitle: "The Promethean Promise",
  chapters: [
    {
      num: "",
      title: "The Promethean Promise",
      description:
        "The power of gods, wielded by humans. Why this book exists and what it will show you.",
    },
  ] satisfies TocChapter[],
};

export const PART_ONE = {
  label: "Part One",
  partTitle: "The Unified Field of Conscious Civilization",
  chapters: [
    {
      num: "0",
      title: "Prologue: The Secret Keystone",
      description: "Julian Jaynes saw the rupture. He could not close the circuit. The Unified Field does.",
    },
    {
      num: "1",
      title: "When the Gods Fell Silent",
      description:
        "The collapse of the bicameral mind. The moment humanity lost its internal command structure.",
    },
    {
      num: "2",
      title: "The Athenian Singularity",
      description:
        "Only once did a civilization come so close to completing the operating system of full consciousness.",
    },
    {
      num: "3",
      title: "Socrates and the First Turn Inward",
      description: "Consciousness begins with a man who refused to write.",
    },
    {
      num: "4",
      title: "Plato and the Great Preservation Error",
      description: "If Socrates cracked open the human mind, Plato attempted to keep it from shattering.",
    },
    {
      num: "5",
      title: "Aristotle: The Only Full Breakthrough",
      description:
        "The one mind that crossed the threshold. The works that were lost. The greatest tragedy in human history.",
    },
    {
      num: "6",
      title: "A Brief Glimpse at Aristotelian Resurrection",
      description:
        "Force confines volition. Volition is needed for consciousness. What once preserved humanity now confines it.",
    },
    {
      num: "7",
      title: "Alexander the Great",
      description: "The first fully conscious world leader. Proof of what the uncaged mind can do.",
    },
    {
      num: "8",
      title: "Jesus and the Awakening of the Inner Voice",
      description: "Not founding a religion. Initiating an evolutionary upgrade of the human mind.",
    },
    {
      num: "9",
      title: "Augustine and the Closing of the Path",
      description:
        "How Plato's scaffolding was baptized into Christianity and sealed consciousness for a millennium.",
    },
    {
      num: "10",
      title: "The Long Night",
      description: "A thousand years where progress became suspect and force ruled through ideas.",
    },
    {
      num: "11",
      title: "The Return of the Light",
      description: "Aquinas reintroduced Aristotle. The Renaissance followed. Reason was rehabilitated.",
    },
    {
      num: "12",
      title: "The Mind Unleashed",
      description:
        "The Enlightenment, the American experiment, and what happened when consciousness was set free.",
    },
    {
      num: "13",
      title: "The Law of Humanity",
      description:
        "As force rises, civilization collapses. As force recedes, civilization soars. A natural law, not a moral preference.",
    },
    {
      num: "14",
      title: "The Century of Blood",
      description: "The twentieth century as indictment. What happens when force is maximized with industrial power.",
    },
    {
      num: "15",
      title: "The Final Codification",
      description: "The Prime Law. Where the Constitution stopped, this begins.",
    },
    {
      num: "16",
      title: "The Civilization That Almost Was",
      description: "What if the Prime Law had been codified 2,400 years ago? History with force removed.",
    },
    {
      num: "17",
      title: "Life Under the Prime Law",
      description:
        "What changes when initiated force is structurally prohibited. The entire architecture reorganizes.",
    },
    {
      num: "18",
      title: "Neovia: The First Prime Law Zone",
      description: "The first civilization aligned with consciousness itself. Under development now.",
    },
    {
      num: "19",
      title: "The Mortal Mind and the Immortal Mind",
      description: "Two orientations. One organized around survival. One organized around creation.",
    },
    {
      num: "20",
      title: "The Civilization That Refused to Die",
      description:
        "When consciousness is preserved and force is removed, civilization turns from endurance to transcendence.",
    },
    {
      num: "21",
      title: "A Mind That Never Seeks an Ending",
      description: "Stagnation makes death welcome. Creation makes continuation inevitable.",
    },
    {
      num: "22",
      title: "The Outward Arc of Consciousness",
      description: "The point at which civilization becomes cosmic.",
    },
    {
      num: "23",
      title: "The Consciousness That Came Before the Universe",
      description:
        "The universe should not exist. Something chose. What logic points toward when the math is honest.",
    },
    {
      num: "24",
      title: "The Conservation of Consciousness",
      description: "If consciousness is the highest value in existence, allowing it to perish would be irrational.",
    },
  ] satisfies TocChapter[],
};

export const CLOSING_PART = {
  label: "Closing",
  partTitle: "Epilogue, Afterword, and Conclusion",
  chapters: [
    {
      num: "",
      title: "Epilogue: Breaking the Chains on Consciousness",
      description: "The invisible ceiling inside the human mind. How to step into the light.",
    },
    {
      num: "",
      title: "Afterword: The Aristotle Question",
      description:
        "Did civilization follow the Platonic path because Aristotle was lost, or because humanity was not yet ready?",
    },
    {
      num: "",
      title: "Conclusion: The Extinction Event",
      description:
        "Why remaining inside the Platonic hierarchy makes nuclear self-destruction certain. There is no third path.",
    },
  ] satisfies TocChapter[],
};
