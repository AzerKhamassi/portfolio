"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import type { Theme } from "@/lib/theme-cookie";
import type { Dictionary } from "@/i18n/dictionary";

function subscribeToSystemTheme(callback: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useSystemTheme(): Theme {
  return useSyncExternalStore(subscribeToSystemTheme, getSystemTheme, () => "light");
}

export default function ThemeToggle({
  initialTheme,
  dict,
}: Readonly<{ initialTheme: Theme | null; dict: Dictionary }>) {
  const [explicitTheme, setExplicitTheme] = useState<Theme | null>(initialTheme);
  const systemTheme = useSystemTheme();
  const theme = explicitTheme ?? systemTheme;
  const transitioning = useRef(false);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    const applyTheme = () => {
      document.documentElement.dataset.theme = next;
      document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
      setExplicitTheme(next);
    };

    if (!document.startViewTransition || transitioning.current) {
      applyTheme();
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
      const transition = document.startViewTransition(() => flushSync(applyTheme));
      transition.finished
        .catch(() => {})
        .finally(() => {
          transitioning.current = false;
        });
    } catch {
      transitioning.current = false;
      applyTheme();
    }
  };

  const label = theme === "dark" ? dict.theme.switchToLight : dict.theme.switchToDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="border-2 border-line px-2 py-1 text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
      suppressHydrationWarning
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
