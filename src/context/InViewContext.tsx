import React, { createContext, useCallback, useEffect, useRef } from "react";

type Callback = (entry: IntersectionObserverEntry) => void;

type InViewApi = {
  observe: (el: Element, cb: Callback) => void;
  unobserve: (el: Element, cb?: Callback) => void;
};

const noop = () => {};

const InViewContext = createContext<InViewApi>({
  observe: noop,
  unobserve: noop,
});

export const InViewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mapRef = useRef<Map<Element, Set<Callback>>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleEntries = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const set = mapRef.current.get(entry.target);
      if (!set) return;
      set.forEach((cb) => {
        try {
          cb(entry);
        } catch (err) {
          // swallow individual callback errors
          console.error("InView callback error", err);
        }
      });
    });
  }, []);

  useEffect(() => {
    // create observer once
    const map = mapRef.current;
    const obs = new IntersectionObserver(handleEntries, {
      threshold: 0.1,
      rootMargin: "0px 0px -10px 0px",
    });
    observerRef.current = obs;
    return () => {
      try {
        obs.disconnect();
      } catch {
        /* ignore */
      }
      observerRef.current = null;
      map.clear();
    };
  }, [handleEntries]);

  const observe = useCallback((el: Element, cb: Callback) => {
    const map = mapRef.current;
    let set = map.get(el);
    if (!set) {
      set = new Set();
      map.set(el, set);
      try {
        observerRef.current?.observe(el);
      } catch {
        /* ignore */
      }
    }
    set.add(cb);
  }, []);

  const unobserve = useCallback((el: Element, cb?: Callback) => {
    const map = mapRef.current;
    const set = map.get(el);
    if (!set) return;
    if (cb) set.delete(cb);
    if (!cb || set.size === 0) {
      try {
        observerRef.current?.unobserve(el);
      } catch {
        /* ignore */
      }
      map.delete(el);
    }
  }, []);

  return (
    <InViewContext.Provider value={{ observe, unobserve }}>
      {children}
    </InViewContext.Provider>
  );
};

export default InViewContext;
