"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const FRAMEWORKS: {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Unleashed",
    subtitle: "The Promethean Promise",
    description:
      "Mark Hamilton's flagship synthesis. The arc of the Unified Field, delivered through book and podcast.",
    href: WP.unleashed,
  },
  {
    title: "The Unified Field of Conscious Civilization",
    description:
      "The first complete explanation of man, consciousness, and civilization.",
    href: WP.unifiedField,
  },
  {
    title: "Neothink",
    description: "The mind unleashed. The mind restored to its nature.",
    href: WP.neothink,
  },
  {
    title: "Neovia",
    description: "The civilization that was always possible.",
    href: WP.neovia,
  },
  {
    title: "The Prime Law",
    description: "The constitutional prohibition of initiated force.",
    href: WP.primeLaw,
  },
];

const CORPUS: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "The Neothink Manuscripts",
    description: "The primary manuscript corpus by Mark Hamilton.",
    href: WP.manuscripts,
  },
  {
    title: "Unleashed (Book)",
    description: "The flagship synthesis as a book-length work.",
    href: `${WP.unleashed}/the-book`,
  },
  {
    title: "The Prime Law Papers",
    description:
      "Constitutional architecture for civilization, codified across multiple primary works.",
    href: WP.primeLaw,
  },
];

const DOMAINS: {
  title: string;
  description: string;
  /** Routed at /published-work/{slug}/ once domain landing pages are ported. */
  slug: string;
}[] = [
  {
    title: "Civilization and History",
    description:
      "Every empire that has risen and collapsed did so according to a single structural variable.",
    slug: "civilization-and-history",
  },
  {
    title: "Consciousness and the Mind",
    description:
      "The structure of individual consciousness determines the structure of civilization.",
    slug: "consciousness-and-the-mind",
  },
  {
    title: "Human Nature",
    description:
      "Every political system, every economic model, every educational philosophy rests on an implicit theory of what human beings are. Most of those theories are wrong.",
    slug: "human-nature",
  },
  {
    title: "Business and Value Creation",
    description:
      "Every enterprise is an expression of consciousness organized into productive form.",
    slug: "business-and-value-creation",
  },
  {
    title: "Economics",
    description:
      "Economic productivity is a direct function of consciousness operating within a given governance structure.",
    slug: "economics",
  },
  {
    title: "Governance and Political Theory",
    description:
      "Political history is a record of the same structural error committed across every epoch.",
    slug: "governance-and-political-theory",
  },
  {
    title: "Love and Relationships",
    description:
      "Romantic love is among the most discussed and least understood phenomena in human experience.",
    slug: "love-and-relationships",
  },
  {
    title: "Psychology and Self-Leadership",
    description:
      "The structural conditions that determine whether an individual operates as the cause of his own life or as a passive respondent.",
    slug: "psychology-and-self-leadership",
  },
  {
    title: "Productivity and the Integrated Life",
    description:
      "Productivity is not a matter of technique. It is a function of consciousness structure.",
    slug: "productivity-and-the-integrated-life",
  },
  {
    title: "Health, Aging and Disease",
    description:
      "Aging is not an inevitability. Chronic disease is not a permanent condition of civilized life.",
    slug: "health-aging-and-disease",
  },
  {
    title: "Science and Physics",
    description:
      "The physical universe operates according to structure. Consciousness exists within that structure.",
    slug: "science-and-physics",
  },
  {
    title: "Religion, Spirituality and Consciousness",
    description:
      "The distinction between authentic spirituality and mysticism, and what replaces institutional belief authority when consciousness matures.",
    slug: "religion-spirituality-and-consciousness",
  },
  {
    title: "Education",
    description:
      "Most education systems were designed to produce compliance, not conscious, self-directed individuals.",
    slug: "education",
  },
  {
    title: "Philosophy and Anthropology",
    description:
      "The Western philosophical tradition contains a structural error that has persisted for twenty four centuries.",
    slug: "philosophy-and-anthropology",
  },
  {
    title: "Understanding the Universe",
    description:
      "Consciousness is not a byproduct of the universe. It is a structural feature of it.",
    slug: "understanding-the-universe",
  },
];

