"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";
import { WP } from "@/lib/wordpress-routes";

const WORKS = [
  {
    name: "Neothink Corpus",
    description:
      "Maps the human life lived in harmony with his nature across every domain.",
  },
  {
    name: "Unified Field of Conscious Civilization",
    description:
      "Discovers why and how man was separated from his nature 2,400 years ago, unearthing the single structural variable governing civilizational outcomes.",
  },
  {
    name: "Neovia",
    description: "The civilization designed around the correction.",
  },
  {
    name: "Neothink",
    description: "The mode of mind at the center of it all.",
  },
] as const;

const PRINCIPLES = [
  {
    num: "I.",
    title: "Principles, Not Beliefs",
    description:
      "His works do not prescribe what to believe. They teach how to think, how the world actually works, and how to pursue the happiness that is yours alone to define.",
  },
  {
    num: "II.",
    title: "Engineering, Not Politics",
    description:
      "Civilization treated as a structural problem with designable solutions. Not a political debate or an ideology. The error is structural. The correction is structural.",
  },
  {
    num: "III.",
    title: "Outside Conventional Institutions",
    description:
      "Fifty years of work done outside academia, politics, and the establishment. By those willing to ask what the institutions had foreclosed.",
  },
  {
    num: "IV.",
    title: "Every Domain, One Subject",
    description:
      "Mind, economics, governance, love, work, death. Human life as a single subject with connected principles, not separate fields with separate rules.",
  },
] as const;

export function Founder() {
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
      id="founder"
      className="nti-mark"
      aria-labelledby="founder-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Founder</span>
        <div className="nti-grid">
          <div className="nti-text nti-reveal">
            <h2 id="founder-heading">Mark Hamilton</h2>
            <span className="nti-title">
              Civilizational Theorist &middot; Philosopher &middot; Founder,
              Neothink Institute
            </span>
            <p className="nti-mark-subhead">
              When man lives in harmony with his nature, life expands. When
              separated from his nature, life contracts.
            </p>
            <p>
              All of society has been built on man&rsquo;s separation from his
              nature since the beginning of conscious civilization. The result
              is human suffering at all levels.
            </p>
            <p>
              Some people accept the world as it appears. Mark Hamilton
              couldn&rsquo;t. He spent fifty years demonstrating the condition
              was unnatural and designing its correction.
            </p>
            <p>
              Mark Hamilton looked across every domain of human life as an
              integrated whole, tracing it back to its essence: how man creates,
              thinks, connects, loves, heals, governs.
            </p>
            <div className="nti-mark-works">
              {WORKS.map((work) => (
                <div key={work.name} className="nti-mark-work">
                  <h4 className="nti-mark-work-name">{work.name}</h4>
                  <p className="nti-mark-work-desc">{work.description}</p>
                </div>
              ))}
            </div>
            <p>
              He relentlessly pursues a better world because he holds the
              individual as the highest value in the universe. Human suffering
              at this scale is a violation of all that matters.
            </p>
            <div className="nti-mark-final-verdict">
              <p>It does not need to exist.</p>
              <p>It never did.</p>
            </div>
          </div>

          <div className="nti-reveal">
            <div className="nti-portrait">
              <div className="nti-portrait-bg">
                <Image
                  src={MARK_HAMILTON_PORTRAIT_URL}
                  alt="Mark Hamilton, Founder of the Neothink Institute"
                  fill
                  priority
                  className="nti-portrait-img object-cover object-top"
                  sizes="(max-width: 900px) 100vw, 480px"
                />
              </div>
              <div className="nti-portrait-cap">
                <strong>Mark Hamilton</strong>
                <p>Founder, Neothink Institute</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nti-mark-declaration nti-reveal">
          <blockquote>
            &ldquo;For 2,400 years, the human mind has been fragmented.{" "}
            <em>Today the integration begins.</em>&rdquo;
          </blockquote>
        </div>

        <div className="nti-mark-principles nti-reveal">
          {PRINCIPLES.map((p) => (
            <div key={p.num} className="nti-mark-principle">
              <span className="nti-mark-principle-num">{p.num}</span>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

        <div className="nti-mark-cta nti-reveal">
          <Link href={WP.markHamilton} className="nti-btn">
            Full Biography &amp; Published Work
          </Link>
        </div>
      </div>
    </section>
  );
}
