"use client";

import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileNav({
  links,
}: Readonly<{ links: NavLink[] }>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="border-2 border-line px-2 py-1 text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
      >
        {open ? "✕" : "☰"}
      </button>

      <button
        type="button"
        inert={!open}
        aria-label="Close navigation menu"
        className={`fixed inset-0 z-40 cursor-default transition-opacity duration-200 ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <nav
        inert={!open}
        className={`absolute inset-x-0 top-full z-50 flex origin-top flex-col gap-1 border-b-2 border-line bg-paper px-6 py-4 text-sm text-ink-soft transition-[opacity,transform] duration-200 ease-out ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="py-2 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
