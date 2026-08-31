import { cookies } from "next/headers";

export type Theme = "light" | "dark";

export async function getThemeCookie(): Promise<Theme | null> {
  const store = await cookies();
  const value = store.get("theme")?.value;
  return value === "light" || value === "dark" ? value : null;
}
