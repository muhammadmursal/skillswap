"use client";

export default function PricingToggle({ isYearly, setIsYearly }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <span
        className={`text-sm font-medium ${
          !isYearly ? "text-text-primary" : "text-text-secondary"
        }`}
      >
        Monthly
      </span>

      <button
        onClick={() => setIsYearly(!isYearly)}
        className="relative w-14 h-7 rounded-full bg-bg-card border border-border transition-colors"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue transition-transform duration-300 ${
            isYearly ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>

      <span
        className={`text-sm font-medium ${
          isYearly ? "text-text-primary" : "text-text-secondary"
        }`}
      >
        Yearly
        <span className="ml-1.5 text-xs text-accent-pink font-semibold">
          Save 20%
        </span>
      </span>
    </div>
  );
}