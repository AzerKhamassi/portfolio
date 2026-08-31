import ContactForm from "@/components/ContactForm";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export default function Contact({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-sm font-bold text-accent">{dict.contact.sectionLabel}</h2>
      <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-ink-soft">
        {dict.contact.intro}
      </p>
      <ContactForm dict={dict} locale={locale} />
    </section>
  );
}
