"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { WP } from "@/lib/wordpress-routes";

const CAPABILITIES = [
  {
    num: "I.",
    title: "Integrated Thinking",
    description:
      "The capacity to hold multiple domains of knowledge simultaneously and see the connections between them. Where the caged mind compartmentalizes, the Neothink mind integrates. Economics connects to psychology connects to history connects to biology. Reality becomes one coherent picture rather than disconnected fragments.",
  },
  {
    num: "II.",
    title: "The Gift of Sight",
    description:
      "The ability to see reality directly, through illusion, past appearances, down to what actually is. Not a spiritual metaphor. A trained perceptual capacity. The ability to look at a situation, a person, a system, a claim, and see through the surface to the structure underneath. Once developed, it cannot be taken back.",
  },
  {
    num: "III.",
    title: "Contradiction Detection",
    description:
      "The automatic identification of places where two beliefs, two claims, or two systems conflict with each other. Contradictions are the root cause of stagnation, anxiety, and diminished effectiveness. The Neothink mind does not tolerate them. It finds them and resolves them, continuously, as a natural function of its operation.",
  },
  {
    num: "IV.",
    title: "Concept Building",
    description:
      "Observations become patterns. Patterns become concepts. Concepts snap together into larger integrations: puzzle pictures that reveal what others cannot see. This is how new knowledge is created. Not by gathering more data, but by organizing reality more accurately. Each concept formed frees cognitive capacity for the next, larger integration.",
  },
  {
    num: "V.",
    title: "Causal Prediction",
    description:
      "When you understand cause and effect at sufficient depth, the future becomes visible. Not as prophecy, but as structure. You can see where current trajectories lead. You can identify the consequences of actions before they play out. You can position yourself accordingly. This is not a supernatural ability. It is what happens when the mind integrates enough reality to project it forward.",
  },
  {
    num: "VI.",
    title: "Value Creation",
    description:
      "The freed mind does not consume. It creates. It identifies problems others cannot see and builds solutions others cannot imagine. Value creation becomes the natural mode of engagement with reality. Not as obligation or hustle, but as the mind's natural expression when it is operating at full capacity. Wealth, contribution, and impact follow as natural consequences.",
  },
] as const;

const NEW_HUMAN_TRAITS = [
  {
    title: "Internal Authority",
    description:
      "All causality, agency, and decision-making power comes from within. The New Human does not need to be told what is true. They can see it.",
  },
  {
    title: "Integrated Consciousness",
    description:
      "One mind, one life, one coherent picture of reality. No compartmentalization. No contradictions. No performing one thing while believing another.",
  },
  {
    title: "Creative Default",
    description:
      "The New Human's natural mode is creation. Building, adding, improving, contributing. Not as obligation, but as the mind's natural expression of full operation.",
  },
  {
    title: "Benevolent Power",
    description:
      "Power that comes from consciousness, not from force. The ability to understand, influence, and shape reality through seeing clearly and creating value. Power that cannot be wielded coercively because its source is internal.",
  },
  {
    title: "Expanding Trajectory",
    description:
      "The New Human does not plateau. The mind's capacity grows continuously. Each integration opens the next. Each year is more expansive than the last. There is no ceiling.",
  },
] as const;

const HISTORY_TIMELINE = [
  {
    date: "384 BC",
    title: "Aristotle demonstrates integrated consciousness",
    description:
      "The first mind to operate in the Neothink mentality. His works are lost before the capacity can propagate.",
  },
  {
    date: "356 BC",
    title: "Alexander proves its power",
    description:
      "The first conscious leader. Defeated every hierarchical army he faced because he could see what they could not.",
  },
  {
    date: "400 AD",
    title: "The path closes",
    description:
      "Augustine fuses Plato with Christianity. The Neothink capacity is sealed beneath doctrine for a millennium.",
  },
  {
    date: "1225 AD",
    title: "Partial recovery",
    description: "Aquinas reintroduces Aristotle. The Renaissance follows. But the recovery is incomplete.",
  },
  {
    date: "1976",
    title: "Mark Hamilton founds the Neothink Institute",
    description:
      "Begins the fifty-year project of recovering, formalizing, and completing what Aristotle started.",
  },
  {
    date: "Now",
    title: "Neothink becomes available",
    description:
      "For the first time, the Neothink mentality is transmissible at scale. The cage is opening.",
  },
] as const;

