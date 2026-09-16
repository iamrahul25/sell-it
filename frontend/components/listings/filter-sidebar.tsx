import { ChevronDown, MapPin } from "lucide-react";
import { listingCategories } from "@/lib/listings";

type FilterSidebarProps = {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  condition: string;
  onConditionChange: (condition: string) => void;
  sellerType: string;
  onSellerTypeChange: (sellerType: string) => void;
};

const conditions = ["New", "Like New", "Good", "Fair", "For Parts"];

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  condition,
  onConditionChange,
  sellerType,
  onSellerTypeChange,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-6">
      <section>
        <h2 className="text-sm font-bold text-ink">Location</h2>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium">
          <MapPin className="size-4 text-brand" />
          Delhi
        </div>
        <button className="mt-3 flex h-10 w-full items-center justify-between rounded-lg border border-line px-3 text-sm text-muted transition hover:border-brand">
          Within 50 km
          <ChevronDown className="size-4" />
        </button>
      </section>

      <section className="border-t border-line pt-5">
        <h2 className="text-sm font-bold text-ink">Categories</h2>
        <div className="mt-3 space-y-2.5">
          {listingCategories.map((category) => (
            <label
              key={category.value}
              className="flex cursor-pointer items-center justify-between text-sm text-muted"
            >
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.value)}
                  onChange={() => onCategoryChange(category.value)}
                  className="size-4 accent-brand"
                />
                {category.label}
              </span>
              <span className="text-xs text-muted/75">{category.count}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="border-t border-line pt-5">
        <h2 className="text-sm font-bold text-ink">Price Range</h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <label className="rounded-lg border border-line px-3 py-2 text-xs text-muted focus-within:border-brand">
            ₹ Min
            <input
              type="number"
              aria-label="Minimum price"
              className="mt-0.5 w-full bg-transparent text-sm text-ink outline-none"
            />
          </label>
          <label className="rounded-lg border border-line px-3 py-2 text-xs text-muted focus-within:border-brand">
            ₹ Max
            <input
              type="number"
              aria-label="Maximum price"
              className="mt-0.5 w-full bg-transparent text-sm text-ink outline-none"
            />
          </label>
        </div>
        <button className="mt-2.5 h-9 w-full rounded-lg border border-brand text-sm font-semibold text-brand transition hover:bg-brand-soft">
          Apply
        </button>
      </section>

      <section className="border-t border-line pt-5">
        <h2 className="text-sm font-bold text-ink">Condition</h2>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {conditions.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={condition === item}
                onChange={() => onConditionChange(condition === item ? "" : item)}
                className="size-4 accent-brand"
              />
              {item}
            </label>
          ))}
        </div>
      </section>

      <section className="border-t border-line pt-5">
        <h2 className="text-sm font-bold text-ink">Seller Type</h2>
        <div className="mt-3 space-y-2.5">
          {["All", "Individual", "Business"].map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-2.5 text-sm text-muted">
              <input
                type="radio"
                name="seller-type"
                checked={sellerType === item}
                onChange={() => onSellerTypeChange(item)}
                className="size-4 accent-brand"
              />
              {item}
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
}
