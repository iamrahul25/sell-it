import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { ListingsBrowser } from "@/components/listings/listings-browser";

export const metadata: Metadata = {
  title: "All Listings | Sell-it",
  description: "Explore pre-owned items available from sellers near you.",
};

export default function ListingsPage() {
  return (
    <main>
      <section className="bg-[#f8f7f2]">
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:py-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted"
          >
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-ink">All Listings</span>
          </nav>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                All Listings
              </h1>
              <p className="mt-2 text-sm text-muted sm:text-base">
                Explore thousands of pre-owned items from people near you.
              </p>
            </div>

            <div className="flex items-center justify-between gap-5 rounded-xl border border-brand/15 bg-brand-soft px-5 py-4 sm:min-w-[370px]">
              <div className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-brand">
                  <Sparkles className="size-4" />
                </span>
                <p className="text-sm font-semibold text-ink">
                  Good things find new homes
                </p>
              </div>
              <Link
                href="/sell"
                className="flex shrink-0 items-center gap-1 text-xs font-bold text-brand transition hover:gap-2"
              >
                Post Your Ad
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8f7f2]">
        <ListingsBrowser />
      </div>
    </main>
  );
}
