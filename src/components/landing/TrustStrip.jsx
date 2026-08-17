const trustItems = [
  "🔥 1,200+ Active Swappers",
  "🌍 Available in 50+ Countries",
  "⭐ 4.8/5 Average Rating",
  "💬 500+ Skills Exchanged",
  "🤝 100% Free, Always",
  "🚀 New Matches Every Day",
];

export default function TrustStrip() {
  const doubled = [...trustItems, ...trustItems];

  return (
    <section className="py-6 bg-bg-secondary border-y border-border overflow-hidden">
      <div className="flex animate-scroll">
        {doubled.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-8 text-text-secondary text-sm font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}