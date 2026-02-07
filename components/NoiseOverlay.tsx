import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <>
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[9998] mix-blend-multiply opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
    </>
  );
};

export default NoiseOverlay;