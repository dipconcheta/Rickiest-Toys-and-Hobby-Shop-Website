# API Contract & Data Feeds
## Project: Rickiest Toys & Hobby Shop Website

This document specifies the REST endpoint contracts, data shapes, and JSON payload schemas for the application. In the current MVP phase, these schemas are consumed via client-side static mock stores (`src/data/`) and are fully prepared for backend API ingestion.

---

## 1. Global Response Envelope

All API responses follow the standard JSend/REST structure:

```json
{
  "status": "success",
  "data": {},
  "meta": {
    "timestamp": "2026-11-27T14:40:00Z",
    "version": "1.0.0"
  }
}
```

---

## 2. Endpoints Specification

### 2.1 Get Active Mall Exhibition & Booth Zones
* **Endpoint:** `GET /api/v1/events/active`
* **Description:** Retrieves the current active pop-up exhibition at Palembang malls with its floor plan zones.

#### Response (200 OK):
```json
{
  "status": "success",
  "data": {
    "event": {
      "id": "evt-plg-icon-2026",
      "mall_name": "Palembang Icon",
      "venue_atrium": "Main Atrium, Ground Floor",
      "city": "Palembang",
      "start_date": "2026-11-28",
      "end_date": "2026-12-02",
      "opening_hours": "10:00 - 22:00 WIB",
      "is_active": true
    },
    "zones": [
      {
        "zone_code": "A",
        "zone_title": "Diorama Showcase & Display Figur",
        "description": "Display estetik koleksi Gunpla rakitan, Blokees mecha berskala besar dengan lampu LED, serta spot foto menarik.",
        "perk_primary": "Area Foto Display Pop Culture",
        "perk_secondary": "Konsultasi Koleksi Bersama Staf Rickiest",
        "icon": "✨"
      },
      {
        "zone_code": "B",
        "zone_title": "Blind Box Wall & Art Toys Showcase",
        "description": "Dinding ratusan kotak Blind Box resmi Pop Mart, Blokees, dan 52Toys dengan kesempatan mendapatkan edisi Secret.",
        "perk_primary": "Diskon Promo Khusus Pameran",
        "perk_secondary": "Layanan Buka Box Langsung di Stan",
        "icon": "🎁"
      },
      {
        "zone_code": "C",
        "zone_title": "Kasir Promo & TCG Free-Play Area",
        "description": "Area kasir penukaran voucher pameran serta meja bermain kartu resmi Pokémon TCG & One Piece bersama komunitas Palembang.",
        "perk_primary": "Pembayaran Cash / QRIS Cepat",
        "perk_secondary": "Free Demo Deck Pokémon TCG untuk Pemula",
        "icon": "🃏"
      }
    ]
  }
}
```

---

### 2.2 Trigger Blind Box Gacha Pull
* **Endpoint:** `POST /api/v1/gacha/pull`
* **Description:** Simulates an unboxing pull, returning a weighted random character outcome from the mystery pool.

#### Request Body:
```json
{
  "pool_id": "pool-blokees-vol-01"
}
```

#### Response (200 OK):
```json
{
  "status": "success",
  "data": {
    "item": {
      "id": "item-megatron-secret",
      "character_name": "Megatron Metallic Ver.",
      "series": "Blokees Transformers Mystery Box",
      "rarity_type": "SECRET_CHASE",
      "odds_display": "1/36 Secret Rare",
      "description": "Armor krom khusus dengan efek cat kilap metalik + senjata Fusion Cannon.",
      "power_stat": 98,
      "articulation_joints": 22,
      "avatar_icon": "🤖"
    }
  }
}
```

---

### 2.3 Get Featured Products Catalog
* **Endpoint:** `GET /api/v1/products`
* **Query Params:** `category` (optional, e.g. `model-kits`, `blind-box`, `tcg`)

#### Response (200 OK):
```json
{
  "status": "success",
  "data": {
    "products": [
      {
        "id": "prod-001",
        "category_slug": "blind-box",
        "name": "Blokees Transformers Mystery Box",
        "badge": "BLIND BOX RESMI",
        "price": 129000,
        "price_formatted": "Rp 129.000",
        "description": "Box segel acak berisi figur Transformers berlisensi resmi dengan artikulasi lengkap.",
        "is_available": true
      },
      {
        "id": "prod-002",
        "category_slug": "model-kits",
        "name": "HG 1/144 Gundam Aerial",
        "badge": "BANDAI GUNPLA",
        "price": 249000,
        "price_formatted": "Rp 249.000",
        "description": "High Grade original Bandai Spirits. Tersedia lengkap di toko 18 Ilir Palembang.",
        "is_available": true
      },
      {
        "id": "prod-003",
        "category_slug": "tcg",
        "name": "Pokémon TCG Booster Pack",
        "badge": "OFFICIAL TCG",
        "price": 45000,
        "price_formatted": "Rp 45.000",
        "description": "Booster pack seri Indonesia terbaru. Ikuti Gym Battle tiap akhir pekan di toko kami!",
        "is_available": true
      }
    ]
  }
}
```

---

### 2.4 Submit Usability Testing Evaluation (SUS Survey)
* **Endpoint:** `POST /api/v1/evaluation/sus`
* **Description:** Captures response from the 15 beta test respondents for Chapter IV.5.

#### Request Body:
```json
{
  "respondent_initial": "AD",
  "respondent_age": 21,
  "user_category": "HOBBYIST",
  "responses": {
    "q1": 4,
    "q2": 1,
    "q3": 5,
    "q4": 2,
    "q5": 4,
    "q6": 1,
    "q7": 5,
    "q8": 1,
    "q9": 4,
    "q10": 2
  },
  "feedback_notes": "Animasi gacha sangat mulus dan efek suaranya memuaskan."
}
```

#### Response (201 Created):
```json
{
  "status": "success",
  "data": {
    "id": "sus-resp-001",
    "calculated_sus_score": 87.5,
    "grade_adjective": "EXCELLENT",
    "submitted_at": "2026-11-27T14:40:00Z"
  }
}
```
