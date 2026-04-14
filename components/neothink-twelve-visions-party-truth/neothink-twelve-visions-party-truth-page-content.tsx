"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useRef } from "react";

import {
  NTV_TRUTH_ABOUT_SOCIETY_HREF,
  NTV_TRUTH_IMAGE,
  NTV_TRUTH_INLINE_HREF,
  NTV_TRUTH_INTRO_PARAS,
  NTV_TRUTH_JOIN_EXTERNAL,
  NTV_TRUTH_NO_TAXES_LEGACY_URL,
  NTV_TRUTH_SECTIONS,
} from "@/lib/neothink-twelve-visions-party-truth-data";
import { NTV_TRUTH_FAQ } from "@/lib/neothink-twelve-visions-party-truth-faq";
import { WP } from "@/lib/wordpress-routes";

function parseNtvInline(text: string): ReactNode {
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
        <a key={`${i++}-${key}`} href={NTV_TRUTH_JOIN_EXTERNAL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else if (key === "aboutSociety") {
      out.push(
        <Link key={`${i++}-${key}`} href={NTV_TRUTH_ABOUT_SOCIETY_HREF}>
          {label}
        </Link>
      );
    } else if (key === "noTaxesLegacy") {
      out.push(
        <a key={`${i++}-${key}`} href={NTV_TRUTH_NO_TAXES_LEGACY_URL}>
          {label}
        </a>
      );
    } else {
      const href = NTV_TRUTH_INLINE_HREF[key];
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

export function NeothinkTwelveVisionsPartyTruthPageContent() {
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
        <header className="nu-hero" aria-labelledby="ntv-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="ntv-hero-heading">Neothink And The Twelve Visions Party: The Untold Truth</h1>
          {NTV_TRUTH_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "ntv-intro-lead" : undefined}>
              {parseNtvInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={NTV_TRUTH_IMAGE.src}
            alt={NTV_TRUTH_IMAGE.alt}
            width={NTV_TRUTH_IMAGE.width}
            height={NTV_TRUTH_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {NTV_TRUTH_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`ntv-${sec.id}-h`}>
              <h2 id={`ntv-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseNtvInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="ntv-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="ntv-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              For the party framework on this site, see{" "}
              <Link href={WP.twelveVisionsParty}>Twelve Visions Party</Link>. Orientation:{" "}
              <Link href={WP.faq}>FAQ</Link>, <Link href={WP.programs}>Programs</Link>,{" "}
              <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {NTV_TRUTH_FAQ.map((item) => (
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
                <h3>Twelve Visions Party</h3>
                <p>Political framework (Institute voice).</p>
                <Link href={WP.twelveVisionsParty}>Open page</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink</h3>
                <p>Operating system overview.</p>
                <Link href={WP.neothink}>Neothink</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Prime Law</h3>
                <p>Constitutional framing.</p>
                <Link href={WP.primeLaw}>Prime Law</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
