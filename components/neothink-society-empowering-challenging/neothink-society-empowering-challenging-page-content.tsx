"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useRef } from "react";

import {
  NSEC_ABOUT_SOCIETY_HREF,
  NSEC_GREATEST_MENTAL_URL,
  NSEC_IMAGE,
  NSEC_INLINE_HREF,
  NSEC_INTRO_PARAS,
  NSEC_JOIN_EXTERNAL,
  NSEC_SECTIONS,
} from "@/lib/neothink-society-empowering-challenging-data";
import { NSEC_FAQ } from "@/lib/neothink-society-empowering-challenging-faq";
import { WP } from "@/lib/wordpress-routes";

function parseNsecInline(text: string): ReactNode {
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
        <a key={`${i++}-${key}`} href={NSEC_JOIN_EXTERNAL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else if (key === "aboutSociety") {
      out.push(
        <Link key={`${i++}-${key}`} href={NSEC_ABOUT_SOCIETY_HREF}>
          {label}
        </Link>
      );
    } else if (key === "greatestMentalBreakthrough") {
      out.push(
        <a key={`${i++}-${key}`} href={NSEC_GREATEST_MENTAL_URL}>
          {label}
        </a>
      );
    } else {
      const href = NSEC_INLINE_HREF[key];
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

export function NeothinkSocietyEmpoweringChallengingPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby="nsec-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="nsec-hero-heading">How The Neothink Society Can Be Both Empowering And Challenging</h1>
          {NSEC_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "nsec-intro-lead" : undefined}>
              {parseNsecInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={NSEC_IMAGE.src}
            alt={NSEC_IMAGE.alt}
            width={NSEC_IMAGE.width}
            height={NSEC_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {NSEC_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`nsec-${sec.id}-h`}>
              <h2 id={`nsec-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseNsecInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="nsec-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="nsec-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Short clarifications. For orientation see <Link href={WP.faq}>FAQ</Link>,{" "}
              <Link href={WP.programs}>Programs</Link>, or <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {NSEC_FAQ.map((item) => (
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
                <h3>Neothink vs other secret groups</h3>
                <p>Comparison article.</p>
                <Link href={WP.secretSocietyDiffers}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Is Neothink self-help?</h3>
                <p>Books and programs framing.</p>
                <Link href={WP.isNeothinkSelfHelpBook}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>FAQ</h3>
                <p>Society orientation.</p>
                <Link href={WP.faq}>Open FAQ</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Clearing up misunderstandings</h3>
                <p>The “secret society” label in context.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Invitation letters</h3>
                <p>What an invitation can mean.</p>
                <Link href={WP.secretSocietyInvitationLetter}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
