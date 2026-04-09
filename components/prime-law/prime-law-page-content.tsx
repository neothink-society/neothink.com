"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

import {
  COMPARISON_ROWS,
  LAW_NOTE,
  PREAMBLE_PARAGRAPHS,
  PRIME_ARTICLES,
  PROOF_ITEMS,
} from "./prime-law-data";

const CONNECTION_LINKS = [
  {
    href: WP.unifiedField,
    title: "The Unified Field",
    description: "The discovery that proves force is the single variable determining civilizational outcomes.",
    arrow: "Read the Framework →",
  },
  {
    href: WP.neovia,
    title: "Neovia",
    description: "The first civilization built on the Prime Law. The physical expression of this constitutional foundation.",
    arrow: "Explore Neovia →",
  },
  {
    href: WP.unleashed,
    title: "Unleashed",
    description: "Mark Hamilton's complete work. The full argument for why the Prime Law is a natural law, not an ideology.",
    arrow: "Read Unleashed →",
  },
  {
    href: WP.theWay,
    title: "The Way",
    description: "The Prime Law applied to the individual mind. Removing force from within, the same way Neovia removes it from without.",
    arrow: "Walk The Way →",
  },
] as const;

export function PrimeLawPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pl-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pl-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("pl-visible");
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
    <main id="main-content" ref={mainRef} className="pl-page">
      <section className="pl-hero" aria-labelledby="pl-hero-heading">
        <div className="pl-hero-label">The Constitutional Foundation</div>
        <h1 id="pl-hero-heading">
          The <em>Prime Law.</em>
        </h1>
        <div className="pl-hero-rule" aria-hidden="true" />
      </section>

      <section className="pl-law" aria-labelledby="pl-law-heading">
        <div className="pl-law-inner pl-reveal">
          <h2 id="pl-law-heading" className="sr-only">
            The Prime Law
          </h2>
          <div className="pl-preamble">
            <span className="pl-preamble-label">Preamble</span>
            {PREAMBLE_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="pl-articles">
            {PRIME_ARTICLES.map((a) => (
              <div key={a.num} className="pl-article">
                <span className="pl-article-num">{a.num}</span>
                <div className="pl-article-text">{a.text}</div>
              </div>
            ))}
          </div>

          <div className="pl-law-note">
            <p>{LAW_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="pl-why" aria-labelledby="pl-why-heading">
        <div className="pl-why-inner">
          <span className="pl-section-label pl-reveal">The Argument</span>
          <h2 id="pl-why-heading" className="pl-reveal">
            Not an ideology. A <em>natural law.</em>
          </h2>

          <div className="pl-reveal">
            <p>The Prime Law is not a political preference. It is not a reform proposal. It is not an idealistic aspiration for a kinder world.</p>

            <p>
              It is the codification of something history has already proven across every empire, every economy, and every epoch in recorded human civilization:{" "}
              <strong>as force rises, civilization collapses. As force recedes, civilization soars.</strong>
            </p>

            <p>
              This pattern holds with the reliability of gravity. It does not care about intentions. It does not reward good motives or punish bad ones. Wherever human action is constrained by coercion, prosperity withers. Wherever voluntary action is permitted to expand, prosperity multiplies. No civilization in history has ever violated this law and survived.
            </p>
          </div>

          <div className="pl-pullquote pl-reveal">
            The Prime Law does not invent this truth. It locks it in. Just as earlier ages codified property, contracts, and rights, this age must codify the deepest invariant of human flourishing.
          </div>

          <h3 className="pl-reveal">What previous constitutions missed</h3>
          <div className="pl-reveal">
            <p>
              The American Constitution was one of history&apos;s great achievements. It restrained power, divided authority, and assumed individuals were competent to direct their own lives. The results were the greatest explosion of innovation and prosperity in human history.
            </p>

            <p>
              And yet, even this triumph stopped short. <strong>The Constitution restrained force. It did not eliminate it.</strong> It limited power but never named coercion as the fundamental civilizational enemy. It assumed force would always be present, managed, balanced, checked, but never fully rejected as a principle.
            </p>

            <p>
              The Prime Law goes further. Where the Constitution codified Enlightenment political theory, the Prime Law codifies the Law of Humanity itself. For the first time, consciousness is not merely protected. It is liberated.
            </p>
          </div>

          <h3 className="pl-reveal">Why force constrains consciousness</h3>
          <div className="pl-reveal">
            <p>
              Aristotle identified the core mechanism 2,400 years ago: force confines volition, and volition is required for reasoning, for consciousness itself. Therefore, force confines consciousness.
            </p>

            <p>
              This is not metaphor. Wherever force exists as a governing principle, consciousness adapts by shrinking its radius of action. It learns to manage risk, conserve energy, seek permission rather than possibility. Over centuries, this adaptation becomes normalized. People no longer feel suppressed. They feel &quot;realistic.&quot; The ceiling becomes invisible.
            </p>

            <p>
              <strong>The Prime Law removes the ceiling.</strong> When initiated force is structurally prohibited, consciousness is structurally free. Volition expands. Reasoning deepens. Creation accelerates. The mind operates at a capacity that force-based civilization has never permitted.
            </p>
          </div>
        </div>
      </section>

      <section className="pl-proof" aria-labelledby="pl-proof-heading">
        <div className="pl-proof-header pl-reveal">
          <span className="pl-section-label">The Historical Proof</span>
          <h2 id="pl-proof-heading">
            The law in <em>action.</em>
          </h2>
          <p>The same pattern, repeated across millennia. Every civilization that constrained force flourished. Every civilization that maximized it collapsed. Without exception.</p>
        </div>

        <div className="pl-proof-grid">
          {PROOF_ITEMS.map((item) => (
            <div key={item.title} className="pl-proof-item pl-reveal">
              <span
                className={`pl-proof-direction pl-proof-direction--${item.direction === "recedes" ? "recedes" : "rises"}`}
              >
                {item.direction === "recedes" ? "Force Recedes" : "Force Rises"}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span
                className={`pl-proof-result pl-proof-result--${item.resultTone === "positive" ? "positive" : "negative"}`}
              >
                {item.result}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="pl-changes" aria-labelledby="pl-changes-heading">
        <div className="pl-changes-inner">
          <span className="pl-section-label pl-reveal">The Implications</span>
          <h2 id="pl-changes-heading" className="pl-reveal">
            What the Prime Law <em>changes.</em>
          </h2>

          <div className="pl-reveal">
            <p>
              When the initiation of force is removed as a permissible mechanism between human beings, the entire architecture of civilization reorganizes. This is not incremental reform. It is a structural phase transition.
            </p>
          </div>

          <h3 className="pl-reveal">Law becomes protective, not punitive</h3>
          <div className="pl-reveal">
            <p>
              Under the Prime Law, the sole function of law is protection against force. There is no regulatory apparatus empowered to command, restrict, or license voluntary human action. Disputes are resolved through restitution rather than punishment. Crime is addressed as a violation of individual autonomy requiring remedy, not as an offense against the state requiring retribution.
            </p>
          </div>

          <h3 className="pl-reveal">Economics becomes generative, not extractive</h3>
          <div className="pl-reveal">
            <p>
              Without confiscation, coercive redistribution, or regulatory distortion, wealth compounds naturally. Innovation accelerates because it requires no permission. Capital flows to its highest use because nothing diverts it politically. Poverty collapses not through subsidy but through opportunity. Value creation becomes the sole path to prosperity, and it becomes exponential.
            </p>
          </div>

          <h3 className="pl-reveal">Education becomes developmental, not disciplinary</h3>
          <div className="pl-reveal">
            <p>
              Where force-based systems trained obedience, memorization, and conformity, Prime Law civilization cultivates independent reasoning, value creation, and moral clarity grounded in non-initiation. Children are raised to create, not comply. The fundamental question of education shifts from &quot;what is allowed&quot; to &quot;what can you build.&quot;
            </p>
          </div>

          <h3 className="pl-reveal">Peace becomes structural, not aspirational</h3>
          <div className="pl-reveal">
            <p>
              When force is structurally illegitimate, conflict loses both its mechanism and its justification. Cooperation becomes the default strategy because it is the only viable one. Peace is no longer a fragile aspiration maintained through deterrence. It is an emergent condition of a society where force has been removed at the root.
            </p>
          </div>

          <h3 className="pl-reveal">Consciousness is unleashed</h3>
          <div className="pl-reveal">
            <p>
              For the first time in human history, the mind is not trained for submission. Fear no longer shadows thought. Responsibility returns fully to the individual. Consciousness matures because it is no longer compressed by threat.{" "}
              <strong>The power that has been throttled for 2,400 years is finally free.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="pl-compare" aria-labelledby="pl-compare-heading">
        <div className="pl-compare-header pl-reveal">
          <span className="pl-section-label pl-section-label--bright">Two Civilizational Architectures</span>
          <h2 id="pl-compare-heading">
            The hierarchy of force versus the <em>Prime Law.</em>
          </h2>
          <p>Every civilization before Neovia was built on the left column. Neovia is built on the right.</p>
        </div>

        <div className="pl-compare-grid pl-reveal">
          <div className="pl-compare-col pl-compare-col--old">
            <span className="pl-compare-col-label">Under Hierarchy</span>
            <h3>Force-Based Civilization</h3>
            {COMPARISON_ROWS.map((row) => (
              <div key={`old-${row.label}`} className="pl-compare-row">
                <h4>{row.label}</h4>
                <p>{row.old}</p>
              </div>
            ))}
          </div>
          <div className="pl-compare-col pl-compare-col--new">
            <span className="pl-compare-col-label">Under the Prime Law</span>
            <h3>Neovia</h3>
            {COMPARISON_ROWS.map((row) => (
              <div key={`new-${row.label}`} className="pl-compare-row">
                <h4>{row.label}</h4>
                <p>{row.new}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-exceptions" aria-labelledby="pl-exceptions-heading">
        <div className="pl-exceptions-inner pl-reveal">
          <span className="pl-section-label">Article 3</span>
          <h2 id="pl-exceptions-heading">
            No <em>exceptions.</em>
          </h2>
          <p>
            Every prior attempt to restrain force has failed because it included exceptions. Every exception eventually becomes the doorway through which force re-enters. Emergency powers. National security. Public safety. Social welfare. Each one, however well-intentioned, eventually expands to justify the very coercion it was designed to prevent.
          </p>
          <p>
            <strong>Article 3 closes every doorway.</strong> No exceptions for emergencies. No exceptions for majorities. No exceptions for governments. No exceptions for good intentions. The prohibition is absolute because history has proven that every exception is eventually exploited.
          </p>
          <p>
            This is not rigid idealism. It is structural realism. The only way to permanently prevent force from returning is to permanently prohibit it. Article 3 is the antibody that prevents the Prime Law from being corrupted the way every previous constitution has been corrupted.
          </p>
        </div>
      </section>

      <section className="pl-connection" aria-labelledby="pl-connection-heading">
        <div className="pl-conn-inner">
          <div className="pl-conn-text pl-reveal">
            <span className="pl-section-label">The Bigger Picture</span>
            <h2 id="pl-connection-heading">
              The structural foundation for <em>everything</em> we are building.
            </h2>
            <p>
              The Prime Law is not a standalone document. It is the constitutional foundation that makes the entire Neothink Institute vision possible. The Unified Field identifies the problem: force. The Way removes it from the individual. The Prime Law removes it from civilization. Neovia is the physical proof that it works.
            </p>
            <p>
              <strong>Without the Prime Law, Neovia is just another city.</strong> With it, Neovia is the first civilizational architecture designed to last, because it is the first one built on the law that history has proven governs all civilizational outcomes.
            </p>
          </div>
          <div className="pl-reveal">
            <div className="pl-conn-links">
              {CONNECTION_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="pl-conn-link">
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                  <span className="pl-link-arrow">{link.arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pl-cta" aria-label="Closing call to action">
        <div className="pl-cta-inner pl-reveal">
          <blockquote>
            Civilization has reached the moment where it either codifies the Law of Humanity or is <em>destroyed by its violation.</em>
          </blockquote>
          <p>
            The Prime Law is not a proposal for a better world. It is a survival requirement for a world that has given its hierarchies nuclear weapons. The correction can no longer wait.
          </p>
          <Link href={WP.neovia} className="pl-btn-light">
            Explore Neovia
          </Link>
          <Link href={WP.unifiedField} className="pl-btn-light">
            Read the Unified Field
          </Link>
        </div>
      </section>
    </main>
  );
}
