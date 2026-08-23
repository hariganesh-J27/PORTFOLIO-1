import React from 'react';
import { ShieldCheck, Award, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Google, Cisco Networking Academy & AWS',
      year: '2026',
      badge: 'Verified Credential',
      description: 'Foundational certification covering artificial intelligence principles, neural networks, ethics in AI, and cloud AI services across AWS and Google Cloud platform ecosystems.',
      color: '#00f2fe',
    },
    {
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      year: 'June 2026',
      badge: 'Verified Credential',
      description: 'Comprehensive study of modern AI paradigms, machine learning models, intelligent agent design, and AI-driven automation workflows.',
      color: '#7f00ff',
    },
  ];

  const ongoingPathways = [
    { name: 'Cisco Networking Academy', topic: 'Networking & AI Foundations' },
    { name: 'IBM SkillsBuild', topic: 'Enterprise AI & Data Science' },
    { name: 'DeepLearning.AI', topic: 'Deep Learning & LLM Specializations' },
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>Credentials & Knowledge</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized credentials and active skill development pathways.
          </p>
        </div>

        {/* Certified Badges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `rgba(255, 255, 255, 0.05)`,
                    border: `1px solid ${cert.color}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cert.color,
                  }}
                >
                  <Award size={24} />
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    background: `rgba(0, 242, 254, 0.1)`,
                    border: `1px solid ${cert.color}44`,
                    color: cert.color,
                  }}
                >
                  {cert.year}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                {cert.title}
              </h3>

              <div style={{ fontSize: '0.9rem', color: cert.color, fontWeight: 600, marginBottom: '1rem' }}>
                {cert.issuer}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ongoing Pathways Spotlight */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.8), rgba(9, 13, 22, 0.95))',
            border: '1px solid rgba(0, 245, 160, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <Sparkles style={{ color: '#00f5a0' }} size={22} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
              Ongoing Specialization Pathways
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
            {ongoingPathways.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle style={{ color: '#00f5a0', flexShrink: 0 }} size={18} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{item.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.topic}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
