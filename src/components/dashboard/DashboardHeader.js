"use client";

import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { useUser } from "@/context/UserContext";
const pageLabels = {
  "/dashboard": "Overview",
  "/dashboard/my-swaps": "My Swaps",
  "/dashboard/profile": "Profile",
  "/dashboard/messages": "Messages",
};

export default function DashboardHeader() {
  const pathname = usePathname();
  const { user } = useUser();
  const currentLabel = pageLabels[pathname] || "Dashboard";

  return (
    <header className="flex items-center justify-between mb-8 gap-4">
      {/* Breadcrumb */}
      <div>
        <p className="text-xs text-text-muted">Dashboard</p>
        <h2 className="font-heading text-xl font-semibold text-text-primary">
          {currentLabel}
        </h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="hidden sm:flex items-center gap-2 glass-card border border-border rounded-lg px-3 py-2 text-sm text-text-muted hover:border-accent-purple transition-colors">
          <Search size={15} />
          <span>Search...</span>
          <kbd className="ml-4 text-xs bg-bg-card border border-border rounded px-1.5 py-0.5 text-text-muted">
            ⌘K
          </kbd>
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-full glass-card border border-border flex items-center justify-center hover:border-accent-purple transition-colors">
          <Bell size={17} className="text-text-secondary" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-pink" />
        </button>

        {/* Avatar */}
{user.avatar ? (
  <img
    src={user.avatar}
    alt={user.name}
    className="w-10 h-10 rounded-full object-cover"
  />
) : (
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-semibold text-sm">
    {user.name.charAt(0)}
  </div>
)}
      </div>
    </header>
  );
}