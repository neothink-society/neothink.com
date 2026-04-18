"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const RELATED_LINKS = [
  {
    href: WP.unleashed,
    title: "Unleashed",
    description: "The complete book behind the podcast: the Unified Field of Conscious Civilization in full.",
    arrow: "Read online →",
  },
  {
    href: WP.unifiedField,
    title: "The Unified Field",
    description: "The framework in one place, the argument the podcast unpacks in conversation.",
    arrow: "Explore the framework →",
  },
  {
    href: WP.theWay,
    title: "The Way",
    description: "The personal path. What the podcast points to when the work turns inward.",
    arrow: "Walk The Way →",
  },
] as const;

export function PodcastPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pc-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pc-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("pc-visible");
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
    <main id="main-content" ref={mainRef} className="pc-page">
      <section className="pc-hero" aria-labelledby="pc-hero-heading">
        <div className="pc-hero-label">In Conversation</div>
        <h1 id="pc-hero-heading">
          <em>Unleashed</em>: The Podcast
        </h1>
        <p className="pc-hero-sub">
          Mark Hamilton and Wallace Hamilton deliver the Unified Field of Conscious Civilization in dialogue: the discovery that explains the cage around the mind, the pattern behind civilizational rise and fall, and what comes next.
        </p>
      </section>

      <section className="pc-featured" aria-labelledby="pc-featured-heading">
        <div className="pc-featured-inner pc-reveal">
          <h2 id="pc-featured-heading">
            The flagship show for <em>the correction.</em>
          </h2>
          <p>
            Twelve founding episodes trace the full arc: from the collapse of the bicameral mind and the silence of the gods, through Socrates, Plato, Aristotle, Jesus, and the long detour of hierarchy, to the Prime Law, Neovia, and the civilization that refuses to die.
          </p>
          <p>
            New episodes and updates publish on the Institute channel. Subscribe so you do not miss a release.
          </p>
          <p className="pc-featured-meta">A podcast by Mark Hamilton &amp; Wallace Hamilton</p>
        </div>
      </section>

      <section className="pc-listen" aria-labelledby="pc-listen-heading">
        <div className="pc-listen-inner">
          <div className="pc-reveal">
            <span className="pc-section-label">Where to Listen</span>
            <h2 id="pc-listen-heading">
              Video &amp; audio on <em>YouTube.</em>
            </h2>
            <p className="pc-listen-lead">
              The Neothink Institute publishes episodes on our official YouTube channel. That is the home for the full conversation, show notes, and updates when new installments go live.
            </p>
          </div>
          <div className="pc-reveal">
            <div className="pc-listen-card">
              <p>
                Open the channel to subscribe, turn on notifications, and watch or listen in the format you prefer.
              </p>
              <a
                href={WP.podcastChannel}
                className="pc-btn-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on YouTube
              </a>
              <div>
                <Link href={WP.unleashed} className="pc-btn-light">
                  Read Unleashed Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-arc" aria-labelledby="pc-arc-heading">
        <div className="pc-arc-inner pc-reveal">
          <span className="pc-section-label">The Arc</span>
          <h2 id="pc-arc-heading">
            What the founding episodes <em>cover.</em>
          </h2>
          <p>
            The conversation follows the same spine as <em>Unleashed</em>: consciousness, force, and civilizational design, not as abstract theory, but as the through-line of human history and your life today.
          </p>
          <ul>
            <li>The rupture of the bicameral mind and the silence of the gods</li>
            <li>Athens, Socrates, Plato, Aristotle, and the loss that changed everything</li>
            <li>Christianity, empire, the long night, and the return of reason</li>
            <li>The Law of Humanity, the Prime Law, and Neovia as structural answer</li>
            <li>What it means to live and build after you see the cage</li>
          </ul>
        </div>
      </section>

      <section className="pc-connection" aria-labelledby="pc-conn-heading">
        <div className="pc-conn-inner">
          <div className="pc-conn-text pc-reveal">
            <span className="pc-section-label">Go Deeper</span>
            <h2 id="pc-conn-heading">
              The podcast is the conversation. The work is <em>everywhere else.</em>
            </h2>
            <p>
              Use the book for the complete synthesis, the Unified Field page for the compressed framework, and The Way when you are ready to work the same structure in your own life.
            </p>
          </div>
          <div className="pc-reveal">
            <div className="pc-conn-links">
              {RELATED_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="pc-conn-link">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="pc-link-arrow">{item.arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
