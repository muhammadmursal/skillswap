"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      {/* Dark radial overlay for text readability */}
<div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(ellipse at center, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.75) 40%, rgba(10,10,15,0.35) 75%, rgba(10,10,15,0.15) 100%)",
  }}
/>

      {/* Purple tint overlay to match theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 via-transparent to-bg-primary" />

      {/* Text - moves fastest, fades out */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card border border-accent-purple/30 rounded-full px-4 py-1.5 mb-6 text-xs font-medium text-text-secondary"
        >
          <Sparkles size={14} className="text-accent-purple" />
          Now live — Join 2,500+ swappers
        </motion.div>

        <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Trade Skills,{" "}
          <span className="text-accent-purple">Not Money</span>
        </h1>

        <p className="text-text-secondary text-lg mb-8">
          Join SkillSwap and exchange your skills with others — teach what you know,
          learn what you want, without spending a single rupee.
        </p>

        {/* Buttons */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
  <Link
    href="/signup"
    className="bg-accent-purple text-white px-8 py-3 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow"
  >
    Get Started Free
  </Link>
  <Link
    href="/how-it-works"
    className="flex items-center gap-2 border border-border text-text-secondary px-8 py-3 rounded-lg font-medium hover:border-accent-purple hover:text-text-primary transition-colors"
  >
    See How It Works
    <ArrowRight size={16} />
  </Link>
</div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-text-muted">
          <span>
            <span className="text-text-primary font-semibold">2.5K+</span> Users
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span>
            <span className="text-text-primary font-semibold">180+</span> Skills Exchanged
          </span>
          <span className="hidden sm:inline text-border">·</span>
          <span>
            <span className="text-text-primary font-semibold">4.9★</span> Rating
          </span>
        </div>
      </motion.div>
    </section>
  );
}