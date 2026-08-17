"use client";

import { motion } from "framer-motion";
import { Coins, ShieldCheck, Globe2, Clock } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "No Money Involved",
    description: "Pure skill-for-skill exchange — no payments, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Community",
    description: "Trusted profiles backed by ratings and reviews.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Connect and learn with people from around the world.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Learn and teach at a pace that fits your life.",
  },
];

export default function WhyItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading text-3xl font-bold text-text-primary text-center mb-12"
      >
        Why It Works
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center hover:border-accent-purple border border-border transition-colors"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4">
              <benefit.icon size={20} className="text-accent-purple" />
            </div>
            <h3 className="font-heading font-semibold text-text-primary">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}