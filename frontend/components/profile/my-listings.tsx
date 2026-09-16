"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { ListingRow, type ProfileListing } from "@/components/profile/listing-row";
import { listings } from "@/lib/listings";

type ListingTab = "Active" | "Sold" | "Draft";

const initialListings: ProfileListing[] = [
  {
    ...listings[0],
    status: "Active",
    meta: "2 hours ago",
  },
  {
    ...listings[9],
    title: "Office Chair",
    status: "Active",
    meta: "5 hours ago",
  },
  {
    ...listings[8],
    status: "Active",
    meta: "1 day ago",
  },
  {
    ...listings[1],
    status: "Sold",
    meta: "Sep 12",
    buyer: "Amit Sharma",
  },
  {
    ...listings[4],
    status: "Sold",
    meta: "Sep 8",
    buyer: "Priya Verma",
  },
  {
    ...listings[1],
    id: "draft-gaming-laptop",
    slug: "gaming-laptop-draft",
    title: "Gaming Laptop",
    price: undefined,
    status: "Draft",
    meta: "Saved yesterday",
  },
];

export function MyListings() {
  const [activeTab, setActiveTab] = useState<ListingTab>("Active");
  const [items, setItems] = useState(initialListings);
  const counts = {
    Active: items.filter((item) => item.status === "Active").length,
    Sold: items.filter((item) => item.status === "Sold").length,
    Draft: items.filter((item) => item.status === "Draft").length,
  };
  const visibleItems = items.filter((item) => item.status === activeTab);

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold">My Listings</h2>
        <Link
          href="/sell"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-brand px-3 text-xs font-bold text-white transition hover:bg-brand-dark"
        >
          <Plus className="size-4" />
          <span className="hidden sm:inline">Post New Ad</span>
          <span className="sm:hidden">Post Ad</span>
        </Link>
      </div>

      <div className="mt-5 flex gap-6 border-b border-line">
        {(["Active", "Sold", "Draft"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-sm font-semibold transition ${
              activeTab === tab ? "text-brand" : "text-muted hover:text-ink"
            }`}
          >
            {tab === "Draft" ? "Drafts" : tab} ({counts[tab]})
            {activeTab === tab && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {visibleItems.map((listing) => (
          <ListingRow
            key={listing.id}
            listing={listing}
            onDelete={(id) =>
              setItems((current) => current.filter((item) => item.id !== id))
            }
          />
        ))}
      </div>
    </section>
  );
}
