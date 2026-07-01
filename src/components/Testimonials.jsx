import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Ali R.',
    role: 'Amazon Seller',
    details: 'UK LTD Client',
    avatar: 'AR',
    quote: "I registered my UK LTD and set up Amazon UK. The verification was smooth and fast. The local Pakistani WhatsApp support desk was outstandingly helpful!",
  },
  {
    name: 'Kashif M.',
    role: 'Software Agency Owner',
    details: 'US LLC Client',
    avatar: 'KM',
    quote: "Accepting retainer payments via Stripe was our biggest challenge. TheCommercePk solved it cleanly by registering our Wyoming LLC and setting upWise.",
  },
  {
    name: 'Zainab S.',
    role: 'Dropship Specialist',
    details: 'Stripe Client',
    avatar: 'ZS',
    quote: "Stripe verification is extremely risky from Pakistan. These guys set up a fully compliant corporate structure in my name. Zero proxy warning issues.",
  },
  {
    name: 'Bilal K.',
    role: 'eBay Brand Founder',
    details: 'Wise Client',
    avatar: 'BK',
    quote: "Wise business setup was rejected twice when I tried myself. TheCommercePk got it approved in 3 days with direct incorporation filings. Absolutely worth it.",
  },
  {
    name: 'Ayesha T.',
    role: 'Agency Partner',
    details: 'UK/US Compliance Client',
    avatar: 'AT',
    quote: "The annual report filing desk takes all compliance stress off my shoulders. Highly recommend their management services for active freelancers.",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle Swipe/Gesture for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe Left - Next
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe Right - Prev
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  // Helper to get indices for 3 cards visible on desktop (prev, active, next)
  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const curr = activeIndex;
    const next = (activeIndex + 1) % testimonials.length;
    return { prev, curr, next };
  };

  const { prev, curr, next } = getVisibleIndices();

  return (
    <section 
      id="testimonials" 
      style={{ 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)',
        transition: 'var(--theme-transition)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag-pill">Client Success Stories</span>
          <h2 className="heading-h2" style={{ marginTop: '16px', fontFamily: 'var(--font-heading)' }}>
            Trusted by Founders Across the Globe
          </h2>
          <div className="section-divider" style={{ margin: '16px auto' }} />
        </div>

        {/* Carousel Window */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            minHeight: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* DESKTOP LAYOUT (3 cards visible) */}
          <div className="desktop-carousel hidden md:flex" style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1000px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
          }}>
            {[prev, curr, next].map((itemIndex, displayIndex) => {
              const item = testimonials[itemIndex];
              const isCenter = displayIndex === 1;

              return (
                <div
                  key={itemIndex}
                  className="card-bento"
                  style={{
                    flex: isCenter ? '1 1 360px' : '1 1 300px',
                    borderRadius: '16px',
                    padding: '32px',
                    opacity: isCenter ? 1 : 0.6,
                    transform: isCenter ? 'scale(1.05)' : 'scale(0.95)',
                    boxShadow: isCenter ? 'var(--shadow-hover)' : 'var(--shadow-sm)',
                    borderColor: isCenter ? 'var(--accent-orange)' : 'var(--border-color)',
                    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '280px',
                  }}
                >
                  {/* Star Rating */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} style={{ fill: '#F7941D', color: '#F7941D', fontSize: '15px' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: '15px',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}>
                    "{item.quote}"
                  </p>

                  {/* Footer Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--primary-gradient)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}>
                      {item.avatar}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.name}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.role}, {item.details}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* MOBILE LAYOUT (1 active card visible) */}
          <div className="mobile-carousel block md:hidden" style={{ width: '100%', padding: '0 16px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card-bento"
                style={{
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: 'var(--shadow-hover)',
                  borderColor: 'var(--accent-orange)',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} style={{ fill: '#F7941D', color: '#F7941D', fontSize: '15px' }} />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '15px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  flexGrow: 1,
                }}>
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Footer Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--primary-gradient)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}>
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{testimonials[activeIndex].name}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{testimonials[activeIndex].role}, {testimonials[activeIndex].details}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dot Pagination indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '36px',
        }}>
          {testimonials.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  background: isActive 
                    ? 'linear-gradient(135deg, #F15A24, #F7941D)' 
                    : 'var(--border-color)',
                  transition: 'all 300ms ease',
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .desktop-carousel { display: none !important; }
          .mobile-carousel { display: block !important; }
        }
      `}</style>
    </section>
  );
}
