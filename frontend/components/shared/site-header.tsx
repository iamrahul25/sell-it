"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, MapPin, Plus, Search, User } from "lucide-react";

function LocationPill() {
  return (
    <button className="flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-line px-3.5 text-sm font-medium text-ink transition hover:border-brand hover:text-brand">
      <MapPin className="size-4 text-muted" strokeWidth={1.75} />
      Delhi
      <ChevronDown className="size-4 text-muted" strokeWidth={1.75} />
    </button>
  );
}

function SearchBar() {
  return (
    <div className="flex h-10 w-full items-center rounded-full border border-line pl-3.5 pr-1 focus-within:border-brand">
      <Search className="size-4 shrink-0 text-muted" strokeWidth={1.75} />
      <input
        type="search"
        placeholder="Search for anything (e.g. iPhone, bike, sofa...)"
        className="h-full w-full bg-transparent px-2.5 text-sm outline-none placeholder:text-muted"
      />
      <button
        aria-label="Search"
        className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
      >
        <Search className="size-4" strokeWidth={2.25} />
      </button>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-4 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-lg font-bold text-white">
            S
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">Sell-it</span>
            <span className="hidden text-[10px] text-muted lg:block">
              Buy. Sell. Reuse. Better Together.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          <Link
            href="/listings"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              pathname === "/listings"
                ? "bg-brand-soft text-brand"
                : "text-ink hover:text-brand"
            }`}
          >
            Buy
          </Link>
          <Link
            href="/sell"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              pathname === "/sell"
                ? "bg-brand-soft text-brand"
                : "text-ink hover:text-brand"
            }`}
          >
            Sell
          </Link>
          <button className="flex items-center gap-1 px-2 text-sm font-medium text-ink transition hover:text-brand">
            Categories
            <ChevronDown className="size-4" strokeWidth={1.75} />
          </button>
        </nav>

        <div className="hidden flex-1 items-center gap-2.5 md:flex">
          <LocationPill />
          <div className="max-w-[560px] flex-1">
            <SearchBar />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1 md:gap-3">
          <button
            aria-label="Notifications"
            className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-brand-soft hover:text-brand"
          >
            <Bell className="size-5" strokeWidth={1.75} />
          </button>
          <button className="flex items-center gap-2 rounded-full pl-1 pr-2 text-sm font-medium transition hover:text-brand">
            <span className="grid size-8 place-items-center rounded-full bg-line/70 text-muted">
              <User className="size-4" strokeWidth={1.75} />
            </span>
            <span className="hidden sm:block">Sign In</span>
          </button>
          <Link
            href="/sell"
            className="flex h-10 items-center gap-1.5 rounded-full bg-brand px-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <Plus className="size-4" strokeWidth={2.5} />
            <span className="hidden sm:block">Post Ad</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line px-4 py-2.5 md:hidden">
        <LocationPill />
        <SearchBar />
      </div>
    </header>
  );
}
