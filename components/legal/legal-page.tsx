import Link from "next/link";
import type { ReactNode } from "react";

import "./legal-page.css";

export type LegalPageSection = {
  /** Short kebab-case id used for the section anchor. */
  readonly id: string;
  /** Heading text; rendered as `<h2>`. */
  readonly heading: string;
  /** Body paragraphs; each entry becomes one `<p>`. Strings are pass-through so
   * callers keep full control of emphasis and inline anchors. */
  readonly body: readonly ReactNode[];
  /** Optional bullet list rendered beneath `body`. */
  readonly list?: readonly string[];
};

export type LegalPageProps = {
  /** Top-of-page kicker (e.g. "Legal"). */
  readonly eyebrow: string;
  /** Page H1. */
  readonly title: string;
  /** Plain "Last Updated: ..." string; rendered just under the H1. */
  readonly lastUpdatedLabel: string;
  /** Short intro paragraph(s), rendered before the first section. */
  readonly intro: readonly ReactNode[];
  readonly sections: readonly LegalPageSection[];
  /** Contact footer block — mailing address lines and support email. */
  readonly contact: {
    readonly entity: string;
    readonly addressLines: readonly string[];
    readonly email: string;
  };
  /** Optional sibling legal link (e.g. privacy ↔ terms cross-link). */
  readonly sibling?: {
    readonly href: string;
    readonly label: string;
  };
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdatedLabel,
  intro,
  sections,
  contact,
  sibling,
}: LegalPageProps) {
  return (
    <main id="main-content" className="lp-page">
      <header className="lp-hero">
        <p className="lp-eyebrow">{eyebrow}</p>
        <h1 id="lp-title">{title}</h1>
        <p className="lp-last-updated">{lastUpdatedLabel}</p>
      </header>

      <article className="lp-content">
        <div className="lp-intro">
          {intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="lp-section">
            <h2>{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {section.list && section.list.length > 0 ? (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section id="contact" className="lp-section lp-contact">
          <h2>Contact Us</h2>
          <p>{contact.entity}</p>
          <address>
            {contact.addressLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < contact.addressLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </address>
          <p>
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </section>

        {sibling ? (
          <nav aria-label="Related legal pages" className="lp-sibling">
            <Link href={sibling.href}>{sibling.label} →</Link>
          </nav>
        ) : null}
      </article>
    </main>
  );
}
