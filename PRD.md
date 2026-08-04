# PRD — IftanafiSpace Mobile

**Product:** Portofolio Personal Nayet Iftanafi (Versi Mobile)
**Platform:** Web mobile-first
**Referensi:** iftanafi-space-19bae.web.app
**Status:** v1 — Selesai dibangun
**Terakhir diperbarui:** 4 Agustus 2026

---

## 1. Ringkasan

IftanafiSpace adalah situs portofolio personal untuk **Nayet Iftanafi**, seorang software
developer yang berbasis di Jakarta, Indonesia. Versi mobile ini mengadaptasi situs desktop
asli ke pengalaman mobile-first dengan gaya visual **monokrom premium** (off-white paper,
tipografi serif italic aksen, label monospace bernomor).

Tujuannya adalah menampilkan identitas profesional, filosofi kerja, perjalanan karier, keahlian
teknis, proyek unggulan, dan paket harga — serta menyediakan jalur kontak yang jelas bagi calon
klien dan kolaborator di layar ponsel.

---

## 2. Tujuan & Sasaran

### Tujuan Produk
- Menyajikan portofolio yang kredibel dan berkesan pada perangkat mobile.
- Mengubah pengunjung menjadi prospek melalui form inquiry dan CTA "Get in Touch".
- Mempertahankan kesetiaan visual terhadap desain desktop asli.

### Sasaran Terukur (contoh target)
| Metrik | Target |
| --- | --- |
| Interaksi form kontak | > 5% dari pengunjung mobile |
| Bounce rate mobile | < 55% |
| LCP (mobile) | < 2.5 detik |
| CLS | < 0.1 |

### Non-Tujuan
- Tidak ada backend/database untuk menyimpan submission form (v1 hanya simulasi state sukses).
- Tidak ada autentikasi, blog, atau CMS.
- Tidak ada e-commerce/pembayaran untuk paket harga (hanya rate card informatif).

---

## 3. Target Pengguna

- **Calon klien** — bisnis/individu yang mencari jasa pengembangan (ERP, POS, web/mobile app).
- **Recruiter / hiring manager** — menilai keahlian dan pengalaman.
- **Sesama developer / kolaborator** — tertarik pada tech stack dan proyek.

Konteks utama: pengguna mengakses lewat ponsel dari tautan media sosial atau kartu nama.

---

## 4. Ruang Lingkup Fitur

### 4.1 Navigasi & Header
- Header sticky dengan logo dan tombol menu.
- **Menu slide-in** bergaya nav bernomor (01–05) + CTA "Get in Touch".
- Smooth scroll ke anchor section; menu menutup otomatis setelah navigasi.

### 4.2 Section Konten
| # | Section | Isi |
| --- | --- | --- |
| 01 | **Hero** | Nama besar uppercase, tagline, tombol aksi, statistik (1+ / 15+ / 10+) |
| 02 | **About** | Deskripsi profil + potret grayscale |
| 03 | **Core Philosophy** | 4 kartu prinsip kerja |
| — | **Journey & Trajectory** | Timeline 4 peran dengan quote & poin capaian |
| 04 | **Tech Stack** | Marquee bergerak + kategori Frontend / Backend / Tools |
| — | **Featured Projects** | 6 proyek: gambar grayscale, tag, tech pills |
| 05 | **Rate Card** | 3 paket harga + kartu "Most Popular" + add-ons |
| — | **Contact** | Jam Jakarta live, kartu lokasi, Social Pulse, form inquiry |
| — | **Footer** | Navigasi, sosial, tombol back-to-top |

### 4.3 Form Inquiry (Contact)
- Field: nama, email, pemilih tema/jenis proyek, pesan.
- Interaksi: pemilih tema, validasi dasar, **state sukses** setelah submit (client-side).
- Jam Jakarta live (WIB) yang diperbarui real-time.

---

## 5. Persyaratan Desain

- **Palet:** monokrom — off-white paper background, teks near-black, aksen abu.
  Maksimum 3–5 warna. Semua di-theme lewat design token di `globals.css`.
- **Tipografi:** maksimal 2 keluarga font — serif display (heading/aksen italic) + sans/mono
  untuk body & label. Line-height body 1.4–1.6.
- **Layout:** mobile-first, flexbox untuk mayoritas layout, grid hanya untuk kasus 2D.
- **Gambar:** seluruh gambar grayscale (potret, cityscape Jakarta, thumbnail proyek).
- **Aksesibilitas:** HTML semantik, ARIA yang benar, alt text, target sentuh memadai.

---

## 6. Persyaratan Teknis

- **Framework:** Next.js (App Router) + React, TypeScript.
- **Styling:** Tailwind CSS v4 dengan design token di `globals.css`.
- **Ikon:** `lucide-react`.
- **Struktur:** `app/page.tsx` mengompose komponen per-section di `components/`.
- **Data:** konten terpusat dan dapat diedit di `lib/data.ts`.
- **Keamanan:** header dasar di `next.config.mjs` (`X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`).
- **Performa:** mobile-first, gambar dioptimalkan, minim layout shift.

---

## 7. Struktur Berkas Utama

```
app/
  layout.tsx        # font, metadata, html bg
  page.tsx          # kompose semua section
  globals.css       # design token & tema monokrom
components/
  site-header.tsx   # header sticky + menu slide-in
  hero.tsx
  about.tsx
  philosophy.tsx
  journey.tsx
  tech-stack.tsx
  projects.tsx
  pricing.tsx
  contact.tsx       # jam live + form inquiry
  site-footer.tsx
  icon.tsx          # pemetaan ikon
lib/
  data.ts           # seluruh konten situs
```

---

## 8. Kriteria Penerimaan

- [x] Semua section desktop hadir di versi mobile.
- [x] Header sticky + menu slide-in berfungsi dan menutup setelah navigasi.
- [x] Form inquiry menampilkan state sukses.
- [x] Jam Jakarta live berjalan real-time.
- [x] Gaya visual monokrom setia pada desain asli.
- [x] Diverifikasi pada viewport 390×844 tanpa overflow/layout rusak.

---

## 9. Peluang Pengembangan Selanjutnya

- Integrasi backend untuk submission form (mis. email/DB) + notifikasi.
- Halaman detail per proyek (case study).
- Dukungan multi-bahasa (ID/EN).
- Mode gelap penuh & animasi scroll lanjutan.
- Analitik konversi & event tracking pada CTA.
