import React from 'react';
import { Trophy, Presentation, Code, Users, Award } from 'lucide-react';

export default function Hackathons() {
  const events = [
    {
      title: 'Smart India Hackathon (SIH) 2025',
      role: 'Participant & Team Presentation Lead',
      highlight: true,
      icon: <Trophy style={{ color: '#ffb703' }} size={26} />,
      description: 'Collaborated on a high-impact solution for national problem statements. Led the final pitch and technical architecture presentation before an expert evaluation panel.',
      tags: ['SIH 2025', 'Team Presentation Lead', 'Problem Solving', 'System Pitch'],
    },
    {
      title: 'Front-End Development Competitions',
      role: 'Participant & UI Creator',
      highlight: false,
      icon: <Code style={{ color: '#00f2fe' }} size={24} />,
      description: 'Competed in time-bounded frontend hackathons designing responsive, accessible, and high-aesthetic web interfaces under strict performance constraints.',
      tags: ['Web Dev', 'Responsive Design', 'Speed Coding'],
    },
    {
      title: 'Web Development Events & Hackathons',
      role: 'Full-Stack Collaborator',
      highlight: false,
      icon: <Users style={{ color: '#7f00ff' }} size={24} />,
      description: 'Engaged in collaborative tech events building web applications, prototyping database-backed systems, and presenting code to judge panels.',
      tags: ['Collaborative Coding', 'Full Stack', 'Web Apps'],
    },
    {
      title: 'Technical Workshops & Innovation Challenges',
      role: 'Active Innovator',
      highlight: false,
      icon: <Award style={{ color: '#00f5a0' }} size={24} />,
      description: 'Participated in hands-on workshops covering AI/ML model deployment, data science workflows, and modern software development paradigms.',
      tags: ['Workshops', 'AI Innovation', 'Peer Networking'],
    },
  ];

  return (
    <section id="hackathons" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Events & Competitions</span>
          </div>
          <h2 className="section-title">
            Hackathons & <span className="gradient-text">Technical Events</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating leadership, rapid prototyping, and team presentation under competition pressure.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                border: evt.highlight ? '1px solid rgba(255, 183, 3, 0.35)' : '1px solid var(--border-subtle)',
                background: evt.highlight
                  ? 'linear-gradient(145deg, rgba(255, 183, 3, 0.05), rgba(18, 24, 38, 0.85))'
                  : 'var(--bg-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {evt.icon}
                </div>

                {evt.highlight && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 183, 3, 0.15)',
                      color: '#ffb703',
                      border: '1px solid rgba(255, 183, 3, 0.4)',
                    }}
                  >
                    Spotlight
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
                {evt.title}
              </h3>

              <div style={{ fontSize: '0.9rem', color: evt.highlight ? '#ffb703' : '#00f2fe', fontWeight: 600, marginBottom: '1rem' }}>
                {evt.role}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {evt.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {evt.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.76rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-dim)',
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
