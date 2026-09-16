import Image from "next/image";
import { Leaf, Plus, ShieldCheck, Users } from "lucide-react";

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Safe & Secure Transactions" },
  { icon: Users, label: "Local Buyers & Sellers" },
  { icon: Leaf, label: "Better for the Planet" },
];

export function HeroSection() {
  return (
    <section className="bg-[#f8f7f2]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-brand">
            GIVE ITEMS A SECOND LIFE
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Sell what you don’t use.
            <br />
            Buy what you <span className="text-brand">love.</span>
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            A trusted community marketplace for buying and selling pre-owned
            items near you.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button className="flex h-12 items-center gap-2 rounded-lg bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">
              <span className="grid size-5 place-items-center rounded-full bg-white/25">
                <Plus className="size-3.5" strokeWidth={3} />
              </span>
              Post Your Ad
            </button>
            <button className="flex h-12 items-center rounded-lg border border-ink/15 bg-white px-6 text-sm font-semibold text-ink transition hover:border-ink/35">
              Browse Items
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <Icon className="size-4" strokeWidth={2} />
                </span>
                <span className="max-w-[110px] text-xs font-medium leading-snug text-ink">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80"
            alt="Pre-owned furniture, instruments and gadgets arranged in a styled living room"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
