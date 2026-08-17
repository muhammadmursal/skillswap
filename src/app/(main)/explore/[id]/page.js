import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { skills } from "@/data/skills";

export default async function SkillDetailPage({ params }) {
  const { id } = await params;
  const skill = skills.find((s) => s.id === Number(id));

  if (!skill) {
    return (
      <main className="bg-bg-primary min-h-screen pt-40 text-center">
        <p className="text-text-secondary">Skill not found.</p>
        <Link href="/explore" className="text-accent-purple mt-4 inline-block">
          Back to Explore
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-bg-primary min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Explore
        </Link>

        <div className="glass-card border border-border rounded-2xl p-8 text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent-purple/40 mx-auto mb-5">
            <Image src={skill.avatar} alt={skill.name} fill className="object-cover" />
          </div>

          <h1 className="font-heading text-2xl font-bold text-text-primary mb-1">
            {skill.name}
          </h1>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
              skill.level === "Expert"
                ? "bg-accent-pink/15 text-accent-pink border border-accent-pink/30"
                : skill.level === "Intermediate"
                ? "bg-accent-purple/15 text-accent-purple border border-accent-purple/30"
                : "bg-accent-blue/15 text-accent-blue border border-accent-blue/30"
            }`}
          >
            {skill.level}
          </span>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-bg-secondary rounded-xl p-5 border border-border">
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Teaches</p>
              <p className="text-accent-purple font-heading font-semibold">{skill.teaches}</p>
            </div>
            <div className="bg-bg-secondary rounded-xl p-5 border border-border">
              <p className="text-text-muted text-xs uppercase tracking-wide mb-1">Wants to Learn</p>
              <p className="text-accent-blue font-heading font-semibold">{skill.wants}</p>
            </div>
          </div>

          <button className="mt-8 bg-accent-purple text-white px-8 py-3 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300">
            Request Swap
          </button>
        </div>
      </div>
    </main>
  );
}