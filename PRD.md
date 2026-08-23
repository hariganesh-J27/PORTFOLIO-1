# Product Requirement Document (PRD)

## Project Title
**Hari Ganesh J — Elite AI/ML Engineer & Dual-Degree Scholar Portfolio**

---

## 1. Document Overview
* **Author / Candidate**: Hari Ganesh J
* **Academic Pedigree**: B.Tech CSE (VIT Chennai) & BS Data Science (IIT Madras)
* **Domain**: Artificial Intelligence, Machine Learning, Deep Learning, IoT Telemetry, Autonomous Robotics, and Full-Stack Engineering
* **Document Version**: 2.0.0
* **Status**: Production / Live
* **Live Target**: High-Performance Static & React Web Application

---

## 2. Executive Summary & Goals
### 2.1 Mission Statement
To architect a cutting-edge, high-contrast monochrome digital portfolio that showcases Hari Ganesh J's dual-degree academic rigor, industry-recognized AI/ML credentials, advanced IoT hardware projects, and engineering competencies through fluid interactive web graphics and modern UI patterns.

### 2.2 Core Objectives
1. **High Visual Impact**: Present an elite, minimalist monochrome aesthetic (`#FDFFF5` milky white background with `#000000` solid black foreground elements) engineered with fluid WebGL/Canvas micro-interactions.
2. **Comprehensive Showcase**: Highlight engineering projects, research milestones, dual-degree coursework, verified certifications, and interactive radar tech stacks.
3. **Flawless Usability**: Ensure responsive single-line typographic precision, seamless navigation with dynamic ScrollSpy, interactive modals, and mobile drawer accessibility.
4. **Dual Architecture**: Provide both a static multi-page implementation for instant CDN hosting and a modular React 18 + Vite component ecosystem.

---

## 3. Design System & Aesthetic Specifications

| Design Dimension | Specification |
|-------------------|---------------|
| **Base Background** | Milky White (`#FDFFF5` / `#ffffff`) |
| **Foreground / Text** | Solid High-Contrast Black (`#000000`) |
| **Secondary / Muted Text** | Charcoal / Dark Zinc (`#27272a`, `#3f3f46`, `#52525b`) |
| **Borders & Dividers** | Subtle Black Alpha (`rgba(0, 0, 0, 0.15)` – `rgba(0, 0, 0, 0.25)`) |
| **Card Styling** | Glassmorphic frost cards with `backdrop-filter: blur(16px)` and hover elevation |
| **Typography - Headings** | `Outfit`, `Bebas Neue`, sans-serif |
| **Typography - Code & Tags**| `JetBrains Mono`, `Fira Code`, monospace |
| **Typography - Body** | `Inter`, -apple-system, sans-serif |
| **Interactive Accents** | Starlight shockwaves, dynamic proximity hover scaling, active underlines |

---

## 4. Functional Requirements & Feature Modules

```
+-----------------------------------------------------------------------------------+
|                              GLOBAL HEADER & NAVBAR                               |
| [☀️/🌙 Toggle]  [Hari Ganesh J]   ---   [Home | About | Portfolio | Services | ..]|
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  SECTION 1: HERO HOME                                                             |
|  - React Bits 3D Pro Vortex Background Engine                                     |
|  - Dynamic Typewriter Subtitle (Single-line strict nowrap)                         |
|  - "More About Me" CTA + Social Connect Links                                     |
|                                                                                   |
|  SECTION 2: ABOUT & DUAL-DEGREE EDUCATION                                         |
|  - Vector Profile Avatar & Biography                                              |
|  - VIT Chennai (B.Tech CSE) & IIT Madras (BS Data Science) Timeline               |
|                                                                                   |
|  SECTION 3: SERVICES & SPECIALIZATIONS (2x2 Bento Box)                             |
|  - IoT Sensor Telemetry (ESP32 / ADXL345)                                         |
|  - Deep Neural Networks & PyTorch Vision (CNN / ResNet)                           |
|  - Autonomous Robotics (ROS2 Gazebo Simulation)                                   |
|  - Cloud AI & MLOps (FastAPI / Docker / AWS)                                      |
|                                                                                   |
|  SECTION 4: SELECTED WORKS / PROJECTS BENTO GRID                                  |
|  - Multi-Category Filtering (All, Wearable IoT, AI/ML, Cloud)                      |
|  - Scoliosis Detection Hardware, Trajectory Prediction, Financial Sentiment       |
|                                                                                   |
|  SECTION 5: CREDENTIALS, SKILLS & INTERACTIVE RADAR SPIDER WEB                    |
|  - Verified Certificates (Cisco Modern AI, Data Science, AWS, Google)             |
|  - 5-Spoke Morphing SVG Spider Web Radar Matrix & Stage Inspector                 |
|                                                                                   |
|  SECTION 6: CONTACT & INTERACTIVE MESSAGING                                       |
|  - Live Contact Form with Instant Status Feedback                                 |
|  - Aceternity UI Floating Dock with macOS Proximity Magnification                 |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|                             GLOBAL FOOTER & RESUME MODAL                          |
+-----------------------------------------------------------------------------------+
```

