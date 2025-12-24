import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string; // The illustration inside the gate
  ctaText?: string;
  ctaLink?: string;
  variant?: "text" | "button";
  price?: string;
  duration?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  ctaText,
  ctaLink = "#",
  variant,
  price,
  duration,
}: ServiceCardProps) {
  const isDetailed = !!price;
  const effectiveVariant = isDetailed ? "button" : (variant ?? "text");
  const effectiveCtaText = ctaText ?? (isDetailed ? "Book Now" : "Explore");

  return (
    /* 1. OUTER CONTAINER: Enforces the Tarot Card Shape (9:16 ratio) */
    <div className="group relative w-full max-w-[340px] md:max-w-[380px] aspect-9/16 mx-auto select-none transition-transform hover:scale-[1.02]">
      
      {/* 2. BACKGROUND: The Heaven's Gate Frame */ }
      <Image
        src="/service-card-bg.png" // Your gate frame image
        alt=""
        fill
        className="pointer-events-none object-fill z-0"
        priority
        sizes="(max-width: 768px) 100vw, 380px"
      />

      {/* 3. SAFE ZONE: Absolutely positioned INSIDE the pillars/arch */ }
      {/* We use percentages for padding to ensure it scales perfectly with the image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center
                      pt-[15%] pb-[10%] px-[18%] gap-4 md:gap-6"> 
        
        {/* --- SECTION A: ILLUSTRATION --- */}
        <div className="relative flex w-full items-center justify-center shrink-0">
          <div className="relative w-full aspect-square max-h-[140px] md:max-h-[200px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain drop-shadow-sm"
              sizes="(max-width: 768px) 150px, 240px"
            />
          </div>
        </div>

        {/* --- SECTION B: TEXT CONTENT --- */}
        <div className="flex flex-col items-center justify-center shrink-0 w-full gap-2 md:gap-3 text-center">
          
          {/* Title - Gradient + Subtle Glow */}
          <h3 className="font-heading text-2xl md:text-3xl leading-tight line-clamp-2
                         bg-linear-to-b from-[#6D5E4D] to-[#3D3123] bg-clip-text text-transparent
                         drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            {title}
          </h3>

          {/* Price / Duration (Optional) */}
          {isDetailed && (
            <div className="flex flex-col items-center leading-none">
              <span className="font-heading text-xl md:text-2xl font-bold text-(--color-accent-dark)
                             drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
                {price}
              </span>
              {duration && (
                <span className="font-body text-xs md:text-sm font-medium text-(--color-text-secondary) mt-1">
                  {duration}
                </span>
              )}
            </div>
          )}

          {/* Description - Refined color */}
          <p className="font-body text-sm md:text-base leading-relaxed text-[#594D3F] line-clamp-3 max-w-[90%]">
            {description}
          </p>
        </div>

        {/* --- SECTION C: CTA --- */}
        <div className="shrink-0 mt-2">
          {effectiveVariant === "button" ? (
            <Link
              href={ctaLink}
              className="inline-flex h-9 md:h-10 items-center justify-center rounded-full 
                         border border-[#A68E6A]/40
                         bg-linear-to-b from-[#C5A26B] to-[#927848]
                         px-6 md:px-8 text-xs md:text-sm font-semibold tracking-wide uppercase 
                         text-white shadow-sm 
                         transition-all hover:shadow-md hover:scale-105 active:scale-95"
            >
              {effectiveCtaText}
            </Link>
          ) : (
            <Link
              href={ctaLink}
              className="font-heading text-xl md:text-2xl text-(--color-text-primary) italic hover:text-[#C5A26B] transition-colors"
            >
              {effectiveCtaText}
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}