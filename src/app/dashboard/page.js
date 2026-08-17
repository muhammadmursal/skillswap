"use client";
import { Repeat, CheckCircle2, BookOpen, Star } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

const stats = [
  { icon: Repeat, label: "Active Swaps", value: 3, accent: "purple" },
  { icon: CheckCircle2, label: "Completed Swaps", value: 12, accent: "blue" },
  { icon: BookOpen, label: "Skills Taught", value: 5, accent: "pink" },
  { icon: Star, label: "Rating", value: 4.8, suffix: "", accent: "purple" },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
        
      ))}
      <ActivityFeed />
    </div>
    
  );
}