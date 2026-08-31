import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { locales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
