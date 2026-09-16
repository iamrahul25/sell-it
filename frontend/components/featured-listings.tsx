"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";

export type FeaturedItem = {
  product: Product;
  postedLabel: string;
};

export function FeaturedListings({ items }: { items: FeaturedItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: direction * 480, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-6">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Featured Listings
        </h2>
        <a
          href="/listings"
          className="flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2"
        >
          View All
          <ArrowRight className="size-4" strokeWidth={2} />
        </a>
      </div>

      <div className="relative mt-4">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
        >
          {items.map(({ product, postedLabel }) => (
            <div key={product._id} className="snap-start">
              <ProductCard product={product} postedLabel={postedLabel} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll listings left"
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-md transition hover:text-brand lg:grid"
        >
          <ChevronLeft className="size-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Scroll listings right"
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 hidden size-9 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-md transition hover:text-brand lg:grid"
        >
          <ChevronRight className="size-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
