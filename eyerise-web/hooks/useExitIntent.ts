"use client";

import { useEffect, useState } from "react";

interface UseExitIntentOptions {
  onExitIntent: () => void;
  threshold?: number;
  enabled?: boolean;
}

export function useExitIntent({
  onExitIntent,
  threshold = 10,
  enabled = true,
}: UseExitIntentOptions) {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!enabled || hasTriggered) return;

    // Check if already shown in this session
    const hasShownBefore =
      typeof window !== "undefined" &&
      sessionStorage.getItem("eyerise_exit_intent_shown") === "true";

    if (hasShownBefore) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top (heading to browser chrome)
      if (e.clientY <= threshold && !hasTriggered) {
        setHasTriggered(true);
        onExitIntent();
        
        // Mark as shown in session storage
        if (typeof window !== "undefined") {
          sessionStorage.setItem("eyerise_exit_intent_shown", "true");
        }
      }
    };

    // Add event listener
    document.addEventListener("mouseout", handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [onExitIntent, threshold, enabled, hasTriggered]);

  return { hasTriggered };
}
