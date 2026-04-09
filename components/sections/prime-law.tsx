"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

export function PrimeLaw() {
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
    <section
      ref={sectionRef}
      id="prime-law"
      className="nti-primelaw"
      aria-labelledby="prime-law-heading"
    >
      <div className="nti-inner nti-reveal">
        <h2 id="prime-law-heading" className="nti-label">
          The Constitutional Foundation
        </h2>
        <blockquote>
          &ldquo;No person, group of persons, or government shall initiate force, threat of force, or
          fraud against any individual&rsquo;s self, property, or contract.&rdquo;
        </blockquote>
        <Link href={WP.primeLaw} className="nti-link">
          Read the Prime Law &rarr;
        </Link>
      </div>
    </section>
  );
}
