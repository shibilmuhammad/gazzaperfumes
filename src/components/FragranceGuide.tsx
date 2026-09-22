"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORY_GUIDES } from "@/data/products";
import { getProductInquiryUrl } from "@/config/site";

export default function FragranceGuide() {
  return (
    <section id="guide" className="py-20 sm:py-28 bg-onyx-900 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-garnet-400 font-sans font-medium mb-2">
            EASY SELECTION GUIDE
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal tracking-tight">
            WHICH ONE IS FOR YOU?
          </h2>
          <p className="mt-2.5 text-base text-ivory-300 font-light">
            Quickly find your match based on the scents you already love.
          </p>
        </div>

        {/* 1. Quick Category Cards (For Men, Fresh & Clean, Sweet & Feminine, Bold & Different) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CATEGORY_GUIDES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-onyx-950 border border-white/[0.08] flex flex-col justify-between hover:border-ivory-200/30 transition-colors"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-garnet-400 font-medium font-mono">
                  CATEGORY
                </span>
                <h3 className="font-serif text-2xl text-ivory-100 font-normal mt-1 mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-ivory-400 font-light mb-4">
                  {cat.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-[11px] uppercase tracking-wider text-ivory-300 mb-2 font-medium">
                  Available Fragrances:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.perfumeNames.map((name) => (
                    <span
                      key={name}
                      className="text-xs px-2.5 py-1 bg-white/[0.05] border border-white/10 text-ivory-200"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. "LOVE A FAMOUS SCENT? TRY GAZZA" Quick Visual Matcher */}
        <div>
          <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-normal">
              ALREADY KNOW WHAT YOU LIKE?
            </h3>
            <p className="text-sm text-ivory-400 font-light mt-1">
              Find the Gazza perfume inspired by your favorite luxury scent:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map((product) => {
              const whatsappUrl = getProductInquiryUrl(product.name);
              return (
                <div
                  key={product.id}
                  className="p-4 bg-onyx-950 border border-white/[0.08] flex items-center justify-between gap-4 hover:border-white/20 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-16 h-16 shrink-0 bg-onyx-900 border border-white/10 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  {/* Comparison Text */}
                  <div className="flex-grow min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-garnet-400 font-medium truncate">
                      {product.loveHook}
                    </p>
                    <p className="font-serif text-lg text-ivory-50 font-normal leading-tight truncate">
                      Try <span className="font-semibold">{product.name}</span>
                    </p>
                    <p className="text-[11px] text-ivory-400 font-sans truncate">
                      ₹{product.price} &bull; 60 ML
                    </p>
                  </div>

                  {/* Direct WhatsApp Action */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-ivory-50 text-onyx-950 hover:bg-white transition-colors shrink-0"
                    aria-label={`Order ${product.name} on WhatsApp`}
                    title={`Order ${product.name}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
