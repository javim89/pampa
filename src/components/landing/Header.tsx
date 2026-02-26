import { useState } from "react";
import logoSvg from "../../assets/logo.svg";

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between h-16 md:h-20 px-4 sm:px-8 lg:px-[120px] bg-[var(--color-background)] border-b border-[var(--color-border)]">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img
          src={logoSvg}
          alt="Pampa"
          className="h-6 md:h-7 w-auto"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <a
          href="#services"
          className="text-sm font-medium text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Servicios
        </a>
        <a
          href="#process"
          className="text-sm font-medium text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Proceso
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Nosotros
        </a>
        <a
          href="#testimonials"
          className="text-sm font-medium text-[var(--color-text-primary)] font-primary hover:opacity-70 transition-opacity"
        >
          Testimonios
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center px-5 py-3 text-sm font-medium text-[var(--color-text-light)] bg-[var(--color-primary)] rounded-md font-primary hover:opacity-90 transition-opacity"
        >
          Contacto
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-[var(--color-text-primary)]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 flex flex-col bg-white border-b border-[var(--color-border)] shadow-lg lg:hidden z-50 mobile-menu-enter">
          <a
            href="#services"
            className="px-4 py-4 text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors border-b border-gray-100 animate-fade-in-up"
            style={{ animationDelay: '50ms', animationFillMode: 'both' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#process"
            className="px-4 py-4 text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors border-b border-gray-100 animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Proceso
          </a>
          <a
            href="#about"
            className="px-4 py-4 text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors border-b border-gray-100 animate-fade-in-up"
            style={{ animationDelay: '150ms', animationFillMode: 'both' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#testimonials"
            className="px-4 py-4 text-sm font-medium text-[var(--color-text-primary)] font-primary hover:bg-gray-50 transition-colors border-b border-gray-100 animate-fade-in-up"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonios
          </a>
          <a
            href="#contact"
            className="m-4 flex items-center justify-center px-5 py-3 text-sm font-medium text-[var(--color-text-light)] bg-[var(--color-primary)] rounded-md font-primary btn-hover animate-fade-in-up"
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
