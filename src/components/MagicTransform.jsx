import React, { useState } from 'react';
import { FileText, Sparkles, Calendar, Award, CheckCircle2, Cpu, Brain, BookOpen } from 'lucide-react';
import './MagicTransform.css';

const magicTransformData = {
  vit: {
    id: 'vit',
    name: 'VIT Chennai',
    docId: 'DOC-VIT-2025-CSE',
    degree: 'B.Tech in Computer Science & Engineering (Core)',
    period: '2025 — 2029 • Chennai, Tamil Nadu',
    badge: 'Premier Engineering Institute',
    themeColor: '#0284c7',
    icon: Cpu,
    docDesc: 'Direct enrollment in core computer systems engineering, low-level computing architectures, operating systems, and scalable relational databases.',
    outputTitle: 'Transformed Result: Systems & Algorithms Mastery',
    outputDesc: 'Rigorous algorithmic problem solving and low-level system design compiled into production-ready software capabilities.',
    metric: '300+ LeetCode DSA Problems & Kernel Foundations',
    breakdown: [
      {
        topic: 'Data Structures & Algorithms',
        badge: 'Core Problem Solving',
        detail: 'Arrays, Binary Search Trees, Graphs, Dynamic Programming & asymptotic complexity analysis.'
      },
      {
        topic: 'Operating Systems & Kernel Theory',
        badge: 'Systems Architecture',
        detail: 'CPU scheduling, POSIX multithreading, memory management, virtual paging & race synchronization.'
      },
      {
        topic: 'Database Management Systems (DBMS)',
        badge: 'Data Persistence',
        detail: 'Relational algebra, SQL schema normalization (1NF-BCNF), B-Tree indexing & ACID transactions.'
      },
      {
        topic: 'Computer Architecture & Low-Level C/C++',
        badge: 'Hardware Interface',
        detail: 'Pointer arithmetic, memory layout, register caches, and assembly instruction sets.'
      }
    ]
  },
  iitm: {
    id: 'iitm',
    name: 'IIT Madras',
    docId: 'DOC-IITM-2025-DS',
    degree: 'BS in Data Science & Applications',
    period: '2025 — 2029 • Chennai (Online / Hybrid)',
    badge: 'Top National Academic Program',
    themeColor: '#9333ea',
    icon: Brain,
    docDesc: 'Rigorous mathematical foundations in multivariate calculus, linear algebra, statistical learning, and deep neural network pipelines.',
    outputTitle: 'Transformed Result: Statistical AI & Mathematical Optimization',
    outputDesc: 'Theoretical mathematics synthesized into statistical learning, neural feature ranking, and enterprise predictive systems.',
    metric: 'Statistical Models & Deep Learning Pipelines',
    breakdown: [
      {
        topic: 'Linear Algebra & Matrix Decompositions',
        badge: 'Mathematical Foundations',
        detail: 'Vector spaces, eigenvalues, eigenvectors, Singular Value Decomposition (SVD) & PCA dimensionality reduction.'
      },
      {
        topic: 'Probability & Mathematical Statistics',
        badge: 'Inferential Analytics',
        detail: 'Random variables, Bayesian probability theorem, hypothesis testing & stochastic estimation.'
      },
      {
        topic: 'Machine Learning Practice & Algorithms',
        badge: 'Model Architecture',
        detail: 'Gradient descent, Support Vector Machines, Random Forests, XGBoost & Scikit-Learn pipelines.'
      },
      {
        topic: 'Deep Learning & Neural Networks',
        badge: 'AI Systems',
        detail: 'Backpropagation calculus, CNNs, PyTorch neural architectures, loss function optimization & weights.'
      }
    ]
  },
  sishya: {
    id: 'sishya',
    name: 'Sishya School, Hosur',
    docId: 'DOC-SISHYA-FOUNDATION',
    degree: 'Senior Secondary & Secondary Schooling',
    period: 'Completed • Hosur, Tamil Nadu',
    badge: 'Academic Excellence Foundation',
    themeColor: '#16a34a',
    icon: BookOpen,
    docDesc: 'Higher secondary schooling stream in Science and Higher Mathematics, building analytical acumen and empirical problem-solving discipline.',
    outputTitle: 'Transformed Result: Mathematical Logic & Scientific Acumen',
    outputDesc: 'Early foundational excellence converted into systematic analytical inquiry and structured computational thinking.',
    metric: 'Academic Distinction & Scientific Rigor',
    breakdown: [
      {
        topic: 'Higher Mathematics & Calculus',
        badge: 'Analytical Discipline',
        detail: 'Differential and integral calculus, trigonometry, coordinate geometry, functions & algebraic proofs.'
      },
      {
        topic: 'Physics & Mechanics',
        badge: 'Physical Modeling',
        detail: 'Newtonian mechanics, kinematics, electrostatics, electromagnetism, wave theory & optical physics.'
      },
      {
        topic: 'Chemistry & Empirical Sciences',
        badge: 'Empirical Laboratory',
        detail: 'Chemical kinetics, stoichiometry, organic reaction mechanisms & laboratory quantitative analysis.'
      },
      {
        topic: 'Computer Science & Logic Foundations',
        badge: 'Computational Logic',
        detail: 'Foundational algorithmic thinking, procedural program flowcharts, control structures & problem decomposition.'
      }
    ]
  }
};

