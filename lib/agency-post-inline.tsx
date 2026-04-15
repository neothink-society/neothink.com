import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import { WP } from "@/lib/wordpress-routes";

/** External URLs preserved from agency-era WordPress posts. */
export const AGENCY_JOIN_URL = "https://www.theneothinksociety.com/join-the-neothink-society/" as const;

export const AGENCY_SOCIETY_CONTACT_URL = "https://www.theneothinksociety.com/contact-us/" as const;

export const AGENCY_ABOUT_SOCIETY_HREF = `${WP.about}#ab-society-heading` as const;

const INLINE: Record<string, string> = {
  contact: WP.contact,
  faq: WP.faq,
  freedomFromRights: WP.freedomFromRights,
  freedomKeyToUnlockingTrueWealth: WP.freedomKeyToUnlockingTrueWealth,
  reprogramMindToBeRich: WP.reprogramMindToBeRich,
  programs: WP.programs,
  events: WP.events,
  freeCourses: WP.freeCourses,
  getInvolved: WP.getInvolved,
  neothinkUniversity: WP.neothinkUniversity,
  twelveVisionsParty: WP.twelveVisionsParty,
  unifiedField: WP.unifiedField,
  primeLaw: WP.primeLaw,
  neothink: WP.neothink,
  integratedThinking: WP.integratedThinking,
  valueCreator: WP.valueCreator,
  home: WP.home,
};

/**
 * Renders `[[joinExternal|...]]`, `[[aboutSociety|...]]`, `[[legacyNeothink|label|url]]`,
 * and `[[key|label]]` for keys in {@link INLINE}.
 */
export function parseAgencyPostInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let i = 0;
  let keyN = 0;

  while (i < text.length) {
    const start = text.indexOf("[[", i);
    if (start === -1) {
      parts.push(text.slice(i));
      break;
    }
    if (start > i) {
      parts.push(text.slice(i, start));
    }
    const end = text.indexOf("]]", start);
    if (end === -1) {
      parts.push(text.slice(start));
      break;
    }
    const inner = text.slice(start + 2, end);
    const bits = inner.split("|");
    const key = bits[0];
    if (key === "joinExternal" && bits[1]) {
      parts.push(
        <a key={`a-${keyN++}`} href={AGENCY_JOIN_URL} target="_blank" rel="noopener noreferrer">
          {bits[1]}
        </a>
      );
    } else if (key === "societyContactExternal" && bits[1]) {
      parts.push(
        <a key={`a-${keyN++}`} href={AGENCY_SOCIETY_CONTACT_URL} target="_blank" rel="noopener noreferrer">
          {bits[1]}
        </a>
      );
    } else if (key === "aboutSociety" && bits[1]) {
      parts.push(
        <Link key={`a-${keyN++}`} href={AGENCY_ABOUT_SOCIETY_HREF}>
          {bits[1]}
        </Link>
      );
    } else if (key === "legacyNeothink" && bits[1] && bits[2]) {
      parts.push(
        <a key={`a-${keyN++}`} href={bits[2]}>
          {bits[1]}
        </a>
      );
    } else if (bits[1] && INLINE[key]) {
      parts.push(
        <Link key={`a-${keyN++}`} href={INLINE[key]}>
          {bits[1]}
        </Link>
      );
    } else {
      parts.push(`[[${inner}]]`);
    }
    i = end + 2;
  }

  return parts.length === 1 ? parts[0] : <Fragment>{parts}</Fragment>;
}
