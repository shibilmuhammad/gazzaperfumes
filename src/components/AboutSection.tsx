"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-onyx-950 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Brand Mood with Real Gazza Amber Kiss */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden border border-white/10 bg-onyx-900 shadow-2xl">
              <Image
                src="/images/products/amber-kiss.png"
                alt="Gazza Perfumes - Simple, Honest Quality"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-onyx-950/90 backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-ivory-400">
                  OUR GOAL
                </p>
                <p className="font-serif text-base text-ivory-100 mt-0.5">
                  Great scents should be accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Short, Direct Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-garnet-400 font-sans font-medium">
              ABOUT GAZZA PERFUMES
            </p>

            <h2 className="font-serif text-3xl sm:text-5xl text-ivory-50 font-normal tracking-tight">
              MORE THAN A FRAGRANCE.
            </h2>

            <div className="space-y-4 text-base text-ivory-300 font-light leading-relaxed max-w-xl">
              <p>
                We believe you don&apos;t need to spend ₹15,000 or ₹25,000 on an imported perfume just to smell fantastic and feel confident.
              </p>
              <p>
                Gazza creates quality, long-lasting fragrances inspired by the world&apos;s most popular luxury scents. Every 60ml bottle is bottled with care for everyday use, work, and memorable evenings.
              </p>
            </div>

            {/* Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-white/[0.08] bg-onyx-900">
                <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-1">
                  Everyday Confidence
                </p>
                <p className="text-xs text-ivory-400 font-light">
                  Fresh, clean, and classic scents designed to be worn anywhere, anytime.
                </p>
              </div>

              <div className="p-4 border border-white/[0.08] bg-onyx-900">
                <p className="text-xs uppercase tracking-wider text-ivory-100 font-semibold mb-1">
                  Special Occasions
                </p>
                <p className="text-xs text-ivory-400 font-light">
                  Warm, rich, and noticeable evening fragrances for events and parties.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#collection"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory-200 hover:text-white transition-colors"
              >
                <span>View All 7 Fragrances</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
