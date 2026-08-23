/**
 * Hari Ganesh J — AI/ML Engineer & Dual-Degree CS Student Portfolio
 * Modular Interactive JavaScript Engine (app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Initialize PixelSwap Welcome Transition & interactive modules
  if (typeof initPixelSwapWelcome === 'function') initPixelSwapWelcome();
  if (typeof initParticles === 'function') initParticles();
  if (typeof initTunnelPortalCanvas === 'function') initTunnelPortalCanvas();
  if (typeof initSnakeScroll === 'function') initSnakeScroll();
  if (typeof initRadarSpiderChart === 'function') initRadarSpiderChart();
  if (typeof initFloatingDock === 'function') initFloatingDock();
  if (typeof initProjectFilters === 'function') initProjectFilters();
  if (typeof initModalSystem === 'function') initModalSystem();
  if (typeof initScrollSpy === 'function') initScrollSpy();
  if (typeof initContactForm === 'function') initContactForm();
  if (typeof initNavbarScroll === 'function') initNavbarScroll();
  if (typeof initSpotlightCards === 'function') initSpotlightCards();
  if (typeof initFlyingPostersScroll === 'function') initFlyingPostersScroll();
  if (typeof initProfileCardTilt === 'function') initProfileCardTilt();

  // Initialize React Bits TextType component, Single Project/Cert Sliders & WebGL FlyingPosters
  initTextType();
  if (typeof initScrollVelocity === 'function') initScrollVelocity();
  if (typeof initSingleProjectSlider === 'function') initSingleProjectSlider();
  if (typeof initSingleCertSlider === 'function') initSingleCertSlider();
  if (typeof initFlyingPostersWebGL === 'function') initFlyingPostersWebGL();
  if (typeof initScrollExpand === 'function') initScrollExpand();
});


/* ==========================================================================
   MODULE 1: REACT BITS PIXELSWAP WELCOME TRANSITION ENGINE
   ========================================================================== */
function initPixelSwapWelcome() {
  const overlay = document.getElementById('welcome-pixelswap-overlay');
  const card = document.getElementById('pixel-welcome-card');
  const enterBtn = document.getElementById('enter-portfolio-btn');

  if (!overlay) return;

  let triggered = false;

  function triggerPixelSwap() {
    if (triggered) return;
    triggered = true;

    // Create pixel grid overlay for transition
    const gridEl = document.createElement('div');
    gridEl.className = 'pixel-swap-grid-canvas';
    gridEl.style.position = 'absolute';
    gridEl.style.inset = '0';
    gridEl.style.zIndex = '10';
    gridEl.style.pointerEvents = 'none';
    gridEl.style.overflow = 'hidden';

    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelSize = 64;
    const cols = Math.ceil(width / pixelSize);
    const rows = Math.ceil(height / pixelSize);
    const totalPixels = cols * rows;

    const pixels = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pixel = document.createElement('div');
        pixel.style.position = 'absolute';
        pixel.style.left = `${c * pixelSize}px`;
        pixel.style.top = `${r * pixelSize}px`;
        pixel.style.width = `${pixelSize + 1}px`;
        pixel.style.height = `${pixelSize + 1}px`;
        pixel.style.background = '#050505';
        pixel.style.transformOrigin = 'center center';
        pixel.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease, border-radius 0.45s ease';
        gridEl.appendChild(pixel);
        pixels.push(pixel);
      }
    }

    overlay.appendChild(gridEl);

    // Fade out main welcome text card
    if (card) {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
    }

    // Animate pixel grid tiles with randomized stagger, spin, and scale dissolve
    const indices = pixels.map((_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    indices.forEach((index, order) => {
      const delay = (order / totalPixels) * 900;
      setTimeout(() => {
        const p = pixels[index];
        if (p) {
          p.style.transform = 'scale(0.2) rotate(45deg)';
          p.style.opacity = '0';
          p.style.borderRadius = '50%';
        }
      }, delay);
    });

    // Complete transition and hide overlay
    setTimeout(() => {
      overlay.classList.add('fade-out');
    }, 1400);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerPixelSwap();
    });
  }

  overlay.addEventListener('click', triggerPixelSwap);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      triggerPixelSwap();
    }
  });

  // Auto trigger transition after brief preview
  setTimeout(() => {
    if (!triggered) triggerPixelSwap();
  }, 2200);
}

/* ==========================================================================
   MODULE 2: REACT BITS <Particles /> OGL WEBGL SHADER BACKGROUND ENGINE
   ========================================================================== */
/* ==========================================================================
   MODULE 2: REACT BITS <Particles /> 3D PERSPECTIVE BLACK PARTICLES ENGINE
   (Self-contained WebGL & High-DPI Canvas Engine with 3D Harmonic Motion)
   ========================================================================== */
