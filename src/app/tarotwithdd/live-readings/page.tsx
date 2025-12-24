import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import ServiceCard from "~/components/ServiceCard";

const LiveReadingsPage = () => {
  const services = [
    {
      id: 1,
      title: "15 Minutes",
      description: "Quick clarity on a specific question or immediate concern.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$45.00",
      duration: "15 Minutes Live Reading",
      ctaLink: "#", // Placeholder for actual booking link
    },
    {
      id: 2,
      title: "30 Minutes",
      description:
        "In-depth guidance for complex situations or multiple questions.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$75.00",
      duration: "30 Minutes Live Reading",
      ctaLink: "#",
    },
    {
      id: 3,
      title: "60 Minutes",
      description:
        "Comprehensive soul-level exploration and deep spiritual counseling.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$120.00",
      duration: "60 Minutes Live Reading",
      ctaLink: "#",
    },
  ];

  return (
    <div>
      <Header />
      <SectionBackgroundWrapper>
        <section className="w-full py-20">
          <div className="container mx-auto px-4">
            {/* Section Heading */}
            <div className="mb-12 flex justify-center md:mb-16">
              <h2 className="font-heading text-4xl tracking-widest text-(--color-text-primary) uppercase md:text-5xl">
                Live Readings
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
                  ctaLink={service.ctaLink}
                  price={service.price}
                  duration={service.duration}
                />
              ))}
            </div>
          </div>
        </section>
      </SectionBackgroundWrapper>
      <Footer />
    </div>
  );
};

export default LiveReadingsPage;
