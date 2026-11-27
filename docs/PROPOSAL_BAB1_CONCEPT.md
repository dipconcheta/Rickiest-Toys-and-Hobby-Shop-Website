# PROPOSAL CASE PROJECT MULTIMEDIA
## Rickiest Toys & Hobby: Aplikasi Web Multimedia Interaktif Pengenalan Produk dan Panduan Pameran Mall Palembang

---

## BAB I PENDAHULUAN

### 1.1 Latar Belakang
Industri kreatif mainan hobi dan koleksi (*pop-culture collectibles*) di Kota Palembang terus bertumbuh seiring dengan tingginya minat generasi muda terhadap kultur pop Jepang dan Barat. Salah satu pelaku usaha lokal yang telah lama menjadi pusat komunitas hobi di Palembang adalah **Rickiest Toys and Hobby Shop**, yang beroperasi di Jalan AKBP H.M. Amin, Kelurahan 18 Ilir, Kecamatan Ilir Timur I, Palembang. Toko ini dikenal luas di kalangan penghobi lokal sebagai penyedia berbagai produk hobi berkualitas, mulai dari *Trading Card Games* (TCG resmi Pokémon dan Yu-Gi-Oh!), *Gundam/Gunpla*, berbagai figur aksi dan Blokees, hingga produk yang saat ini tengah naik daun yaitu *art toys/blind box*.

Dalam upaya menjangkau audiens yang lebih luas di luar komunitas inti, Rickiest Toys and Hobby aktif memperluas penetrasi pasar dengan mengikuti pameran temporer (*pop-up exhibition / bazaar*) di berbagai pusat perbelanjaan terkemuka di Kota Palembang, seperti di Palembang Icon, Palembang Indah Mall (PIM), maupun Palembang Trade Center (PTC Mall). Pada kegiatan pameran tersebut, produk *blind box* dan action figure menjadi salah satu daya tarik utama untuk memikat pengunjung keluarga dan kolektor pemula karena kemasan kotaknya yang menarik dan memicu rasa penasaran.

Namun, dalam pelaksanaan promosi dan pameran di mall, Rickiest Toys menghadapi kendala nyata di lapangan:
1. **Keterbatasan Visualisasi Produk Blind Box**: Karakteristik produk *blind box* yang tertutup rapat membuat calon pembeli awam tidak dapat membayangkan wujud fisik, detail figur, dan tingkat kelangkaan (*rarity*) karakter di dalamnya sebelum memutuskan membeli.
2. **Kurangnya Pengalaman Emosional Digital**: Pengunjung pameran yang ragu membeli membutuhkan sarana interaktif yang mampu mendemonstrasikan sensasi membuka kemasan kejutan (*mystery unboxing*) yang menyenangkan.
3. **Penyebaran Informasi Stan dan Toko Fisik**: Jadwal stan pameran pop-up di mall yang berpindah-pindah sering kali tidak tersampaikan secara terintegrasi dengan lokasi toko utama (*flagship store*) di 18 Ilir Palembang.

Promosi konvensional menggunakan media cetak atau foto statis di media sosial terbukti belum mampu memberikan impresi interaktif yang memikat. Menurut Vaughan (2011), multimedia yang memadukan teks, grafis, audio, video, dan animasi interaktif mampu menciptakan keterlibatan emosional pengguna yang jauh lebih kuat dibanding media satu arah. Oleh karena itu, dirancang aplikasi web **"Rickiest Toys & Hobby: Interactive Experience Hub & Exhibition Companion"** dengan metodologi Luther-Sutopo (Luther, 1994, dalam Sutopo, 2003). Aplikasi ini menyajikan simulasi unboxing *blind box* dengan efek visual dan efek suara (*SFX*), showcase lini produk hobi unggulan, serta peta denah stan pameran mall secara interaktif.

### 1.2 Rumusan Masalah
Berdasarkan latar belakang tersebut, rumusan masalah dalam pengembangan proyek ini adalah:
"Bagaimana merancang dan membangun aplikasi web multimedia interaktif *Rickiest Toys & Hobby Experience Hub* sebagai sarana pengenalan produk dan panduan pameran mall Palembang bagi komunitas hobi dan masyarakat umum menggunakan metodologi Luther-Sutopo?"

### 1.3 Tujuan Pengembangan
Pengembangan produk multimedia ini bertujuan secara terukur untuk:
1. Merancang dan mengimplementasikan aplikasi multimedia interaktif berbasis web untuk Rickiest Toys and Hobby Shop Palembang yang mengintegrasikan teks, grafis, efek suara (*SFX*), video teaser, dan animasi unboxing melalui enam tahap Luther-Sutopo.
2. Meningkatkan daya tarik dan pemahaman calon pembeli terhadap keseruan produk *blind box* melalui fitur simulasi *Virtual Blind Box Gacha* yang dilengkapi efek suara kemenangan (*fanfare chime*).
3. Menyediakan media panduan pameran mall interaktif (*Interactive Booth Radar*) yang memudahkan pengunjung menemukan zona stan pameran Rickiest Toys di mall Palembang beserta lokasi toko fisik di 18 Ilir.
4. Mencapai tingkat kelayakan penggunaan (*usability*) yang teruji dengan skor rata-rata minimal kategori **"Baik" (skor SUS > 70)** melalui pengujian beta terhadap minimal 15 responden target audiens (Brooke, 1996).

