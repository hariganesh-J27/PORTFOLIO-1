import React, { useEffect, useRef } from 'react';
import './Lightfall.css';

const Lightfall = ({
  colors = ['#00FF66', '#10B981', '#34D399', '#65A30D', '#FFFFFF'],
  backgroundColor = '#050505',
  speed = 1,
  streakCount = 12,
  streakWidth = 1.2,
  streakLength = 1.2,
  glow = 1.2,
  opacity = 1,
  mouseInteraction = true,
  className = ''
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = container.clientWidth || window.innerWidth);
    let height = (canvas.height = container.clientHeight || window.innerHeight);

    const handleResize = () => {
      width = canvas.width = container.clientWidth || window.innerWidth;
      height = canvas.height = container.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const handleMouseLeave = () => { mouse.active = false; };

    if (mouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const hexToRgb = (hex) => {
      const c = hex.replace('#', '').padEnd(6, '0');
      const r = parseInt(c.slice(0, 2), 16);
      const g = parseInt(c.slice(2, 4), 16);
      const b = parseInt(c.slice(4, 6), 16);
      return { r, g, b };
    };

    const parsedColors = colors.map(hexToRgb);
    const numStreaks = Math.floor(streakCount * 12);
    const streaks = [];

    class Streak {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -100 - Math.random() * 200;
        this.length = (Math.random() * 120 + 80) * streakLength;
        this.speed = (Math.random() * 3 + 2) * speed;
        this.width = (Math.random() * 2 + 0.8) * streakWidth;
        this.color = parsedColors[Math.floor(Math.random() * parsedColors.length)];
        this.alpha = (Math.random() * 0.6 + 0.4) * opacity;
        this.twinkle = Math.random() * Math.PI * 2;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
        this.curve = (Math.random() - 0.5) * 0.3;
      }

      update() {
        this.y += this.speed;
        this.x += this.curve;
        this.twinkle += this.twinkleSpeed;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            this.x += (dx / dist) * force * 1.5;
          }
        }

        if (this.y - this.length > height) {
          this.reset(false);
        }
      }

      draw() {
        const currentAlpha = this.alpha * (0.8 + 0.2 * Math.sin(this.twinkle));
        const gradient = ctx.createLinearGradient(this.x, this.y - this.length, this.x, this.y);
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        gradient.addColorStop(0.7, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentAlpha * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${currentAlpha * glow})`);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.shadowBlur = 12 * glow;
        ctx.shadowColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < numStreaks; i++) {
      streaks.push(new Streak());
    }

    let animId;
    const render = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      if (mouse.active) {
        const mRadial = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        mRadial.addColorStop(0, 'rgba(168, 85, 247, 0.25)');
        mRadial.addColorStop(0.5, 'rgba(147, 51, 234, 0.1)');
        mRadial.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mRadial;
        ctx.fillRect(0, 0, width, height);
      }

      streaks.forEach((s) => {
        s.update();
        s.draw();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, [colors, backgroundColor, speed, streakCount, streakWidth, streakLength, glow, opacity, mouseInteraction]);

  return <div ref={containerRef} className={`lightfall-container ${className}`} />;
};

export default Lightfall;
