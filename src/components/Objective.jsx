import React from 'react';
import { Target, Quote, Compass, Rocket } from 'lucide-react';

export default function Objective() {
  return (
    <section id="objective" className="section">
      <div className="container" style={{ maxWidth: '1000px' }}>

        <div className="section-title-wrap">
          <div className="section-badge">
            <Target size={14} />
            <span>Vision & Career Goal</span>
          </div>
          <h2 className="section-title">
            Career <span className="gradient-text">Objective</span>
          </h2>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '3.5rem 3rem',
            background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.95), rgba(12, 17, 28, 0.98))',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Quote Icon Background Decorative */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '2rem',
              color: 'rgba(0, 242, 254, 0.1)',
            }}
          >
            <Quote size={60} />
          </div>

          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              lineHeight: 1.8,
              color: '#f8fafc',
              fontWeight: 500,
              fontStyle: 'italic',
              maxWidth: '850px',
              margin: '0 auto 2rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            "To build a successful career in <strong style={{ color: '#00f2fe', fontStyle: 'normal' }}>AI/ML</strong> by continuously enhancing technical expertise, contributing to innovative projects, and developing impactful AI-driven solutions — growing into a well-rounded <strong style={{ color: '#00f5a0', fontStyle: 'normal' }}>AI/ML engineer</strong> through internships, hackathons, and collaborative projects."
          </p>

          {/* Vision Pill Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: '#00f2fe', fontWeight: 600 }}>
              <Rocket size={15} />
              <span>AI/ML Innovation</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(127, 0, 255, 0.08)', border: '1px solid rgba(127, 0, 255, 0.2)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', color: '#a78bfa', fontWeight: 600 }}>
              <Compass size={15} />
              <span>Impactful AI Engineering</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