### Module 1: Global Navigation & ScrollSpy
* **Desktop Navigation**: Links for `Home`, `About`, `Portfolio`, `Services`, `Certificates`, `Contact`.
* **Redirection Routes**:
  * `Home` ➔ `#hero` / `index.html`
  * `About` ➔ `#about` / `about.html`
  * `Portfolio` ➔ `#projects` / `projects.html`
  * `Services` ➔ `#services` / `index.html#services`
  * `Certificates` ➔ `#credentials` / `credentials.html`
  * `Contact` ➔ `#contact` / `contact.html`
* **ScrollSpy**: Automatically highlights active navigation link with a bottom underline indicator (`.nav-link.active::after`) based on real-time scroll offset.
* **Mobile Drawer**: Responsive hamburger drawer with backdrop blur and smooth open/close toggle.

### Module 2: Hero & Dynamic Typewriter
* **Header Tag**: `HELLO, WORLD.` in uppercase monospace tracking.
* **Main Title**: `I'm Hari Ganesh J` in bold `Outfit` typography.
* **Single-Line Typewriter**: `AI & ML ENGINEER • STUDENT AT VIT & IIT MADRAS` with `white-space: nowrap !important;`, blinking cursor, and loop cycling.
* **Vortex Canvas**: Background interactive particle vortex animation.

### Module 3: Cursor-Interactive Galaxy Constellation Background
* **Dynamic Constellation Web**: Generates dynamic filament lines connecting mouse coordinates to nearby stars within `185px`.
* **Magnetic Physics**: Nearby particles swirl and drift smoothly towards/away from the pointer.
* **Click Supernova Shockwave**: Expanding ripple (`5px ➔ 210px`) dispersing 14 sparkle micro-burst particles.
* **Multi-Depth Twinkling**: Variable star radii (`1.0px` to `3.0px`) with sinusoidal luminance oscillation.

### Module 4: 2x2 Bento Box Services Grid
* **Card 1 (IoT Sensor Telemetry)**: ESP32 Hardware Accelerometer Arrays with WebSocket telemetry.
* **Card 2 (AI & ML Architecture)**: Deep Neural Networks & PyTorch Vision (CNNs, ResNets, Scikit-Learn).
* **Card 3 (Autonomous Robotics)**: ROS2 Gazebo Simulation & Spatial-Temporal Trajectory Predictors.
* **Card 4 (Cloud AI & MLOps)**: Agent Infrastructure, Microservices, Docker containers, FastAPI, AWS/GCP.

### Module 5: Engineering Projects Bento Grid & Category Filters
* **Filter Modes**: `All Systems`, `Wearable IoT`, `AI / ML & Vision`, `Cloud & Telemetry`.
* **Hero Project**: Wearable Scoliosis Detection System (ADXL345, ESP32, PyTorch Neural Regression).
* **Featured Projects**:
  * Real-Time UAV Trajectory Tracking (ROS2, Gazebo, PyTorch LSTM).
  * High-Throughput Financial Sentiment Pipeline (FinBERT, Kafka, FastAPI).
  * Medical Imaging & Chest X-Ray Pathology Classifier (EfficientNet, Grad-CAM).

### Module 6: Interactive Spider Web Radar Matrix
* **SVG Radar Structure**: 5 Concentric pentagonal rings, 5 dashed spoke axes, and dynamic filled polygon.
* **5 Architecture Stages**:
  1. `Stage 01`: Algorithms & Foundations (98%)
  2. `Stage 02`: Machine Learning & SQL DBMS (95%)
  3. `Stage 03`: Hardware & IoT Sensor Telemetry (92%)
  4. `Stage 04`: Cloud AI Agents & Microservices (90%)
  5. `Stage 05`: Live 3D Telemetry & Visual Computing (94%)
