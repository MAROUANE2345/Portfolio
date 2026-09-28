import { profile } from "@/lib/data";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-line">.</span>
          {profile.name.split(" ")[1]}
        </a>
        <nav className="hidden gap-6 text-sm text-ink/70 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-sm border border-blueprint px-3 py-1.5 text-sm text-blueprint hover:bg-blueprint hover:text-paper transition-colors"
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}
