import React, { useState } from 'react';
import LogoLoop from './LogoLoop';
import { Zap, Brain, Navigation, Database, Film, Cpu, CreditCard, ArrowRight, Github } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'scoliosis',
      title: 'Wearable Scoliosis Detection System',
      category: 'hardware',
      badge: '★ FEATURED HARDWARE',
      date: 'APRIL — 2024',
      metrics: ['🎯 94.2% Cobb Angle', '⚡ < 15ms Latency', '📡 4x ADXL345'],
      description: 'IoT wearable posture monitoring system using ESP32 with accelerometer arrays fed into neural regression models.',
      tech: ['ESP32', 'PyTorch', 'ADXL345', 'WebSockets'],
      icon: Zap,
    },
    {
      id: 'disease-prediction',
      title: 'Disease Prediction Using Random Forest',
      category: 'ml',
      badge: 'ML SPOTLIGHT',
      date: 'OCT — 2024',
      metrics: ['🎯 94.8% CV Accuracy', '🌲 Gini Importance'],
      description: 'Predictive clinical diagnostic machine learning pipeline evaluating patient health parameters with cross-validation.',
      tech: ['Python', 'Scikit-Learn', 'Random Forest', 'Pandas'],
      icon: Brain,
    },
    {
      id: 'drone',
      title: 'ROS2 Autonomous Drone Simulation',
      category: 'hardware',
      badge: 'ROBOTICS AI',
      date: 'JAN — 2025',
      metrics: ['🚁 ROS2 Humble Flight', '🧠 PyTorch LSTM Trajectory'],
      description: 'Spatial-temporal trajectory forecasting pipeline using ROS2 nodes, PyTorch LSTM networks, and Gazebo 3D simulation.',
      tech: ['ROS2', 'Gazebo', 'PyTorch LSTM', 'C++'],
      icon: Navigation,
    },
    {
      id: 'movie-ticket',
      title: 'Movie Ticket Booking System',
      category: 'cloud',
      badge: 'DBMS & CONCURRENCY',
      date: 'AUG — 2024',
      metrics: ['🎟️ High-Concurrency ACID', '⚡ Sub-Second Query'],
      description: 'Relational database schema and stored procedures preventing race condition double-booking with ACID transactions.',
      tech: ['PostgreSQL', 'SQL Transactions', 'Node.js', 'Redis'],
      icon: Film,
    },
    {
      id: 'hospital',
      title: 'Hospital Management Architecture',
      category: 'cloud',
      badge: 'SQL & RELATIONAL DB',
      date: 'DEC — 2024',
      metrics: ['🏥 RBAC Data Security', '📊 Automated Billing'],
      description: 'End-to-end database management system for hospital operations, patient records, staff scheduling, and billing.',
      tech: ['PostgreSQL', 'Stored Procedures', 'RBAC Security', 'ER Modeling'],
      icon: Database,
    },
    {
      id: 'os-sim',
      title: 'Operating Systems Simulation Suite',
      category: 'hardware',
      badge: 'SYSTEMS PROGRAMMING',
      date: 'MAR — 2024',
      metrics: ['⚙️ CPU Schedulers', '🔒 Semaphores & Mutexes'],
      description: 'Simulation environment for low-level operating system algorithms including process management and memory allocation.',
      tech: ['C / C++', 'POSIX Threads', 'Mutexes', 'Memory Mgmt'],
      icon: Cpu,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'hardware' && (p.category === 'hardware' || p.category === 'ml')));

  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 2, paddingTop: '7.5rem', background: '#FDFFF5' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Chapter 03 Watermark */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900, color: 'rgba(0, 0, 0, 0.08)', lineHeight: 0.9, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
            03
          </div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            CHAPTER 03
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#000000', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
            SELECTED WORKS
          </h2>
        </div>

        {/* Filter Category Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '2.5rem', position: 'relative', zIndex: 10 }}>
          {[
            { id: 'all', label: 'All Systems' },
            { id: 'hardware', label: 'Wearable IoT & Robotics' },
            { id: 'ml', label: 'AI / ML & Vision' },
            { id: 'cloud', label: 'Cloud & Telemetry' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                border: filter === cat.id ? '1px solid #000000' : '1px solid rgba(0,0,0,0.2)',
                color: filter === cat.id ? '#FDFFF5' : '#27272a',
                background: filter === cat.id ? '#000000' : 'rgba(0,0,0,0.05)',
                padding: '0.55rem 1.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* React Bits LogoLoop Infinite Projects Marquee */}
      <div className="project-loop-wrapper">
        <LogoLoop
          logos={filteredProjects}
          speed={60}
          direction="left"
          gap={32}
          pauseOnHover={true}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="#FDFFF5"
          ariaLabel="Featured engineering projects marquee"
          renderItem={(project, key) => {
            const IconComp = project.icon;
            return (
              <div key={key} className="project-loop-card inspect-project-trigger" data-project={project.id}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ background: '#000000', border: '1px solid #000000', padding: '0.2rem 0.65rem', borderRadius: '50px', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: '#FDFFF5', fontWeight: 700 }}>
                        {project.badge}
                      </span>
                      <span className="cosmic-date-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.65rem', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.2)', color: '#000000', borderRadius: '4px', fontFamily: 'var(--font-code)' }}>
                        {project.date}
                      </span>
                    </div>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="bento-icon-btn" title="GitHub Repository" style={{ color: '#000000', transition: 'color 0.3s ease' }}>
                      <Github size={18} />
                    </a>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#000000', margin: '0 0 0.75rem 0', transition: 'color 0.3s ease', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {project.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="metric-pill-badge" style={{ background: 'rgba(0, 0, 0, 0.08)', border: '1px solid rgba(0, 0, 0, 0.25)', color: '#000000', fontSize: '0.74rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px', fontFamily: 'var(--font-code)', transition: 'all 0.3s ease' }}>
                        {m}
                      </span>
                    ))}
                  </div>

                  <p className="project-card-desc" style={{ color: '#52525b', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.25rem 0', transition: 'color 0.3s ease' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="cosmic-pill-tag" style={{ padding: '0.25rem 0.65rem', fontSize: '0.75rem', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.2)', color: '#000000', borderRadius: '4px', fontFamily: 'var(--font-code)', transition: 'all 0.3s ease' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn btn-secondary inspect-project-btn" style={{ width: '100%', padding: '0.7rem 1rem', fontSize: '0.85rem', justifyContent: 'center', background: '#000000', color: '#FDFFF5', border: '1px solid #000000', borderRadius: '6px', cursor: 'pointer', fontFamily: 'var(--font-code)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}>
                  <span>Inspect Architecture Flow</span>
                  <ArrowRight size={15} style={{ marginLeft: '0.4rem' }} />
                </button>
              </div>
            );
          }}
        />
      </div>

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>
        {/* Link to Dedicated Projects Page */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a href="/projects.html" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', border: '1.5px solid #000000', fontWeight: 700 }}>
            <span>Explore All Technical Case Studies &amp; Flowcharts</span>
          </a>
        </div>
      </div>
    </section>
  );
}
