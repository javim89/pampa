import { useLanguage } from "../../context/LanguageContext";

interface FooterProps {
  onOpenModal: (id: string) => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="p-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <div className="footer-brand-mark" aria-hidden="true"><span>P</span></div>
              <span className="footer-brand-name">PAMPA</span>
            </div>
            <p className="footer-desc">{t.footer.desc}</p>
          </div>

          <nav className="footer-col" aria-label={t.footer.servicesCol}>
            <h5>{t.footer.servicesCol}</h5>
            <ul>
              <li><a href="#servicios">{t.footer.svc1}</a></li>
              <li><a href="#servicios">{t.footer.svc2}</a></li>
              <li><a href="#servicios">{t.footer.svc3}</a></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label={t.footer.companyCol}>
            <h5>{t.footer.companyCol}</h5>
            <ul>
              <li><a href="#nosotros">{t.footer.aboutUs}</a></li>
              <li><a href="#proceso">{t.footer.howWeWork}</a></li>
              <li><a href="#contacto">{t.footer.contact}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">{t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</span>
          <div className="footer-legal">
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenModal("privacy"); }}>
              {t.footer.privacy}
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenModal("terms"); }}>
              {t.footer.terms}
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenModal("cookies"); }}>
              {t.footer.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
