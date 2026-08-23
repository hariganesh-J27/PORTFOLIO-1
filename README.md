# Hari Ganesh J — AI/ML Engineer Portfolio

A production-grade, high-contrast, minimalist portfolio website for **Hari Ganesh J** (AI & ML Engineer • Dual-Degree CS Student at VIT Chennai & IIT Madras).

---

## 🚀 How to Run in Visual Studio Code

You can run this project in **VS Code** using any of the following 3 simple methods:

---

### Option 1: VS Code Live Server (Recommended — Fastest & Zero Configuration)

1. Open **VS Code**.
2. Go to **File > Open Folder...** and select the project folder (`ai:ml`).
3. If you don't already have it, install the **Live Server** extension by *Ritwick Dey* from the VS Code Extensions Marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`, search for `Live Server`).
4. Right-click on **`index.html`** in the VS Code file explorer and click **"Open with Live Server"**.
5. Your default browser will automatically open:
   ```
   http://127.0.0.1:5500/index.html
   ```

---

### Option 2: Using the Integrated Terminal (Python HTTP Server)

1. Open the project folder in **VS Code**.
2. Open the built-in terminal: **Terminal > New Terminal** (or press `` Ctrl+` `` / `` Cmd+` ``).
3. Run the following command:
   ```bash
   python3 -m http.server 8090
   ```
   *(Or on Windows: `python -m http.server 8090`)*
4. Open your browser and navigate to:
   ```
   http://localhost:8090
   ```

---

### Option 3: Using Node.js & Vite (React Development Server)

1. Open the project folder in **VS Code**.
2. Open the integrated terminal and install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Click the local server link displayed in the terminal (typically `http://localhost:5173`).

---

## 📁 Project Structure

```
├── index.html                  # Main Portfolio Landing Page (Hero, ScrollVelocity, About, Services, Projects, Radar, Contact)
├── about.html                  # Dedicated Academic & Dual-Degree Education Page
├── projects.html               # Dedicated Selected Works, Case Studies & Architecture Flowcharts
├── credentials.html            # Dedicated Verified Certifications & Honors Page
├── contact.html                # Dedicated Collaboration & Contact Page
├── style.css                   # Complete High-Contrast Design System & Animations
├── app.js                      # Interactive JavaScript Engine (Radar Matrix, Particles, Vortex, Scroll Velocity)
├── PRD.md                      # Complete Product Requirement Document
├── package.json                # React + Vite build configuration & dependencies
│
├── src/                        # React Components Source Code
│   ├── App.jsx                 # Main React Root Application
│   ├── main.jsx                # React DOM Mount Entry
│   ├── components/
│   │   ├── Vortex.jsx          # React Bits Pro 3D Spinning Vortex Tunnel Engine
│   │   ├── Particles.jsx       # React Bits OGL 3D Particle Shaders
│   │   ├── ScrollVelocity.jsx  # React Bits Scroll Velocity Dynamic Multiplier Ticker
│   │   ├── ScrollExpand.jsx    # React Bits Scroll Expand Interactive Banner
│   │   ├── PixelSwap.jsx       # React Bits PixelSwap Welcome Transition
│   │   ├── GlitchText.jsx      # Cyberpunk Glitch Text Component
│   │   ├── ComparisonSlider.jsx# Interactive Before/After Split Slider
│   │   ├── Navbar.jsx          # Header Navigation Component
│   │   ├── Hero.jsx            # Hero Display Section
│   │   ├── About.jsx           # About & Profile Component
│   │   ├── Skills.jsx          # Skills Radar Matrix Component
│   │   ├── Projects.jsx        # Project Showcase Cards
│   │   ├── Contact.jsx         # Contact Form & Direct Links
│   │   └── Footer.jsx          # Footer Component
│
└── assets/ (images & mockups)  # High-resolution project mockups, avatars & certificate assets
```

---

## 🌟 Key Features & Components

- **React Bits `<Vortex />`**: 3D particle tunnel effect on the landing page background.
- **React Bits `<ScrollVelocity />`**: Dynamic scroll-responsive acceleration marquee ribbon.
- **React Bits `<Particles />`**: WebGL OGL shader particle field with fluid mouse displacement.
- **Chapter 04 Radar Matrix**: Interactive 5-axis pentagonal spider chart with live Stage Inspector.
- **Chapter 02 Services & Specializations**: 2×2 Bento cards with white-to-solid-black hover inversion.
- **Dedicated Sub-pages**: Standalone education timeline (`about.html`), case studies (`projects.html`), verified credentials (`credentials.html`), and contact (`contact.html`).
- **Responsive Architecture**: Fully optimized for desktop, tablet, and mobile displays.
