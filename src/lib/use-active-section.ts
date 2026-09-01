"use client";

import { useEffect, useState } from "react";

// Matches the sticky header (scroll-padding-top: 4.5rem) plus a little
// breathing room, so a section counts as "current" right as it clears it.
const HEADER_OFFSET = 88;

/**
 * Tracks which of the given section element ids is currently "active" (the
 * last one whose top has scrolled past the header) and returns its id, or
 * null before any section has been reached (e.g. above #top on first paint).
 *
 * Recomputed directly from element positions on every scroll frame, rather
 * than via IntersectionObserver: a shrunk-viewport observer only reports
 * *changed* entries, so a section shorter than that viewport window can
 * enter and exit between two reported changes and never register as active
 * — this happened with the short Education section.
 */
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return activeId;
}
