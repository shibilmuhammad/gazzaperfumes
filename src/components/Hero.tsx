"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles, Droplets, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative bg-onyx-950 pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden border-b border-white/[0.06]">
      {/* Subtle Warm Gradient in Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(66,16,23,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct, Powerful Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-ivory-200 font-sans">
                SPECIAL LAUNCH OFFER &bull; FLAT 60% OFF
              </span>
            </div>

            {/* Simple, Bold Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-ivory-50 leading-[1.05]">
              PREMIUM FRAGRANCES.
              <br />
              <span className="italic text-ivory-200 font-light">AFFORDABLE PRICES.</span>
            </h1>

            {/* Simple Supporting Text */}
            <p className="text-base sm:text-xl text-ivory-300 font-light max-w-lg leading-relaxed">
              Inspired by the fragrances you love.
              <br className="hidden sm:inline" />
              Made for everyday confidence and special nights.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={getWhatsAppUrl("Hi Gazza Perfumes, I would like to order a perfume from your collection.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ivory-50 text-onyx-950 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-onyx-950" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <Link
                href="#collection"
                className="inline-flex items-center justify-center px-7 py-4 border border-ivory-200/25 text-ivory-100 text-xs sm:text-sm uppercase tracking-[0.22em] transition-all duration-300 hover:border-ivory-100/60 hover:text-white hover:bg-white/[0.04]"
              >
                <span>VIEW COLLECTION</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Real Gazza Bottle Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-square sm:aspect-[4/5] overflow-hidden border border-white/10 bg-onyx-900 shadow-2xl">
              <Image
                src="/images/products/ly-19.png"
                alt="Gazza Perfumes - Scents That Leave A Mark"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Quick Card Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-onyx-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ivory-400">
                    60 ML &bull; EAU DE PARFUM
                  </p>
                  <p className="font-serif text-base text-ivory-100">
                    Now ₹799 <span className="text-xs text-ivory-400 line-through ml-1.5">₹1,999</span>
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-400 border border-emerald-500/30 px-2 py-0.5">
                  60% OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL VALUE PROPOSITION ROW (At-a-glance points) */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-onyx-900/50 border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-ivory-200" />
            </div>
            <div>
              <p className="font-serif text-lg text-ivory-50 font-normal leading-tight">
                60 ML
              </p>
              <p className="text-[11px] uppercase tracking-wider text-ivory-400 mt-0.5">
                Full Size Bottle
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-onyx-900/50 border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-ivory-200" />
            </div>
            <div>
              <p className="font-serif text-lg text-ivory-50 font-normal leading-tight">
                EAU DE PARFUM
              </p>
              <p className="text-[11px] uppercase tracking-wider text-ivory-400 mt-0.5">
                Long Lasting
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-onyx-900/50 border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-ivory-200" />
            </div>
            <div>
              <p className="font-serif text-lg text-ivory-50 font-normal leading-tight">
                INSPIRED SCENTS
              </p>
              <p className="text-[11px] uppercase tracking-wider text-ivory-400 mt-0.5">
                Luxury Fragrance Styles
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-onyx-900/50 border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="font-serif text-lg text-ivory-50 font-normal leading-tight">
                EASY ORDERING
              </p>
              <p className="text-[11px] uppercase tracking-wider text-emerald-400 mt-0.5">
                Direct On WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
