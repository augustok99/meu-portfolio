import React, { useEffect, useRef } from "react";
import { useAnimation, type Transition } from "framer-motion";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // if true, animation runs only once
  duration?: number;
  ease?: Transition["ease"];
};

export default function useInViewAnimation(options: Options = {}): {
  ref: React.RefObject<HTMLElement | null>;
  controls: ReturnType<typeof useAnimation>;
} {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let leaveTimeout: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // consider visible when any pixel intersects
          if (entry.intersectionRatio > 0) {
            if (leaveTimeout) {
              clearTimeout(leaveTimeout);
              leaveTimeout = null;
            }
            controls.start({
              opacity: 1,
              y: 0,
              transition: {
                duration: options.duration ?? 0.8,
                ease: options.ease ?? "easeOut",
              },
            });
            if (options.once) observer.disconnect();
          } else {
            if (options.once) return;
            // debounce leaving to avoid flicker when only a sliver is visible
            if (leaveTimeout) clearTimeout(leaveTimeout);
            leaveTimeout = window.setTimeout(() => {
              controls.start({ opacity: 0, y: 40 });
              leaveTimeout = null;
            }, 300);
          }
        });
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? "0px 0px -10px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, [
    controls,
    options.once,
    options.duration,
    options.ease,
    options.threshold,
    options.rootMargin,
  ]);

  return { ref, controls };
}
