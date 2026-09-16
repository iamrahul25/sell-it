"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { AboutSection } from "@/components/profile/about-section";
import { AccountSettings } from "@/components/profile/account-settings";
import { FavouritesGrid } from "@/components/profile/favourites-grid";
import { MyListings } from "@/components/profile/my-listings";
import { ProfileInfo } from "@/components/profile/profile-info";
import {
  ProfileSidebar,
  type ProfileSection,
} from "@/components/profile/profile-sidebar";
import { ProfileStats } from "@/components/profile/profile-stats";
import { initialProfile, type ProfileData } from "@/lib/profile";

const sectionHeadings = {
  listings: {
    title: "My Profile",
    subtitle: "Manage your personal information and marketplace profile.",
  },
  favourites: {
    title: "Favourites",
    subtitle: "Review and manage the marketplace items you have saved.",
  },
  settings: {
    title: "Settings",
    subtitle: "Manage your account, privacy, security and preferences.",
  },
};

export function ProfileDashboard() {
  const [activeSection, setActiveSection] = useState<ProfileSection>("listings");
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const heading = sectionHeadings[activeSection];

  function updateProfile(field: keyof ProfileData, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-20">
        <ProfileSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      <div className="min-w-0">
        <header className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{heading.title}</h1>
            <p className="mt-2 text-sm text-muted">{heading.subtitle}</p>
          </div>
          {activeSection === "listings" && (
            <button
              type="button"
              onClick={() => setEditingProfile((value) => !value)}
              className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-line bg-white px-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
            >
              <Pencil className="size-4" />
              <span className="hidden sm:inline">
                {editingProfile ? "Save Profile" : "Edit Profile"}
              </span>
              <span className="sm:hidden">{editingProfile ? "Save" : "Edit"}</span>
            </button>
          )}
        </header>

        {activeSection === "listings" && (
          <div className="space-y-5">
            <ProfileInfo
              profile={profile}
              editing={editingProfile}
              onEdit={() => setEditingProfile((value) => !value)}
              onChange={updateProfile}
            />
            <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
              <ProfileStats />
              <AboutSection
                value={profile.about}
                editing={editingAbout}
                onEdit={() => setEditingAbout((value) => !value)}
                onChange={(value) => updateProfile("about", value)}
              />
            </div>
            <MyListings />
          </div>
        )}

        {activeSection === "favourites" && <FavouritesGrid />}
        {activeSection === "settings" && <AccountSettings />}
      </div>
    </div>
  );
}
