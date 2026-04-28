"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const PATHS = [
  {
    id: "invest" as const,
    num: "I.",
    title: "Invest",
    body:
      "Neovia is the most consequential development project of this century. We are assembling a network of investors who understand that the current civilizational trajectory has only one endpoint, and that the structural exit ramp must be built now.",
    who: "For accredited investors, family offices, and high-net-worth individuals.",
    cta: { href: "mailto:support+invest@neothink.com", label: "Investment Inquiries", external: true },
  },
  {
    id: "advise" as const,
    num: "II.",
    title: "Advise",
    body:
      "The Institute is building advisory capacity across science, architecture, political strategy, technology, and civilizational design. If your expertise accelerates the build, we want to hear from you.",
    who: "For scientists, architects, political figures, technologists, and domain experts.",
    cta: { href: "mailto:support+advise@neothink.com", label: "Advisory Inquiries", external: true },
  },
  {
    id: "build" as const,
    num: "III.",
    title: "Build",
    body:
      "Neovia requires engineers, developers, operators, and builders who want to construct something that has never existed. If you build things and want to build the most important thing, this is the project.",
    who: "For builders, engineers, operators, and development professionals.",
    cta: { href: "mailto:support+build@neothink.com", label: "Builder Inquiries", external: true },
  },
  {
    id: "support" as const,
    num: "IV.",
    title: "Walk the Path",
    body:
      "The Way is the personal path. The Neothink Society is the community. The Day of Enlightenment is the live experience. If you feel the calling, if something in this work speaks to what you have been searching for, this is your entry point.",
    who: "",
    cta: { href: WP.theWay, label: "Begin The Way", external: false },
  },
] as const;

export function GetInvolvedPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".gi-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("gi-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("gi-visible");
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
    <main id="main-content" ref={mainRef} className="gi-page">
      <section className="gi-hero" aria-labelledby="gi-hero-heading">
        <div className="gi-hero-label">Build With Us</div>
        <h1 id="gi-hero-heading">
          Get <em>involved.</em>
        </h1>
        <p className="gi-hero-sub">
          The Neothink Institute is building at multiple scales simultaneously. There are many ways to participate, from
          funding the civilizational project to walking the personal path.
        </p>
      </section>

      <section className="gi-paths" aria-label="Ways to participate">
        <div className="gi-paths-grid">
          {PATHS.map((path) => (
            <div key={path.id} id={path.id} className="gi-path gi-reveal">
              <span className="gi-path-num">{path.num}</span>
              <h3>{path.title}</h3>
              <p>{path.body}</p>
              {path.who ? <div className="gi-who">{path.who}</div> : null}
              {path.cta.external ? (
                <a href={path.cta.href} className="gi-path-cta">
                  {path.cta.label}
                </a>
              ) : (
                <Link href={path.cta.href} className="gi-path-cta">
                  {path.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="gi-urgency" aria-label="Why this matters">
        <div className="gi-urgency-inner gi-reveal">
          <blockquote>
            Nothing in your lifetime will matter more than this. Not because we say so. Because once you see the cage,
            around the human mind and around <em>civilization</em>, you cannot unsee it. And once you cannot unsee it,
            you cannot <em>do nothing.</em>
          </blockquote>
          <p>
            The Unified Field proves that the current trajectory leads to extinction. The Prime Law is the structural
            correction. Neovia is the build. The Way is the personal path. The podcast delivers it to the world. Every
            piece is in motion. The question is whether you will be part of what comes next.
          </p>
        </div>
      </section>

      <section className="gi-next" aria-labelledby="gi-next-heading">
        <div className="gi-next-inner">
          <div className="gi-reveal">
            <span className="gi-section-label">What Happens Next</span>
            <h2 id="gi-next-heading">
              How engagement <em>works.</em>
            </h2>
            <p>We respond to every genuine inquiry. Here is what to expect depending on how you reach out.</p>
          </div>
          <div className="gi-reveal">
            <div className="gi-next-steps">
              <div className="gi-step">
                <span className="gi-step-num">1</span>
                <div className="gi-step-text">
                  <h4>You reach out.</h4>
                  <p>
                    Send an email to the appropriate address, or use the general contact form. Tell us who you are and
                    what interests you.
                  </p>
                </div>
              </div>
              <div className="gi-step">
                <span className="gi-step-num">2</span>
                <div className="gi-step-text">
                  <h4>We respond personally.</h4>
                  <p>No autoresponders. A real person reviews your inquiry and responds within 48 hours with relevant information and next steps.</p>
                </div>
              </div>
              <div className="gi-step">
                <span className="gi-step-num">3</span>
                <div className="gi-step-text">
                  <h4>We match you to the right path.</h4>
                  <p>
                    Depending on your interests: an investor conversation, an advisory discussion, community onboarding, or
                    simply pointing you to the right resources.
                  </p>
                </div>
              </div>
              <div className="gi-step">
                <span className="gi-step-num">4</span>
                <div className="gi-step-text">
                  <h4>We go deeper together.</h4>
                  <p>
                    Whether that means a formal meeting, membership, an advisory commitment, or simply following the work
                    as it develops. Every relationship begins with a conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gi-contact" aria-labelledby="gi-contact-heading">
        <div className="gi-contact-inner gi-reveal">
          <h2 id="gi-contact-heading">Ready to begin?</h2>
          <p>
            Reach out directly to the Institute. We welcome every inquiry, from the person just discovering The Way to
            the investor ready to fund the civilizational build.
          </p>
          <Link href={WP.contact} className="gi-btn-primary">
            Contact the Institute
          </Link>
        </div>
      </section>
    </main>
  );
}
