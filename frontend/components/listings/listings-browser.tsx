"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { FilterSidebar } from "@/components/listings/filter-sidebar";
import { ListingCard } from "@/components/listings/listing-card";
import { listings } from "@/lib/listings";

export function ListingsBrowser() {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [condition, setCondition] = useState("");
  const [sellerType, setSellerType] = useState("All");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visibleListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = listings.filter(
      (listing) =>
        (!normalizedQuery ||
          listing.title.toLowerCase().includes(normalizedQuery)) &&
        (!selectedCategories.length ||
          selectedCategories.includes(listing.category)) &&
        (!condition || listing.condition === condition) &&
        (sellerType === "All" || listing.sellerType === sellerType),
    );

    return [...filtered].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return 0;
    });
  }, [condition, query, selectedCategories, sellerType, sort]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(searchInput);
  }

  function toggleCategory(category: string) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  const filterProps = {
    selectedCategories,
    onCategoryChange: toggleCategory,
    condition,
    onConditionChange: setCondition,
    sellerType,
    onSellerTypeChange: setSellerType,
  };

  return (
    <>
      <form
        onSubmit={submitSearch}
        className="mx-auto flex max-w-[1440px] gap-2 px-4 pb-5"
      >
        <label className="flex h-12 flex-1 items-center rounded-xl border border-line bg-white px-4 shadow-sm focus-within:border-brand">
          <Search className="size-5 shrink-0 text-muted" strokeWidth={1.75} />
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search for items, brands, keywords"
            className="h-full w-full bg-transparent px-3 text-sm outline-none placeholder:text-muted"
          />
        </label>
        <button className="h-12 rounded-xl bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Search
        </button>
      </form>

      <div className="border-y border-line bg-[#fbfcfb]">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          <div className="hidden rounded-xl border border-line bg-white p-4 lg:block">
            <FilterSidebar {...filterProps} />
          </div>

          <section className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-ink">
                  {visibleListings.length === listings.length
                    ? "1,248 items found"
                    : `${visibleListings.length} items found`}
                </p>
                {(query ||
                  selectedCategories.length > 0 ||
                  condition ||
                  sellerType !== "All") && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setSearchInput("");
                      setSelectedCategories([]);
                      setCondition("");
                      setSellerType("All");
                    }}
                    className="mt-1 text-xs font-medium text-brand"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-3 text-sm font-medium lg:hidden"
                >
                  <SlidersHorizontal className="size-4" />
                  Filter
                </button>
                <label className="relative flex h-10 items-center rounded-lg border border-line bg-white pl-3 text-xs text-muted">
                  <span className="hidden sm:inline">Sort by</span>
                  <select
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    aria-label="Sort listings"
                    className="h-full appearance-none bg-transparent pl-1 pr-8 text-sm font-medium text-ink outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 size-4 text-muted" />
                </label>
                <div className="hidden overflow-hidden rounded-lg border border-line bg-white sm:flex">
                  <button
                    type="button"
                    aria-label="Grid view"
                    aria-pressed={view === "grid"}
                    onClick={() => setView("grid")}
                    className={`grid size-10 place-items-center transition ${
                      view === "grid" ? "bg-brand-soft text-brand" : "text-muted"
                    }`}
                  >
                    <Grid2X2 className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="List view"
                    aria-pressed={view === "list"}
                    onClick={() => setView("list")}
                    className={`grid size-10 place-items-center border-l border-line transition ${
                      view === "list" ? "bg-brand-soft text-brand" : "text-muted"
                    }`}
                  >
                    <List className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {visibleListings.length ? (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                    : "grid gap-3 xl:grid-cols-2"
                }
              >
                {visibleListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} view={view} />
                ))}
              </div>
            ) : (
              <div className="grid min-h-80 place-items-center rounded-xl border border-dashed border-line bg-white text-center">
                <div>
                  <Search className="mx-auto size-8 text-muted/60" />
                  <p className="mt-3 font-semibold">No listings found</p>
                  <p className="mt-1 text-sm text-muted">Try changing your filters.</p>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-5 text-sm sm:flex-row">
              <p className="text-muted">
                Showing <span className="font-medium text-ink">1–18</span> of{" "}
                <span className="font-medium text-ink">1,248</span> items
              </p>
              <nav aria-label="Pagination" className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`grid size-9 place-items-center rounded-lg text-sm font-medium transition ${
                      page === 1
                        ? "bg-brand text-white"
                        : "text-muted hover:bg-white hover:text-brand"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-1 text-muted">…</span>
                <button className="grid size-9 place-items-center rounded-lg text-sm text-muted hover:bg-white">
                  70
                </button>
                <button aria-label="Next page" className="grid size-9 place-items-center rounded-lg text-muted hover:bg-white">
                  <ChevronRight className="size-4" />
                </button>
              </nav>
              <label className="flex items-center gap-2 text-muted">
                Items per page
                <select className="h-9 rounded-lg border border-line bg-white px-2 text-ink outline-none">
                  <option>18</option>
                  <option>36</option>
                  <option>54</option>
                </select>
              </label>
            </div>
          </section>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <div className="absolute inset-y-0 left-0 w-[min(88vw,340px)] overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                aria-label="Close filters"
                onClick={() => setFiltersOpen(false)}
                className="grid size-9 place-items-center rounded-full bg-slate-100"
              >
                <X className="size-5" />
              </button>
            </div>
            <FilterSidebar {...filterProps} />
            <button
              onClick={() => setFiltersOpen(false)}
              className="mt-6 h-11 w-full rounded-lg bg-brand text-sm font-semibold text-white"
            >
              Show {visibleListings.length} items
            </button>
          </div>
        </div>
      )}
    </>
  );
}
