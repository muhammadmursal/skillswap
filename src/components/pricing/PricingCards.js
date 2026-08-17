"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "@/data/plans";

export default function PricingCards({ isYearly }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-24">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`glass-card rounded-2xl p-8 flex flex-col ${
            plan.popular
              ? "border-2 border-accent-purple shadow-[0_0_40px_rgba(168,85,247,0.25)] md:scale-105"
              : "border border-border"
          }`}
        >
          {plan.popular && (
            <span className="self-start mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-accent-purple to-accent-pink text-white">
              Most Popular
            </span>
          )}

          <h3 className="font-heading text-2xl font-bold text-text-primary">
            {plan.name}
          </h3>
          <p className="text-sm text-text-secondary mt-1">{plan.tagline}</p>

          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-bold text-text-primary">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span className="text-text-secondary text-sm mb-1">
              /{isYearly ? "year" : "month"}
            </span>
          </div>

          <ul className="mt-8 space-y-3 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                <Check size={16} className="text-accent-purple mt-0.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <button
            className={`mt-8 w-full py-3 rounded-xl font-semibold transition-colors ${
              plan.popular
                ? "bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:opacity-90"
                : "bg-bg-card border border-border text-text-primary hover:border-accent-purple"
            }`}
          >
            {plan.cta}
          </button>
        </motion.div>
      ))}
    </div>
  );
}