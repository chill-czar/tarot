import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Reading",
      description:
        "Browse our selection of live and written readings to find the guidance you seek.",
    },
    {
      number: "02",
      title: "Book Your Session",
      description:
        "Select your preferred time and date for live sessions or submit your details for written readings.",
    },
    {
      number: "03",
      title: "Receive Your Guidance",
      description:
        "Connect with DD in a personalized session or receive your detailed written reading via email.",
    },
  ];

  return (
    <section className="w-full pt-10 pb-20 md:pb-28">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 flex justify-center md:mb-20">
          <h2 className="font-heading text-4xl tracking-widest text-(--color-text-primary) uppercase md:text-5xl">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8 lg:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-4">
              {/* Number */}
              <span className="font-heading text-6xl text-(--color-accent-primary) md:text-7xl lg:text-8xl">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-2xl text-(--color-text-primary) md:text-3xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body max-w-[300px] text-sm leading-relaxed font-medium text-(--color-text-secondary) md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
