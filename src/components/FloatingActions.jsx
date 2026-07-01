import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const containerStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    zIndex: 9999,
    pointerEvents: 'none',
  };

  const whatsappStyle = {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: '#25D366',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    pointerEvents: 'auto',
  };

  const bookingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '999px',
    background: 'var(--primary-gradient)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '13px',
    boxShadow: '0 8px 24px var(--accent-glow-strong)',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.4px',
    pointerEvents: 'auto',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div style={containerStyle}>
          {/* Booking Pill */}
          <motion.a
            href="#consultation"
            style={bookingStyle}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <FiCalendar /> Book Free Consultation
          </motion.a>

          {/* WhatsApp Action Button */}
          <motion.a
            href="https://wa.me/923000000000?text=Hello%20TheCommercePk,%20I%20am%20interested%20in%20your%20company%20formation%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={whatsappStyle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
