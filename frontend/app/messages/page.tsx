import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MessageCenter } from "@/components/profile/message-center";

export const metadata: Metadata = {
  title: "Messages | Sell-it",
  description: "Chat with buyers and sellers on Sell-it.",
};

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-[1240px] px-4 py-6 sm:py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-muted"
        >
          <Link href="/profile" className="transition hover:text-brand">
            Profile
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="font-medium text-ink">Messages</span>
        </nav>
        <div className="my-5">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="mt-2 text-sm text-muted">
            Chat with buyers and sellers about your listings.
          </p>
        </div>
        <MessageCenter />
      </div>
    </main>
  );
}
