import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionary";
import en from "@/i18n/dictionaries/en";
import fr from "@/i18n/dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