function initParticles() {
  const container = document.getElementById('particles-bg');
  if (!container) return;
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '0';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // React Bits Component Parameters
  const particleCount = 240;
  const particleSpread = 10;
  const speed = 0.12;
  const moveParticlesOnHover = true;
  const particleHoverFactor = 1.2;
  const alphaParticles = true;
  const particleBaseSize = 95;
  const sizeRandomness = 1.0;
  const cameraDistance = 20;
  const disableRotation = false;

  let dpr = window.devicePixelRatio || 1;
  let width = 0;
  let height = 0;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize);

  const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = ((e.clientX / window.innerWidth) * 2 - 1) * 2.5;
    mouse.targetY = -(((e.clientY / window.innerHeight) * 2 - 1) * 2.5);
  });

  // INITIALIZE 3D PARTICLE POOL
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    let x, y, z, len;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      len = x * x + y * y + z * z;
    } while (len > 1 || len === 0);
    const r = Math.cbrt(Math.random());

    particles.push({
      origX: x * r * particleSpread,
      origY: y * r * particleSpread,
      origZ: z * r * particleSpread * 2.5,
      random: {
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        w: Math.random()
      },
      alpha: Math.random() * 0.4 + 0.55 // 0.55 to 0.95 solid black opacity
    });
  }

  let lastTime = performance.now();
  let elapsed = 0;
  let rotZ = 0;

  function render(currentTime) {
    const delta = currentTime - lastTime;
    lastTime = currentTime;
    elapsed += delta * speed;

    ctx.clearRect(0, 0, width, height);

    // Smooth mouse interpolation
    if (moveParticlesOnHover) {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
    }

    const t = elapsed * 0.001;

    let rotX = 0;
    let rotY = 0;
    if (!disableRotation) {
      rotX = Math.sin(elapsed * 0.0002) * 0.1;
      rotY = Math.cos(elapsed * 0.0005) * 0.15;
      rotZ += 0.006 * speed;
    }

    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosZ = Math.cos(rotZ);
    const sinZ = Math.sin(rotZ);

    const fov = 15 * (Math.PI / 180);
    const focalLength = (height / 2) / Math.tan(fov / 2);
    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      const r = p.random;

      // 3D Harmonic Wave Sine Oscillation (React Bits GLSL algorithm)
      const oscX = Math.sin(t * r.z + 6.28 * r.w) * (0.1 + 1.4 * r.x) * 1.5;
      const oscY = Math.sin(t * r.y + 6.28 * r.x) * (0.1 + 1.4 * r.w) * 1.5;
      const oscZ = Math.sin(t * r.w + 6.28 * r.y) * (0.1 + 1.4 * r.z) * 1.5;

      let px = p.origX + oscX - mouse.x * particleHoverFactor;
      let py = p.origY + oscY - mouse.y * particleHoverFactor;
      let pz = p.origZ + oscZ;

      // Rotate around Z axis
      let x1 = px * cosZ - py * sinZ;
      let y1 = px * sinZ + py * cosZ;
      let z1 = pz;

      // Rotate around Y axis
      let x2 = x1 * cosY + z1 * sinY;
      let y2 = y1;
      let z2 = -x1 * sinY + z1 * cosY;

      // Rotate around X axis
      let x3 = x2;
      let y3 = y2 * cosX - z2 * sinX;
      let z3 = y2 * sinX + z2 * cosX;

      // Camera distance translation
      const finalZ = z3 + cameraDistance;

      if (finalZ > 1.0) {
        const projK = focalLength / finalZ;
        const screenX = cx + x3 * projK;
        const screenY = cy - y3 * projK;

        // Point size with perspective depth and random variation
        let size = (particleBaseSize * (1.0 + sizeRandomness * (r.x - 0.5))) / finalZ;
        size = Math.max(0.8, Math.min(size * 0.42, 6.0));

        // Depth alpha attenuation
        let alpha = p.alpha;
        if (alphaParticles) {
          alpha = Math.min(0.92, Math.max(0.2, (1.0 - (finalZ - 10) / 30) * p.alpha));
        }

        // Draw pure solid black particle disc (#000000)
        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}




/* ==========================================================================
   MODULE 3: 3D WIREFRAME TUNNEL PORTAL BACKGROUND CANVAS ENGINE
   ========================================================================== */
function initTunnelPortalCanvas() {
  const canvas = document.getElementById('tunnel-portal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 600;
  });

  let rotation = 0;
  const ringCount = 22;

  function renderPortal() {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    rotation += 0.003;

    const activeCard = document.querySelector('.pipeline-card.active');
    const stageId = activeCard ? activeCard.getAttribute('data-stage') : '04';
    const colors = {
      '01': '#ffffff',
      '02': '#e4e4e7',
      '03': '#a1a1aa',
      '04': '#ffffff',
      '05': '#e4e4e7'
    };
    const activeColor = colors[stageId] || '#ffffff';

    for (let i = 0; i < ringCount; i++) {
      const depth = (i / ringCount);
      const r = Math.min(width, height) * 0.32 * (1 - depth * 0.82);
      const alpha = (0.55 - depth * 0.5) * 0.35;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation * (i % 2 === 0 ? 1 : -1) + depth * Math.PI);

      ctx.beginPath();
      for (let a = 0; a < 12; a++) {
        const angle = (a * Math.PI) / 6;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (a === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();

      ctx.strokeStyle = activeColor;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(renderPortal);
  }
  renderPortal();
}

/* ==========================================================================
   MODULE 4: DYNAMIC SERPENTINE ROPE SCROLL ENGINE
   ========================================================================== */
function initSnakeScroll() {
  const snakePath = document.getElementById('snake-path');
  if (!snakePath) return;

  const pathLength = snakePath.getTotalLength();
  snakePath.style.strokeDasharray = pathLength;
  snakePath.style.strokeDashoffset = pathLength;

  function updateSnake() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = Math.max(0, Math.min(1, scrollTop / docHeight));

    const drawLength = pathLength * scrollFraction;
    snakePath.style.strokeDashoffset = pathLength - drawLength;
  }

  window.addEventListener('scroll', updateSnake);
  updateSnake();
}

/* ==========================================================================
   MODULE 5: DYNAMIC INTERACTIVE RADAR / SPIDER CHART PIPELINE ENGINE
   ========================================================================== */
function initRadarSpiderChart() {
  const nodeGroups = document.querySelectorAll('.radar-node-group');
  const spokes = document.querySelectorAll('.radar-spoke');
  const skillRows = document.querySelectorAll('.radar-skill-row');
  const stageTag = document.getElementById('radar-stage-tag');
  const stageTitle = document.getElementById('radar-stage-title');
  const stageDesc = document.getElementById('radar-stage-desc');
  const toolsContainer = document.getElementById('radar-tools-container');
  const radarArea = document.getElementById('radar-area');

  if (!nodeGroups.length && !skillRows.length) return;

  const stageData = {
    '01': {
      tag: 'STAGE INSPECTOR — 01 // FOUNDATIONS',
      title: 'Algorithms & Foundations',
      desc: 'Writing production-grade algorithmic code in Python 3.12, C++20, and PyTorch. Implementing core data structures, graph traversals, and multivariate numerical computing for AI/ML models.',
      points: '250,50 380,210 320,330 180,330 120,210',
      tools: ['PYTHON 3.12', 'PYTORCH 2.3', 'C++20', 'CUDA', 'NUMPY', 'ALGORITHMS']
    },
    '02': {
      tag: 'STAGE INSPECTOR — 02 // DATA & ML',
      title: 'Machine Learning & SQL DBMS',
      desc: 'Training ensemble machine learning models with Scikit-Learn and PyTorch, engineering clinical data feature vectors, and building ACID-compliant SQL database architectures.',
      points: '250,90 440,188 340,360 160,360 98,200',
      tools: ['SCIKIT-LEARN', 'PYTORCH CNN', 'POSTGRESQL', 'FASTAPI', 'SQL', 'PANDAS']
    },
    '03': {
      tag: 'STAGE INSPECTOR — 03 // HARDWARE',
      title: 'Hardware & IoT Sensor Telemetry',
      desc: 'Architecting wearable ESP32 ADXL345 accelerometer sensor arrays, digital signal filtering, and live hardware WebSocket pipelines under 15ms latency.',
      points: '250,110 390,205 367,412 145,395 110,210',
      tools: ['ESP32', 'ADXL345', 'WEBSOCKETS', 'C++', 'ROS2', 'CIRCUITRY']
    },
    '04': {
      tag: 'STAGE INSPECTOR — 04 // CLOUD AGENTS',
      title: 'Cloud AI Agents & Microservices',
      desc: 'Deploying autonomous cloud AI agent architectures via AWS Bedrock and GCP Vertex AI, scalable Docker microservices, and asynchronous event streams.',
      points: '250,65 425,195 350,395 133,412 75,195',
      tools: ['AWS BEDROCK', 'DOCKER', 'FASTAPI', 'TERRAFORM', 'GCP VERTEX', 'REST API']
    },
    '05': {
      tag: 'STAGE INSPECTOR — LIVE',
      title: 'Live 3D Telemetry & Visual Computing',
      desc: 'Real-time WebGL visualization of sensor fields, simulation states, and model internals.',
      points: '250,70 410,195 355,390 145,390 70,190',
      tools: ['WEBGL', 'GLSL', 'CANVAS', 'ROS2 VIZ']
    }
  };

  function activateStage(stageId) {
    nodeGroups.forEach(g => {
      g.classList.remove('active');
      const text = g.querySelector('text');
      const dot = g.querySelector('.radar-node-dot');
      if (text) {
        text.style.fill = '#71717a';
        text.style.fontWeight = '700';
      }
      if (dot) dot.setAttribute('r', '5');
    });

    spokes.forEach(s => {
      s.classList.remove('active');
      s.style.stroke = 'rgba(0,0,0,0.15)';
      s.style.strokeWidth = '1.2';
    });

    skillRows.forEach(row => {
      row.classList.remove('active');
      row.style.background = '#FDFFF5';
      row.style.borderColor = 'rgba(0, 0, 0, 0.15)';
      row.style.color = '#000000';
      const label = row.querySelector('.skill-label');
      const val = row.querySelector('.skill-val');
      const idx = row.querySelector('.skill-index');
      if (label) label.style.color = '#000000';
      if (val) val.style.color = '#000000';
      if (idx) idx.style.color = '#71717a';
    });

    // Activate Node & Spoke
    const targetNode = document.getElementById(`radar-node-${stageId}`);
    if (targetNode) {
      targetNode.classList.add('active');
      const text = targetNode.querySelector('text');
      const dot = targetNode.querySelector('.radar-node-dot');
      if (text) {
        text.style.fill = '#000000';
        text.style.fontWeight = '900';
      }
      if (dot) dot.setAttribute('r', '6');
    }

    const activeSpoke = document.getElementById(`spoke-${stageId}`);
    if (activeSpoke) {
      activeSpoke.classList.add('active');
      activeSpoke.style.stroke = '#000000';
      activeSpoke.style.strokeWidth = '2';
    }

    // Activate Skill Row
    const activeRow = document.querySelector(`.radar-skill-row[data-stage="${stageId}"]`);
    if (activeRow) {
      activeRow.classList.add('active');
      activeRow.style.background = '#000000';
      activeRow.style.borderColor = '#000000';
      activeRow.style.color = '#FDFFF5';
      const label = activeRow.querySelector('.skill-label');
      const val = activeRow.querySelector('.skill-val');
      const idx = activeRow.querySelector('.skill-index');
      if (label) label.style.color = '#FDFFF5';
      if (val) val.style.color = '#FDFFF5';
      if (idx) idx.style.color = '#a1a1aa';
    }

    const data = stageData[stageId] || stageData['05'];

    if (stageTag) stageTag.textContent = data.tag;
    if (stageTitle) stageTitle.textContent = data.title;
    if (stageDesc) stageDesc.textContent = data.desc;
    if (radarArea) radarArea.setAttribute('points', data.points);

    if (toolsContainer) {
      toolsContainer.innerHTML = data.tools.map(tool => `
        <span class="code-pill" style="border: 1px solid rgba(0, 0, 0, 0.2); padding: 0.3rem 0.75rem; font-family: var(--font-code); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; color: #27272a; text-transform: uppercase; border-radius: 4px; background: transparent;">${tool}</span>
      `).join('');
    }
  }

  nodeGroups.forEach(group => {
    const stageId = group.getAttribute('data-stage');
    group.addEventListener('click', () => activateStage(stageId));
    group.addEventListener('mouseenter', () => activateStage(stageId));
  });

  skillRows.forEach(row => {
    const stageId = row.getAttribute('data-stage');
    row.addEventListener('click', () => activateStage(stageId));
    row.addEventListener('mouseenter', () => activateStage(stageId));
  });
}


/* ==========================================================================
   MODULE: REACT BITS PRO VORTEX 3D TUNNEL ENGINE (LANDING PAGE ALONE)
   ========================================================================== */
function initHeroVortex() {
  const container = document.getElementById('hero-vortex-bg');
  if (!container) return;

  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = container.clientWidth || window.innerWidth);
  let height = (canvas.height = container.clientHeight || window.innerHeight);
  let center = [width / 2, height / 2];

  window.addEventListener('resize', () => {
    width = canvas.width = container.clientWidth || window.innerWidth;
    height = canvas.height = container.clientHeight || window.innerHeight;
    center = [width / 2, height / 2];
  });

  const particleCount = 450;
  const particles = [];
  const baseSpeed = 0.2;
  const rangeSpeed = 1.0;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      distance: Math.random() * (Math.max(width, height) * 0.65),
      speed: baseSpeed + Math.random() * rangeSpeed,
      radius: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.7 + 0.25,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      z: Math.random() * 1000 + 1
    });
  }

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.z -= p.speed * 3.5;
      p.angle += p.rotSpeed + 0.0035;

      if (p.z <= 1) {
        p.z = 1000;
        p.distance = Math.random() * (Math.max(width, height) * 0.65);
      }

      const k = 550 / p.z;
      const x = center[0] + Math.cos(p.angle) * p.distance * k;
      const y = center[1] + Math.sin(p.angle) * p.distance * k;
      const size = Math.max(0.6, p.radius * k * 0.75);
      const alpha = Math.min(0.85, (1000 - p.z) / 1000) * p.alpha;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}



