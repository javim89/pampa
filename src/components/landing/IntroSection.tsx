import { ArrowRightIcon } from "./Icons";

export function IntroSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-20 px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-20 bg-[var(--color-background)]">
      {/* Left Column */}
      <div className="flex flex-col gap-4 md:gap-6 lg:w-[500px]">
        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
          <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
            WHY CHOOSE US
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.2] text-[var(--color-text-primary)] font-primary">
          We Simplify Complex Investment Journeys
        </h2>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 md:gap-5 flex-1">
        <p className="text-base md:text-[17px] leading-[1.8] text-[var(--color-text-secondary)] font-primary">
          Investing in Argentina requires navigating a complex legal, tax and
          regulatory environment. Without proper local guidance, foreign
          investors often face uncertainty, inefficiencies and avoidable risks.
        </p>

        <p className="text-base md:text-[17px] leading-[1.8] text-[var(--color-text-secondary)] font-primary">
          Pampa Investment Advisory acts as your strategic partner, combining
          legal and tax expertise with a pragmatic understanding of business
          operations in Argentina.
        </p>

        {/* Link */}
        <a
          href="#about"
          className="flex items-center gap-2 pt-2 md:pt-3 text-sm md:text-[15px] font-semibold text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Learn more about our approach
          <ArrowRightIcon size={18} />
        </a>
      </div>
    </section>
  );
}
