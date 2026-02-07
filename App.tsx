import React from 'react';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Logic from './components/Logic';
import Chaos from './components/Chaos';
import Growth from './components/Growth';
import Lens from './components/Lens';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';

const App: React.FC = () => {
  return (
    <main className="w-full relative">
      <NoiseOverlay />
      
      {/* Sections */}
      <Hero />
      <Thesis />
      <Logic />
      <Chaos />
      <Growth />
      <Lens />
      <Footer />
      
      {/* Floating Navigation / progress could go here */}
    </main>
  );
};

export default App;