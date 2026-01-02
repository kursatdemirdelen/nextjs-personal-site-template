// Typewriter animasyon ayarları
export interface TypewriterConfig {
  typeSpeed: number; // Her karakter yazılma hızı (ms)
  deleteSpeed: number; // Her karakter silinme hızı (ms)
  pauseDuration: number; // Yazı tamamlandıktan sonra bekleme süresi (ms)
}

// Varsayılan ayarlar
export const DEFAULT_TYPEWRITER_CONFIG: TypewriterConfig = {
  typeSpeed: 100,
  deleteSpeed: 50,
  pauseDuration: 2000,
};

// Animasyon fazları
export type TypewriterPhase = "typing" | "waiting" | "deleting";
