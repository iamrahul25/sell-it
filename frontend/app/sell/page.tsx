import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SellForm } from "@/components/sell/sell-form";
import { SellProgress } from "@/components/sell/sell-progress";

export const metadata: Metadata = {
  title: "Post a New Ad | Sell-it",
  description: "List your item for sale on Sell-it in a few simple steps.",
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pb-8">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1240px] px-4 py-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted"
          >
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-ink">Sell</span>
          </nav>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Post a New Ad
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                List your item in a few simple steps. It&apos;s free and only takes
                a couple of minutes.
              </p>
            </div>
            <SellProgress />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1240px] px-4 py-6">
        <SellForm />
      </div>
    </main>
  );
}
