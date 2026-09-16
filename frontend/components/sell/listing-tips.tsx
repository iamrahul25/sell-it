import { Check, Lightbulb } from "lucide-react";

const tips = [
  "Use clear and original photos",
  "Write a detailed and honest description",
  "Set a fair price",
  "Choose the right category",
  "Respond to messages promptly",
  "Be safe and meet in public places",
];

export function ListingTips() {
  return (
    <section className="rounded-2xl border border-brand/10 bg-brand-soft p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold">
        <Lightbulb className="size-5 text-brand" />
        Tips for a successful listing
      </h2>
      <ul className="mt-4 space-y-2.5">
        {tips.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-xs text-muted">
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand text-white">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}