export default function MagicTransform() {
  const [activeTab, setActiveTab] = useState('vit');
  const [isAnimating, setIsAnimating] = useState(false);

  const current = magicTransformData[activeTab];

  const handleTabChange = (key) => {
    if (key === activeTab) return;
    setIsAnimating(true);
    setActiveTab(key);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="magic-transform-container" id="magic-transform-wrapper">
      {/* Interactive Tabs */}
      <div className="magic-transform-tabs">
        <button
          className={`magic-tab-btn ${activeTab === 'vit' ? 'active' : ''}`}
          onClick={() => handleTabChange('vit')}
        >
          <span className="magic-tab-dot"></span>
          <span>VIT CHENNAI (B.TECH CSE)</span>
        </button>

        <button
          className={`magic-tab-btn ${activeTab === 'iitm' ? 'active' : ''}`}
          onClick={() => handleTabChange('iitm')}
        >
          <span className="magic-tab-dot"></span>
          <span>IIT MADRAS (BS DATA SCIENCE)</span>
        </button>

        <button
          className={`magic-tab-btn ${activeTab === 'sishya' ? 'active' : ''}`}
          onClick={() => handleTabChange('sishya')}
        >
          <span className="magic-tab-dot"></span>
          <span>SISHYA SCHOOL (FOUNDATION)</span>
        </button>
      </div>

      {/* 3-Column Arena */}
      <div className="magic-transform-arena">
        
        {/* Left: Input Document Flying In */}
        <div key={`doc-${activeTab}`} className="magic-doc-input-wrap magic-doc-flying-in">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
                  <FileText size={20} />
                </div>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  INGESTION DOC
                </span>
              </div>
              <span style={{ background: current.themeColor, color: '#FDFFF5', fontFamily: 'var(--font-code)', fontSize: '0.68rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {current.badge}
              </span>
            </div>

            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: current.themeColor, marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
              {current.docId}
            </div>

            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.55rem', fontWeight: 900, color: '#000000', margin: '0 0 0.35rem 0', lineHeight: 1.25 }}>
              {current.name}
            </h3>

            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              {current.degree}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#71717a', fontWeight: 600, marginBottom: '1.25rem' }}>
              <Calendar size={15} />
              <span>{current.period}</span>
            </div>

            <p style={{ color: '#52525b', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
              {current.docDesc}
            </p>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase' }}>
              Status: Ready to Transform
            </span>
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', fontWeight: 800, color: '#000000' }}>
              Flying into Prism →
            </span>
          </div>
        </div>

        {/* Center: Magic Transform Beam Machine / Prism */}
        <div className="magic-transform-prism">
          <div className="magic-beam-connector"></div>
          <div className="magic-prism-halo"></div>
          <div className="magic-prism-orb">
            <Sparkles size={28} />
          </div>
          <div className="magic-transform-label">
            MAGIC TRANSFORM
          </div>
        </div>

        {/* Right: Transformed Results Output & Curriculum Breakdown */}
        <div key={`res-${activeTab}`} className="magic-results-container magic-results-flying-out">
          <div className="magic-result-card" style={{ '--card-accent': current.themeColor }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: current.themeColor, display: 'inline-block' }}></span>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 800, color: current.themeColor, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {current.outputTitle}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, background: '#000000', color: '#FDFFF5', padding: '0.25rem 0.75rem', borderRadius: '50px' }}>
                {current.metric}
              </span>
            </div>

            <p style={{ color: '#27272a', fontSize: '0.94rem', line-height: 1.6, margin: '0 0 1rem 0' }}>
              {current.outputDesc}
            </p>

            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.72rem', fontWeight: 800, color: '#000000', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              Detailed Curriculum Breakdown &amp; Applied Knowledge:
            </div>

            <div className="magic-breakdown-grid">
              {current.breakdown.map((item, idx) => (
                <div key={idx} className="magic-breakdown-item">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.98rem', fontWeight: 800, color: '#000000', margin: 0 }}>
                      {item.topic}
                    </h4>
                    <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.45rem', borderRadius: '3px', background: `${current.themeColor}1a`, color: current.themeColor, border: `1px solid ${current.themeColor}33`, textTransform: 'uppercase' }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.55, margin: 0 }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
