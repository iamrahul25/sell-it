import { Leaf, PackageOpen, Recycle } from "lucide-react";

export function PromotionalBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-brand/10 bg-gradient-to-br from-brand-soft to-[#ddf7e7] p-6">
      <div className="relative z-10 max-w-[210px]">
        <p className="text-xl font-bold leading-tight">
          Turn your unused items into{" "}
          <span className="text-brand">opportunities</span>
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Sell what you don&apos;t use. Help someone who does.
        </p>
      </div>
      <div className="absolute -bottom-6 right-3 grid size-28 place-items-center rounded-full bg-white/55 text-brand">
        <PackageOpen className="size-14" strokeWidth={1.4} />
      </div>
      <Leaf className="absolute right-20 top-5 size-7 rotate-12 text-brand/45" />
      <Recycle className="absolute bottom-5 right-4 size-6 text-brand/50" />
    </section>
  );
}
