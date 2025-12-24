import React from "react";
import ServiceCard from "./ServiceCard";
import { BgLess1, BgLess2, BgLess3 } from "~/lib/images";

export default function WhatIDo() {
  const services = [
    {
      id: 1,
      title: "Live Interactive Readings",
      description:
        "Real-time spiritual counseling to illuminate your path. Connect deeply with your inner wisdom through immediate, intuitive clarity.",
      imageSrc: BgLess1,
      variant: "button" as const,
      ctaText: "Book Live Session",
      ctaLink: "/tarotwithdd/live-readings",
    },
    {
      id: 2,
      title: "Comprehensive Written Analysis",
      description:
        "A soul-level exploration of your energy and destiny, delivered as a detailed guide to navigate life's most complex transformations.",
      imageSrc: BgLess2,
      variant: "button" as const,
      ctaText: "Order Reading",
      ctaLink: "/tarotwithdd/written-readings",
    },
    {
      id: 3,
      title: "Intuitive Spiritual Guidance",
      description:
        "Align your inner frequency with your higher purpose. Weave ancient archetypes into a modern map for your spiritual awakening.",
      imageSrc: BgLess3,
      variant: "button" as const,
      ctaText: "Explore More",
      ctaLink: "/tarotwithdd",
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
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              variant={service.variant}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
