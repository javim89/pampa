import { ArrowRightIcon } from "./Icons";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function IntroSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="flex flex-col lg:flex-row gap-8 lg:gap-20 px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-20 bg-[var(--color-background)]"
    >
      {/* Left Column */}
      <div className={`flex flex-col gap-4 md:gap-6 lg:w-[500px] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
          <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
            WHY CHOOSE US
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.2] text-[var(--color-text-primary)] font-primary">
          Invertir en Argentina requiere contar desde el inicio con la estructura legal y fiscal adecuada.
        </h2>
      </div>

      {/* Right Column */}
      <div className={`flex flex-col gap-4 md:gap-5 flex-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
        <p className="text-base md:text-[17px] leading-[1.8] text-[var(--color-text-secondary)] font-primary">
          Operar en Argentina implica navegar un entorno legal, fiscal y regulatorio complejo y en permanente evolución. Sin un asesoramiento local adecuado, los inversores extranjeros enfrentan incertidumbre, ineficiencias y riesgos evitables.
        </p>

        <p className="text-base md:text-[17px] leading-[1.8] text-[var(--color-text-secondary)] font-primary">
          Pampa Investment Advisory actúa como su socio estratégico, integrando experiencia legal y fiscal con un entendimiento pragmático del entorno de negocios en Argentina.
        </p>

        {/* Link */}
        <a
          href="#about"
          className="group flex items-center gap-2 pt-2 md:pt-3 text-sm md:text-[15px] font-semibold text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Conocer más sobre nuestro enfoque
          <ArrowRightIcon size={18} className="link-arrow" />
        </a>
      </div>
    </section>
  );
}