### 1.4 Batasan Masalah
Batasan masalah dalam proyek multimedia ini mencakup:
1. **Platform**: Berbasis Web responsif (*HTML5/Tailwind CSS/JavaScript*) yang dapat diakses lintas peramban melalui desktop (1920x1080 px) dan telepon pintar (390x844 px).
2. **Ruang Lingkup Materi**: Berfokus pada profil toko Rickiest Toys Palembang dan 3 pilar hobi utamanya (Model Kits/Figures, Blind Box/Art Toys, dan TCG Community), dengan penekanan interaktif pada simulasi *blind box gacha*.
3. **Batas Transaksi Finansial**: Aplikasi difokuskan sebagai media *showcase & exhibition guide*; pemesanan diarahkan langsung (*Direct CTA*) ke kanal resmi Tokopedia Rickiest Toys dan WhatsApp toko.
4. **Pengelolaan Media Audio & Video**: Unsur video teaser berdurasi maksimal 45 detik; elemen audio berfokus pada efek suara antarmuka dan audio buka kemasan (*SFX*) dengan tombol sakelar On/Off, tanpa menggunakan musik latar (*BGM*) terus-menerus agar pengalaman pengguna tetap fokus dan tidak mengganggu.
5. **Jumlah Layar/Scene**: Terdiri atas 4 bagian interaktif utama (*Single Page Application*): *Profil Toko & Pilar Hobi*, *Virtual Blind Box Gacha*, *Event Radar Mall Palembang*, dan *Katalog & Kontak Toko*.

### 1.5 Manfaat Pengembangan
1. **Bagi Pengguna**: Merasakan sensasi unboxing mainan secara digital, mengetahui detail produk sebelum membeli, serta mempermudah pencarian stan pameran di mall Palembang.
2. **Bagi Mitra (Rickiest Toys and Hobby Shop)**: Menyediakan media promosi digital modern yang membedakan toko dari kompetitor, mendongkrak penjualan saat event pameran mall berlangsung, dan mengarahkan pengunjung ke toko fisik di Jl. AKBP H.M. Amin.
3. **Bagi Pengembang**: Mengimplementasikan metodologi rekayasa multimedia Luther-Sutopo secara aplikatif pada kasus nyata dunia usaha lokal.

### 1.6 Sistematika Penulisan
Laporan Case Project ini disusun dalam lima bab:
* **BAB I Pendahuluan**: Memuat latar belakang mitra toko, rumusan masalah, tujuan terukur, batasan masalah, manfaat, dan sistematika penulisan.
* **BAB II Landasan Teori**: Menguraikan teori multimedia, storyboard, metodologi Luther-Sutopo, perbandingan metodologi Vaughan, bentuk navigasi, teori pengujian (SUS), serta studi produk terkait.
* **BAB III Metodologi Pengembangan**: Menyajikan justifikasi pemilihan metodologi Luther-Sutopo, tabel pemetaan tahapan dengan model Vaughan, diagram alur kerja, jadwal rencana kerja, dan teknik pengumpulan data.
* **BAB IV Hasil Pengembangan dan Pembahasan**: Mendokumentasikan pelaksanaan enam tahap (*Concept, Design, Material Collecting, Assembly, Testing, Distribution*), storyboard per-frame lengkap, implementasi produk, pengujian alpha dan beta (minimal 15 responden), dan analisis perbaikan.
* **BAB V Penutup**: Kesimpulan hasil penelitian yang menjawab rumusan masalah serta saran pengembangan lanjutan.

---

## TAHAP 1 – CONCEPT (PENGONSEPAN)

Tahap *Concept* merumuskan landasan strategis pengembangan aplikasi multimedia untuk Rickiest Toys and Hobby Shop (Sutopo, 2003).

### 4.1.1 Identifikasi Masalah dan Tujuan Produk
* **Identifikasi Masalah**: Calon pembeli pameran mall di Palembang belum memahami wujud fisik dan keseruan produk blind box yang tertutup, serta sering melewatkan informasi jadwal stan pop-up dan lokasi toko fisik Rickiest Toys di 18 Ilir.
* **Tujuan Produk Terukur**:
  1. Menghasilkan aplikasi web multimedia yang mengintegrasikan teks, grafis, efek suara (SFX), video teaser, dan animasi unboxing interaktif.
  2. Memberikan visualisasi simulasi blind box yang meningkatkan ketertarikan produk minimal 80% responden.
  3. Memperoleh skor penerimaan pengguna (*usability*) dengan nilai System Usability Scale (SUS) di atas 70 (kategori *Good*).

