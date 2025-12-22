import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="tr">
      <body className="antialiased bg-[#0a0a0a] text-[#ededed]">
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-8xl font-bold text-[#ff3333] mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Sayfa Bulunamadı</h2>
            <p className="text-[#888888] text-lg mb-8 max-w-md mx-auto">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <Link
              href="/tr"
              className="px-6 py-3 bg-[#ff3333] text-[#0a0a0a] rounded-lg hover:bg-[#ff5555] transition-colors font-semibold inline-block"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
