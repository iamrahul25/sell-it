import { ClipboardList } from "lucide-react";
import { subcategories, type SellFormData } from "@/lib/sell";

type BasicInformationProps = {
  data: SellFormData;
  updateField: <Key extends keyof SellFormData>(
    field: Key,
    value: SellFormData[Key],
  ) => void;
};

const inputClass =
  "mt-2 h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/10";

export function BasicInformation({ data, updateField }: BasicInformationProps) {
  const availableSubcategories = subcategories[data.category] ?? [];

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
          <ClipboardList className="size-5" />
        </span>
        <div>
          <h2 className="font-bold">Basic Information</h2>
          <p className="mt-0.5 text-xs text-muted">Tell us what you&apos;re selling.</p>
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-semibold">
          Title <span className="text-red-500">*</span>
          <input
            required
            maxLength={100}
            value={data.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="e.g. iPhone 14 Pro, Wooden Dining Table..."
            className={inputClass}
          />
        </label>
        <p className="mt-1 text-right text-[11px] text-muted">{data.title.length}/100</p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Category <span className="text-red-500">*</span>
          <select
            required
            value={data.category}
            onChange={(event) => {
              updateField("category", event.target.value);
              updateField("subcategory", "");
            }}
            className={inputClass}
          >
            <option value="">Select a category</option>
            {Object.keys(subcategories).map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Subcategory <span className="text-red-500">*</span>
          <select
            required
            disabled={!data.category}
            value={data.subcategory}
            onChange={(event) => updateField("subcategory", event.target.value)}
            className={`${inputClass} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-muted`}
          >
            <option value="">Select a subcategory</option>
            {availableSubcategories.map((subcategory) => (
              <option key={subcategory}>{subcategory}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Price (₹) <span className="text-red-500">*</span>
          <input
            required
            min="0"
            type="number"
            value={data.price}
            onChange={(event) => updateField("price", event.target.value)}
            placeholder="e.g. 25000"
            className={inputClass}
          />
        </label>
        <label className="text-sm font-semibold">
          Condition <span className="text-red-500">*</span>
          <select
            required
            value={data.condition}
            onChange={(event) => updateField("condition", event.target.value)}
            className={inputClass}
          >
            <option value="">Select condition</option>
            {["New", "Like New", "Good", "Fair", "For Parts"].map((condition) => (
              <option key={condition}>{condition}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4">
        <label className="text-sm font-semibold">
          Description <span className="text-red-500">*</span>
          <textarea
            required
            maxLength={1000}
            rows={6}
            value={data.description}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="Describe your item (brand, model, condition, included items, reason for selling, etc.)"
            className="mt-2 w-full resize-y rounded-lg border border-line px-3.5 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
        </label>
        <p className="mt-1 text-right text-[11px] text-muted">
          {data.description.length}/1000
        </p>
      </div>
    </section>
  );
}
