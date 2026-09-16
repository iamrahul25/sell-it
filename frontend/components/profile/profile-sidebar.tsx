import Link from "next/link";
import {
  BadgeCheck,
  Heart,
  LogOut,
  MessageCircle,
  Settings,
  Star,
  Store,
  User,
} from "lucide-react";

export type ProfileSection = "listings" | "favourites" | "settings";

const menuItems = [
  { id: "listings" as const, label: "My Listings", icon: Store },
  { id: "messages" as const, label: "Messages", icon: MessageCircle },
  { id: "favourites" as const, label: "Favourites", icon: Heart },
  { id: "settings" as const, label: "Settings", icon: Settings },
];

export function ProfileSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: ProfileSection;
  onSectionChange: (section: ProfileSection) => void;
}) {
  return (
    <aside className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(15,23,42,.04)]">
      <div className="border-b border-line p-5 text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-full bg-brand-soft text-brand ring-4 ring-white shadow">
          <User className="size-9" strokeWidth={1.6} />
        </span>
        <h2 className="mt-3 flex items-center justify-center gap-1.5 font-bold">
          Rahul Kumar
          <BadgeCheck className="size-4 fill-brand text-white" />
        </h2>
        <p className="mt-1 text-xs text-muted">rahul@example.com</p>
        <p className="mt-3 flex items-center justify-center gap-1 text-xs text-muted">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          <span className="font-bold text-ink">4.8</span> (12 reviews)
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["Phone Verified", "Email Verified"].map((label) => (
            <span
              key={label}
              className="flex items-center gap-1 rounded-full bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand"
            >
              <BadgeCheck className="size-3" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <nav className="no-scrollbar flex gap-2 overflow-x-auto p-3 lg:block lg:space-y-1">
        {menuItems.map(({ id, label, icon: Icon }) =>
          id === "messages" ? (
            <Link
              key={id}
              href="/messages"
              className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-slate-50 hover:text-brand lg:w-full"
            >
              <Icon className="size-4.5" />
              {label}
            </Link>
          ) : (
            <button
              key={id}
              type="button"
              onClick={() => onSectionChange(id)}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition lg:w-full ${
                activeSection === id
                  ? "bg-brand-soft text-brand"
                  : "text-muted hover:bg-slate-50 hover:text-brand"
              }`}
            >
              <Icon className="size-4.5" />
              {label}
            </button>
          ),
        )}
      </nav>

      <div className="hidden border-t border-line p-3 lg:block">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50">
          <LogOut className="size-4.5" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
