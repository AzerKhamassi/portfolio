import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileNav from "@/components/MobileNav";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { getThemeCookie } from "@/lib/theme-cookie";

export default async function Header({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  const theme = await getThemeCookie();
  const links = [
    { href: "#work", label: dict.nav.work },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="text-sm font-bold tracking-tight">
          [ AZER_KHAMASSI ]
        </a>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-5 text-sm text-ink-soft sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle initialTheme={theme} />
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
