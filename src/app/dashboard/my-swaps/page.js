"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { mySwaps } from "@/data/mySwaps";
import SwapCard from "@/components/dashboard/SwapCard";

const tabs = ["All", "Pending", "Active", "Completed"];

export default function MySwapsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSwaps =
    activeTab === "All"
      ? mySwaps
      : mySwaps.filter((swap) => swap.status === activeTab.toLowerCase());

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-accent-purple text-white"
                : "glass-card border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSwaps.map((swap) => (
            <SwapCard key={swap.id} swap={swap} />
          ))}
        </AnimatePresence>
      </div>

      {filteredSwaps.length === 0 && (
        <p className="text-text-muted text-sm text-center py-12">
          No swaps in this category yet.
        </p>
      )}
    </div>
  );
}