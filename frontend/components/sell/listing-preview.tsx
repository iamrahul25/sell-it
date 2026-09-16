import Image from "next/image";
import { Eye, Heart, ImageIcon, MapPin } from "lucide-react";
import type { SellFormData, UploadedPhoto } from "@/lib/sell";

export function ListingPreview({
  data,
  coverPhoto,
}: {
  data: SellFormData;
  coverPhoto?: UploadedPhoto;
}) {
  const formattedPrice = data.price
    ? `₹${Number(data.price).toLocaleString("en-IN")}`
    : "₹0";

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)]">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-ink">
          <Eye className="size-5" />
        </span>
        <div>
          <h2 className="font-bold">Live Preview</h2>
          <p className="mt-0.5 text-xs text-muted">
            This is how your ad will look to buyers.
          </p>
        </div>
      </div>

      <article className="mt-4 overflow-hidden rounded-xl border border-line">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200">
          {coverPhoto ? (
            <Image
              src={coverPhoto.previewUrl}
              alt="Listing cover preview"
              fill
              unoptimized
              sizes="360px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-center text-muted">
              <div>
                <ImageIcon className="mx-auto size-9 opacity-50" />
                <p className="mt-2 text-xs">Your cover photo</p>
              </div>
            </div>
          )}
          <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white text-muted shadow-sm">
            <Heart className="size-4" />
          </span>
        </div>

        <div className="p-4">
          <h3 className="truncate text-sm font-bold">
            {data.title || "Your Item Title"}
          </h3>
          <p className="mt-1 text-xl font-bold text-brand">{formattedPrice}</p>
          <p className="mt-2 flex items-center gap-1 text-xs text-muted">
            <MapPin className="size-3.5" />
            {[data.area, data.city].filter(Boolean).join(", ")}
          </p>
          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted">
            {data.description || "Your description will appear here..."}
          </p>
        </div>
      </article>
    </section>
  );
}
