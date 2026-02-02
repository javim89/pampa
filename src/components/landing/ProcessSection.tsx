interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

function ProcessStep({
  number,
  title,
  description,
  isActive = false,
}: ProcessStepProps) {
  return (
    <div className="flex gap-4 md:gap-5">
      {/* Number Circle */}
      <div
        className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full flex-shrink-0 ${
          isActive ? "bg-[var(--color-primary)]" : "bg-[#F0F2F5]"
        }`}
      >
        <span
          className={`text-xs md:text-sm font-semibold font-primary ${
            isActive ? "text-white" : "text-[var(--color-text-primary)]"
          }`}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 md:gap-1.5 flex-1">
        <h4 className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] font-primary">
          {title}
        </h4>
        <p className="text-xs md:text-sm leading-[1.6] text-[var(--color-text-secondary)] opacity-70 font-primary">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] bg-white">
      {/* Left Side - Image with Overlay */}
      <div className="relative w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-full overflow-hidden bg-[var(--color-primary)]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1765729003706-355ca161736d?w=800&q=80"
          alt="Buenos Aires cityscape"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Content Overlay */}
        <div className="relative flex flex-col gap-6 md:gap-8 justify-center h-full px-4 sm:px-8 lg:px-[50px] py-8 md:py-12 lg:py-[60px]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] text-white font-primary max-w-[400px]">
            We fight for your success
          </h3>

          <p className="text-sm md:text-base leading-[1.7] text-white opacity-80 max-w-[400px] font-primary">
            Our structured approach ensures clarity at every step of your
            investment journey in Argentina.
          </p>

          {/* Stats */}
          <div className="flex gap-8 md:gap-10 pt-2 md:pt-5">
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-[32px] font-bold text-white font-primary">
                98%
              </span>
              <span className="text-xs md:text-sm text-white opacity-60 font-primary">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Process Steps */}
      <div className="flex flex-col gap-6 md:gap-8 flex-1 justify-center px-4 sm:px-8 lg:px-[60px] py-8 md:py-12 lg:py-[60px]">
        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Label */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold tracking-[1.5px] text-[var(--color-text-primary)] font-primary">
              OUR PROCESS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-[32px] font-bold text-[var(--color-text-primary)] font-primary">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-5 md:gap-6">
          <ProcessStep
            number="01"
            title="Initial Consultation"
            description="We assess your investment goals and provide a preliminary analysis of the Argentine market opportunity."
            isActive
          />
          <ProcessStep
            number="02"
            title="Strategic Planning"
            description="Our team develops a customized legal and tax structure optimized for your specific investment."
          />
          <ProcessStep
            number="03"
            title="Implementation"
            description="We execute the plan, managing all regulatory filings and documentation for a smooth market entry."
          />
        </div>
      </div>
    </section>
  );
}
