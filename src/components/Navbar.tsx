"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { getWhatsAppUrl } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "Why Gazza", href: "#why" },
    { label: "Fragrance Guide", href: "#guide" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-onyx-950/90 backdrop-blur-md border-b border-white/[0.06] py-3.5"
          : "bg-gradient-to-b from-onyx-950/95 via-onyx-950/60 to-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <BrandLogo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-ivory-200/80 hover:text-ivory-50 transition-colors duration-300 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-garnet-700 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={getWhatsAppUrl("Hi Gazza Perfumes, I would like to order a perfume from your collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-ivory-50 text-onyx-950 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white active:scale-[0.99]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-onyx-950" />
            <span>Order on WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center space-x-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="p-2 text-ivory-200 hover:text-ivory-50"
          >
            <MessageCircle className="w-5 h-5 text-ivory-200" />
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-ivory-200 hover:text-ivory-50 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[60px] bg-onyx-950/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-7 py-10 transition-all duration-500 sm:hidden border-t border-white/5 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-6 pt-6">
          <span className="text-[10px] uppercase tracking-widest text-ivory-400/60">
            Navigation
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif tracking-widest text-ivory-100 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4 pt-8 border-t border-white/10">
          <p className="text-xs text-ivory-300/70 font-light tracking-wider">
            Direct Fragrance Consultation
          </p>
          <a
            href={getWhatsAppUrl("Hi Gazza Perfumes, I would like to explore your fragrances.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-3 py-3.5 bg-ivory-50 text-onyx-950 text-xs font-semibold uppercase tracking-[0.25em] transition-opacity hover:opacity-90 active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
