# Product Requirements Document (PRD) & Software Requirements Specification (SRS)
## Project: Rickiest Toys & Hobby - Interactive Experience Hub & Exhibition Companion

---

## 1. Executive Summary & Business Background
* **Business Entity**: **Rickiest Toys and Hobby Shop**, a premier independent hobby shop based in Palembang, South Sumatra.
  * **Flagship Store**: Jl. AKBP H.M. Amin No. 423/29, Kelurahan 18 Ilir, Kecamatan Ilir Timur I, Kota Palembang.
  * **Official Channels**: [Facebook: TheRickiest](https://web.facebook.com/TheRickiest/), Tokopedia (*Rickiest Toys*), and WhatsApp Business.
* **Core Product Pillars**:
  1. *Blind Box & Art Toys*: Pop Mart, Blokees Mystery Boxes, 52Toys collectibles.
  2. *Model Kits & Action Figures*: Bandai Gunpla, Blokees snap-fit kits, licensed action figures.
  3. *Trading Card Games (TCG)*: Official Tournament Store (OTS) hosting Pokémon TCG Gym Battles, Yu-Gi-Oh! tournaments, and One Piece Card Game.
* **Core Problem Statement**:
  1. *Blind Box Uncertainty*: Blind boxes are sealed, preventing novice buyers at mall pop-ups from appreciating the physical figure quality, articulation, and chase variants.
  2. *Fragmented Event Information*: Temporary pop-up booths at Palembang malls (Palembang Icon, PIM, PTC Mall) lack a cohesive digital companion linking mall visitors back to booth zones and the flagship store in 18 Ilir.
  3. *Academic Imperative*: Meets the requirements of the Multimedia Case Project (Luther-Sutopo methodology) by providing text, graphic, audio (SFX), video showcase, unboxing animation, and user interactivity.

---

## 2. Target Audience & Personas
1. **Young Hobbyist & Pop-Culture Enthusiast (Age 15–28)**:
   - Enjoys anime, mecha, and gaming culture. Seeks information about secret chase rates, product specs, and community events.
2. **Mall Shopper & Family Visitor (Age 20–45)**:
   - Wanders into the mall atrium during weekend exhibitions. Curious about the blind box trend and looking for gifts or event-exclusive promos.
3. **Store Management / Staff**:
   - Needs a clean, reliable digital showcase to demonstrate unboxing odds and direct visitors to official purchase channels without maintaining complex custom e-commerce infrastructure.

---

## 3. Product Scope & Technical Boundaries
* **Target Platforms**: Responsive Web (Mobile 375px–430px up to Desktop 1440px+).
* **Application Architecture**: High-performance Single Page Application (SPA).
* **Multimedia Elements**:
  - *Text & Graphics*: High-resolution product cards, 2D booth floor plan vector, typography hierarchy.
  - *Audio*: UI sound effects (click) and victory fanfare sound effects for unboxing (with User Toggle On/Off). No continuous background music.
  - *Video*: 45-second embedded teaser reel of the 18 Ilir store and mall pop-up events.
  - *Animation*: Shake, glow, and card reveal animations during gacha unboxing.
  - *Interactivity*: Interactive booth zone pins, unboxing simulator triggers, and direct WhatsApp / Tokopedia bridges.
* **Financial Boundary**: Transaction processing is intentionally decoupled from web server logic. Purchases and voucher claims route to verified channels (WhatsApp & Tokopedia).

---

## 4. User Journey & Information Architecture
1. **Section 1: Store Intro & 3 Pillars**:
   - Immediate value proposition: Discover Rickiest Toys as Palembang's top hobby hub.
   - 3 clear pillars (Blind Box, Model Kits, Official TCG).
   - 45s embedded video reel of store and past pop-up events.
2. **Section 2: Virtual Blind Box Gacha**:
   - Simulated unboxing: click mystery box -> 1.2s tactile rumble -> burst reveal -> rarity status & character stats.
   - Sound fanfare chime triggers on reveal.
3. **Section 3: Palembang Mall Event Radar**:
   - Live exhibition announcement (dates, location at Palembang Icon Atrium).
   - Interactive 2D floor plan with 3 clickable zones:
     - *Zone A*: Diorama Showcase & Photo Spot.
     - *Zone B*: Blind Box Wall.
     - *Zone C*: Promo Cashier & TCG Free-Play Area.
4. **Section 4: Product Catalog & Store Direct Contact**:
   - Featured series display with pricing and availability.
   - Event voucher claim button.
   - Flagship store address in 18 Ilir with operating hours and social links.

---

## 5. Functional Requirements (SRS)

| Req ID | Module | Functional Description | Media Element |
| :--- | :--- | :--- | :--- |
| **FR-01** | **SFX Audio Manager** | Persistent header toggle allowing users to enable/disable UI and unboxing sound effects. | Audio (Web Audio API / Synthesizer) |
| **FR-02** | **Store Profile & Pillars** | Showcase Rickiest Toys' identity, 18 Ilir flagship address, and 3 distinct product pillars. | Text & Vector Graphics |
| **FR-03** | **Video Showcase Player** | Responsive 16:9 embedded video player presenting the 45-second event and store reel. | Video & Audio |
| **FR-04** | **Blind Box Gacha Simulator** | Clickable mystery box triggering rumble animation, reveal modal, character stats, and fanfare SFX. | Animation, Audio, Interactivity |
| **FR-05** | **Mall Booth Floor Plan** | Interactive 2D layout of mall exhibition booth with selectable zones updating facility perks. | Graphic & Interactivity |
| **FR-06** | **Catalog & Order Bridge** | Product cards with pricing, voucher claim modal/toast, and direct external links to WhatsApp & Tokopedia. | Text, Graphic, Interactivity |

---

## 6. Non-Functional Requirements
1. **Performance**: First Contentful Paint (FCP) < 1.5s, total page payload < 3MB.
2. **Design Standards**: Strict compliance with `docs/DESIGN_SYSTEM.md` (Linear/Stripe-inspired restrained dark aesthetic, no AI slop, no neon gradients, WCAG AA contrast).
3. **Responsiveness**: Fully responsive from 375px to 1440px+ with zero horizontal overflow.
4. **Usability Verification**: Target System Usability Scale (SUS) score > 70 across 15 beta test respondents.
