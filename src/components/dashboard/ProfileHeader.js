"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useUser } from "@/context/UserContext";
export default function ProfileHeader() {
 const { user, setUser } = useUser();
const avatar = user.avatar || "https://i.pravatar.cc/300?img=8";
  const fileInputRef = useRef(null);

const handleFileChange = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    setUser({ ...user, avatar: reader.result });
  };
  reader.readAsDataURL(file);
};

  return (
    <div className="glass-card rounded-2xl p-8 border border-border flex flex-col sm:flex-row items-center gap-6 mb-6">
      {/* Avatar with upload overlay */}
      <div className="relative group shrink-0">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1"
        >
          <Camera size={20} className="text-white" />
          <span className="text-xs text-white font-medium">Change</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="text-center sm:text-left">
        <h2 className="font-heading text-2xl font-bold text-text-primary">
  {user.name}
</h2>
        <p className="text-text-secondary text-sm mt-1">
          Explorer Plan · Joined Jan 2026
        </p>
      </div>
    </div>
  );
}