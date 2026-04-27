export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="nti-hero">
      <span className="nti-eyebrow">Independent Research Institution</span>
      <h1 id="hero-heading">
        The intellectual foundation for the <em>next stage</em> of human
        civilization.
      </h1>
      <p className="nti-sub">
        The Neothink Institute exists to restore man to his nature and build
        the civilization that comes after. Fifty years of research spanning
        consciousness, economics, philosophy, business, governance, and the
        architecture of civilization itself.
      </p>
      <p className="nti-grounding">
        The Institute advances the Unified Field of Conscious Civilization,
        develops the Neothink body of work, and carries its discoveries into
        civilization through manuscripts, published research, Unleashed, and
        Neovia.
      </p>
      <div className="nti-actions">
        <a href="#framework" className="nti-btn-primary">
          Explore the Framework
        </a>
        <a href="#flagship" className="nti-btn-secondary">
          Read Unleashed
        </a>
      </div>
      <div className="nti-rule" aria-hidden />
      <span className="nti-scroll">Scroll to begin</span>
    </section>
  );
}
