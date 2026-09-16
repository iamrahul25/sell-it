import {
  Box,
  CalendarDays,
  Cpu,
  Gauge,
  MapPin,
  Palette,
  RotateCcw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { formatPrice } from "@/lib/data";
import type { Listing } from "@/lib/listings";

type Specification = {
  label: string;
  value: string;
  icon: typeof Box;
};

function getSpecifications(listing: Listing): Specification[] {
  if (listing.category === "bikes" || listing.category === "cars") {
    return [
      { label: "Brand", value: listing.title.split(" ")[0], icon: ShieldCheck },
      { label: "Model", value: listing.title, icon: Box },
      { label: "Year", value: "2021", icon: CalendarDays },
      { label: "KM Driven", value: "18,000 km", icon: Gauge },
      { label: "Ownership", value: "First owner", icon: RotateCcw },
      { label: "Condition", value: listing.condition, icon: ShieldCheck },
    ];
  }

  if (listing.category === "laptops") {
    return [
      { label: "Brand", value: listing.title.split(" ")[0], icon: ShieldCheck },
      { label: "Model", value: listing.title, icon: Box },
      { label: "RAM", value: "8 GB", icon: Cpu },
      { label: "Storage", value: "256 GB SSD", icon: Smartphone },
      { label: "Processor", value: "Apple M1", icon: Cpu },
      { label: "Condition", value: listing.condition, icon: ShieldCheck },
    ];
  }

  if (listing.category === "mobiles") {
    return [
      { label: "Brand", value: "Apple", icon: ShieldCheck },
      { label: "Model", value: "iPhone 13", icon: Smartphone },
      { label: "Storage", value: "128 GB", icon: Box },
      { label: "Condition", value: listing.condition, icon: ShieldCheck },
      { label: "Color", value: "Starlight", icon: Palette },
      { label: "Warranty", value: "No", icon: CalendarDays },
    ];
  }

  return [
    { label: "Brand", value: listing.title.split(" ")[0], icon: ShieldCheck },
    { label: "Category", value: listing.category.replace("-", " "), icon: Box },
    { label: "Condition", value: listing.condition, icon: ShieldCheck },
    { label: "Age", value: "1–2 years", icon: CalendarDays },
  ];
}

export function ProductInfo({ listing }: { listing: Listing }) {
  const specifications = getSpecifications(listing);
  const originalPrice = Math.round(listing.price / 0.65);

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          For Sale
        </span>
        <span className="text-xs text-muted">Posted {listing.postedAt}</span>
      </div>

      <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink">
        {listing.title}
      </h1>
      <p className="mt-3 text-3xl font-bold tracking-tight text-brand">
        {formatPrice(listing.price)}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-muted line-through">{formatPrice(originalPrice)} new</span>
        <span className="rounded-full bg-brand-soft px-2 py-1 font-bold text-brand">
          35% OFF
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-y border-line py-4 text-sm">
        <span className="flex items-center gap-2 text-muted">
          <MapPin className="size-4 text-brand" />
          {listing.location}, Delhi
        </span>
        <a href="#map" className="font-semibold text-brand hover:text-brand-dark">
          View on Map
        </a>
      </div>

      <section className="mt-6">
        <h2 className="text-base font-bold">Specifications</h2>
        <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-xl border border-line">
          {specifications.map(({ label, value, icon: Icon }, index) => (
            <div
              key={label}
              className={`p-3.5 ${
                index % 2 === 0 ? "border-r border-line" : ""
              } ${index >= 2 ? "border-t border-line" : ""}`}
            >
              <p className="flex items-center gap-1.5 text-[11px] text-muted">
                <Icon className="size-3.5 text-brand" />
                {label}
              </p>
              <p className="mt-1 truncate text-sm font-semibold capitalize text-ink">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
