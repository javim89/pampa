import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Language } from "../../i18n/translations";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Lang Bar */}
      <div className="lang-bar">
        <div role="group" aria-label="Language" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {(["es", "en"] as Language[]).map((lang, i) => (
            <span key={lang} style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {i > 0 && <span className="lang-sep">/</span>}
              <button
                className={`lang-btn${language === lang ? " active" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`p-nav${scrolled ? " scrolled" : ""}`} id="main-nav" role="navigation">
        <div className="container p-nav-inner">
          <a href="#" className="nav-logo" aria-label="Pampa Investment Advisory">
            <div className="logo-mark" aria-hidden="true">
              <span className="logo-mark-letter">P</span>
            </div>
            <div className="logo-wordmark">
              <span className="logo-name">PAMPA</span>
              <span className="logo-tagline">Investment Advisory</span>
            </div>
          </a>

          <ul className="nav-menu">
            <li><a href="#servicios">{t.nav.services}</a></li>
            <li><a href="#proceso">{t.nav.process}</a></li>
            <li><a href="#sectores">{t.nav.sectors}</a></li>
            <li><a href="#nosotros">{t.nav.about}</a></li>
          </ul>

          <a href="#contacto" className="nav-cta">{t.nav.cta}</a>
        </div>
      </nav>
    </>
  );
}
