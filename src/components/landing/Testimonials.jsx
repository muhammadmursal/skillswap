const testimonials = [
  {
    name: "Ayesha K.",
    role: "Learned Photography",
    text: "I taught someone Excel and learned photography in return. Best trade ever — no money changed hands!",
  },
  {
    name: "Hamza R.",
    role: "Learned Guitar",
    text: "SkillSwap matched me with a guitar teacher who wanted to learn web design. Win-win experience.",
  },
  {
    name: "Sara M.",
    role: "Learned Spanish",
    text: "The matching system actually works. Found someone within a day who wanted my cooking skills.",
  },
  {
    name: "Bilal A.",
    role: "Learned Video Editing",
    text: "Real-time chat made scheduling sessions so easy. Already completed 3 skill swaps this month.",
  },
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-bg-primary overflow-hidden">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-12 px-6">
        What People Are Saying
      </h2>

      <div className="flex animate-scroll">
        {doubled.map((t, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-6 border border-border mx-3 flex-shrink-0 w-80"
          >
            <p className="text-text-secondary text-sm mb-4">"{t.text}"</p>
            <div>
              <p className="text-text-primary font-semibold text-sm">{t.name}</p>
              <p className="text-accent-purple text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}