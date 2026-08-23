import React, { useState } from 'react';
import { TrendingUp, Calendar, GraduationCap, Building2, Award, MapPin } from 'lucide-react';
import './SimpleGraph.css';

const simpleGraphMilestones = {
  sishya: {
    id: 'sishya',
    name: 'Sishya School, Hosur',
    degree: 'Senior Secondary & Secondary Schooling',
    years: 'Completed',
    location: 'Hosur, Tamil Nadu',
    badge: 'Foundation',
    icon: GraduationCap,
    x: 180,
    y: 220
  },
  vit: {
    id: 'vit',
    name: 'VIT Chennai',
    degree: 'B.Tech in Computer Science & Engineering (Core)',
    years: '2025 — 2029',
    location: 'Chennai, Tamil Nadu',
    badge: 'Dual Degree 1',
    icon: Building2,
    x: 520,
    y: 110
  },
  iitm: {
    id: 'iitm',
    name: 'IIT Madras',
    degree: 'BS in Data Science & Applications',
    years: '2025 — 2029',
    location: 'Chennai (Online / Hybrid)',
    badge: 'Dual Degree 2',
    icon: Award,
    x: 820,
    y: 60
  }
};

export default function SimpleGraph() {
  const [hoveredKey, setHoveredKey] = useState(null);
  const activeData = hoveredKey ? simpleGraphMilestones[hoveredKey] : null;

  return (
    <div className="simple-graph-container" id="simple-graph-wrapper">
      
      {/* Graph Header Summary */}
      <div className="simple-graph-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
            <TrendingUp size={20} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ACADEMIC PROGRESSION
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', fontWeight: 900, color: '#000000' }}>
              Chronological Milestone Trajectory
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="simple-graph-badge">
            <Calendar size={13} />
            <span>2023 — 2029</span>
          </span>
          <span className="simple-graph-badge" style={{ background: '#000000', color: '#FDFFF5', borderColor: '#000000' }}>
            3 Key Institutions
          </span>
        </div>
      </div>

      {/* Animated SVG Line Graph */}
      <div className="simple-graph-svg-wrap">
        <svg className="simple-graph-svg" viewBox="0 0 900 320" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="simple-graph-gradient-react" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid Lines */}
          <line className="graph-grid-line" x1="50" y1="60" x2="850" y2="60" />
          <line className="graph-grid-line" x1="50" y1="110" x2="850" y2="110" />
          <line className="graph-grid-line" x1="50" y1="165" x2="850" y2="165" />
          <line className="graph-grid-line" x1="50" y1="220" x2="850" y2="220" />
          <line className="graph-grid-line" x1="50" y1="275" x2="850" y2="275" />

          {/* X-Axis Year Labels */}
          <text className="graph-axis-text" x="180" y="305" textAnchor="middle">2023 — 2025</text>
          <text className="graph-axis-text" x="520" y="305" textAnchor="middle">2025 — 2029 (VIT)</text>
          <text className="graph-axis-text" x="820" y="305" textAnchor="middle">2025 — 2029 (IIT-M)</text>

          {/* Y-Axis Level Labels */}
          <text className="graph-axis-text" x="40" y="65" textAnchor="end">AI &amp; DS</text>
          <text className="graph-axis-text" x="40" y="115" textAnchor="end">B.TECH</text>
          <text className="graph-axis-text" x="40" y="225" textAnchor="end">SCHOOL</text>

          {/* Area Fill Under Curve */}
          <path className="graph-area-fill" fill="url(#simple-graph-gradient-react)" d="M 180,220 C 350,220 380,110 520,110 C 650,110 720,60 820,60 L 820,275 L 180,275 Z" />

          {/* Interactive Cursor Vertical Tracking Line */}
          <line
            id="graph-cursor-line"
            x1={activeData ? activeData.x : 0}
            y1="40"
            x2={activeData ? activeData.x : 0}
            y2="275"
            style={{
              stroke: '#000000',
              strokeWidth: 1.5,
              strokeDasharray: '4 4',
              opacity: activeData ? 1 : 0,
              pointerEvents: 'none',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />

          {/* Animated Main Line Graph Curve */}
          <path className="graph-path-line" d="M 180,220 C 350,220 380,110 520,110 C 650,110 720,60 820,60" />

          {/* Milestone 1 Node (Sishya School) */}
          <g
            className={`graph-node-group ${hoveredKey === 'sishya' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredKey('sishya')}
            onMouseLeave={() => setHoveredKey(null)}
            transform="translate(180, 220)"
          >
            <circle className="graph-node-ping" cx="0" cy="0" />
            <circle className="graph-node-dot" cx="0" cy="0" />
          </g>

          {/* Milestone 2 Node (VIT Chennai) */}
          <g
            className={`graph-node-group ${hoveredKey === 'vit' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredKey('vit')}
            onMouseLeave={() => setHoveredKey(null)}
            transform="translate(520, 110)"
          >
            <circle className="graph-node-ping" cx="0" cy="0" />
            <circle className="graph-node-dot" cx="0" cy="0" />
          </g>

          {/* Milestone 3 Node (IIT Madras) */}
          <g
            className={`graph-node-group ${hoveredKey === 'iitm' ? 'active' : ''}`}
            onMouseEnter={() => setHoveredKey('iitm')}
            onMouseLeave={() => setHoveredKey(null)}
            transform="translate(820, 60)"
          >
            <circle className="graph-node-ping" cx="0" cy="0" />
            <circle className="graph-node-dot" cx="0" cy="0" />
          </g>
        </svg>

        {/* Floating Tooltip */}
        {activeData && (
          <div
            className="simple-graph-tooltip visible"
            style={{
              left: `${(activeData.x / 900) * 100}%`,
              top: `${activeData.y - 65}px`
            }}
          >
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
              {activeData.years} • {activeData.badge}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', fontWeight: 800, color: '#FDFFF5', lineHeight: 1.2 }}>
              {activeData.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#e4e4e7', fontWeight: 600, marginTop: '0.2rem' }}>
              {activeData.degree}
            </div>
          </div>
        )}
      </div>

      {/* 3 Clean Milestone Cards Below Graph */}
      <div className="simple-graph-cards-grid">
        {Object.values(simpleGraphMilestones).map((item) => {
          const IconComp = item.icon;
          const isHovered = hoveredKey === item.id;

          return (
            <div
              key={item.id}
              className={`graph-milestone-card ${isHovered ? 'active' : ''}`}
              onMouseEnter={() => setHoveredKey(item.id)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justify-content: 'space-between', marginBottom: '1.2rem' }}>
                  <div className="milestone-icon-wrap" style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.06)', border: '1px solid rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justify-content: 'center', color: '#000000', transition: 'all 0.3s ease' }}>
                    <IconComp size={22} />
                  </div>
                  <span className="milestone-year-badge">
                    {item.years}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 900, color: '#000000', margin: '0 0 0.35rem 0', lineHeight: 1.25, transition: 'color 0.3s ease' }}>
                  {item.name}
                </h3>
                
                <div className="milestone-degree" style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'color 0.3s ease' }}>
                  {item.degree}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#71717a', font-weight: 600, marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
