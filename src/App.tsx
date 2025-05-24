import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import Dashboard from './components/sections/Dashboard';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';
import smoothScroll from './utils/smoothScroll';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    smoothScroll();
    
    // Update page title
    document.title = 'Vaultly | Smart Finance for Freelancers & Creators';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Dashboard />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;