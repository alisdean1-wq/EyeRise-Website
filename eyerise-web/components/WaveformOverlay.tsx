"use client";

import { useEffect, useId, useRef } from "react";

export default function WaveformOverlay() {
  const filterId = useId().replace(/:/g, "-");
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.006;
      if (pathRef1.current) {
        const points: string[] = [];
        for (let x = 0; x <= 1200; x += 2) {
          const y = 200 + Math.sin(x / 120 + t) * 45 + Math.sin(x / 80 + t * 0.6) * 15;
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef1.current.setAttribute("d", points.join(" "));
      }
      const t2 = t * 0.75;
      if (pathRef2.current) {
        const points: string[] = [];
        for (let x = 0; x <= 1200; x += 2) {
          const y = 200 + Math.sin(x / 140 + t2) * 35 + Math.sin(x / 100 + t2 * 0.5) * 12;
          points.push(`${x === 0 ? "M" : "L"}${x},${y}`);
        }
        pathRef2.current.setAttribute("d", points.join(" "));
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Radial gradient bloom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(38, 92%, 50% / 0.15) 0%, hsl(35, 92%, 55% / 0.08) 40%, transparent 70%)",
        }}
      />

      {/* SVG waveform */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef1}
          fill="none"
          stroke="#F97316"
          strokeWidth="3.5"
          filter={`url(#${filterId})`}
          opacity="0.6"
        />
        <path
          ref={pathRef2}
          fill="none"
          stroke="#F97316"
          strokeWidth="2.5"
          filter={`url(#${filterId})`}
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
