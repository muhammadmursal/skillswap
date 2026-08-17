"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MapPin } from "lucide-react";

const socialIcons = [
  {
    label: "Twitter",
    path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      <div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
          Let's Talk
        </h1>
        <p className="mt-4 text-text-secondary max-w-md">
          Have a question, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
            <Mail size={18} className="text-accent-purple" />
          </div>
          <span className="text-text-secondary">hello@skillswap.com</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
            <Clock size={18} className="text-accent-blue" />
          </div>
          <span className="text-text-secondary">We reply within 24 hours</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center">
            <MapPin size={18} className="text-accent-pink" />
          </div>
          <span className="text-text-secondary">Remote-first, worldwide community</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-text-muted mb-3">Follow us</p>
        <div className="flex gap-3">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              href="#"
              aria-label={icon.label}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-accent-purple border border-transparent transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-secondary"
              >
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}