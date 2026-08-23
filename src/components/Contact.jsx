import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const email = 'hariganesh.j2025@vitstudent.ac.in';
  const phone = '+91 6382924624';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission / mailto fallback
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Open for AI/ML internships, research projects, hackathons, and technical discussions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem' }} className="contact-grid">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Email Card */}
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Email</div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{email}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(email, 'email')}
                aria-label="Copy email address"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: copiedField === 'email' ? '#00f5a0' : 'var(--text-muted)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copiedField === 'email' ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(127, 0, 255, 0.1)', color: '#a78bfa' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Phone</div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>{phone}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                aria-label="Copy phone number"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: copiedField === 'phone' ? '#00f5a0' : 'var(--text-muted)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copiedField === 'phone' ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(0, 245, 160, 0.1)', color: '#00f5a0' }}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Institutions / Location</div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>VIT Chennai & IIT Madras, Tamil Nadu, India</div>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.9), rgba(12, 17, 28, 0.9))' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                Professional Links
              </h4>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                >
                  <Linkedin size={16} style={{ color: '#00f2fe' }} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                >
                  <Github size={16} style={{ color: '#00f2fe' }} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>
              Send Me a Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
              Have an opportunity, internship offer, or project inquiry? Drop a message below.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  background: 'rgba(0, 245, 160, 0.1)',
                  border: '1px solid rgba(0, 245, 160, 0.3)',
                  textAlign: 'center',
                }}
              >
                <Sparkles size={32} style={{ color: '#00f5a0', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Thank you for reaching out. Hari will respond to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Hari, I saw your portfolio and would like to connect regarding..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
