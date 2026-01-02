"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { TypewriterConfig } from "@/config/typewriter";

interface AnimatedGreetingProps {
  /** Gösterilecek karşılama mesajları dizisi */
  greetings: string[];
  /** Ek CSS sınıfları */
  className?: string;
  /** Animasyon ayarları (opsiyonel) */
  config?: Partial<TypewriterConfig>;
  /** Cursor'ı göster/gizle */
  showCursor?: boolean;
}

export function AnimatedGreeting({
  greetings,
  className = "",
  config,
  showCursor = true,
}: AnimatedGreetingProps) {
  const { displayText } = useTypewriter({
    texts: greetings,
    config,
  });

  return (
    <div className={`h-[1.5em] ${className}`}>
      <span className="text-[--color-accent]">{displayText}</span>
      {showCursor && (
        <span
          className="animate-blink h-[1em] w-[2px] bg-[--color-accent] inline-block align-middle"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
