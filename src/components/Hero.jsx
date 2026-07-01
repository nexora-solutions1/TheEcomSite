import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiPhoneCall, FiChevronDown, FiTrendingUp, FiCheckCircle, FiCreditCard, FiShield, FiBriefcase } from 'react-icons/fi';
import { FaStripe, FaAmazon } from 'react-icons/fa';

import { useTheme } from './ThemeContext';

// Mock avatars for the trust row
const avatars = [
  { name: 'AN', bg: 'linear-gradient(135deg, #F15A24, #F7941D)' },
  { name: 'MS', bg: 'linear-gradient(135deg, #8CC63F, #10B981)' },
  { name: 'ZK', bg: 'linear-gradient(135deg, #635bff, #00b9ff)' }
];

export default function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeVisual, setActiveVisual] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Slide visual auto-rotation every 6 seconds and mobile resize listener
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVisual((prev) => (prev + 1) % 4);
    }, 6000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Parallax displacement ±10px
    const x = ((clientX - innerWidth / 2) / (innerWidth / 2)) * 10;
    const y = ((clientY - innerHeight / 2) / (innerHeight / 2)) * 10;
    setMousePosition({ x, y });
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: y * -15 });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Browser top control bar mockup
  const renderBrowserHeader = (title) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '16px',
      borderBottom: '1px solid var(--border-color)',
      paddingBottom: '12px',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
      </div>
      <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', opacity: 0.8 }}>
        {title}
      </span>
      <div style={{ width: '30px' }} /> {/* Spacer */}
    </div>
  );

  // Render visual slide components based on active index
  const renderVisual = () => {
    // Slightly narrower main card width to reserve side spaces for offsets in grid columns
    const cardBaseStyle = {
      width: '100%',
      maxWidth: '330px',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1.5px solid var(--glass-border)',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: 'var(--glass-shadow)',
      color: 'var(--text-primary)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'var(--theme-transition)',
      position: 'relative',
    };

    // Shared popup glass style for visual interest with high contrast
    const popupStyle = {
      padding: '12px 16px',
      background: theme === 'dark' ? 'rgba(30, 35, 45, 0.95)' : 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      zIndex: 20,
    };

    switch (activeVisual) {
      case 0:
        return (
          /* Visual 1: Corporate Formation Ledger */
          <motion.div
            key="formation-ledger"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', padding: isMobile ? '24px 12px' : '30px 72px' }}
          >
            <div style={cardBaseStyle}>
              {renderBrowserHeader('portal.thecommerce.pk/verify')}

              {/* Mock Certificate Frame */}
              <div style={{
                background: 'rgba(247, 148, 29, 0.03)',
                border: '1.5px solid rgba(247, 148, 29, 0.15)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'left',
                marginBottom: '16px',
              }}>
                <h5 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 6px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FiBriefcase style={{ color: 'var(--accent-orange)' }} /> Certificate of Formation
                </h5>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: '0 0 12px 0', lineHeight: 1.45 }}>
                  Official registration code: #UK-LTD-88241B. Authenticated registry search complete.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Wyoming Filing: Live</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '0.4px' }}>✓ CERTIFIED</span>
                </div>
              </div>

              {/* Progress Tracker list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <FiCheckCircle style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Wyoming LLC Articles Submitted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <FiCheckCircle style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Employer ID Number (EIN) Issued</span>
                </div>
              </div>

            </div>

            {/* Layered Overlapping Badge (Moved outside main card to side corner) */}
            <motion.div
              style={{
                ...popupStyle,
                position: 'absolute',
                top: '25%',
                right: '15px',
                border: '1.5px solid var(--accent-orange)',
                boxShadow: '0 12px 24px rgba(241, 90, 36, 0.15)',
                transform: 'rotate(4deg)',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-side-badge"
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: 'rgba(241, 90, 36, 0.1)', color: 'var(--accent-orange)' }}>US LLC</span>
                <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', background: 'rgba(140, 198, 63, 0.1)', color: 'var(--accent-green)' }}>UK LTD</span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700 }}>Registry</span>
            </motion.div>

          </motion.div>
        );

      case 1:
        return (
          /* Visual 2: Merchant Payment Pipeline */
          <motion.div
            key="payment-gateway"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', padding: isMobile ? '24px 12px' : '24px 64px' }}
          >
            <div style={cardBaseStyle}>
              {renderBrowserHeader('stripe.com/dashboard/payouts')}

              {/* Stat display */}
              <div style={{ marginBottom: '12px' }}>
                <h4 style={{ fontSize: '28px', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
                  $24,582.40
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <FiTrendingUp style={{ color: 'var(--accent-green)' }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-green)' }}>+18.4% this month</span>
                </div>
              </div>

              {/* SVGs line graph */}
              <div style={{ position: 'relative', height: '70px', marginBottom: '12px' }}>
                <svg viewBox="0 0 100 30" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="chart-grad-v2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-orange)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--accent-orange)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 30 L0 18 Q 20 10 40 16 T 80 8 T 100 2 L 100 30 Z" fill="url(#chart-grad-v2)" />
                  <path d="M0 18 Q 20 10 40 16 T 80 8 T 100 2" fill="none" stroke="var(--accent-orange)" strokeWidth="1.5" />
                  <circle cx="100" cy="2" r="2" fill="var(--accent-green)" />
                </svg>
              </div>

              {/* Bottom Row Activity */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Stripe Account Gateway</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-green)' }}>Approved</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>PayPal Merchant Checkout</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-green)' }}>Active</span>
                </div>
              </div>

            </div>

            {/* Layered Overlapping Stripe Badge (Moved outside main card to side corner) */}
            <motion.div
              style={{
                ...popupStyle,
                position: 'absolute',
                bottom: '25%',
                left: '15px',
                border: '1.5px solid #635bff',
                boxShadow: '0 12px 24px rgba(99, 91, 255, 0.15)',
                transform: 'rotate(-4deg)',
              }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-side-badge"
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: '#635bff',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800,
              }}>S</div>
              <span style={{ fontSize: '11px', fontWeight: 700 }}>Gateway Active</span>
            </motion.div>

          </motion.div>
        );

      case 2:
        return (
          /* Visual 3: International Business Banking */
          <motion.div
            key="banking-ledger"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', padding: isMobile ? '24px 12px' : '24px 64px' }}
          >
            <div style={cardBaseStyle}>
              {renderBrowserHeader('wise.com/business/balances')}

              {/* Balances Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(140, 198, 63, 0.03)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>🇺🇸</span>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>USD Account</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 700 }}>$14,920.00</span>
                </div>
                <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(140, 198, 63, 0.03)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '14px' }}>🇬🇧</span>
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>GBP Account</span>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 700 }}>£8,450.00</span>
                </div>
              </div>

              {/* Sub Check item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                <FiCheckCircle style={{ color: 'var(--accent-green)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>Multi-Currency Accounts Active</span>
              </div>
            </div>

            {/* Overlapping Wise Debit Card (Moved to side corner out of main text) */}
            <motion.div
              style={{
                width: '180px',
                height: '115px',
                background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.35)',
                color: '#ffffff',
                zIndex: 25,
                position: 'absolute',
                right: '15px',
                bottom: '15%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) rotate(6deg)`,
                transition: 'transform 100ms ease-out',
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="hero-side-badge"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', transform: 'translateZ(8px)' }}>
                <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>THECOMMERCEPK</span>
                <FiCreditCard style={{ fontSize: '14px', opacity: 0.8 }} />
              </div>
              <div style={{
                width: '20px',
                height: '14px',
                borderRadius: '2px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                transform: 'translateZ(4px)',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', transform: 'translateZ(6px)' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-display)', letterSpacing: '0.5px' }}>•••• 8840</span>
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#00b9ff' }}>Wise</span>
              </div>
            </motion.div>
          </motion.div>
        );

      case 3:
        return (
          /* Visual 4: Compliance & Reactivation Desk */
          <motion.div
            key="compliance-shield"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', padding: isMobile ? '24px 12px' : '24px 64px' }}
          >
            <div style={cardBaseStyle}>
              {renderBrowserHeader('portal.thecommerce.pk/compliance')}

              {/* Status Ring */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'var(--accent-green)',
                }}>
                  <FiShield />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>100% Compliant Setups</h4>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>HMRC & IRS regulations cleared</span>
                </div>
              </div>

              {/* Compliance checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <FiCheckCircle style={{ color: 'var(--accent-green)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Annual filing schedules tracked</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                  <FiCheckCircle style={{ color: 'var(--accent-green)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>Suspension recovery POA drafts ready</span>
                </div>
              </div>

            </div>

            {/* Layered Overlapping Amazon Seller Success Badge (Moved outside main card to side corner) */}
            <motion.div
              style={{
                ...popupStyle,
                position: 'absolute',
                top: '25%',
                left: '15px',
                border: '1.5px solid #ff9900',
                boxShadow: '0 12px 24px rgba(255, 153, 0, 0.15)',
                transform: 'rotate(-3deg)',
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-side-badge"
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: '#ff9900',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
              }}>
                <FaAmazon />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-green)' }}>✓ Reinstated</span>
            </motion.div>

          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        padding: '50px 0 64px 0',
        backgroundColor: 'var(--bg-primary)',
        transition: 'var(--theme-transition)',
        overflow: 'hidden',
      }}
    >
      {/* Background blur effects */}
      <div
        className="radial-glow-back"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(241, 90, 36, 0.08) 0%, rgba(247, 148, 29, 0.04) 50%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Asymmetric layout (grid stacked on mobile) */}
        <div
          className="grid-2 hero-grid"
          style={{
            alignItems: 'center',
            gap: '40px',
          }}
        >

          {/* Left Column: Heading Copy & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--accent-orange)',
                backgroundColor: 'rgba(241, 90, 36, 0.08)',
                padding: '6px 14px',
                borderRadius: '999px',
                marginBottom: '24px',
              }}
            >
              Complete eCommerce & Business Solutions
            </motion.div>

            {/* Headline H1 (Sora, -1px spacing, gradient words) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-h1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 6vw, 56px)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-1px',
                color: 'var(--text-primary)',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              Launch, Bank & Scale <br />
              Your Global Business <br />
              <span style={{
                background: 'var(--tri-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Done For You</span>
            </motion.h1>

            {/* Supporting description copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(15px, 2.5vw, 17px)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                textAlign: 'left',
                maxWidth: '540px',
                marginBottom: '36px',
              }}
            >
              Establish a registered US LLC or UK LTD entity from Pakistan. We manage registration, corporate bank accounts, Stripe/PayPal merchant gateway approvals, and tax filings end-to-end.
            </motion.p>

            {/* Buttons row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              {/* Solid Gradient CTA with glow */}
              <motion.a
                href="#consultation"
                className="btn btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                  boxShadow: '0 4px 14px var(--accent-glow-strong)',
                  padding: '14px 32px',
                  color: '#ffffff',
                }}
              >
                <FiPhoneCall /> Book Free Consultation
              </motion.a>

              {/* Outline secondary CTA with sliding arrow */}
              <motion.a
                href="#services"
                className="btn btn-secondary group"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  border: '1.5px solid var(--accent-orange)',
                  color: 'var(--text-primary)',
                  padding: '14px 32px',
                }}
              >
                Explore Services
                <FiArrowRight
                  style={{
                    transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="group-hover:translate-x-2"
                />
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              {/* Overlapping Avatar Circles */}
              <div style={{ display: 'flex' }}>
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: av.bg,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      border: '2.5px solid var(--bg-primary)',
                      marginLeft: idx > 0 ? '-10px' : '0px',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {av.name}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                Trusted by <strong>500+ founders</strong> across UK, US & Pakistan
              </span>
            </motion.div>

          </div>

          {/* Right Column - Auto-rotating compliance & payment dashboards */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '540px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '1000px',
            }}
            className="hero-right-visual"
          >
            {/* Visual Background Dot Grid */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: theme === 'dark'
                ? 'radial-gradient(rgba(255,255,255,0.06) 1.2px, transparent 1.2px)'
                : 'radial-gradient(rgba(0,0,0,0.04) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
              opacity: 0.85,
              zIndex: 1,
              pointerEvents: 'none',
            }} />

            {/* Glowing Backdrop Ambient Blur */}
            <div
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: 'var(--tri-gradient)',
                filter: 'blur(100px)',
                opacity: theme === 'dark' ? 0.18 : 0.08,
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Slide Carousel Navigator Tabs (Frosted Capsule Bar) */}
            <div style={{
              position: 'absolute',
              top: '12px',
              display: 'flex',
              gap: '4px',
              padding: '4px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1.5px solid var(--glass-border)',
              borderRadius: '999px',
              boxShadow: 'var(--glass-shadow)',
              zIndex: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {[0, 1, 2, 3].map((idx) => {
                const isActive = idx === activeVisual;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveVisual(idx)}
                    style={{
                      padding: '6px 14px',
                      fontSize: '10px',
                      fontWeight: 700,
                      borderRadius: '999px',
                      border: 'none',
                      outline: 'none',
                      background: isActive ? 'var(--primary-gradient)' : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 250ms ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {idx === 0 ? 'Entities' : idx === 1 ? 'Gateways' : idx === 2 ? 'Banking' : 'Compliance'}
                  </button>
                );
              })}
            </div>

            {/* Parallax Container */}
            <motion.div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                padding: '24px',
              }}
              animate={{
                x: mousePosition.x * 0.4,
                y: mousePosition.y * 0.4
              }}
              transition={{ duration: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {renderVisual()}
              </AnimatePresence>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bouncing Chevron scroll indicator at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--text-muted)',
          fontSize: '12px',
          fontWeight: 500,
          cursor: 'pointer',
        }}
        onClick={() => {
          const whyUsSection = document.getElementById('why-us');
          if (whyUsSection) {
            whyUsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown size={18} style={{ color: 'var(--accent-orange)' }} />
        </motion.div>
      </div>

      {/* Responsive layout styles hack */}
      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 64px !important;
          }
        }
        @media (max-width: 767px) {
          .hero-right-visual {
            height: 380px !important;
          }
          .hero-side-badge {
            display: none !important;
          }
        }
        .radial-glow-back {
          transition: var(--theme-transition);
        }
        .dark .radial-glow-back {
          background: radial-gradient(circle, rgba(247, 148, 29, 0.15) 0%, rgba(140, 198, 63, 0.06) 50%, rgba(255,255,255,0) 100%) !important;
        }
        
        @keyframes pulsing-dot {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        .live-pulsing-dot {
          animation: pulsing-dot 1.8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
