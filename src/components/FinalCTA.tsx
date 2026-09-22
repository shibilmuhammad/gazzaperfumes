"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, CONSULTATION_WHATSAPP_MESSAGE } from "@/config/site";

export default function FinalCTA() {
  const consultationUrl = getWhatsAppUrl(CONSULTATION_WHATSAPP_MESSAGE);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-onyx-900 border-b border-white/[0.06] text-center">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-garnet-400 font-sans font-medium mb-3">
          PERSONAL HELP
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-ivory-50 tracking-tight mb-4">
          FIND YOUR FRAGRANCE.
        </h2>

        <p className="text-base sm:text-lg text-ivory-300 font-light leading-relaxed mb-8">
          Not sure which one to choose?
          <br />
          Talk to us on WhatsApp and we will recommend the right one for you.
        </p>

        <div className="flex justify-center">
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ivory-50 text-onyx-950 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-[0.99]"
            aria-label="Chat with Gazza on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-onyx-950" />
            <span>CHAT WITH GAZZA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
