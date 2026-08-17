"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import {
  LayoutDashboard,
  Repeat,
  User,
  MessageSquare,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Swaps", href: "/dashboard/my-swaps", icon: Repeat },
  { label: "Profile", href: "/dashboard/profile", icon: User },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();
const router = useRouter();
const { user } = useUser();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 glass-card border-r border-border px-4 py-6">
      {/* Logo */}
      <Link href="/" className="font-heading text-xl font-bold text-text-primary px-2 mb-8">
        Skill<span className="text-accent-purple">Swap</span>
      </Link>

      {/* User card */}
      <div className="glass-card rounded-xl p-3 flex items-center gap-3 mb-8 border border-border">
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
  <div className="min-w-0">
    <p className="text-sm font-medium text-text-primary truncate">{user.name}</p>
    <p className="text-xs text-text-muted truncate">Explorer Plan</p>
  </div>
</div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className="relative">
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/10 rounded-xl border border-accent-purple/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <div
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
     <button
  onClick={() => router.push("/login")}
  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-accent-pink transition-colors"
>
  <LogOut size={18} />
  Log Out
</button>
    </aside>
  );
}