import { StarIcon } from "./Icons";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  variant?: "light" | "dark";
}

function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorImage,
  variant = "light",
}: TestimonialCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex flex-col gap-5 md:gap-6 p-6 md:p-8 rounded-2xl card-hover ${
        isDark
          ? "bg-[var(--color-primary)]"
          : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="text-[var(--color-accent)]" size={16} />
        ))}
      </div>

      {/* Quote */}
      <p
        className={`text-sm md:text-base leading-[1.7] font-primary flex-1 ${
          isDark
            ? "text-white opacity-90"
            : "text-[var(--color-text-secondary)]"
        }`}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 md:gap-3.5">
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <span
            className={`text-sm font-semibold font-primary ${
              isDark ? "text-white" : "text-[var(--color-text-primary)]"
            }`}
          >
            {authorName}
          </span>
          <span
            className={`text-xs font-primary ${
              isDark
                ? "text-white opacity-60"
                : "text-[var(--color-text-secondary)] opacity-60"
            }`}
          >
            {authorRole}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px] px-4 sm:px-8 lg:px-[120px] py-12 md:py-16 lg:py-[100px] bg-[var(--color-background-section)]"
    >
      {/* Header */}
      <div className={`flex flex-col items-center gap-3 md:gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationFillMode: 'both' }}>
        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
          <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
            TESTIMONIALS
          </span>
          <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-center text-[var(--color-text-primary)] font-primary">
          Trusted by International Companies
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <TestimonialCard
            quote='"Navigating the Argentine market seemed impossible until we found Pampa. Their expertise transformed our entire approach."'
            authorName="Sarah Mitchell"
            authorRole="CEO, TechVentures Inc"
            authorImage="https://images.unsplash.com/photo-1603484255049-ea4d0fe04fd3?w=200&q=80"
          />
        </div>
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <TestimonialCard
            quote='"The best decision we made was partnering with Pampa. They truly understand both international business and local nuances."'
            authorName="Carlos Rodriguez"
            authorRole="Managing Director, Global Invest"
            authorImage="https://images.unsplash.com/photo-1659353216718-faccabf8b036?w=200&q=80"
            variant="dark"
          />
        </div>
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          <TestimonialCard
            quote='"Professional, thorough and always available. Pampa made our expansion into Argentina seamless and risk-free."'
            authorName="Emma Thompson"
            authorRole="CFO, Nordic Capital"
            authorImage="https://images.unsplash.com/photo-1504791635568-fa4993808e0a?w=200&q=80"
          />
        </div>
      </div>
    </section>
  );
}
