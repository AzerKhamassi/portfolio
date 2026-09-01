import ThemeToggle from '@/components/ThemeToggle'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import MobileNavTrigger from '@/components/MobileNavTrigger'
import type { Dictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/locales'

export default function Header({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  const links = [
    { href: '#work', label: dict.nav.work },
    { href: '#about', label: dict.nav.about },
    { href: '#experience', label: dict.nav.experience },
    { href: '#education', label: dict.nav.education },
    { href: '#contact', label: dict.nav.contact },
  ]

  return (
    <header className='sticky top-0 z-50 border-b-2 border-line bg-paper/95 backdrop-blur'>
      <div className='mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 sm:px-6'>
        <a href='#top' className='text-sm font-bold tracking-tight'>
          [ A_K ]
        </a>
        <div className='flex items-center gap-5'>
          <nav className='hidden items-center gap-5 text-sm text-ink-soft sm:flex'>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='transition-colors hover:text-accent'
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className='flex items-center gap-3'>
            <LanguageSwitcher locale={locale} />
            <ThemeToggle dict={dict} />
            <MobileNavTrigger />
          </div>
        </div>
      </div>
    </header>
  )
}