/* ==========================================================================
   MODULE 6: ACETERNITY UI FLOATING DOCK PROXIMITY MAGNIFICATION ENGINE
   ========================================================================== */
function initFloatingDock() {
  function attachDockEffect(container, selector, maxScale, widthScale = false) {
    if (!container) return;
    const items = container.querySelectorAll(selector);

    container.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;

      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(mouseX - itemCenterX);

        const maxDistance = 120;
        if (distance < maxDistance) {
          const scale = 1 + (1 - distance / maxDistance) * maxScale;
          if (widthScale) {
            const size = Math.round(44 * scale);
            item.style.width = `${size}px`;
            item.style.height = `${size}px`;
          } else {
            item.style.transform = `scale(${scale.toFixed(3)})`;
            item.style.zIndex = '10';
            item.style.transition = 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)';
          }
        } else {
          if (widthScale) {
            item.style.width = '44px';
            item.style.height = '44px';
          } else {
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1';
            item.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
          }
        }
      });
    });

    container.addEventListener('mouseleave', () => {
      items.forEach(item => {
        if (widthScale) {
          item.style.width = '44px';
          item.style.height = '44px';
        } else {
          item.style.transform = 'scale(1)';
          item.style.zIndex = '1';
        }
      });
    });
  }

  const footerDock = document.getElementById('footer-floating-dock');
  attachDockEffect(footerDock, '.footer-dock-item', 0.45, true);

  const navDock = document.getElementById('nav-floating-dock');
  attachDockEffect(navDock, '.nav-dock-item', 0.35, true);

  const navContainer = document.querySelector('.desktop-nav');
  attachDockEffect(navContainer, '.nav-dock-item, .nav-link-pill', 0.3, true);

  const headerActions = document.querySelector('header .container > div:last-child');
  attachDockEffect(headerActions, 'button', 0.2);
}



/* ==========================================================================
   MODULE 7: PROJECT FILTER CATEGORY ENGINE
   ========================================================================== */
/* ==========================================================================
   MODULE 7: PROJECT FILTER CATEGORY ENGINE
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn, .proj-tab');
  const projectCards = document.querySelectorAll('.project-card, .proj-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'rgba(0, 0, 0, 0.05)';
        b.style.color = '#27272a';
        b.style.borderColor = 'rgba(0, 0, 0, 0.2)';
      });
      btn.classList.add('active');
      btn.style.background = '#000000';
      btn.style.color = '#FDFFF5';
      btn.style.borderColor = '#000000';

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || card.getAttribute('data-cat') || '').toLowerCase();
        
        if (filter === 'all' || categories.includes(filter.toLowerCase())) {
          card.style.display = card.classList.contains('bento-hero-card') ? 'grid' : 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
          card.style.transition = 'all 0.35s ease';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });

      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    });
  });
}


/* ==========================================================================
   MODULE 8: MODAL INSPECTION SYSTEM (RESUMES, PROJECTS & CREDENTIALS)
   ========================================================================== */
