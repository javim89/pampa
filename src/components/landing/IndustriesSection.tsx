import { useLanguage } from "../../context/LanguageContext";

export function IndustriesSection() {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: (
        <svg className="sector-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M22 4l4 12h12L28 24l4 12-10-7-10 7 4-12L6 16h12z" />
        </svg>
      ),
      h: t.sectors.s1h,
      p: t.sectors.s1p,
      delay: "",
    },
    {
      icon: (
        <svg className="sector-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 36l8-14 6 8 6-16 8 22" />
          <circle cx="14" cy="14" r="5" />
        </svg>
      ),
      h: t.sectors.s2h,
      p: t.sectors.s2p,
      delay: "reveal-delay-1",
    },
    {
      icon: (
        <svg className="sector-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 34c4-10 12-14 14-14s10 4 14 14" />
          <path d="M22 20V8M13 16a10.5 10.5 0 0118 0" />
        </svg>
      ),
      h: t.sectors.s3h,
      p: t.sectors.s3p,
      delay: "reveal-delay-2",
    },
    {
      icon: (
        <svg className="sector-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="6" y="8" width="32" height="20" rx="2" />
          <path d="M14 36h16M22 28v8" />
          <path d="M14 18h5M14 22h11" />
        </svg>
      ),
      h: t.sectors.s4h,
      p: t.sectors.s4p,
      delay: "reveal-delay-3",
    },
  ];

  return (
    <section className="p-section p-section-dark" id="sectores" aria-labelledby="sec-heading">
      <div className="container">
        <div className="sectors-top reveal">
          <div>
            <p className="section-tag">
              <span className="section-tag-line" aria-hidden="true" />
              {t.sectors.tag}
            </p>
            <h2
              className="section-heading"
              id="sec-heading"
              dangerouslySetInnerHTML={{ __html: t.sectors.headingHtml }}
            />
          </div>
          <p className="section-lead">{t.sectors.lead}</p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector) => (
            <div className={`sector-card reveal ${sector.delay}`} key={sector.h}>
              {sector.icon}
              <h4>{sector.h}</h4>
              <p>{sector.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
