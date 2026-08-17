"use client";

import { useState } from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingCards from "@/components/pricing/PricingCards";
import PricingFAQ from "@/components/pricing/PricingFAQ";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="pt-40">
      <PricingHero />
      <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      <PricingCards isYearly={isYearly} />
      <PricingFAQ />
    </main>
  );
}