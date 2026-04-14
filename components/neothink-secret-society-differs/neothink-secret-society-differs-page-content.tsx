"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useRef } from "react";

import {
  NSSD_IMAGE,
  NSSD_INTRO,
  NSSD_INLINE_HREF,
  NSSD_JOIN_EXTERNAL,
  NSSD_SECTIONS,
} from "@/lib/neothink-secret-society-differs-data";
import { NSSD_FAQ } from "@/lib/neothink-secret-society-differs-faq";
import { WP } from "@/lib/wordpress-routes";

const ABOUT_SOCIETY = `${WP.about}#ab-society-heading`;

function parseNssdInline(text: string): ReactNode {
  const re = /\[\[([a-zA-Z]+)\|([^\]]+)\]\]/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    const [full, key, label] = m;
    if (m.index > last) {
      out.push(text.slice(last, m.index));
    }
    if (key === "joinExternal") {
      out.push(
        <a key={`${i++}-${key}`} href={NSSD_JOIN_EXTERNAL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else if (key === "aboutSociety") {
      out.push(
        <Link key={`${i++}-${key}`} href={ABOUT_SOCIETY}>
          {label}
        </Link>
      );
    } else {
      const href = NSSD_INLINE_HREF[key];
      if (href) {
        out.push(
          <Link key={`${i++}-${key}`} href={href}>
            {label}
          </Link>
        );
      } else {
        out.push(full);
      }
    }
    last = m.index + full.length;
  }
  if (last < text.length) {
    out.push(text.slice(last));
  }
  return out.length === 1 ? out[0] : <Fragment>{out}</Fragment>;
}

export function NeothinkSecretSocietyDiffersPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".nu-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nu-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("nu-visible");
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
    <main id="main-content" ref={mainRef} className="nu-page nssd-page">
      <article>
        <header className="nu-hero" aria-labelledby="nssd-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="nssd-hero-heading">
            How the Neothink Secret Society <em>differs</em> from other secret groups
          </h1>
          <p className="nu-hero-sub" id="nssd-intro-lead">
            {NSSD_INTRO}
          </p>
        </header>

        <div className="nssd-featured nu-reveal">
          <Image
            src={NSSD_IMAGE.src}
            alt={NSSD_IMAGE.alt}
            width={NSSD_IMAGE.width}
            height={NSSD_IMAGE.height}
            className="nssd-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose nssd-body">
          {NSSD_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="nssd-section nu-reveal" aria-labelledby={`nssd-${sec.id}-h`}>
              <h2 id={`nssd-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseNssdInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="nssd-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="nssd-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Short clarifications for readers arriving from search. Deeper Society-oriented posts:{" "}
              <Link href={WP.neothinkSocietyClearingMisunderstandings}>clearing up misunderstandings</Link>,{" "}
              <Link href={WP.discernGenuineSecretSociety}>genuine vs fraud</Link>,{" "}
              <Link href={WP.secretSocietyInvitationLetter}>invitation letters</Link>. For programs, see{" "}
              <Link href={WP.faq}>FAQ</Link> or <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {NSSD_FAQ.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nu-secondary nu-reveal" aria-label="Related on this site">
          <div className="nu-secondary-inner">
            <h2 className="nu-secondary-lead" style={{ marginBottom: "1rem" }}>
              Related
            </h2>
            <div className="nu-secondary-grid">
              <div className="nu-secondary-card">
                <h3>FAQ</h3>
                <p>Society orientation and common questions.</p>
                <Link href={WP.faq}>Open FAQ</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink</h3>
                <p>Framework overview on this site.</p>
                <Link href={WP.neothink}>Neothink</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>About</h3>
                <p>Institute vs Society on one page.</p>
                <Link href={WP.about}>About</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Clearing up misunderstandings</h3>
                <p>Agency article on the “secret society” label.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Genuine vs fraud</h3>
                <p>How to evaluate offers.</p>
                <Link href={WP.discernGenuineSecretSociety}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Invitation letters</h3>
                <p>Receiving an invitation—what to consider.</p>
                <Link href={WP.secretSocietyInvitationLetter}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
