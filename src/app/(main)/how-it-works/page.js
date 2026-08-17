import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import DetailedSteps from "@/components/how-it-works/DetailedSteps";
import WhyItWorks from "@/components/how-it-works/WhyItWorks";
import HowItWorksCTA from "@/components/how-it-works/HowItWorksCTA";
export default function HowItWorksPage() {
  return (
    <main className="pt-40">
      <HowItWorksHero />
      <DetailedSteps />
      <WhyItWorks />
      <HowItWorksCTA />
    </main>
  );
}