function initModalSystem() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  function openModal(html) {
    if (!modalBackdrop || !modalContent) return;
    modalContent.innerHTML = html;
    modalBackdrop.style.display = 'flex';
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalBackdrop.style.display = 'none';
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.style.display = 'none';
      }
    });
  }

  // Resume Modal Triggers
  document.querySelectorAll('.trigger-resume').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(`
        <div style="text-align: center; padding: 1rem; color: #000000;">
          <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; color: #000000; margin: 0 auto 1.25rem;">
            <i data-lucide="file-text" size="28"></i>
          </div>
          <h2 style="font-size: 1.8rem; font-weight: 900; color: #000000; margin-bottom: 0.35rem;">Hari Ganesh J — Resume</h2>
          <div style="font-size: 0.88rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.5rem;">
            Dual-Degree Student: VIT Chennai (B.Tech CSE) &amp; IIT Madras (BS Data Science)
          </div>
          <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 2rem; text-align: left;">
            Official verified curriculum vitae including 300+ LeetCode DSA solutions, Scoliosis Wearable IoT architecture details, 95.4% ML model cross-validation benchmarks, and Cisco/AWS/Google AI certifications.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button onclick="window.print()" class="btn btn-primary" style="padding: 0.75rem 1.8rem; background: #000000; color: #FDFFF5;">
              <i data-lucide="printer" size="18"></i>
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      `);
    });
  });

  // Project Architecture Flow Modal Triggers
  document.querySelectorAll('.inspect-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-project');
      if (type === 'scoliosis') {
        openModal(`
          <div style="color: #000000;">
            <div style="width: 100%; max-height: 280px; border-radius: 10px; overflow: hidden; margin-bottom: 1.5rem; border: 1px solid rgba(0,0,0,0.15);">
              <img src="scoliosis_hardware_mockup.jpg" alt="Wearable Scoliosis Detection System" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.4rem;">Wearable Scoliosis Detection System</h2>
            <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">ESP32 Accelerometer Telemetry + Neural Cobb Angle Regression</div>
            <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Designed and built a multi-sensor wearable posture monitoring vest. Dual ADXL345 3-axis accelerometer sensors capture continuous spinal tilt data, streamed over ESP32 WebSockets to a trained Random Forest &amp; PyTorch regression model with real-time 3D spine visualization.
            </p>
            <div style="background: rgba(0, 0, 0, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000; margin-bottom: 1.5rem;">
              <strong>Key Metrics:</strong> 94.2% Cobb Angle Accuracy | &lt; 15ms Real-Time Latency | 4x ADXL345 Telemetry
            </div>
          </div>
        `);
      } else if (type === 'disease' || type === 'disease-prediction') {
        openModal(`
          <div style="color: #000000;">
            <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.4rem;">Disease Prediction Using Random Forest</h2>
            <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">Clinical Diagnostic Machine Learning Pipeline</div>
            <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Engineered a predictive healthcare machine learning pipeline evaluating patient clinical parameters with StandardScaler normalization, Gini impurity feature ranking, and cross-validation hyperparameter tuning.
            </p>
            <div style="background: rgba(0, 0, 0, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
              <strong>Key Metrics:</strong> 94.8% CV Accuracy | Minimal False Negatives | Scikit-Learn Ensemble
            </div>
          </div>
        `);
      } else if (type === 'drone') {
        openModal(`
          <div style="color: #000000;">
            <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.4rem;">ROS2 Autonomous Drone &amp; Gazebo Telemetry</h2>
            <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">ROS2 + Gazebo 3D Simulation + LSTM Spatial-Temporal Trajectory</div>
            <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Spatial-temporal trajectory predictor integrated into ROS2 nodes for autonomous UAV obstacle avoidance in simulated Gazebo environments with PyTorch LSTM time-series forecasting.
            </p>
            <div style="background: rgba(0, 0, 0, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
              <strong>Key Stack:</strong> ROS2 Humble | Gazebo 11 | LSTM PyTorch | C++ ROS Flight Nodes
            </div>
          </div>
        `);
      } else if (type === 'movie' || type === 'movie-booking') {
        openModal(`
          <div style="color: #000000;">
            <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.4rem;">Movie Ticket Booking System</h2>
            <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">High-Concurrency Relational DBMS Architecture</div>
            <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Engineered normalized relational schema with ACID-compliant stored procedures and row-level locking to guarantee 0% double-booking during peak concurrent reservations.
            </p>
            <div style="background: rgba(0, 0, 0, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
              <strong>Key Metrics:</strong> 0% Double-Booking Guarantee | &lt; 20ms Query Lock Time | Stored Procedures
            </div>
          </div>
        `);
      } else if (type === 'hospital') {
        openModal(`
          <div style="color: #000000;">
            <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.4rem;">Hospital Management System</h2>
            <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">SQL &amp; Relational Database Architecture</div>
            <p style="color: #27272a; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              End-to-end relational database management system for hospital operations, patient health records, staff scheduling, automated billing, and role-based data view security.
            </p>
            <div style="background: rgba(0, 0, 0, 0.05); padding: 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
              <strong>Key Stack:</strong> PostgreSQL | SQL Stored Procedures | RBAC Security | ER Data Modeling
            </div>
          </div>
        `);
      }
    });
  });

  // Certificate Inspection Modal Triggers
  document.querySelectorAll('.cert-card-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const certType = card.getAttribute('data-cert');
      if (certType === 'aws-agentic') {
        openModal(`
          <div style="text-align: center; margin-bottom: 1.5rem; color: #000000;">
            <img src="aws_cert.jpg" alt="AWS Training & Certification Official Award" style="width: 100%; max-height: 480px; object-fit: contain; border-radius: 12px; border: 1px solid rgba(0, 0, 0, 0.2);" />
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.35rem;">Introduction to Agentic AI on AWS</h2>
          <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">AWS Training &amp; Certification — Official Award</div>
          <p style="color: #27272a; font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.5rem;">
            Awarded to <strong>Hari ganesh</strong>. Authorized by Michelle Vaz, Director AWS Training &amp; Certification. Demonstrates proficiency in Amazon Bedrock agents, multi-agent cloud orchestration, and autonomous tool calling workflows.
          </p>
          <div style="background: rgba(0, 0, 0, 0.06); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
            Verified AWS Credential | Issued: June 24, 2026
          </div>
        `);
      } else if (certType === 'google-ai' || certType === 'modern-ai') {
        openModal(`
          <div style="text-align: center; margin-bottom: 1.5rem; color: #000000;">
            <img src="google_cert.jpg" alt="Certificate Preview" style="width: 100%; max-height: 480px; object-fit: contain; border-radius: 12px; border: 1px solid rgba(0, 0, 0, 0.2);" />
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.35rem;">Introduction to Modern AI</h2>
          <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">Cisco Networking Academy — Cert ID: 4a064784-5312-49df-a58e-340aa9c45f1c</div>
          <p style="color: #27272a; font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.5rem;">
            Awarded to <strong>Hari ganesh</strong>. Demonstrates verified competency in intelligent agent design, modern machine learning algorithms, and neural networks.
          </p>
          <div style="background: rgba(0, 0, 0, 0.06); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
            Verified Cisco Credential | Issued: 18 Jun 2026
          </div>
        `);
      } else if (certType === 'cisco-ds' || certType === 'data-science') {
        openModal(`
          <div style="text-align: center; margin-bottom: 1.5rem; color: #000000;">
            <img src="cisco_cert.jpg" alt="Cisco Data Science Certificate" style="width: 100%; max-height: 480px; object-fit: contain; border-radius: 12px; border: 1px solid rgba(0, 0, 0, 0.2);" />
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 900; color: #000000; margin-bottom: 0.35rem;">Introduction to Data Science</h2>
          <div style="font-size: 0.85rem; color: #27272a; font-family: var(--font-code); font-weight: 700; margin-bottom: 1.25rem;">Cisco Networking Academy — Cert ID: 7b0c05ed-7d36-4ab9-97e0-3d9231079528</div>
          <p style="color: #27272a; font-size: 0.95rem; line-height: 1.65; margin-bottom: 1.5rem;">
            Awarded to <strong>Hari ganesh</strong>. Demonstrates verified competency in computational data analytics, Python data science pipelines, and statistical modeling.
          </p>
          <div style="background: rgba(0, 0, 0, 0.06); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid rgba(0, 0, 0, 0.2); font-family: var(--font-code); font-size: 0.82rem; color: #000000;">
            Verified Cisco Credential | Issued: 19 Jun 2026
          </div>
        `);
      }
    });
  });
}

/* ==========================================================================
   MODULE 9: SCROLL-SPY NAVIGATION ACTIVE LINK INDICATOR ENGINE
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-pill, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   MODULE 10: CONTACT MESSAGING FORM ENGINE
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;

      formStatus.style.display = 'block';
      formStatus.style.background = 'rgba(0, 245, 160, 0.15)';
      formStatus.style.border = '1px solid rgba(0, 245, 160, 0.4)';
      formStatus.style.color = '#00f5a0';
      formStatus.innerHTML = `Thank you, <strong>${name}</strong>! Your message has been sent directly to Hari Ganesh J.`;

      contactForm.reset();
    });
  }
}

/* ==========================================================================
   MODULE 11: REACT BITS SPOTLIGHTCARD MOUSE TRACKING ENGINE
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.glass-card, .card-spotlight, .timeline-card-content, .cert-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--spotlight-color', 'rgba(255, 255, 255, 0.22)');
    });
  });
}

/* ==========================================================================
   MODULE 12: REACT BITS FLYINGPOSTERS 3D SCROLL ENGINE FOR SELECTED WORKS
   ========================================================================== */
