"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUp } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { BRAND_NAME, INSTAGRAM_URL, getWhatsAppUrl } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-onyx-950 text-ivory-300 border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo size="lg" />
            <p className="font-serif text-lg text-ivory-200/80 italic mt-2">
              &ldquo;Find your signature scent.&rdquo;
            </p>
            <p className="text-xs text-ivory-400/60 max-w-sm font-light leading-relaxed">
              Curated luxury inspired fragrances designed for modern individuality and lasting presence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-ivory-400/60 font-mono block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link href="#collection" className="hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="#why" className="hover:text-white transition-colors">
                  Why Gazza
                </Link>
              </li>
              <li>
                <Link href="#guide" className="hover:text-white transition-colors">
                  Fragrance Guide
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-ivory-400/60 font-mono block">
              CONNECT
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              {/* Only show Instagram if a URL is provided */}
              {INSTAGRAM_URL && INSTAGRAM_URL.trim().length > 0 && (
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-400/50">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Inspired fragrance boutique.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 uppercase tracking-widest hover:text-ivory-200 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
