"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function ProductDescription({
  description,
  images,
  title,
}: {
  description: string;
  images: string[];
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold tracking-tight">Description</h2>
      <p
        className={`mt-4 max-w-3xl whitespace-pre-line text-sm leading-7 text-muted ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-2 flex items-center gap-1 text-sm font-semibold text-brand"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown className={`size-4 transition ${expanded ? "rotate-180" : ""}`} />
      </button>

      <div className="mt-7 flex items-end justify-between">
        <h3 className="text-base font-bold">Images ({images.length})</h3>
        <span className="text-xs text-muted">Click the main image above to zoom</span>
      </div>
      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-[4/3] w-44 shrink-0 overflow-hidden rounded-xl bg-slate-100"
          >
            <Image
              src={`${image}?auto=format&fit=crop&w=500&q=75`}
              alt={`${title}, gallery image ${index + 1}`}
              fill
              sizes="176px"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
