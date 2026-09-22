"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Scents" },
    { id: "men", label: "For Men" },
    { id: "fresh", label: "Fresh & Clean" },
    { id: "sweet", label: "Sweet & Feminine" },
    { id: "bold", label: "Bold & Different" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="collection" className="py-20 sm:py-28 bg-onyx-950 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-garnet-400 font-sans font-medium mb-2">
              7 INSPIRED FAVORITES
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl text-ivory-50 font-normal tracking-tight">
              FIND YOUR SCENT
            </h2>
            <p className="mt-2 text-base text-ivory-300 font-light">
              Choose the fragrance that matches your style.
            </p>
          </div>

          {/* Simple Category Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedCategory(filter.id)}
                className={`text-xs uppercase tracking-[0.15em] px-3.5 py-2 transition-all duration-300 border ${
                  selectedCategory === filter.id
                    ? "border-ivory-100 bg-ivory-50 text-onyx-950 font-semibold"
                    : "border-white/10 text-ivory-300 hover:text-ivory-100 hover:border-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>

        {/* Simple Honest Note */}
        <div className="mt-14 p-5 sm:p-6 border border-white/[0.08] bg-onyx-900/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-ivory-400 font-light leading-relaxed">
            Note: All perfumes are independent inspired fragrances by Gazza. Brand names mentioned indicate scent inspiration only.
          </p>
        </div>
      </div>
    </section>
  );
}
