import { useCallback, useEffect, useRef, useState } from 'react';
import './ParallaxCarousel.css';

const DEFAULT_PROJECTS = [
  {
    id: 'medvision',
    title: 'MedVision AI',
    subtitle: 'Medical Imaging Classifier',
    metric: '98.4% Val Accuracy',
    tags: ['PyTorch', 'ResNet50', 'FastAPI', 'Docker'],
    image: 'medvision_mockup.jpg',
    category: 'Computer Vision'
  },
  {
    id: 'neuropredict',
    title: 'NeuroPredict AI',
    subtitle: 'Brain Tumor MRI Segmentation',
    metric: '0.912 Dice Score',
    tags: ['U-Net', 'PyTorch', 'MONAI', 'CUDA'],
    image: 'neuropredict_mockup.jpg',
    category: 'Healthcare AI'
  },
  {
    id: 'drone-nav',
    title: 'Autonomous Drone Nav',
    subtitle: 'Real-time Perception & Path Planning',
    metric: '45 FPS Object Tracking',
    tags: ['YOLOv8', 'ROS2', 'OpenCV', 'C++'],
    image: 'drone_nav_mockup.jpg',
    category: 'Robotics'
  },
  {
    id: 'finance-nlp',
    title: 'Financial Sentiment Engine',
    subtitle: 'High-Frequency News LLM Pipeline',
    metric: '91.8% F1 Score',
    tags: ['FinBERT', 'HuggingFace', 'FastAPI', 'Docker'],
    image: 'finance_nlp_mockup.jpg',
    category: 'Cloud ML'
  }
];

export default function ParallaxCarousel({
  items = DEFAULT_PROJECTS,
  cardWidth = 360,
  cardHeight = 440,
  parallaxStrength = 0.4,
  dragSensitivity = 1.2,
  className = '',
  onProjectClick
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartOffset, setDragStartOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const totalItems = items.length;
  const maxOffset = (totalItems - 1) * cardWidth;

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const updateIndexFromOffset = useCallback((offset) => {
    const idx = Math.round(offset / cardWidth);
    setCurrentIndex(clamp(idx, 0, totalItems - 1));
  }, [cardWidth, totalItems]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX || e.touches?.[0]?.clientX || 0);
    setDragStartOffset(scrollOffset);
    setVelocity(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    const deltaX = (dragStartX - currentX) * dragSensitivity;
    const newOffset = clamp(dragStartOffset + deltaX, -50, maxOffset + 50);
    setScrollOffset(newOffset);
    setVelocity(deltaX * 0.1);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    let targetIndex = Math.round((scrollOffset + velocity * 15) / cardWidth);
    targetIndex = clamp(targetIndex, 0, totalItems - 1);
    
    setScrollOffset(targetIndex * cardWidth);
    setCurrentIndex(targetIndex);
  };

  const goToSlide = (index) => {
    const targetIdx = clamp(index, 0, totalItems - 1);
    setCurrentIndex(targetIdx);
    setScrollOffset(targetIdx * cardWidth);
  };

  return (
    <div className={`parallax-carousel-wrapper ${className}`}>
      <div 
        ref={containerRef}
        className="parallax-carousel-viewport"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <div 
          ref={trackRef}
          className="parallax-carousel-track"
          style={{
            transform: `translateX(${-scrollOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {items.map((item, index) => {
            const cardCenter = index * cardWidth;
            const distFromCenter = scrollOffset - cardCenter;
            const parallaxShift = distFromCenter * parallaxStrength;
            const isActive = index === currentIndex;
            const rotation = clamp(distFromCenter * -0.04, -12, 12);
            const scale = isActive ? 1 : 0.94;
            const opacity = clamp(1 - Math.abs(distFromCenter) / (cardWidth * 2.2), 0.4, 1);

            return (
              <div
                key={item.id || index}
                className={`parallax-carousel-card ${isActive ? 'is-active' : ''}`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `scale(${scale}) rotateY(${rotation}deg)`,
                  opacity
                }}
                onClick={() => onProjectClick && onProjectClick(item)}
              >
                <div className="parallax-card-media-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="parallax-card-media"
                    style={{
                      transform: `translateX(${parallaxShift}px) scale(1.18)`
                    }}
                  />
                  <div className="parallax-card-overlay" />
                  <span className="parallax-card-category">{item.category}</span>
                  <span className="parallax-card-metric">{item.metric}</span>
                </div>

                <div className="parallax-card-content">
                  <h3 className="parallax-card-title">{item.title}</h3>
                  <p className="parallax-card-subtitle">{item.subtitle}</p>
                  
                  <div className="parallax-card-tags">
                    {item.tags?.map((tag, tIdx) => (
                      <span key={tIdx} className="parallax-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="parallax-carousel-controls">
        <button
          className="parallax-nav-btn prev-btn"
          onClick={() => goToSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous Project"
        >
          &larr;
        </button>

        <div className="parallax-carousel-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`parallax-dot ${idx === currentIndex ? 'is-active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          className="parallax-nav-btn next-btn"
          onClick={() => goToSlide(currentIndex + 1)}
          disabled={currentIndex === totalItems - 1}
          aria-label="Next Project"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
