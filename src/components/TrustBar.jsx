import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiLayers, FiGlobe, FiPhoneCall, FiTrendingUp, FiChevronDown } from 'react-icons/fi';

import { useTheme } from './ThemeContext';

// Counter component to handle 0 -> Target animation
function Counter({ value, duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(end)) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formatCount = (num) => {
    if (value.includes(',')) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <span 
      ref={ref} 
      style={{ 
        fontFamily: 'var(--font-display)', 
        fontWeight: 800, 
        fontSize: '44px',
        background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        letterSpacing: '-1px',
      }}
    >
      {formatCount(count)}
    </span>
  );
}

// Mock avatar bubbles for Card 1
const avatars = [
  { name: 'AN', bg: 'linear-gradient(135deg, #F15A24, #F7941D)' },
  { name: 'MS', bg: 'linear-gradient(135deg, #8CC63F, #10B981)' },
  { name: 'ZK', bg: 'linear-gradient(135deg, #635bff, #00b9ff)' }
];

export default function TrustBar() {
  const { theme } = useTheme();

  return (
    <section 
      id="trust-bar" 
      style={{ 
        padding: '80px 0', 
        borderBottom: '1px solid var(--border-color)', 
        borderTop: '1px solid var(--border-color)', 
        backgroundColor: 'var(--bg-secondary)',
        transition: 'var(--theme-transition)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow node */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(241, 90, 36, 0.04) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        
        {/* Bento Grid Stats Layout */}
        <div 
          className="trust-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
            width: '100%',
          }}
        >
          
          {/* Card 1: Formations (Left - 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: 'var(--glass-shadow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              position: 'relative',
              transition: 'var(--theme-transition)',
            }}
          >
            {/* Avatar Trust Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex' }}>
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: av.bg,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '8px',
                      fontWeight: 700,
                      border: '1.5px solid var(--bg-primary)',
                      marginLeft: idx > 0 ? '-6px' : '0px',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {av.name}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.2px' }}>
                500+ founders trust us
              </span>
            </div>

            {/* Label indicator */}
            <span style={{ 
              fontSize: '11px', 
              fontWeight: 700, 
              color: 'var(--accent-orange)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.8px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)' }} />
              Client Satisfaction
            </span>

            {/* Large Stat Display */}
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '12px' }}>
              <Counter value="150" />
              <span style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '44px',
                background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1px',
              }}>+</span>
            </div>

            {/* Faint Caption Summary */}
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
              Registered businesses established safely in US and UK registries with fully authorized search records.
            </p>
          </motion.div>

          {/* Card 2: Client Support (Middle - 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: 'var(--glass-shadow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--theme-transition)',
            }}
          >
            <div>
              {/* Label indicator */}
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 700, 
                color: 'var(--accent-green)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.8px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} />
                Client Relations
              </span>

              {/* Large Stat Display */}
              <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '12px' }}>
                <Counter value="24" />
                <span style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontWeight: 800, 
                  fontSize: '44px',
                  background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px',
                }}>/7</span>
              </div>

              {/* Faint Caption Summary */}
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: '0 0 24px 0' }}>
                Dedicated support channels via live WhatsApp lines, email queries, and priority legal filing assist.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="#consultation" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                borderRadius: '999px',
                textDecoration: 'none',
                width: '100%',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              Book an appointment
            </a>
          </motion.div>

          {/* Card 3: Managed Accounts & Chart (Right - 2 col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid var(--glass-border)',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: 'var(--glass-shadow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--theme-transition)',
            }}
            className="trust-bento-wide"
          >
            <div>
              {/* Header block with mock dropdown selector */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  color: 'var(--accent-orange)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)' }} />
                  Merchant Capital Volume
                </span>
                
                {/* Mock Dropdown Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '999px',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}>
                  <span>Last 6 Months</span>
                  <FiChevronDown size={12} />
                </div>
              </div>

              {/* Stat Metric & Text Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <Counter value="2,000" />
                  <span style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontWeight: 800, 
                    fontSize: '44px',
                    background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px',
                  }}>+</span>
                </div>
                <div style={{ flex: 1, minWidth: '180px' }}>
                  <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                    Stripe balance streams and corporate bank ledger volumes operating smoothly across global merchant checkout pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Sparkline Graphic (SVG Line chart matching image design) */}
            <div style={{ position: 'relative', width: '100%', height: '110px', marginTop: '10px' }}>
              <svg viewBox="0 0 500 110" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  {/* Glowing line gradient */}
                  <linearGradient id="glow-line-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-orange)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--accent-orange)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                {/* Horizontal grid lines */}
                <line x1="0" y1="10" x2="500" y2="10" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="40" x2="500" y2="40" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="3 3" />
                
                {/* Filled gradient area */}
                <path 
                  d="M 0 100 L 0 75 Q 40 85 80 60 T 160 70 T 240 50 T 320 30 T 400 65 T 480 30 L 500 25 L 500 100 Z" 
                  fill="url(#glow-line-grad)" 
                />
                
                {/* Main line path */}
                <path 
                  d="M 0 75 Q 40 85 80 60 T 160 70 T 240 50 T 320 30 T 400 65 T 480 30 L 500 25" 
                  fill="none" 
                  stroke="var(--accent-orange)" 
                  strokeWidth="2.5" 
                />

                {/* Nodes (Circles representing data points) */}
                <circle cx="80" cy="60" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="160" cy="70" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="240" cy="50" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="320" cy="30" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="400" cy="65" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="480" cy="30" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-orange)" strokeWidth="2" />

                {/* X Axis labels */}
                <text x="0" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Jan</text>
                <text x="80" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Feb</text>
                <text x="160" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Mar</text>
                <text x="240" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Apr</text>
                <text x="320" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">May</text>
                <text x="400" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Jun</text>
                <text x="480" y="105" fill="var(--text-muted)" fontSize="9px" fontWeight="600">Jul</text>
              </svg>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Grid styles for Bento mapping */}
      <style>{`
        @media (min-width: 992px) {
          .trust-bento-grid {
            grid-template-columns: 1fr 1fr 2fr !important;
          }
        }
        @media (max-width: 991px) {
          .trust-bento-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
