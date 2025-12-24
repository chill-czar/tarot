import React from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import ServiceCard from "~/components/ServiceCard";

const WrittenReadingsPage = () => {
  const services = [
    {
      id: 1,
      title: "Career Path",
      description:
        "Strategic guidance for your professional journey and purpose.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$150",
      duration: "Career Path Reading",
      ctaLink: "#",
    },
    {
      id: 2,
      title: "Soul Alignment",
      description:
        "Deep insights to align your life with your soul's true purpose.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$220",
      duration: "Soul Alignment Reading",
      ctaLink: "#",
    },
    {
      id: 3,
      title: "Love & Relationship",
      description:
        "Clarity on heart connections, soulmates, and emotional bonds.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$180",
      duration: "Love & Relationship Reading",
      ctaLink: "#",
    },
    {
      id: 4,
      title: "Aura & Energy",
      description: "Detailed analysis of your energetic field and chakras.",
      imageSrc: "/bg-less.png",
      variant: "button" as const,
      price: "$250",
      duration: "Aura & Energy Reading",
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
                Written Readings
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

export default WrittenReadingsPage;
