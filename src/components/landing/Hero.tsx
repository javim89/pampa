import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-label="Hero">
      {/* Left: copy */}
      <div className="hero-content">
        <p className="hero-label">
          <span className="hero-label-line" aria-hidden="true" />
          {t.hero.label}
        </p>

        <h1>
          {t.hero.title.split("\n").map((line, i) => (
            <span key={i}>{line}{i < t.hero.title.split("\n").length - 1 && <br />}</span>
          ))}
          <strong>{t.hero.titleStrong}</strong>
        </h1>

        <p className="hero-desc">{t.hero.desc}</p>

        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            <span>{t.hero.cta1}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#servicios" className="btn-secondary">{t.hero.cta2}</a>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-item">
            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t.hero.trust1}
          </div>
          <div className="hero-trust-sep" aria-hidden="true" />
          <div className="hero-trust-item">
            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            {t.hero.trust2}
          </div>
          <div className="hero-trust-sep" aria-hidden="true" />
          <div className="hero-trust-item">
            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {t.hero.trust3}
          </div>
        </div>
      </div>

      {/* Right: photo */}
      <div className="hero-visual" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1400&q=90&fit=crop&crop=center"
          alt="Buenos Aires"
        />
        <div className="hero-visual-tint" />
        <div className="hero-visual-left-fade" />
        <div className="hero-badge">
          <div className="hero-badge-label">{t.hero.badgeLabel}</div>
          <div className="hero-badge-value">{t.hero.badgeValue}</div>
        </div>
        <div className="hero-progress" aria-hidden="true">
          <div className="hero-progress-bar" />
        </div>
      </div>
    </section>
  );
}
