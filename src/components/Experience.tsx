import type { Dictionary } from "@/i18n/dictionary";

export default function Experience({ dict }: Readonly<{ dict: Dictionary }>) {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-sm font-bold text-accent">{dict.experience.sectionLabel}</h2>
      <div className="relative mt-8">
        <div aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-line" />
        <ol className="flex flex-col gap-10">
          {dict.experience.items.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-8">
              <span
                aria-hidden
                className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 border-2 border-accent bg-paper"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-bold">
                  {job.role} <span className="text-ink-soft">· {job.company}</span>
                </h3>
                <span className="shrink-0 text-xs text-accent">{job.period}</span>
              </div>
              <p className="mt-1 text-xs text-ink-soft">{job.location}</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-ink-soft">
                {job.achievements.map((achievement) => (
                  <li key={achievement.slice(0, 24)} className="flex gap-2">
                    <span aria-hidden className="mt-1.75 h-1 w-1 shrink-0 bg-accent" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                {job.tools.map((tool) => (
                  <li key={tool} className="border border-line px-2 py-0.5 text-ink-soft">
                    {tool}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
