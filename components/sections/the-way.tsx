"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const STAGES = [
  {
    numeral: "I.",
    title: "The Waking",
    description: "Learning to see through illusions down to what is.",
  },
  {
    numeral: "II.",
    title: "The Clearing",
    description: "The systematic removal of everything that is not you.",
  },
  {
    numeral: "III.",
    title: "The Living",
    description:
      "Operating fully from the uncovered self, seeing truth directly, and pursuing a life of abiding happiness and prosperity.",
  },
] as const;

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
    <section
      ref={sectionRef}
      className="nti-way"
      id="the-way"
      aria-labelledby="the-way-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Personal Path</span>
        <div className="nti-way-header nti-reveal">
          <h2 id="the-way-heading">The Way</h2>
          <p className="nti-way-subtitle">
            The Unified Field, <em>lived from the inside.</em>
          </p>
        </div>
        <div className="nti-way-body-stages nti-reveal">
          <div className="nti-way-prose">
            <p className="nti-way-axiom">
              Your mind was built to see truth directly. Something was placed
              over it.
            </p>
            <p>
              The covering is all that separates you from truth, from yourself,
              from the life you were meant to live. Individual suffering is the
              distance between you and truth.
            </p>
            <p className="nti-way-highlight">
              You are not broken. You were never broken. You were covered.
            </p>
            <p>There is a way to remove the covering. It is The Way.</p>
            <p>
              The Way does not tell you what to think, what to believe, or how
              to live. The answers to those questions are yours alone.
            </p>
            <p>
              It is the path to restore your ability to see truth directly and
              clear all that is false, so that what remains is you.
            </p>
            <p className="nti-way-body-close">
              And for the first time, <em>you live.</em>
            </p>
          </div>
          <div className="nti-way-stages">
            {STAGES.map((stage) => (
              <div key={stage.title} className="nti-way-stage">
                <div className="nti-way-stage-head">
                  <span className="nti-way-stage-num" aria-hidden="true">
                    {stage.numeral}
                  </span>
                  <h3>{stage.title}</h3>
                </div>
                <p>{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="nti-way-hero-quote nti-reveal">
          <blockquote>
            &ldquo;The mind was meant to see. The sleep was never yours.&rdquo;
          </blockquote>
          <cite>Wallace Hamilton</cite>
        </div>
        <div className="nti-way-cta nti-reveal">
          <Link href={WP.theWay} className="nti-btn">
            Walk The Way
          </Link>
        </div>
      </div>
    </section>
  );
}
