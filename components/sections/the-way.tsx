"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const STAGES: {
  numeral: string;
  title: string;
  description: React.ReactNode;
  tag: string;
}[] = [
  {
    numeral: "I",
    title: "The Waking",
    description: (
      <>
        The recognition that you have been asleep. Learning to see through illusions down to{" "}
        <i>what is.</i> Become aware of the conditioned self and imprints of external authority
        installed without your knowledge.
      </>
    ),
    tag: "See clearly",
  },
  {
    numeral: "II",
    title: "The Clearing",
    description:
      "The systematic removal of everything false. The worth structures that don\u2019t work. The unforgiven past that costs energy every day. The environmental architecture that keeps reinstalling the old operating system. The deepest work. The real transformation.",
    tag: "Remove what is not",
  },
  {
    numeral: "III",
    title: "The Living",
    description:
      "Operating fully from the awake self in ordinary life. Creating, loving, growing, building \u2014 with the full power of a mind that is finally free. The question is no longer who you should become. It is what you will create, build, and add to life now that the cage is removed. The path for the rest of a life of abiding happiness and prosperity.",
    tag: "Live unleashed",
  },
];

export function TheWay() {
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
    <section ref={sectionRef} className="nti-way" id="the-way" aria-labelledby="the-way-heading">
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Personal Path</span>
        <div className="nti-rule nti-reveal" aria-hidden />
        <div className="nti-intro nti-reveal">
          <div>
            <h2 id="the-way-heading">The Unified Field, lived from the inside.</h2>
            <p className="nti-intro-body">
              The Way is the personal expression of everything the Institute is building at the
              civilizational scale. It is the path of seeing through the illusions of those who wish
              to keep you small, removing everything that was installed from the outside, and waking
              up a mind that has been caged.
            </p>
          </div>
          <div className="nti-intro-quote">
            <p>
              &ldquo;You are not broken. You were never broken. You were covered. And that covering
              can be removed.&rdquo;
            </p>
          </div>
        </div>
        <div className="nti-stages">
          {STAGES.map((stage) => (
            <div key={stage.title} className="nti-stage nti-reveal">
              <span className="nti-stage-num">{stage.numeral}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <span className="nti-stage-tag">{stage.tag}</span>
            </div>
          ))}
        </div>
        <div className="nti-footer nti-reveal">
          <p className="nti-footer-quote">
            &ldquo;We do not tell you who you are. We show you how to remove all that is not you.
            What is left, is you.&rdquo;
          </p>
          <Link href={WP.theWay} className="nti-btn">
            Begin The Way
          </Link>
        </div>
      </div>
    </section>
  );
}
