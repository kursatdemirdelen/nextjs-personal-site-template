# 🚀 Next.js Kişisel Site Şablonu

Geliştiriciler için hazırlanmış, modern ve şık bir kişisel web sitesi şablonu. Projelerini sergile, blog yaz, online varlığını oluştur.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

🌐 **[Canlı Demo](https://nextjs-personal-site-template.vercel.app/tr)** • 📖 **[English](./README.md)** • 🐛 **[Hata Bildir](https://github.com/kursatdemirdelen/nextjs-personal-site-template/issues)**

## 📸 Ekran Görüntüleri

<p align="center">
  <img src="public/images/ss1.png" width="49%" />
  <img src="public/images/ss2.png" width="49%" />
</p>
<p align="center">
  <img src="public/images/ss3.png" width="49%" />
  <img src="public/images/ss4.png" width="49%" />
</p>
<p align="center">
  <img src="public/images/ss5.png" width="49%" />
</p>

---

## ⚡ Tek Tıkla Yayınla

Kendi siteni saniyeler içinde oluştur:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kursatdemirdelen/nextjs-personal-site-template&project-name=my-personal-site&repository-name=my-personal-site&env=NEXT_PUBLIC_SITE_URL&envDescription=Site%20URL%20(SEO%20icin%20gerekli)&envLink=https://github.com/kursatdemirdelen/nextjs-personal-site-template%23ortam-degiskenleri)

> 💡 Deploy sonrası Vercel'de `NEXT_PUBLIC_SITE_URL` değişkenini kendi domain'inle güncellemeyi unutma!

---

## ✨ Ne Var Bu Şablonda?

| Özellik | Açıklama |
|---------|----------|
| ✨ **Animasyonlu Karşılama** | Typewriter efekti ile özelleştirilebilir mesajlar |
| 📝 **MDX Blog** | Markdown ile blog yaz, React componentleri kullan |
| 🌙 **Karanlık Mod** | Sistem temasına göre otomatik geçiş |
| 🌍 **Çoklu Dil** | Türkçe ve İngilizce hazır, yeni dil eklemek kolay |
| 💼 **Proje Vitrini** | Projelerini tag'lerle filtrele ve sergile |
| 🎯 **SEO Dostu** | Sitemap, RSS, meta taglar otomatik |
| ⚡ **Hızlı** | Server components + static generation |
| 📱 **Responsive** | Her ekranda mükemmel görünüm |

---

## 🛠️ Kurulum

### 1. Projeyi İndir

```bash
git clone https://github.com/kursatdemirdelen/nextjs-personal-site-template.git benim-sitem
cd benim-sitem
npm install
```

### 2. Ortam Değişkenlerini Ayarla

```bash
cp .env.example .env.local
```

`.env.local` dosyasını aç ve URL'ini yaz:

```bash
NEXT_PUBLIC_SITE_URL=https://senin-siten.com
```

### 3. Bilgilerini Güncelle

`src/data/site.ts` dosyasını düzenle:

```typescript
export const siteConfig = {
  name: "Senin Adın",
  title: "Full Stack Developer",
  tagline: "Harika şeyler inşa ediyorum",
  socialLinks: {
    github: "https://github.com/senin-kullanici-adin",
    linkedin: "https://linkedin.com/in/senin-kullanici-adin",
    email: "sen@email.com",
  },
  skills: ["React", "Next.js", "TypeScript"],
};
```

### 4. Çalıştır

```bash
npm run dev
```

Tarayıcıda aç: [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Dosya Yapısı

```
src/
├── app/[locale]/     # Sayfalar (dil bazlı routing)
├── components/       # React bileşenleri
├── data/             # Site verileri
│   ├── site.ts       # Ana ayarlar
│   ├── projects.ts   # Projelerin
│   └── hobbies.ts    # Hobilerin
└── i18n/             # Çoklu dil ayarları

content/blog/         # Blog yazıları (MDX)
messages/             # Çeviri dosyaları
```

---

## 📝 İçerik Ekleme

### Blog Yazısı

`content/blog/` klasörüne yeni bir `.mdx` dosyası oluştur:

```mdx
---
title: "Yazı Başlığı"
description: "Kısa açıklama"
date: "1 Ocak 2026"
tags: ["Next.js", "React"]
---

Yazının içeriği buraya...
```

### Proje

`src/data/projects.ts` dosyasına ekle:

```typescript
{
  title: "Proje Adı",
  slug: "proje-adi",
  description: "Ne işe yarıyor?",
  tags: ["React", "TypeScript"],
  url: "https://github.com/...",
}
```

### Hobi

`src/data/hobbies.ts` dosyasına ekle:

```typescript
{
  icon: "📷",
  title: "Fotoğrafçılık",
  description: "Sokak ve manzara fotoğrafları",
}
```

---

## 🌐 Ortam Değişkenleri

| Değişken | Zorunlu | Açıklama |
|----------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | ✅ Evet | Sitenin URL'i (SEO için gerekli) |

---

## 🚀 Yayınlama (Vercel)

1. Kodu GitHub'a pushla
2. [vercel.com](https://vercel.com)'a git, repo'yu import et
3. Environment Variables'a `NEXT_PUBLIC_SITE_URL` ekle
4. Deploy'a bas, bitti! 🎉

---

## 🎨 Özelleştirme

### Renkleri Değiştir

`src/app/globals.css`:

```css
:root {
  --accent: 0 84% 60%;  /* Ana renk */
}
```

### Yeni Sayfa Ekle

`src/app/[locale]/yeni-sayfa/page.tsx` oluştur. Mevcut sayfaları referans al.

### Bir Şeyi Kaldır

Hobiler sayfası lazım değil mi? Sil gitsin. Her şey modüler.

---

## 🤝 Katkıda Bulun

Katkıların memnuniyetle karşılanır!

1. Fork'la
2. Feature branch oluştur (`git checkout -b feature/harika-ozellik`)
3. Commit at (`git commit -m 'Harika özellik eklendi'`)
4. Push'la (`git push origin feature/harika-ozellik`)
5. Pull Request aç

---

## 📄 Lisans

MIT Lisansı - Kişisel veya ticari projelerinde özgürce kullan.

---

## 💬 Destek

- 🐛 **Sorun mu var?** [Issue aç](https://github.com/kursatdemirdelen/nextjs-personal-site-template/issues)
- 💡 **Fikrin mi var?** [Discussion başlat](https://github.com/kursatdemirdelen/nextjs-personal-site-template/discussions)
- ⭐ **Beğendiysen** repo'ya yıldız at!

---

[@kursatdemirdelen](https://github.com/kursatdemirdelen) tarafından ❤️ ile yapıldı