* **Interaction**: Hovering/clicking any spoke node or stage button morphs polygon vertices in real-time and populates the live stage inspector card.

### Module 7: Verified Credentials & Modal Inspector
* **Certificate Cards**:
  * Introduction to Modern AI (Cisco Networking Academy) — ID: `4a064784-5312-49df-a58e-340aa9c45f1c`
  * Introduction to Data Science (Cisco Networking Academy) — ID: `3b89012f-9812-41ce-871c-762bb908412e`
* **Inspection Modal**: Clicking any card opens a high-resolution inspection modal with verification hash, issuer credentials, and metadata.

### Module 8: React Bits Component Library Suite
* **`<Particles />`**: WebGL/OGL 3D particle cloud with custom GLSL shaders and mouse hover responsiveness.
* **`<ScrollExpand />`**: Sticky scroll-driven media expanding stage with smooth clip-path transitions.
* **`<SpotlightCard />`**: Dynamic radial cursor spotlight follower.
* **`<Vortex />`**: Mathematical particle spiral background.
* **`<GlitchText />` & `<ShinyText />`**: GPU-accelerated typographic animations.

---

## 5. Non-Functional Requirements (NFRs)

### 5.1 Performance & Responsiveness
* **60 FPS Graphics**: Canvas starlight constellation and WebGL OGL render loops maintain 60 FPS on standard desktop and mobile hardware.
* **Zero Layout Shift (CLS)**: Strict single-line typewriter containers and responsive flex/grid wrappers prevent visual layout jump during dynamic text typing.
* **Asset Optimization**: Vector SVG radar charts, compressed raster mockups, and minimal dependency bundles.

### 5.2 Accessibility & Usability
* **High Contrast Ratio**: `#FDFFF5` on `#000000` satisfies WCAG AAA contrast requirements (> 14:1 ratio).
* **Keyboard & Screen Reader Support**: Explicit `aria-label`, `title`, semantic `<nav>`, `<main>`, `<section>`, and `<header>` markup.
* **Touch-Friendly Controls**: Touch targets calibrated to ≥ 44px on mobile viewports.

### 5.3 Cross-Browser Compatibility
* Validated on Chrome 120+, Safari 17+, Firefox 120+, Edge, and mobile iOS/Android browsers.

---

## 6. Technical Stack & File Directory Map

```
ai:ml/
├── index.html               # Main comprehensive single-page portfolio
├── about.html               # Dedicated About & Dual-Degree Education page
├── projects.html            # Dedicated Engineering Projects Bento page
├── credentials.html         # Dedicated Credentials & Interactive Radar page
├── contact.html             # Dedicated Contact & Inquiries page
├── style.css                # Global design system, glassmorphism & typography
├── app.js                   # Galaxy background, radar engine, ScrollSpy, modals
├── PRD.md                   # Product Requirement Document
├── portfolio_codebase.zip   # Complete production distribution archive
│
└── src/                     # React 18 + Vite Module Suite
    ├── main.jsx             # React DOM entry point
    ├── App.jsx              # Root Application Component
    ├── index.css            # React global tailwind-compatible styles
    └── components/
        ├── Particles.jsx    # React Bits OGL 3D Particles WebGL Component
        ├── Particles.css    # Particles container styles
        ├── ScrollExpand.jsx # React Bits ScrollExpand Component
        ├── ScrollExpand.css # ScrollExpand styles
        ├── Hero.jsx         # React Hero component
        ├── About.jsx        # React About component
        ├── Projects.jsx     # React Projects component
        ├── Skills.jsx       # React Skills component
        ├── Certifications.jsx # React Certifications component
        ├── Navbar.jsx       # React Navbar component
        └── Footer.jsx       # React Footer component
```

---

## 7. Verification & Release Checklist
- [x] High-contrast monochrome theme verified across all pages.
- [x] Subtitle single-line formatting verified with `white-space: nowrap !important`.
- [x] Top header navigation links verified with ScrollSpy and direct redirection.
- [x] Interactive Spider Web Radar Matrix functional with 5 morphing stages.
- [x] Cursor-interactive Galaxy Constellation engine live with click shockwaves.
- [x] React Bits `<Particles />` component integrated with OGL 3D rendering.
- [x] All certificates, projects, and contact channels tested and active.
- [x] Production zip package generated: `portfolio_codebase.zip`.
