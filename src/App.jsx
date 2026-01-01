import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
