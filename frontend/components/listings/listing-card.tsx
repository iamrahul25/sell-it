"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/data";
import type { Listing } from "@/lib/listings";

export function ListingCard({
  listing,
  view,
}: {
  listing: Listing;
  view: "grid" | "list";
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)]"
    >
      <Link
        href={`/listings/${listing.slug}`}
        aria-label={`View ${listing.title}`}
        className={view === "list" ? "flex" : "block"}
      >
        <div
          className={`relative overflow-hidden bg-slate-100 ${
            view === "list" ? "min-h-36 w-40 shrink-0 sm:w-52" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={`${listing.imageUrl}?w=600&q=80`}
            alt={listing.title}
            fill
            sizes={
              view === "list"
                ? "(max-width: 640px) 160px, 208px"
                : "(max-width: 640px) 50vw, 190px"
            }
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className={`min-w-0 p-3 ${view === "list" ? "flex-1 sm:p-4" : ""}`}>
          <h3 className="truncate text-sm font-semibold text-ink transition group-hover:text-brand-dark">
            {listing.title}
          </h3>
          <p className="mt-1.5 text-lg font-bold tracking-tight text-ink">
            {formatPrice(listing.price)}
          </p>
          <p className="mt-3 flex items-center gap-1 truncate text-[11px] text-muted">
            <MapPin className="size-3.5 shrink-0" strokeWidth={1.75} />
            {listing.location} · {listing.postedAt}
          </p>
          {view === "list" && (
            <p className="mt-3 hidden text-xs text-muted sm:block">
              {listing.condition} condition · {listing.sellerType} seller
            </p>
          )}
        </div>
      </Link>
      <button
        type="button"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={isFavorite}
        onClick={() => setIsFavorite((value) => !value)}
        className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-white/95 text-slate-500 shadow-sm transition hover:scale-105 hover:text-brand"
      >
        <Heart
          className={`size-4 ${isFavorite ? "fill-brand text-brand" : ""}`}
          strokeWidth={2}
        />
      </button>
    </article>
  );
}
