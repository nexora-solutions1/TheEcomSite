import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does UK LTD or US LLC formation take?',
    answer: 'UK LTD setups typically complete within 24 to 48 hours. US LLC filings take between 3 to 7 business days depending on the state registry speed, followed by 7 to 10 days for your official EIN registration.',
  },
  {
    question: 'Can I open a business bank account without visiting in person?',
    answer: 'Yes, 100% remotely. We establish corporate banking profiles through Wise Business, Payoneer, or Tide. All verifications are managed using your valid passport and registry documents without physical travel.',
  },
  {
    question: 'Do you help recover suspended Amazon/eBay accounts?',
    answer: 'Yes. Our specialized suspension recovery desk analyzes the deactivation triggers, audits compliance errors, and drafts bespoke Plan of Action (POA) appeals. We also guide you through direct queue escalation appeals.',
  },
  {
    question: 'What ongoing support do you provide after setup?',
    answer: 'We provide annual compliance renewals, registered agent renewals, UK confirmation statement filings, and basic bookkeeping services to keep your entities active and compliant with IRS or HMRC guidelines.',
  },
  {
    question: 'Is a passport required for US/UK business registration?',
    answer: 'Yes, a valid passport is required for identity validation during incorporation and banking verifications. No travel visa, local address, or foreign director is necessary.',
  },
  {
    question: 'Are there any hidden renewal fees?',
    answer: 'None. We are completely transparent. We declare state fees and registered agent renewal costs upfront. You will be notified 60 days before any renewals are due.',
  }
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 0',
        position: 'relative',
        transition: 'padding 300ms ease',
      }}
    >
      {/* Active Row Left Gradient Accent Border */}
      {isOpen && (
        <motion.div
          layoutId="faqBorder"
          style={{
            position: 'absolute',
            left: 0,
            top: '16px',
            bottom: '16px',
            width: '3px',
            background: 'linear-gradient(to bottom, #F7941D, #F15A24, #8CC63F)',
            borderRadius: '999px',
          }}
        />
      )}

      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: isOpen ? '8px 0 8px 16px' : '8px 0 8px 12px',
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'var(--font-heading)',
          gap: '16px',
          outline: 'none',
          transition: 'padding 300ms ease',
        }}
      >
        <span>{faq.question}</span>
        
        {/* Plus/Minus icon rotating 45 deg */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: isOpen ? 'var(--accent-orange)' : 'var(--text-muted)',
            fontSize: '18px',
            flexShrink: 0,
          }}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: 1.6,
                padding: '12px 12px 8px 16px',
                margin: 0,
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" style={{ backgroundColor: 'var(--bg-primary)', transition: 'var(--theme-transition)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'flex-start',
        }} className="faq-grid">
          
          {/* Left Column: Sticky Title & WhatsApp mini CTA card */}
          <div style={{
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }} className="faq-left-column">
            
            <span className="tag-pill" style={{ marginBottom: '16px' }}>FAQ Guide</span>
            
            <h2 className="heading-h2" style={{ 
              fontSize: 'clamp(28px, 4vw, 36px)', 
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '16px',
              textAlign: 'left',
            }}>
              Frequently Asked Questions
            </h2>

            <p style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              textAlign: 'left',
              maxWidth: '380px',
              marginBottom: '32px',
            }}>
              Find quick answers regarding legal formations, foreign bank setup, and payment routing compliance processes.
            </p>

            {/* WhatsApp Mini CTA Card */}
            <motion.a
              href="https://wa.me/923000000000?text=I%20have%20questions%20about%20company%20formation."
              target="_blank"
              rel="noopener noreferrer"
              className="card-bento"
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                textDecoration: 'none',
                width: '100%',
                maxWidth: '360px',
                border: '1.5px solid rgba(37, 211, 102, 0.2)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}>
                <FaWhatsapp />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>STILL HAVE QUESTIONS?</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>Message us on WhatsApp</span>
              </div>
            </motion.a>

          </div>

          {/* Right Column: Accordion list */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .faq-grid {
            grid-template-columns: 0.8fr 1.2fr !important;
            gap: 80px !important;
          }
          .faq-left-column {
            position: sticky !important;
          }
        }
        @media (max-width: 991px) {
          .faq-left-column {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
