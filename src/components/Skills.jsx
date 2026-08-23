import React, { useState } from 'react';
import { Cpu, Code, Brain, Target, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Sparkles size={16} /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain size={16} /> },
    { id: 'dev', name: 'Programming & Web', icon: <Code size={16} /> },
    { id: 'core', name: 'Core Competencies', icon: <Target size={16} /> },
  ];

  const skillGroups = [
    {
      category: 'dev',
      categoryName: 'Programming & Web Engineering',
      icon: <Code style={{ color: '#00f2fe' }} size={22} />,
      skills: [
        { name: 'Python', level: 'Advanced', highlight: true },
        { name: 'C / C++', level: 'Proficient' },
        { name: 'SQL & Database Design', level: 'Advanced', highlight: true },
        { name: 'Data Structures & Algorithms (DSA)', level: 'Proficient' },
        { name: 'HTML5 & CSS3', level: 'Proficient' },
        { name: 'JavaScript (ES6+)', level: 'Proficient' },
        { name: 'Git & GitHub', level: 'Proficient' },
      ],
    },
    {
      category: 'ai',
      categoryName: 'Artificial Intelligence & Data Science',
      icon: <Brain style={{ color: '#7f00ff' }} size={22} />,
      skills: [
        { name: 'ML Fundamentals & Scikit-learn', level: 'Advanced', highlight: true },
        { name: 'Random Forest & Ensemble Methods', level: 'Advanced', highlight: true },
        { name: 'Deep Learning & Neural Networks', level: 'Intermediate' },
        { name: 'Natural Language Processing (NLP)', level: 'Intermediate' },
        { name: 'Generative AI & LLMs', level: 'Advanced', highlight: true },
        { name: 'Prompt Engineering', level: 'Proficient' },
        { name: 'Statistical Data Analysis', level: 'Proficient' },
      ],
    },
    {
      category: 'core',
      categoryName: 'Core Engineering Competencies',
      icon: <Target style={{ color: '#00f5a0' }} size={22} />,
      skills: [
        { name: 'Problem Solving & Logic', level: 'Core' },
        { name: 'Analytical & Mathematical Thinking', level: 'Core' },
        { name: 'Team Collaboration & Leadership', level: 'Core' },
        { name: 'Technical Presentation', level: 'Core' },
        { name: 'Time Management', level: 'Core' },
        { name: 'Database Fundamentals & Normalization', level: 'Core' },
      ],
    },
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(group => group.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive set of programming, machine learning, and core computer science competencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  background: isActive ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(127, 0, 255, 0.2))' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #00f2fe' : '1px solid var(--border-subtle)',
                  color: isActive ? '#00f2fe' : 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 15px rgba(0, 242, 254, 0.25)' : 'none',
                }}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="glass-card">
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {group.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                  {group.categoryName}
                </h3>
              </div>

              {/* Skills Badges Pill Grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="tech-pill"
                    style={{
                      padding: '0.55rem 1.1rem',
                      fontSize: '0.92rem',
                      background: skill.highlight ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                      border: skill.highlight ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid var(--border-subtle)',
                      boxShadow: skill.highlight ? '0 0 12px rgba(0, 242, 254, 0.1)' : 'none',
                    }}
                  >
                    <span style={{ fontWeight: 600, color: skill.highlight ? '#fff' : '#cbd5e1' }}>
                      {skill.name}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: skill.highlight ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                        color: skill.highlight ? '#00f2fe' : 'var(--text-dim)',
                        fontWeight: 600,
                        marginLeft: '0.3rem',
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
