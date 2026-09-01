'use client'

import { useActiveSection } from '@/lib/use-active-section'
import { SECTION_IDS } from '@/lib/sections'
import type { Dictionary } from '@/i18n/dictionary'

type NavLink = { href: string; label: string }

export default function DesktopNav({ dict }: Readonly<{ dict: Dictionary }>) {
  const links: NavLink[] = [
    { href: '#work', label: dict.nav.work },
    { href: '#about', label: dict.nav.about },
    { href: '#experience', label: dict.nav.experience },
    { href: '#education', label: dict.nav.education },
    { href: '#contact', label: dict.nav.contact },
  ]

  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav className='hidden items-center gap-5 text-sm text-ink-soft sm:flex'>
      {links.map((link) => {
        const isActive = activeId === link.href.slice(1)
        return (
          <a
            key={link.href}
            href={link.href}
            className={
              isActive
                ? 'font-bold text-accent transition-colors'
                : 'transition-colors hover:text-accent'
            }
          >
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
