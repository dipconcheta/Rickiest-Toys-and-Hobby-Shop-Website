# Design System Specification
## Project: Rickiest Toys & Hobby Shop Website

This document establishes the UI design standards, token architecture, and UX constraints for the **Rickiest Toys & Hobby** web application. It strictly adheres to the global rules defined in `UI_DESIGN_SYSTEM.md` (Linear, Stripe, and Apple HIG inspired standards).

---

## 0. Pre-Coding Design Gate (Guiding Architecture)

1. **Primary Goal:** Enable visitors to experience the thrill of collectible unboxing virtually and easily find the booth exhibition schedule at Palembang malls.
2. **Information Budget:** Max 3–5 core elements visible immediately per view (Hero statement, 3 hobby pillars, live exhibition badge, audio toggle).
3. **Progressive Disclosure:** Detailed unboxing odds, character statistics, individual booth zone perks, and full catalog details are revealed only upon explicit interaction (tabs, modals, and clickable floor plan pins).
4. **Responsive Strategy:** Clean mobile-first layout (`375px`) scaling through `640px (sm)`, `768px (md)`, `1024px (lg)`, and `1280px+ (xl)` with zero horizontal overflow.

---

## 1. Anti-Slop Blacklist (Strictly Enforced)

- ❌ **No decorative gradients:** No purple/blue/neon blobs, gradient meshes, or glowing background circles.
- ❌ **No gratuitous glassmorphism:** Standard opaque surfaces (`#09090B`, `#111827`) with crisp `1px` borders. Blur is permitted only on the sticky top navigation bar (`backdrop-blur-md`).
- ❌ **No nested cards:** Maximum card depth is 1 level. Sub-items are separated with spacing, typography, and subtle border lines.
- ❌ **No icon/emoji spam:** Emojis and icons are limited strictly to functional indicators and actions.
- ❌ **No heavy shadows:** Flat, clean surfaces with crisp hairline borders (`border border-slate-800`).
- ❌ **No badge clutter:** Maximum 1 status badge per card or section header.
- ❌ **No filler copy:** Concise, scannable product descriptions and operational details.

---

## 2. Visual Design Standards (Tokens & Hierarchy)

### Color System (60-30-10 Rule — Bright Toy Store Light Theme)
* **60% Neutral Light Canvas:**
  * Background Canvas: `#FAFAFA` (Zinc 50)
  * Elevated Card Surface: `#FFFFFF` (Pure White)
  * Subtle Surface / Pill / Input: `#F4F4F5` (Zinc 100)
  * Hairline Borders: `#E4E4E7` (Zinc 200) and `#D4D4D8` (Zinc 300)
* **30% Typography & Structural Neutral:**
  * Primary Text: `#09090B` (Zinc 950)
  * Secondary Text: `#52525B` (Zinc 600)
  * Muted / Meta Text: `#71717A` (Zinc 500)
* **10% Brand Accent (Single Accent Rule):**
  * Brand Primary: `#DC2626` (Red 600 — matching Rickiest Toys' crimson emblem, WCAG AA compliant with white text)
  * Brand Hover / Active: `#B91C1C` (Red 700)
  * Brand Subtle Surface: `#FEF2F2` (Red 50) with border `#FCA5A5` (Red 300)
* **Official Marketplace & Social Brand Marks:**
  * WhatsApp `#25D366`, Tokopedia `#03AC0E`, Shopee `#EE4D2D`, Facebook `#1877F2` (used strictly inside their official logo marks).

### Typography Hierarchy
* **Font Family:** Modern Sans-Serif (`Inter`, `Plus Jakarta Sans`, or system `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`) paired with `JetBrains Mono` for IDs, prices, and metrics.
* **Scale & Weight:**
  * `Display`: 32px–40px (Desktop) / 24px–28px (Mobile), Font Weight: 800, Tracking: `-0.02em`
  * `Heading 1`: 24px–28px, Font Weight: 700
  * `Heading 2`: 18px–20px, Font Weight: 600
  * `Body Regular`: 14px–15px, Font Weight: 400, Line-height: 1.6, `max-w-prose` (max 65ch)
  * `Caption / Badge`: 11px–12px, Font Weight: 600, Monospace / Uppercase

### Spacing & Grid System (4pt / 8pt Scale)
* Base unit: `4px`
* Spacing scale: `4px (1)`, `8px (2)`, `12px (3)`, `16px (4)`, `24px (6)`, `32px (8)`, `48px (12)`, `64px (16)`.
* Border Radii:
  * Buttons & Inputs: `rounded-lg` (8px)
  * Cards & Containers: `rounded-xl` (12px) to `rounded-2xl` (16px)
  * Badges & Pills: `rounded-full` (9999px)

---

## 3. Responsive-First Component Patterns

* **Mobile Viewport (`375px`):**
  * Navigation collapsed into a compact horizontal scroll bar or segmented button strip.
  * Grid layouts strictly single-column (`grid-cols-1`).
  * Interactive touch targets at minimum `44px x 44px`.
  * Padding: `p-4`, spacing between clickable items: minimum `8px (gap-2)`.
* **Tablet Viewport (`768px`):**
  * 2-column card layouts (`md:grid-cols-2`).
  * 2D booth radar map layout expands horizontally with side-by-side details.
* **Desktop Viewport (`1024px – 1440px+`):**
  * Max container width: `1152px (max-w-6xl)`.
  * Multi-column cards: `lg:grid-cols-3`.
  * Generous whitespace (30–40% open space).

---

## 4. Mandatory Interaction States

Every interactive button, toggle, and pin must support:
1. **Default State**: Clean 1px border, high contrast label.
2. **Hover State**: Subtle surface highlight (`150ms ease-out`), no sudden scaling.
3. **Active / Pressed State**: Slight scale down (`scale-[0.98]`).
4. **Focus-Visible State**: Standard accessible focus ring (`ring-2 ring-red-500/50 ring-offset-2 ring-offset-slate-950`).
5. **Loading / Empty States**: Clean skeleton placeholder matching card dimensions without layout shifts.
