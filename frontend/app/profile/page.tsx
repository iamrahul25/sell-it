import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProfileDashboard } from "@/components/profile/profile-dashboard";

export const metadata: Metadata = {
  title: "My Profile | Sell-it",
  description: "Manage your Sell-it profile, listings and account preferences.",
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-[1240px] px-4 py-6 sm:py-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex items-center gap-1.5 text-xs text-muted"
        >
          <Link href="/" className="transition hover:text-brand">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="font-medium text-ink">Profile</span>
        </nav>
        <ProfileDashboard />
      </div>
    </main>
  );
}