export function PublishedWorkPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pw-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pw-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("pw-visible");
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
    <main id="main-content" ref={mainRef} className="pw-page">
      <section className="pw-hero" aria-labelledby="pw-hero-heading">
        <div className="pw-hero-inner">
          <p className="pw-hero-eyebrow">From the Institute</p>
          <h1 id="pw-hero-heading">Published Work</h1>
          <p className="pw-hero-lede">
            The Neothink Institute publishes its body of work online for free
            public access: major works, foundational manuscripts, current
            research, and civilizational analysis. Through the Public Archive
            Initiative, the corpus is organized for study, citation, and
            reference.
          </p>
          <p className="pw-hero-lede">
            The Neothink Corpus houses the primary works. Research and
            Analysis carries the Institute&rsquo;s discoveries into the
            questions now facing civilization.
          </p>
        </div>
      </section>

      <section
        className="pw-section pw-section--cream"
        id="major-works"
        aria-labelledby="pw-major-heading"
      >
        <div className="pw-section-inner">
          <h2 id="pw-major-heading" className="pw-section-title pw-reveal">
            Major Works and Frameworks
          </h2>
          <p className="pw-section-lede pw-reveal">
            The body of work coheres into four major frameworks and projects,
            each treated at full depth on its own page.
          </p>
          <div className="pw-frameworks-grid pw-reveal">
            {FRAMEWORKS.map((fw) => (
              <Link
                key={fw.title}
                href={fw.href}
                className="pw-framework-card"
              >
                <h3 className="pw-framework-title">{fw.title}</h3>
                {fw.subtitle ? (
                  <span className="pw-framework-subtitle">{fw.subtitle}</span>
                ) : null}
                <p className="pw-framework-description">{fw.description}</p>
                <span className="pw-framework-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="pw-section pw-section--stone"
        id="neothink-corpus"
        aria-labelledby="pw-corpus-heading"
      >
        <div className="pw-section-inner">
          <h2 id="pw-corpus-heading" className="pw-section-title pw-reveal">
            The Neothink Corpus
          </h2>
          <p className="pw-section-lede pw-reveal">
            The Neothink Corpus is the primary body of manuscripts, books,
            foundational frameworks, and source works developed across fifty
            years. The corpus is published online for free public access and
            organized for study, citation, and reference.
          </p>
          <div className="pw-corpus-grid pw-reveal">
            {CORPUS.map((work) => (
              <Link
                key={work.title}
                href={work.href}
                className="pw-corpus-card"
              >
                <h3 className="pw-corpus-title">{work.title}</h3>
                <p className="pw-corpus-description">{work.description}</p>
                <span className="pw-corpus-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          <p className="pw-section-coda pw-reveal">
            The corpus is the working primary source of an active research
            institution.
          </p>
        </div>
      </section>

      <section
        className="pw-section pw-section--cream"
        id="research-and-analysis"
        aria-labelledby="pw-research-heading"
      >
        <div className="pw-section-inner">
          <h2 id="pw-research-heading" className="pw-section-title pw-reveal">
            Research and Analysis by Domain
          </h2>
          <p className="pw-section-lede pw-reveal">
            Current research applies the Institute&rsquo;s frameworks to the
            questions now facing civilization, consciousness, governance, AI,
            economics, business, and the future of man. The work is organized
            by domain across the breadth of the body of work.
          </p>
          <div className="pw-domains-grid pw-reveal">
            {DOMAINS.map((domain) => (
              <article key={domain.slug} className="pw-domain-card">
                <span className="pw-domain-status">Coming Soon</span>
                <h3 className="pw-domain-title">{domain.title}</h3>
                <p className="pw-domain-description">{domain.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="pw-section pw-section--stone"
        id="citation-and-reference"
        aria-labelledby="pw-citation-heading"
      >
        <div className="pw-section-inner pw-section-inner--narrow">
          <h2 id="pw-citation-heading" className="pw-section-title pw-reveal">
            Citation and Reference
          </h2>
          <p className="pw-section-lede pw-reveal">
            The Institute&rsquo;s body of work is published with stable URLs,
            primary-source metadata, and citation information for academic and
            institutional use.
          </p>

          <div className="pw-citation-block pw-reveal">
            <h3 className="pw-citation-block-title">Free Public Access</h3>
            <p>
              The Institute publishes for free public access. No registration.
              No paywall. The work is available because the work matters.
            </p>
          </div>

          <div className="pw-citation-block pw-reveal">
            <h3 className="pw-citation-block-title">Citation Format</h3>
            <p>
              The recommended format treats the Institute as the publisher and
              follows academic citation conventions.
            </p>
            <p className="pw-citation-format">
              <em>
                Author, Title, Year (Edition). The Neothink Institute. URL.
                Accessed [date].
              </em>
            </p>
          </div>

          <div className="pw-citation-block pw-reveal">
            <h3 className="pw-citation-block-title">Archive Notes</h3>
            <p>
              Earlier-generation material from the foundational corpus is
              published with editorial framing that locates each work in its
              intellectual context. The framing distinguishes what has been
              refined or moved past in later synthesis from what remains
              load-bearing in the current body of work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
