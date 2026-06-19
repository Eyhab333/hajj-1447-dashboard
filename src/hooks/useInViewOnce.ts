import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasEntered) return;

    if (!("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEntered(true);
        observer.disconnect();
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasEntered]);

  return {
    elementRef,
    hasEntered,
  };
}