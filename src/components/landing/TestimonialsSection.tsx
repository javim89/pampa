import { useLanguage } from "../../context/LanguageContext";

export function TestimonialsSection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: (
        <svg className="whyus-card-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="20" cy="20" r="15" />
          <path d="M10 26a10 10 0 0120 0" />
          <circle cx="20" cy="14" r="4" />
        </svg>
      ),
      h: t.whyUs.card1h,
      p: t.whyUs.card1p,
      delay: "",
    },
    {
      icon: (
        <svg className="whyus-card-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M20 5l13 6.5v7c0 7.5-5.5 13-13 14.5C12.5 31.5 7 26 7 18.5v-7z" />
          <polyline points="13 20 18 25 27 14" />
        </svg>
      ),
      h: t.whyUs.card2h,
      p: t.whyUs.card2p,
      delay: "reveal-delay-1",
    },
    {
      icon: (
        <svg className="whyus-card-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M20 5a15 15 0 100 30A15 15 0 0020 5z" />
          <path d="M20 12v8l5 3" />
        </svg>
      ),
      h: t.whyUs.card3h,
      p: t.whyUs.card3p,
      delay: "reveal-delay-2",
    },
  ];

  return (
    <section className="p-section" id="nosotros-2" aria-labelledby="wu-heading">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">
            <span className="section-tag-line" aria-hidden="true" />
            {t.whyUs.tag}
          </p>
          <h2
            className="section-heading"
            id="wu-heading"
            dangerouslySetInnerHTML={{ __html: t.whyUs.headingHtml }}
          />
          <p className="section-lead">{t.whyUs.lead}</p>
        </div>

        <div className="whyus-cards">
          {cards.map((card) => (
            <div className={`whyus-card reveal ${card.delay}`} key={card.h}>
              {card.icon}
              <h4>{card.h}</h4>
              <p>{card.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
