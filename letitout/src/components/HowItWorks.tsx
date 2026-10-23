const ITEMS = [
  {
    title: "How the conversation works",
    body: "You write freely. The AI listens, responds with care, and asks one thoughtful question at a time when it helps. There is no script to follow and no outcome you must reach.",
  },
  {
    title: "Privacy and control",
    body: "Guest conversations stay in your browser session for this early version. Paid accounts will let you save, rename, or delete chats. We do not use conversation content for advertising.",
  },
  {
    title: "Not a substitute for therapy",
    body: "This is a private AI conversation space — not therapy, coaching, or clinical care. If you need professional support, please reach out to a qualified human.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-ink/10 py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="container-narrow">
        <p className="section-eyebrow">About</p>
        <h2
          id="how-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          A quiet space to speak
        </h2>
        <div className="mt-10 space-y-8" id="privacy">
          {ITEMS.map((item) => (
            <article key={item.title}>
              <h3 className="text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#072820]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
