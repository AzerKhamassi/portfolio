import type { Dictionary } from "@/i18n/dictionary";

export default function About({ dict }: Readonly<{ dict: Dictionary }>) {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-sm font-bold text-accent">{dict.about.sectionLabel}</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-[1.4fr_1fr]">
        <div className="text-[15px] leading-relaxed text-ink-soft">
          {dict.about.paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 20)} className={index > 0 ? "mt-4" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-ink">{dict.about.stackLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            {dict.about.stack.map((item) => (
              <li key={item} className="border border-line px-2 py-0.5 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
