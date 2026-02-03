import type { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type AnimationType =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "scale-in"
  | "slide-in-left"
  | "slide-in-right";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ ...delayStyle, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}
