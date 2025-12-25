import { type Metadata } from "next";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import WhatIDo from "~/components/WhatIDo";
import HowItWorks from "~/components/HowItWorks";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import Footer from "~/components/Footer";
import { TarotMain } from "~/lib/images";

export const metadata: Metadata = {
  title: "Tarot with DD | Professional Tarot Readings & Spiritual Guidance",
  description:
    "Experience transformative tarot readings with DD. Live interactive sessions and comprehensive written readings to unlock your spiritual path and inner wisdom. Awaken your soul today.",
  keywords: [
    "tarot readings",
    "spiritual guidance",
    "professional tarot",
    "live readings",
    "written readings",
    "spiritual awakening",
    "intuition development",
  ],
  openGraph: {
    title: "Tarot with DD | Professional Tarot Readings & Spiritual Guidance",
    description:
      "Experience transformative tarot readings with DD. Live interactive sessions and comprehensive written readings to unlock your spiritual path and inner wisdom.",
    images: [
      {
        url: TarotMain.src,
        width: 1200,
        height: 630,
        alt: "Tarot with DD - Professional Tarot Readings",
      },
    ],
  },
};

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
