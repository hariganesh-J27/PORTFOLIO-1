import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, Database, Cpu, Activity, CreditCard, Film, Clock } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Movie Ticket Booking System',
      category: 'dbms',
      categoryLabel: 'DBMS & Database Architecture',
      icon: <Film style={{ color: '#00f2fe' }} size={24} />,
      tech: ['DBMS', 'SQL', 'Database Design', 'Stored Procedures', 'Relational Schema'],
      description: 'Comprehensive relational database design and application logic for a high-concurrency movie ticket reservation platform.',
      bullets: [
        'Designed normalized relational schema covering Users, Movies, Theatres, Shows, Seats, Bookings, and Payments.',
        'Engineered stored procedures & ACID-compliant transactions to prevent double-booking of seats during concurrent transactions.',
        'Optimized query execution paths and indexing strategies for sub-second seat availability lookups.',
      ],
      github: 'https://github.com',
      badge: 'Featured Project',
    },
    {
      id: 2,
      title: 'Disease Prediction Using Random Forest',
      category: 'aiml',
      categoryLabel: 'Machine Learning & Healthcare AI',
      icon: <Activity style={{ color: '#00f5a0' }} size={24} />,
      tech: ['Python', 'Scikit-Learn', 'Random Forest', 'Machine Learning', 'Pandas', 'NumPy'],
      description: 'Predictive machine learning pipeline designed to assess disease likelihood from patient diagnostic parameters.',
      bullets: [
        'Performed thorough data preprocessing, outlier removal, missing value imputation, and feature scaling.',
        'Executed feature selection and hyperparameter tuning to achieve high cross-validation accuracy and minimal false negatives.',
        'Trained ensemble Random Forest models and generated feature importance visualizations.',
      ],
      github: 'https://github.com',
      badge: 'AI / ML Spotlight',
    },
    {
      id: 3,
      title: 'Hospital Management System',
      category: 'dbms',
      categoryLabel: 'SQL & Database Engineering',
      icon: <Database style={{ color: '#4facfe' }} size={24} />,
      tech: ['SQL', 'Relational DB Design', 'PostgreSQL / MySQL', 'Data Modeling'],
      description: 'End-to-end database management system for hospital operations, patient records, staff scheduling, and billing.',
      bullets: [
        'Structured complex entity-relationship (ER) diagrams connecting Patients, Medical Staff, Appointments, Diagnostics, and Invoices.',
        'Implemented stored procedures for automated patient registration, appointment slot allocation, and history retrieval.',
        'Applied role-based data view security for sensitive medical record management.',
      ],
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Operating Systems Simulation Suite',
      category: 'systems',
      categoryLabel: 'Systems Programming & C/C++',
      icon: <Cpu style={{ color: '#7f00ff' }} size={24} />,
      tech: ['C / C++', 'Operating Systems', 'Process Scheduling', 'Memory Allocation', 'Concurrency'],
      description: 'Simulation environment for low-level operating system algorithms including process management and memory allocation.',
      bullets: [
        'Simulated CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority Scheduling) to compare turnaround & waiting times.',
        'Implemented process synchronization primitives (Semaphores, Mutexes) solving classic concurrency problems.',
        'Simulated dynamic memory allocation algorithms (First Fit, Best Fit, Worst Fit) and page replacement mechanisms.',
      ],
      github: 'https://github.com',
      badge: 'In Progress',
      inProgress: true,
    },
    {
      id: 5,
      title: 'FinTech Web Application',
      category: 'web',
      categoryLabel: 'Web Engineering & Frontend UI',
      icon: <CreditCard style={{ color: '#ffb703' }} size={24} />,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Flexbox & Grid'],
      description: 'Modern, high-performance web dashboard for personal financial tracking, investment overview, and expense metrics.',
      bullets: [
        'Translated wireframe concepts into a pixel-perfect, responsive frontend user interface.',
        'Utilized semantic HTML5 and modern CSS Flexbox/Grid for fluid layout adaptability across screen sizes.',
        'Integrated interactive client-side JavaScript for dynamic DOM updates and budget analytics preview.',
      ],
      github: 'https://github.com',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'dbms', label: 'DBMS & SQL' },
    { id: 'systems', label: 'Systems (C/C++)' },
    { id: 'web', label: 'Web Engineering' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Key Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore my work in AI/ML model development, relational database systems, and low-level software engineering.
          </p>
        </div>

        {/* Project Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  background: isActive ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(127, 0, 255, 0.2))' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #00f2fe' : '1px solid var(--border-subtle)',
                  color: isActive ? '#00f2fe' : 'var(--text-muted)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 15px rgba(0, 242, 254, 0.2)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {project.icon}
                  </div>

                  {project.badge && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: project.inProgress
                          ? 'rgba(255, 183, 3, 0.12)'
                          : 'rgba(0, 242, 254, 0.12)',
                        border: project.inProgress
                          ? '1px solid rgba(255, 183, 3, 0.4)'
                          : '1px solid rgba(0, 242, 254, 0.4)',
                        color: project.inProgress ? '#ffb703' : '#00f2fe',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      {project.inProgress && <Clock size={12} />}
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <ul style={{ listStyle: 'disc', paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Footer Row: Tech Stack Pills & GitHub Button */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-code)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: '#94a3b8',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                >
                  <Github size={16} />
                  <span>View Code on GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
