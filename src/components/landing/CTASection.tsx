import { useLanguage } from "../../context/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="contacto" aria-labelledby="cta-heading">
      <div className="cta-split">
        {/* Left: image with text overlay */}
        <div className="cta-image">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&fit=crop&crop=center"
            alt="Buenos Aires"
          />
          <div className="cta-image-overlay" aria-hidden="true" />
          <div className="cta-image-content reveal">
            <p className="cta-image-eyebrow">{t.cta.eyebrow}</p>
            <h2 className="cta-heading" id="cta-heading">
              {t.cta.heading1}
              <strong>{t.cta.heading2}</strong>
            </h2>
            <p className="cta-sub">{t.cta.sub}</p>
          </div>
        </div>

        {/* Right: action panel */}
        <div className="cta-panel reveal">
          <a
            href="mailto:info@pampainvestmentadvisory.com"
            className="btn-cta-w"
          >
            {t.cta.btn1}
          </a>
          <a href="#" className="btn-cta-ghost">{t.cta.btn2}</a>
          <div className="contact-mini">
            <p className="cm-label">{t.cta.contactLabel}</p>
            <a href="mailto:info@pampainvestmentadvisory.com" className="cm-email">
              info@pampainvestmentadvisory.com
            </a>
            <p className="cm-loc">{t.cta.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
