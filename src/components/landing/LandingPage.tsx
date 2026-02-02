import { Header } from "./Header";
import { Hero } from "./Hero";
import { IntroSection } from "./IntroSection";
import { ServicesSection } from "./ServicesSection";
import { ProcessSection } from "./ProcessSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] font-primary">
      <Header />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
