import { ArrowRight, Leaf, Recycle, Sprout } from "lucide-react";

export function SustainabilityBanner() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-6">
      <div className="flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-brand-soft px-6 py-7 md:flex-row md:gap-8 md:px-8">
        <div className="relative grid size-24 shrink-0 place-items-center rounded-2xl bg-white/80">
          <Recycle className="size-11 text-brand" strokeWidth={1.5} />
          <Leaf
            className="absolute -left-1 -top-1 size-5 text-brand/60"
            strokeWidth={2}
          />
          <Sprout
            className="absolute -bottom-1 -right-1 size-5 text-brand/60"
            strokeWidth={2}
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-brand">
            A GREENER TOMORROW
          </p>
          <h2 className="mt-1.5 text-xl font-bold tracking-tight sm:text-2xl">
            Reuse Today. A Better Tomorrow.
          </h2>
          <p className="mt-1.5 text-sm text-muted">
            Buy and sell pre-owned items. Reduce waste. Support a sustainable
            future.
          </p>
        </div>

        <button className="flex h-11 shrink-0 items-center gap-2 rounded-lg bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">
          Start Selling
          <ArrowRight className="size-4" strokeWidth={2.25} />
        </button>
      </div>
    </section>
  );
}
