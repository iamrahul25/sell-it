import Link from "next/link";
import { CircleHelp } from "lucide-react";

export function HelpCard() {
  return (
    <section className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 text-ink">
        <CircleHelp className="size-5" />
      </span>
      <div>
        <h2 className="text-sm font-bold">Need Help?</h2>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Have questions about selling? Check our{" "}
          <Link href="#" className="font-semibold text-brand underline">
            Help Center
          </Link>{" "}
          or contact support.
        </p>
      </div>
    </section>
  );
}
