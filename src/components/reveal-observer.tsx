"use client";

import { useEffect } from "react";

/** Marca `data-shown` nos elementos `[data-reveal]` quando entram na tela. */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    (window as Window & { __revealReady?: boolean }).__revealReady = true;
    if (!("motion" in root.dataset)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
