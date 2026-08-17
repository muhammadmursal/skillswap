"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="text-center px-6 pb-16">
      <motion.h1
        className="font-heading text-5xl md:text-6xl font-bold text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Simple, Transparent Pricing
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-text-secondary max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Start free, upgrade anytime. No hidden charges, ever.
      </motion.p>
    </section>
  );
}