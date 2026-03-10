
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ElegantBackground from './components/ElegantBackground';
import AIConsultantChat from './components/AIConsultantChat';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetodoSection from './components/MetodoSection';
import ServicesSection from './components/ServicesSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PackagesSection from './components/PackagesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';

const Home: React.FC = () => (
  <main>
    <Hero />
    <MetodoSection />
    <ServicesSection />
    <ResultsSection />
    <PackagesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </main>
);

const App: React.FC = () => {
  const location = useLocation();
  const isLegalPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy';

  useEffect(() => {
    const GA_ID = 'G-VDJFPNQSWQ';

    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `     window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-gold/30 selection:text-espresso">
      <CustomCursor />
      <ElegantBackground />
      <AIConsultantChat />
          
      {!isLegalPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
