"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Explore", href: "/explore" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Split floating islands */}
      <div className="hidden md:flex fixed top-6 left-6 right-6 z-50 items-center justify-between">
        {/* Left island - Logo */}
        <Link
          href="/"
          className={`glass-card rounded-full font-heading font-bold text-text-primary transition-all duration-300 ${
            scrolled
              ? "px-5 py-2 text-lg border border-border shadow-lg"
              : "px-6 py-3 text-xl border border-transparent"
          }`}
        >
          Skill<span className="text-accent-purple">Swap</span>
        </Link>

        {/* Right island - Links + CTA */}
        <div
          className={`glass-card rounded-full flex items-center gap-8 transition-all duration-300 ${
            scrolled
              ? "px-5 py-2 border border-border shadow-lg"
              : "px-6 py-3 border border-transparent"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-purple rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

          <Link
            href="/login"
            className="text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="bg-accent-purple text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-shadow"
          >
            Sign Up
          </Link>

          <Link
            href="/dashboard"
            className="glass-card border border-accent-purple/40 text-accent-purple px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-purple/10 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {/* Mobile: Single compact bar */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-text-primary">
            Skill<span className="text-accent-purple">Swap</span>
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-text-primary">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="glass-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-accent-purple font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <hr className="border-border" />
            <Link href="/login" onClick={() => setMobileOpen(false)} className="text-text-secondary text-sm">
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="bg-accent-purple text-white px-5 py-2 rounded-lg text-sm font-medium text-center"
            >
              Sign Up
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="border border-accent-purple/40 text-accent-purple px-5 py-2 rounded-lg text-sm font-medium text-center"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </>
  );
}