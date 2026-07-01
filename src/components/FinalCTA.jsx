import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

export default function FinalCTA() {
  const containerStyle = {
    position: 'relative',
    background: 'linear-gradient(135deg, #F7941D 0%, #F15A24 50%, #8CC63F 100%)',
    color: '#ffffff',
    padding: '96px 24px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(241, 90, 36, 0.2)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section id="consultation" style={{ backgroundColor: 'var(--bg-primary)', padding: '56px 0', transition: 'var(--theme-transition)' }}>
      <div className="container">
        
        <div style={containerStyle}>
          
          {/* Animated Noise/Grain Texture Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          {/* Floating abstract ribbon shapes (echoing logo) */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '10%',
            width: '120px',
            height: '120px',
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
            border: '2px solid rgba(255,255,255,0.08)',
            pointerEvents: 'none',
            zIndex: 2,
          }} className="floating-ribbon" />

          <div style={{
            position: 'absolute',
            bottom: '-40px',
            right: '15%',
            width: '160px',
            height: '160px',
            borderRadius: '50% 50% 30% 70% / 50% 30% 60% 50%',
            border: '2.5px solid rgba(255,255,255,0.06)',
            pointerEvents: 'none',
            zIndex: 2,
          }} className="floating-ribbon-slow" />

          {/* Content Wrapper */}
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px', margin: '0 auto' }}>
            
            {/* Centered H2 Title */}
            <h2 className="heading-h2" style={{
              color: '#ffffff',
              fontSize: 'clamp(28px, 4.5vw, 40px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              Ready to Launch or Scale Your Business Globally?
            </h2>

            {/* Supporting Line */}
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '17px',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}>
              Book a free consultation with TheCommercePk today
            </p>

            {/* Action Buttons Row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
            }}>
              
              {/* Solid White Pill CTA */}
              <motion.a
                href="https://wa.me/923000000000?text=I%20want%20to%20schedule%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                  padding: '14px 32px',
                  borderRadius: '999px',
                }}
              >
                <span style={{
                  background: 'linear-gradient(135deg, #F15A24, #F7941D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <FiCalendar /> Book Free Consultation
                </span>
              </motion.a>

              {/* Ghost Outline WhatsApp CTA */}
              <motion.a
                href="https://wa.me/923000000000?text=I%20have%20questions%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  border: '1.5px solid #ffffff',
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '999px',
                }}
              >
                <FaWhatsapp 
                  style={{ marginRight: '8px', fontSize: '18px' }} 
                  className="whatsapp-bounce"
                /> 
                Chat on WhatsApp
              </motion.a>

            </div>

          </div>

        </div>

      </div>

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes float-ribbon-one {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(4deg);
          }
        }
        .floating-ribbon {
          animation: float-ribbon-one 6s ease-in-out infinite;
        }

        @keyframes float-ribbon-two {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(14px) rotate(-3deg);
          }
        }
        .floating-ribbon-slow {
          animation: float-ribbon-two 8s ease-in-out infinite;
        }

        @keyframes icon-bounce-vert {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .whatsapp-bounce {
          animation: icon-bounce-vert 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
