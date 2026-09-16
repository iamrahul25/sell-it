import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ListingCard } from "@/components/listings/listing-card";
import type { Listing } from "@/lib/listings";

export function SimilarListings({ listings }: { listings: Listing[] }) {
  return (
    <section>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Keep exploring
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
            Similar Listings
          </h2>
        </div>
        <Link
          href="/listings"
          className="flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2"
        >
          View All
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-2">
        {listings.map((listing) => (
          <div key={listing.id} className="w-[220px] shrink-0">
            <ListingCard listing={listing} view="grid" />
          </div>
        ))}
      </div>
    </section>
  );
}
