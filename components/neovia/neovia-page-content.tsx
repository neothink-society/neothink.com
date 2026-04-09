"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const CHANGES = [
  {
    icon: "∞",
    title: "Economics",
    body:
      "Without confiscation or coercive redistribution, wealth compounds naturally. Innovation accelerates without suppression. Value creation becomes the sole path to prosperity. And it becomes exponential.",
  },
  {
    icon: "♣",
    title: "Health & Longevity",
    body:
      "When no authority controls the human body, medical innovation is liberated from stagnation. Preventative care replaces managed decline. Longevity research advances without bureaucratic delay. Life itself becomes a frontier, not a countdown.",
  },
  {
    icon: "♦",
    title: "Governance",
    body:
      "All participation is voluntary. Association is contractual. Exit is absolute. Disputes resolved through restitution, not punishment. Law becomes protective, not punitive. Order emerges from abundance, not enforcement.",
  },
  {
    icon: "♠",
    title: "Education",
    body:
      "Where force-based systems train obedience and memorization, Neovia cultivates independent reasoning, value creation, and moral clarity. The fundamental question of life shifts from \"what is allowed\" to \"what can I create.\"",
  },
  {
    icon: "♥",
    title: "Psychology",
    body:
      "For the first time, the human mind is not shaped by constant threat. Fear no longer shadows thought. Responsibility returns fully to the individual. Consciousness matures because it is no longer compressed by force.",
  },
  {
    icon: "↔",
    title: "Peace",
    body:
      "Crime loses its incentive and its protection. Violence collapses to anomaly. Peace is no longer enforced. It is structural. The result of abundance, voluntary association, and minds that have outgrown force.",
  },
] as const;

const CHAIN = [
  {
    title: "The Structure",
    body:
      "Multiple force-based hierarchies competing for maximum military power. China. Russia. The United States. Iran. North Korea.",
  },
  {
    title: "The Accelerant",
    body:
      "Artificial intelligence compresses the time between decision and consequence. Automated systems reduce human judgment in the chain of command.",
  },
  {
    title: "The Psychology",
    body:
      "Hierarchical systems produce obedience over agency — fragmented responsibility, compartmentalized ethics. \"I was following orders.\"",
  },
  {
    title: "The Logic",
    body:
      "No reform can work from within the system. Any attempt to remove force is vetoed by those who wield it, crushed as naive, or co-opted into new authority.",
  },
  {
    title: "The Certainty",
    body:
      "On the current trajectory, nuclear annihilation is not a risk to be managed. It is a mathematical outcome. The question is not if, but when.",
  },
  {
    title: "The Exit",
    body:
      "The only structural solution is something built entirely outside the system. A working proof that civilization does not require force to function. That proof is Neovia.",
  },
] as const;

const ERAS = [
  {
    date: "~330 BC",
    title: "Prime Law Codified",
    body:
      "Force delegitimized. Inquiry declared inviolable. Knowledge accumulation becomes continuous.",
    saved: "No collapse cycles",
  },
  {
    date: "0–200 AD",
    title: "First Acceleration",
    body:
      "Systematic science expands. Medicine advances beyond superstition. Trade networks span continents without conquest.",
    saved: "~1,500 years saved",
  },
  {
    date: "200–400 AD",
    title: "Industrial Foundations",
    body:
      "Mechanical power developed. Metallurgy advances. Education universalizes reason, not obedience.",
    saved: "~1,700 years saved",
  },
  {
    date: "400–1000",
    title: "Conscious Civilization",
    body:
      "War obsoleted. Governance reduced to dispute resolution. Scientific method formalized centuries early.",
    saved: "~2,000 years saved",
  },
  {
    date: "Now",
    title: "What Could Have Been",
    body:
      "Humanity interplanetary. Death obsoleted. Scarcity obsoleted. Consciousness fully sovereign for centuries.",
    saved: "Extinction risk: zero",
  },
] as const;