const CONNECTION_LINKS = [
  {
    href: WP.theWay,
    title: "The Way",
    description: "The personal path. Remove the covering. Wake the mind. Clear what is false.",
    arrow: "Walk The Way →",
  },
  {
    href: WP.unifiedField,
    title: "The Unified Field",
    description:
      "The discovery that explains why the mind was caged and what the Neothink mentality recovers.",
    arrow: "Read the Framework →",
  },
  {
    href: WP.neovia,
    title: "Neovia",
    description: "The civilization where the Neothink mentality becomes the norm, not the exception.",
    arrow: "Explore the Vision →",
  },
  {
    href: WP.unleashed,
    title: "Unleashed",
    description:
      "Mark Hamilton's complete work. The Unified Field, the Neothink architecture, and Neovia in full.",
    arrow: "Read Unleashed →",
  },
] as const;

export function NeothinkPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".nt-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
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
    <main id="main-content" ref={mainRef}>
      <section className="nt-hero" aria-labelledby="neothink-hero-heading">
        <div className="nt-hero-label">The Operating System</div>
        <h1 id="neothink-hero-heading">
          Neothink: the mind <em>unleashed.</em>
        </h1>
        <p className="nt-hero-sub">
          Neothink is what consciousness does when it is no longer caged by hierarchy, force, and
          external authority. It is not a philosophy to believe in. It is a cognitive technology to
          operate from.
        </p>
        <div className="nt-hero-meta">
          Developed by <span>Mark Hamilton</span> over five decades of research
        </div>
      </section>

      <section className="nt-opening" aria-label="Opening statement">
        <div className="nt-opening-inner nt-reveal">
          <blockquote>
            The human mind was never designed to follow. It was designed to <em>integrate.</em> When
            the cage comes off, something extraordinary happens. The mind does not drift. It{" "}
            <em>explodes.</em>
          </blockquote>
        </div>
      </section>

      <section className="nt-argument" aria-labelledby="argument-heading">
        <div className="nt-argument-inner">
          <span className="nt-section-label nt-reveal">What Neothink Is</span>
          <h2 id="argument-heading" className="nt-reveal">
            The cognitive architecture that hierarchy <em>suppressed.</em>
          </h2>

          <div className="nt-reveal">
            <p>
              The Unified Field reveals that for 2,400 years, civilization has been built on a
              structure of external authority and force that systematically suppresses the natural
              operating capacity of the human mind. The Way removes that structure from the
              individual. Neothink is what the freed mind becomes.
            </p>
            <p>
              Neothink is not a set of ideas to memorize. It is a mode of cognition. A way the mind
              functions when it is no longer compressed by obedience, fragmented by contradiction, or
              throttled by external authority. It is the capacity to hold physics, economics,
              biology, psychology, ethics, and purpose inside a single causal picture of reality and
              act from that integrated understanding.
            </p>
            <p>
              <strong>This is not new.</strong> It is what Aristotle demonstrated 2,400 years ago.
              It is the cognitive architecture that was glimpsed once, briefly, before his works
              were lost and the hierarchical structure reasserted control over how human beings were
              permitted to use their minds.
            </p>
          </div>

          <div className="nt-pullquote nt-reveal">
            Neothink is not thinking differently. It is a fundamentally different cognitive
            architecture. One that was glimpsed by Aristotle, suppressed by hierarchy for 2,400
            years, and is now available to anyone willing to remove the cage.
          </div>

          <h3 className="nt-reveal">How It Works</h3>
          <div className="nt-reveal">
            <p>
              Under normal conditions, the mind operates in fragments. It processes events one at a
              time, compartmentalizes knowledge by domain, and makes decisions based on emotion,
              habit, authority, or short-term calculation. This is not because the mind is limited.
              It is because the mind has been trained to operate this way by a structure that
              rewards compliance and punishes integration.
            </p>
            <p>
              When that structure is removed, the mind begins to operate differently. It starts
              connecting observations into patterns. Patterns into concepts. Concepts into larger
              concepts. It detects contradictions automatically. It traces cause and effect across
              time, across domains, across systems. It builds what Mark Hamilton calls{" "}
              <strong>puzzle pictures</strong>: integrated understandings of reality that compress
              vast complexity into clear, actionable insight.
            </p>
            <p>
              This is not mystical. It is what the mind does when it is allowed to function the way
              it was designed. The result feels like accelerated clarity. People who begin operating
              in the Neothink mentality consistently describe the same experience: the world stops
              being confusing. Patterns become visible. The future becomes, to a meaningful degree,
              predictable. Not through prophecy, but through structure.
            </p>
          </div>
        </div>
      </section>

      <section className="nt-capabilities" aria-labelledby="capabilities-heading">
        <div className="nt-cap-header nt-reveal">
          <span className="nt-section-label">The Capabilities</span>
          <h2 id="capabilities-heading">
            What the uncovered mind <em>can do.</em>
          </h2>
          <p>
            These are not skills taught from the outside. They are natural capacities of the human
            mind that emerge when the hierarchical cage is removed and consciousness is allowed to
            integrate without suppression.
          </p>
        </div>

        <div className="nt-cap-grid">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="nt-cap nt-reveal">
              <span className="nt-cap-num">{cap.num}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nt-new-human" aria-labelledby="new-human-heading">
        <div className="nt-nh-inner">
          <div className="nt-nh-text nt-reveal">
            <span className="nt-section-label">The Result</span>
            <h2 id="new-human-heading">
              The <em>New Human.</em>
            </h2>
            <p>
              A human being operating from the Neothink mentality is not simply more productive or
              more successful. They are categorically different. Not because they gained something
              new, but because what was always there is finally unbound.
            </p>
            <p>
              The New Human is not a future aspiration. It is the natural state of a mind that has
              been freed from the covering, cleared of contradictions, and allowed to operate as it
              was designed.{" "}
              <strong>Every person has this capacity.</strong> It is not reserved for the gifted or
              the elite. It is the birthright of every conscious being, suppressed by a structure
              that is now being removed.
            </p>
            <p>
              The New Human does not ask &ldquo;what is allowed.&rdquo; They ask &ldquo;what can I
              create.&rdquo; They do not seek permission. They seek possibility. They do not follow
              authority. They see reality directly and act from that seeing.
            </p>
          </div>
          <div className="nt-reveal">
            <div className="nt-nh-traits">
              {NEW_HUMAN_TRAITS.map((trait) => (
                <div key={trait.title} className="nt-nh-trait">
                  <h4>{trait.title}</h4>
                  <p>{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nt-mentality" aria-labelledby="mentalities-heading">
        <div className="nt-mentality-inner">
          <span className="nt-section-label nt-reveal">Two Mentalities</span>
          <h2 id="mentalities-heading" className="nt-reveal">
            The mortal mind and the <em>immortal mind.</em>
          </h2>

          <div className="nt-reveal">
            <p>
              The Unified Field identifies two fundamental orientations of the human mind. Not as
              personality types, but as structural conditions determined by the presence or absence
              of survival pressure and force.
            </p>
          </div>

          <div className="nt-compare nt-reveal">
            <div className="nt-compare-col mortal">
              <span className="nt-compare-col-label">Under Hierarchy</span>
              <h4>The Mortal Mentality</h4>
              <p>
                Life organized around survival, security, and endurance. Growth slows, then stops.
                Work becomes maintenance. Routine replaces creation. The future narrows to
                continuity rather than possibility.
              </p>
              <p>
                The mortal mentality is not defined by death. It is defined by stagnation. It is the
                state of living in repeat mode, where effort is spent not creating new value but
                merely preserving position.
              </p>
              <p>
                This is not a personal failing. It is what the mind does when compressed by force,
                scarcity, and external authority. It adapts by shrinking its radius of ambition.
              </p>
            </div>
            <div className="nt-compare-col immortal">
              <span className="nt-compare-col-label">Under the Prime Law</span>
              <h4>The Immortal Mentality</h4>
              <p>
                Life organized around creation, contribution, and open-ended expansion. Each horizon
                reached reveals new horizons beyond it. Meaning compounds. Curiosity deepens. Energy
                increases with time rather than fading.
              </p>
              <p>
                The immortal mentality does not deny mortality. It transcends it psychologically. The
                individual no longer experiences life as a finite project to be completed, but as a
                continuous unfolding of becoming.
              </p>
              <p>
                This mentality is rare under hierarchy because the structure makes it rare. In
                Neovia, where force is removed and survival pressure dissolves, it becomes the
                natural condition.
              </p>
            </div>
          </div>

          <div className="nt-reveal">
            <p>
              The shift from mortal to immortal mentality is not motivational. It is structural. When
              the conditions change, the mind changes. When force is removed, consciousness expands.
              When survival pressure dissolves, transcendent pressure naturally arises: the
              self-generated drive to create, contribute, and make existence more valuable.
            </p>
            <p>
              <strong>The Neothink mentality is the immortal mentality in practice.</strong> It is the
              mind operating under transcendent pressure rather than survival pressure. Creating
              rather than enduring. Expanding rather than maintaining. Building value rather than
              preserving position.
            </p>
          </div>
        </div>
      </section>

      <section className="nt-history" aria-labelledby="history-heading">
        <div className="nt-history-inner">
          <div className="nt-reveal">
            <span className="nt-section-label">Historical Context</span>
            <h2 id="history-heading">
              This has been <em>glimpsed before.</em>
            </h2>
            <p>
              Neothink is not a modern invention. It is the recovery of a cognitive capacity that was
              demonstrated once in antiquity, lost, and has been suppressed by hierarchical
              civilization ever since.
            </p>
            <p>
              The Unified Field traces its lineage precisely. Aristotle was the first human mind to
              operate in what we now call the Neothink mentality: integrated, empirical, causal,
              self-governing. His student Alexander demonstrated what that mentality produces when
              applied to the world: outcomes so far beyond what hierarchical minds could achieve that
              historians still cannot explain them without resorting to myth.
            </p>
            <p>
              <strong>Neothink is the completion of what Aristotle started.</strong> The cognitive
              architecture he demonstrated, formalized into a transmissible practice, and available
              for the first time to anyone willing to remove the covering and step into the full power
              of their own mind.
            </p>
          </div>
          <div className="nt-reveal">
            <div className="nt-history-timeline">
              {HISTORY_TIMELINE.map((era) => (
                <div key={era.date} className="nt-history-era">
                  <span className="nt-history-era-date">{era.date}</span>
                  <h4>{era.title}</h4>
                  <p>{era.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nt-ai" aria-labelledby="ai-heading">
        <div className="nt-ai-inner nt-reveal">
          <span className="nt-ai-label">The Next Integration</span>
          <h2 id="ai-heading">
            Neothink <em>augmented by AI.</em>
          </h2>
          <p>
            Artificial intelligence does not replace the Neothink mind. It amplifies it. When a mind
            that already integrates across domains, detects contradictions, and traces causality is
            augmented with AI&apos;s capacity for rapid data processing, research, and pattern
            matching, the result is what Mark Hamilton calls the Supermind.
          </p>
          <p>
            The Supermind is not the AI. It is you, with the cage removed and the full integrating
            power of your consciousness augmented by the most powerful information technology ever
            created. Intelligence is no longer the scarce resource. Integration is. And integration
            is what the Neothink mind does.
          </p>
        </div>
      </section>

      <section className="nt-connection" aria-labelledby="connection-heading">
        <div className="nt-conn-inner">
          <div className="nt-conn-text nt-reveal">
            <span className="nt-section-label">How It All Connects</span>
            <h2 id="connection-heading">
              The Way opens the door. Neothink is what waits <em>on the other side.</em>
            </h2>
            <p>
              The Way removes the covering. Neothink is the operating system of the uncovered mind.
              They are not separate paths. They are two phases of the same process: freeing
              consciousness from the 2,400-year cage and allowing it to function as it was designed.
            </p>
            <p>
              <strong>At the civilizational level, the same thing is happening.</strong> Neovia
              removes force as the governing principle of society. The Neothink mentality is what
              emerges when a civilization of freed minds begins to operate at full power. The
              individual transformation and the civilizational one are the same arc.
            </p>
          </div>
          <div className="nt-reveal">
            <div className="nt-conn-links">
              {CONNECTION_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="nt-conn-link">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="nt-link-arrow">{item.arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="nt-cta" aria-labelledby="cta-heading">
        <div className="nt-cta-inner nt-reveal">
          <h2 id="cta-heading">&ldquo;The power of gods, wielded by humans.&rdquo;</h2>
          <p>
            Neothink is the cognitive technology that hierarchy has suppressed for 2,400 years. The
            cage is opening. The mind is ready. What comes next depends on what you do with it.
          </p>
          <div className="nt-cta-buttons">
            <Link href={WP.theWay} className="nt-btn-primary">
              Begin The Way
            </Link>
            <Link href={WP.unleashed} className="nt-btn-secondary">
              Read Unleashed
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
