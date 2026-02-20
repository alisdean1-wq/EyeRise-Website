"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, durationMs: number, isActive: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = progress; // linear
      const value = Math.round(eased * target);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs, isActive]);

  return count;
}
