"use client";

import { useEffect, useId, useRef } from "react";

export default function HeroWaveOverlay() {
  const filterId = useId().replace(/:/g, "-");
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  const width = 1200;
  const height = 400;
  const centerY = height / 2;

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.004;
      if (pathRef1.current) {
        const points: string[] = [];
        for (let x = 0; x <= width; x += 2) {
          const leftBias = 1 + 0.6 * (width - x) / width;
          const y =
            centerY +
            leftBias * (45 * Math.sin(x / 180 + t) + 12 * Math.sin(x / 60 + t * 0.4));
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef1.current.setAttribute("d", points.join(" "));
      }
      const t2 = t * 0.8;
      if (pathRef2.current) {
        const points: string[] = [];
        for (let x = 0; x <= width; x += 2) {
          const leftBias = 1 + 0.6 * (width - x) / width;
          const y =
            centerY +
            leftBias * (35 * Math.sin(x / 200 + t2) + 10 * Math.sin(x / 90 + t * 0.5));
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef2.current.setAttribute("d", points.join(" "));
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [centerY]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef1}
          fill="none"
          stroke="hsl(35, 92%, 50%)"
          strokeWidth="4"
          filter={`url(#${filterId})`}
          opacity="0.15"
        />
        <path
          ref={pathRef2}
          fill="none"
          stroke="hsl(35, 92%, 50%)"
          strokeWidth="3"
          filter={`url(#${filterId})`}
          opacity="0.10"
        />
      </svg>
    </div>
  );
}
