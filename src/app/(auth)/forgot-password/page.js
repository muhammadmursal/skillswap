"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link requested for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/15 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass-card border border-border rounded-2xl p-8">
          <Link
            href="/login"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>

          {!submitted ? (
            <>
              <h1 className="font-heading text-2xl font-bold text-text-primary mb-2">
                Forgot password?
              </h1>
              <p className="text-text-secondary text-sm mb-8">
                Enter your email and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

                <button
                  type="submit"
                  className="bg-accent-purple text-white py-3 rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow mt-2"
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <CheckCircle2 className="w-12 h-12 text-accent-purple mx-auto mb-4" />
              <h2 className="font-heading text-xl font-bold text-text-primary mb-2">
                Check your inbox
              </h2>
              <p className="text-text-secondary text-sm">
                We've sent a password reset link to <span className="text-text-primary">{email}</span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}