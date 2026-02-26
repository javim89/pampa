import { ZapIcon, PickaxeIcon, WheatIcon, CpuIcon } from "./Icons";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import energyImg from "../../assets/industries/energy.png";
import miningImg from "../../assets/industries/mining.png";
import agribusinessImg from "../../assets/industries/agribusiness.png";
import technologyImg from "../../assets/industries/technology.png";

interface IndustryCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  isVisible: boolean;
}

function IndustryCard({
  image,
  icon,
  title,
  description,
  delay = 0,
  isVisible,
}: IndustryCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden h-80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both", backgroundColor: "#1A2A3A" }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content at bottom */}
      <div className="absolute inset-0 flex flex-col justify-end gap-3 p-7">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-white font-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-[1.6] text-white/85 font-primary">
          {description}
        </p>
      </div>
    </div>
  );
}

export function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  const industries = [
    {
      image: energyImg,
      icon: <ZapIcon size={24} />,
      title: "Energy",
      description: "Oil, gas, and renewable energy projects with comprehensive regulatory support.",
    },
    {
      image: miningImg,
      icon: <PickaxeIcon size={24} />,
      title: "Mining",
      description: "Lithium, copper and precious metals extraction with environmental compliance.",
    },
    {
      image: agribusinessImg,
      icon: <WheatIcon size={24} />,
      title: "Agribusiness",
      description: "Agricultural production, export logistics and food processing ventures.",
    },
    {
      image: technologyImg,
      icon: <CpuIcon size={24} />,
      title: "Technology",
      description: "Software development, fintech startups and digital transformation initiatives.",
    },
  ];

  return (
    <section
      ref={ref}
      id="industries"
      className="flex flex-col items-center gap-12 px-4 sm:px-8 lg:px-[120px] py-[80px] bg-white"
    >
      {/* Header */}
      <div
        className={`flex flex-col items-center gap-4 text-center max-w-[640px] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationFillMode: "both" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#1A2A3A]" />
          <span className="text-xs font-semibold tracking-[1.5px] text-[#1A2A3A] font-primary">
            SECTORS
          </span>
          <div className="w-6 h-0.5 bg-[#1A2A3A]" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.2] text-[#1A2A3A] font-primary">
          Industries We Serve
        </h2>

        <p
          className={`text-base lg:text-[17px] leading-[1.7] text-[#2E3440]/80 font-primary ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "100ms", animationFillMode: "both" }}
        >
          We provide specialized advisory services across Argentina's key economic sectors
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {industries.map((industry, index) => (
          <IndustryCard
            key={industry.title}
            image={industry.image}
            icon={industry.icon}
            title={industry.title}
            description={industry.description}
            delay={100 + index * 80}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}
