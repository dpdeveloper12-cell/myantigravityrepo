import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Learning from './components/Learning';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Learning />
        <Dashboard />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
