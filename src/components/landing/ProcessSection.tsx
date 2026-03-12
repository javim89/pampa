import { useLanguage } from "../../context/LanguageContext";

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { num: "01", h: t.process.step1h, p: t.process.step1p, delay: "" },
    { num: "02", h: t.process.step2h, p: t.process.step2p, delay: "reveal-delay-1" },
    { num: "03", h: t.process.step3h, p: t.process.step3p, delay: "reveal-delay-2" },
  ];

  return (
    <section className="p-section" id="proceso" aria-labelledby="proc-heading">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">
            <span className="section-tag-line" aria-hidden="true" />
            {t.process.tag}
          </p>
          <h2
            className="section-heading"
            id="proc-heading"
            dangerouslySetInnerHTML={{ __html: t.process.headingHtml }}
          />
        </div>

        <div className="process-layout">
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className={`process-step reveal ${step.delay}`} key={step.num}>
                <div className="step-marker">
                  <div className="step-num-sq"><span>{step.num}</span></div>
                  {i < steps.length - 1 && <div className="step-line" aria-hidden="true" />}
                </div>
                <div className="step-content">
                  <h4>{step.h}</h4>
                  <p>{step.p}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="process-visual reveal reveal-delay-1">
            <div className="process-img-frame">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=85&fit=crop&crop=center"
                alt="Professional advisory environment"
              />
              <div className="process-img-overlay" aria-hidden="true" />
              <div className="process-img-text">
                <div className="process-img-title">{t.process.imgTitle}</div>
                <p className="process-img-sub">{t.process.imgSub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
