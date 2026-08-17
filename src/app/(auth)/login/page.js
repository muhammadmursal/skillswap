"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex bg-bg-primary">
      {/* Left brand panel - hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-md text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-accent-purple" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Trade Skills, Not Money
          </h2>
          <p className="text-text-secondary">
            Join a global community exchanging knowledge — no fees, no limits, just growth.
          </p>
        </motion.div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="font-heading text-xl font-bold text-text-primary mb-10 inline-block">
            Skill<span className="text-accent-purple">Swap</span>
          </Link>

          <h1 className="font-heading text-2xl font-bold text-text-primary mb-2">
            Welcome back
          </h1>
          <p className="text-text-secondary text-sm mb-8">
            Log in to continue swapping skills
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-text-secondary text-xs font-medium mb-1.5 block">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-bg-card border border-border rounded-lg pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-text-secondary text-xs font-medium">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-accent-purple text-xs hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-bg-card border border-border rounded-lg pl-11 pr-11 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-accent-purple text-white py-3 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300 mt-2"
            >
              Log In
            </button>
          </form>

          <p className="text-text-secondary text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-accent-purple hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}