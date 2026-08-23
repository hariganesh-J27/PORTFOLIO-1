import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science and Engineering (Core)',
      institution: 'VIT Chennai',
      duration: '2025 – 2029',
      location: 'Chennai, Tamil Nadu',
      badge: 'Premier Engineering Institute',
      highlights: [
        'Core Computer Science curriculum: Data Structures & Algorithms, Operating Systems, DBMS.',
        'Hands-on practical labs in software engineering, low-level optimization, and database architecture.',
        'Active participant in technical symposiums, coding challenges, and innovation workshops.',
      ],
      color: '#00f2fe',
    },
    {
      degree: 'BS in Data Science and Applications',
      institution: 'IIT Madras',
      duration: '2025 – 2029',
      location: 'Chennai (Online / Hybrid)',
      badge: 'Top National Academic Program',
      highlights: [
        'Advanced Mathematics, Statistics, Machine Learning, and Machine Learning Practice.',
        'Hands-on computational data analysis, statistical inferencing, and Python ML pipelines.',
        'Focused coursework on algorithms, big data concepts, and real-world project portfolios.',
      ],
      color: '#7f00ff',
    },
    {
      degree: 'Senior Secondary & Secondary Schooling',
      institution: 'Sishya School, Hosur',
      duration: 'Completed',
      location: 'Hosur, Tamil Nadu',
      badge: 'Academic Excellence Foundation',
      highlights: [
        'Strong analytical & mathematical foundation in Science and Mathematics streams.',
        'Participation in school tech competitions, quizzes, and leadership initiatives.',
      ],
      color: '#00f5a0',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Pursuits</span>
          </h2>
          <p className="section-subtitle">
            Building a multi-disciplinary foundation across premier technical institutions.
          </p>
        </div>

        {/* Education Visual Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                position: 'relative',
                paddingLeft: '2.5rem',
                borderLeft: `4px solid ${edu.color}`,
              }}
            >
              {/* Timeline Connector Accent */}
              <div
                style={{
                  position: 'absolute',
                  left: '-12px',
                  top: '2.2rem',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--bg-dark)',
                  border: `3px solid ${edu.color}`,
                  boxShadow: `0 0 10px ${edu.color}`,
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: edu.color,
                      background: `rgba(255, 255, 255, 0.05)`,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      border: `1px solid ${edu.color}33`,
                    }}
                  >
                    {edu.badge}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.5rem', color: '#fff' }}>
                    {edu.degree}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Calendar size={15} style={{ color: edu.color }} />
                    <span>{edu.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Institution Subheading */}
              <h4 style={{ fontSize: '1.1rem', color: edu.color, fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} />
                <span>{edu.institution}</span>
              </h4>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {edu.highlights.map((point, pIdx) => (
                  <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} style={{ color: edu.color, marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
