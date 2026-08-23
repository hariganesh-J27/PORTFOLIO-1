import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Cpu, Award, GraduationCap } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="section" style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Hero Left Content */}
          <div>
            {/* AI Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                color: '#00f2fe',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.15)',
              }}
            >
              <Sparkles size={16} className="floating" />
              <span>Available for Internships & AI Collaborations</span>
            </div>

            {/* Main Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1.2rem',
              }}
            >
              Hi, I'm <span className="gradient-text">Hari Ganesh J</span>
            </h1>

            {/* Tagline */}
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: '#e2e8f0',
                fontWeight: 600,
                marginBottom: '1.5rem',
                lineHeight: 1.4,
              }}
            >
              CS Student <span style={{ color: '#00f2fe' }}>|</span> Aspiring AI/ML Engineer <br />
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
                Building with Data, ML & LLMs
              </span>
            </h2>

            {/* Short Intro */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
                maxWidth: '640px',
                lineHeight: 1.7,
              }}
            >
              Computer Science & Engineering student at <strong style={{ color: '#fff' }}>VIT Chennai</strong>, concurrently pursuing a BS in Data Science & Applications at <strong style={{ color: '#fff' }}>IIT Madras</strong>. Dedicated to building intelligent systems with machine learning, generative AI, and data-driven architectures.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-outline">
                <Download size={18} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Icons & Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                CONNECT WITH ME:
              </span>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  color: 'var(--text-muted)',
                  padding: '0.55rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  color: 'var(--text-muted)',
                  padding: '0.55rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Github size={20} />
              </a>

              <a
                href="mailto:hariganesh.j2025@vitstudent.ac.in"
                aria-label="Email Hari"
                style={{
                  color: 'var(--text-muted)',
                  padding: '0.55rem',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.8), rgba(9, 13, 22, 0.9))',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.8rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-code)', color: 'var(--text-dim)' }}>
                  profile.py
                </span>
              </div>

              {/* Code Snippet Box */}
              <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <p><span style={{ color: '#ff79c6' }}>class</span> <span style={{ color: '#50fa7b' }}>AIEngineer</span>:</p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span style={{ color: '#ff79c6' }}>def</span> <span style={{ color: '#50fa7b' }}>__init__</span>(self):
                </p>
                <p style={{ paddingLeft: '2.4rem' }}>self.name = <span style={{ color: '#f1fa8c' }}>"Hari Ganesh J"</span></p>
                <p style={{ paddingLeft: '2.4rem' }}>self.institution_1 = <span style={{ color: '#f1fa8c' }}>"VIT Chennai (B.Tech CS)"</span></p>
                <p style={{ paddingLeft: '2.4rem' }}>self.institution_2 = <span style={{ color: '#f1fa8c' }}>"IIT Madras (BS Data Science)"</span></p>
                <p style={{ paddingLeft: '2.4rem' }}>self.focus = [<span style={{ color: '#f1fa8c' }}>"ML"</span>, <span style={{ color: '#f1fa8c' }}>"LLMs"</span>, <span style={{ color: '#f1fa8c' }}>"GenAI"</span>]</p>
                <p style={{ paddingLeft: '1.2rem' }}>
                  <span style={{ color: '#ff79c6' }}>def</span> <span style={{ color: '#50fa7b' }}>status</span>(self):
                </p>
                <p style={{ paddingLeft: '2.4rem' }}>
                  <span style={{ color: '#ff79c6' }}>return</span> <span style={{ color: '#f1fa8c' }}>"Ready to solve complex real-world problems!"</span>
                </p>
              </div>

              {/* Micro Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GraduationCap style={{ color: '#00f2fe' }} size={24} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Dual Degree</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>VIT & IIT Madras</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Cpu style={{ color: '#7f00ff' }} size={24} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>5+ Projects</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DBMS, ML, FinTech</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
