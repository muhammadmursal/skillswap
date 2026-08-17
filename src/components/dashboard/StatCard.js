"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function StatCard({ icon: Icon, label, value, suffix = "", accent = "purple" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  const accentMap = {
    purple: "from-accent-purple/20 to-accent-purple/5 text-accent-purple",
    blue: "from-accent-blue/20 to-accent-blue/5 text-accent-blue",
    pink: "from-accent-pink/20 to-accent-pink/5 text-accent-pink",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 border border-border hover:border-accent-purple/50 transition-colors"
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentMap[accent]} flex items-center justify-center mb-4`}>
        <Icon size={18} />
      </div>
     <p className="font-heading text-3xl font-bold text-text-primary">
  <motion.span>{rounded}</motion.span>
  {suffix}
</p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </motion.div>
  );
}