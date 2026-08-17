import Link from "next/link";
import Counter from "@/components/effects/Counter";

const stats = [
  { target: 1200, suffix: "+", label: "Active Users" },
  { target: 500, suffix: "+", label: "Skills Exchanged" },
  { target: 50, suffix: "+", label: "Countries" },
];

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/15 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl font-bold text-accent-purple">
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Ready to start swapping?
        </h2>

        <p className="text-text-secondary text-lg mb-10">
          Join thousands of people already exchanging skills — no fees, no catches.
        </p>

        <Link
          href="/signup"
          className="inline-block bg-accent-purple text-white px-10 py-4 rounded-lg font-medium text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}