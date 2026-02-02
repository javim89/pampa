import { LinkedinIcon, TwitterIcon } from "./Icons";
import logoLight from "../../assets/logo-light.svg";

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 md:gap-12 px-4 sm:px-8 lg:px-[120px] pt-10 md:pt-[60px] pb-8 md:pb-10 bg-[var(--color-background-dark)]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
        {/* Brand Column */}
        <div className="flex flex-col gap-5 lg:w-[350px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoLight}
              alt="Pampa"
              className="h-6 md:h-7 w-auto"
            />
          </a>

          {/* Tagline */}
          <p className="text-sm leading-[1.7] text-white opacity-60 font-primary max-w-[300px]">
            Boutique advisory firm providing integrated legal and tax services
            to foreign investors in Argentina.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF10] rounded-full hover:bg-[#FFFFFF20] transition-colors"
            >
              <LinkedinIcon className="text-white" size={18} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-[#FFFFFF10] rounded-full hover:bg-[#FFFFFF20] transition-colors"
            >
              <TwitterIcon className="text-white" size={18} />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-white font-primary">
              Services
            </span>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              Legal Advisory
            </a>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              Tax Structuring
            </a>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              Investment Support
            </a>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-white font-primary">
              Company
            </span>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              Our Process
            </a>
            <a
              href="#"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <span className="text-sm font-semibold text-white font-primary">
              Contact
            </span>
            <a
              href="mailto:info@pampainvestment.com"
              className="text-sm text-white opacity-60 font-primary hover:opacity-100 transition-opacity"
            >
              info@pampainvestment.com
            </a>
            <span className="text-sm text-white opacity-60 font-primary">
              Buenos Aires, Argentina
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#FFFFFF15]" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs md:text-[13px] text-white opacity-50 font-primary text-center sm:text-left">
          &copy; 2025 Pampa Investment Advisory. All rights reserved.
        </span>

        <div className="flex gap-4 md:gap-6">
          <a
            href="#"
            className="text-xs md:text-[13px] text-white opacity-50 font-primary hover:opacity-100 transition-opacity"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs md:text-[13px] text-white opacity-50 font-primary hover:opacity-100 transition-opacity"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
