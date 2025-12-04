// src/Components/AboutPage/aboutHooks.js
import { useEffect, useState } from "react";

export function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!target) return;
    let startTime = Date.now();
    let rafId;

    function tick() {
      const now = Date.now();
      const elapsed = Math.min(now - startTime, duration);
      const progress = elapsed / duration;
      setValue(Math.floor(progress * target));
      if (elapsed < duration) rafId = requestAnimationFrame(tick);
      else setValue(target);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return value;
}

export function useTypingEffect(text, duration = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration / text.length);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, duration]);

  return displayText;
}
