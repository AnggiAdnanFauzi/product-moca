# Product Requirements Document (PRD)
## Prototype E-Commerce "Original Product Moca"

### 1. Ringkasan Proyek
**Nama Proyek:** Moca Fashion E-Commerce Prototype
**Platform:** Website (Single-Page Application)
**Deskripsi:**
Pembuatan purwarupa (prototype) website e-commerce satu halaman untuk brand fashion muslimah "Original Product Moca" yang berbasis di Solo. Website ini difokuskan untuk menampilkan koleksi pakaian dengan desain elegan serta memudahkan pelanggan melakukan pemesanan langsung melalui WhatsApp.

---

### 2. Tujuan Proyek
*   Memberikan identitas digital yang profesional dan elegan bagi brand Moca.
*   Memudahkan pelanggan untuk melihat katalog produk (Best Seller & Koleksi Lengkap) dalam satu halaman yang responsif.
*   Meningkatkan konversi penjualan dengan mengarahkan pelanggan langsung ke WhatsApp Admin melalui Call-to-Action (CTA) yang terotomatisasi.

---

### 3. Target Pengguna
*   Wanita muslimah (remaja hingga dewasa) yang mencari pakaian fashion (seperti abaya, gamis, tunik) dengan nuansa elegan dan warna *earth tone*.
*   Pengguna *mobile* (smartphone) maupun *desktop* (laptop/PC).

---

### 4. Spesifikasi Teknis & Desain
**Tumpukan Teknologi (Tech Stack):**
*   **Struktur:** HTML5 murni
*   **Styling:** TailwindCSS (via CDN) untuk tata letak yang cepat, modern, dan responsif.
*   **Interaktivitas:** Vanilla JavaScript untuk animasi sederhana dan logika pesan otomatis WhatsApp.

**Sistem Desain (Design System):**
*   **Palet Warna:** *Earth Tone* (Krem, Coklat Muda, Coklat Tua) untuk memancarkan kesan hangat dan elegan.
*   **Tipografi:**
    *   `Playfair Display` (Serif): Digunakan untuk *Heading* dan judul agar memberikan kesan klasik & mewah.
    *   `Inter` (Sans-Serif): Digunakan untuk teks paragraf/deskripsi agar mudah dibaca (*clean & modern*).
*   **Gaya Visual:** Menggunakan efek *Glassmorphism* (transparan dengan efek blur) terutama pada bagian navigasi (Header) agar terlihat premium.

---

### 5. Kebutuhan Fitur (Feature Requirements)

#### 5.1. Navigasi (Floating Header)
*   **Deskripsi:** Menu navigasi yang selalu berada di atas layar (sticky/floating) saat di-scroll.
*   **Kriteria Penerimaan (Acceptance Criteria):**
    *   Harus memiliki logo/teks Moca.
    *   Terdapat tautan jangkar (anchor link) menuju bagian: Beranda, Promo, Best Seller, Katalog.
    *   Menggunakan efek visual transparan (*Glassmorphism*).

#### 5.2. Hero Section
*   **Deskripsi:** Bagian paling atas/banner utama saat website pertama kali dimuat.
*   **Kriteria Penerimaan:**
    *   Menampilkan gambar *banner* koleksi terbaru berkualitas tinggi (saat ini placeholder).
    *   Terdapat *headline* yang menarik (contoh: "Koleksi Elegan Muslimah").
    *   Terdapat tombol CTA utama "Lihat Koleksi" atau "Belanja Sekarang".

#### 5.3. Promo Banner
*   **Deskripsi:** Bagian khusus untuk menyoroti diskon atau penawaran spesial.
*   **Kriteria Penerimaan:**
    *   Menampilkan informasi diskon (misal: Diskon 20% untuk koleksi tertentu).
    *   Desain mencolok (*highlight*) untuk menarik perhatian.

#### 5.4. Katalog Produk (Best Seller & Koleksi Lengkap)
*   **Deskripsi:** Bagian untuk memajang produk-produk andalan.
*   **Kriteria Penerimaan:**
    *   Tata letak *grid* yang rapi (menyesuaikan jumlah kolom berdasarkan ukuran layar: 1-2 kolom di HP, 3-4 kolom di Desktop).
    *   Setiap kartu produk (Product Card) memuat: Foto produk, Nama Produk, dan Harga.
    *   Dilengkapi tombol CTA "Beli" (Ikon Keranjang).

#### 5.5. Integrasi Pemesanan WhatsApp Otomatis
*   **Deskripsi:** Logika klik yang menghubungkan aksi tombol beli dengan WhatsApp.
*   **Kriteria Penerimaan:**
    *   Setiap tombol "Belanja Sekarang" atau "Beli" pada kartu produk harus terhubung dengan API WhatsApp (`wa.me`).
    *   Pesan harus terisi otomatis menyertakan nama produk yang diklik. (Contoh: *"Halo Moca, saya tertarik dengan [Nama Produk]"*).

#### 5.6. Footer
*   **Deskripsi:** Bagian paling bawah website.
*   **Kriteria Penerimaan:**
    *   Informasi hak cipta (Copyright).
    *   Tautan ke media sosial (Instagram Moca).

---

### 6. Status Pengembangan
*   **Fase 1 (Selesai):** Pembuatan struktur HTML, implementasi TailwindCSS, perancangan UI/UX responsif, dan logika JavaScript untuk integrasi WhatsApp. File disimpan pada `moca-prototype`.
*   **Fase 2 (Pending/Langkah Selanjutnya):** Penggantian aset visual sementara (*placeholder*) dengan gambar/foto produk asli milik Moca ke dalam direktori `assets/images/`.

---
*Dokumen ini dibuat secara otomatis berdasarkan hasil analisis dan pengembangan *prototype* sesi sebelumnya.*
