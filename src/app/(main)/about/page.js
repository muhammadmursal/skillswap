"use client";

import { motion } from "framer-motion";
import { Target, Heart, Users2, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/effects/Counter";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe knowledge grows when it's shared freely between people, not locked behind paywalls.",
  },
  {
    icon: Target,
    title: "Fair Exchange",
    description: "Every skill has value. We built a system where teaching and learning are equally rewarded.",
  },
  {
    icon: Users2,
    title: "Global Reach",
    description: "Skills don't have borders. Our platform connects learners and teachers across the world.",
  },
];

const stats = [
  { target: 1200, suffix: "+", label: "Active Users" },
  { target: 500, suffix: "+", label: "Skills Exchanged" },
  { target: 50, suffix: "+", label: "Countries" },
];

const milestones = [
  { year: "2024", title: "The Idea", description: "SkillSwap started as a simple sketch on a notebook — trade skills, not money." },
  { year: "2025", title: "First 1,000 Users", description: "Our early community started exchanging everything from coding to cooking." },
  { year: "2026", title: "Going Global", description: "SkillSwap expanded to over 50 countries, connecting learners worldwide." },
];

const team = [
  { name: "Founder Name", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=47" },
  { name: "Co-founder Name", role: "Co-founder & CTO", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Team Member", role: "Head of Community", image: "https://i.pravatar.cc/300?img=32" },
];

export default function AboutPage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/15 rounded-full blur-[150px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <span className="text-accent-purple text-sm font-medium">ABOUT US</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-3 mb-6">
            Knowledge shouldn't cost money
          </h1>
          <p className="text-text-secondary text-lg">
            SkillSwap started with a simple idea: everyone knows something worth teaching, and
            everyone wants to learn something new. Why should money stand in the way?
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Our Story</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            We noticed that learning a new skill almost always meant paying for a course,
            a tutor, or a subscription. Meanwhile, millions of people already had valuable
            skills sitting unused — skills they'd happily teach if there was an easy way to
            find someone to trade with.
          </p>
          <p className="text-text-secondary leading-relaxed">
            SkillSwap connects those two groups. No money changes hands — just knowledge,
            time, and genuine human connection.
          </p>
        </motion.div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-purple/10 rounded-full blur-[130px]" />
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center font-heading text-2xl md:text-3xl font-semibold text-text-primary"
        >
          "We believe skills should flow as freely as ideas —{" "}
          <span className="text-accent-purple">no price tag required.</span>"
        </motion.blockquote>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <h2 className="font-heading text-3xl font-bold text-text-primary text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card border border-border rounded-xl p-6 hover:-translate-y-1 hover:border-accent-purple transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-purple" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <h2 className="font-heading text-3xl font-bold text-text-primary text-center mb-16">
          Our Journey
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-inherit">
                    <div
                      className={`glass-card border border-border rounded-xl p-6 ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-accent-purple font-heading font-bold text-sm">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-text-primary mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-accent-purple flex-shrink-0 hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <h2 className="font-heading text-3xl font-bold text-text-primary text-center mb-4">
          Meet the Team
        </h2>
        <p className="text-text-secondary text-center mb-12">
          The people building SkillSwap
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card border border-border rounded-xl p-6 text-center"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-1 ring-accent-purple/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-sm font-semibold text-text-primary">{member.name}</h3>
              <p className="text-text-secondary text-xs mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="flex flex-wrap justify-center gap-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold text-accent-purple">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent-purple/15 rounded-full blur-[150px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Rocket className="w-10 h-10 text-accent-purple mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Want to be part of this?
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Join thousands of people already trading skills for free.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-accent-purple text-white px-8 py-3 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300"
          >
            Get Started Free
          </Link>
        </motion.div>
      </section>
    </main>
  );
}