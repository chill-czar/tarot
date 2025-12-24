import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import ServiceCard from "~/components/ServiceCard";

const TarotLandingPage = () => {
  const services = [
    {
      id: 1,
      title: "Live Readings",
      description:
        "Connect in real-time for immediate guidance and interactive clarity.",
      imageSrc: "/bg-less.png", // Using existing placeholder
      variant: "button" as const,
      ctaText: "Check Now",
      ctaLink: "/tarotwithdd/live-readings",
    },
    {
      id: 2,
      title: "Written Readings",
      description:
        "Receive detailed, thoughtful insights delivered directly to your inbox.",
      imageSrc: "/bg-less.png", // Using existing placeholder
      variant: "button" as const,
      ctaText: "Check Now",
      ctaLink: "/tarotwithdd/written-readings",
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
                Tarot Services
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
                  ctaLink={service.ctaLink}
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

export default TarotLandingPage;
