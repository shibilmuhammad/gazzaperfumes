"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_NAME } from "@/config/site";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  size = "md",
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  // User provided Canva logo
  const logoSrc = "/images/brand/gazza-logo.png";

  const sizeClasses = {
    sm: "h-10 w-16 sm:h-11 sm:w-20",
    md: "h-12 w-20 sm:h-14 sm:w-24",
    lg: "h-20 w-32 sm:h-24 sm:w-36",
  }[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center transition-opacity duration-300 hover:opacity-85 ${className}`}
      aria-label={`${BRAND_NAME} - Fragrance of Heaven`}
    >
      {!imageError ? (
        <div
          className={`relative ${sizeClasses} transition-transform duration-300 group-hover:scale-[1.02] mix-blend-screen`}
        >
          <Image
            src={logoSrc}
            alt={`${BRAND_NAME} - Fragrance of Heaven`}
            fill
            priority
            className="object-contain object-left filter contrast-125"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        /* Typographic Fallback if image asset fails to load */
        <div className="flex flex-col">
          <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-light leading-none text-ivory-50">
            GAZZA
          </span>
          <span className="text-[9px] tracking-[0.45em] uppercase font-sans mt-1 text-ivory-300">
            FRAGRANCE OF HEAVEN
          </span>
        </div>
      )}
    </Link>
  );
}
