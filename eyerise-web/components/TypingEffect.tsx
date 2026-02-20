"use client";

import { useEffect, useState } from "react";

const words = ["builders", "late-night grinders", "cramming students", "hungry ones", "creative geniuses"];

export default function TypingEffect() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (isTyping) {
      // Typing forward
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100); // Typing speed: 100ms per character
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause for 2 seconds
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Backspacing
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); // Backspacing speed: 50ms per character
        return () => clearTimeout(timeout);
      } else {
        // Finished backspacing, move to next word
        const timeout = setTimeout(() => {
          setWordIndex((wordIndex + 1) % words.length);
          setIsTyping(true);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [wordIndex, isTyping, charIndex]);

  return (
    <span className="inline-block">
      For the {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
