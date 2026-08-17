import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import SkillCategories from "@/components/landing/SkillCategories";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";


export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <FeaturesGrid />
      <SkillCategories />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
      
    </main>
  );
}