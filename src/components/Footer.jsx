import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight, FiMail, FiPhoneCall } from 'react-icons/fi';
import logoImg from '../assets/image.png';

import { useTheme } from './ThemeContext';

const servicesLinks = [
  { name: 'UK LTD Formation', href: '#services' },
  { name: 'US LLC Formation', href: '#services' },
  { name: 'eCommerce Accounts', href: '#services' },
  { name: 'Account Management', href: '#services' },
  { name: 'Banking Solutions', href: '#services' },
  { name: 'Payment Gateways', href: '#services' },
  { name: 'Suspension Recovery', href: '#services' }
];

const companyLinks = [
  { name: 'About Us', href: '#why-us' },
  { name: 'Process Flow', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs Help', href: '#faqs' },
  { name: 'Contact Call', href: '#consultation' }
];

export default function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const canvasRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  // 3D Interactive Particle Constellation Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particleCount = 65;
    const particles = [];
    
    // Populate particles in a 3D bounding box
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * canvas.width * 0.8,
        y: (Math.random() - 0.5) * canvas.height * 0.8,
        z: Math.random() * 400 - 200,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
      });
    }

    // Mouse parallax tracking
    let mouse = { x: 0, y: 0, rx: 0, ry: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - rect.width / 2;
      mouse.y = e.clientY - rect.top - rect.height / 2;
    };

    const footerElement = canvas.closest('footer');
    if (footerElement) {
      footerElement.addEventListener('mousemove', handleMouseMove);
    }

    const perspective = 300;
    let angleY = 0.0008;
    let angleX = 0.0004;

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth lag interpolation for cursor offset
      mouse.rx += (mouse.x * 0.00004 - mouse.rx) * 0.05;
      mouse.ry += (mouse.y * 0.00004 - mouse.ry) * 0.05;

      const cosY = Math.cos(angleY + mouse.rx);
      const sinY = Math.sin(angleY + mouse.rx);
      const cosX = Math.cos(angleX + mouse.ry);
      const sinX = Math.sin(angleX + mouse.ry);

      const projected = [];

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Frame updates
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounding limits
        const boundaryX = canvas.width / 2;
        const boundaryY = canvas.height / 2;
        const boundaryZ = 200;

        if (Math.abs(p.x) > boundaryX) p.vx *= -1;
        if (Math.abs(p.y) > boundaryY) p.vy *= -1;
        if (Math.abs(p.z) > boundaryZ) p.vz *= -1;

        // 3D Rotations matrix
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective Projection calculation
        const scale = perspective / (perspective + z2);
        const projX = x1 * scale + canvas.width / 2;
        const projY = y2 * scale + canvas.height / 2;

        projected.push({ x: projX, y: projY, scale, z: z2 });

        // Draw glowing nodes (using canvas shadowBlur for a neon effect)
        const isGreen = i % 2 === 0;
        const color = isGreen ? '140, 198, 63' : '241, 90, 36';
        const hexColor = isGreen ? '#8CC63F' : '#F15A24';

        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(1.5, 3.5 * scale), 0, Math.PI * 2);
        
        ctx.shadowBlur = 8 * scale;
        ctx.shadowColor = hexColor;
        ctx.fillStyle = `rgba(${color}, ${0.28 * scale})`;
        ctx.fill();
        
        // Reset shadows for lines
        ctx.shadowBlur = 0;
      }

      // Draw faint connections between adjacent particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Increased line opacity for higher visibility
            const opacity = (1 - dist / 125) * 0.12 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (footerElement) {
        footerElement.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer 
      style={{
        backgroundColor: '#0B0D10',
        color: '#9ca3af',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        paddingTop: '80px',
        paddingBottom: '40px',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Canvas Background layer (low index, pointer-events none) */}
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle tricolor background glow inside the footer */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(241, 90, 36, 0.04) 0%, rgba(140, 198, 63, 0.02) 50%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* Main Content wrapper (forced above canvas via high z-index) */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Main 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>
          
          {/* Column 1: Brand Logo & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', margin: '-40px 0 -35px -24px' }}>
              <img 
                src={logoImg} 
                alt="TheCommercePk" 
                style={{ 
                  height: '140px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'invert(1) brightness(2)',
                }} 
              />
            </a>
            
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, marginBottom: '28px', color: '#9ca3af', textAlign: 'left' }}>
              Empowering local founders and agencies in Pakistan to establish fully-regulated business setups and merchant gateways globally.
            </p>

            {/* Circular Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <FaFacebookF />, url: 'https://facebook.com', label: 'Facebook' },
                { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
                { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FaWhatsapp />, url: 'https://wa.me/923000000000', label: 'WhatsApp' }
              ].map((soc, i) => (
                <a 
                  key={i}
                  href={soc.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d1d5db',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    textDecoration: 'none',
                  }}
                  className="social-hover-btn"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services List */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="footer-link-hover"
                    style={{
                      textDecoration: 'none',
                      color: '#9ca3af',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'all 250ms ease',
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company List */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="footer-link-hover"
                    style={{
                      textDecoration: 'none',
                      color: '#9ca3af',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'all 250ms ease',
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Subscription */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h4 style={{
              fontSize: '13px',
              fontWeight: 800,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}>Get in Touch</h4>
            
            {/* Contact channels with minimalist vector icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
              <a 
                href="mailto:info@thecommercepk.com" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  textDecoration: 'none', 
                  color: '#9ca3af', 
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 250ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                  <FiMail size={14} />
                </div>
                info@thecommercepk.com
              </a>

              <a 
                href="https://wa.me/923000000000" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  textDecoration: 'none', 
                  color: '#9ca3af', 
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 250ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                  <FiPhoneCall size={14} />
                </div>
                +92 300 0000000
              </a>
            </div>

            {/* Newsletter input */}
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '12px' }}>Newsletter</span>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', width: '100%', maxWidth: '260px', position: 'relative' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 48px 11px 16px',
                    borderRadius: '10px',
                    border: '1.5px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    color: '#ffffff',
                    outline: 'none',
                    fontSize: '13px',
                    transition: 'all 250ms ease',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-orange)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    bottom: '5px',
                    width: '32px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'transform 200ms ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                  aria-label="Subscribe"
                >
                  <FiArrowRight />
                </button>
              </form>
            ) : (
              <span style={{ fontSize: '13px', color: 'var(--accent-green)', fontWeight: 700 }}>
                ✓ Subscribed successfully!
              </span>
            )}
          </div>

        </div>

        {/* Bottom bar with divider */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '12.5px',
          color: '#6b7280',
        }}>
          <span>&copy; 2026 TheCommercePk. All rights reserved.</span>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" className="bottom-link-hover" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 200ms ease' }}>Privacy Policy</a>
            <a href="#" className="bottom-link-hover" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 200ms ease' }}>Terms & Conditions</a>
          </div>
        </div>

      </div>

      {/* Embedded CSS for premium link shifts and social hovers */}
      <style>{`
        .social-hover-btn:hover {
          border-color: transparent !important;
          background: linear-gradient(135deg, #F15A24 0%, #F7941D 100%) !important;
          color: #ffffff !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(241, 90, 36, 0.25);
        }
        
        .footer-link-hover:hover {
          color: var(--accent-orange) !important;
          transform: translateX(4px);
        }
        
        .bottom-link-hover:hover {
          color: #ffffff !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
}
