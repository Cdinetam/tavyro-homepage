const THOUGHTS = [
  "I have a fantasy I've never told anyone.",
  "I love my partner, but something feels missing.",
  "I want something I don't fully understand.",
  "I'm tired of pretending everything is fine.",
  "I don't know what I really want anymore.",
] as const;

export default function ExampleThoughts() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="thoughts-heading">
      <div className="container-narrow">
        <p className="section-eyebrow">Examples</p>
        <h2
          id="thoughts-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Thoughts that often stay unspoken
        </h2>
        <ul className="mt-8 space-y-3">
          {THOUGHTS.map((thought) => (
            <li
              key={thought}
              className="border-l-2 border-ink/30 pl-4 text-base leading-relaxed text-[#072820]"
            >
              {thought}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base italic text-[#072820]">
          Or something completely different. There&apos;s no right place to start.
        </p>
      </div>
    </section>
  );
}
