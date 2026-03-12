import { useLanguage } from "../../context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const cards = [
    {
      num: "01",
      icon: (
        <svg className="svc-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l6 4M14 24h2M32 24h2" />
        </svg>
      ),
      h: t.services.card1h,
      p: t.services.card1p,
      link: t.services.card1link,
      delay: "reveal",
    },
    {
      num: "02",
      icon: (
        <svg className="svc-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="2" />
          <path d="M16 24h16M24 16v16" />
        </svg>
      ),
      h: t.services.card2h,
      p: t.services.card2p,
      link: t.services.card2link,
      delay: "reveal reveal-delay-1",
    },
    {
      num: "03",
      icon: (
        <svg className="svc-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M12 38V24M24 38V10M36 38V28" />
          <line x1="8" y1="38" x2="40" y2="38" />
        </svg>
      ),
      h: t.services.card3h,
      p: t.services.card3p,
      link: t.services.card3link,
      delay: "reveal reveal-delay-2",
    },
  ];

  return (
    <section className="p-section p-section-alt" id="servicios" aria-labelledby="svc-heading">
      <div className="container">
        <div className="services-header reveal">
          <div>
            <p className="section-tag">
              <span className="section-tag-line" aria-hidden="true" />
              {t.services.tag}
            </p>
            <h2
              className="section-heading"
              id="svc-heading"
              dangerouslySetInnerHTML={{ __html: t.services.headingHtml }}
            />
          </div>
          <p className="section-lead">{t.services.lead}</p>
        </div>

        <div className="services-cards">
          {cards.map((card) => (
            <div className={`svc-card ${card.delay}`} key={card.num}>
              <span className="svc-card-watermark" aria-hidden="true">{card.num}</span>
              <div className="svc-card-inner">
                {card.icon}
                <p className="svc-num-label">{card.num}</p>
                <h3>{card.h}</h3>
                <p>{card.p}</p>
                <a href="#contacto" className="svc-card-link">{card.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
