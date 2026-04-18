"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const INBOXES = [
  {
    label: "General",
    title: "Institute inquiries",
    description:
      "Questions about the Institute, the work, media, or a first introduction. We read every message.",
    href: "mailto:support@neothink.com",
    linkText: "support@neothink.com",
  },
  {
    label: "Investment",
    title: "Neovia & capital",
    description: "Accredited investors, family offices, and partners funding the civilizational build.",
    href: "mailto:support+invest@neothink.com",
    linkText: "support+invest@neothink.com",
  },
  {
    label: "Advisory",
    title: "Expertise & counsel",
    description: "Science, architecture, strategy, technology: if your craft accelerates the work, write here.",
    href: "mailto:support+advise@neothink.com",
    linkText: "support+advise@neothink.com",
  },
  {
    label: "Build",
    title: "Engineers & operators",
    description: "Builders who want to construct what has never existed: Neovia and the systems around it.",
    href: "mailto:support+build@neothink.com",
    linkText: "support+build@neothink.com",
  },
] as const;

/** Official social profiles (match structured-data sameAs where applicable) */
const SOCIAL = [
  { label: "YouTube", href: "https://www.youtube.com/@NeothinkInstitute" },
  { label: "X", href: "https://x.com/NeothinkHQ" },
  { label: "Instagram", href: "https://www.instagram.com/NeothinkInstitute" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/neothink-institute" },
  { label: "Facebook", href: "https://www.facebook.com/people/Neothink-Institute/61585948748781/" },
] as const;

export function ContactPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".ct-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ct-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("ct-visible");
            }, 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main id="main-content" ref={mainRef} className="ct-page">
      <section className="ct-hero" aria-labelledby="ct-hero-heading">
        <div className="ct-hero-label">Neothink Institute</div>
        <h1 id="ct-hero-heading">
          Contact the <em>Institute.</em>
        </h1>
        <p className="ct-hero-sub">
          Whether you are discovering the work for the first time or ready to invest, advise, or build, start here. We respond to genuine inquiries personally.
        </p>
      </section>

      <section className="ct-inboxes" aria-labelledby="ct-inboxes-heading">
        <div className="ct-inboxes-inner">
          <div className="ct-inboxes-header ct-reveal">
            <span className="ct-section-label">Direct Lines</span>
            <h2 id="ct-inboxes-heading">
              Write to the <em>right inbox.</em>
            </h2>
            <p>
              Using the correct address helps us route your message to the people who can actually help, without delay.
            </p>
          </div>

          <div className="ct-grid">
            {INBOXES.map((box) => (
              <div key={box.href} className="ct-card ct-reveal">
                <span className="ct-card-label">{box.label}</span>
                <h3>{box.title}</h3>
                <p>{box.description}</p>
                <a href={box.href}>{box.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-participate" aria-labelledby="ct-participate-heading">
        <div className="ct-participate-inner ct-reveal">
          <h2 id="ct-participate-heading">
            Structured ways to <em>participate.</em>
          </h2>
          <p>
            If you are deciding how to engage (invest, advise, build, or walk the personal path), the Get Involved page lays out each path with context and next steps.
          </p>
          <Link href={WP.getInvolved} className="ct-btn">
            Get Involved
          </Link>
        </div>
      </section>

      <section className="ct-social" aria-labelledby="ct-social-heading">
        <div className="ct-social-inner ct-reveal">
          <h2 id="ct-social-heading">Follow the Institute</h2>
          <div className="ct-social-grid">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
