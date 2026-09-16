import { Heart } from "lucide-react";
import { ListingCard } from "@/components/listings/listing-card";
import { listings } from "@/lib/listings";

export function FavouritesGrid() {
  const favourites = [listings[1], listings[2], listings[6], listings[11]];

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Heart className="size-5 fill-brand text-brand" />
          Favourite Listings
        </h2>
        <p className="mt-1 text-xs text-muted">Items you&apos;ve saved for later.</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {favourites.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            view="grid"
            defaultFavorite
          />
        ))}
      </div>
    </section>
  );
}
