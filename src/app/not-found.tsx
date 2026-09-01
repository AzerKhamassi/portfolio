import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm text-accent">{"// 404: page not found"}</p>
      <h1 className="mt-3 text-6xl font-bold leading-tight sm:text-7xl">404</h1>
      <p className="mx-auto mt-4 max-w-prose text-[15px] text-ink-soft">
        This page doesn&apos;t exist, or it moved.
      </p>
      <div className="mt-8">
        <Link
          href="/en"
          className="retro-shadow-sm border-2 border-line bg-accent px-4 py-2 font-bold text-paper transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
        >
          back home →
        </Link>
      </div>
    </main>
  );
}
