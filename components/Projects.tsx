import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-5xl border-b border-ink/10 px-6 py-20">
      <h2 className="font-display text-2xl font-medium text-ink">Projets</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="corner-marks flex flex-col gap-4 border border-ink/10 p-6"
          >
            <div>
              {p.period && (
                <p className="font-display text-xs uppercase tracking-wide text-line">
                  {p.period}
                </p>
              )}
              <h3 className="mt-1 font-display text-lg font-medium text-ink">{p.title}</h3>
            </div>
            <ul className="flex-1 space-y-1.5 text-sm leading-relaxed text-ink/75">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 border-t border-ink/10 pt-4">
              {p.stack.map((s) => (
                <span key={s} className="text-xs text-blueprint">
                  {s}
                  {s !== p.stack[p.stack.length - 1] ? " ·" : ""}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
