"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useRef } from "react";

import {
  DGSS_ABOUT_SOCIETY_HREF,
  DGSS_IMAGE,
  DGSS_INLINE_HREF,
  DGSS_INTRO_PARAS,
  DGSS_JOIN_EXTERNAL,
  DGSS_SECTIONS,
} from "@/lib/discern-genuine-secret-society-data";
import { DGSS_FAQ } from "@/lib/discern-genuine-secret-society-faq";
import { WP } from "@/lib/wordpress-routes";

function parseDgssInline(text: string): ReactNode {
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
        <a key={`${i++}-${key}`} href={DGSS_JOIN_EXTERNAL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else if (key === "aboutSociety") {
      out.push(
        <Link key={`${i++}-${key}`} href={DGSS_ABOUT_SOCIETY_HREF}>
          {label}
        </Link>
      );
    } else {
      const href = DGSS_INLINE_HREF[key];
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

export function DiscernGenuineSecretSocietyPageContent() {
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
        <header className="nu-hero" aria-labelledby="dgss-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="dgss-hero-heading">How To Discern Genuine Secret Society Opportunities From Fraud</h1>
          {DGSS_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "dgss-intro-lead" : undefined}>
              {parseDgssInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={DGSS_IMAGE.src}
            alt={DGSS_IMAGE.alt}
            width={DGSS_IMAGE.width}
            height={DGSS_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {DGSS_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`dgss-${sec.id}-h`}>
              <h2 id={`dgss-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseDgssInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="dgss-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="dgss-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.secretSocietyDiffers}>Neothink vs other “secret groups”</Link>,{" "}
              <Link href={WP.neothinkSocietyClearingMisunderstandings}>Secret society myths</Link>,{" "}
              <Link href={WP.secretSocietyInvitationLetter}>Invitation letters</Link>,{" "}
              <Link href={WP.joinNeothinkSocietySecretMeetings}>Secret meetings</Link>,{" "}
              <Link href={WP.faq}>FAQ</Link>, <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {DGSS_FAQ.map((item) => (
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
                <p>Institute comparison article.</p>
                <Link href={WP.secretSocietyDiffers}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>FAQ</h3>
                <p>Society orientation.</p>
                <Link href={WP.faq}>Open FAQ</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Programs</h3>
                <p>Program families map.</p>
                <Link href={WP.programs}>Programs</Link>
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
              <div className="nu-secondary-card">
                <h3>Secret meetings</h3>
                <p>How members approach gatherings.</p>
                <Link href={WP.joinNeothinkSocietySecretMeetings}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
