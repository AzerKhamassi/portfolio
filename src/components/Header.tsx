import ThemeToggle from '@/components/ThemeToggle'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import MobileNavTrigger from '@/components/MobileNavTrigger'
import DesktopNav from '@/components/DesktopNav'
import ScrollTopButton from '@/components/ScrollTopButton'
import type { Dictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/locales'

export default function Header({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  return (
    <header className='sticky top-0 z-50 border-b-2 border-line bg-paper/95 backdrop-blur'>
      <div className='mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4 sm:px-6'>
        <ScrollTopButton />
        <div className='flex items-center gap-5'>
          <DesktopNav dict={dict} />
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
