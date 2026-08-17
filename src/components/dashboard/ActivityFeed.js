"use client";

import { motion } from "framer-motion";
import { UserPlus, Star, MessageCircle, CheckCircle2 } from "lucide-react";
import { activity } from "@/data/dashboardActivity";

const iconMap = {
  swap_request: { icon: UserPlus, color: "text-accent-purple" },
  review: { icon: Star, color: "text-accent-pink" },
  message: { icon: MessageCircle, color: "text-accent-blue" },
  swap_completed: { icon: CheckCircle2, color: "text-accent-purple" },
};

export default function ActivityFeed() {
  return (
    <div className="glass-card rounded-2xl p-6 border border-border mt-6">
      <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-1">
        {activity.map((item, index) => {
          const { icon: Icon, color } = iconMap[item.type];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3 py-3 border-b border-border last:border-0"
            >
              <div className={`w-9 h-9 rounded-full bg-bg-card flex items-center justify-center ${color} shrink-0`}>
                <Icon size={16} />
              </div>
              <p className="text-sm text-text-secondary flex-1">{item.text}</p>
              <span className="text-xs text-text-muted whitespace-nowrap">{item.time}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}