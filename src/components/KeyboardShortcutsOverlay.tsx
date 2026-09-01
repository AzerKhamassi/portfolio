"use client";

import { useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import { useShortcuts } from "@/components/shortcuts-context";
import { useTerminal } from "@/components/terminal-context";
import { toggleTheme } from "@/lib/theme";
import { SECTION_IDS } from "@/lib/sections";

const SECTION_KEYS = ["1", "2", "3", "4", "5"];

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target.isContentEditable
  );
}

export default function KeyboardShortcutsOverlay({ dict }: Readonly<{ dict: Dictionary }>) {
  const { open, setOpen } = useShortcuts();
  const { open: terminalOpen, setOpen: setTerminalOpen } = useTerminal();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      if (open) {
        if (event.key === "?" || event.key === "Escape") setOpen(false);
        return;
      }

      switch (event.key) {
        case "?":
          setOpen(true);
          break;
        case "`":
          setTerminalOpen(!terminalOpen);
          break;
        case "t":
          toggleTheme();
          break;
        case "0":
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        default:
          if (SECTION_KEYS.includes(event.key)) {
            const id = SECTION_IDS[SECTION_KEYS.indexOf(event.key)];
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen, terminalOpen, setTerminalOpen]);

  const rows: { key: string; label: string }[] = [
    { key: "?", label: dict.shortcuts.help },
    { key: "`", label: dict.shortcuts.terminal },
    { key: "t", label: dict.shortcuts.theme },
    { key: "0", label: dict.shortcuts.top },
    { key: "1", label: dict.nav.work },
    { key: "2", label: dict.nav.about },
    { key: "3", label: dict.nav.experience },
    { key: "4", label: dict.nav.education },
    { key: "5", label: dict.nav.contact },
    { key: "esc", label: dict.shortcuts.close },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={dict.shortcuts.title}
        title={dict.shortcuts.title}
        className="fixed bottom-4 right-4 z-40 hidden h-8 w-8 items-center justify-center border-2 border-line bg-paper text-xs font-bold text-ink-soft transition-colors hover:text-accent sm:flex"
      >
        ?
      </button>

      {open && (
        <button
          type="button"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
          aria-label={dict.shortcuts.close}
          className="fixed inset-0 z-50 flex items-center justify-center border-0 bg-ink/40 p-4"
        >
          <div className="retro-shadow w-full max-w-sm border-2 border-line bg-paper p-6">
            <p className="text-sm font-bold tracking-tight">[ ? ] {dict.shortcuts.title}</p>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              {rows.map((row) => (
                <li key={row.key} className="flex items-center justify-between gap-4">
                  <span className="text-ink-soft">{row.label}</span>
                  <kbd className="border border-line px-1.5 py-0.5 font-bold text-accent">
                    {row.key}
                  </kbd>
                </li>
              ))}
            </ul>
          </div>
        </button>
      )}
    </>
  );
}