export function NeoviaPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".nv-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nv-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("nv-visible");
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
    <main id="main-content" ref={mainRef} className="nv-page">
      <section className="nv-hero" aria-labelledby="nv-hero-heading">
        <div className="nv-hero-inner">
          <p className="nv-hero-label">The Civilizational Vision</p>
          <h1 id="nv-hero-heading">
            The first civilization designed for <em>fully conscious</em> human beings.
          </h1>
          <p className="nv-hero-sub">
            Neovia is the civilizational expression of the Unified Field. The first society in human
            history designed to remove initiated force at the structural root and allow consciousness to
            operate at full, unhindered power.
          </p>
          <div className="nv-hero-actions">
            <a href="#problem" className="nv-btn-gold">
              Why Neovia Must Be Built
            </a>
            <a href="#involved" className="nv-btn-light">
              Get Involved
            </a>
          </div>
        </div>
      </section>

      <section className="nv-problem" id="problem" aria-labelledby="nv-problem-heading">
        <div className="nv-problem-inner">
          <span className="nv-section-label nv-reveal">The Problem</span>
          <h2 id="nv-problem-heading" className="nv-reveal">
            Every civilization in history has been built on <em>the same foundation.</em>
          </h2>

          <div className="nv-reveal">
            <p>
              External authority above. Obedience below. Force, whether political, religious, economic,
              or ideological, as the ultimate guarantor of order. This is not one civilization&apos;s
              error. It is the error. The single structural flaw repeated across every empire, every
              nation, every revolution for 2,400 years.
            </p>

            <p>
              The Unified Field of Conscious Civilization proves this is not coincidental. It is
              architectural. When the bicameral mind collapsed and humanity lost its internal guidance
              system, Plato designed a stabilization structure: hierarchy, external authority, and force.
              It was an emergency measure. It was meant to be temporary.
            </p>

            <p>
              It became permanent. And it became invisible.{" "}
              <strong>
                Every institution you were raised inside — every government, every school, every
                workplace, every religious body — still operates on this architecture.
              </strong>{" "}
              It is the operating system of the world. And it has a fatal design flaw.
            </p>
          </div>

          <div className="nv-pullquote nv-reveal">
            Force does not merely control bodies. It compresses the mind itself. Wherever force
            dominates, consciousness adapts by shrinking its radius of action. People learn to manage
            risk, conserve energy, seek permission rather than possibility. Over centuries, this
            adaptation becomes invisible. People no longer feel suppressed. They feel
            &ldquo;realistic.&rdquo;
          </div>

          <div className="nv-reveal">
            <p>
              Under this structure, humanity has never seen what consciousness can actually do when
              unhindered. Every golden age, every technological leap, every cultural flowering occurred{" "}
              <strong>under conditions of force and constraint.</strong> What humanity calls progress is
              not the product of liberated consciousness. It is the residue of consciousness fighting
              uphill against a system that continuously pushes it back down.
            </p>

            <p>
              The question Neovia answers is one no civilization has ever asked:{" "}
              <strong>what happens when the cage comes off?</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="nv-primelaw" aria-labelledby="nv-primelaw-heading">
        <div className="nv-primelaw-inner nv-reveal">
          <span className="nv-primelaw-label">The Constitutional Foundation</span>
          <h2 id="nv-primelaw-heading">
            &ldquo;No person, group of persons, or government shall initiate force, threat of force, or
            fraud against any individual&apos;s self, property, or contract.&rdquo;
          </h2>

          <div className="nv-primelaw-articles">
            <div className="nv-primelaw-article">
              <h4>Article 1</h4>
              <p>
                No person, group of persons, or government shall initiate force, threat of force, or
                fraud against any individual&apos;s self, property, or contract.
              </p>
            </div>
            <div className="nv-primelaw-article">
              <h4>Article 2</h4>
              <p>Force is morally and legally justified only for protection from those who violate Article 1.</p>
            </div>
            <div className="nv-primelaw-article">
              <h4>Article 3</h4>
              <p>No exceptions shall exist for Articles 1 and 2.</p>
            </div>
          </div>

          <p className="nv-primelaw-note">
            The Prime Law does not reform hierarchy. It replaces it. Not as a moral ideal — as
            civilizational architecture. The first constitutional framework in history built on the
            absolute prohibition of initiated force.
          </p>
        </div>
      </section>

      <section className="nv-changes" aria-labelledby="nv-changes-heading">
        <div className="nv-changes-header nv-reveal">
          <span className="nv-section-label">When Force Is Removed</span>
          <h2 id="nv-changes-heading">
            What changes when the cage <em>comes off</em>
          </h2>
          <p>
            Neovia is not an incremental improvement on existing civilization. It is a phase transition.
            When force is structurally removed, every dimension of human life reorganizes.
          </p>
        </div>

        <div className="nv-changes-grid">
          {CHANGES.map((item) => (
            <div key={item.title} className="nv-change nv-reveal">
              <span className="nv-change-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nv-vision" aria-labelledby="nv-vision-heading">
        <div className="nv-vision-inner">
          <span className="nv-section-label nv-reveal">The Deeper Vision</span>
          <h2 id="nv-vision-heading" className="nv-reveal">
            Beyond survival. Beyond progress. <em>Into transcendence.</em>
          </h2>

          <div className="nv-reveal">
            <p>
              Every prior civilization organized human life around survival pressure. Education is chosen
              for security. Work is chosen for income. Time is rationed. Risk is minimized. Creativity is
              postponed. Consciousness learns to negotiate downward because force and scarcity punish
              deviation.
            </p>

            <p>
              Neovia dissolves survival pressure at the structural level. When force is removed and
              abundance is the natural condition, something unprecedented occurs:{" "}
              <strong>a new class of pressure emerges.</strong> Not imposed from outside. Generated from
              within.
            </p>
          </div>

          <h3 className="nv-reveal">Transcendent Pressures</h3>
          <div className="nv-reveal">
            <p>
              These pressures do not push from behind. They pull from ahead. They compel creation,
              contribution, discovery, and the relentless improvement of existence itself. The question
              that organizes life shifts fundamentally. It is no longer &ldquo;how do I endure?&rdquo; or
              even &ldquo;how do I succeed?&rdquo; It becomes <strong>&ldquo;what can I become?&rdquo;</strong>
            </p>

            <p>
              This is the difference between the mortal mentality and the immortal mentality. Under the
              mortal mentality, life is a finite project. A plateau to reach, a routine to maintain, a
              slow decline to accept. Under the immortal mentality, life is an open-ended arc of creation.
              Each horizon reached reveals new horizons beyond it. Meaning compounds. Curiosity deepens.
              The mind never seeks an ending — it seeks what it has not yet created.
            </p>
          </div>

          <div className="nv-pullquote nv-reveal">
            A human being whose consciousness is no longer shaped by force does not merely &ldquo;do
            better.&rdquo; They become something categorically different. Individuals will astonish
            themselves not because they gained something new, but because what was always there is finally
            unbound.
          </div>

          <h3 className="nv-reveal">The Outward Arc</h3>
          <div className="nv-reveal">
            <p>
              A biologically preserved civilization composed of minds living under the immortal mentality
              no longer experiences time as a narrowing corridor. With decay arrested and death no longer
              accepted as destiny, consciousness gains something unprecedented: duration sufficient to
              complete long arcs of creation.
            </p>

            <p>
              With that shift, the planet itself becomes insufficient. Consciousness is expansive by
              nature. Once liberated from survival pressure, it moves outward, extending its reach the same
              way life once moved from sea to land. Interplanetary civilization becomes not an aspiration
              but an inevitability.
            </p>

            <p>
              Neovia is not the end of the arc of civilization.{" "}
              <strong>It is the point at which civilization becomes cosmic.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="nv-extinction" aria-labelledby="nv-extinction-heading">
        <div className="nv-extinction-inner">
          <div className="nv-reveal">
            <span className="nv-section-label">The Urgency</span>
            <h2 id="nv-extinction-heading">
              Why Neovia <em>cannot wait.</em>
            </h2>
            <p>
              The Platonic hierarchy is no longer merely a philosophical structure. It is a control
              architecture — and it now commands the power to end the species.
            </p>
            <p>
              In a hierarchical world, states are sovereign. Sovereignty requires deterrence. Deterrence
              requires escalation dominance. This creates a non-negotiable logic:{" "}
              <strong>if you do not possess ultimate force, you are subject to those who do.</strong>
            </p>
            <p>
              Nuclear weapons are the end state of hierarchical deterrence. Once they exist inside the
              system, extinction is no longer a possibility. It becomes a statistical certainty. Time,
              error, miscalculation, AI acceleration, and human psychology guarantee eventual release.
            </p>
            <p>
              Reform cannot stop this. You cannot regulate hierarchy out of violence, democratize it into
              safety, or moralize it into restraint. <strong>Hierarchy defines value externally.</strong>{" "}
              When value is external, force is always justified.
            </p>
            <p>The only extinction-proof move is to exit the system entirely.</p>
          </div>
          <div className="nv-extinction-chain nv-reveal">
            {CHAIN.map((step) => (
              <div key={step.title} className="nv-chain-step">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nv-counterfactual" aria-labelledby="nv-cf-heading">
        <div className="nv-cf-header nv-reveal">
          <span className="nv-section-label">The Civilization That Almost Was</span>
          <h2 id="nv-cf-heading">
            What if the Prime Law had been codified <em>2,400 years ago?</em>
          </h2>
          <p>
            This is not fantasy. It is history with force removed. If the Prime Law had been adopted at
            the moment of Aristotle, progress would not have been linear. It would have been exponential.
          </p>
        </div>

        <div className="nv-cf-timeline">
          {ERAS.map((era) => (
            <div key={era.date} className="nv-cf-era nv-reveal">
              <span className="nv-cf-era-date">{era.date}</span>
              <h4>{era.title}</h4>
              <p>{era.body}</p>
              <span className="nv-cf-saved">{era.saved}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nv-involved" id="involved" aria-labelledby="nv-involved-heading">
        <div className="nv-inner">
          <div className="nv-involved-inner nv-reveal">
            <span className="nv-section-label">Build With Us</span>
            <h2 id="nv-involved-heading">
              Neovia is the most important project <em>in human history.</em>
            </h2>
            <p className="nv-involved-lede">
              Not because we say so. Because once you see the cage around the human mind and around
              civilization, and you see that the trajectory leads to extinction, you cannot do nothing.
              There are many ways to be part of what comes next.
            </p>
          </div>

          <div className="nv-involved-grid nv-reveal">
            <Link href={`${WP.getInvolved}#invest`} className="nv-involve-card">
              <span className="nv-involve-card-icon" aria-hidden="true">
                I.
              </span>
              <h4>Invest</h4>
              <p>
                For accredited investors and family offices ready to fund the most consequential
                development project of the century.
              </p>
            </Link>
            <Link href={`${WP.getInvolved}#advise`} className="nv-involve-card">
              <span className="nv-involve-card-icon" aria-hidden="true">
                II.
              </span>
              <h4>Advise</h4>
              <p>
                For scientists, architects, political figures, technologists, and domain experts whose
                knowledge accelerates the build.
              </p>
            </Link>
            <Link href={`${WP.getInvolved}#build`} className="nv-involve-card">
              <span className="nv-involve-card-icon" aria-hidden="true">
                III.
              </span>
              <h4>Build</h4>
              <p>
                For engineers, developers, operators, and builders ready to construct the first Prime Law
                civilization from the ground up.
              </p>
            </Link>
            <Link href={`${WP.getInvolved}#support`} className="nv-involve-card">
              <span className="nv-involve-card-icon" aria-hidden="true">
                IV.
              </span>
              <h4>Support</h4>
              <p>
                For individuals who want to contribute, spread the word, walk The Way, and be part of the
                movement that makes Neovia inevitable.
              </p>
            </Link>
          </div>

          <div className="text-center nv-reveal">
            <Link href={WP.getInvolved} className="nv-btn-primary">
              Contact the Institute
            </Link>
          </div>
        </div>
      </section>

      <section className="nv-closing" aria-label="Closing">
        <div className="nv-closing-inner nv-reveal">
          <blockquote>
            The gods never meant to rule us. They were <em>placeholders.</em> Waiting for us to grow up.
            The fire is <em>yours.</em>
          </blockquote>
          <p>
            Neovia is where civilization stops preparing for death and starts preparing for unbounded
            life. The correction that was interrupted 2,400 years ago is no longer theoretical. It is
            operational. And it begins now.
          </p>
          <Link href={WP.unifiedField} className="nv-btn-light">
            Read the Unified Field
          </Link>
        </div>
      </section>
    </main>
  );
}
