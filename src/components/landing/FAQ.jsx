"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is SkillSwap really free?",
    answer:
      "Yes, completely free. There are no subscriptions, no hidden fees. You exchange skills directly with other members — no money involved at any point.",
  },
  {
    question: "How does the matching system work?",
    answer:
      "You list the skills you can teach and the ones you want to learn. Our system suggests people whose offered skills match what you want, and vice versa.",
  },
  {
    question: "What if my skill swap doesn't go well?",
    answer:
      "Every member has reviews and ratings from past swaps, so you can check credibility beforehand. You can also report or end a match anytime from your dashboard.",
  },
  {
    question: "Can I offer more than one skill?",
    answer:
      "Absolutely. You can list as many skills as you want to teach, and as many as you want to learn — there's no limit.",
  },
  {
    question: "Is SkillSwap available worldwide?",
    answer:
      "Yes, SkillSwap is built for a global community. You can match with people from any country, and sessions can happen online via chat and video.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-bg-primary">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-text-primary font-medium">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-purple flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-text-secondary text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}