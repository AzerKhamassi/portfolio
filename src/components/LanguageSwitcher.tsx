import Link from "next/link";
import { locales, type Locale } from "@/i18n/locales";

const labels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export default function LanguageSwitcher({
  locale,
}: Readonly<{ locale: Locale }>) {
  return (
    <div className="flex items-center gap-1 text-xs">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-1">
          {index > 0 && <span className="text-ink-soft">/</span>}
          {loc === locale ? (
            <span className="font-bold text-accent">{labels[loc]}</span>
          ) : (
            <Link
              href={`/${loc}`}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              {labels[loc]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
