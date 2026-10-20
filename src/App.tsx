import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AIRiskSection from './components/AIRiskSection';
import SolutionSection from './components/SolutionSection';
import ComparisonSection from './components/ComparisonSection';
import FeaturesSection from './components/FeaturesSection';
import TeacherBenefit from './components/TeacherBenefit';
import NewsSection from './components/NewsSection';
import RoadmapSection from './components/RoadmapSection';
import WhyNowSection from './components/WhyNowSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FinalCTA from './components/FinalCTA';
import DemoModal from './components/DemoModal';
import { LanguageProvider } from './context/LanguageContext';
import CookieBanner from './components/CookieBanner';
import { CookieConsentProvider } from './context/CookieConsentContext';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
  <CookieConsentProvider>
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white">
        {/* Navigation bar with callback to trigger the Demo booking modal */}
        <Navbar onBookDemo={handleOpenDemo} />

        {/* Core landing page sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onBookDemo={handleOpenDemo} />

          {/* 2. Problem Section */}
          <ProblemSection />

          {/* 3. AI Risk Section */}
          <AIRiskSection />

          {/* 4. Solution Section */}
          <SolutionSection />

          {/* Comparison Section */}
          <ComparisonSection />

          {/* 5. Features Section */}
          <FeaturesSection />

          {/* 6. Teacher Benefit Section */}
          <TeacherBenefit />

          {/* 7. Testimonials Section */}
          <TestimonialsSection />

          {/* News Section */}
          <NewsSection />

          {/* 8. Roadmap Section */}
          <RoadmapSection />

          {/* 9. Why Now Section */}
          <WhyNowSection />

          {/* Pricing Section */}
          <PricingSection onBookDemo={handleOpenDemo} />

          {/* 10. Final CTA & Footer Section */}
          <FinalCTA onBookDemo={handleOpenDemo} />
        </main>

        {/* Interactive Booking Scheduler Modal */}
        <DemoModal
          isOpen={isDemoOpen}
          onClose={handleCloseDemo}
        />

        {/* Cookie consent banner */}
        <CookieBanner />
      </div>
    </LanguageProvider>
  </CookieConsentProvider>
);
}

