"use client";

import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import type { Dictionary } from "@/i18n/dictionary";
import { applyTheme, useStoredTheme, useSystemTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle({ dict }: Readonly<{ dict: Dictionary }>) {
  const systemTheme = useSystemTheme();
  const storedTheme = useStoredTheme();
  const theme = storedTheme ?? systemTheme;
  const transitioning = useRef(false);

  // Reconcile a stored preference that differs from the system default
  // (the static page has no way to know it ahead of time).
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition || transitioning.current) {
      applyTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    document.documentElement.style.setProperty("--theme-toggle-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-toggle-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-toggle-radius", `${radius}px`);

    transitioning.current = true;
    try {
      const transition = document.startViewTransition(() => flushSync(() => applyTheme(next)));
      transition.finished
        .catch(() => {})
        .finally(() => {
          transitioning.current = false;
        });
    } catch {
      transitioning.current = false;
      applyTheme(next);
    }
  };

  const label = theme === "dark" ? dict.theme.switchToLight : dict.theme.switchToDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-7 w-7 items-center justify-center border-2 border-line text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
      suppressHydrationWarning
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
