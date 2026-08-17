"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const statusStyles = {
  pending: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  active: "bg-accent-blue/15 text-accent-blue border-accent-blue/30",
  completed: "bg-accent-purple/15 text-accent-purple border-accent-purple/30",
};

export default function SwapCard({ swap }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-5 border border-border flex flex-col sm:flex-row sm:items-center gap-4"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
        <Image src={swap.avatar} alt={swap.partner} fill sizes="48px" className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-text-primary font-medium">{swap.partner}</p>
        <p className="text-sm text-text-secondary">
          You teach <span className="text-accent-purple">{swap.youTeach}</span> · They teach{" "}
          <span className="text-accent-blue">{swap.theyTeach}</span>
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-text-muted">{swap.date}</span>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border capitalize ${statusStyles[swap.status]}`}
        >
          {swap.status}
        </span>
      </div>
    </motion.div>
  );
}