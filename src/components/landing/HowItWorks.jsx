"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Handshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and list the skills you can teach and the ones you want to learn.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Find Your Match",
    description: "Browse or get matched with people whose skills complement yours.",
    icon: Search,
  },
  {
    number: "03",
    title: "Start Swapping",
    description: "Chat, schedule a session, and start exchanging knowledge — no money involved.",
    icon: Handshake,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-bg-primary relative">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-16">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" style={{ marginLeft: "16.67%", marginRight: "16.67%" }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center flex flex-col items-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-bg-card border-2 border-accent-purple flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent-purple" />
                </div>

                <span className="text-accent-purple font-heading font-bold text-sm mb-2">
                  STEP {step.number}
                </span>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>

                <p className="text-text-secondary text-sm max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}