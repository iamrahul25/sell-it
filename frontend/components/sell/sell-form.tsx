"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Save } from "lucide-react";
import { BasicInformation } from "@/components/sell/basic-information";
import { HelpCard } from "@/components/sell/help-card";
import { ListingPreview } from "@/components/sell/listing-preview";
import { ListingTips } from "@/components/sell/listing-tips";
import { LocationForm } from "@/components/sell/location-form";
import { PhotoUploader } from "@/components/sell/photo-uploader";
import { PromotionalBanner } from "@/components/sell/promotional-banner";
import {
  initialSellForm,
  type SellFormData,
  type UploadedPhoto,
} from "@/lib/sell";

export function SellForm() {
  const [data, setData] = useState<SellFormData>(initialSellForm);
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [status, setStatus] = useState("");

  function updateField<Key extends keyof SellFormData>(
    field: Key,
    value: SellFormData[Key],
  ) {
    setData((current) => ({ ...current, [field]: value }));
    setStatus("");
  }

  const isValid = Boolean(
    data.title.trim() &&
      data.category &&
      data.subcategory &&
      Number(data.price) > 0 &&
      data.condition &&
      data.description.trim() &&
      data.city,
  );

  function saveDraft() {
    localStorage.setItem("sell-it-draft", JSON.stringify(data));
    setStatus("Draft saved on this device.");
  }

  function continueToPhotos(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;
    setStatus("Item details complete — ready for photo review.");
  }

  return (
    <form onSubmit={continueToPhotos}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(300px,.75fr)]">
        <div className="space-y-5">
          <BasicInformation data={data} updateField={updateField} />
          <PhotoUploader photos={photos} setPhotos={setPhotos} />
          <LocationForm data={data} updateField={updateField} />

          <div className="sticky bottom-0 z-30 -mx-4 flex items-center justify-between gap-3 border-t border-line bg-white/95 px-4 py-3 backdrop-blur md:static md:mx-0 md:rounded-2xl md:border md:p-4">
            <div>
              <button
                type="button"
                onClick={saveDraft}
                className="flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                <Save className="size-4" />
                <span className="hidden sm:inline">Save as Draft</span>
                <span className="sm:hidden">Save</span>
              </button>
              {status && (
                <p aria-live="polite" className="absolute bottom-full left-4 mb-2 rounded-lg bg-ink px-3 py-2 text-xs text-white md:static md:mt-2 md:bg-transparent md:p-0 md:text-brand">
                  {status}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-bold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Next: Add Photos
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-20">
          <PromotionalBanner />
          <ListingPreview data={data} coverPhoto={photos[0]} />
          <ListingTips />
          <HelpCard />
        </aside>
      </div>
    </form>
  );
}
