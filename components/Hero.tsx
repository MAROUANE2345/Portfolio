import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="blueprint-grid border-b border-ink/10">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="reveal font-display text-sm uppercase tracking-widest text-line">
          {profile.location}
        </p>
        <h1 className="reveal mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p
          className="reveal mt-3 max-w-xl font-display text-xl text-blueprint sm:text-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.role}
        </p>
        <p
          className="reveal mt-6 max-w-lg text-base leading-relaxed text-ink/70"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.summary}
        </p>
        <div
          className="reveal mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projets"
            className="rounded-sm bg-blueprint px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink transition-colors"
          >
            Voir les projets
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink hover:border-ink/50 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
