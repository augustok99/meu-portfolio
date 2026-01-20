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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
            if (!options.once) {
              // reset instantly so the entrance animation can replay cleanly
              controls.set({ opacity: 0, y: 40 });
            }
          }
        });
      },
      {
        threshold: options.threshold ?? 0.2,
        rootMargin: options.rootMargin ?? "0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
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
