import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/image.png';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Company Formation', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Banking', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faqs' },
];

export default function StickyNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
    backgroundColor: theme === 'dark' 
      ? 'rgba(20, 23, 28, 0.75)' 
      : 'rgba(255, 255, 255, 0.80)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    height: isScrolled ? '64px' : '84px',
    boxShadow: isScrolled 
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)' 
      : 'none',
    display: 'flex',
    alignItems: 'center',
  };

  // Gradient bottom border line
  const borderLineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, #F7941D, #8CC63F)',
    opacity: 0.8,
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: theme === 'dark' ? '#d1d5db' : '#4b5563',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: "var(--font-body)",
    position: 'relative',
    padding: '6px 0',
    cursor: 'pointer',
  };

  return (
    <header style={navbarStyle}>
      <div style={borderLineStyle} />
      
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        
        {/* Left Logo - Image Only */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }} className="hover:opacity-90">
          <img 
            src={logoImg} 
            alt="TheCommercePk" 
            style={{ 
              height: isScrolled ? '100px' : '140px', 
              width: 'auto', 
              objectFit: 'contain',
              transition: 'height 300ms cubic-bezier(0.16, 1, 0.3, 1)',
              filter: theme === 'dark' ? 'invert(1) brightness(2) contrast(1.2)' : 'none',
            }} 
          />
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              style={navLinkStyle}
              className="group"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              {/* Sliding gradient underline */}
              <span 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(to right, #F7941D, #8CC63F)',
                  transition: 'width 300ms ease-in-out',
                }}
                className="group-hover:w-full"
              />
            </motion.a>
          ))}
        </nav>

        {/* Right Actions (Desktop) */}
        <div style={{ display: 'none', gap: '20px', alignItems: 'center' }} className="desktop-actions">
          
          {/* Sun/Moon Toggle Pill Switch */}
          <button
            onClick={toggleTheme}
            style={{
              position: 'relative',
              width: '52px',
              height: '26px',
              backgroundColor: theme === 'dark' ? '#1f2937' : '#e5e7eb',
              borderRadius: '999px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              transition: 'background-color 300ms ease',
              outline: 'none',
            }}
            aria-label="Toggle dark mode"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: theme === 'dark' ? '#ffa43a' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginLeft: theme === 'dark' ? '26px' : '0px',
              }}
            >
              {theme === 'dark' ? (
                <FiSun size={12} style={{ color: '#0a0b0e' }} />
              ) : (
                <FiMoon size={12} style={{ color: '#4b5563' }} />
              )}
            </motion.div>
          </button>

          {/* Consultation Shimmer Button */}
          <a
            href="#consultation"
            className="btn relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
              color: '#ffffff',
              padding: '10px 22px',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.4px',
              borderRadius: '999px',
              boxShadow: '0 4px 14px var(--accent-glow-strong)',
            }}
          >
            Free Consultation
            <span 
              className="shimmer-effect" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                opacity: 0.3,
              }}
            />
          </a>
        </div>

        {/* Mobile Hamburger / Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="mobile-nav-toggle">
          
          {/* Mobile Theme Toggle Pill Switch */}
          <button
            onClick={toggleTheme}
            style={{
              position: 'relative',
              width: '48px',
              height: '24px',
              backgroundColor: theme === 'dark' ? '#1f2937' : '#e5e7eb',
              borderRadius: '999px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
              outline: 'none',
            }}
            aria-label="Toggle dark mode"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: theme === 'dark' ? '#ffa43a' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: theme === 'dark' ? '24px' : '0px',
              }}
            >
              {theme === 'dark' ? (
                <FiSun size={11} style={{ color: '#0a0b0e' }} />
              ) : (
                <FiMoon size={11} style={{ color: '#4b5563' }} />
              )}
            </motion.div>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: theme === 'dark' ? '#ffffff' : '#111827',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>

      {/* Full-Screen Slide-in Menu (Mobile) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '320px',
              backgroundColor: theme === 'dark' ? '#14171C' : '#ffffff',
              borderLeft: '1px solid var(--border-color)',
              padding: '80px 32px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              zIndex: 999,
              boxShadow: '-10px 0 25px rgba(0,0,0,0.1)',
            }}
          >
            {/* Close trigger button inside panel */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: theme === 'dark' ? '#ffffff' : '#111827',
                fontSize: '24px',
                outline: 'none',
              }}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {/* Staggered Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  style={{
                    textDecoration: 'none',
                    color: theme === 'dark' ? '#ffffff' : '#111827',
                    fontWeight: 700,
                    fontSize: '20px',
                    fontFamily: "var(--font-heading)",
                  }}
                  whileHover={{ x: 6, color: 'var(--accent-orange)' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Area CTA */}
            <div>
              <a
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn w-full"
                style={{
                  background: 'linear-gradient(135deg, #F15A24 0%, #F7941D 100%)',
                  color: '#ffffff',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                Free Consultation
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive layout toggle utility */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
