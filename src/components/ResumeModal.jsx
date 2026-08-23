import React from 'react';
import { X, Download, Printer, GraduationCap, Award, Briefcase, Code, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#0d1322',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          padding: '2.5rem',
          position: 'relative',
          borderRadius: '1.25rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Controls Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
          className="no-print"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="section-badge" style={{ margin: 0 }}>Resume Document</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <Printer size={16} />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                padding: '0.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas Container */}
        <div id="resume-content" style={{ color: '#e2e8f0', lineHeight: 1.6 }}>
          
          {/* Header Info */}
          <div style={{ borderBottom: '2px solid rgba(0, 242, 254, 0.3)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '0.3rem' }}>
              Hari Ganesh J
            </h1>
            <p style={{ color: '#00f2fe', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.8rem' }}>
              CS Student | Aspiring AI/ML Engineer | Building with Data, ML & LLMs
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} style={{ color: '#00f2fe' }} />
                <span>hariganesh.j2025@vitstudent.ac.in</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={14} style={{ color: '#00f2fe' }} />
                <span>+91 6382924624</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} style={{ color: '#00f2fe' }} />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00f2fe', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Summary
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Computer Science and Engineering student at VIT Chennai, concurrently pursuing a BS in Data Science and Applications at IIT Madras. Strong foundation in programming, problem-solving, and software development, with a focused interest in AI, ML, Generative AI, and LLMs.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00f2fe', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Education
            </h2>
            
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff' }}>
                <span>B.Tech in Computer Science and Engineering (Core)</span>
                <span>2025 – 2029</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#00f2fe' }}>VIT Chennai</div>
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff' }}>
                <span>BS in Data Science and Applications</span>
                <span>2025 – 2029</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#7f00ff' }}>IIT Madras</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#fff' }}>
                <span>Senior Secondary & Secondary Schooling</span>
                <span>Completed</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Sishya School, Hosur</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00f2fe', marginBottom: '0.6rem' }}>
              Technical Skills
            </h2>
            <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <p><strong>Programming & Web:</strong> C, C++, Python, SQL, HTML, CSS, JavaScript, DSA, Git & GitHub</p>
              <p><strong>AI & ML:</strong> ML Fundamentals, Random Forest & Ensemble Methods, Deep Learning Basics, Neural Networks, NLP, Generative AI, LLMs, Prompt Engineering</p>
              <p><strong>Core Competencies:</strong> Problem Solving, Analytical Thinking, Team Collaboration, Time Management, Technical Presentation, Database Fundamentals</p>
            </div>
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00f2fe', marginBottom: '0.8rem' }}>
              Key Projects
            </h2>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontWeight: 700, color: '#fff' }}>Movie Ticket Booking System (DBMS & SQL)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Relational DB schema for seat booking, normalized architecture, stored procedures preventing double-booking.</p>
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontWeight: 700, color: '#fff' }}>Disease Prediction Using Random Forest (ML & Python)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Predictive ML pipeline using Scikit-learn with feature selection and hyperparameter tuning.</p>
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontWeight: 700, color: '#fff' }}>Hospital Management System (SQL & Database Design)</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Database schema for patient records, doctor scheduling, and billing management.</p>
            </div>
          </div>

          {/* Certifications & Hackathons */}
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00f2fe', marginBottom: '0.6rem' }}>
              Certifications & Hackathons
            </h2>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li>Introduction to Artificial Intelligence — Google, Cisco Networking Academy & AWS (2026)</li>
              <li>Introduction to Modern AI — Cisco Networking Academy (June 2026)</li>
              <li>Smart India Hackathon (SIH) 2025 — Participant & Team Presentation Lead</li>
            </ul>
          </div>

        </div>

      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-content, #resume-content * { visibility: visible; }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            color: #000 !important;
            background: #fff !important;
            padding: 20px;
          }
          #resume-content h1, #resume-content h2, #resume-content h3, #resume-content span, #resume-content p, #resume-content li {
            color: #000 !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
