"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { skills } from "@/data/skills";

const categories = ["All", "Music", "Tech", "Arts", "Design", "Media"];
const levelOrder = { Beginner: 1, Intermediate: 2, Expert: 3 };

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredSkills = skills
    .filter((skill) => {
      const matchesSearch = skill.teaches.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "level") return levelOrder[a.level] - levelOrder[b.level];
      return 0;
    });

  return (
    <main className="bg-bg-primary min-h-screen pt-40 pb-20 px-6">
      <div className="text-center mb-10">
        <span className="text-accent-purple text-sm font-medium">DISCOVER & CONNECT</span>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">
          Find Your Perfect Skill Match
        </h1>
        <p className="text-text-secondary max-w-xl mx-auto">
          Browse skills from people around the world, ready to teach and eager to learn — no money, just knowledge exchanged.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-14">
        <p className="text-text-muted text-xs uppercase tracking-wide text-center mb-4">
          🔥 Trending This Week
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.slice(0, 3).map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 bg-bg-card border border-border rounded-full pl-2 pr-5 py-2 hover:border-accent-purple transition-colors"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image src={skill.avatar} alt={skill.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-text-primary text-sm font-medium leading-tight">{skill.teaches}</p>
                <p className="text-text-muted text-xs">by {skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a skill (e.g. Guitar, React)..."
          className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple transition-colors"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              selectedCategory === cat
                ? "bg-accent-purple text-white border-accent-purple"
                : "bg-bg-card text-text-secondary border-border hover:border-accent-purple"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto flex items-center justify-between mb-6 px-1">
        <p className="text-text-secondary text-sm">
          {filteredSkills.length} {filteredSkills.length === 1 ? "skill" : "skills"} found
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-bg-card border border-border rounded-lg px-3 py-2 text-text-secondary text-sm focus:outline-none focus:border-accent-purple transition-colors"
        >
          <option value="name">Sort: Name (A-Z)</option>
          <option value="level">Sort: Level (Low-High)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredSkills.map((skill) => (
          <Link
            key={skill.id}
            href={`/explore/${skill.id}`}
            className="block glass-card border border-border rounded-xl p-6 hover:-translate-y-1 hover:border-accent-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-accent-purple/30 flex-shrink-0">
                <Image src={skill.avatar} alt={skill.name} fill className="object-cover" />
              </div>
              <h2 className="font-heading text-lg font-semibold text-text-primary">
                {skill.name}
              </h2>
            </div>
            <p className="text-text-secondary text-sm mt-2">
              Teaches: <span className="text-accent-purple">{skill.teaches}</span>
            </p>
            <p className="text-text-secondary text-sm">
              Wants to learn: <span className="text-accent-blue">{skill.wants}</span>
            </p>
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                skill.level === "Expert"
                  ? "bg-accent-pink/15 text-accent-pink border border-accent-pink/30"
                  : skill.level === "Intermediate"
                  ? "bg-accent-purple/15 text-accent-purple border border-accent-purple/30"
                  : "bg-accent-blue/15 text-accent-blue border border-accent-blue/30"
              }`}
            >
              {skill.level}
            </span>
          </Link>
        ))}

        {filteredSkills.length === 0 && (
          <p className="text-text-secondary col-span-full text-center">
            No skills found matching your filters.
          </p>
        )}
      </div>
    </main>
  );
}