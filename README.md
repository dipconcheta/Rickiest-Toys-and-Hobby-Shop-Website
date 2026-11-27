# Rickiest Toys & Hobby Shop Website
> **Interactive Experience Hub & Pop-Up Mall Exhibition Companion**  
> *Case Project (CP) Multimedia — Sistem Informasi, Fakultas Ilmu Komputer*

---

## 📌 Project Overview
Website aplikasi multimedia interaktif ini dikembangkan untuk mitra UMKM **Rickiest Toys and Hobby Shop** (Palembang). Aplikasi ini menjembatani kehadiran toko fisik di Jl. AKBP H.M. Amin No. 423/29 (18 Ilir, Palembang) dengan pameran *pop-up* temporer di pusat perbelanjaan (seperti Palembang Icon dan Palembang Indah Mall).

Aplikasi dirancang menggunakan metodologi **Luther-Sutopo (1994, 2003)** sebagai kerangka utama, mengintegrasikan seluruh elemen multimedia:
* **Teks & Grafis**: Desain restrained dark UI profesional mengikuti panduan `docs/DESIGN_SYSTEM.md`.
* **Audio**: Efek suara antarmuka dan *chime fanfare* kemenangan saat unboxing (*SFX*) dengan kendali sakelar On/Off pengguna.
* **Video**: Cuplikan video *teaser showcase* 45 detik kegiatan toko dan pameran mall.
* **Animasi**: Animasi getar kotak misteri, kilatan cahaya, dan *card reveal* pada simulasi *Blind Box Gacha*.
* **Interaktivitas**: Peta denah stan pameran interaktif (*Interactive 2D Floor Plan*), gacha simulator, dan integrasi pemesanan langsung (*Direct CTA*) ke WhatsApp Toko & Tokopedia resmi.

---

## 📚 Complete Project Documentation (`docs/`)

Sesuai dengan aturan inisiasi proyek terarah (*Specification-First Inception*), seluruh dokumen fondasi proyek telah disusun rapi:

1. **[docs/PRD_SRS.md](docs/PRD_SRS.md)**: Product Requirements Document & Software Requirements Specification (latar belakang bisnis mitra, user personas, batasan scope MVP, kebutuhan fungsional FR-01 s.d. FR-06).
2. **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)**: Standar visual dan aturan desain antarmuka (aturan 60-30-10, Anti-Slop Blacklist, tokens warna Amber & Slate, tipografi tabular, responsive 375px–1440px+).
3. **[docs/ERD_SCHEMA.md](docs/ERD_SCHEMA.md)**: Entity-Relationship Diagram (ERD) dan skema data model (Category, Product, Mystery Pool, Exhibition Event, Booth Zone, dan instrumen kuesioner SUS).
4. **[docs/API_CONTRACT.md](docs/API_CONTRACT.md)**: Kontrak REST endpoint JSON untuk feed data pameran mall, simulasi gacha pull, katalog produk, dan submit evaluasi SUS.
5. **[docs/PROPOSAL_BAB1_CONCEPT.md](docs/PROPOSAL_BAB1_CONCEPT.md)**: Naskah resmi Proposal Bab I Pendahuluan dan Tahap 1 Concept (format APA edisi ke-7) untuk evaluasi dosen pengampu.

---

## 🛠️ Tech Stack & Architecture
* **Frontend Core**: HTML5, Tailwind CSS (Design Tokens & Utility), Vanilla JavaScript / React.
* **Audio Engine**: Web Audio API Synthesizer (menghasilkan efek suara interaktif tanpa ketergantungan file eksternal besar).
* **Documentation & Planning**: Luther-Sutopo 6-Stage Framework, Vaughan Methodology comparison.
* **Live Google Docs**: [Proposal CP Multimedia di Google Docs](https://docs.google.com/document/d/1JPpChM_m7fSVr1qHORW8Vz-3iIkZ8zHrNTWfduYuQVg/edit)

---

## 👥 Tim Pengembang
* **Mata Kuliah**: Multimedia (Case Project UAS)
* **Jurusan**: Sistem Informasi, Fakultas Ilmu Komputer
* **Dosen Pengampu**: Mukhlis Febriady, S.Si., M.Kom.
* **Mitra Usaha**: Rickiest Toys and Hobby Shop (Palembang)
