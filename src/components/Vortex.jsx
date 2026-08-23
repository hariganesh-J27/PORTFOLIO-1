import { useEffect, useRef } from 'react';
import './Vortex.css';

export default function Vortex({
  particleCount = 700,
  rangeY = 100,
  baseHue = 0,
  baseSpeed = 0.15,
  rangeSpeed = 1.2,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = '#FFFFFF',
  className = '',
  style
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let center = [0, 0];

    const particles = [];

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (Math.max(width, height) * 0.7);
      const speed = baseSpeed + Math.random() * rangeSpeed;
      const radius = baseRadius + Math.random() * rangeRadius;
      const alpha = Math.random() * 0.8 + 0.2;
      const rotSpeed = (Math.random() - 0.5) * 0.02;

      return {
        angle,
        distance,
        speed,
        radius,
        alpha,
        rotSpeed,
        z: Math.random() * 1000 + 1
      };
    };

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      center = [width / 2, height / 2];
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const render = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.z -= p.speed * 4;
        p.angle += p.rotSpeed + 0.005;

        if (p.z <= 1) {
          p.z = 1000;
          p.distance = Math.random() * (Math.max(width, height) * 0.7);
        }

        const k = 600 / p.z;
        const x = center[0] + Math.cos(p.angle) * p.distance * k;
        const y = center[1] + Math.sin(p.angle) * p.distance * k;
        const size = Math.max(0.5, p.radius * k * 0.8);
        const alpha = Math.min(1, (1000 - p.z) / 1000) * p.alpha;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.shadowBlur = size * 3;
        ctx.shadowColor = '#000000';
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [particleCount, rangeY, baseHue, baseSpeed, rangeSpeed, baseRadius, rangeRadius, backgroundColor]);

  return (
    <div className={`vortex-container ${className}`} style={style}>
      <canvas ref={canvasRef} className="vortex-canvas" />
    </div>
  );
}
