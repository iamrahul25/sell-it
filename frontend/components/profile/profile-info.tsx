import { BadgeCheck, Mail, MapPin, Pencil, Phone, User } from "lucide-react";
import type { ProfileData } from "@/lib/profile";

const fields = [
  { key: "name" as const, label: "Full Name", icon: User, type: "text" },
  { key: "email" as const, label: "Email", icon: Mail, type: "email" },
  { key: "phone" as const, label: "Phone", icon: Phone, type: "tel" },
  { key: "location" as const, label: "Location", icon: MapPin, type: "text" },
];

export function ProfileInfo({
  profile,
  editing,
  onEdit,
  onChange,
}: {
  profile: ProfileData;
  editing: boolean;
  onEdit: () => void;
  onChange: (field: keyof ProfileData, value: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Personal Information</h2>
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-1.5 text-xs font-semibold text-brand"
        >
          <Pencil className="size-3.5" />
          {editing ? "Done" : "Edit"}
        </button>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map(({ key, label, icon: Icon, type }) => (
          <label key={key} className="rounded-xl bg-slate-50 p-4">
            <span className="flex items-center gap-2 text-xs font-medium text-muted">
              <Icon className="size-4 text-brand" />
              {label}
            </span>
            {editing ? (
              <input
                type={type}
                value={profile[key]}
                onChange={(event) => onChange(key, event.target.value)}
                className="mt-2 h-9 w-full rounded-lg border border-line bg-white px-3 text-sm font-medium outline-none focus:border-brand"
              />
            ) : (
              <span className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-ink">
                {profile[key]}
                {key === "phone" && (
                  <span className="flex items-center gap-1 text-[10px] text-brand">
                    <BadgeCheck className="size-3.5" />
                    Verified
                  </span>
                )}
              </span>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
