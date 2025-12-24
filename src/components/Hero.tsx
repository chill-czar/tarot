import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Mystical background with a woman in white dress"
          fill
          priority
          className="object-cover object-top md:object-center"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability if needed, though image seems to have it */}
        {/* <div className="absolute inset-0 bg-black/10 mix-blend-overlay" /> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center md:items-end md:justify-center md:pt-0 md:pr-20 lg:pr-32">
        <div className="flex w-full max-w-4xl flex-col items-center md:items-center">
          {/* Main Heading */}
          <h1 className="font-heading mb-10 text-5xl tracking-tighter text-(--color-text-primary) drop-shadow-sm md:text-7xl lg:text-8xl">
            <span className="block">Awaken</span>
            <span className="block">Your Soul</span>
          </h1>

          {/* Buttons / Ribbons Container */}
          <div className="flex w-full flex-row items-center justify-center gap-1 sm:gap-4 md:gap-8">
            {/* Live Readings Ribbon */}
            <Link href="/tarotwithdd/live-readings">
              <button className="group relative flex aspect-12/5 w-[195px] items-center justify-center transition-transform hover:scale-105 active:scale-95 sm:w-72 md:w-[460px] lg:w-[540px]">
                <Image
                  src="/hero-cta-bg-left.png"
                  alt="Live Readings"
                  fill
                  className="pointer-events-none object-contain"
                  priority
                />
                <span className="font-ui relative z-10 -mt-4 ml-10 text-[10px] font-semibold tracking-widest text-(--color-text-primary) uppercase sm:-mt-5 sm:ml-12 sm:text-[11px] md:text-sm lg:text-base">
                  Live Readings
                </span>
              </button>
            </Link>

            {/* Written Readings Ribbon */}
            <Link href="/tarotwithdd/written-readings">
              <button className="group relative flex aspect-12/5 w-[195px] items-center justify-center transition-transform hover:scale-105 active:scale-95 sm:w-72 md:w-[460px] lg:w-[540px]">
                <Image
                  src="/hero-cta-bg-right.png"
                  alt="Written Readings"
                  fill
                  className="pointer-events-none object-contain"
                  priority
                />
                <span className="font-ui relative z-10 -mt-4 -ml-10 text-[10px] font-semibold tracking-widest text-(--color-text-primary) uppercase sm:-mt-5 sm:-ml-12 sm:text-[11px] md:text-sm lg:text-base">
                  Written Readings
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
