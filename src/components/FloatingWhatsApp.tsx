"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls past hero section
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-up">
      <a
        href={getWhatsAppUrl("Hi Gazza Perfumes, I would like to order a perfume from your collection.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3 bg-onyx-900/95 hover:bg-onyx-950 text-ivory-50 border border-ivory-200/30 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:border-ivory-100 hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp Consultation"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <MessageCircle className="w-4 h-4 text-ivory-100" />
        <span className="text-[11px] uppercase tracking-widest font-sans font-medium pr-1 hidden sm:inline">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
}
