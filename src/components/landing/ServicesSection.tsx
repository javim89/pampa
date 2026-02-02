import {
  FileTextIcon,
  CalculatorIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from "./Icons";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

function ServiceCard({
  icon,
  title,
  description,
  variant = "light",
}: ServiceCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex flex-col gap-5 md:gap-6 p-6 md:p-8 rounded-2xl ${
        isDark
          ? "bg-[var(--color-primary)]"
          : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-[14px] ${
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
        Learn more
        <ArrowRightIcon size={14} />
      </a>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[var(--color-background-section)] overflow-hidden"
    >
      {/* Decorative Circle */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#1A2A3A05] right-[-100px] md:right-[-50px] top-[-50px] hidden sm:block" />

      {/* Content */}
      <div className="relative flex flex-col gap-8 md:gap-12 px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-20 max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 md:gap-4 lg:w-[500px]">
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
                OUR SERVICES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.2] text-[var(--color-text-primary)] font-primary">
              Comprehensive Advisory Solutions
            </h2>
          </div>

          {/* View All Button - Hidden on mobile */}
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 border border-[#1A2A3A20] rounded-lg text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            View All Services
            <ArrowRightIcon size={16} />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            icon={<FileTextIcon size={22} />}
            title="Legal Advisory"
            description="Complete legal structuring for market entry, corporate formation, contract drafting and regulatory compliance."
          />
          <ServiceCard
            icon={<CalculatorIcon size={22} />}
            title="Tax Structuring"
            description="Strategic tax planning, treaty optimization and compliance management for international investors."
            variant="dark"
          />
          <ServiceCard
            icon={<BriefcaseIcon size={22} />}
            title="Investment Support"
            description="End-to-end support from due diligence to closing, ensuring smooth execution of your investment."
          />
        </div>

        {/* View All Button - Mobile only */}
        <a
          href="#"
          className="flex sm:hidden items-center justify-center gap-2 px-5 py-3 border border-[#1A2A3A20] rounded-lg text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors"
        >
          View All Services
          <ArrowRightIcon size={16} />
        </a>
      </div>
    </section>
  );
}