function initFlyingPostersScroll() {
  const cards = document.querySelectorAll('.flying-poster-card');
  if (!cards.length) return;

  function updatePostersOnScroll() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const viewCenter = windowHeight / 2;
      const distanceFromCenter = cardCenter - viewCenter;

      if (rect.top > windowHeight) {
        card.classList.remove('in-view', 'above-view');
        card.classList.add('below-view');
      } else if (rect.bottom < 0) {
        card.classList.remove('in-view', 'below-view');
        card.classList.add('above-view');
      } else {
        card.classList.remove('below-view', 'above-view');
        card.classList.add('in-view');

        const progress = Math.max(-1, Math.min(1, distanceFromCenter / (windowHeight * 0.5)));
        const rotateY = progress * -12;
        const rotateX = progress * 10;
        const translateZ = (1 - Math.abs(progress)) * 40;

        card.style.transform = `translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
  }

  window.addEventListener('scroll', updatePostersOnScroll, { passive: true });
  updatePostersOnScroll();
}

/* ==========================================================================
   MODULE 13: REACT BITS 3D HOLOGRAPHIC PROFILECARD TILT ENGINE
   ========================================================================== */

function initProfileCardTilt() {
  const wrap = document.getElementById('profile-card-wrap');
  const shell = document.getElementById('profile-card-shell');
  if (!wrap || !shell) return;

  const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
  const round = (v, precision = 3) => parseFloat(v.toFixed(precision));

  let currentX = shell.clientWidth / 2;
  let currentY = shell.clientHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  function setVarsFromXY(x, y) {
    const width = shell.clientWidth || 1;
    const height = shell.clientHeight || 1;

    const percentX = clamp((100 / width) * x);
    const percentY = clamp((100 / height) * y);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrap.style.setProperty('--pointer-x', `${percentX}%`);
    wrap.style.setProperty('--pointer-y', `${percentY}%`);
    wrap.style.setProperty('--rotate-x', `${round(-(centerX / 4))}deg`);
    wrap.style.setProperty('--rotate-y', `${round(centerY / 3.5)}deg`);
  }

  function loop() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    setVarsFromXY(currentX, currentY);
    requestAnimationFrame(loop);
  }

  shell.addEventListener('mousemove', (e) => {
    const rect = shell.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    shell.classList.add('active');
  });

  shell.addEventListener('mouseleave', () => {
    targetX = shell.clientWidth / 2;
    targetY = shell.clientHeight / 2;
    shell.classList.remove('active');
  });

  loop();
}

/* ==========================================================================
   REACT BITS: TEXTTYPE COMPONENT ENGINE (GSAP POWERED)
   ========================================================================== */
function initTextType() {
  const container = document.getElementById('hero-text-type');
  if (!container) return;

  let contentEl = container.querySelector('.text-type__content');
  let cursorEl = container.querySelector('.text-type__cursor');

  if (!contentEl) {
    contentEl = document.createElement('span');
    contentEl.className = 'text-type__content';
    container.appendChild(contentEl);
  }

  if (!cursorEl) {
    cursorEl = document.createElement('span');
    cursorEl.className = 'text-type__cursor';
    cursorEl.textContent = '|';
    container.appendChild(cursorEl);
  }

  const targetText = "AI & ML ENGINEER • STUDENT AT VIT & IIT MADRAS";
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseDuration = 3000;
  const showCursor = true;
  const cursorBlinkDuration = 0.5;

  let currentCharIndex = 0;
  let isDeleting = false;
  let displayedText = '';

  // GSAP Cursor Blink Animation
  if (showCursor && cursorEl && typeof gsap !== 'undefined') {
    gsap.set(cursorEl, { opacity: 1 });
    gsap.to(cursorEl, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }

  function typeStep() {
    if (isDeleting) {
      if (displayedText === '') {
        isDeleting = false;
        currentCharIndex = 0;
        setTimeout(typeStep, 350);
      } else {
        displayedText = displayedText.slice(0, -1);
        contentEl.textContent = displayedText;
        setTimeout(typeStep, deletingSpeed);
      }
    } else {
      if (currentCharIndex < targetText.length) {
        displayedText += targetText[currentCharIndex];
        currentCharIndex++;
        contentEl.textContent = displayedText;
        setTimeout(typeStep, typingSpeed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          typeStep();
        }, pauseDuration);
      }
    }
  }

  // Start typing immediately
  typeStep();
}

/* ==========================================================================
   SINGLE FEATURED PROJECT SLIDE SHOWCASE ENGINE (STRAIGHT 2D SLIDER + AUTO-PLAY)
   ========================================================================== */
function initSingleProjectSlider() {
  const cards = document.querySelectorAll('.single-project-card');
  const prevBtn = document.getElementById('project-prev-btn');
  const nextBtn = document.getElementById('project-next-btn');
  const dots = document.querySelectorAll('#project-slide-dots .slide-dot');
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const container = document.querySelector('.single-slide-container');

  if (!cards.length) return;

  let currentIndex = 0;
  let isAnimating = false;
  let autoSlideInterval = null;

  function showSlide(targetIndex, direction = 'next') {
    if (isAnimating) return;
    if (targetIndex === currentIndex && cards[targetIndex].classList.contains('active') && cards[targetIndex].style.display === 'block') return;

    isAnimating = true;

    if (targetIndex < 0) targetIndex = cards.length - 1;
    if (targetIndex >= cards.length) targetIndex = 0;

    const currentCard = cards[currentIndex];

    // Slide out current card straight horizontally
    if (currentCard) {
      currentCard.classList.remove('slide-in-center');
      currentCard.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
    }

    // Slide in target card straight horizontally
    setTimeout(() => {
      cards.forEach((card, idx) => {
        if (idx === targetIndex) {
          card.style.display = 'block';
          card.classList.remove('slide-out-left', 'slide-out-right');
          card.classList.add('active', 'slide-in-center');
        } else {
          card.style.display = 'none';
          card.classList.remove('active', 'slide-in-center', 'slide-out-left', 'slide-out-right');
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === targetIndex);
      });

      currentIndex = targetIndex;
      isAnimating = false;
    }, 280);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
      showSlide(currentIndex + 1, 'next');
    }, 4500);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex - 1, 'prev');
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex + 1, 'next');
      startAutoSlide();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const dir = idx >= currentIndex ? 'next' : 'prev';
      showSlide(idx, dir);
      startAutoSlide();
    });
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (filter === 'all') {
        showSlide(0, 'next');
      } else {
        let foundIndex = -1;
        cards.forEach((card, idx) => {
          const cat = card.getAttribute('data-category');
          if (cat && cat.includes(filter) && foundIndex === -1) {
            foundIndex = idx;
          }
        });
        if (foundIndex !== -1) {
          showSlide(foundIndex, 'next');
        }
      }
      startAutoSlide();
    });
  });

  // Touch Swipe Gestures
  if (container) {
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        showSlide(currentIndex + 1, 'next');
      } else if (touchEndX - touchStartX > 45) {
        showSlide(currentIndex - 1, 'prev');
      }
      startAutoSlide();
    }, { passive: true });

    // Hover Pause Protection
    container.parentElement?.addEventListener('mouseenter', stopAutoSlide);
    container.parentElement?.addEventListener('mouseleave', startAutoSlide);
  }

  // Keyboard Arrow Navigation
  document.addEventListener('keydown', (e) => {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const rect = projectsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1, 'prev');
        startAutoSlide();
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1, 'next');
        startAutoSlide();
      }
    }
  });

  // Initialize first slide & start timer
  cards.forEach((card, idx) => {
    if (idx === 0) {
      card.style.display = 'block';
      card.classList.add('active', 'slide-in-center');
    } else {
      card.style.display = 'none';
    }
  });

  startAutoSlide();
}

/* ==========================================================================
   SINGLE FEATURED CERTIFICATE SLIDE SHOWCASE ENGINE (STRAIGHT 2D SLIDER + AUTO-PLAY)
   ========================================================================== */
function initSingleCertSlider() {
  const cards = document.querySelectorAll('.single-cert-card');
  const prevBtn = document.getElementById('cert-prev-btn');
  const nextBtn = document.getElementById('cert-next-btn');
  const dots = document.querySelectorAll('#cert-slide-dots .slide-dot');
  const container = document.getElementById('certs-slide-grid');

  if (!cards.length) return;

  let currentIndex = 0;
  let isAnimating = false;
  let autoSlideInterval = null;

  function showCertSlide(targetIndex, direction = 'next') {
    if (isAnimating) return;
    if (targetIndex === currentIndex && cards[targetIndex].classList.contains('active') && cards[targetIndex].style.display === 'block') return;

    isAnimating = true;

    if (targetIndex < 0) targetIndex = cards.length - 1;
    if (targetIndex >= cards.length) targetIndex = 0;

    const currentCard = cards[currentIndex];

    // Slide out current card
    if (currentCard) {
      currentCard.classList.remove('slide-in-center');
      currentCard.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
    }

    // Slide in target card
    setTimeout(() => {
      cards.forEach((card, idx) => {
        if (idx === targetIndex) {
          card.style.display = 'block';
          card.classList.remove('slide-out-left', 'slide-out-right');
          card.classList.add('active', 'slide-in-center');
        } else {
          card.style.display = 'none';
          card.classList.remove('active', 'slide-in-center', 'slide-out-left', 'slide-out-right');
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === targetIndex);
      });

      currentIndex = targetIndex;
      isAnimating = false;
    }, 280);
  }

  function startCertAutoSlide() {
    stopCertAutoSlide();
    autoSlideInterval = setInterval(() => {
      showCertSlide(currentIndex + 1, 'next');
    }, 5000);
  }

  function stopCertAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showCertSlide(currentIndex - 1, 'prev');
      startCertAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showCertSlide(currentIndex + 1, 'next');
      startCertAutoSlide();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const dir = idx >= currentIndex ? 'next' : 'prev';
      showCertSlide(idx, dir);
      startCertAutoSlide();
    });
  });

  // Touch Swipe Gestures
  if (container) {
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopCertAutoSlide();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        showCertSlide(currentIndex + 1, 'next');
      } else if (touchEndX - touchStartX > 45) {
        showCertSlide(currentIndex - 1, 'prev');
      }
      startCertAutoSlide();
    }, { passive: true });

    // Hover Pause Protection
    container.parentElement?.addEventListener('mouseenter', stopCertAutoSlide);
    container.parentElement?.addEventListener('mouseleave', startCertAutoSlide);
  }

  // Initialize first slide & start timer
  cards.forEach((card, idx) => {
    if (idx === 0) {
      card.style.display = 'block';
      card.classList.add('active', 'slide-in-center');
    } else {
      card.style.display = 'none';
    }
  });

  startCertAutoSlide();
}

/* ==========================================================================
   REACT BITS: FLYINGPOSTERS WEBGL 3D CANVAS ENGINE (POWERED BY OGL)
   ========================================================================== */

const flyingPostersVertexShader = `
precision highp float;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uPosition;
uniform float uTime;
uniform float uSpeed;
uniform vec3 distortionAxis;
uniform vec3 rotationAxis;
uniform float uDistortion;

varying vec2 vUv;
varying vec3 vNormal;

float PI = 3.141592653589793238;
mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(
      oc * axis.x * axis.x + c,         oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                              0.0,                                0.0,                                1.0
    );
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}

float qinticInOut(float t) {
  return t < 0.5
    ? 16.0 * pow(t, 5.0)
    : -0.5 * abs(pow(2.0 * t - 2.0, 5.0)) + 1.0;
}

void main() {
  vUv = uv;
  
  float norm = 0.5;
  vec3 newpos = position;
  float offset = (dot(distortionAxis, position) + norm / 2.) / norm;
  float localprogress = clamp(
    (fract(uPosition * 5.0 * 0.01) - 0.01 * uDistortion * offset) / (1. - 0.01 * uDistortion),
    0.,
    2.
  );
  localprogress = qinticInOut(localprogress) * PI;
  newpos = rotate(newpos, rotationAxis, localprogress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
}
`;

const flyingPostersFragmentShader = `
precision highp float;

uniform vec2 uImageSize;
uniform vec2 uPlaneSize;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec2 imageSize = uImageSize;
  vec2 planeSize = uPlaneSize;

  float imageAspect = imageSize.x / imageSize.y;
  float planeAspect = planeSize.x / planeSize.y;
  vec2 scale = vec2(1.0, 1.0);

  if (planeAspect > imageAspect) {
      scale.x = imageAspect / planeAspect;
  } else {
      scale.y = planeAspect / imageAspect;
  }

  vec2 uv = vUv * scale + (1.0 - scale) * 0.5;

  gl_FragColor = texture2D(tMap, uv);
}
`;

function lerpVal(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function mapVal(num, min1, max1, min2, max2, round = false) {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  return round ? Math.round(num2) : num2;
}

class WebGLFlyingMedia {
  constructor({ gl, geometry, scene, screen, viewport, image, length, index, planeWidth, planeHeight, distortion, OGL }) {
    this.extra = 0;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;
    this.image = image;
    this.length = length;
    this.index = index;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.OGL = OGL;

    this.createShader();
    this.createMesh();
    this.onResize();
  }

  createShader() {
    const { Texture, Program } = this.OGL;
    const texture = new Texture(this.gl, { generateMipmaps: false });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: flyingPostersFragmentShader,
      vertex: flyingPostersVertexShader,
      uniforms: {
        tMap: { value: texture },
        uPosition: { value: 0 },
        uPlaneSize: { value: [0, 0] },
        uImageSize: { value: [0, 0] },
        uSpeed: { value: 0 },
        rotationAxis: { value: [0, 1, 0] },
        distortionAxis: { value: [1, 1, 0] },
        uDistortion: { value: this.distortion },
        uViewportSize: { value: [this.viewport.width, this.viewport.height] },
        uTime: { value: 0 }
      },
      cullFace: false
    });

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSize.value = [img.naturalWidth, img.naturalHeight];
    };
  }

  createMesh() {
    const { Mesh } = this.OGL;
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  setScale() {
    this.plane.scale.x = (this.viewport.width * this.planeWidth) / this.screen.width;
    this.plane.scale.y = (this.viewport.height * this.planeHeight) / this.screen.height;

    this.plane.position.x = 0;
    this.plane.program.uniforms.uPlaneSize.value = [this.plane.scale.x, this.plane.scale.y];
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      this.plane.program.uniforms.uViewportSize.value = [this.viewport.width, this.viewport.height];
    }
    this.setScale();

    this.padding = 4;
    this.height = this.plane.scale.y + this.padding;
    this.heightTotal = this.height * this.length;

    this.y = -this.heightTotal / 2 + (this.index + 0.5) * this.height;
  }

  update(scroll) {
    this.plane.position.y = this.y - scroll.current - this.extra;

    const position = mapVal(this.plane.position.y, -this.viewport.height, this.viewport.height, 5, 15);

    this.program.uniforms.uPosition.value = position;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current;

    const planeHeight = this.plane.scale.y;
    const viewportHeight = this.viewport.height;

    const topEdge = this.plane.position.y + planeHeight / 2;
    const bottomEdge = this.plane.position.y - planeHeight / 2;

    if (topEdge < -viewportHeight / 2) {
      this.extra -= this.heightTotal;
    } else if (bottomEdge > viewportHeight / 2) {
      this.extra += this.heightTotal;
    }
  }
}

class WebGLFlyingCanvas {
  constructor({ container, canvas, items, planeWidth = 280, planeHeight = 280, distortion = 3, scrollEase = 0.02, cameraFov = 45, cameraZ = 20, OGL }) {
    this.container = container;
    this.canvas = canvas;
    this.items = items;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.distortion = distortion;
    this.OGL = OGL;
    this.scroll = {
      ease: scrollEase,
      current: 0,
      target: 0,
      last: 0
    };
    this.cameraFov = cameraFov;
    this.cameraZ = cameraZ;

    this.bindEvents();
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();

    this.createGeometry();
    this.createMedias();
    this.update();
    this.addEventListeners();
  }

  bindEvents() {
    this.onResize = this.onResize.bind(this);
    this.onWheel = this.onWheel.bind(this);
    this.onTouchDown = this.onTouchDown.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchUp = this.onTouchUp.bind(this);
    this.update = this.update.bind(this);
  }

  createRenderer() {
    const { Renderer } = this.OGL;
    this.renderer = new Renderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    this.gl = this.renderer.gl;
  }

  createCamera() {
    const { Camera } = this.OGL;
    this.camera = new Camera(this.gl);
    this.camera.fov = this.cameraFov;
    this.camera.position.z = this.cameraZ;
  }

  createScene() {
    const { Transform } = this.OGL;
    this.scene = new Transform();
  }

  createGeometry() {
    const { Plane } = this.OGL;
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100
    });
  }

  createMedias() {
    this.medias = this.items.map((image, index) => {
      return new WebGLFlyingMedia({
        gl: this.gl,
        geometry: this.planeGeometry,
        scene: this.scene,
        screen: this.screen,
        viewport: this.viewport,
        image,
        length: this.items.length,
        index,
        planeWidth: this.planeWidth,
        planeHeight: this.planeHeight,
        distortion: this.distortion,
        OGL: this.OGL
      });
    });
  }

  onResize() {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    this.screen = {
      width: rect.width || 800,
      height: rect.height || 420
    };

    this.renderer.setSize(this.screen.width, this.screen.height);

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { height, width };

    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientY : e.clientY;
  }

  onTouchMove(e) {
    if (!this.isDown) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const distance = (this.start - y) * 0.1;
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    this.isDown = false;
  }

  onWheel(e) {
    const speed = e.deltaY;
    this.scroll.target += speed * 0.005;
  }

  update() {
    this.scroll.target += 0.025;
    this.scroll.current = lerpVal(this.scroll.current, this.scroll.target, this.scroll.ease);

    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    requestAnimationFrame(this.update);
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize);
    if (this.container) {
      this.container.addEventListener('mousedown', this.onTouchDown);
      this.container.addEventListener('mousemove', this.onTouchMove);
      this.container.addEventListener('mouseup', this.onTouchUp);

      this.container.addEventListener('touchstart', this.onTouchDown, { passive: true });
      this.container.addEventListener('touchmove', this.onTouchMove, { passive: true });
      this.container.addEventListener('touchend', this.onTouchUp, { passive: true });
    }
  }
}

function initFlyingPostersWebGL() {
  if (typeof window.ogl === 'undefined') return;

  // Initialize Projects Flying Posters WebGL Canvas
  const projContainer = document.getElementById('projects-webgl-posters');
  const projCanvas = document.getElementById('projects-webgl-canvas');

  if (projContainer && projCanvas) {
    const projectImages = [
      'scoliosis_poster.jpg',
      'pneumonia_poster.jpg',
      'drone_poster.jpg',
      'finance_poster.jpg'
    ];

    new WebGLFlyingCanvas({
      container: projContainer,
      canvas: projCanvas,
      items: projectImages,
      planeWidth: 260,
      planeHeight: 260,
      distortion: 3,
      scrollEase: 0.02,
      cameraFov: 45,
      cameraZ: 20,
      OGL: window.ogl
    });
  }

  // Initialize Certificates Flying Posters WebGL Canvas
  const certContainer = document.getElementById('certs-webgl-posters');
  const certCanvas = document.getElementById('certs-webgl-canvas');

  if (certContainer && certCanvas) {
    const certImages = [
      'aws_cert.jpg',
      'google_cert.jpg',
      'cisco_cert.jpg'
    ];

    new WebGLFlyingCanvas({
      container: certContainer,
      canvas: certCanvas,
      items: certImages,
      planeWidth: 280,
      planeHeight: 200,
      distortion: 3,
      scrollEase: 0.02,
      cameraFov: 45,
      cameraZ: 20,
      OGL: window.ogl
    });
  }
}

// SMOOTH SCROLL NAVIGATION & THEME TOGGLE LISTENER
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-pill, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Theme Switcher Toggle (Sun/Moon button)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
});

// REACT BITS 3D DEPTH CAROUSEL ENGINE FOR SERVICES SECTION
(function initDepthCarousel() {
  const root = document.getElementById('services-depth-carousel');
  if (!root) return;

  const cardEls = root.querySelectorAll('.depth-carousel__card');
  const prevBtn = document.getElementById('dc-prev-btn');
  const nextBtn = document.getElementById('dc-next-btn');
  const dotsWrap = document.getElementById('dc-dots-wrap');
  const dotBtns = dotsWrap ? dotsWrap.querySelectorAll('.depth-carousel__dot') : [];

  const count = cardEls.length;
  if (!count) return;

  let pos = 0;
  let activeIndex = 0;
  let scale = 1;

  const cfg = {
    depth: 220,
    spread: 110,
    tilt: 22,
    tiltDirection: 'right',
    visibleCards: 4,
    falloff: 0.2,
    blur: 6,
    duration: 0.7,
    cardWidth: 320,
    autoplayDelay: 3500
  };

  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  function layout(p) {
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    for (let i = 0; i < count; i++) {
      const el = cardEls[i];
      if (!el) continue;

      let d = i - p;
      if (count > 1) {
        d = ((d % count) + count) % count;
        if (d > count / 2) d -= count;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.2, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / cfg.visibleCards) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${scale}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';
    }
  }

  function updateActive(idx) {
    activeIndex = idx;
    dotBtns.forEach((dot, i) => {
      if (i === idx) {
        dot.classList.add('is-active');
      } else {
        dot.classList.remove('is-active');
      }
    });
  }

  function setFocus(targetIdx, animate = true) {
    const idx = ((targetIdx % count) + count) % count;
    let delta = idx - pos;
    if (count > 1) {
      delta = ((delta % count) + count) % count;
      if (delta > count / 2) delta -= count;
    }

    const targetPos = pos + delta;
    if (animate && window.gsap) {
      const proxy = { p: pos };
      gsap.to(proxy, {
        p: targetPos,
        duration: cfg.duration,
        ease: 'power3.out',
        onUpdate: () => {
          pos = proxy.p;
          layout(pos);
        },
        onComplete: () => {
          pos = ((pos % count) + count) % count;
          layout(pos);
        }
      });
    } else {
      pos = idx;
      layout(pos);
    }
    updateActive(idx);
  }

  // Resize responsiveness
  const ro = new ResizeObserver((entries) => {
    const w = entries[0].contentRect.width;
    const needed = cfg.cardWidth + Math.abs(cfg.spread) * 2 + 80;
    scale = clamp(w / needed, 0.45, 1);
    layout(pos);
  });
  ro.observe(root);

  // Controls click listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => setFocus(activeIndex - 1, true));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => setFocus(activeIndex + 1, true));
  }

  dotBtns.forEach((dot, i) => {
    dot.addEventListener('click', () => setFocus(i, true));
  });

  cardEls.forEach((card, i) => {
    card.addEventListener('click', () => setFocus(i, true));
  });

  // Autoplay timer
  let autoTimer = setInterval(() => {
    setFocus(activeIndex + 1, true);
  }, cfg.autoplayDelay);

  root.addEventListener('mouseenter', () => clearInterval(autoTimer));
  root.addEventListener('mouseleave', () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => setFocus(activeIndex + 1, true), cfg.autoplayDelay);
  });

  layout(pos);
})();






// REACT BITS PRO CENTERFLOW RADIAL ENGINE FOR SPIDER RADAR CHART
(function initCenterFlow() {
  const container = document.getElementById('radar-center-flow');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const ringCount = 5;
  const color = '#00ff66';
  const speed = 1.1;

  let width = 0;
  let height = 0;
  let animId;

  function resize() {
    const rect = container.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  resize();
  window.addEventListener('resize', resize);

  const rings = Array.from({ length: ringCount }, (_, i) => ({
    radius: (i / ringCount) * 140,
  }));

  function render() {
    ctx.clearRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(width, height) * 0.45;

    rings.forEach(ring => {
      ring.radius += speed;
      if (ring.radius > maxRadius) {
        ring.radius = 0;
      }

      const alpha = Math.max(0, 1 - ring.radius / maxRadius);

      ctx.beginPath();
      ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha * 0.65;
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.stroke();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    animId = requestAnimationFrame(render);
  }

  render();
})();

// REACT BITS PRO VORTEX 3D BACKGROUND ENGINE FOR HERO (HOME) SECTION
(function initVortex() {
  const container = document.getElementById('hero-vortex-bg');
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particleCount = 650;
  let width = 0;
  let height = 0;
  let center = [0, 0];
  let animId;

  const particles = [];

  function createParticle() {
    return {
      angle: Math.random() * Math.PI * 2,
      distance: Math.random() * (Math.max(width, height) * 0.75),
      speed: 0.2 + Math.random() * 1.4,
      radius: 0.8 + Math.random() * 2.2,
      alpha: Math.random() * 0.85 + 0.15,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      z: Math.random() * 1000 + 1
    };
  }

  function resize() {
    width = canvas.width = container.clientWidth || window.innerWidth;
    height = canvas.height = container.clientHeight || window.innerHeight;
    center = [width / 2, height / 2];
  }

  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle());
  }

  function render() {
    ctx.fillStyle = '#FDFFF5';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.z -= p.speed * 3.5;
      p.angle += p.rotSpeed + 0.006;

      if (p.z <= 1) {
        p.z = 1000;
        p.distance = Math.random() * (Math.max(width, height) * 0.75);
      }

      const k = 600 / p.z;
      const x = center[0] + Math.cos(p.angle) * p.distance * k;
      const y = center[1] + Math.sin(p.angle) * p.distance * k;
      const size = Math.max(0.4, p.radius * k * 0.85);
      const alpha = Math.min(1, (1000 - p.z) / 1000) * p.alpha;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      ctx.shadowBlur = size * 2.5;
      ctx.shadowColor = '#000000';
      ctx.fill();
    }

    ctx.shadowBlur = 0;
    animId = requestAnimationFrame(render);
  }

  render();
})();

// REACT BITS PRO COMPARISON SLIDER ENGINE FOR SERVICES SECTION
(function initComparisonSliders() {
  function setupSlider(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="comparison-slider-layer second-layer" style="padding: 2.2rem; display: flex; flex-direction: column; justify-content: center; text-align: left; box-sizing: border-box;">
        <span class="comparison-badge right-badge">${data.rightLabel}</span>
        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.2); color: #000000; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          ${data.rightIcon}
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 800; color: #000000; margin-bottom: 0.5rem;">${data.rightTitle}</h3>
        <p style="color: #27272a; font-size: 0.92rem; line-height: 1.55; margin: 0; max-width: 90%;">${data.rightDesc}</p>
      </div>

      <div class="comparison-slider-layer first-layer" id="${containerId}-first" style="padding: 2.2rem; display: flex; flex-direction: column; justify-content: center; text-align: left; box-sizing: border-box; clip-path: inset(0 50% 0 0);">
        <span class="comparison-badge left-badge">${data.leftLabel}</span>
        <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.2); color: #000000; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          ${data.leftIcon}
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 800; color: #000000; margin-bottom: 0.5rem;">${data.leftTitle}</h3>
        <p style="color: #27272a; font-size: 0.92rem; line-height: 1.55; margin: 0; max-width: 90%;">${data.leftDesc}</p>
      </div>

      <div class="comparison-slider-handle" id="${containerId}-handle" style="left: 50%;">
        <div class="comparison-handle-line"></div>
        <div class="comparison-handle-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m9 18-6-6 6-6"/>
            <path d="m15 6 6 6-6 6"/>
          </svg>
        </div>
        <div class="comparison-handle-line"></div>
      </div>
    `;

    const firstLayer = document.getElementById(`${containerId}-first`);
    const handle = document.getElementById(`${containerId}-handle`);
    let isDragging = false;

    function setPosition(percentage) {
      percentage = Math.max(0, Math.min(100, percentage));
      firstLayer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
    }

    function handleMove(clientX) {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setPosition(percentage);
    }

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      handleMove(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) handleMove(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    container.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    });
  }

  // SET 1: AI & ML Architecture vs. IoT Sensor Telemetry
  setupSlider('service-comparison-slider-1', {
    leftLabel: 'AI & ML ARCHITECTURE',
    leftTitle: 'Deep Neural Networks & PyTorch Vision',
    leftDesc: 'Designing custom PyTorch CNN models, ResNet architectures, and Scikit-Learn pipelines optimized for high diagnostic precision.',
    leftIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>',
    rightLabel: 'IOT SENSOR TELEMETRY',
    rightTitle: 'ESP32 Hardware Accelerometer Arrays',
    rightDesc: 'Architecting low-latency ESP32 wearable hardware pipelines with ADXL345 accelerometer arrays & WebSockets under 15ms latency.',
    rightIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
  });

  // SET 2: Cloud AI & MLOps vs. Autonomous Robotics
  setupSlider('service-comparison-slider-2', {
    leftLabel: 'CLOUD AI & MLOPS',
    leftTitle: 'Agent Infrastructure & Microservices',
    leftDesc: 'Deploying cloud AI agent infrastructure on AWS & GCP, orchestrating Docker containers, and building high-performance FastAPI microservices.',
    leftIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    rightLabel: 'AUTONOMOUS ROBOTICS',
    rightTitle: 'ROS2 Gazebo Simulation & Trajectory',
    rightDesc: 'Engineering ROS2 nodes, PyTorch LSTM spatial-temporal trajectory predictors, and Gazebo 3D simulation environments for UAV flight.',
    rightIcon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>'
  });
})();

