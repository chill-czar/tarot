import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ServiceCardBg } from "~/lib/images";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData; // The illustration inside the gate
  ctaText?: string;
  ctaLink?: string;
  variant?: "text" | "button";
  price?: string;
  duration?: string;
  priority?: boolean;
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
  priority = false,
}: ServiceCardProps) {
  const isDetailed = !!price;
  const effectiveVariant = isDetailed ? "button" : (variant ?? "text");
  const effectiveCtaText = ctaText ?? (isDetailed ? "Book Now" : "Explore");

  return (
    /* 1. OUTER CONTAINER: Enforces the Tarot Card Shape (9:16 ratio) */
    <div className="group relative mx-auto aspect-9/16 w-full max-w-[340px] bg-[#f8f5f0] transition-transform select-none hover:scale-[1.02] md:max-w-[380px]">
      {/* 2. BACKGROUND: The Heaven's Gate Frame */}
      <Image
        src={ServiceCardBg} // Your gate frame image
        alt=""
        fill
        className="pointer-events-none z-0 object-fill"
        priority={priority}
        sizes="(max-width: 768px) 100vw, 380px"
      />

      {/* 3. SAFE ZONE: Absolutely positioned INSIDE the pillars/arch */}
      {/* We use percentages for padding to ensure it scales perfectly with the image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-[18%] pt-[15%] pb-[10%] md:gap-6">
        {/* --- SECTION A: ILLUSTRATION --- */}
        <div className="relative flex w-full shrink-0 items-center justify-center">
          <div className="relative aspect-square max-h-[140px] w-full md:max-h-[200px]">
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
        <div className="flex w-full shrink-0 flex-col items-center justify-center gap-2 text-center md:gap-3">
          {/* Title - Gradient + Subtle Glow */}
          <h3 className="font-heading line-clamp-2 bg-linear-to-b from-[#6D5E4D] to-[#3D3123] bg-clip-text text-2xl leading-tight text-transparent drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] md:text-3xl">
            {title}
          </h3>

          {/* Price / Duration (Optional) */}
          {isDetailed && (
            <div className="flex flex-col items-center leading-none">
              <span className="font-heading text-xl font-bold text-(--color-accent-dark) drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)] md:text-2xl">
                {price}
              </span>
              {duration && (
                <span className="font-body mt-1 text-xs font-medium text-(--color-text-secondary) md:text-sm">
                  {duration}
                </span>
              )}
            </div>
          )}

          {/* Description - Refined color */}
          <p className="font-body line-clamp-3 max-w-[90%] text-sm leading-relaxed text-[#594D3F] md:text-base">
            {description}
          </p>
        </div>

        {/* --- SECTION C: CTA --- */}
        <div className="mt-2 shrink-0">
          {effectiveVariant === "button" ? (
            <Link
              href={ctaLink}
              className="inline-flex h-9 items-center justify-center rounded-full border border-[#A68E6A]/40 bg-linear-to-b from-[#C5A26B] to-[#927848] px-6 text-xs font-semibold tracking-wide text-white uppercase shadow-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 md:h-10 md:px-8 md:text-sm"
            >
              {effectiveCtaText}
            </Link>
          ) : (
            <Link
              href={ctaLink}
              className="font-heading text-xl text-(--color-text-primary) italic transition-colors hover:text-[#C5A26B] md:text-2xl"
            >
              {effectiveCtaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
