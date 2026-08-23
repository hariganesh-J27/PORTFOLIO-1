import React, { useState } from 'react';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollVelocity from './components/ScrollVelocity';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Hackathons from './components/Hackathons';
import Objective from './components/Objective';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: '#FDFFF5', color: '#000000' }}>
      {/* React Bits OGL 3D Particles Background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <Particles
          particleColors={['#000000', '#18181b', '#27272a']}
          particleCount={200}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Page Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ScrollVelocity
          texts={[
            'AI & ML • DEEP LEARNING • IOT TELEMETRY • CLOUD AI AGENTS • AUTONOMOUS ROBOTICS',
            'DEEP VISION SYSTEMS • PYTORCH & ROS2 • EDGE COMPUTING • DUAL-DEGREE SCHOLAR • HIGH-PERFORMANCE MLOPS'
          ]}
          velocity={80}
        />
        <About />
        <Education />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Objective />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
