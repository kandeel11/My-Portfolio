# Mohamed Khaled Portfolio — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `^15.0` | Framework |
| `react` | `^19.0` | UI library |
| `react-dom` | `^19.0` | React DOM renderer |
| `typescript` | `^5.7` | Type safety |
| `tailwindcss` | `^4.0` | Utility-first CSS |
| `@tailwindcss/postcss` | `^4.0` | PostCSS integration for Tailwind |
| `geist` | `^1.3` | Geist Sans & Geist Mono font packages |
| `gsap` | `^3.12` | Animation engine (ScrollTrigger, timelines) |
| `lenis` | `^1.1` | Smooth scroll |
| `lucide-react` | `^0.468` | Icon library |
| `@types/node` | `^22.0` | Node.js type definitions |
| `@types/react` | `^19.0` | React type definitions |
| `@types/react-dom` | `^19.0` | ReactDOM type definitions |

---

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| `Navigation` | Custom | Fixed top bar with mobile hamburger overlay. Backdrop blur, smooth-scroll anchor links. |
| `Footer` | Custom | Two-row footer with branding and copyright. |
| `SmoothScrollProvider` | Custom (wraps lenis) | Provides Lenis instance via context for scrollTo and menu lock. |
| `CustomCursor` | Custom | GSAP quickTo-driven cursor circle. Conditionally rendered (hidden on touch). |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Two-zone layout: text left, ProjectStackCarousel right. Orchestrates 5 staggered entrance animations. |
| `SkillsSection` | Custom | 3-column grid of SkillCategory cards with IntersectionObserver-triggered bar animations. |
| `TickerDivider` | Custom | Thin band wrapping the LiveMetricsTicker. |
| `ExperienceSection` | Custom | Two-column: sticky left heading, right scrolling timeline with TimelineEntry nodes. |
| `ProjectsSection` | Custom | 2-column project card grid with OrbitalTextRing as background decoration. |
| `ContactSection` | Custom | Centered contact card with social icon row and CV download CTA. |

### Reusable Components

| Component | Source | Used By | Notes |
|-----------|--------|---------|-------|
| `ProjectStackCarousel` | Custom | HeroSection | 3D GSAP-driven card ring. See Animation Implementation. |
| `LiveMetricsTicker` | Custom | TickerDivider | RAF-based infinite horizontal scroll. |
| `OrbitalTextRing` | Custom | ProjectsSection | SVG textPath with GSAP startOffset animation. |
| `SkillCategory` | Custom | SkillsSection | Card with icon, title, and skill list (bars or tags). |
| `SkillBar` | Custom | SkillCategory | Animated progress bar with label. Width animated via GSAP on scroll trigger. |
| `TimelineEntry` | Custom | ExperienceSection | Single timeline node with marker, date, title, bullets. |
| `ProjectCard` | Custom | ProjectsSection, ProjectStackCarousel | Shared card component used in both grid and carousel. Accepts variant prop for layout differences. |
| `TechPill` | Custom | ProjectCard, SkillCategory | Small rounded tag for technology names. |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Hero text staggered entrance | GSAP (timeline) | Single timeline with 5 sequential tweens, increasing delays. Runs on mount. | Low |
| **Project Stack Carousel** | GSAP | Two timelines: infinite `rotationY` on container (40s), entrance stagger on cards. Cards distributed via inline `rotateY() translateZ()` transforms. Counter-rotation on card content for readability. | **High** 🔒 |
| **Orbital Text Ring** | GSAP | `gsap.fromTo` on `textPath` element animating `attr.startOffset` from 0% to -100%, infinite repeat, linear ease. SVG rotated -90deg for top start. | **Medium** |
| **Live Metrics Ticker** | Vanilla RAF | `requestAnimationFrame` loop advancing `translateX`. Content cloned 2x for seamless wrapping. Position reset when offset reaches measured first-child width. | **Medium** |
| Skill bar fill animation | GSAP + ScrollTrigger | ScrollTrigger fires a `gsap.to` on each bar's width from 0% to target. Stagger 100ms between bars in a card. | Medium |
| Skill card entrance | GSAP + ScrollTrigger | Batch: cards fade in + translateY(40→0), 200ms stagger. Triggered by IntersectionObserver. | Low |
| Timeline entry entrance | GSAP + ScrollTrigger | Each entry: fade + translateX(30→0), 150ms stagger between entries. | Low |
| Project card stagger entrance | GSAP + ScrollTrigger | Cards fade + translateY(50→0), 100ms stagger. | Low |
| Contact card entrance | GSAP + ScrollTrigger | Scale(0.95→1) + translateY(30→0) + opacity, 700ms. | Low |
| Custom cursor | GSAP (quickTo) | Two `quickTo` instances (x, y) with duration 0.15. Scale tween on interactive element hover via event delegation. | Medium |
| Mobile menu overlay | Framer Motion | `AnimatePresence` with staggered children (50ms delay, 400ms fade from bottom). | Low |
| Nav link hover | CSS | Color transition 200ms. Pure Tailwind. | Low |
| Card hover lift | CSS | translateY + box-shadow + border-color transition. Pure Tailwind. | Low |
| CTA button hover | CSS | scale + box-shadow transition. Pure Tailwind. | Low |

---

## State & Logic

This is a static single-page portfolio. No global state library is needed. All state is local:

- **Lenis instance**: Stored in React context via `SmoothScrollProvider` so Navigation can call `scrollTo()` and mobile menu can call `stop()`/`start()`.
- **Mobile menu open/closed**: Local state in `Navigation`.
- **Ticker contentWidth & clonedItems**: Local state in `LiveMetricsTicker`, measured from DOM on mount.
- **Custom cursor visibility**: Detect touch device on mount; render null if touch.
- **Reduced motion preference**: Read `prefers-reduced-motion` once on mount. Passed as a flag to animation components to skip/disable animations.

---

## Other Key Decisions

- **No shadcn/ui**: The design is fully custom with no standard UI patterns (forms, dialogs, tables). All components are custom-built. No need to initialize shadcn.
- **GSAP over Framer Motion for scroll animations**: GSAP + ScrollTrigger provides more precise control over the skill bar widths, timeline stagger, and scroll-linked behavior. Framer Motion is only used for the mobile menu overlay (AnimatePresence).
- **Image strategy**: Use Next.js `<Image>` with generated images placed in `/public/images/`. Priority loading for hero project carousel images; lazy for project grid below fold.
- **Font loading**: Import from `geist/font/sans` and `geist/font/mono` packages, not Google Fonts CDN.
- **Carousel 3D math**: Card distribution angle is computed at runtime: `angleStep = 360 / cardCount`. Each card gets `rotateY(angle) translateZ(radius)` inline. The card content gets counter `rotateY(-angle)`. This must happen in the same effect as GSAP setup to ensure positions are set before animations begin.
