import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import StickyNavbar from './components/StickyNavbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutWhy from './components/AboutWhy';
import ServicesHub from './components/ServicesHub';
import ProcessTimeline from './components/ProcessTimeline';
import PlatformsMarquee from './components/PlatformsMarquee';
import SuspensionSpotlight from './components/SuspensionSpotlight';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        {/* Sticky Header Nav */}
        <StickyNavbar />

        {/* Main Sections */}
        <main style={{ flexGrow: 1, marginTop: '90px' }}>
          {/* Section 2: Hero */}
          <Hero />

          {/* Section 3: Trust Stats & Grayscale strip */}
          <TrustBar />

          {/* Section 4: About / Why Us Differentiators */}
          <AboutWhy />

          {/* Section 5: Bento Services Hub */}
          <ServicesHub />

          {/* Section 6: Process Timeline */}
          <ProcessTimeline />

          {/* Section 7: Infinite auto-scroll logos strip */}
          <PlatformsMarquee />

          {/* Section 8: Reinstatements Urgency Spotlight */}
          <SuspensionSpotlight />

          {/* Section 9: Auto-rotating review testimonials slider */}
          <Testimonials />

          {/* Section 10: Smooth Accordion FAQs */}
          <FAQ />

          {/* Section 11: Consultation inputs form */}
          <FinalCTA />
        </main>

        {/* Section 12: Newsletter Footer */}
        <Footer />

        {/* Floating Widgets */}
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}

export default App;
