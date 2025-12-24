import Header from "~/components/Header";
import Hero from "~/components/Hero";
import WhatIDo from "~/components/WhatIDo";
import HowItWorks from "~/components/HowItWorks";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionBackgroundWrapper>
        <WhatIDo />
        <HowItWorks />
      </SectionBackgroundWrapper>
      <Footer />
    </main>
  );
}
