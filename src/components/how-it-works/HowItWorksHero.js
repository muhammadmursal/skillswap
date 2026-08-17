"use client";

import { motion } from "framer-motion";

export default function HowItWorksHero() {
  return (
    <section className="text-center px-6 pb-20 relative">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs font-semibold tracking-widest text-accent-purple uppercase mb-4"
      >
        The Process
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-5xl md:text-6xl font-bold text-text-primary"
      >
        How SkillSwap Works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg text-text-secondary max-w-xl mx-auto"
      >
        Four simple steps to start learning and teaching — no money required, ever.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink"
      />
    </section>
  );
}