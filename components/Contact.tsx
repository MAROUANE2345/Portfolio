import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-2xl font-medium text-ink">Contact</h2>
      <p className="mt-4 max-w-md text-ink/70">
        Disponible pour un poste de développeur full-stack junior ou une collaboration ponctuelle.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
        <a href={`mailto:${profile.email}`} className="text-blueprint hover:text-ink">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="text-blueprint hover:text-ink">
          {profile.phone}
        </a>
        <span className="text-ink/60">GitHub · {profile.github}</span>
        <span className="text-ink/60">LinkedIn · {profile.linkedin}</span>
      </div>
      <p className="mt-16 border-t border-ink/10 pt-6 text-xs text-ink/40">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
