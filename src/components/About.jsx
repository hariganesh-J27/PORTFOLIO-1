import React from 'react';
import { User, BookOpen, Brain, Code2, Database, Compass } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <BookOpen className="gradient-text" size={28} />,
      title: 'Dual Degree Rigor',
      description: 'Concurrently pursuing B.Tech in CSE at VIT Chennai and BS in Data Science at IIT Madras, mastering both theoretical foundations and analytical data science.',
    },
    {
      icon: <Brain className="gradient-text" size={28} />,
      title: 'AI & ML Focused',
      description: 'Passionate about predictive modeling, deep learning architectures, Natural Language Processing (NLP), Generative AI, and Large Language Models (LLMs).',
    },
    {
      icon: <Database className="gradient-text" size={28} />,
      title: 'Data & Systems Engineering',
      description: 'Proficient in database design, SQL procedures, system performance optimization, memory management, and object-oriented software engineering.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">AI & Intelligent Systems</span>
          </h2>
          <p className="section-subtitle">
            Bridging computer science fundamentals with modern artificial intelligence & data science engineering.
          </p>
        </div>

        {/* Professional Summary Card */}
        <div
          className="glass-card"
          style={{
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.9), rgba(12, 17, 28, 0.9))',
            border: '1px solid rgba(0, 242, 254, 0.15)',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(20%, -20%)', width: '180px', height: '180px', background: 'rgba(0, 242, 254, 0.05)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#e2e8f0',
              fontWeight: 400,
            }}
          >
            "Computer Science and Engineering student at <strong style={{ color: '#00f2fe' }}>VIT Chennai</strong>, concurrently pursuing a BS in Data Science and Applications at <strong style={{ color: '#00f2fe' }}>IIT Madras</strong>. I possess a strong foundation in programming, problem-solving, and software engineering, with a focused interest in Artificial Intelligence, Machine Learning, Generative AI, and LLMs."
          </p>
        </div>

        {/* Highlights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {highlights.map((item, idx) => (
            <div key={idx} className="glass-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(0, 242, 254, 0.06)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
