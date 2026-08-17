"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/data/howItWorksSteps";

export default function DetailedSteps() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-24">
      {howItWorksSteps.map((step, index) => {
        const isEven = index % 2 === 1;

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:items-center gap-8 md:gap-16 ${
              isEven ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Number / visual block */}
            <div className="flex-shrink-0 w-full md:w-64 flex justify-center">
              <div className="relative w-40 h-40 rounded-3xl glass-card flex items-center justify-center border border-border">
                <span className="font-heading text-6xl font-bold bg-gradient-to-br from-accent-purple to-accent-blue bg-clip-text text-transparent">
                  {step.number}
                </span>
                <div className="absolute -inset-3 rounded-3xl bg-accent-purple/10 blur-2xl -z-10" />
              </div>
            </div>

            {/* Text block */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed max-w-lg mx-auto md:mx-0">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}