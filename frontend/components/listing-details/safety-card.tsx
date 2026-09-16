import { Check, ShieldCheck } from "lucide-react";

const safetyTips = [
  "Meet in a safe public place",
  "Check the item before buying",
  "Avoid advance payments",
  "Report suspicious behavior",
];

export function SafetyCard() {
  return (
    <aside className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
      <h2 className="flex items-center gap-2 text-sm font-bold text-ink">
        <ShieldCheck className="size-5 text-amber-600" />
        Stay Safe
      </h2>
      <ul className="mt-3 space-y-2">
        {safetyTips.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
            <Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={2.5} />
            {tip}
          </li>
        ))}
      </ul>
    </aside>
  );
}
