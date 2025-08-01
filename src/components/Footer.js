import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#f9a9b5] to-[#fee7bf] py-16" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-12 mb-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-gulkave text-2xl text-white hover:text-pink-200 transition-colors cursor-pointer"
          >
            HOME
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="font-gulkave text-2xl text-white hover:text-pink-200 transition-colors cursor-pointer"
          >
            ABOUT HOOP
          </button>
          
          <button 
            onClick={() => scrollToSection('how-to-buy')}
            className="font-gulkave text-2xl text-white hover:text-pink-200 transition-colors cursor-pointer"
          >
            HOW TO BUY
          </button>
          
          <button 
            onClick={() => scrollToSection('gallery')}
            className="font-gulkave text-2xl text-white hover:text-pink-200 transition-colors cursor-pointer"
          >
            GALLERY
          </button>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="font-gulkave text-lg text-white opacity-80">
            © 2025 HOOP the coin. All rights HOOPED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 