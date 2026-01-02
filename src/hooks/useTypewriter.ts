import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  TypewriterConfig,
  TypewriterPhase,
  DEFAULT_TYPEWRITER_CONFIG,
} from "@/config/typewriter";

interface UseTypewriterOptions {
  texts: string[];
  config?: Partial<TypewriterConfig>;
  autoStart?: boolean;
}

interface UseTypewriterReturn {
  displayText: string;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export function useTypewriter({
  texts,
  config = {},
  autoStart = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const settings = useMemo(
    () => ({ ...DEFAULT_TYPEWRITER_CONFIG, ...config }),
    [config]
  );

  const [displayText, setDisplayText] = useState(autoStart ? "" : texts[0] || "");
  const [isRunning, setIsRunning] = useState(autoStart);

  const indexRef = useRef(0);
  const phaseRef = useRef<TypewriterPhase>("typing");
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const tick = useCallback((): number => {
    const currentText = texts[indexRef.current];

    switch (phaseRef.current) {
      case "waiting":
        phaseRef.current = "deleting";
        return settings.pauseDuration;

      case "deleting":
        if (charIndexRef.current === 0) {
          indexRef.current = (indexRef.current + 1) % texts.length;
          phaseRef.current = "typing";
          return settings.typeSpeed;
        }
        charIndexRef.current--;
        setDisplayText(currentText.slice(0, charIndexRef.current));
        return settings.deleteSpeed;

      case "typing":
      default:
        const nextText = texts[indexRef.current];
        if (charIndexRef.current === nextText.length) {
          phaseRef.current = "waiting";
          return settings.pauseDuration;
        }
        charIndexRef.current++;
        setDisplayText(nextText.slice(0, charIndexRef.current));
        return settings.typeSpeed;
    }
  }, [texts, settings]);

  useEffect(() => {
    if (!isRunning || texts.length === 0) return;

    const schedule = () => {
      const delay = tick();
      timeoutRef.current = setTimeout(schedule, delay);
    };

    schedule();

    return clearTimer;
  }, [isRunning, texts, tick, clearTimer]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
    clearTimer();
  }, [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    indexRef.current = 0;
    charIndexRef.current = 0;
    phaseRef.current = "typing";
    setDisplayText("");
    if (isRunning) {
      setIsRunning(false);
      setTimeout(() => setIsRunning(true), 0);
    }
  }, [clearTimer, isRunning]);

  return {
    displayText,
    start,
    stop,
    reset,
  };
}
