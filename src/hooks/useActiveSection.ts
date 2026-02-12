import { useEffect, useRef, useState } from "react";
import useInViewContext from "../context/useInViewContext";

export default function useActiveSection(sectionIds: string[]) {
  const { observe, unobserve } = useInViewContext();
  const [active, setActive] = useState<string | null>(null);
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const callbacks: {
      el: Element;
      cb: (entry: IntersectionObserverEntry) => void;
    }[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const cb = (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          activeRef.current = id;
          setActive(id);
        } else {
          // if this element was active but left viewport, clear it
          if (activeRef.current === id) {
            activeRef.current = null;
            setActive(null);
          }
        }
      };
      observe(el, cb);
      callbacks.push({ el, cb });
    });

    return () => {
      callbacks.forEach(({ el, cb }) => unobserve(el, cb));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, unobserve, ...sectionIds]);

  return active;
}
