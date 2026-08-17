"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Award, Zap } from "lucide-react";
import TiltCard from "@/components/effects/TiltCard";

const features = [
  {
    title: "Smart Matching",
    description: "Get matched with people whose skills complement yours — no random searching.",
    icon: Users,
  },
  {
    title: "Real-time Chat",
    description: "Talk directly with your skill partner, plan sessions, and stay connected.",
    icon: MessageCircle,
  },
  {
    title: "Earn Badges",
    description: "Build your reputation as you teach and learn — collect achievements along the way.",
    icon: Award,
  },
  {
    title: "Zero Cost",
    description: "No payments, no subscriptions. Just skill for skill, fair and simple.",
    icon: Zap,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6 bg-bg-primary">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
        Why SkillSwap?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard className="glass-card rounded-xl p-6 border border-border hover:border-accent-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-colors duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-purple" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {feature.description}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}