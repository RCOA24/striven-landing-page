import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
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
