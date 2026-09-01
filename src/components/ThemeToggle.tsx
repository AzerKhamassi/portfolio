"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import type { Dictionary } from "@/i18n/dictionary";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const THEME_EVENT = "theme-change";

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

function subscribeToStoredTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function getStoredTheme(): Theme | null {
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
}

function useStoredTheme(): Theme | null {
  return useSyncExternalStore(subscribeToStoredTheme, getStoredTheme, () => null);
}

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

    const applyTheme = () => {
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new Event(THEME_EVENT));
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
      className="inline-flex h-7 w-7 items-center justify-center border-2 border-line text-xs font-bold leading-none transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
      suppressHydrationWarning
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
