import React from "react";
import Image from "next/image";
import { SectionBg } from "~/lib/images";

interface SectionBackgroundWrapperProps {
  children: React.ReactNode;
}

export default function SectionBackgroundWrapper({
  children,
}: SectionBackgroundWrapperProps) {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SectionBg}
          alt="Section Background"
          fill
          className="object-cover"
          placeholder="blur"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
