import { education, languages, softSkills } from "@/lib/data";

export default function Education() {
  return (
    <section id="formation" className="mx-auto max-w-5xl border-b border-ink/10 px-6 py-20">
      <div className="grid gap-16 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-medium text-ink">Formation</h2>
          <div className="mt-8 space-y-6">
            {education.map((e) => (
              <div key={e.title}>
                <p className="font-display text-xs uppercase tracking-wide text-line">
                  {e.period}
                </p>
                <h3 className="mt-1 font-medium text-ink">{e.title}</h3>
                <p className="text-sm text-ink/60">{e.org}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-medium text-ink">Langues</h2>
          <ul className="mt-8 space-y-2 text-sm">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-ink/10 pb-2">
                <span className="text-ink">{l.name}</span>
                <span className="text-ink/60">{l.level}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-2xl font-medium text-ink">Soft skills</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="rounded-sm border border-ink/15 px-2.5 py-1 text-sm text-ink/80">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
