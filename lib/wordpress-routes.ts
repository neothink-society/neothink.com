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
  contact: "/contact",
  /** Manuscripts hub — use the same slug WordPress uses for this section. */
  manuscripts: "/manuscripts",
  getInvolved: "/get-involved",
} as const;
