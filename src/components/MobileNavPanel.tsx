"use client";

import { useEffect } from "react";
import { useMobileNav } from "@/components/mobile-nav-context";
import { useActiveSection } from "@/lib/use-active-section";

type NavLink = { href: string; label: string };

const SECTION_IDS = ["work", "about", "experience", "education", "contact"];

export default function MobileNavPanel({
  links,
}: Readonly<{ links: NavLink[] }>) {
  const { open, setOpen } = useMobileNav();
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  return (
    <nav
      inert={!open}
      className={`fixed inset-0 z-50 flex flex-col bg-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b-2 border-line px-6 py-4">
        <span className="text-sm font-bold tracking-tight">[ MENU ]</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
          className="border-2 border-line px-2 py-1 text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          ✕
        </button>
      </div>

      <ul className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
        {links.map((link, index) => {
          const isActive = activeId === link.href.slice(1);
          return (
            <li
              key={link.href}
              className={`w-full transition-all duration-500 ease-out ${
                open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${150 + index * 90}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block text-2xl font-bold transition-colors ${
                  isActive ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
