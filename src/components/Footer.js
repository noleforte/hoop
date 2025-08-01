import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#bd4b4b] py-4 md:py-6 flex justify-end gap-2 md:gap-4">
        {/* Twitter/X Icon */}
        <a 
          href="https://twitter.com/hoop" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.img
            src="/Ref/hoop_page/button_x.png"
            alt="Twitter/X"
            className="w-8 h-8 md:w-10 md:h-10 object-contain cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </a>
        
        {/* Telegram Icon */}
        <a 
          href="https://t.me/hoop" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.img
            src="/Ref/hoop_page/button_tg.png"
            alt="Telegram"
            className="w-8 h-8 md:w-10 md:h-10 object-contain cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </a>
      </footer>

      {/* Navigation and Copyright */}
      <div className="bg-[#bd4b4b] py-4 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-8 mb-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-pink-200 transition-colors cursor-pointer"
            >
              HOME
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-pink-200 transition-colors cursor-pointer"
            >
              ABOUT HOOP
            </button>
            
            <button 
              onClick={() => scrollToSection('how-to-buy')}
              className="text-white hover:text-pink-200 transition-colors cursor-pointer"
            >
              HOW TO BUY
            </button>
            
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-pink-200 transition-colors cursor-pointer"
            >
              GALLERY
            </button>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white text-sm">
              © 2025 HOOP the coin. All rights HOOPED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 