import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>
      
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
