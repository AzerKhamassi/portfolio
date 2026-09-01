import type { Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ead9" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0c" },
  ],
};

const themeInitScript = `
(function () {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.classList.add("theme-transitions");
      });
    });
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col crt-flicker">
        {/* Must run synchronously, before anything else paints, to avoid a
            flash of the wrong theme. We never render our own <head> element
            (Next.js and the host's edge both inject content into it that
            React doesn't know about, which breaks hydration) — being the
            first thing in <body> still runs early enough. */}
        <script>{themeInitScript}</script>
        {children}
      </body>
    </html>
  );
}
