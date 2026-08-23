import React from 'react';
import { ShieldCheck, Award, Cloud, ArrowRight } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      id: 'modern-ai',
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      date: '18 JUN 2026',
      certId: '4a064784-5312-49df-a58e',
      image: '/google_cert.jpg',
      icon: Award,
      description: 'Intelligent agent architectures, modern neural networks, and AI decision systems engineered for production deployment.',
    },
    {
      id: 'data-science',
      title: 'Introduction to Data Science',
      issuer: 'Cisco Networking Academy',
      date: '19 JUN 2026',
      certId: '7b0c05ed-7d36-4ab9-97e0',
      image: '/cisco_cert.jpg',
      icon: Award,
      description: 'Python analytics pipelines, statistical inferencing, computational data models, and exploratory pattern discovery.',
    },
    {
      id: 'aws-agentic',
      title: 'Agentic AI on AWS',
      issuer: 'AWS Training & Certification',
      date: '24 JUN 2026',
      certId: 'AWS Official Certificate',
      image: '/aws_cert.jpg',
      icon: Cloud,
      description: 'Amazon Bedrock foundation models, autonomous tool calling, multi-agent frameworks, and cloud deployment pipelines.',
    },
  ];

  return (
    <section id="certificates" className="section" style={{ background: '#FDFFF5', padding: '7rem 0 6rem 0', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Chapter 04 Title Watermark */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'left' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900, color: 'rgba(0, 0, 0, 0.08)', lineHeight: 0.9, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
            04
          </div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            CHAPTER 04
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#000000', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
            VERIFIED CERTIFICATIONS
          </h2>
        </div>

        {/* 3-Column Certificates Grid */}
        <div className="cert-three-col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          {certifications.map((cert) => {
            const IconComp = cert.icon;
            return (
              <div key={cert.id} className="cert-interactive-card cert-card-trigger" data-cert={cert.id}>
                <div>
                  <div className="cert-image-box">
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div className="cert-icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.06)', border: '1px solid rgba(0, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000000', transition: 'all 0.3s ease' }}>
                      <IconComp size={22} />
                    </div>
                    <span className="cert-badge-date" style={{ background: '#000000', color: '#FDFFF5', padding: '0.25rem 0.75rem', borderRadius: '4px', fontFamily: 'var(--font-code)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', transition: 'all 0.3s ease' }}>
                      {cert.date}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 800, color: '#000000', margin: '0 0 0.35rem 0', transition: 'color 0.3s ease' }}>
                    {cert.title}
                  </h3>
                  <div className="cert-issuer" style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.85rem', transition: 'color 0.3s ease' }}>
                    {cert.issuer}
                  </div>
                  <p className="cert-desc" style={{ color: '#52525b', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.25rem 0', transition: 'color 0.3s ease' }}>
                    {cert.description}
                  </p>
                </div>
                <div>
                  <div className="cert-id-tag" style={{ background: 'rgba(0, 0, 0, 0.05)', border: '1px solid rgba(0, 0, 0, 0.12)', padding: '0.6rem 0.85rem', borderRadius: '6px', fontFamily: 'var(--font-code)', fontSize: '0.74rem', color: '#000000', marginBottom: '1rem', transition: 'all 0.3s ease' }}>
                    <span className="cert-id-label" style={{ fontSize: '0.65rem', color: '#71717a', display: 'block', fontWeight: 700, textTransform: 'uppercase', transition: 'color 0.3s ease' }}>
                      Cert ID / Verification
                    </span>
                    <span style={{ fontWeight: 600, wordBreak: 'break-all' }}>{cert.certId}</span>
                  </div>
                  <button className="btn cert-action-btn" style={{ width: '100%', justifyContent: 'center', padding: '0.65rem 1rem', fontSize: '0.82rem', fontFamily: 'var(--font-code)', fontWeight: 700, background: '#000000', color: '#FDFFF5', border: '1px solid #000000', borderRadius: '6px', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.3s ease' }}>
                    <span>Inspect Credential</span>
                    <ArrowRight size={14} style={{ marginLeft: '0.4rem' }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Directory */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/credentials.html" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', border: '1.5px solid #000000', fontWeight: 700 }}>
            <span>View Complete Credentials &amp; Verification Directory</span>
          </a>
        </div>

      </div>
    </section>
  );
}
