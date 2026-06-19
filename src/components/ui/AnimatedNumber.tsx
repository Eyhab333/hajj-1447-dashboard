import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  end: number;
  duration?: number;
  className?: string;
};

function formatNumber(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function AnimatedNumber({
  end,
  duration = 1200,
  className,
}: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;

        const startTime = performance.now();

        function animate(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const nextValue = end * easedProgress;

          setValue(nextValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        }

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className={className}>
      {formatNumber(value)}
    </span>
  );
}