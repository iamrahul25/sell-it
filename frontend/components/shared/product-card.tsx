"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, MapPin } from "lucide-react";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({
  product,
  postedLabel,
}: {
  product: Product;
  postedLabel: string;
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <article className="group relative w-[220px] shrink-0 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
      <Link href={`/listing/${product.slug}`} aria-label={`View ${product.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-line/40">
          <Image
            src={`${product.imageUrl}?w=600&q=80`}
            alt={product.title}
            fill
            sizes="220px"
            className="object-cover transition duration-300 group-hover:scale-[1.04]"
          />
        </div>

        <div className="p-3">
          <h3 className="truncate text-sm font-semibold text-ink">{product.title}</h3>
          <p className="mt-1 text-base font-bold text-brand">
            {formatPrice(product.price)}
          </p>
          <div className="mt-2.5 flex items-center justify-between border-t border-line pt-2.5 text-[11px] text-muted">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" strokeWidth={1.75} />
              {product.location.city}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" strokeWidth={1.75} />
              {postedLabel}
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        aria-pressed={isFavourite}
        onClick={() => setIsFavourite((value) => !value)}
        className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-white/95 text-muted shadow-sm transition hover:text-brand"
      >
        <Heart
          className={`size-4 ${isFavourite ? "fill-brand text-brand" : ""}`}
          strokeWidth={2}
        />
      </button>
    </article>
  );
}
