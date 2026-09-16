import { Camera, MessageCircle, ShoppingBag, Users } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Camera,
    title: "Post Your Ad",
    description: "List your item in minutes",
  },
  {
    number: "02",
    icon: Users,
    title: "Reach Buyers",
    description: "Get noticed by people near you",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat & Negotiate",
    description: "Discuss directly and agree on a deal",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Complete the Deal",
    description: "Meet safely and exchange",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1240px] px-4 py-8">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
        How Sell-it Works
      </h2>

      <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ number, icon: Icon, title, description }, index) => (
          <li key={number} className="relative flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">
              {Number(number)}
            </span>
            <Icon className="size-6 shrink-0 text-ink" strokeWidth={1.5} />
            <div className="min-w-0">
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-xs text-muted">{description}</p>
            </div>
            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-line lg:block"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
