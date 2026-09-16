"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, X, ZoomIn } from "lucide-react";

export function ProductGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  function move(direction: 1 | -1) {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }

  return (
    <>
      <div className="flex min-w-0 flex-col-reverse gap-3 sm:flex-row">
        <div className="no-scrollbar flex gap-2 overflow-x-auto sm:w-[70px] sm:shrink-0 sm:flex-col">
          {images.slice(0, 6).map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={`relative size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 transition ${
                activeIndex === index ? "border-brand" : "border-transparent"
              }`}
            >
              <Image
                src={`${image}?auto=format&fit=crop&w=160&q=70`}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
              {index === 5 && images.length > 6 && (
                <span className="absolute inset-0 grid place-items-center bg-ink/60 text-xs font-bold text-white">
                  +{images.length - 6}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="relative aspect-square min-w-0 flex-1 overflow-hidden rounded-2xl bg-[#f3f5f4]">
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            aria-label="Zoom product image"
            className="absolute inset-0 z-10 cursor-zoom-in"
          />
          <Image
            src={`${images[activeIndex]}?auto=format&fit=crop&w=1100&q=88`}
            alt={`${title}, image ${activeIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-contain p-5"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setIsSaved((value) => !value);
            }}
            aria-label={isSaved ? "Remove from saved items" : "Save item"}
            aria-pressed={isSaved}
            className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-white text-muted shadow-md transition hover:scale-105 hover:text-brand"
          >
            <Heart className={`size-5 ${isSaved ? "fill-brand text-brand" : ""}`} />
          </button>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-md transition hover:text-brand"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink shadow-md transition hover:text-brand"
          >
            <ChevronRight className="size-5" />
          </button>
          <span className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-medium text-white">
            <ZoomIn className="size-3.5" />
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4"
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="size-6" />
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={`${images[activeIndex]}?auto=format&fit=contain&w=1800&q=92`}
              alt={`${title}, enlarged image`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
