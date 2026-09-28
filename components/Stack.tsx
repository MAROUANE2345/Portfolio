import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl border-b border-ink/10 px-6 py-20">
      <h2 className="font-display text-2xl font-medium text-ink">Compétences techniques</h2>
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {stack.map((s) => (
          <div key={s.layer} className="bg-paper p-6">
            <p className="font-display text-sm uppercase tracking-wide text-line">{s.layer}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-sm border border-ink/15 px-2.5 py-1 text-sm text-ink/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
