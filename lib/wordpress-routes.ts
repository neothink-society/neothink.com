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
  /** Direct mail for mailto links where a page route is not used. */
  contactMailto: "mailto:support@neothink.com",
  /** Manuscripts hub — use the same slug WordPress uses for this section. */
  manuscripts: "/manuscripts",
  getInvolved: "/get-involved",
  /** Introductory Neothink Society courses (complimentary on-ramp). */
  freeCourses: "/free-courses",
  /**
   * Neothink Mentality course (public). Still served from legacy WordPress HTML until migrated;
   * path matches the live site slug.
   */
  neothinkMentality: "/neothink-mentality",
  /** Neothink Mentality lesson 1 (post). */
  riseFromRut: "/rise-from-rut",
  /** Neothink Mentality lesson 2 (post). */
  freedomFromRights: "/freedom-from-rights",
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
  /** Neothink Mentality lesson 10 (post) — migrate when ready. */
  cureToAging: "/cure-to-aging",
} as const;