### 4.1.2 Identifikasi Audiens

| Aspek | Uraian |
| :--- | :--- |
| Kelompok Pengguna | Komunitas penghobi di Palembang (pecinta Gunpla, Blokees, dan pemain kartu TCG Pokémon/Yu-Gi-Oh!), anak muda pop-culture, keluarga, dan pengunjung mall Palembang. |
| Rentang Usia | 15 – 35 tahun (audiens utama) dan 36 – 45 tahun (orang tua yang mendampingi anak). |
| Latar Belakang / Kebutuhan | Membutuhkan sarana hiburan kreatif, menyukai barang koleksi/blind box, membutuhkan gambaran produk sebelum membeli, serta membutuhkan informasi lokasi event mall dan alamat toko fisik. |
| Perangkat yang Digunakan | Telepon pintar (Android / iOS) saat berada di pameran mall, serta PC/Laptop saat mengakses dari rumah. |

### 4.1.3 Jenis Aplikasi dan Aturan Perancangan

| Aspek | Ketentuan |
| :--- | :--- |
| Jenis Aplikasi | Aplikasi Multimedia Interaktif (Interactive Web Showcase & Mall Exhibition Companion). |
| Platform | Berbasis Web responsif (lintas peramban: Chrome, Safari, Firefox, Edge). |
| Ukuran / Resolusi | Desktop (1920x1080 px) dan Mobile Viewport (390x844 px). |
| Durasi / Jumlah Layar | 1 Halaman Tunggal (Single Page Application) dengan 4 Panel Layar Interaktif; Video teaser berdurasi 45 detik. |
| Perangkat Lunak | Visual Studio Code, Figma (UI/Storyboard), Web Audio API Synthesizer (SFX), Tailwind CSS, JavaScript. |

### 4.1.4 Dokumen Naratif Konsep
Aplikasi web **Rickiest Toys & Hobby Experience Hub** dirancang sebagai jembatan interaktif antara toko fisik Rickiest Toys di Jalan AKBP H.M. Amin Palembang dengan kegiatan pameran pop-up di mall-mall Palembang (seperti Palembang Icon atau Palembang Indah Mall). Aplikasi menyambut pengguna dengan tampilan modern bernuansa *pop-culture* dan tombol sakelar efek suara antarmuka (*SFX On/Off*) yang dapat diaktifkan atau dinonaktifkan sesuai kenyamanan pengguna.

Pada bagian pembuka (*Section 1*), disajikan profil Rickiest Toys sebagai destinasi hobi terkemuka di Palembang beserta 3 pilar hobi utamanya: *Model Kits & Figures*, *Blind Box & Art Toys*, dan *Trading Card Games*. Disematkan pula video teaser 45 detik yang menampilkan suasana keseruan toko fisik dan interaksi booth pameran mall.

Pengunjung kemudian dapat merasakan sensasi membuka kotak kejutan pada *Section 2: Virtual Blind Box Gacha*. Pengguna disajikan kotak misteri yang dapat diklik. Ketika diklik, kotak bergoyang hebat diiringi efek visual kilatan cahaya, lalu terbuka memunculkan kartu karakter rahasia (*Secret Chase*) lengkap dengan suara efek kemenangan (*fanfare*) dan status statistik figur.

Untuk memfasilitasi pengunjung yang sedang berada di pameran mall Palembang, *Section 3: Event Radar Mall* menyediakan peta denah stan interaktif (Zona Display Diorama, Zona Dinding Blind Box, dan Zona Kasir/TCG Play Table). Terakhir, *Section 4: Katalog & Kontak Toko* menyajikan katalog lini favorit, fitur klaim voucher pameran, serta tautan langsung ke WhatsApp toko, Tokopedia Rickiest Toys, dan petunjuk arah ke toko fisik di 18 Ilir Palembang.

---

## DAFTAR PUSTAKA
* Binanto, I. (2010). *Multimedia digital: Dasar teori dan pengembangannya*. Andi.
* Brooke, J. (1996). SUS: A "quick and dirty" usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189–194). Taylor & Francis.
* Hart, J. (2008). *The art of the storyboard: A filmmaker’s introduction* (2nd ed.). Focal Press.
* Luther, A. C. (1994). *Authoring interactive multimedia*. AP Professional.
* Munir. (2012). *Multimedia: Konsep & aplikasi dalam pendidikan*. Alfabeta.
* Nielsen, J. (1993). *Usability engineering*. Academic Press.
* Sutopo, A. H. (2003). *Multimedia interaktif dengan Flash*. Graha Ilmu.
* Vaughan, T. (2011). *Multimedia: Making it work* (8th ed.). McGraw-Hill.
