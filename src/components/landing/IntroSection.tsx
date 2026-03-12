import { useLanguage } from "../../context/LanguageContext";

export function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="p-section" id="nosotros" aria-labelledby="why-heading">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">
            <span className="section-tag-line" aria-hidden="true" />
            {t.why.tag}
          </p>
          <h2
            className="section-heading"
            id="why-heading"
            dangerouslySetInnerHTML={{ __html: t.why.headingHtml }}
          />
        </div>

        <div className="why-grid">
          <div className="why-body reveal">
            <p>{t.why.p1}</p>
            <p>{t.why.p2}</p>
            <p>{t.why.p3}</p>
            <p>{t.why.p4}</p>
            <div className="why-pull">
              <p>{t.why.quote}</p>
            </div>
            <a href="#servicios" className="why-link">
              <span>{t.why.link}</span>
              <span className="why-link-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className="why-visual reveal reveal-delay-1">
            <div className="why-img-main">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=960&q=85&fit=crop"
                alt="Advisory meeting"
              />
              <div className="why-img-main-overlay" aria-hidden="true" />
              <div className="why-img-caption">{t.why.imgCaption}</div>
            </div>
            <div className="why-stats">
              <div className="stat-block">
                <div className="stat-num"><strong>{t.why.stat1num}</strong></div>
                <div className="stat-label">{t.why.stat1label}</div>
              </div>
              <div className="stat-block">
                <div className="stat-num">{t.why.stat2num}</div>
                <div className="stat-label">{t.why.stat2label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
