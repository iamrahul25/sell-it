"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Heart,
  MailCheck,
  MessageCircle,
  PhoneCall,
  Share2,
  Star,
  User,
} from "lucide-react";
import type { Seller } from "@/lib/data";

const fallbackSeller: Seller = {
  _id: "seller-default",
  name: "Rahul Kumar",
  rating: 4.8,
  reviews: 12,
  isVerified: true,
  memberSince: "2024-01-18T00:00:00.000Z",
};

export function SellerCard({ seller = fallbackSeller }: { seller?: Seller }) {
  const [isSaved, setIsSaved] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [shared, setShared] = useState(false);
  const joined = new Date(seller.memberSince).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

  async function shareListing() {
    if (navigator.share) {
      await navigator.share({ title: document.title, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
    }
  }

  return (
    <aside className="rounded-2xl border border-line bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)]">
      <div className="flex items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
          <User className="size-6" />
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-bold text-ink">
            {seller.name}
            {seller.isVerified && <BadgeCheck className="size-4 fill-brand text-white" />}
          </p>
          <p className="mt-0.5 text-xs text-muted">Member since {joined}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-[#f8f7f2] px-3 py-2.5 text-sm">
        <Star className="size-4 fill-amber-400 text-amber-400" />
        <span className="font-bold">{seller.rating}</span>
        <span className="text-muted">({seller.reviews} reviews)</span>
      </div>

      <ul className="mt-4 space-y-2 text-xs text-muted">
        <li className="flex items-center gap-2">
          <PhoneCall className="size-4 text-brand" />
          Phone Verified
        </li>
        <li className="flex items-center gap-2">
          <MailCheck className="size-4 text-brand" />
          Email Verified
        </li>
      </ul>

      <Link
        href="/messages"
        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand text-sm font-bold text-white transition hover:bg-brand-dark"
      >
        <MessageCircle className="size-4" />
        Chat with Seller
      </Link>
      <button
        type="button"
        onClick={() => setShowOffer((value) => !value)}
        className="mt-2.5 h-11 w-full rounded-lg border border-brand text-sm font-bold text-brand transition hover:bg-brand-soft"
      >
        Make an Offer
      </button>

      {showOffer && (
        <div className="mt-3 flex gap-2">
          <input
            type="number"
            aria-label="Your offer"
            placeholder="₹ Your offer"
            className="h-10 min-w-0 flex-1 rounded-lg border border-line px-3 text-sm outline-none focus:border-brand"
          />
          <button className="rounded-lg bg-ink px-3 text-xs font-bold text-white">
            Send
          </button>
        </div>
      )}

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setIsSaved((value) => !value)}
          className="flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-50 text-sm font-semibold text-muted transition hover:text-brand"
        >
          <Heart className={`size-4 ${isSaved ? "fill-brand text-brand" : ""}`} />
          {isSaved ? "Saved" : "Save"}
        </button>
        <button
          type="button"
          onClick={shareListing}
          className="flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-50 text-sm font-semibold text-muted transition hover:text-brand"
        >
          <Share2 className="size-4" />
          {shared ? "Copied" : "Share"}
        </button>
      </div>
    </aside>
  );
}
