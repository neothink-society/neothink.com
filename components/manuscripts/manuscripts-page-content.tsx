"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

import { type MsBook, MANUSCRIPT_BOOKS } from "./manuscripts-books-data";

function BookCard({ book }: { book: MsBook }) {
  const coverClass = `ms-book-cover ms-cover-${book.cover}`;
  const inner = (
    <>
      <div className={coverClass}>
        <div className="ms-book-cover-inner">
          <span className="ms-book-tag">{book.tag}</span>
          <div className="ms-book-title-area">
            <div className="ms-book-title">{book.title}</div>
            {book.subtitle ? <div className="ms-book-subtitle">{book.subtitle}</div> : null}
          </div>
          <div className="ms-book-author">{book.author}</div>
        </div>
      </div>
      <div className="ms-book-meta">
        <div className="ms-book-meta-title">{book.metaTitle}</div>
        <div className="ms-book-meta-sub">{book.metaSub}</div>
      </div>
    </>
  );

  if (book.href) {
    return (
      <Link href={book.href} className="ms-book ms-reveal">
        {inner}
      </Link>
    );
  }

  return (
    <a
      href="#"
      className="ms-book ms-reveal"
      onClick={(e) => e.preventDefault()}
      aria-label={`${book.metaTitle} (coming soon)`}
    >
      {inner}
    </a>
  );
}

export function ManuscriptsPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".ms-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ms-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("ms-visible");
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
    <main id="main-content" ref={mainRef} className="ms-page">
      <section className="ms-hero" aria-labelledby="ms-hero-heading">
        <div className="ms-hero-label">The Complete Library</div>
        <h1 id="ms-hero-heading">
          The Published Manuscripts of <em>Mark Hamilton</em>
        </h1>
        <p className="ms-hero-sub">
          Five decades of research into consciousness, economics, political theory, civilizational design, value creation,
          and the full architecture of integrated human potential. Millions of words. One integrated vision.
        </p>
      </section>

      <section className="ms-featured" aria-labelledby="ms-featured-heading">
        <div className="ms-featured-inner ms-reveal">
          <div className="ms-featured-text">
            <h2 id="ms-featured-heading">Unleashed</h2>
            <span className="ms-featured-subtitle">The Promethean Promise</span>
            <p>
              Mark Hamilton&apos;s magnum opus. The complete delivery of the Unified Field of Conscious Civilization. The
              full arc from the bicameral collapse through the Prime Law to Neovia.
            </p>
            <p>
              This is the culminating work. Everything Hamilton has built across five decades converges here. Available
              in its entirety on this site.
            </p>
            <div className="ms-featured-note">The Unified Field of Conscious Civilization · Part One now available</div>
            <Link href={WP.unleashed} className="ms-btn-gold">
              Read Online
            </Link>
            <Link href={WP.unleashedDownload} className="ms-btn-light">
              Download PDF
            </Link>
          </div>
          <div className="ms-featured-visual">
            <div className="ms-fv-title">Unleashed</div>
            <div className="ms-fv-sub">The Promethean Promise</div>
            <div className="ms-fv-author">by Mark Hamilton</div>
          </div>
        </div>
      </section>

      <section className="ms-library" aria-labelledby="ms-library-heading">
        <div className="ms-library-inner">
          <div className="ms-library-header ms-reveal">
            <h2 id="ms-library-heading">The Complete Library</h2>
            <span>All published works · Mark Hamilton</span>
          </div>

          <div className="ms-grid">
            {MANUSCRIPT_BOOKS.map((book) => (
              <BookCard key={book.metaTitle} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className="ms-author" aria-labelledby="ms-author-heading">
        <div className="ms-author-inner ms-reveal">
          <div className="ms-author-avatar" aria-hidden="true">
            <span>MH</span>
          </div>
          <div className="ms-author-text">
            <h3 id="ms-author-heading">Mark Hamilton</h3>
            <span className="ms-author-title">Civilizational Theorist · Founder, Neothink Institute</span>
            <p>
              Mark Hamilton has spent five decades producing the most comprehensive body of work on consciousness,
              civilization, and human potential ever assembled. From the original Neo-Tech discovery through the Neothink
              System to the Unified Field of Conscious Civilization, each manuscript builds on everything before it,
              forming one integrated vision of what humanity can become.
            </p>
            <Link href={WP.markHamilton}>Full Biography →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
