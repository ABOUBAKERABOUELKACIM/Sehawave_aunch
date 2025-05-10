import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AICancerDetection from './components/AICancerDetection';
import ForDoctors from './components/ForDoctors';
import ForPatients from './components/ForPatients';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'SehaWave | AI-Powered Healthcare Platform';
    
    // Add the logo to the favicon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/logo.svg';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AICancerDetection />
      <ForDoctors />
      <ForPatients />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;