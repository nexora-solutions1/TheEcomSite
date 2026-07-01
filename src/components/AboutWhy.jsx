import React from 'react';
import { motion as motionFramer } from 'framer-motion';
import { FiCheck, FiCpu, FiMessageSquare, FiTrendingUp, FiAlertTriangle } from 'react-icons/fi';

const features = [
  {
    icon: <FiCpu />,
    title: 'Full-Service, Not Just Registration',
    desc: 'We handle ongoing filings, registered agents, and bookkeeping—not just initial registrations.',
  },
  {
    icon: <FiMessageSquare />,
    title: 'Real Humans, Fast Response',
    desc: 'No automated bots. Our dedicated Pakistani incorporation desks respond on WhatsApp in minutes.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Bank & Gateway Approval Expertise',
    desc: 'We guide you step-by-step throughWise verification audits and clean Stripe merchant setups.',
  },
  {
    icon: <FiAlertTriangle />,
    title: 'Suspension Recovery Specialists',
    desc: 'If your payment channels lock, our team handles custom legal appeals to restore business flow.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  },
};

export default function AboutWhy() {
  return (
    <section id="why-us" style={{ backgroundColor: 'var(--bg-primary)', transition: 'var(--theme-transition)' }}>
      <div className="container">
        
        {/* Asymmetric Two-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'center',
        }} className="why-grid">
          
          {/* Left Column: Stacked Collage */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} className="collage-container">
            
            {/* Collage Image 1 (Back left) */}
            <motionFramer.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'absolute',
                top: '10%',
                left: '8%',
                width: '240px',
                height: '260px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(247, 148, 29, 0.1) 0%, rgba(241, 90, 36, 0.1) 100%)',
                border: '1.5px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)',
              }}
              className="collage-back"
            >
              {/* Premium Globe Grid Line abstract illustration */}
              <svg width="140" height="140" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.6 }}>
                <circle cx="50" cy="50" r="40" stroke="var(--accent-orange)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M10 50H90" stroke="var(--accent-orange)" strokeWidth="1.5" />
                <path d="M50 10V90" stroke="var(--accent-orange)" strokeWidth="1.5" />
                <path d="M20 30C35 40 65 40 80 30" stroke="var(--accent-orange)" strokeWidth="1.5" />
                <path d="M20 70C35 60 65 60 80 70" stroke="var(--accent-orange)" strokeWidth="1.5" />
              </svg>
            </motionFramer.div>

            {/* Collage Image 2 (Front right overlapping) */}
            <motionFramer.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '12%',
                width: '220px',
                height: '240px',
                borderRadius: '16px',
                backgroundColor: 'var(--card-bg)',
                border: '1.5px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--theme-transition)',
              }}
              className="collage-front"
            >
              {/* Dashboard charts mockup */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffa43a' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#1fdba1' }} />
              </div>
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
                <div style={{ height: '8px', width: '70%', backgroundColor: 'var(--border-color)', borderRadius: '4px' }} />
                <div style={{ height: '8px', width: '50%', backgroundColor: 'var(--border-color)', borderRadius: '4px' }} />
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '60px', marginTop: '10px' }}>
                  <div style={{ width: '25%', height: '40%', background: 'var(--primary-gradient)', borderRadius: '3px' }} />
                  <div style={{ width: '25%', height: '70%', background: 'var(--primary-gradient)', borderRadius: '3px' }} />
                  <div style={{ width: '25%', height: '55%', background: 'var(--primary-gradient)', borderRadius: '3px' }} />
                  <div style={{ width: '25%', height: '90%', background: 'var(--primary-gradient)', borderRadius: '3px' }} />
                </div>
              </div>
            </motionFramer.div>

            {/* Overlapping Bottom-Right Compliant Badge */}
            <motionFramer.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '4%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'var(--card-bg)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '999px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 20,
              }}
              className="floating-badge"
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>
                <FiCheck />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>
                100% Compliant Setups
              </span>
            </motionFramer.div>

          </div>

          {/* Right Column: Title and 2x2 Feature Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            <span className="tag-pill" style={{ marginBottom: '16px' }}>Why Us</span>
            
            <h2 className="heading-h2" style={{ 
              fontSize: 'clamp(28px, 4vw, 36px)', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '20px'
            }}>
              Your One Partner for Company Formation to Scale
            </h2>

            <p style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '580px',
            }}>
              Setting up a company registry is only the first step. We handle banking audits, gateway compliance, tax reports, and merchant escalations so your digital assets remain stable.
            </p>

            {/* 2x2 Feature Grid */}
            <motionFramer.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
                width: '100%',
              }}
            >
              {features.map((feat, index) => (
                <motionFramer.div
                  key={index}
                  variants={cardVariants}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                  className="group"
                >
                  
                  {/* Icon Container: 48px rounded square with gradient tint */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    transition: 'all 250ms ease',
                  }}
                  className="icon-container-box group-hover:rotate-8"
                  >
                    {feat.icon}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h4 style={{ 
                      fontSize: '16px', 
                      fontWeight: 700, 
                      color: 'var(--text-primary)', 
                      marginBottom: '6px',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {feat.title}
                    </h4>
                    <p style={{ 
                      fontSize: '14px', 
                      lineHeight: 1.5,
                      color: 'var(--text-secondary)' 
                    }}>
                      {feat.desc}
                    </p>
                  </div>

                </motionFramer.div>
              ))}
            </motionFramer.div>

          </div>

        </div>

      </div>

      {/* Styles for hover rotate and grid alignments */}
      <style>{`
        @media (min-width: 992px) {
          .why-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            gap: 80px !important;
          }
        }
        /* Rotate icon 8 degrees on card/item hover */
        .group:hover .icon-container-box {
          transform: rotate(8deg);
          background: var(--primary-gradient) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
