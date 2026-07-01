import React from 'react';
import { motion } from 'framer-motion';
import { FaStripe, FaAmazon, FaEbay, FaEtsy, FaPaypal, FaUniversity } from 'react-icons/fa';
import { SiWise, SiPayoneer, SiShopify, SiTiktok } from 'react-icons/si';
import { FiCreditCard, FiGlobe, FiLayers } from 'react-icons/fi';

import { useTheme } from './ThemeContext';

const WalmartIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}>
    <g transform="translate(12,12) scale(0.9)">
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" />
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" transform="rotate(60)" />
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" transform="rotate(120)" />
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" transform="rotate(180)" />
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" transform="rotate(240)" />
      <rect x="-2" y="-10" width="4" height="6" rx="1" fill="currentColor" transform="rotate(300)" />
    </g>
  </svg>
);

const ecommercePlatforms = [
  { name: 'Amazon', icon: <FaAmazon />, hoverColor: '#ff9900', bgGlow: 'rgba(255, 153, 0, 0.08)' },
  { name: 'eBay', icon: <FaEbay />, hoverColor: '#e53238', bgGlow: 'rgba(229, 50, 56, 0.08)' },
  { name: 'TikTok Shop', icon: <SiTiktok />, hoverColor: '#6366f1', bgGlow: 'rgba(99, 102, 241, 0.08)' },
  { name: 'Etsy', icon: <FaEtsy />, hoverColor: '#d5641c', bgGlow: 'rgba(213, 100, 28, 0.08)' },
  { name: 'Walmart', icon: <WalmartIcon />, hoverColor: '#0071dc', bgGlow: 'rgba(0, 113, 220, 0.08)' },
  { name: 'Shopify', icon: <SiShopify />, hoverColor: '#96bf48', bgGlow: 'rgba(150, 191, 72, 0.08)' },
  { name: 'OnBuy', icon: <FiGlobe />, hoverColor: '#00b9ff', bgGlow: 'rgba(0, 185, 255, 0.08)' },
  { name: 'Temu', icon: <FiLayers />, hoverColor: '#ff5500', bgGlow: 'rgba(255, 85, 0, 0.08)' }
];

const bankingPartners = [
  { name: 'Wise', icon: <SiWise />, hoverColor: '#90d800', bgGlow: 'rgba(144, 216, 0, 0.08)' },
  { name: 'Payoneer', icon: <SiPayoneer />, hoverColor: '#ff4f00', bgGlow: 'rgba(255, 79, 0, 0.08)' },
  { name: 'Tide', icon: <FiCreditCard />, hoverColor: '#002f6c', bgGlow: 'rgba(0, 47, 108, 0.08)' },
  { name: 'Airwallex', icon: <FiCreditCard />, hoverColor: '#612de2', bgGlow: 'rgba(97, 45, 226, 0.08)' },
  { name: 'Monzo', icon: <FiCreditCard />, hoverColor: '#ff4f00', bgGlow: 'rgba(255, 79, 0, 0.08)' },
  { name: 'HSBC', icon: <FaUniversity />, hoverColor: '#db1c24', bgGlow: 'rgba(219, 28, 36, 0.08)' },
  { name: 'Lloyds', icon: <FaUniversity />, hoverColor: '#006a4e', bgGlow: 'rgba(0, 106, 78, 0.08)' },
  { name: 'PayPal', icon: <FaPaypal />, hoverColor: '#003087', bgGlow: 'rgba(0, 48, 135, 0.08)' },
  { name: 'Stripe', icon: <FaStripe />, hoverColor: '#635bff', bgGlow: 'rgba(99, 91, 255, 0.08)' }
];

function LogoCard({ icon, name, hoverColor, bgGlow }) {
  const { theme } = useTheme();
  return (
    <motion.div 
      className="logo-card"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 22px',
        borderRadius: '16px',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1.5px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease',
      }}
      whileHover={{
        y: -4,
        borderColor: hoverColor,
        boxShadow: `0 12px 24px ${bgGlow}`,
      }}
    >
      {/* Symmetrical Icon circular container inside the card */}
      <div style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: bgGlow,
        color: hoverColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
      }}>
        {icon}
      </div>

      <span style={{ 
        fontSize: '13px', 
        fontWeight: 700, 
        fontFamily: 'var(--font-heading)', 
        color: 'var(--text-primary)',
        letterSpacing: '0.2px',
      }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function PlatformsMarquee() {
  const { theme } = useTheme();
  // Triple the items lists to ensure seamless looping without visual glitches
  const row1Items = [...ecommercePlatforms, ...ecommercePlatforms, ...ecommercePlatforms];
  const row2Items = [...bankingPartners, ...bankingPartners, ...bankingPartners];

  const maskStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
  };

  return (
    <section 
      id="partners-marquee" 
      style={{ 
        padding: '80px 0', 
        backgroundColor: 'var(--bg-secondary)', 
        borderTop: '1px solid var(--border-color)', 
        borderBottom: '1px solid var(--border-color)',
        transition: 'var(--theme-transition)',
        position: 'relative',
      }}
    >
      {/* 1. Row 1 - eCommerce Platforms */}
      <div style={{ marginBottom: '44px' }}>
        <div className="container" style={{ marginBottom: '20px' }}>
          <span style={{ 
            fontSize: '11px', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-orange)' }} />
            eCommerce Platforms Supported
          </span>
        </div>

        {/* Marquee Track Container */}
        <div style={maskStyle}>
          <div className="marquee-container" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <div className="marquee-track-left">
              {row1Items.map((item, idx) => (
                <LogoCard 
                  key={idx} 
                  icon={item.icon} 
                  name={item.name} 
                  hoverColor={item.hoverColor} 
                  bgGlow={item.bgGlow}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Row 2 - Banking & Payment Partners */}
      <div>
        <div className="container" style={{ marginBottom: '20px' }}>
          <span style={{ 
            fontSize: '11px', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-body)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} />
            Banking & Merchant Gateways
          </span>
        </div>

        {/* Opposite Scrolling Marquee Track Container */}
        <div style={maskStyle}>
          <div className="marquee-container" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <div className="marquee-track-right">
              {row2Items.map((item, idx) => (
                <LogoCard 
                  key={idx} 
                  icon={item.icon} 
                  name={item.name} 
                  hoverColor={item.hoverColor} 
                  bgGlow={item.bgGlow}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for custom GPU-accelerated opposing loop speeds & scrolling tracks */}
      <style>{`
        .marquee-track-left {
          display: flex;
          gap: 24px;
          animation: scroll-left-keyframes 45s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          gap: 24px;
          animation: scroll-right-keyframes 45s linear infinite;
        }
        /* Pause scroll on hover */
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
        
        @keyframes scroll-left-keyframes {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scroll-right-keyframes {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
