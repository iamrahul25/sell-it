import { Heart, Leaf, Play, ShieldCheck, Smartphone, Users } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Heart, label: "Trusted by thousands" },
  { icon: ShieldCheck, label: "Secure & private" },
  { icon: Leaf, label: "Help the environment" },
  { icon: Users, label: "Local community" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-[#f8fafc]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-xs text-muted">
              <Icon className="size-4 shrink-0 text-ink/70" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted">Download our app</span>
          <button
            aria-label="Get it on Google Play"
            className="grid size-9 place-items-center rounded-lg bg-ink text-white transition hover:opacity-85"
          >
            <Play className="size-4 fill-current" strokeWidth={0} />
          </button>
          <button
            aria-label="Download on the App Store"
            className="grid size-9 place-items-center rounded-lg bg-ink text-white transition hover:opacity-85"
          >
            <Smartphone className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
