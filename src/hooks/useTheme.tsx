import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Keep document class and localStorage in sync; listen for cross-tab changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        setTheme(e.newValue === "dark" ? "dark" : "light");
      }
    };

    const onCustom = (e: Event) => {
      try {
        // @ts-ignore detail
        const next = (e as CustomEvent).detail as Theme;
        if (next) setTheme(next);
      } catch {
        /* ignore */
      }
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onPref = (ev: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(ev.matches ? "dark" : "light");
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("theme:changed", onCustom as EventListener);
    try {
      mq.addEventListener("change", onPref);
    } catch {
      // safari fallback
      // @ts-ignore
      mq.addListener(onPref);
    }

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("theme:changed", onCustom as EventListener);
      try {
        mq.removeEventListener("change", onPref);
      } catch {
        // @ts-ignore
        mq.removeListener(onPref);
      }
    };
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new CustomEvent("theme:changed", { detail: next }));
      return next;
    });
  }, []);

  return { theme, toggleTheme } as const;
}
