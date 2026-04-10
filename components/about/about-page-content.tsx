"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";
import { WP } from "@/lib/wordpress-routes";

/** Migrated from neothink.com/about/ (Elementor), editorial unchanged. */
const BIO_PARAGRAPHS = [
  "Mark Hamilton is an American civilizational theorist, systems philosopher, and institutional founder whose work marked a decisive break from the hierarchical, force-based structures that dominated human civilization for over two millennia. Emerging at the convergence of artificial intelligence, nuclear risk, and stalled human consciousness, Hamilton articulated—and operationalized—a new framework for civilization grounded in internal authority, voluntary cooperation, and integrated human cognition.",
  "Hamilton is best known as the architect of the Neothink Corpus, a multi-decade body of work spanning psychology, economics, political theory, consciousness studies, and civilizational design. Unlike traditional philosophical schools, Neothink was not presented as abstract theory but as a functional operating system for the human mind, designed to restore integrated thinking in individuals and societies long constrained by fragmented, hierarchical modes of thought.",
  "Central to Hamilton’s historical significance is his identification of what he termed the 2,400-year civilizational detour—a structural error originating in post-Aristotelian history, in which external authority, hierarchy, and force replaced self-integration as the organizing principle of civilization. Drawing on Aristotle’s lost psychological framework, Julian Jaynes’ bicameral-mind thesis, and a systemic analysis of power, Hamilton argued that humanity had achieved technological consciousness without ever completing the evolution of internal self-leadership. The result, he warned, was an extinction-level mismatch: nuclear-powered societies governed by pre-integrated minds.",
  "Hamilton’s most consequential contribution was not merely diagnosing this condition, but designing its correction.",
  "He formulated the Unified Field of Conscious Civilization, a synthesis showing how individual cognition, social order, economic productivity, and political legitimacy arise from the same underlying structure: whether human beings are organized around internal authority or external force. From this foundation emerged the Prime Law—the prohibition of initiated force—as not a moral ideal, but a necessary environmental condition for advanced consciousness to function at scale.",
  "This theoretical breakthrough culminated in Neovia: a proposed Prime-Law-based civilization prototype designed to remove hierarchy and coercion from the human environment entirely. Conceived not as a utopia or ideology, Neovia was framed as an anti-extinction architecture. A practical, jurisdictional solution to the otherwise inevitable collapse of hierarchical nuclear civilization. In Hamilton’s formulation, Neovia represented the first deliberate attempt in history to align governance, economics, law, and technology with the requirements of integrated human consciousness.",
  "Hamilton’s work is distinctive for its insistence that consciousness is not merely personal, but civilizational, and that environments either suppress or unleash human potential. He argued that no amount of education, morality, or intelligence could overcome a coercive structure, and that only a systemic redesign of civilization itself could allow humanity’s next evolutionary step to occur.",
  "Over the course of his career, Hamilton authored and published millions of words across books, manuscripts, and strategic briefings, influencing generations of entrepreneurs, independent thinkers, and institutional designers. His writings are notable for blending philosophical depth with operational clarity, treating civilization as an engineering problem rather than a political debate.",
  "Historians now increasingly place Hamilton alongside the rare figures who did not merely interpret their age, but interrupted it. Where earlier thinkers sought better rulers, better laws, or better ideologies, Hamilton asked a more radical question: What if hierarchy itself is the problem? And more importantly: What replaces it?",
  "Whether Neovia ultimately stands as a single jurisdiction or the first of many, Mark Hamilton’s enduring legacy lies in reframing the human future. In an era when extinction appeared technologically inevitable, he made the case that survival was not a matter of restraint or control, but of completing the evolution of the human mind—and building a civilization worthy of it.",
] as const;

export function AboutPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".ab-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ab-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("ab-visible");
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
    <main id="main-content" ref={mainRef} className="ab-page">
      <section className="ab-hero" aria-labelledby="ab-hero-heading">
        <div className="ab-hero-inner">
          <p className="ab-hero-label">The Institute</p>
          <h1 id="ab-hero-heading">About Mark Hamilton</h1>
          <p className="ab-hero-tagline">
            Founder of Neothink · Architect of the Unified Field of Conscious Civilization · Originator of Neovia
          </p>
        </div>
      </section>

      <section className="ab-body" aria-label="Biography">
        <div className="ab-body-inner">
          <figure className="ab-reveal ab-portrait">
            <Image
              src={MARK_HAMILTON_PORTRAIT_URL}
              alt="Mark Hamilton"
              width={1010}
              height={806}
              className="ab-portrait-img"
              sizes="(max-width: 900px) 100vw, 420px"
              priority
            />
            <figcaption className="ab-portrait-caption">Portrait — Neothink Institute</figcaption>
          </figure>

          <div className="ab-prose">
            {BIO_PARAGRAPHS.map((text, i) => (
              <p key={i} className="ab-reveal ab-para">
                {text}
              </p>
            ))}

            <div className="ab-reveal ab-cta-row">
              <Link href={WP.markHamilton} className="ab-btn-primary">
                Mark Hamilton — full hub
              </Link>
              <Link href={WP.podcast} className="ab-btn-secondary">
                Podcast &amp; video
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
