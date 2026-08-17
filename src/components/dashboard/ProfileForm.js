"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SkillSection from "./SkillSection";
import { useUser } from "@/context/UserContext";

export default function ProfileForm() {
  const { user, setUser } = useUser();

  const [formData, setFormData] = useState({
    name: user.name,
    email: "mursal@example.com",
    bio: "Frontend developer passionate about teaching React and learning new creative skills.",
  });

  const [teaches, setTeaches] = useState(["React", "Next.js"]);
  const [wants, setWants] = useState(["Guitar", "Photography"]);
  const [newTeach, setNewTeach] = useState("");
  const [newWant, setNewWant] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSkill = (type) => {
    if (type === "teach" && newTeach.trim()) {
      setTeaches([...teaches, newTeach.trim()]);
      setNewTeach("");
    }
    if (type === "want" && newWant.trim()) {
      setWants([...wants, newWant.trim()]);
      setNewWant("");
    }
  };

  const removeSkill = (type, skill) => {
    if (type === "teach") setTeaches(teaches.filter((s) => s !== skill));
    if (type === "want") setWants(wants.filter((s) => s !== skill));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, name: formData.name });
    console.log("Profile saved:", { ...formData, teaches, wants });
    alert("Profile updated!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 border border-border flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-text-secondary mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1.5">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={3}
          className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors resize-none"
        />
      </div>

      <SkillSection
        title="Skills You Teach"
        skills={teaches}
        type="teach"
        value={newTeach}
        onChange={(e) => setNewTeach(e.target.value)}
        onAdd={addSkill}
        onRemove={removeSkill}
      />

      <SkillSection
        title="Skills You Want to Learn"
        skills={wants}
        type="want"
        value={newWant}
        onChange={(e) => setNewWant(e.target.value)}
        onAdd={addSkill}
        onRemove={removeSkill}
      />

      <button
        type="submit"
        className="mt-2 self-start px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:opacity-90 transition-opacity"
      >
        Save Changes
      </button>
    </motion.form>
  );
}