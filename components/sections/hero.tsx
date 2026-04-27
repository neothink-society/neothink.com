export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="nti-hero">
      <span className="nti-eyebrow">Neothink Institute</span>
      <h1 id="hero-heading">
        The intellectual foundation for the <em>next stage</em> of human
        civilization.
      </h1>
      <p className="nti-sub">
        The Neothink Institute exists to restore man to his nature and build
        the civilization that comes after. Fifty years of research spanning
        every major domain of human knowledge: consciousness, economics,
        philosophy, business, governance, and the architecture of civilization
        itself.
      </p>
      <div className="nti-actions">
        <a href="#framework" className="nti-btn-primary">
          Explore the Framework
        </a>
        <a href="#neovia" className="nti-btn-secondary">
          See What We&rsquo;re Building
        </a>
      </div>
      <div className="nti-rule" aria-hidden />
      <span className="nti-scroll">Scroll to begin</span>
    </section>
  );
}
