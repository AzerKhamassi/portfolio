import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, locales } from "@/i18n/locales";
import { siteUrl } from "@/lib/site";
import SetHtmlLang from "@/components/SetHtmlLang";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const path = locale === "en" ? "/en" : "/fr";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s | Azer Khamassi`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Azer Khamassi", url: siteUrl }],
    creator: "Azer Khamassi",
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        en: `${siteUrl}/en`,
        fr: `${siteUrl}/fr`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Azer Khamassi",
      locale: locale === "en" ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Azer Khamassi",
    jobTitle: dict.meta.jobTitle,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/icon.svg`,
    email: "mailto:azer.khamassi@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sousse",
      addressCountry: "TN",
    },
    knowsLanguage: ["en", "fr"],
    sameAs: [
      "https://github.com/AzerKhamassi",
      "https://linkedin.com/in/azer-khamassi",
    ],
  };

  return (
    <>
      <SetHtmlLang locale={locale} />
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      {children}
    </>
  );
}
