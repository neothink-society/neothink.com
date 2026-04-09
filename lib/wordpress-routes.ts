/**
 * Internal URL paths aligned with WordPress HTML migrations.
 * Prefer importing from here instead of string literals so links stay in sync with exports.
 */
export const WP = {
  home: "/",
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
} as const;
