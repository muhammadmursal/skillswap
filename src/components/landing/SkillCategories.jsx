"use client";

import { motion } from "framer-motion";
import {
  Code,
  Music,
  Palette,
  Camera,
  Globe,
  ChefHat,
  Dumbbell,
  BookOpen,
} from "lucide-react";

const categories = [
  { name: "Coding", icon: Code, color: "#3b82f6" },
  { name: "Music", icon: Music, color: "#ec4899" },
  { name: "Design", icon: Palette, color: "#a855f7" },
  { name: "Photography", icon: Camera, color: "#f59e0b" },
  { name: "Languages", icon: Globe, color: "#22c55e" },
  { name: "Cooking", icon: ChefHat, color: "#ef4444" },
  { name: "Fitness", icon: Dumbbell, color: "#06b6d4" },
  { name: "Writing", icon: BookOpen, color: "#eab308" },
];

export default function SkillCategories() {
  return (
    <section className="py-20 px-6 bg-bg-primary">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-4">
        Explore Skill Categories
      </h2>
      <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
        From coding to cooking — find people to learn from, or teach what you already know.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group glass-card border border-border rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ "--hover-color": category.color }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: `${category.color}1A` }}
              >
                <Icon
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: category.color }}
                />
              </div>
              <span className="text-text-primary text-sm font-medium">
                {category.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}