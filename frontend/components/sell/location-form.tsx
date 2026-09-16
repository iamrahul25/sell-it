import { MapPin } from "lucide-react";
import type { SellFormData } from "@/lib/sell";

type LocationFormProps = {
  data: SellFormData;
  updateField: <Key extends keyof SellFormData>(
    field: Key,
    value: SellFormData[Key],
  ) => void;
};

export function LocationForm({ data, updateField }: LocationFormProps) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
          <MapPin className="size-5" />
        </span>
        <div>
          <h2 className="font-bold">Location</h2>
          <p className="mt-0.5 text-xs text-muted">Where is your item located?</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          City <span className="text-red-500">*</span>
          <select
            required
            value={data.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm outline-none focus:border-brand"
          >
            {["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"].map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Area / Locality
          <input
            value={data.area}
            onChange={(event) => updateField("area", event.target.value)}
            placeholder="e.g. Rohini, Dwarka..."
            className="mt-2 h-11 w-full rounded-lg border border-line px-3.5 text-sm outline-none placeholder:text-muted/70 focus:border-brand"
          />
        </label>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-3.5">
        <input
          type="checkbox"
          checked={data.showExactLocation}
          onChange={(event) => updateField("showExactLocation", event.target.checked)}
          className="mt-0.5 size-4 accent-brand"
        />
        <span>
          <span className="block text-sm font-semibold">Show exact location on map</span>
          <span className="mt-0.5 block text-xs text-muted">
            Buyers will see the exact location on the map
          </span>
        </span>
      </label>
    </section>
  );
}
