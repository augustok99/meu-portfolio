import { useEffect, useRef, useState } from "react";
import useInViewContext from "../context/useInViewContext";

// Hook robusto para detectar seção ativa
// - observa múltiplas seções
// - escolhe a seção com maior intersectionRatio
// - re-tenta observar seções que aparecem depois (MutationObserver)
export default function useActiveSection(sectionIds: string[]) {
  const { observe, unobserve } = useInViewContext();
  const [active, setActive] = useState<string | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const callbacks: {
      el: Element;
      cb: (entry: IntersectionObserverEntry) => void;
    }[] = [];
    const observed = new Set<string>();

    const registerIfPresent = (id: string) => {
      if (observed.has(id)) return;
      const el = document.getElementById(id);
      if (!el) return false;

      const cb = (entry: IntersectionObserverEntry) => {
        const ratio = entry.isIntersecting
          ? entry.intersectionRatio || 0.001
          : 0;
        ratiosRef.current.set(id, ratio);

        // debug: log entry info
        // eslint-disable-next-line no-console
        console.debug(
          `[useActiveSection] entry: id=${id} isIntersecting=${entry.isIntersecting} ratio=${ratio}`,
        );

        // pick the id with highest ratio
        let best: string | null = null;
        let bestRatio = 0;
        ratiosRef.current.forEach((r, key) => {
          if (r > bestRatio) {
            bestRatio = r;
            best = key;
          }
        });

        // debug: chosen best
        // eslint-disable-next-line no-console
        console.debug(
          `[useActiveSection] chosen best=${best} bestRatio=${bestRatio}`,
        );

        if (best !== active) setActive(best);
      };

      // debug: registering observer for this id
      // eslint-disable-next-line no-console
      console.debug(`[useActiveSection] registering observer for id=${id}`);
      observe(el, cb);
      callbacks.push({ el, cb });
      observed.add(id);
      return true;
    };

    // try register all
    sectionIds.forEach(registerIfPresent);

    // if some are not present, watch DOM and retry
    let mo: MutationObserver | null = null;
    const missing = sectionIds.some((id) => !observed.has(id));
    if (missing && typeof MutationObserver !== "undefined") {
      mo = new MutationObserver(() => {
        sectionIds.forEach(registerIfPresent);
        const stillMissing = sectionIds.some((id) => !observed.has(id));
        if (!stillMissing && mo) {
          try {
            mo.disconnect();
          } catch {}
          mo = null;
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      callbacks.forEach(({ el, cb }) => unobserve(el, cb));
      ratiosRef.current.clear();
      observed.clear();
      if (mo) {
        try {
          mo.disconnect();
        } catch {}
        mo = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, unobserve, ...sectionIds]);

  return active;
}
