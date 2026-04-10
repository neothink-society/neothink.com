import { siteConfig } from "@/lib/metadata";

const U = siteConfig.url;

/** Stable `@id` fragments for JSON-LD `@graph` and cross-references */
export const schemaIds = {
  website: `${U}/#website`,
  homeWebPage: `${U}/#webpage`,
  organization: `${U}/#organization`,
  society: `${U}/#society`,
  founder: `${U}/#founder`,
  neothinkSystem: `${U}/#neothink-system`,
  primeLaw: `${U}/#prime-law`,
  unleashedBook: `${U}/#unleashed`,
  podcastSeries: `${U}/#podcast-unleashed`,
  wallaceHamilton: `${U}/#wallace-hamilton`,
} as const;
