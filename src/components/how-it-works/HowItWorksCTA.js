"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksCTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-12 relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl pointer-events-none" />

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary relative">
          Ready to start swapping?
        </h2>
        <p className="mt-4 text-text-secondary max-w-md mx-auto relative">
          Join thousands of learners and teachers exchanging skills worldwide — completely free to start.
        </p>

        <Link
          href="/signup"
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow relative"
        >
          Get Started Free
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}