/* ==========================================================================
   MODULE: REACT BITS SCROLLEXPAND ENGINE
   ========================================================================== */
function initScrollExpand() {
  const elements = document.querySelectorAll('.scroll-expand');
  if (!elements.length) return;

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const smoothstep = (edge0, edge1, x) => {
    const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
    return t * t * (3 - 2 * t);
  };

  elements.forEach((root) => {
    const track = root.querySelector('.scroll-expand__track');
    const stage = root.querySelector('.scroll-expand__stage');
    const frame = root.querySelector('.scroll-expand__frame');
    const media = root.querySelector('.scroll-expand__media');
    const title = root.querySelector('.scroll-expand__title');
    const hint = root.querySelector('.scroll-expand__hint');
    const overlay = root.querySelector('.scroll-expand__overlay');
    const scrim = root.querySelector('.scroll-expand__scrim');

    if (!track || !stage || !frame || !media) return;

    const startWidth = parseFloat(root.dataset.startWidth || 42);
    const startHeight = parseFloat(root.dataset.startHeight || 58);
    const startRadius = parseFloat(root.dataset.startRadius || 24);
    const endRadius = parseFloat(root.dataset.endRadius || 0);
    const mediaZoom = parseFloat(root.dataset.mediaZoom || 1.35);
    const scrollDistance = parseFloat(root.dataset.scrollDistance || 1.2);
    const holdDistance = parseFloat(root.dataset.holdDistance || 0.35);
    const overlayScrim = parseFloat(root.dataset.overlayScrim || 0.45);
    const useWindowScroll = root.dataset.useWindowScroll !== 'false';

    let stageH = 0;

    function measure() {
      stageH = useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;
      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * (1 + scrollDistance + holdDistance)}px`;
    }

    function applyProgress(p) {
      const e = smoothstep(0, 1, p);
      const w = startWidth + (100 - startWidth) * e;
      const h = startHeight + (100 - startHeight) * e;
      const ix = Math.max(0, (100 - w) / 2);
      const iy = Math.max(0, (100 - h) / 2);
      const r = startRadius + (endRadius - startRadius) * e;

      frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;
      media.style.transform = `scale(${mediaZoom + (1 - mediaZoom) * e})`;

      if (scrim) scrim.style.opacity = `${overlayScrim * e}`;

      if (title) {
        const out = smoothstep(0.4, 0.88, p);
        title.style.opacity = `${1 - out}`;
        title.style.transform = `translate3d(0, ${-28 * out}px, 0) scale(${1 + 0.06 * out})`;
      }

      if (hint) {
        const gone = smoothstep(0, 0.12, p);
        hint.style.opacity = `${1 - gone}`;
        hint.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
      }

      if (overlay) {
        const inn = smoothstep(0.68, 1, p);
        overlay.style.opacity = `${inn}`;
        overlay.style.transform = `translate3d(0, ${18 * (1 - inn)}px, 0)`;
      }
    }

    function onScroll() {
      const span = stageH * Math.max(0.01, scrollDistance);
      let progress = 0;
      if (useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        progress = clamp(-top / span, 0, 1);
      } else {
        progress = clamp(root.scrollTop / span, 0, 1);
      }
      applyProgress(progress);
    }

    measure();
    onScroll();

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      onScroll();
    });
  });
}

/* ==========================================================================
   REACT BITS: SCROLL VELOCITY INFINITE TICKER ENGINE
   ========================================================================== */
function initScrollVelocity() {
  const track = document.getElementById('scroll-velocity-track-1');
  if (!track) return;

  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let smoothVelocity = 0;
  let currentX = 0;
  const baseVelocity = 65; // px per second
  let isHovered = false;

  track.addEventListener('mouseenter', () => { isHovered = true; });
  track.addEventListener('mouseleave', () => { isHovered = false; });

  let lastTime = performance.now();

  function onScroll() {
    const currentScrollY = window.scrollY;
    const deltaY = currentScrollY - lastScrollY;
    scrollVelocity = deltaY;
    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  function tick(time) {
    const delta = (time - lastTime) / 1000;
    lastTime = time;

    // Smooth spring-like velocity interpolation
    smoothVelocity += (scrollVelocity - smoothVelocity) * 0.12;
    scrollVelocity *= 0.88;

    // Dynamic movement multiplier based on scroll velocity
    const velocityFactor = Math.min(6, Math.max(-6, smoothVelocity * 0.08));
    const effectiveSpeed = isHovered ? baseVelocity * 0.35 : baseVelocity;
    const moveBy = (effectiveSpeed + Math.abs(velocityFactor) * effectiveSpeed * 1.6) * delta;

    currentX -= moveBy;

    // Measure single item width for infinite seamless wrap
    const firstChild = track.children[0];
    const itemWidth = firstChild ? firstChild.offsetWidth : 1400;

    if (currentX <= -itemWidth) {
      currentX += itemWidth;
    }

    track.style.transform = `translate3d(${currentX}px, 0, 0)`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}


