import { useEffect, useRef } from 'react';
import './CenterFlow.css';

export default function CenterFlow({
  ringCount = 5,
  color = '#000000',
  speed = 1.2,
  maxRadius = 180,
  strokeWidth = 1.8,
  glow = true,
  className = '',
  style
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let width = 0;
    let height = 0;

    const rings = Array.from({ length: ringCount }, (_, i) => ({
      radius: (i / ringCount) * maxRadius,
      alpha: 1 - i / ringCount
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * (window.devicePixelRatio || 1);
      height = canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const displayW = width / (window.devicePixelRatio || 1);
      const displayH = height / (window.devicePixelRatio || 1);
      const centerX = displayW / 2;
      const centerY = displayH / 2;

      ctx.clearRect(0, 0, displayW, displayH);

      rings.forEach(ring => {
        ring.radius += speed * 0.8;
        if (ring.radius > maxRadius) {
          ring.radius = 0;
        }

        const alpha = Math.max(0, 1 - ring.radius / maxRadius);

        ctx.beginPath();
        ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha * 0.85;
        ctx.lineWidth = strokeWidth;

        if (glow) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [ringCount, color, speed, maxRadius, strokeWidth, glow]);

  return (
    <div className={`center-flow-container ${className}`} style={style}>
      <canvas ref={canvasRef} className="center-flow-canvas" />
    </div>
  );
}
