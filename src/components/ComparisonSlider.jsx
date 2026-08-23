import { useState, useRef, useEffect, useCallback } from 'react';
import './ComparisonSlider.css';

export default function ComparisonSlider({
  firstContent,
  secondContent,
  firstLabel = 'BEFORE',
  secondLabel = 'AFTER',
  defaultPosition = 50,
  className = '',
  style
}) {
  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`comparison-slider-container ${className}`}
      style={style}
      onTouchMove={handleTouchMove}
    >
      {/* Second Content (Underneath / Right side) */}
      <div className="comparison-slider-layer second-layer">
        {secondContent}
        {secondLabel && <span className="comparison-badge right-badge">{secondLabel}</span>}
      </div>

      {/* First Content (Clipped / Left side) */}
      <div
        className="comparison-slider-layer first-layer"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {firstContent}
        {firstLabel && <span className="comparison-badge left-badge">{firstLabel}</span>}
      </div>

      {/* Draggable Divider Bar & Handle */}
      <div
        className="comparison-slider-handle"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="comparison-handle-line" />
        <div className="comparison-handle-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m9 18-6-6 6-6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </div>
        <div className="comparison-handle-line" />
      </div>
    </div>
  );
}
