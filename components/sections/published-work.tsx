"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const ARTICLES: {
  href: string;
  tag: string;
  title: string;
  description: string;
  footer: string;
}[] = [
  {
    href: "/published-work/civilization-and-history/the-unified-field-of-conscious-civilization",
    tag: "Civilizational Theory",
    title: "The Unified Field of Conscious Civilization: A Complete Introduction",
    description:
      "The synthesis linking individual cognition, social order, and political legitimacy to a single underlying structure. And why it changes everything.",
    footer: "Mark Hamilton · Foundational",
  },
  {
    href: WP.theGreatestMentalBreakthrough,
    tag: "Consciousness Studies",
    title: "The Bicameral Mind and Its Modern Residue",
    description:
      "Julian Jaynes identified the psychological rupture that created civilization as we know it. What he could not complete, the Unified Field now closes.",
    footer: "Neothink Institute · Lexicon",
  },
  {
    href: WP.primeLaw,
    tag: "Political Theory",
    title:
      "The Prime Law: Why the Prohibition of Initiated Force Is a Natural Law, Not an Ideology",
    description:
      "Every civilization that has violated the Law of Humanity has paid the same price. The Prime Law codifies what history has already proven.",
    footer: "Mark Hamilton · Policy",
  },
  {
    href: WP.theJobRevolution,
    tag: "AI & Civilization",
    title: "The Purpose Void: What AI Is About to Do to Human Identity",
    description:
      'Silicon Valley says people will "just be more creative." They don\'t understand the depth of the void they are opening or what actually fills it.',
    footer: "Wallace Hamilton · Current",
  },
  {
    href: "/published-work/governance-and-political-theory/the-case-for-neovia",
    tag: "Neovia",
    title: "The Case for Neovia: Why the Anti-Extinction Architecture Must Be Built Now",
    description:
      "As long as hierarchy legitimizes force and AI accelerates decisions, nuclear annihilation is not a risk. It is a statistical certainty. Neovia is the only exit.",
    footer: "Mark Hamilton · Strategic",
  },
  {
    href: WP.theWay,
    tag: "The Way",
    title: "The Performing Self: Why You Are Not Who You Think You Are",
    description:
      "The version of you that has been running your life is not you. It is a character built to survive the hierarchy. This is how to find what's underneath.",
    footer: "Wallace Hamilton · Personal",
  },
];

export function PublishedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".nti-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nti-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("nti-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="nti-articles" id="articles" aria-labelledby="articles-heading">
      <div className="nti-inner">
        <span className="nti-label nti-reveal">From the Institute</span>
        <h2 id="articles-heading" className="nti-reveal">
          Published Work
        </h2>
        <p className="nti-articles-lede nti-reveal">
          The Neothink Institute is publishing its body of work online for free
          public access. Through the Public Archive Initiative, foundational
          manuscripts, current research, and primary frameworks are made
          available for study, citation, and reference.
        </p>
        <div className="nti-grid">
          {ARTICLES.map((article) => (
            <Link key={article.href} href={article.href} className="nti-card nti-reveal">
              <span className="nti-card-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="nti-card-footer">{article.footer}</div>
            </Link>
          ))}
        </div>
        <div className="nti-cta nti-reveal">
          <Link href={WP.publishedWork} className="nti-btn">
            Explore Published Work
          </Link>
        </div>
      </div>
    </section>
  );
}
