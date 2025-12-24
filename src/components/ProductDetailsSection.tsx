import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { HeroCtaRight } from "~/lib/images";

interface ProductDetailsSectionProps {
  title: string;
  price: string;
  description: string;
  terms: string[];
  imageSrc: string | StaticImageData;
  ctaText?: string;
  ctaLink?: string;
}

export default function ProductDetailsSection({
  title,
  price,
  description,
  terms,
  imageSrc,
  ctaText = "Book Now",
  ctaLink = "#",
}: ProductDetailsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-24">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-20">
        {/* Left: Product Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-sm md:aspect-4/5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col items-start text-left">
          {/* Title */}
          <h1 className="font-heading mb-4 text-4xl leading-tight text-(--color-text-primary) md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Price */}
          <div className="font-heading mb-8 text-3xl font-bold text-(--color-accent-dark) md:text-4xl">
            {price}
          </div>

          {/* Description */}
          <p className="font-body mb-8 text-base leading-relaxed text-(--color-text-primary) md:text-lg">
            {description}
          </p>

          {/* Terms & Conditions */}
          <div className="mb-10 w-full">
            <h3 className="font-body mb-3 text-sm font-bold tracking-wide text-(--color-text-primary) uppercase">
              Terms & Conditions
            </h3>
            <ul className="font-body space-y-2 text-sm text-(--color-text-secondary) md:text-base">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA: Ribbon Button (Adapted from Hero) */}
          <Link href={ctaLink} className="w-full max-w-xs md:max-w-md">
            <button className="group relative flex aspect-12/5 w-full items-center justify-center transition-transform hover:scale-105 active:scale-95">
              <Image
                src={HeroCtaRight}
                alt={ctaText}
                fill
                className="pointer-events-none object-contain"
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 448px, 448px"
              />
              <span className="font-ui relative z-10 -mt-4 -ml-8 text-sm font-semibold tracking-widest text-(--color-text-primary) uppercase md:-mt-5 md:-ml-10 md:text-base lg:text-lg">
                {ctaText}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
