import Link from "next/link";

// Deliberately locale-agnostic and 100% static: not-found.tsx files don't
// receive route params, and any dynamic API (headers(), cookies()) used
// here taints the whole [locale] segment's static generation — including
// /en and /fr themselves. Rather than risk that, this shows both languages
// and lets the visitor pick.
export default function LocaleNotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm text-accent">{"// 404"}</p>
      <h1 className="mt-3 text-6xl font-bold leading-tight sm:text-7xl">404</h1>
      <p className="mx-auto mt-4 max-w-prose text-[15px] text-ink-soft">
        This page doesn&apos;t exist, or it moved.
        <br />
        Cette page n&apos;existe pas, ou elle a été déplacée.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/en"
          className="retro-shadow-sm border-2 border-line bg-accent px-4 py-2 font-bold text-paper transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          back home →
        </Link>
        <Link
          href="/fr"
          className="retro-shadow-sm border-2 border-line px-4 py-2 font-bold transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          retour à l&apos;accueil →
        </Link>
      </div>
    </main>
  );
}
