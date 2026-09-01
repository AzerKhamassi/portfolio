"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import { toggleTheme } from "@/lib/theme";
import { useTerminal } from "@/components/terminal-context";

type Line = { id: number; type: "input" | "output"; text: string };

const GITHUB_URL = "https://github.com/AzerKhamassi";
const LINKEDIN_URL = "https://linkedin.com/in/azer-khamassi";
const EMAIL_HREF = "mailto:azer.khamassi@gmail.com";

const SECTION_HASHES: Record<string, string> = {
  about: "about",
  work: "work",
  projects: "work",
  experience: "experience",
  education: "education",
  contact: "contact",
};

export default function Terminal({ dict }: Readonly<{ dict: Dictionary }>) {
  const t = dict.terminal;
  const { open, setOpen } = useTerminal();
  const [history, setHistory] = useState<Line[]>([{ id: 0, type: "output", text: t.intro }]);
  const [value, setValue] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  useEffect(() => {
    if (!open) return;
    // Deferred via rAF so the panel has actually expanded before we scroll
    // to it (otherwise #terminal's collapsed height is used, landing short).
    // preventScroll on focus stops it from fighting that scroll.
    const raf = requestAnimationFrame(() => {
      document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth", block: "start" });
      inputRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [open]);

  const print = (text: string) =>
    setHistory((prev) => [...prev, { id: nextId.current++, type: "output", text }]);

  const run = (raw: string) => {
    const command = raw.trim().toLowerCase();
    setHistory((prev) => [...prev, { id: nextId.current++, type: "input", text: raw }]);
    if (!command) return;

    switch (true) {
      case command === "help": {
        const lines = Object.entries(t.commands).map(
          ([name, description]: [string, string]) => `  ${name.padEnd(11)} ${description}`,
        );
        print([t.helpIntro, ...lines].join("\n"));
        break;
      }
      case command === "whoami":
        print(t.whoami);
        break;
      case command === "azer":
        print(t.azer);
        break;
      case command === "pwd":
        print(t.pwd);
        break;
      case command === "ls":
        print(t.ls);
        break;
      case command in SECTION_HASHES: {
        window.location.hash = SECTION_HASHES[command];
        print(t.navigating.replace("{section}", command));
        break;
      }
      case command === "theme": {
        const next = toggleTheme();
        print(t.themeToggled.replace("{theme}", next === "dark" ? t.themeDark : t.themeLight));
        break;
      }
      case command === "clear":
        setHistory([]);
        return;
      case command === "github":
        print(t.opening.replace("{label}", "github"));
        window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
        break;
      case command === "linkedin":
        print(t.opening.replace("{label}", "linkedin"));
        window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
        break;
      case command === "email":
        print(t.opening.replace("{label}", "email"));
        window.location.href = EMAIL_HREF;
        break;
      case command === "date":
        print(t.dateLabel.replace("{date}", new Date().toLocaleDateString()));
        break;
      case command === "sudo":
        print(t.sudo);
        break;
      default:
        print(t.unknownCommand.replace("{command}", command));
    }
  };

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    run(value);
    setValue("");
  };

  return (
    <div id="terminal" className="mt-6 scroll-mt-24">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="text-xs text-ink-soft transition-colors hover:text-accent"
        >
          {open ? "[ - ] terminal" : "[ + ] terminal"}
        </button>
        <button
          type="button"
          onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
          aria-label={dict.footer.backToTop}
          className="text-xs text-ink-soft transition-colors hover:text-accent"
        >
          ↑
        </button>
      </div>

      {open && (
        <div className="mt-3 border-2 border-line bg-paper">
          <div ref={outputRef} className="max-h-56 overflow-y-auto px-3 py-2 text-xs leading-relaxed">
            {history.map((line) => (
              <p key={line.id} className="whitespace-pre-wrap">
                {line.type === "input" ? `[ ${t.prompt} ]$ ${line.text}` : line.text}
              </p>
            ))}
          </div>
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t-2 border-line px-3 py-2"
          >
            <label htmlFor="terminal-input" className="text-xs font-bold text-accent">
              [ {t.prompt} ]$
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-xs outline-none placeholder:text-ink-soft/60"
              placeholder="help"
            />
          </form>
        </div>
      )}
    </div>
  );
}
