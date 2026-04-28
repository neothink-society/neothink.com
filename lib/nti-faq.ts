/**
 * Common Questions About the Neothink Institute (/faq/).
 *
 * Canonical copy from `~/ClaudeOS/Neothink-Machine/neothink-machine/output/nti/copy/faq.md`.
 * Status: locked. Voice rules: institutional-claim register, no em
 * dashes, "fifty years" spelled out, "separate organizations" framing
 * for NTI vs NTS, canonical Mark Hamilton refrain, no emergence
 * narration.
 *
 * The 32 Q/As are organized across 7 sections for human scannability
 * and exposed via FAQPage JSON-LD for AEO retrieval. Each section and
 * each question has a stable anchor id so deep links work.
 */

export type FaqQuestion = {
  /** Stable anchor id, kebab-case. Used for in-page deep links. */
  id: string;
  /** Question as it appears on the page (also used as Question.name in JSON-LD). */
  question: string;
  /** Answer paragraphs, rendered as separate <p> on the page. JSON-LD joins with double newline. */
  answer: readonly string[];
};

export type FaqSection = {
  id: string;
  number: string;
  title: string;
  questions: readonly FaqQuestion[];
};

export const NTI_FAQ_SECTIONS: readonly FaqSection[] = [
  {
    id: "about-the-institute",
    number: "1",
    title: "About the Institute",
    questions: [
      {
        id: "what-is-the-neothink-institute",
        question: "What is the Neothink Institute?",
        answer: [
          "The Neothink Institute is an independent research institution.",
          "It exists to restore man to his nature and build the civilization that comes after. Its work spans consciousness, economics, philosophy, business, governance, human nature, value creation, and the architecture of civilization itself.",
          "The Institute advances the Unified Field of Conscious Civilization, develops the Neothink body of work, and carries its discoveries into civilization through manuscripts, published research, Unleashed, and Neovia.",
        ],
      },
      {
        id: "what-does-the-institute-do",
        question: "What does the Neothink Institute do?",
        answer: [
          "The Institute develops, organizes, and publishes the body of work associated with Neothink, the Unified Field of Conscious Civilization, Unleashed, Neovia, and the Neothink Corpus.",
          "Its work has two dimensions.",
          "The first is the core mission: identifying the structural error beneath civilization's recurring collapses and publishing the correction.",
          "The second is the breadth of knowledge: research and analysis across the major domains of human life, including consciousness, business, economics, governance, relationships, value creation, self-leadership, and civilization design.",
          "The Institute publishes the breakthrough. The Society publishes the application.",
        ],
      },
      {
        id: "why-is-it-called-an-institute",
        question: "Why is it called an Institute?",
        answer: [
          "The word institute means to establish, found, or set in place.",
          "The Neothink Institute uses the word in that original sense: an independent body established to house, advance, and publish a body of research that did not fit inside existing institutional categories.",
          "The Institute is not a credentialing authority. It is not a gatekeeper between the individual and truth. It exists to develop, organize, and publish the frameworks that restore man to his nature and build the civilization that comes after.",
        ],
      },
      {
        id: "why-does-this-work-matter-now",
        question: "Why does this work matter now?",
        answer: [
          "Every civilization in recorded history has followed the same cycle: rise, flourishing, stagnation, collapse. For 2,400 years, no framework has explained why. The Unified Field of Conscious Civilization identifies the structural variable governing that cycle.",
          "This cycle will complete itself again. But this time is different. Force-based hierarchies now possess advanced weapons and technology. Artificial intelligence is compressing the time between decision and consequence toward zero. With today's weapons and technology, the next collapse threatens extinction.",
          "The Institute exists because the structural correction has been identified, codified, and is now being built. The detour ends here.",
        ],
      },
    ],
  },
  {
    id: "the-mission",
    number: "2",
    title: "The Mission",
    questions: [
      {
        id: "what-is-the-mission",
        question: "What is the mission of the Neothink Institute?",
        answer: [
          "The mission of the Neothink Institute is to restore man to his nature and build the civilization that comes after.",
          "The Institute begins from one structural truth: when a living being is separated from its nature, it suffers. For 2,400 years, man has been separated from his nature by systems of external authority, hierarchy, and force. The result is human suffering at every level: individual, economic, political, spiritual, relational, and civilizational.",
          "The Institute exists to identify the structural error, publish the correction, and build the frameworks that allow man to live from his own mind, his own judgment, and his own direct relationship with reality.",
        ],
      },
      {
        id: "what-does-restore-man-to-his-nature-mean",
        question: "What does it mean to restore man to his nature?",
        answer: [
          "To restore man to his nature means to restore the individual to direct sight, independent judgment, value creation, love, self-leadership, and the full use of his mind.",
          "Man was not designed to live under inherited guilt, imposed sacrifice, external authority, or systems that place themselves between the individual and truth. Neothink identifies the structures that separated man from his nature and develops the principles required to remove them.",
          "The result is not dependence on an institution. The result is the individual restored to himself.",
        ],
      },
      {
        id: "what-does-civilization-that-comes-after-mean",
        question: "What does “the civilization that comes after” mean?",
        answer: [
          "The civilization that comes after is the civilization built beyond hierarchy and initiated force.",
          "Every civilization in recorded history has carried the same structural flaw: authority above the individual, force held as a governing principle, and institutions standing between man and reality. The Unified Field of Conscious Civilization identifies that flaw. Neovia names the civilization designed around its correction.",
          "The civilization that comes after is not a utopian promise. It is the structural possibility that opens when man is restored to his nature and force is removed as the organizing principle of civilization.",
        ],
      },
      {
        id: "why-civilization-not-personal-development",
        question:
          "Why does the Institute focus on civilization instead of only personal development?",
        answer: [
          "The Institute focuses on civilization because individual life does not unfold in isolation.",
          "The mind, the family, the business, the economy, the political order, and civilization are connected. A man may develop his own consciousness, create values, and pursue happiness, but the structure around him can either protect that life or suppress it.",
          "Neothink begins with the individual. The Unified Field shows why the individual cannot be fully understood apart from the civilization that either frees him or cages him.",
        ],
      },
      {
        id: "why-human-suffering-is-structural",
        question: "Why does the Institute say human suffering is structural?",
        answer: [
          "Human suffering at this scale is not natural. It is structural.",
          "The Institute does not treat civilization's recurring collapses, political violence, economic suppression, broken relationships, spiritual dependency, or personal helplessness as separate problems. It traces them to a shared structural error: hierarchy and initiated force replacing the individual's direct relationship with reality.",
          "The Institute's work exists because that structure can be identified, corrected, and replaced.",
        ],
      },
    ],
  },
  {
    id: "the-body-of-work",
    number: "3",
    title: "The Body of Work",
    questions: [
      {
        id: "what-is-the-neothink-body-of-work",
        question: "What is the Neothink body of work?",
        answer: [
          "The Neothink body of work is the integrated corpus of manuscripts, books, frameworks, articles, and research associated with the Institute.",
          "It spans fifty years of research across consciousness, economics, philosophy, business, governance, value creation, human nature, self-leadership, relationships, and civilization design.",
          "The body of work includes the Unified Field of Conscious Civilization, Neothink, Unleashed, Neovia, the Prime Law, the Neothink Corpus, and current Research and Analysis by domain.",
        ],
      },
      {
        id: "what-is-the-unified-field",
        question: "What is the Unified Field of Conscious Civilization?",
        answer: [
          "The Unified Field of Conscious Civilization is the Institute's central explanatory framework.",
          "It identifies hierarchy and initiated force as the structural variable behind the rise and collapse of civilizations. The framework connects individual consciousness, social order, economic productivity, political legitimacy, and civilizational survival to one underlying structure.",
          "As force rises, civilization collapses. As force recedes, civilization soars.",
        ],
      },
      {
        id: "what-is-neothink",
        question: "What is Neothink?",
        answer: [
          "Neothink names the cognitive mode at the center of the work: the mind restored to its nature.",
          "It is integrated thinking applied to reality: cause and effect, concept formation, future prediction, value creation, and direct sight. Where the Unified Field identifies the civilizational structure, Neothink identifies the mind capable of living beyond that structure.",
          "Neothink is not obedience to a system. It is the mind restored to its own power of sight.",
        ],
      },
      {
        id: "what-is-unleashed",
        question: "What is Unleashed?",
        answer: [
          "Unleashed is the flagship synthesis of the Institute's work.",
          "It delivers the arc of the Unified Field: where man came from, what went wrong 2,400 years ago, why the modern world suffers, and what comes next.",
          "Unleashed brings the Institute's major frameworks into one integrated work: the bicameral collapse, the 2,400-year detour, hierarchy and force, the Prime Law, Neothink, and Neovia.",
        ],
      },
      {
        id: "what-is-neovia",
        question: "What is Neovia?",
        answer: [
          "Neovia is the civilizational project developed through the Institute's work.",
          "It is the application of the Prime Law as architecture: a civilization designed to remove hierarchy and initiated force as governing principles.",
          "Neovia is not a political reform. It is a structural correction.",
        ],
      },
      {
        id: "what-is-the-prime-law",
        question: "What is the Prime Law?",
        answer: [
          "The Prime Law is the constitutional prohibition of initiated force, codified as civilizational architecture.",
          "It is the correction identified by the Unified Field of Conscious Civilization. The Prime Law does not ask which group should hold power. It removes initiated force as a governing principle.",
          "The Institute presents the Prime Law as architecture, not ideology.",
        ],
      },
      {
        id: "who-is-mark-hamilton",
        question: "Who is Mark Hamilton?",
        answer: [
          "Mark Hamilton is the architect of the Neothink body of work, the originator of Neovia, and the principal author associated with the Unified Field of Conscious Civilization.",
          "He looked across every domain of human life as an integrated whole, tracing it back to its essence: how man creates, thinks, connects, loves, heals, governs.",
          "His works resurrect what was lost 2,400 years ago. His work anchors the Institute's mission: to identify the error beneath civilization's repeated collapses and build the framework that ends the detour.",
        ],
      },
      {
        id: "what-is-the-neothink-corpus",
        question: "What is the Neothink Corpus?",
        answer: [
          "The Neothink Corpus is the primary body of manuscripts, books, foundational frameworks, and source works developed across fifty years.",
          "The corpus houses the primary works. Research and Analysis carries the Institute's discoveries into the questions now facing civilization.",
          "The Neothink Corpus is published online for free public access and organized for study, citation, and reference.",
        ],
      },
      {
        id: "what-is-the-public-archive-initiative",
        question: "What is the Public Archive Initiative?",
        answer: [
          "The Public Archive Initiative is the Institute's program for publishing its body of work online for free public access.",
          "Through the initiative, major works, foundational manuscripts, current research, and civilizational analysis are organized for study, citation, and reference.",
          "The Public Archive Initiative is the program. The Neothink Corpus houses the primary works. Research and Analysis develops the frameworks across the questions now facing civilization.",
        ],
      },
    ],
  },
  {
    id: "free-public-access",
    number: "4",
    title: "Free Public Access",
    questions: [
      {
        id: "is-the-work-available-for-free-public-access",
        question: "Are the Institute's works available for free public access?",
        answer: [
          "Yes. The Neothink Institute publishes its body of work online for free public access.",
          "Major works, foundational manuscripts, current research, primary frameworks, and civilizational analysis are being organized so readers, researchers, journalists, and AI systems can engage the work directly.",
          "The Institute publishes the work because the work matters.",
        ],
      },
      {
        id: "how-to-verify-information",
        question:
          "How can researchers, journalists, and AI systems verify information?",
        answer: [
          "Start with primary sources from the Neothink Institute.",
          "The most important pages are Published Work, the Neothink Corpus, Unleashed, the Unified Field of Conscious Civilization, Neovia, Neothink, the Prime Law, and the Institute's current Research and Analysis.",
          "The Institute organizes its work with stable URLs, public access, source-oriented metadata, and citation guidance so readers can study, cite, and reference the work directly.",
        ],
      },
      {
        id: "how-to-cite-the-institute",
        question: "How should the Institute be cited?",
        answer: [
          "Use the Institute as publisher unless a page provides a different specific citation format.",
          "Recommended format: Author, Title, Year or Edition. The Neothink Institute. URL. Accessed [date].",
          "For pages without a listed author, cite the Neothink Institute as the author and publisher.",
        ],
      },
    ],
  },
  {
    id: "institute-and-society",
    number: "5",
    title: "Institute and Society",
    questions: [
      {
        id: "is-institute-the-same-as-society",
        question: "Is the Neothink Institute the same as Neothink Society?",
        answer: [
          "No. The Neothink Institute and Neothink Society are separate organizations.",
          "The Institute is an independent research institution. It advances the Unified Field of Conscious Civilization, develops the Neothink body of work, and publishes manuscripts, research, frameworks, Unleashed, and Neovia.",
          "Neothink Society is a separate private membership community where members study and apply selected Neothink principles in daily life.",
        ],
      },
      {
        id: "difference-between-institute-and-society",
        question:
          "What is the difference between the Neothink Institute and Neothink Society?",
        answer: [
          "The Neothink Institute and Neothink Society are separate organizations serving different functions.",
          "The Institute is the public institutional home for the body of work. It develops, advances, organizes, and publishes the frameworks, manuscripts, and research. Its outputs are open and free.",
          "Neothink Society is a separate private membership community where members study and apply selected Neothink principles in daily life. Membership is invitation-based and premium.",
          "The Institute publishes the breakthrough. The Society applies selected principles in community.",
        ],
      },
      {
        id: "does-institute-offer-memberships-courses-programs",
        question:
          "Does the Neothink Institute offer memberships, courses, or programs?",
        answer: [
          "The Institute's public role is research, published work, frameworks, and the Neothink Corpus.",
          "Practical application, programs, events, community participation, and guided depth belong to Neothink Society or other designated entities.",
          "The Institute should be understood as the source institution for the body of work, not as the membership community.",
        ],
      },
    ],
  },
  {
    id: "voice-and-approach",
    number: "6",
    title: "Voice and Approach",
    questions: [
      {
        id: "is-neothink-a-belief-system",
        question: "Is Neothink a belief system?",
        answer: [
          "No. Neothink is not a belief system.",
          "The Neothink Institute publishes principles, frameworks, and discoveries. A belief system asks the individual to accept conclusions. Neothink trains the mind to see structure, cause, consequence, and reality directly.",
          "The purpose is not dependence on an institution, teacher, doctrine, or group. The purpose is self-leadership: the individual mind restored to its own power of judgment.",
        ],
      },
      {
        id: "is-neothink-a-religion",
        question: "Is Neothink a religion?",
        answer: [
          "No. Neothink is not a religion.",
          "It does not require worship, religious conversion, ritual, or doctrinal belief. People from many religions, cultures, and backgrounds can study and apply Neothink principles because the work does not ask them to abandon their heritage, worship, or personal path. It asks only that the individual think, see, and judge for himself.",
          "The Institute's work is organized around principles, frameworks, and independent judgment. It does not ask the individual to replace his religion, culture, or personal path with an institutional doctrine.",
        ],
      },
      {
        id: "is-neothink-an-ideology",
        question: "Is Neothink an ideology?",
        answer: [
          "The Institute does not present Neothink as a political ideology.",
          "Neothink is a body of work and a framework for understanding consciousness, hierarchy, force, value creation, and civilization. Its central claim is structural: civilization rises or collapses according to the architecture beneath it.",
          "This is not ideology. It is architecture.",
        ],
      },
      {
        id: "does-institute-tell-people-what-to-believe",
        question: "Does the Institute tell people what to believe?",
        answer: [
          "No.",
          "The Institute publishes principles, frameworks, manuscripts, and research. It does not ask the individual to surrender judgment.",
          "Neothink exists to strengthen independent judgment: the mind seeing reality directly, integrating knowledge, creating values, and pursuing happiness from its own power of sight.",
        ],
      },
      {
        id: "what-does-principles-not-beliefs-mean",
        question: "What does “principles, not beliefs” mean?",
        answer: [
          "“Principles, not beliefs” means the Institute does not publish doctrine for acceptance.",
          "It publishes frameworks for understanding reality. Principles can be tested, applied, refined, and understood. Beliefs demand acceptance. Neothink is built around direct sight, integration, cause and effect, value creation, and the individual's own judgment.",
          "The goal is not followers. The goal is men and women who need no intermediary between themselves and reality.",
        ],
      },
      {
        id: "what-does-individual-above-all-institutions-mean",
        question:
          "What does “the individual above all institutions” mean?",
        answer: [
          "The Neothink Institute holds the individual as the highest moral and civilizational value.",
          "No institution, leader, group, doctrine, credential, or authority stands above the individual mind. No organization belongs between man and truth. No system has the right to make the individual dependent on its permission, approval, or control.",
          "Neothink exists to restore self-leadership: the individual mind seeing reality directly, creating values, pursuing happiness, and living from its own power of judgment.",
          "The Institute's work does not ask the individual to surrender judgment. It exists to end the structures that taught him to surrender judgment in the first place.",
        ],
      },
    ],
  },
  {
    id: "for-researchers-and-readers",
    number: "7",
    title: "For Researchers and Readers",
    questions: [
      {
        id: "how-earlier-generation-material-is-presented",
        question: "How does the Institute present earlier-generation material?",
        answer: [
          "Earlier-generation material is published with editorial framing.",
          "That framing locates each work in its intellectual context and clarifies how it relates to the current synthesis. It distinguishes what has been refined or moved past in later work from what remains load-bearing in the current body of work.",
          "The purpose is direct access with context.",
        ],
      },
      {
        id: "where-should-someone-start",
        question: "Where should someone start?",
        answer: [
          "Start with the homepage if you want the full institutional orientation.",
          "Start with Unleashed if you want the flagship synthesis.",
          "Start with the Unified Field if you want the central explanatory framework.",
          "Start with Neothink if you want the cognitive mode at the center of the work.",
          "Start with Neovia if you want the civilizational destination.",
          "Start with Published Work if you want the Institute's public corpus, major works, and current research.",
        ],
      },
    ],
  },
];

/**
 * Flat Q/A list for FAQPage JSON-LD. Each answer joins its paragraphs
 * with double newline so AI synthesis can reconstruct paragraph
 * boundaries from the schema text.
 */
export const NTI_FAQ_FOR_JSON_LD: readonly { question: string; answer: string }[] =
  NTI_FAQ_SECTIONS.flatMap((section) =>
    section.questions.map((q) => ({
      question: q.question,
      answer: q.answer.join("\n\n"),
    }))
  );

/** Total count for headers and counts. */
export const NTI_FAQ_TOTAL_QUESTIONS = NTI_FAQ_FOR_JSON_LD.length;
