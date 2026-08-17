"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Send, Search, Phone, Video, MoreVertical } from "lucide-react";
import { conversations } from "@/data/conversations";

export default function MessagesPanel() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [draft, setDraft] = useState("");

  const activeChat = conversations.find((c) => c.id === activeId);

  const handleSend = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    // Real send logic comes with backend
    setDraft("");
  };

  return (
    <div className="glass-card rounded-2xl border border-border overflow-hidden flex h-[calc(100vh-180px)]">
      {/* Left: Conversation list */}
      <div className="w-full sm:w-80 border-r border-border flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-bg-secondary border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors relative ${
                activeId === c.id ? "bg-accent-purple/10" : "hover:bg-bg-secondary"
              }`}
            >
              {activeId === c.id && (
                <motion.div
                  layoutId="chat-active-bar"
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-purple"
                />
              )}
              <div className="relative shrink-0">
                <div className="relative w-11 h-11 rounded-full overflow-hidden">
                  <Image src={c.avatar} alt={c.name} fill sizes="44px" className="object-cover" />
                </div>
                {c.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-bg-card" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-text-primary truncate">{c.name}</p>
                  <span className="text-xs text-text-muted shrink-0">{c.time}</span>
                </div>
                <p className="text-xs text-text-secondary truncate mt-0.5">{c.lastMessage}</p>
              </div>

              {c.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-accent-purple text-white text-[10px] font-semibold flex items-center justify-center shrink-0">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Chat view */}
      <div className="hidden sm:flex flex-1 flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={activeChat.avatar} alt={activeChat.name} fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{activeChat.name}</p>
              <p className="text-xs text-text-muted">
                {activeChat.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full hover:bg-bg-secondary flex items-center justify-center text-text-secondary transition-colors">
              <Phone size={16} />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-bg-secondary flex items-center justify-center text-text-secondary transition-colors">
              <Video size={16} />
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-bg-secondary flex items-center justify-center text-text-secondary transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {activeChat.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.from === "me"
                      ? "self-end bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-br-md"
                      : "self-start bg-bg-secondary text-text-primary rounded-bl-md border border-border"
                  }`}
                >
                  {msg.text}
                  <p
                    className={`text-[10px] mt-1 ${
                      msg.from === "me" ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {msg.time}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="flex items-center gap-3 px-6 py-4 border-t border-border">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-bg-secondary border border-border rounded-full px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent-purple transition-colors"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-white shrink-0 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}