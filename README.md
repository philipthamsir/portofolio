# Philip Thamsir - Personal Portfolio Website

Website portofolio personal premium dengan tema **Sleek Bento Cyber-Minimalism** yang dirancang khusus untuk merepresentasikan identitas sebagai mahasiswa Sistem Informasi dan **AI-Native Developer**. Website ini sangat ringan, responsif, memiliki latar belakang interaktif 3D, dan siap diunggah langsung ke shared hosting **Domainesia**.

## 🚀 Fitur Utama

*   **3D WebGL Background (Three.js):** Latar belakang partikel 3D berbentuk *Torus Knot* dinamis yang bergerak lembut secara konstan, merespons gerakan kursor mouse (*interactive tilt*), dan berubah kedalamannya (*zoom*) serta berputar lebih cepat saat pengguna melakukan *scrolling* halaman.
*   **Bento Grid Profile:** Tata letak modular ala Bento Box untuk menampilkan kartu profil interaktif, termasuk widget jam lokal digital (WIB) yang diperbarui secara realtime.
*   **Featured Projects Grid:** Menampilkan proyek nyata seperti aplikasi web fullstack **sparking.website** dan aplikasi Android **Tasky** lengkap dengan deskripsi, teknologi, serta tautan eksternal.
*   **AI-Native Tech Stack Section:** Pengelompokan keahlian yang terbagi secara logis antara dasar akademis (*academic foundations*), kemampuan pengembangan kolaboratif AI (*AI-assisted capabilities*), dan alat produktivitas kerja (*AI-native workflow*).
*   **Scroll Reveal & Active Navigation:** Animasi transisi masuk yang mulus saat halaman di-scroll serta menu navigasi yang otomatis menyorot bagian halaman yang sedang dibaca pengguna.
*   **100% Bebas Blokir Adblocker:** Seluruh ikon media sosial menggunakan inline SVG murni untuk menghindari pencekalan oleh pemblokir iklan peramban (*adblockers*).

---

## 📂 Struktur Berkas

Proyek ini dibangun menggunakan arsitektur web statis murni tanpa ketergantungan pada *build-step* atau instalasi paket node, sehingga sangat mudah dikelola:

*   [`index.html`](index.html) — Kerangka semantik HTML5 halaman utama, isi teks profil, proyek, keahlian, dan riwayat.
*   [`style.css`](style.css) — Token desain kustom (warna Slate, border glowing, efek *glassmorphism* transparan), tata letak grid, dan responsivitas seluler.
*   [`script.js`](script.js) — Logika mesin partikel Three.js WebGL, jam lokal Asia/Jakarta, navigasi aktif, dan efek scroll reveal.
*   [`README.md`](README.md) — Dokumentasi proyek ini.

---

## 🛠️ Teknologi & Library CDN

*   **Core:** HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+).
*   **3D Engine:** [Three.js r128](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) (dimuat melalui CDN).
*   **Icon Pack:** [Lucide Icons](https://unpkg.com/lucide@latest) & SVG Inline kustom.
*   **Font Famili:** Plus Jakarta Sans (Headings), Inter (Body), JetBrains Mono (Monospace accents).

---

## 🌐 Panduan Deployment (Hosting Domainesia)

Karena website ini menggunakan berkas statis murni tanpa proses build compile, Anda bisa langsung meluncurkannya ke hosting Domainesia dalam waktu kurang dari 5 menit:

1.  **Masuk ke cPanel:** Login ke portal akun Domainesia Anda dan masuk ke cPanel / DirectAdmin panel kontrol hosting.
2.  **Buka File Manager:** Buka direktori file manager dan masuk ke folder root website utama Anda (biasanya terletak di dalam folder **`public_html`**).
3.  **Unggah Berkas:** Unggah 3 berkas utama berikut langsung ke dalam direktori tersebut:
    *   `index.html`
    *   `style.css`
    *   `script.js`
4.  *(Opsional)* Anda juga bisa mengunggah folder `.agents` dan `README.md` sebagai dokumentasi pribadi di hosting, tetapi website hanya membutuhkan 3 file di atas untuk berjalan.
5.  **Uji Akses:** Buka alamat domain Anda di browser untuk memastikan website berjalan sempurna dengan visual 3D yang interaktif!

---

## 📝 Lisensi
Proyek ini dilisensikan di bawah lisensi MIT. Hak cipta © 2026 Philip Thamsir.
