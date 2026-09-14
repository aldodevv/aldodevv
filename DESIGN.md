# Design System: Akhmad Aldo (aldodevv) — Utilitarian Editorial

## 1. Visual Theme & Atmosphere
A restrained, gallery-airy interface with confident asymmetric bento layouts, razor-sharp hairline borders, and quiet, spring-calibrated micro-motion. The atmosphere is technical, intentional, and editorial — like a high-precision architectural monograph or an advanced workspace engineering document.
- **Density:** 4 / 10 (Daily App Balanced — generous macro-whitespace, focused content containment)
- **Variance:** 7 / 10 (Offset Asymmetric — dynamic bento grids, off-center hero, avoiding predictable symmetry)
- **Motion:** 6 / 10 (Fluid Spring Physics — quiet entrance reveals, subtle elevation shifts, perpetual status loops)

## 2. Color Palette & Roles
- **Canvas Warm Bone** (`#FBFBFA`) — Primary canvas background surface; warm off-white, anti-sterile.
- **Card Pure Surface** (`#FFFFFF`) — Bento card surfaces, faux-OS windows, and interactive containers.
- **Charcoal Ink** (`#111111`) — High-contrast primary headings, body text, and solid primary CTA buttons. Never use pure black (`#000000`).
- **Muted Slate** (`#787774`) — Secondary descriptive text, colophons, timestamps, and architectural labels.
- **Hairline Border** (`#EAEAEA`) — Razor-sharp 1px structural dividing lines and container frames.
- **Sage Focus Accent** (`#346538` text / `#EDF3EC` fill) — Primary semantic status accent for availability and verified production credentials.
- **Calm Blue Accent** (`#1F6C9F` text / `#E1F3FE` fill) — Secondary accent for mobile systems and technical tags.
- **Warm Sand Accent** (`#956400` text / `#FBF3DB` fill) — Tertiary accent for web tooling tags.
*(Constraint: Maximum 1 prominent accent at a time. All pastel saturations < 40%. No neon glows or AI-purple gradients.)*

## 3. Typography Rules
- **Display & Headlines:** `Newsreader` (Fallback: `Instrument Serif`, `Lyon Text`, Georgia, serif) — Tight negative tracking (`letter-spacing: -0.025em` to `-0.035em`), tight line-height (`1.05 - 1.15`), weight-driven contrast. Used for hero statements, section titles, and pull quotes.
- **Body & UI:** `Geist Sans` (Fallback: `SF Pro Display`, `Switzer`, `Helvetica Neue`, sans-serif) — Relaxed leading (`1.6`), max line-length 65ch, neutral charcoal color. Banned: `Inter`, `Roboto`, `Open Sans`.
- **Monospace & Metadata:** `Geist Mono` (Fallback: `SF Mono`, `JetBrains Mono`, monospace) — Used for code tags, `<kbd>` keystrokes, version labels, coordinate tags, and technical specifications.
- **Scale Hierarchy:**
  - Hero Headline: `clamp(2.75rem, 6vw, 5.5rem)` / Line-height `1.05`
  - Section Title: `clamp(1.75rem, 3.5vw, 3rem)` / Line-height `1.15`
  - Card Heading: `1.25rem - 1.5rem` / Medium weight
  - Body Text: `0.9375rem - 1.0625rem` / Leading `1.6`
  - Metadata & Tags: `0.6875rem - 0.75rem` / Monospace, uppercase, `letter-spacing: 0.05em`

## 4. Component Stylings
- **Primary Buttons:**
  - Solid `#111111` charcoal fill, `#FFFFFF` crisp text.
  - Micro-radii (`border-radius: 6px`). No heavy drop shadows.
  - Micro-scale translate on active: `transform: scale(0.98)`.
  - Hover state: subtle color shift to `#2A2A2A`.
- **Secondary / Outline Buttons:**
  - `#FFFFFF` surface with `1px solid #EAEAEA` border.
  - Hover: background `#F7F6F3` and border `#DCDCDC`.
  - Includes inline `<kbd>` shortcut badge where keyboard shortcuts exist.
