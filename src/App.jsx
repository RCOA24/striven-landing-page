import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const LandingPage = () => (
  <main>
    <Hero />
    <Features />
    <TechStack />
    <DownloadSection />
  </main>
);

function App() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isInApp = /FBAN|FBAV|Instagram|Line/i.test(ua);

    if (isInApp && /android/i.test(ua)) {
      const currentUrl = window.location.href.replace(/^https?:\/\//, '');
      window.location.href = `intent://${currentUrl}#Intent;scheme=https;package=com.android.chrome;end`;
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
        <Toaster position="top-center" richColors />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
