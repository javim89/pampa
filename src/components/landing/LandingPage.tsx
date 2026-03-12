import { useEffect, useState } from "react";
import { LanguageProvider } from "../../context/LanguageContext";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { IntroSection } from "./IntroSection";
import { ServicesSection } from "./ServicesSection";
import { ProcessSection } from "./ProcessSection";
import { IndustriesSection } from "./IndustriesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = (() => {
      try { return localStorage.getItem("pampa_ck_consent") === "1"; } catch { return false; }
    })();
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    setVisible(false);
    setAccepted(true);
    try { localStorage.setItem("pampa_ck_consent", "1"); } catch { /* noop */ }
  };

  if (accepted) return null;

  return (
    <div id="cookie-bar" className={visible ? "visible" : ""} role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        Este sitio utiliza cookies para mejorar la experiencia de navegación y analizar el tráfico del sitio. Al continuar navegando, acepta el uso de cookies de acuerdo con nuestra{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>.
      </p>
      <div className="cookie-actions">
        <button className="btn-ck-accept" onClick={accept}>Aceptar cookies</button>
        <a href="#" className="btn-ck-policy" onClick={(e) => e.preventDefault()}>Política de privacidad</a>
      </div>
    </div>
  );
}

interface ModalProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

function PrivacyModal({ open, onClose }: Omit<ModalProps, "id">) {
  return (
    <div className={`modal-bg${open ? " open" : ""}`} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-privacy-title">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">×</button>
        <h2 id="modal-privacy-title">Política de Privacidad</h2>
        <p className="modal-date">Última actualización: 2025</p>
        <p>Pampa Investment Advisory se compromete a proteger la privacidad de los usuarios que visitan este sitio web.</p>
        <h3>1. Responsable del tratamiento</h3>
        <p><strong>Pampa Investment Advisory</strong> · Buenos Aires, Argentina · info@pampainvestmentadvisory.com</p>
        <h3>2. Información que recopilamos</h3>
        <p>Podemos recopilar nombre, correo electrónico, empresa, información de formularios de contacto, dirección IP, tipo de navegador, sistema operativo y páginas visitadas.</p>
        <h3>3. Finalidad del tratamiento</h3>
        <p>Los datos se usan para responder consultas, coordinar reuniones profesionales y proporcionar información sobre servicios. PAMPA no vende ni comparte información personal con terceros con fines comerciales.</p>
        <h3>4. Confidencialidad</h3>
        <p>Toda la información recibida será tratada con estricta confidencialidad. El envío de información no crea automáticamente una relación abogado-cliente.</p>
        <h3>5. Derechos del titular</h3>
        <p>De acuerdo con la Ley N° 25.326, puede solicitar acceso, rectificación o eliminación de sus datos escribiendo a info@pampainvestmentadvisory.com.</p>
        <h3>6. Cookies</h3>
        <p>Este sitio puede utilizar cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.</p>
      </div>
    </div>
  );
}

function TermsModal({ open, onClose }: Omit<ModalProps, "id">) {
  return (
    <div className={`modal-bg${open ? " open" : ""}`} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-terms-title">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">×</button>
        <h2 id="modal-terms-title">Términos de Uso</h2>
        <p className="modal-date">Última actualización: 2025</p>
        <p>El acceso y uso de este sitio web implica la aceptación de los presentes Términos de Uso.</p>
        <h3>1. Información general</h3>
        <p>Este sitio tiene fines informativos y describe los servicios profesionales ofrecidos por Pampa Investment Advisory. La información no constituye asesoramiento legal o fiscal específico.</p>
        <h3>2. No relación profesional automática</h3>
        <p>El acceso a este sitio o el envío de información <strong>no crea automáticamente una relación abogado-cliente</strong>. Cualquier relación profesional se establecerá únicamente mediante un acuerdo formal.</p>
        <h3>3. Limitación de responsabilidad</h3>
        <p>PAMPA realiza esfuerzos razonables para asegurar la exactitud de la información publicada. El uso del contenido es responsabilidad exclusiva del usuario.</p>
        <h3>4. Propiedad intelectual</h3>
        <p>Todo el contenido del sitio es propiedad de Pampa Investment Advisory o se utiliza con autorización. Queda prohibida su reproducción sin autorización previa.</p>
        <h3>5. Legislación aplicable</h3>
        <p>Estos términos se rigen por las leyes de la República Argentina.</p>
      </div>
    </div>
  );
}

function CookiesModal({ open, onClose }: Omit<ModalProps, "id">) {
  return (
    <div className={`modal-bg${open ? " open" : ""}`} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-cookies-title">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">×</button>
        <h2 id="modal-cookies-title">Política de Cookies</h2>
        <p className="modal-date">Última actualización: 2025</p>
        <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.</p>
        <h3>¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que se almacenan en su navegador al visitar el sitio, permitiéndole recordar información sobre su visita.</p>
        <h3>Tipos de cookies que utilizamos</h3>
        <ul>
          <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio.</li>
          <li><strong>Cookies analíticas:</strong> para analizar el tráfico y mejorar el servicio.</li>
        </ul>
        <h3>Control de cookies</h3>
        <p>Puede configurar su navegador para rechazar o eliminar cookies en cualquier momento.</p>
      </div>
    </div>
  );
}

export function LandingPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Global scroll reveal — mirrors the HTML's document.querySelectorAll('.reveal') approach
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    // Small delay ensures all components have mounted
    const tid = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 50);
    return () => { clearTimeout(tid); observer.disconnect(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openModal]);

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer onOpenModal={setOpenModal} />
      <CookieBanner />
      <PrivacyModal open={openModal === "privacy"} onClose={() => setOpenModal(null)} />
      <TermsModal open={openModal === "terms"} onClose={() => setOpenModal(null)} />
      <CookiesModal open={openModal === "cookies"} onClose={() => setOpenModal(null)} />
    </LanguageProvider>
  );
}
