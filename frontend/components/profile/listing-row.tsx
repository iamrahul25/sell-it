"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ellipsis, Pencil, Share2, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/data";

export type ProfileListing = {
  id: string;
  slug: string;
  title: string;
  price?: number;
  imageUrl: string;
  status: "Active" | "Sold" | "Draft";
  meta: string;
  buyer?: string;
};

export function ListingRow({
  listing,
  onDelete,
}: {
  listing: ProfileListing;
  onDelete: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shared, setShared] = useState(false);

  async function shareListing() {
    const url = `${window.location.origin}/listing/${listing.slug}`;
    if (navigator.share) {
      await navigator.share({ title: listing.title, url });
    } else {
      await navigator.clipboard.writeText(url);
      setShared(true);
    }
  }

  function confirmDelete() {
    if (window.confirm(`Delete "${listing.title}"? This cannot be undone.`)) {
      onDelete(listing.id);
    }
  }

  return (
    <article className="relative flex gap-4 rounded-xl border border-line bg-white p-3 transition hover:border-brand/30 hover:shadow-sm sm:items-center">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-28 sm:w-36">
        <Image
          src={`${listing.imageUrl}?auto=format&fit=crop&w=400&q=75`}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 96px, 144px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <Link
          href={
            listing.status === "Draft"
              ? `/sell?edit=${listing.slug}`
              : `/listing/${listing.slug}`
          }
          className="block truncate text-sm font-bold transition hover:text-brand"
        >
          {listing.title}
        </Link>
        {listing.price !== undefined && (
          <p className="mt-1 font-bold text-brand">{formatPrice(listing.price)}</p>
        )}
        <p className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted">
          <span
            className={`rounded-full px-2 py-1 font-semibold ${
              listing.status === "Active"
                ? "bg-brand-soft text-brand"
                : listing.status === "Sold"
                  ? "bg-slate-100 text-slate-600"
                  : "bg-amber-50 text-amber-700"
            }`}
          >
            {listing.status}
          </span>
          <span>• {listing.meta}</span>
        </p>
        {listing.buyer && (
          <p className="mt-2 text-xs text-muted">
            Buyer: <span className="font-semibold text-ink">{listing.buyer}</span>
          </p>
        )}
      </div>

      <div className="relative ml-auto hidden items-center gap-1 sm:flex">
        <Link
          href={`/sell?edit=${listing.slug}`}
          className="flex h-9 items-center gap-1.5 rounded-lg border border-line px-3 text-xs font-semibold text-muted transition hover:border-brand hover:text-brand"
        >
          <Pencil className="size-3.5" />
          {listing.status === "Draft" ? "Continue" : "Edit"}
        </Link>
        <button
          type="button"
          onClick={shareListing}
          className="flex h-9 items-center gap-1.5 rounded-lg border border-line px-3 text-xs font-semibold text-muted transition hover:border-brand hover:text-brand"
        >
          <Share2 className="size-3.5" />
          {shared ? "Copied" : "Share"}
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={`More actions for ${listing.title}`}
          aria-expanded={menuOpen}
          className="grid size-9 place-items-center rounded-lg border border-line text-muted transition hover:text-brand"
        >
          <Ellipsis className="size-4" />
        </button>

      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label={`More actions for ${listing.title}`}
        className="grid size-8 shrink-0 place-items-center rounded-lg text-muted sm:hidden"
      >
        <Ellipsis className="size-4" />
      </button>

      {menuOpen && (
        <div className="absolute right-3 top-12 z-20 w-40 overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-xl sm:top-[72px]">
          {["Edit Listing", "Mark as Sold", "Pause Listing"].map((action) => (
            <button
              key={action}
              type="button"
              className="w-full rounded-lg px-3 py-2 text-left text-xs text-muted hover:bg-slate-50 hover:text-ink"
            >
              {action}
            </button>
          ))}
          <button
            type="button"
            onClick={confirmDelete}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50"
          >
            <Trash2 className="size-3.5" />
            Delete Listing
          </button>
        </div>
      )}
    </article>
  );
}
