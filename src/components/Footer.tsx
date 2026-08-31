import type { Dictionary } from "@/i18n/dictionary";

export default function Footer({ dict }: Readonly<{ dict: Dictionary }>) {
  const socials = [
    { label: dict.footer.email, href: "mailto:azer.khamassi@gmail.com" },
    { label: dict.footer.github, href: "https://github.com/AzerKhamassi" },
    { label: dict.footer.linkedin, href: "https://linkedin.com/in/azer-khamassi" },
  ];

  return (
    <footer className="mt-auto border-t-2 border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Azer Khamassi</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
