import { StarIcon, ScaleIcon, ArrowRightIcon } from "./Icons";

function ShieldCheckIcon({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative bg-[var(--color-background-light)] overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#1A2A3A08] -left-[100px] md:-left-[150px] -top-[50px] md:-top-[100px] animate-pulse-slow" />
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#1A2A3A05] right-[-50px] bottom-[50px] hidden sm:block animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 px-4 sm:px-8 lg:px-20 xl:px-[120px] py-12 md:py-16 lg:py-[100px] max-w-[1440px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:gap-8 lg:w-[580px] lg:flex-shrink-0">
          {/* Tag */}
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[#1A2A3A10] rounded-[20px] w-fit animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse-slow" />
            <span className="text-xs md:text-[13px] font-medium text-[var(--color-text-primary)] font-primary">
              Trusted by International Investors
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] text-[var(--color-text-primary)] font-primary animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            Claridad legal y fiscal para empresas que invierten en Argentina.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg leading-[1.7] text-[var(--color-text-secondary)] opacity-80 max-w-[480px] font-primary animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            Plataforma senior de asesoramiento legal y fiscal diseñada para estructurar, implementar y acompañar inversión extranjera en Argentina.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <button className="flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 bg-[var(--color-primary)] text-[var(--color-text-light)] rounded-lg font-primary font-medium text-sm md:text-[15px] btn-hover hover:opacity-90 transition-all">
              Agendar una consulta confidencial
              <ArrowRightIcon size={16} />
            </button>
            <button className="flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 border border-[#1A2A3A20] rounded-lg font-primary font-medium text-sm md:text-[15px] text-[var(--color-text-primary)] btn-hover hover:bg-gray-50 transition-all">
              Conocer más
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-10 pt-4 md:pt-6 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-[28px] font-bold text-[var(--color-text-primary)] font-primary">
                15+
              </span>
              <span className="text-xs md:text-sm text-[var(--color-text-secondary)] opacity-70 font-primary">
                Years Experience
              </span>
            </div>
            <div className="w-px h-10 md:h-[50px] bg-[#1A2A3A15]" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-[28px] font-bold text-[var(--color-text-primary)] font-primary">
                200+
              </span>
              <span className="text-xs md:text-sm text-[var(--color-text-secondary)] opacity-70 font-primary">
                Clients Served
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Images Container */}
        <div className="relative w-full lg:w-[650px] lg:h-[500px] lg:flex-shrink-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          {/* Mobile/Tablet: Simple centered layout */}
          <div className="lg:hidden relative w-full max-w-[420px] mx-auto pl-8 sm:pl-12 md:pl-0">
            {/* Secondary Image - overlapping left side */}
            <div className="absolute -left-4 sm:-left-8 md:-left-8 top-1/3 w-[120px] h-[150px] sm:w-[140px] sm:h-[180px] md:w-[160px] md:h-[200px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-4 border-white z-10 animate-slide-in-left" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
              <img
                src="https://images.unsplash.com/photo-1633902656135-f1138b14ab42?w=400&q=80"
                alt="Buenos Aires"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Scale Icon Badge - overlapping secondary image */}
            <div className="absolute -left-2 sm:-left-4 top-[22%] sm:top-[20%] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-primary)] rounded-full shadow-lg z-20 animate-scale-in" style={{ animationDelay: '700ms', animationFillMode: 'both' }}>
              <ScaleIcon className="text-white" size={18} />
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-[420/480] rounded-2xl overflow-hidden border border-gray-200 animate-scale-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />

              {/* Rating Badge - Mobile positioned over image */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] animate-float">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-[var(--color-accent)]" size={14} />
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-[var(--color-text-primary)] font-primary">
                  5.0 Rated
                </span>
              </div>

              {/* Floating Card - Mobile positioned bottom right of image */}
              <div className="absolute right-3 bottom-3 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center justify-center w-9 h-9 bg-[#1A2A3A10] rounded-[10px]">
                  <ShieldCheckIcon className="text-[var(--color-primary)]" size={18} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[var(--color-text-primary)] font-primary">
                    100% Secure
                  </span>
                  <span className="text-[10px] text-[var(--color-text-secondary)] opacity-60 font-primary">
                    Confidential Advisory
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Exact Pencil layout */}
          <div className="hidden lg:block absolute inset-0">
            {/* Main Image - x:100, y:10, w:420, h:480 */}
            <div
              className="absolute rounded-2xl overflow-hidden border border-gray-200 animate-scale-in"
              style={{ left: '100px', top: '10px', width: '420px', height: '480px', animationDelay: '400ms', animationFillMode: 'both' }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image - x:0, y:200, w:200, h:240 */}
            <div
              className="absolute rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-slide-in-left"
              style={{ left: '0px', top: '200px', width: '200px', height: '240px', animationDelay: '600ms', animationFillMode: 'both' }}
            >
              <img
                src="https://images.unsplash.com/photo-1633902656135-f1138b14ab42?w=400&q=80"
                alt="Buenos Aires"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card - x:380, y:380 */}
            <div
              className="absolute flex items-center gap-3 px-5 py-4 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.07)] animate-float"
              style={{ left: '380px', top: '380px', animationDelay: '1.5s' }}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#1A2A3A10] rounded-[10px]">
                <ShieldCheckIcon className="text-[var(--color-primary)]" size={20} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-[var(--color-text-primary)] font-primary">
                  100% Secure
                </span>
                <span className="text-xs text-[var(--color-text-secondary)] opacity-60 font-primary">
                  Confidential Advisory
                </span>
              </div>
            </div>

            {/* Scale Icon Badge - x:70, y:150, w:60, h:60 */}
            <div
              className="absolute flex items-center justify-center bg-[var(--color-primary)] rounded-full animate-scale-in"
              style={{ left: '70px', top: '150px', width: '60px', height: '60px', animationDelay: '800ms', animationFillMode: 'both' }}
            >
              <ScaleIcon className="text-white" size={28} />
            </div>

            {/* Decorative Line 1 - x:520, y:60, w:80, h:3 */}
            <div
              className="absolute bg-[var(--color-primary)] rounded-sm animate-fade-in"
              style={{ left: '520px', top: '60px', width: '80px', height: '3px', animationDelay: '700ms', animationFillMode: 'both' }}
            />

            {/* Decorative Line 2 - x:520, y:72, w:40, h:3 */}
            <div
              className="absolute bg-[#1A2A3A40] rounded-sm animate-fade-in"
              style={{ left: '520px', top: '72px', width: '40px', height: '3px', animationDelay: '800ms', animationFillMode: 'both' }}
            />

            {/* Rating Badge - positioned relative to heroRight, approximately x:210 from heroRight start, y:90 */}
            <div
              className="absolute flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] animate-float"
              style={{ left: '210px', top: '90px' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-[var(--color-accent)]" size={14} />
                ))}
              </div>
              <span className="text-[13px] font-semibold text-[var(--color-text-primary)] font-primary">
                5.0 Rated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
