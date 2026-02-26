import {
  FileTextIcon,
  CalculatorIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from "./Icons";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
  delay?: number;
}

function ServiceCard({
  icon,
  title,
  description,
  variant = "light",
  delay = 0,
}: ServiceCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`group flex flex-col gap-5 md:gap-6 p-6 md:p-8 rounded-2xl card-hover ${
        isDark
          ? "bg-[var(--color-primary)]"
          : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-[14px] transition-transform duration-300 group-hover:scale-110 ${
          isDark ? "bg-[#FFFFFF20]" : "bg-[var(--color-primary)]"
        }`}
      >
        <div className={isDark ? "text-white" : "text-white"}>{icon}</div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3 flex-1">
        <h3
          className={`text-lg md:text-xl font-semibold font-primary ${
            isDark ? "text-white" : "text-[var(--color-text-primary)]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm md:text-[15px] leading-[1.7] font-primary ${
            isDark
              ? "text-white opacity-80"
              : "text-[var(--color-text-secondary)] opacity-70"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href="#"
        className={`flex items-center gap-1.5 text-sm font-medium font-primary hover:opacity-70 transition-opacity ${
          isDark ? "text-white" : "text-[var(--color-text-primary)]"
        }`}
      >
        Ver más
        <ArrowRightIcon size={14} className="link-arrow" />
      </a>
    </div>
  );
}

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-[var(--color-background-section)] overflow-hidden"
    >
      {/* Decorative Circle */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#1A2A3A05] right-[-100px] md:right-[-50px] top-[-50px] hidden sm:block animate-pulse-slow" />

      {/* Content */}
      <div className="relative flex flex-col gap-8 md:gap-12 px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-20 max-w-[1440px]">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
          <div className="flex flex-col gap-3 md:gap-4 lg:w-[500px]">
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
                MODELO DE ASESORAMIENTO
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.2] text-[var(--color-text-primary)] font-primary">
              Asesoramiento legal y fiscal integrado.
            </h2>
          </div>

          {/* View All Button - Hidden on mobile */}
          <a
            href="#"
            className="group hidden sm:flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 border border-[#1A2A3A20] rounded-lg text-sm font-medium text-[var(--color-text-primary)] font-primary btn-hover hover:bg-gray-50 transition-all whitespace-nowrap"
          >
            Ver todos los servicios
            <ArrowRightIcon size={16} className="link-arrow" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <ServiceCard
              icon={<FileTextIcon size={22} />}
              title="Argentina Investment Assessment"
              description="Diagnóstico integral del entorno legal y fiscal aplicable a su inversión, con identificación de oportunidades y riesgos desde el inicio."
            />
          </div>
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <ServiceCard
              icon={<CalculatorIcon size={22} />}
              title="Capital Entry & Entity Setup"
              description="Estructuración societaria y fiscal para el ingreso de capital, incluyendo constitución de entidades, contratos y habilitaciones regulatorias."
              variant="dark"
            />
          </div>
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <ServiceCard
              icon={<BriefcaseIcon size={22} />}
              title="Ongoing Legal & Tax Support"
              description="Acompañamiento continuo en materia legal y fiscal durante toda la vida del proyecto: cumplimiento, contratos, reorganizaciones y contingencias."
            />
          </div>
        </div>

        {/* View All Button - Mobile only */}
        <a
          href="#"
          className={`group flex sm:hidden items-center justify-center gap-2 px-5 py-3 border border-[#1A2A3A20] rounded-lg text-sm font-medium text-[var(--color-text-primary)] font-primary btn-hover hover:bg-gray-50 transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '400ms', animationFillMode: 'both' }}
        >
          Ver todos los servicios
          <ArrowRightIcon size={16} className="link-arrow" />
        </a>
      </div>
    </section>
  );
}
