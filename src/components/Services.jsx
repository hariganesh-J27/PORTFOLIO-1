import React, { useState } from 'react';
import { Cpu, Brain, Bot, Cloud } from 'lucide-react';

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 'iot',
      number: '01',
      title: 'IoT',
      subtitle: 'Sensor Telemetry & Hardware Systems',
      icon: Cpu,
      description:
        'ESP32 hardware accelerometer arrays streaming ADXL345 vibration data over WebSocket telemetry pipelines — edge to dashboard in milliseconds with low-latency hardware integration.',
      tags: ['ESP32', 'ADXL345', 'WEBSOCKETS', 'EDGE COMPUTE'],
    },
    {
      id: 'ai-ml',
      number: '02',
      title: 'AI & ML',
      subtitle: 'Deep Learning & Neural Architectures',
      icon: Brain,
      description:
        'Deep neural networks and PyTorch vision systems — CNNs, ResNets, and Scikit-Learn ensembles engineered for production clinical diagnosis and feature ranking.',
      tags: ['PYTORCH', 'CNN / RESNET', 'SCIKIT-LEARN', 'RANDOM FOREST'],
    },
    {
      id: 'robotics',
      number: '03',
      title: 'Autonomous Robotics',
      subtitle: 'ROS2 & Simulation Telemetry',
      icon: Bot,
      description:
        'ROS2 Gazebo 3D simulation environments and spatial-temporal trajectory predictors with PyTorch LSTM networks for autonomous UAV flight and obstacle avoidance.',
      tags: ['ROS2 HUMBLE', 'GAZEBO 11', 'PYTORCH LSTM', 'C++ NODES'],
    },
    {
      id: 'cloud',
      number: '04',
      title: 'Cloud',
      subtitle: 'Cloud AI & MLOps Infrastructure',
      icon: Cloud,
      description:
        'Agent infrastructure and microservices — Docker containerization, FastAPI asynchronous inference endpoints, and automated AWS/GCP CI/CD deployment pipelines.',
      tags: ['FASTAPI', 'DOCKER', 'AWS', 'CI/CD PIPELINES'],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="section" style={{ background: '#FDFFF5', position: 'relative', zIndex: 10, padding: '7rem 0 6rem 0', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>
        
        {/* Chapter 02 Watermark */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'left' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900, color: 'rgba(0, 0, 0, 0.08)', lineHeight: 0.9, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
            02
          </div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            CHAPTER 02
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#000000', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
            SERVICES &amp; SPECIALIZATIONS
          </h2>
        </div>

        {/* 2x2 Bento Box Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="services-two-col-grid">
          {services.map((item) => {
            const IconComp = item.icon;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`service-interactive-card ${isExpanded ? 'is-expanded' : ''}`}
                style={{
                  border: '1.5px solid rgba(0, 0, 0, 0.15)',
                  borderRadius: '12px',
                  padding: '2.2rem 2.4rem',
                  background: isExpanded ? '#000000' : '#FDFFF5',
                  color: isExpanded ? '#FDFFF5' : '#000000',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  userSelect: 'none',
                  boxShadow: isExpanded ? '0 20px 45px rgba(0, 0, 0, 0.28)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <IconComp size={28} style={{ color: isExpanded ? '#FDFFF5' : '#000000', strokeWidth: 1.8, transition: 'all 0.3s ease' }} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 900, color: isExpanded ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.12)', lineHeight: 1, transition: 'color 0.3s ease' }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.85rem', fontWeight: 900, color: isExpanded ? '#FDFFF5' : '#000000', margin: '0 0 0.35rem 0', transition: 'color 0.3s ease', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', fontWeight: 700, color: isExpanded ? '#a1a1aa' : '#71717a', textTransform: 'uppercase', letterSpacing: '0.12em', transition: 'color 0.3s ease' }}>
                    {item.subtitle}
                  </div>

                  {/* Collapsible Content Drawer */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '500px' : '0',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, margin 0.35s ease',
                      marginTop: isExpanded ? '1.35rem' : '0',
                      marginBottom: isExpanded ? '0.5rem' : '0',
                    }}
                  >
                    <p style={{ color: isExpanded ? '#d4d4d8' : '#52525b', fontSize: '0.95rem', lineHeight: 1.65, margin: '0 0 1.5rem 0', transition: 'color 0.3s ease' }}>
                      {item.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            border: isExpanded ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.2)',
                            padding: '0.3rem 0.75rem',
                            fontFamily: 'var(--font-code)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            color: isExpanded ? '#FDFFF5' : '#27272a',
                            textTransform: 'uppercase',
                            borderRadius: '4px',
                            background: isExpanded ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Click indicator button */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.45rem 1.1rem',
                    borderRadius: '50px',
                    border: isExpanded ? '1px solid #FDFFF5' : '1px solid rgba(0, 0, 0, 0.2)',
                    background: isExpanded ? '#FDFFF5' : 'rgba(0, 0, 0, 0.05)',
                    color: isExpanded ? '#000000' : '#000000',
                    transition: 'all 0.25s ease',
                    marginTop: '1.4rem',
                    width: 'fit-content',
                  }}
                >
                  <span>{isExpanded ? 'Hide Content' : 'Click to View Content'}</span>
                  <span style={{ display: 'inline-block', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', fontWeight: 900, fontSize: '0.85rem' }}>
                    ↓
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
