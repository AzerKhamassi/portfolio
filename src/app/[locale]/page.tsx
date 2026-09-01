import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNavPanel from "@/components/MobileNavPanel";
import KeyboardShortcutsOverlay from "@/components/KeyboardShortcutsOverlay";
import { MobileNavProvider } from "@/components/mobile-nav-context";
import { TerminalProvider } from "@/components/terminal-context";
import { ShortcutsProvider } from "@/components/shortcuts-context";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, locales } from "@/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Readonly<PageProps<"/[locale]">>) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  const mobileLinks = [
    { href: "#work", label: dict.projects.sectionLabel },
    { href: "#about", label: dict.about.sectionLabel },
    { href: "#experience", label: dict.experience.sectionLabel },
    { href: "#education", label: dict.education.sectionLabel },
    { href: "#contact", label: dict.contact.sectionLabel },
  ];

  return (
    <MobileNavProvider>
      <TerminalProvider>
        <ShortcutsProvider>
          <Header dict={dict} locale={locale} />
          <MobileNavPanel links={mobileLinks} />
          <main>
            <Hero dict={dict} />
            <Projects dict={dict} />
            <About dict={dict} />
            <Experience dict={dict} />
            <Education dict={dict} />
            <Contact dict={dict} locale={locale} />
          </main>
          <Footer dict={dict} />
          <KeyboardShortcutsOverlay dict={dict} />
        </ShortcutsProvider>
      </TerminalProvider>
    </MobileNavProvider>
  );
}
