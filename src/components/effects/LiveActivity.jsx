"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const activities = [
  "Ali just matched with Sara for Guitar ↔ Coding",
  "Hamza started learning Spanish from Maria",
  "Ayesha completed a swap: Photography ↔ Excel",
  "Bilal is now teaching Video Editing to Zain",
  "Sana matched for Cooking ↔ Web Design",
  "Omar just joined SkillSwap from Lahore",
];

export default function LiveActivity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setInterval(() => {
      setVisible(true);

      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(hideTimer);
    }, 7000);

    return () => clearInterval(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
      }, 500);
      return () => clearTimeout(nextTimer);
    }
  }, [visible]);

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden md:block">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="glass-card border border-border rounded-lg px-4 py-3 flex items-center gap-3 max-w-xs shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-accent-purple flex-shrink-0" />
            <p className="text-text-secondary text-xs">
              {activities[currentIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}