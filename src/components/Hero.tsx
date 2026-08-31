import type { Dictionary } from "@/i18n/dictionary";

export default function Hero({ dict }: Readonly<{ dict: Dictionary }>) {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-16 pb-10">
      <p className="text-sm text-accent">{dict.hero.eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        Azer Khamassi
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        <span className="blink-cursor">{dict.hero.tagline}</span>
      </p>
      <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-soft">
        {dict.hero.description}
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <a
          href="#contact"
          className="retro-shadow-sm border-2 border-line bg-accent px-4 py-2 font-bold text-paper transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          {dict.hero.ctaContact}
        </a>
        <a
          href="#work"
          className="retro-shadow-sm border-2 border-line px-4 py-2 font-bold transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          {dict.hero.ctaWork}
        </a>
      </div>
    </section>
  );
}
