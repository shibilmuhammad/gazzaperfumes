"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";
import { getProductInquiryUrl } from "@/config/site";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const whatsappUrl = getProductInquiryUrl(product.name);

  return (
    <article className="group flex flex-col justify-between bg-onyx-900 border border-white/[0.08] transition-all duration-300 hover:border-white/20 hover:bg-onyx-850">
      {/* 1. Large Product Image (Main Visual Element) */}
      <div className="relative aspect-square w-full overflow-hidden bg-onyx-950">
        {/* 60% OFF Badge */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-onyx-950/90 backdrop-blur-md border border-garnet-700/60 text-[10px] uppercase font-sans tracking-[0.2em] text-ivory-50 font-semibold">
          60% OFF
        </div>

        <Image
          src={product.image}
          alt={`Gazza ${product.name} inspired by ${product.inspiredBy}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* 2, 3, 4, 5. Product Details & Action */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
        {/* Gazza Brand & Product Name */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory-400 font-sans block mb-1">
            GAZZA
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-normal tracking-wide">
            {product.name}
          </h3>
        </div>

        {/* Inspired By (Distinct small label, Gazza remains primary) */}
        <div className="p-3 bg-onyx-950 border border-white/[0.06] rounded-sm">
          <span className="text-[9px] uppercase tracking-[0.25em] text-garnet-400 font-medium block">
            INSPIRED BY
          </span>
          <p className="text-sm font-sans text-ivory-100 font-medium mt-0.5">
            {product.inspiredBy}
          </p>
        </div>

        {/* Specs: 60 ML • EAU DE PARFUM */}
        <div className="flex items-center justify-between text-xs text-ivory-400 font-mono tracking-wider pt-1 border-t border-white/[0.06]">
          <span>{product.size}</span>
          <span>&bull;</span>
          <span>{product.concentration}</span>
        </div>

        {/* Prominent Price Display */}
        <div className="flex items-baseline justify-between pt-1">
          <div className="flex items-baseline gap-2.5">
            <span className="font-serif text-3xl text-ivory-50 font-normal">
              ₹{product.price}
            </span>
            <span className="text-sm text-ivory-400 line-through">
              ₹{product.originalPrice}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
            Save ₹{product.originalPrice - product.price}
          </span>
        </div>

        {/* Clear WhatsApp CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-ivory-50 text-onyx-950 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white active:scale-[0.99]"
          aria-label={`Order ${product.name} on WhatsApp`}
        >
          <MessageCircle className="w-4 h-4 text-onyx-950" />
          <span>ORDER ON WHATSAPP</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
