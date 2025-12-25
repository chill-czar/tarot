"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ProductDetailsSection from "~/components/ProductDetailsSection";
import SectionBackgroundWrapper from "~/components/SectionBackgroundWrapper";
import { api } from "~/lib/axios";
import { Loader2 } from "lucide-react";
import { TarotMain } from "~/lib/images";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;
    const productId = Array.isArray(id) ? id[0] : id;
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await api.get<Product>(`/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [id]);

  const terms = [
    "All readings are confidential.",
    "Readings are for entertainment and spiritual guidance only.",
    "Payment is required upon booking.",
    "Cancellation policy applies.",
  ];

  if (loading) {
    return (
      <main className="min-h-screen bg-(--color-bg-main)">
        <Header />
        <SectionBackgroundWrapper>
          <div className="flex min-h-[60vh] items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-(--color-accent-dark)" />
          </div>
        </SectionBackgroundWrapper>
        <Footer />
      </main>
    );
  }

  if (error || !product || !id) {
    return (
      <main className="min-h-screen bg-(--color-bg-main)">
        <Header />
        <SectionBackgroundWrapper>
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h2 className="font-heading mb-4 text-3xl text-(--color-text-primary)">
              Product Not Found
            </h2>
            <p className="font-body text-(--color-text-secondary)">
              The product you are looking for does not exist or has been
              removed.
            </p>
          </div>
        </SectionBackgroundWrapper>
        <Footer />
      </main>
    );
  }

  const productId = Array.isArray(id) ? id[0] : id;
  if (!productId) return null;

  return (
    <main className="min-h-screen bg-(--color-bg-main)">
      <Header />
      <SectionBackgroundWrapper>
        <ProductDetailsSection
          title={product.title}
          price={`₹${product.price}`}
          description={product.description}
          terms={terms}
          imageSrc={TarotMain}
          ctaText="Book Now"
        />
      </SectionBackgroundWrapper>
      <Footer />
    </main>
  );
}
