"use client";

import React from "react";
import { Sparkles, Compass, Tag } from "lucide-react";

export default function WhyGazza() {
  const points = [
    {
      icon: Sparkles,
      title: "PREMIUM FEEL",
      description: "Carefully made fragrances for everyday use.",
    },
    {
      icon: Compass,
      title: "INSPIRED BY ICONIC SCENTS",
      description: "Fragrances inspired by popular luxury perfumes.",
    },
    {
      icon: Tag,
      title: "BETTER PRICE",
      description: "Enjoy the fragrance style you love without paying the price of the original brand.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-onyx-900 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-garnet-400 font-sans font-medium mb-2">
            SIMPLE & HONEST
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal tracking-tight">
            WHY GAZZA?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="p-6 sm:p-8 bg-onyx-950 border border-white/[0.08] flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-ivory-200" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory-100 font-normal tracking-wide mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-ivory-300/80 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
