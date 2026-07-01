import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMessageSquare, FiFileText, FiCpu, FiShield, FiCheckCircle } from 'react-icons/fi';

import { useTheme } from './ThemeContext';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We meet to analyze your goals and establish your target incorporation path.',
    icon: <FiMessageSquare />,
    color: '#F7941D',
    bgGlow: 'rgba(247, 148, 29, 0.08)'
  },
  {
    num: '02',
    title: 'Documentation',
    desc: 'We verify your registry credentials and prepare all required documentation.',
    icon: <FiFileText />,
    color: '#F15A24',
    bgGlow: 'rgba(241, 90, 36, 0.08)'
  },
  {
    num: '03',
    title: 'Setup & Registration',
    desc: 'We register your company, banking routing numbers, and payment merchants.',
    icon: <FiCpu />,
    color: '#8CC63F',
    bgGlow: 'rgba(140, 198, 63, 0.08)'
  },
  {
    num: '04',
    title: 'Verification',
    desc: 'We complete legal and compliance reviews to clear security checks.',
    icon: <FiShield />,
    color: '#F15A24',
    bgGlow: 'rgba(241, 90, 36, 0.08)'
  },
  {
    num: '05',
    title: 'Handover & Support',
    desc: "Your setup is officially live and handed over with continuous ongoing support.",
    icon: <FiCheckCircle />,
    color: '#8CC63F',
    bgGlow: 'rgba(140, 198, 63, 0.08)'
  }
];

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  
  // Track scroll progress of this section to progressive-fill the timeline path
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // progressive fill animations mapping - starts drawing when cards are clearly visible (35% into scroll range)
  const pathProgress = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      style={{ 
        padding: '100px 0',
        backgroundColor: 'var(--bg-primary)', 
        overflow: 'hidden', 
        transition: 'var(--theme-transition)',
        position: 'relative',
      }}
    >
      {/* Background glow flares */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(241, 90, 36, 0.03) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span 
            className="tag-pill"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--accent-orange)',
              backgroundColor: 'rgba(241, 90, 36, 0.08)',
              padding: '6px 14px',
              borderRadius: '999px',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            Our Process
          </span>
          <h2 
            className="heading-h2" 
            style={{ 
              marginTop: '0px', 
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              color: 'var(--text-primary)',
            }}
          >
            How It Works
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '580px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Our streamlined end-to-end framework maps your registration path securely and transparently.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', width: '100%', minHeight: '520px' }}>
          
          {/* DESKTOP TIMELINE (Horizontal Wavy Curve) */}
          <div className="desktop-timeline hidden lg:block" style={{ width: '100%', height: '500px', position: 'relative' }}>
            
            {/* SVG Wavy Path Container */}
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
            }}>
              <svg 
                viewBox="0 0 1000 480" 
                width="100%" 
                height="100%" 
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Linear gradient mapping the brand spectrum */}
                  <linearGradient id="timeline-path-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F7941D" />
                    <stop offset="50%" stopColor="#F15A24" />
                    <stop offset="100%" stopColor="#8CC63F" />
                  </linearGradient>
                </defs>

                {/* Background dotted wave path */}
                <path 
                  d="M 0,240 C 30,240 70,120 100,240 C 150,380 250,380 300,240 C 350,100 450,100 500,240 C 550,380 650,380 700,240 C 750,100 850,100 900,240 C 930,240 970,240 1000,240"
                  fill="none"
                  stroke={theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(17,24,39,0.08)'}
                  strokeWidth="3.5"
                  strokeDasharray="6 8"
                />

                {/* Animated active gradient wave path */}
                <motion.path 
                  d="M 0,240 C 30,240 70,120 100,240 C 150,380 250,380 300,240 C 350,100 450,100 500,240 C 550,380 650,380 700,240 C 750,100 850,100 900,240 C 930,240 970,240 1000,240"
                  fill="none"
                  stroke="url(#timeline-path-grad)"
                  strokeWidth="4"
                  style={{ pathLength: pathProgress }}
                />
              </svg>
            </div>

            {/* Alternating Steps Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              position: 'relative',
              zIndex: 10,
              width: '100%',
              height: '480px',
            }}>
              {steps.map((step, idx) => {
                const isOdd = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    style={{
                      display: 'grid',
                      gridTemplateRows: '1fr 64px 1fr',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    
                    {/* Top Row: Card (for odd steps) */}
                    {isOdd ? (
                      <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        style={{
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          border: '1.5px solid var(--glass-border)',
                          borderRadius: '20px',
                          boxShadow: 'var(--glass-shadow)',
                          padding: '24px 20px',
                          margin: '0 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '12px',
                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'all 300ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-6px)';
                          e.currentTarget.style.borderColor = step.color;
                          e.currentTarget.style.boxShadow = `0 12px 24px ${step.bgGlow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.borderColor = 'var(--glass-border)';
                          e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                      >
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: step.bgGlow,
                          color: step.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                        }}>
                          {step.icon}
                        </div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <div />
                    )}

                    {/* Middle Row: Connecting Number Node */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <motion.div
                        whileInView={{ scale: [0.8, 1.1, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'var(--primary-gradient)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontSize: '15px',
                          border: '4px solid var(--bg-primary)',
                          boxShadow: 'var(--shadow-sm)',
                          zIndex: 15,
                        }}
                      >
                        {step.num}
                      </motion.div>
                    </div>

                    {/* Bottom Row: Card (for even steps) */}
                    {!isOdd ? (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        style={{
                          background: 'var(--glass-bg)',
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          border: '1.5px solid var(--glass-border)',
                          borderRadius: '20px',
                          boxShadow: 'var(--glass-shadow)',
                          padding: '24px 20px',
                          margin: '0 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '12px',
                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'all 300ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(6px)';
                          e.currentTarget.style.borderColor = step.color;
                          e.currentTarget.style.boxShadow = `0 -12px 24px ${step.bgGlow}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.borderColor = 'var(--glass-border)';
                          e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                      >
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: step.bgGlow,
                          color: step.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                        }}>
                          {step.icon}
                        </div>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <div />
                    )}

                  </div>
                );
              })}
            </div>

          </div>

          {/* MOBILE TIMELINE (Vertical - Line left, cards stacked right) */}
          <div className="mobile-timeline block lg:hidden" style={{ position: 'relative', paddingLeft: '48px' }}>
            
            {/* Vertical Connecting Line */}
            <div style={{
              position: 'absolute',
              left: '18px',
              top: '10px',
              bottom: '10px',
              width: '3px',
              backgroundColor: 'var(--border-color)',
              zIndex: 1,
            }} />

            {/* Vertical Fill Progress Line */}
            <motion.div
              style={{
                position: 'absolute',
                left: '18px',
                top: '10px',
                bottom: '10px',
                width: '3px',
                background: 'linear-gradient(to bottom, #F7941D, #F15A24, #8CC63F)',
                zIndex: 2,
                originY: 0,
                scaleY: pathProgress,
              }}
            />

            {/* Stacked cards list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Floating Number Node */}
                  <div style={{
                    position: 'absolute',
                    left: '-48px',
                    top: '2px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--primary-gradient)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '13px',
                    border: '3px solid var(--bg-primary)',
                    zIndex: 10,
                  }}>
                    {step.num}
                  </div>

                  {/* Card content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1.5px solid var(--glass-border)',
                      borderRadius: '16px',
                      boxShadow: 'var(--glass-shadow)',
                      padding: '24px 20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: step.bgGlow,
                        color: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '15px',
                      }}>
                        {step.icon}
                      </div>
                      <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                        {step.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {step.desc}
                    </p>
                  </motion.div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .desktop-timeline { display: none !important; }
          .mobile-timeline { display: block !important; }
        }
      `}</style>
    </section>
  );
}