- **Bento Cards:**
  - Rigid `1px solid #EAEAEA` hairline perimeter.
  - Crisp corner radii (`border-radius: 12px`).
  - Hover state: ultra-diffuse whisper shadow `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)`.
  - Generous internal padding (`24px` to `40px`).
- **Tags & Status Badges:**
  - Pill-shaped (`border-radius: 9999px`), very small typography (`text-xs`), uppercase with wide tracking (`letter-spacing: 0.05em`).
  - Background must use defined muted pastels (`#EDF3EC`, `#E1F3FE`, `#FBF3DB`, `#FDEBEC`).
  - Active status includes a miniature 6px pulsing indicator dot.
- **Faux-OS Window Chrome:**
  - Minimalist top bar with `1px solid #EAEAEA` border-bottom and three subtle 10px light gray circles (`#EAEAEA` with `#D8D8D8` hairline outline).
  - Centered monospace filename identifier (e.g., `overview.config.ts`).
- **Keystroke Micro-UIs:**
  - Rendered with `<kbd className="kbd-shortcut">`: `border: 1px solid #EAEAEA`, `background: #F7F6F3`, monospace font, `border-radius: 4px`.

## 5. Layout Principles
- **Macro-Whitespace First:** Sections breathe with generous vertical padding (`py-24` to `py-32` / `6rem` to `8rem`).
- **Asymmetric Bento Grids:** Use 12-column grid architectures with asymmetrical splits (e.g., 7-col bio / 5-col media; 3-column faux-terminal metrics).
- **Hero Stance:** Left-aligned or split hero with high typographic contrast. Centered symmetrical heroes are avoided to maintain editorial tension.
- **Single-Column Mobile Collapse (< 768px):** All multi-column bento grids collapse gracefully to a clean vertical stack. Zero horizontal overflow allowed.
- **Containment:** Main container capped at `max-w-5xl` (`1024px` - `1120px`) for optimal reading rhythm and scannability.
- **Viewports:** Full-height containers must use `min-h-[100dvh]` rather than `h-screen`.

## 6. Motion & Interaction
- **Scroll Entry Animation:** Elements fade and elevate gently upon entering the viewport (`translateY(16px)` + `opacity: 0` resolving to `translateY(0)` + `opacity: 1` over `600ms` via `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Staggered Orchestration:** Grid children mount sequentially with cascade delays (`animation-delay: index * 80ms`).
- **Perpetual Micro-Interactions:** Availability indicator pulses infinitely (`animate-pulse`); interactive cards respond with smooth border and shadow transitions.
- **Hardware Acceleration:** Animations restricted exclusively to `transform` and `opacity`. Layout-triggering properties (`top`, `left`, `width`, `height`) are strictly avoided in transitions.

## 7. Anti-Patterns (Banned AI Tells)
- **NO Emojis:** Replace all emojis with standardized SVG glyphs or clean monospace characters.
- **NO `Inter`, `Roboto`, or `Open Sans`:** Default AI typefaces are strictly prohibited.
- **NO Generic Serif Fonts:** `Times New Roman`, `Georgia`, and standard `Garamond` are banned; use modern distinctive serifs like `Newsreader` or `Instrument Serif`.
- **NO Pure Black (`#000000`):** Always use off-black/charcoal (`#111111` or `#18181B`).
- **NO Neon/Glow Effects:** No purple button glows, cyan drop shadows, or futuristic glassmorphism.
- **NO Symmetrical 3-Card Rows:** Feature lists must use asymmetrical bento grids or editorial split layouts.
- **NO AI Copywriting Clichés:** Words like "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", and "Delve" are banned. Write plain, concrete technical copy.
- **NO Filler UI Text:** "Scroll to explore", "Swipe down", bouncing arrows, or chevron indicators are banned.
- **NO Pill Shapes on Cards or Main Buttons:** `rounded-full` is restricted to tags, status pills, and floating nav containers. Cards and buttons maintain crisp `6px` - `12px` radii.
