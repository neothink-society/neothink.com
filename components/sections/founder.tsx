"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";
import { WP } from "@/lib/wordpress-routes";

const CREDENTIALS = [
  {
    title: "Neothink Corpus",
    description:
      "Multi-decade body of work spanning psychology, economics, political theory, and civilizational design, published across millions of words of manuscripts, books, and strategic briefings.",
  },
  {
    title: "Unified Field of Conscious Civilization",
    description:
      "The first complete synthesis linking individual cognition, social order, economic productivity, and political legitimacy to a single underlying structure.",
  },
  {
    title: "Neovia — Prime Law Civilization Prototype",
    description:
      "Conceived as an anti-extinction architecture: the first jurisdictional solution to the collision between nuclear-era civilization and artificial intelligence.",
  },
  {
    title: "Decades of Independent Research",
    description:
      "Founded the Neothink Institute. Three generations of civilizational development, now entering its public phase.",
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
              Civilizational Theorist &middot; Systems Philosopher &middot;
              Founder, Neothink Institute
            </span>
            <p>
              Mark Hamilton is an American civilizational theorist and
              institutional founder whose work spans five decades of research
              into consciousness, economics, political theory, and civilizational
              design.
            </p>
            <p>
              He is the architect of the{" "}
              <strong>Unified Field of Conscious Civilization,</strong> the
              synthesis identifying the single structural variable that determines
              whether civilizations flourish or collapse, and the originator of{" "}
              <strong>Neovia</strong>, the first proposed civilization designed
              entirely around the Prime Law prohibition of initiated force.
            </p>
            <p>
              Hamilton&rsquo;s most consequential contribution was not merely
              diagnosing civilization&rsquo;s structural error, but designing its
              correction. His work is distinctive for treating civilization as
              an engineering problem rather than a political debate, and for
              insisting that consciousness is not merely personal, but
              civilizational.
            </p>
            <p className="nti-pullquote">
              &ldquo;Where others sought better rulers, better laws, or better
              ideologies, Hamilton asked a more fundamental question: what if
              hierarchy itself is the problem?&rdquo;
            </p>
            <div className="nti-creds">
              {CREDENTIALS.map((cred) => (
                <div key={cred.title} className="nti-cred">
                  <div className="nti-cred-dot" aria-hidden />
                  <div className="nti-cred-body">
                    <strong>{cred.title}</strong>
                    {cred.description}
                  </div>
                </div>
              ))}
            </div>
            <Link href={WP.markHamilton} className="nti-btn">
              Full Biography &amp; Published Work
            </Link>
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
      </div>
    </section>
  );
}
