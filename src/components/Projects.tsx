import type { Dictionary } from "@/i18n/dictionary";

export default function Projects({ dict }: Readonly<{ dict: Dictionary }>) {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-sm font-bold text-accent">{dict.projects.sectionLabel}</h2>
      <div className="mt-6 flex flex-col gap-5">
        {dict.projects.items.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="retro-shadow-sm group block border-2 border-line bg-card p-5 transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold group-hover:text-accent">
                {project.title}
              </h3>
              <span className="shrink-0 text-xs text-ink-soft">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line px-2 py-0.5 text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
