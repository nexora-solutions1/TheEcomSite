import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiFileText, FiUserCheck, FiZap } from 'react-icons/fi';

import { useTheme } from './ThemeContext';

const subServices = [
  {
    icon: <FiFileText />,
    title: 'Appeal Writing & POA',
    desc: 'Bespoke Plan of Action letters addressing compliance parameters.',
  },
  {
    icon: <FiAlertTriangle />,
    title: 'Policy Violations Fixes',
    desc: 'Deep audit of backend inventory and account health triggers.',
  },
  {
    icon: <FiUserCheck />,
    title: 'Identity Verification Support',
    desc: 'Document alignment checks for passports and utility bills.',
  },
  {
    icon: <FiZap />,
    title: 'Direct Escalation',
    desc: 'Escalated queue routing to speed up account review intervals.',
  },
];

export default function SuspensionSpotlight() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);

  // 3D Security Mesh Grid Background
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

    // Grid details (sized to cover full viewport)
    const cols = 20;
    const rows = 15;
    
    let time = 0;
    let mouse = { x: 0, y: 0, rx: 0, ry: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - rect.width / 2;
      mouse.y = e.clientY - rect.top - rect.height / 2;
    };

    const parentElement = canvas.closest('.spotlight-container') || canvas.parentElement;
    if (parentElement) {
      parentElement.addEventListener('mousemove', handleMouseMove);
    }

    const perspective = 300;

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.02;

      // Smooth lag rotation for mouse tilt
      mouse.rx += (mouse.x * 0.00008 - mouse.rx) * 0.05;
      mouse.ry += (mouse.y * 0.00008 - mouse.ry) * 0.05;

      // Forward-facing perspective rotation to cover the full card area
      const angleX = 0.35 + mouse.ry; 
      const angleY = mouse.rx;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Compute dynamic spacing to scale perfectly with card canvas resizing
      const spacingX = canvas.width / (cols - 1);
      const spacingY = (canvas.height * 1.2) / (rows - 1);

      const projectedGrid = [];

      // Calculate 3D grid vertices spanning the full background
      for (let r = 0; r < rows; r++) {
        const rowArr = [];
        for (let c = 0; c < cols; c++) {
          const rawX = (c - cols / 2) * spacingX;
          const rawY = (r - rows / 2) * spacingY;
          
          // Flowing sine-wave mathematical model
          const waveZ = Math.sin(c * 0.35 + time) * 22 + Math.cos(r * 0.35 + time) * 16;
          
          // Y rotation matrix
          let x1 = rawX * cosY - waveZ * sinY;
          let z1 = waveZ * cosY + rawX * sinY;

          // X rotation matrix
          let y2 = rawY * cosX - z1 * sinX;
          let z2 = z1 * cosX + rawY * sinX;

          // Project to 2D centered on canvas vertically
          const scale = perspective / (perspective + z2);
          const projX = x1 * scale + canvas.width / 2;
          const projY = y2 * scale + canvas.height / 2; // Center vertically to cover entire background

          rowArr.push({ x: projX, y: projY, scale, visible: z2 > -perspective });
        }
        projectedGrid.push(rowArr);
      }

      // Draw grid segments
      ctx.lineWidth = 0.8;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const current = projectedGrid[r][c];
          if (!current.visible) continue;

          // Connect to right neighbor node
          if (c < cols - 1) {
            const right = projectedGrid[r][c + 1];
            if (right.visible) {
              ctx.beginPath();
              ctx.moveTo(current.x, current.y);
              ctx.lineTo(right.x, right.y);
              const opacity = (0.12 * Math.min(current.scale, right.scale));
              ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})`;
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor node
          if (r < rows - 1) {
            const down = projectedGrid[r + 1][c];
            if (down.visible) {
              ctx.beginPath();
              ctx.moveTo(current.x, current.y);
              ctx.lineTo(down.x, down.y);
              const opacity = (0.12 * Math.min(current.scale, down.scale));
              ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})`;
              ctx.stroke();
            }
          }

          // Draw small intersections dots on a subset
          if (r % 2 === 0 && c % 2 === 0) {
            ctx.beginPath();
            ctx.arc(current.x, current.y, 2.5 * current.scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(239, 68, 68, ${0.2 * current.scale})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (parentElement) {
        parentElement.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerStyle = {
    backgroundColor: '#111317', // Darker background to make the glowing red grid pop
    borderRadius: '24px',
    padding: '64px 44px',
    position: 'relative',
    overflow: 'hidden',
    border: '1.5px solid rgba(239, 68, 68, 0.25)',
    boxShadow: '0 24px 48px rgba(239, 68, 68, 0.06)',
  };

  return (
    <section 
      id="suspension" 
      style={{ 
        backgroundColor: 'var(--bg-primary)', 
        transition: 'var(--theme-transition)',
        padding: '100px 0',
      }}
    >
      <div className="container">
        
        <div style={containerStyle} className="spotlight-container">
          
          {/* 3D Security Mesh Canvas Layer */}
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

          {/* Pulsing red-orange background glow behind shield */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 2,
          }} className="shield-glow-pulse" />

          {/* Core Content (forced above canvas via zIndex 10) */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
              
              {/* Left Column: Urgency Details */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                
                {/* Eyebrow tag in red-orange */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#ff553b',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <FiAlertTriangle /> Urgent Support
                </div>

                {/* Shield + checkmark icon with pulsing container */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(239, 68, 68, 0.15)',
                    color: '#ff553b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}>
                    <FiShield />
                  </div>
                  <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Compliance & Security Reinstatement
                  </span>
                </div>

                {/* Heading */}
                <h2 className="heading-h2" style={{
                  color: '#ffffff',
                  fontSize: 'clamp(28px, 4.5vw, 42px)',
                  lineHeight: 1.15,
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '20px',
                  textAlign: 'left',
                }}>
                  Account Suspended? <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #ff553b 0%, #F7941D 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>We'll Get You Reinstated.</span>
                </h2>

                {/* Paragraph */}
                <p style={{
                  color: '#d1d5db',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  textAlign: 'left',
                  maxWidth: '520px',
                  marginBottom: '36px',
                }}>
                  Don’t panic or submit copy-pasted templates. We draft custom Plan of Action appeals and execute escalation filings to restore your suspended Amazon, eBay, Wise, Stripe, or TikTok Shop accounts.
                </p>

                {/* Emergency CTA button */}
                <motion.a
                  href="#consultation"
                  className="btn"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, #ff553b 0%, #F7941D 100%)',
                    boxShadow: '0 4px 14px rgba(239, 68, 68, 0.3)',
                    color: '#ffffff',
                    padding: '14px 32px',
                    fontWeight: 700,
                  }}
                >
                  Get Emergency Help
                </motion.a>

              </div>

              {/* Right Column: 2x2 Glass Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                width: '100%',
              }}>
                {subServices.map((service, index) => (
                  <div
                    key={index}
                    className="pulse-border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '16px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      transition: 'transform 250ms ease, background-color 250ms ease, border-color 250ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    }}
                  >
                    
                    {/* Icon container */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.15)',
                      color: '#ff553b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}>
                      {service.icon}
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                        {service.title}
                      </h4>
                      <p style={{ fontSize: '12px', lineHeight: 1.45, color: '#9ca3af', margin: 0 }}>
                        {service.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* CSS Keyframes for slow breathing border pulse and glow */}
      <style>{`
        @keyframes border-breathing {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.06);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
          50% {
            border-color: rgba(239, 68, 68, 0.3);
            box-shadow: 0 4px 20px rgba(239, 68, 68, 0.05);
          }
        }
        .pulse-border {
          animation: border-breathing 2.5s ease-in-out infinite;
        }

        @keyframes shield-glow-breathing {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }
        .shield-glow-pulse {
          animation: shield-glow-breathing 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
