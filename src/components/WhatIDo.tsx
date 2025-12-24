import React from "react";
import ServiceCard from "./ServiceCard";

export default function WhatIDo() {
  const services = [
  
    {
      id: 1,
      title: "Heal with DD",
      description: '"Made with an intention, to awaken yours."',
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      ctaText: "View Details",
    },
    {
      id: 2,
      title: "Heal with DD",
      description: '"Made with an intention, to awaken yours."',
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      ctaText: "View Details",
    },
    {
      id: 3,
      title: "Heal with DD",
      description: '"Made with an intention, to awaken yours."',
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      ctaText: "View Details",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 flex justify-center md:mb-16">
          <h2 className="font-heading text-4xl tracking-widest text-(--color-text-primary) uppercase md:text-5xl">
            What I Do?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-stretch lg:gap-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              variant={service.variant}
              ctaText={service.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
