import {
  Bell,
  ChevronRight,
  LockKeyhole,
  Mail,
  MapPin,
  Shield,
  Trash2,
  UserRound,
} from "lucide-react";

const settings = [
  {
    icon: UserRound,
    title: "Profile Information",
    description: "Name, phone number and public profile",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Messages, offers and listing updates",
  },
  {
    icon: Shield,
    title: "Privacy",
    description: "Control what other users can see",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    description: "Password and account protection",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Default marketplace location",
  },
  {
    icon: Mail,
    title: "Email Preferences",
    description: "Promotions and activity summaries",
  },
];

export function AccountSettings() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
        <h2 className="text-lg font-bold">Account Settings</h2>
        <p className="mt-1 text-xs text-muted">
          Manage your account preferences and security.
        </p>
        <div className="mt-5 divide-y divide-line">
          {settings.map(({ icon: Icon, title, description }) => (
            <button
              key={title}
              type="button"
              className="flex w-full items-center gap-3 py-4 text-left transition hover:text-brand"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-slate-50 text-muted">
                <Icon className="size-4.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{title}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {description}
                </span>
              </span>
              <ChevronRight className="size-4 text-muted" />
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-200 bg-white p-5 sm:p-6">
        <h2 className="text-sm font-bold text-red-700">Danger Zone</h2>
        <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold">Delete Account</p>
            <p className="mt-1 text-xs text-muted">
              Permanently delete your profile, listings and messages.
            </p>
          </div>
          <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-red-300 px-3 text-xs font-bold text-red-600 hover:bg-red-50">
            <Trash2 className="size-3.5" />
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
}
