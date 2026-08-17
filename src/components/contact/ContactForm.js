"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request (real logic comes with backend)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", icon: User, placeholder: "Jane Doe" },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "jane@example.com" },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-10 flex flex-col items-center text-center gap-4 min-h-[520px] justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center"
        >
          <CheckCircle2 size={32} className="text-white" />
        </motion.div>
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          Message Sent
        </h3>
        <p className="text-text-secondary max-w-xs">
          Thanks for reaching out — our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-2 text-sm text-accent-purple hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden"
    >
      {/* subtle glow accent */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <h2 className="font-heading text-2xl font-bold text-text-primary">
          Send us a message
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          Fill out the form and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
        {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
          <div key={name} className="relative">
            <label
              htmlFor={name}
              className={`block text-xs font-medium mb-1.5 transition-colors ${
                focusedField === name ? "text-accent-purple" : "text-text-secondary"
              }`}
            >
              {label}
            </label>
            <div className="relative">
              <Icon
                size={16}
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
                  focusedField === name ? "text-accent-purple" : "text-text-muted"
                }`}
              />
              <input
                id={name}
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                placeholder={placeholder}
                required
                className="w-full bg-bg-secondary border border-border rounded-xl pl-10 pr-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] transition-all"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        <label
          htmlFor="subject"
          className={`block text-xs font-medium mb-1.5 transition-colors ${
            focusedField === "subject" ? "text-accent-purple" : "text-text-secondary"
          }`}
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField("subject")}
          onBlur={() => setFocusedField(null)}
          placeholder="How can we help?"
          required
          className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] transition-all"
        />
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 transition-colors ${
            focusedField === "message" ? "text-accent-purple" : "text-text-secondary"
          }`}
        >
          <MessageSquare size={12} />
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell us more about your question..."
          required
          rows={5}
          className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-purple focus:shadow-[0_0_0_3px_rgba(168,85,247,0.15)] transition-all resize-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="relative mt-2 w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}