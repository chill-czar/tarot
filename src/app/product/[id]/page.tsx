import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ProductDetailsSection from "~/components/ProductDetailsSection";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";

export default function ProductPage() {
  // In a real app, you'd fetch data based on params.id
  // Using mock data based on the reference image for now
  const productData = {
    title: "Soul's Guidance Tarot Reading",
    price: "$120",
    description: "Gain profound insights and clarity on your life path with a personalized tarot reading, guided by intuition and ancient wisdom. Perfect for clarity on love, career, and personal growth.",
    terms: [
      "All readings are confidential.",
      "Readings are for entertainment and spiritual guidance only.",
      "Payment is required upon booking.",
      "Cancellation policy applies."
    ],
    imageSrc: "/tarot.png"
  };

  return (
    <main className="min-h-screen bg-(--color-bg-main)">
      <Header />
      <SectionBackgroundWrapper>
        <ProductDetailsSection 
          title={productData.title}
          price={productData.price}
          description={productData.description}
          terms={productData.terms}
          imageSrc={productData.imageSrc}
          ctaText="Book Now"
        />
      </SectionBackgroundWrapper>
      <Footer />
    </main>
  );
}
