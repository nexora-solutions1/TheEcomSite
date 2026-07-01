import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiBriefcase, FiLayers, FiActivity, FiCreditCard, FiAlertTriangle, FiCheck, FiShield, FiTrendingUp } from 'react-icons/fi';
import { FaStripe, FaAmazon, FaPaypal, FaUniversity, FaShopify } from 'react-icons/fa';
import { SiWise, SiTiktok } from 'react-icons/si';

import { useTheme } from './ThemeContext';

export default function ServicesHub() {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Layout structure definitions
  const cardStyle = (spanCols = 1, borderHighlight = 'var(--glass-border)') => ({
    gridColumn: `span ${spanCols}`,
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: `1.5px solid ${borderHighlight}`,
    borderRadius: '24px',
    padding: '36px',
    boxShadow: 'var(--glass-shadow)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <section 
      id="services" 
      style={{ 
        padding: '100px 0',
        backgroundColor: 'var(--bg-secondary)', 
        transition: 'var(--theme-transition)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow flares */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(140, 198, 63, 0.05) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(241, 90, 36, 0.05) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Modern Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
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
            What We Do
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
            SaaS-Enabled Services Suite
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '580px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Enterprise-grade corporate formation, business banking setups, and payment operations built for global digital entrepreneurs.
          </p>
        </div>

        {/* Premium Bento Grid Services Layout */}
        <div 
          className="services-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            width: '100%',
          }}
        >
          
          {/* Card 1: Formation & Registration (WIDESPAN - 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={cardStyle(2)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bento-wide"
          >
            {/* Split content layout */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', height: '100%', alignItems: 'center' }}>
              <div style={{ flex: '1.2 1 250px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(241,90,36,0.08)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontSize: '18px' }}>
                    <FiGlobe />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-orange)' }}>COMPLIANCE REGISTRY</span>
                </div>
                <h3 className="heading-h3" style={{ fontSize: '22px', fontWeight: 800, margin: 0 }}>US LLC & UK LTD Formations</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  We handle the complete registration parameters end-to-end, filing articles of organization, securing your employer tax ID (EIN), and maintaining active registered addresses.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: 'var(--accent-green)' }} /> Articles of Organization</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: 'var(--accent-green)' }} /> IRS EIN routing</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: 'var(--accent-green)' }} /> UK Companies House</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: 'var(--accent-green)' }} /> Registered Agent</div>
                </div>
              </div>

              {/* Graphic Mockup: 3D Certificate Floating Seal */}
              <div className="bento-graphic-panel" style={{ flex: '0.8 1 180px', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  style={{
                    width: '180px',
                    height: '210px',
                    background: theme === 'dark' ? 'rgba(30, 35, 45, 0.6)' : '#ffffff',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  animate={hoveredCard === 1 ? { rotateY: 12, rotateX: -6, z: 20 } : { rotateY: 0, rotateX: 0, z: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FiShield style={{ color: 'var(--accent-orange)', fontSize: '20px' }} />
                    <span style={{ fontSize: '8px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(16,185,129,0.1)', color: 'var(--accent-green)' }}>ACTIVE</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '12px 0', margin: '12px 0' }}>
                    <div style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.5px' }}>STATE DEPT SEAL</div>
                    <div style={{ fontSize: '7px', color: 'var(--text-muted)', marginTop: '4px' }}>Wyoming Corporate File #8849</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 600 }}>EIN Approved</span>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#F7941D' }} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Commercial Banking Solutions (Standard - 1 Column - Dark Accent Box) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...cardStyle(1),
              background: '#111317', // Force dark slate background even in light mode
              borderColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent-green)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(140, 198, 63, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(140,198,63,0.08)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                <FaUniversity />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-green)' }}>FINTECH ACCOUNTS</span>
            </div>
            <h3 className="heading-h3" style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 12px 0', color: '#ffffff' }}>Business Banking</h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5, margin: '0 0 24px 0' }}>
              Open multi-currency commercial banking ledgers with unique routing details remote from Pakistan.
            </p>

            {/* Overlapping Logos row */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.1)' }}>
              <SiWise style={{ color: '#00b9ff', fontSize: '24px' }} />
              <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Wise Business Integration</span>
            </div>
          </motion.div>

          {/* Card 3: Payment Gateways (Standard - 1 Column - Dark Accent Box) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              ...cardStyle(1),
              background: '#111317', // Force dark slate background even in light mode
              borderColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent-orange)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(241, 90, 36, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(241,90,36,0.08)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                <FiCreditCard />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-orange)' }}>MERCHANT GATEWAY</span>
            </div>
            <h3 className="heading-h3" style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 12px 0', color: '#ffffff' }}>Payment Gateways</h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5, margin: '0 0 24px 0' }}>
              Accept Stripe and PayPal payments globally under your corporate LLC/LTD entity structure.
            </p>

            {/* Overlapping Gateway Row */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginTop: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.1)' }}>
              <FaStripe style={{ color: '#635bff', fontSize: '32px' }} />
              <FaPaypal style={{ color: '#003087', fontSize: '20px' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, marginLeft: 'auto', color: 'var(--accent-green)' }}>Verified</span>
            </div>
          </motion.div>

          {/* Card 4: eCommerce Marketplace Setup (WIDESPAN - 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={cardStyle(2)}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bento-wide"
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', height: '100%', alignItems: 'center' }}>
              <div style={{ flex: '1.2 1 250px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(140,198,63,0.08)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                    <FiLayers />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-green)' }}>MERCHANT STORES</span>
                </div>
                <h3 className="heading-h3" style={{ fontSize: '22px', fontWeight: 800, margin: 0 }}>Global Store Verifications</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Avoid platform restriction algorithms. We verify corporate accounts on Amazon, Shopify, TikTok Shop, Etsy, and eBay using secure dedicated VPS access structures.
                </p>
              </div>

              {/* Grid of clean store button badges */}
              <div style={{ flex: '0.8 1 200px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { name: 'Amazon', color: '#ff9900', icon: <FaAmazon /> },
                  { name: 'Shopify', color: '#96bf48', icon: <FaShopify /> },
                  { name: 'TikTok Shop', color: 'var(--text-primary)', icon: <SiTiktok /> },
                  { name: 'Etsy', color: '#d5641c', icon: <FiLayers /> }
                ].map((store, i) => (
                  <motion.div
                    key={i}
                    style={{
                      padding: '10px 14px',
                      background: 'var(--bg-tertiary)',
                      border: '1.5px solid var(--border-color)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                    whileHover={{ scale: 1.05, borderColor: store.color }}
                  >
                    <span style={{ color: store.color, display: 'flex' }}>{store.icon}</span>
                    {store.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 5: Account Management (Standard - 1 Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={cardStyle(1)}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(241,90,36,0.08)', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                <FiActivity />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-orange)' }}>GROWTH METRICS</span>
            </div>
            <h3 className="heading-h3" style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 12px 0' }}>Account Operations</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 24px 0' }}>
              Work with local eCommerce management leaders to research products, manage fulfillment, and scale store revenue.
            </p>

            {/* Sparkline growth graph inside the card */}
            <div style={{ height: '35px', marginTop: 'auto' }}>
              <svg viewBox="0 0 100 30" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path d="M0 25 L 20 20 L 40 28 L 60 14 L 80 18 L 100 5" fill="none" stroke="var(--accent-orange)" strokeWidth="2" />
                <circle cx="100" cy="5" r="2.5" fill="var(--accent-green)" />
              </svg>
            </div>
          </motion.div>

          {/* Card 6: Reinstatement Desk (EMERGENCY CARD - Spans 2 columns to balance grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={cardStyle(2, 'rgba(239, 68, 68, 0.25)')}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bento-wide"
          >
            {/* Ambient Red glow backdrop */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 10% 20%, rgba(239, 68, 68, 0.04) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px', alignItems: 'center', width: '100%' }}>
              <div style={{ flex: '1.5 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.08)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                    <FiAlertTriangle className="live-pulsing-dot" />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#ef4444', letterSpacing: '0.5px' }}>CRITICAL SUPPORT DESK</span>
                </div>
                <h3 className="heading-h3" style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px 0', fontFamily: 'var(--font-heading)' }}>Suspension & Appeal Reinstatement</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Locked store audits and payment gateway holds mitigation. We prepare legally compliant custom Plans of Action (POAs) and handle verification escalations.
                </p>
              </div>

              {/* Action checklist and primary red-orange action CTA */}
              <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: '#ef4444' }} /> Custom appeal POAs</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: '#ef4444' }} /> Identity verifications</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: '#ef4444' }} /> Section 3 appeal desks</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px' }}><FiCheck style={{ color: '#ef4444' }} /> Stripe reserve holds</div>
                </div>

                <a 
                  href="#consultation" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #ef4444 0%, #F15A24 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                    boxShadow: '0 4px 14px rgba(239, 68, 68, 0.25)',
                  }}
                >
                  Request Emergency Appeal <FiArrowRight style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Embedded CSS grid hacks for Bento formatting */}
      <style>{`
        @media (max-width: 991px) {
          .services-bento-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .bento-wide, .bento-full {
            grid-column: span 1 !important;
          }
          .bento-graphic-panel {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
