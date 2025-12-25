"use client";

import React, { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import ServiceCard from "~/components/ServiceCard";
import { api } from "~/lib/axios";
import { Loader2 } from "lucide-react";
import {
  BgLess1,
  BgLess2,
  BgLess3,
  BgLess4,
  BgLess5,
} from "~/lib/images";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

const LiveReadingsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get<Product[]>("/products?active=true&category=Live Reading");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch live readings:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchProducts();
  }, []);

  // Map local images deterministically
  const getProductImage = (index: number) => {
    const images = [BgLess1, BgLess2, BgLess3, BgLess4, BgLess5];
    return images[index % images.length] ?? BgLess1;
  };

  return (
    <div>
      <Header />
      <SectionBackgroundWrapper>
        <section className="min-h-[60vh] w-full py-20">
          <div className="container mx-auto px-4">
            {/* Section Heading */}
            <div className="mb-12 flex justify-center md:mb-16">
              <h2 className="font-heading text-4xl tracking-widest text-(--color-text-primary) uppercase md:text-5xl">
                Live Readings
              </h2>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-10 w-10 animate-spin text-(--color-accent-dark)" />
              </div>
            ) : products.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-body text-xl text-(--color-text-secondary)">
                  No live readings available at the moment. Please check back
                  later.
                </p>
              </div>
            ) : (
              /* Cards Grid */
              <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-stretch lg:gap-12">
                {products.map((product, index) => (
                  <ServiceCard
                    key={product._id}
                    title={product.title}
                    description={product.description}
                    imageSrc={getProductImage(index)}
                    variant="button"
                    ctaLink={`/product/${product._id}`}
                    price={`₹${product.price}`}
                    duration={product.duration}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </SectionBackgroundWrapper>
      <Footer />
    </div>
  );
};

export default LiveReadingsPage;
