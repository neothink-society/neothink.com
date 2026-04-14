"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode, useEffect, useRef } from "react";

import {
  IS_NEOTHINK_SELF_HELP_IMAGE,
  IS_NEOTHINK_SELF_HELP_INTRO_PARAS,
  IS_NEOTHINK_SELF_HELP_SECTIONS,
  IS_NEOTHINK_JOIN_EXTERNAL,
  SHB_ABOUT_SOCIETY_HREF,
  SHB_INLINE_HREF,
  SHB_PHILOSOPHIES_LEGACY_URL,
} from "@/lib/is-neothink-self-help-book-data";
import { IS_NEOTHINK_SELF_HELP_FAQ } from "@/lib/is-neothink-self-help-book-faq";
import { WP } from "@/lib/wordpress-routes";

function parseShbInline(text: string): ReactNode {
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
        <a key={`${i++}-${key}`} href={IS_NEOTHINK_JOIN_EXTERNAL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    } else if (key === "aboutSociety") {
      out.push(
        <Link key={`${i++}-${key}`} href={SHB_ABOUT_SOCIETY_HREF}>
          {label}
        </Link>
      );
    } else if (key === "philosophiesWrong") {
      out.push(
        <a key={`${i++}-${key}`} href={SHB_PHILOSOPHIES_LEGACY_URL}>
          {label}
        </a>
      );
    } else {
      const href = SHB_INLINE_HREF[key];
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

export function IsNeothinkSelfHelpBookPageContent() {
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
        <header className="nu-hero" aria-labelledby="shb-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="shb-hero-heading">Is Neothink Just Another Self-Help Book?</h1>
          {IS_NEOTHINK_SELF_HELP_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "shb-intro-lead" : undefined}>
              {parseShbInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={IS_NEOTHINK_SELF_HELP_IMAGE.src}
            alt={IS_NEOTHINK_SELF_HELP_IMAGE.alt}
            width={IS_NEOTHINK_SELF_HELP_IMAGE.width}
            height={IS_NEOTHINK_SELF_HELP_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {IS_NEOTHINK_SELF_HELP_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`shb-${sec.id}-h`}>
              <h2 id={`shb-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseShbInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="shb-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="shb-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Short clarifications for readers arriving from search. For programs, see{" "}
              <Link href={WP.programs}>Programs</Link>, <Link href={WP.faq}>FAQ</Link>, or{" "}
              <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {IS_NEOTHINK_SELF_HELP_FAQ.map((item) => (
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
                <h3>Neothink vs “secret groups”</h3>
                <p>Institute article comparing common narratives.</p>
                <Link href={WP.secretSocietyDiffers}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink</h3>
                <p>Framework overview.</p>
                <Link href={WP.neothink}>Neothink</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Published work</h3>
                <p>Books and manuscripts context.</p>
                <Link href={WP.publishedWork}>Published Work</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>“Secret society” myths</h3>
                <p>Misunderstandings vs what the Society describes.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Genuine vs fraud</h3>
                <p>Evaluating secret-society-style offers.</p>
                <Link href={WP.discernGenuineSecretSociety}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
