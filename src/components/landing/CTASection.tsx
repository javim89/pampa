import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-[400px] lg:h-[400px] bg-[var(--color-primary)] overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#FFFFFF08] -left-[150px] md:-left-[200px] -top-[150px] md:-top-[200px] animate-pulse-slow" />
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#FFFFFF05] right-[-100px] bottom-[-100px] hidden sm:block animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[60px] h-full px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-0 max-w-[1440px] mx-auto">
        {/* Left Content */}
        <div className={`flex flex-col gap-5 md:gap-6 lg:w-[550px] text-center lg:text-left ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-white font-primary">
            Ready to Invest in Argentina?
          </h2>

          <p className="text-sm md:text-[17px] leading-[1.7] text-white opacity-80 font-primary">
            Schedule a confidential consultation and explore how to structure
            your investment with clarity and confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 bg-white text-[var(--color-primary)] rounded-lg font-primary font-medium text-sm md:text-[15px] btn-hover hover:opacity-90 transition-all">
              Schedule Consultation
              <ArrowRightIcon size={16} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 border border-[#FFFFFF40] rounded-lg font-primary font-medium text-sm md:text-[15px] text-white btn-hover hover:bg-white/10 transition-all">
              Download Guide
            </button>
          </div>
        </div>

        {/* Right Content - Contact Card */}
        <div className={`w-full sm:w-[350px] ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <div className="flex flex-col gap-4 md:gap-5 px-5 md:px-7 py-6 md:py-7 bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] card-hover">
            <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] font-primary">
              Quick Contact
            </h3>

            {/* Email */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <MailIcon
                className="text-[var(--color-text-secondary)] opacity-50 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                size={18}
              />
              <span className="text-sm text-[var(--color-text-secondary)] font-primary truncate group-hover:text-[var(--color-primary)] transition-colors">
                info@pampainvestment.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <PhoneIcon
                className="text-[var(--color-text-secondary)] opacity-50 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                size={18}
              />
              <span className="text-sm text-[var(--color-text-secondary)] font-primary group-hover:text-[var(--color-primary)] transition-colors">
                +54 11 4321 5678
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <MapPinIcon
                className="text-[var(--color-text-secondary)] opacity-50 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                size={18}
              />
              <span className="text-sm text-[var(--color-text-secondary)] font-primary group-hover:text-[var(--color-primary)] transition-colors">
                Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
