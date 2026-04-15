/**
 * Internal URL paths aligned with WordPress HTML migrations.
 * Prefer importing from here instead of string literals so links stay in sync with exports.
 */
export const WP = {
  home: "/",
  /** Long-form founder biography (distinct from the full Mark Hamilton hub). */
  about: "/about",
  unifiedField: "/unified-field",
  neovia: "/neovia",
  /**
   * Immortalis / “Neothink Country” vision page (WordPress slug `immortalis`).
   * Society-aligned long-range society vision; Institute publishes for public context.
   */
  immortalis: "/immortalis",
  primeLaw: "/prime-law",
  neothink: "/neothink",
  theWay: "/the-way",
  unleashed: "/unleashed",
  /** Pretty download path; `next.config` redirects to `/unleashed.pdf`. */
  unleashedDownload: "/unleashed/download",
  publishedWork: "/published-work",
  markHamilton: "/mark-hamilton",
  podcast: "/podcast",
  /** Primary video / podcast channel (linked from `/podcast`). */
  podcastChannel: "https://www.youtube.com/@NeothinkInstitute",
  contact: "/contact",
  /** Society FAQ hub (WordPress slug `faq`). */
  faq: "/faq",
  /** Member reviews / stories hub (WordPress slug `neothink-reviews`). */
  neothinkReviews: "/neothink-reviews",
  /** Society events hub (WordPress slug `events`). */
  events: "/events",
  /** Society programs overview hub (WordPress slug `programs`). */
  programs: "/programs",
  /** Project Life — longevity / health program family (WordPress slug `project-life`). */
  projectLife: "/project-life",
  /** Twelve Visions Party — political movement page (WordPress slug `twelve-visions-party`). */
  twelveVisionsParty: "/twelve-visions-party",
  /** Public orientation page for the civilizational framework (WordPress slug `the-movement`). */
  theMovement: "/the-movement",
  /**
   * AEO article: Neothink Society vs generic “secret group” narratives (WP post slug `neothink-secret-society-differs-other-groups`).
   * Legacy long URL is redirected in `wp-redirects.ts`.
   */
  secretSocietyDiffers: "/neothink-secret-society-differs-other-groups",
  /** AEO article: self-help framing (WP post slug `is-neothink-just-another-self-help-book`). */
  isNeothinkSelfHelpBook: "/is-neothink-just-another-self-help-book",
  /** Agency-era article: empowering vs challenging (WP post `neothink-society-empowering-and-challenging`). */
  neothinkSocietyEmpoweringChallenging: "/neothink-society-empowering-challenging",
  /** Agency-era article: Neothink & TVP (WP post `neothink-twelve-visions-party-truth`). */
  neothinkTwelveVisionsPartyTruth: "/neothink-twelve-visions-party-truth",
  /** Agency-era article: fraud vs genuine (WP post `discern-genuine-secret-society-opportunities`). */
  discernGenuineSecretSociety: "/discern-genuine-secret-society-opportunities",
  /** Agency-era article: secret society invitation letter (WP post `secret-society-invitation-letter`). */
  secretSocietyInvitationLetter: "/secret-society-invitation-letter",
  /** Agency-era article: joining Society secret meetings (WP post `join-neothink-society-secret-meetings`). */
  joinNeothinkSocietySecretMeetings: "/join-neothink-society-secret-meetings",
  /** Agency-era article: “secret society” misunderstandings (WP post `neothink-society-clearing-misunderstandings`). */
  neothinkSocietyClearingMisunderstandings: "/neothink-society-clearing-misunderstandings",
  /** Agency-era article: logic behind Neothink teachings (WP post `mark-hamiltons-neothink-surprising-logic`). */
  markHamiltonsNeothinkSurprisingLogic: "/mark-hamiltons-neothink-surprising-logic",
  /** Agency-era article: truth vs fiction / reviews framing (WP post `truth-about-neothink-society`). */
  truthAboutNeothinkSociety: "/truth-about-neothink-society",
  /** Agency-era article: legitimacy FAQ-style (WP post `is-neothink-society-legit`). */
  isNeothinkSocietyLegit: "/is-neothink-society-legit",
  /** Agency-era article: Movement & financial independence (WP post `neothink-movement-financial-independence`). */
  neothinkMovementFinancialIndependence: "/neothink-movement-financial-independence",
  /** Agency-era article: myths vs reality for Neothink University (WP post `what-people-get-wrong-neothink-university`). */
  whatPeopleGetWrongNeothinkUniversity: "/what-people-get-wrong-neothink-university",
  /** Agency-era article: mastermind group success framing (WP post `neothink-mastermind-group-success-stories`). */
  neothinkMastermindGroupSuccessStories: "/neothink-mastermind-group-success-stories",
  /** Direct mail for mailto links where a page route is not used. */
  contactMailto: "mailto:support@neothink.com",
  /** Manuscripts hub — use the same slug WordPress uses for this section. */
  manuscripts: "/manuscripts",
  getInvolved: "/get-involved",
  /** Introductory Neothink Society courses (complimentary on-ramp). */
  freeCourses: "/free-courses",
  /**
   * Neothink Society paid programs hub (not free public learning). WordPress slug `neothink-university`.
   * Distinct from Institute public research / free entry points on this site.
   */
  neothinkUniversity: "/neothink-university",
  /**
   * Neothink Mentality course (public). Still served from legacy WordPress HTML until migrated;
   * path matches the live site slug.
   */
  neothinkMentality: "/neothink-mentality",
  /** Neothink Mentality lesson 1 (post). */
  riseFromRut: "/rise-from-rut",
  /** Neothink Mentality lesson 2 (post). */
  freedomFromRights: "/freedom-from-rights",
  /** Neothink Awakening article: freedom, regulation, Prime Law, Immortalis (WP post `freedom-key-to-unlocking-true-wealth`). */
  freedomKeyToUnlockingTrueWealth: "/freedom-key-to-unlocking-true-wealth",
  /** Neothink Awakening article: Neothink thinking levels, mini-days, division of essence (WP post `reprogram-mind-to-be-rich`). */
  reprogramMindToBeRich: "/reprogram-mind-to-be-rich",
  /** Neothink Philosophy long-form: Mark Hamilton’s story / following mode (WP post `mark-hamiltons-story`). */
  markHamiltonsStory: "/mark-hamiltons-story",
  /** Neothink Philosophy long-form: Immortalis / Prime Law Capitalism (WP post `immortalis-the-great-experiment-of-our-time`). */
  immortalisGreatExperimentOfOurTime: "/immortalis-the-great-experiment-of-our-time",
  /** Neothink Philosophy long-form: Neovia biotech freedom city speech (WP post `the-city-that-cures-disease-neovia`). */
  theCityThatCuresDiseaseNeovia: "/the-city-that-cures-disease-neovia",
  /** Neothink Mentality lesson 3 (post). */
  beyondTunnelVision: "/beyond-tunnel-vision",
  /** Neothink Mentality lesson 4 (post). */
  impactProfits: "/impact-profits",
  /** Neothink Mentality lesson 5 (post). */
  higherLevelThinking: "/higher-level-thinking",
  /** Neothink Mentality lesson 6 (post). */
  areasOfProfit: "/areas-of-profit",
  /** Neothink Mentality lesson 7 (post). */
  unlockYourGenius: "/unlock-your-genius",
  /** Neothink Mentality lesson 8 (post). */
  thePrimeLawMentality: "/the-prime-law-mentality",
  /** Linked from lesson 1 copy until migrated. */
  integratedThinking: "/integrated-thinking",
  valueCreator: "/value-creator",
  selfLeaderSecret: "/self-leader-secret",
  soaringProductivity: "/soaring-productivity",
  /** Neothink Mentality lesson 10 (post). */
  cureToAging: "/cure-to-aging",
  /** Neothink Mentality lesson 11 (post). */
  soarBeyondPeers: "/soar-beyond-peers",
  /** Neothink Mentality lesson 12 (post). */
  moneyLoveAffair: "/money-love-affair",
  /** Neothink Mentality lesson 13 (post). */
  keepTheBalance: "/keep-the-balance",
  /** Neothink Mentality lesson 14 (post). */
  powerOfCalm: "/power-of-calm",
} as const;
