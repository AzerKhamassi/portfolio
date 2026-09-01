import type { Dictionary } from "@/i18n/dictionary";

export default function Education({ dict }: Readonly<{ dict: Dictionary }>) {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-sm font-bold text-accent">{dict.education.sectionLabel}</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="font-bold">{dict.education.degree}</h3>
          <p className="mt-1 text-sm text-ink-soft">{dict.education.school}</p>
          <p className="mt-1 text-xs text-ink-soft">{dict.education.period}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-ink">{dict.education.certificatesLabel}</p>
          <ul className="mt-3 flex flex-col gap-3 text-sm">
            {dict.education.certificates.map((cert) => (
              <li key={cert.name}>
                <p className="text-ink">{cert.name}</p>
                <p className="text-xs text-ink-soft">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
