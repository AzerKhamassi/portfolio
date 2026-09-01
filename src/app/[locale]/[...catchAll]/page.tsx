import { notFound } from "next/navigation";

// Any path under /en/* or /fr/* that doesn't match a real route lands
// here. Calling notFound() explicitly, from inside a matched route, is
// what reliably triggers the nested [locale]/not-found.tsx boundary —
// a genuinely unmatched URL (no route at all) can't resolve into the
// [locale] segment on its own, so it would otherwise fall through to the
// root not-found.tsx instead.
export default function CatchAll() {
  notFound();
}
