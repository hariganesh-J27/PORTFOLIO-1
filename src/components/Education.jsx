import React from 'react';
import SimpleGraph from './SimpleGraph';

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: '#FDFFF5', position: 'relative', zIndex: 10, padding: '7rem 0 6rem 0', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>
        
        {/* Chapter 02 Title Watermark */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900, color: 'rgba(0, 0, 0, 0.08)', lineHeight: 0.9, marginBottom: '0.2rem', letterSpacing: '-0.02em' }}>
            02
          </div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', fontWeight: 700, color: '#71717a', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            CHAPTER 02
          </div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#000000', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>
            EDUCATION &amp; ACADEMIC TOPOLOGY
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#52525b', marginTop: '0.8rem', maxWidth: '800px', lineHeight: 1.65 }}>
            Interactive progression timeline tracking academic milestones across Sishya School, VIT Chennai, and IIT Madras.
          </p>
        </div>

        {/* React Bits Pro Simple Graph Component */}
        <SimpleGraph />

      </div>
    </section>
  );
}
