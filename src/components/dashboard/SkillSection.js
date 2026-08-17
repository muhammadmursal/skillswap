"use client";

import { X } from "lucide-react";

export default function SkillSection({ title, skills, type, value, onChange, onAdd, onRemove }) {
  return (
    <div>
      <label className="block text-sm text-text-secondary mb-2">{title}</label>
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-1.5 bg-bg-secondary border border-border rounded-full px-3 py-1.5 text-sm text-text-primary"
          >
            {skill}
            <button
              type="button"
              onClick={() => onRemove(type, skill)}
              className="text-text-muted hover:text-accent-pink transition-colors"
            >
              <X size={13} />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd(type);
            }
          }}
          placeholder="Add a skill..."
          className="flex-1 bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors"
        />
        <button
          type="button"
          onClick={() => onAdd(type)}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-bg-card border border-border text-text-primary hover:border-accent-purple transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
}