"use client";

import { useMobileNav } from "@/components/mobile-nav-context";

export default function MobileNavTrigger() {
  const { open, setOpen } = useMobileNav();

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-label="Toggle navigation menu"
      aria-expanded={open}
      className="border-2 border-line px-2 py-1 text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 sm:hidden"
    >
      {open ? "✕" : "☰"}
    </button>
  );
}
