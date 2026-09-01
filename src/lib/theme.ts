import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const THEME_EVENT = "theme-change";

export function getStoredTheme(): Theme | null {
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function subscribeToSystemTheme(callback: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function subscribeToStoredTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

export function useSystemTheme(): Theme {
  return useSyncExternalStore(subscribeToSystemTheme, getSystemTheme, () => "light");
}

export function useStoredTheme(): Theme | null {
  return useSyncExternalStore(subscribeToStoredTheme, getStoredTheme, () => null);
}

/**
 * Writes the theme to the DOM dataset + localStorage and notifies other
 * mounted instances via a custom event (native `storage` events don't fire
 * in the tab that wrote the value). No view-transition here — callers that
 * want the circular reveal animation (ThemeToggle's button) wrap this call
 * in `document.startViewTransition` themselves.
 */
export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

/** Reads the current theme (stored preference, falling back to system) and flips it. Returns the new theme. */
export function toggleTheme(): Theme {
  const current = getStoredTheme() ?? getSystemTheme();
  const next: Theme = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
