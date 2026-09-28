import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl border-b border-ink/10 px-6 py-20">
      <h2 className="font-display text-2xl font-medium text-ink">Expériences professionnelles</h2>
      <div className="mt-10 space-y-10 border-l border-ink/15 pl-8">
        {experiences.map((exp) => (
          <div key={exp.title} className="relative">
            <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-line" />
            <p className="font-display text-xs uppercase tracking-wide text-line">{exp.period}</p>
            <h3 className="mt-1 font-display text-lg font-medium text-ink">{exp.title}</h3>
            <p className="text-sm text-ink/60">{exp.org}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink/75">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
