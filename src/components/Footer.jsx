import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#060911',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0 2rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f2fe',
              }}
            >
              <Terminal size={20} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#fff' }}>
              Hari Ganesh <span className="gradient-text">J</span>
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Github size={20} />
            </a>

            <a
              href="mailto:hariganesh.j2025@vitstudent.ac.in"
              aria-label="Email"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Hari Ganesh J. Built for AI/ML Engineering & Academic Excellence.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Designed with AI Precision & Passion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
