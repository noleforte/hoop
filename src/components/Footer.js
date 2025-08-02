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
    <footer className="bg-[#bd4b4b] py-8 md:py-16" style={{ 
      paddingLeft: '20px', 
      paddingRight: '20px',
      '@media (min-width: 768px)': {
        paddingLeft: '80px',
        paddingRight: '80px'
      }
    }}>
      <div className="max-w-none md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8 ml-0 md:ml-64">
          
                    {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-xl md:text-2xl text-white mb-3 md:mb-4">Navigation</h3>
            <div className="flex flex-col gap-2 md:gap-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-center md:text-left text-base md:text-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-center md:text-left text-base md:text-lg"
              >
                About HOOP
              </button>
              <button 
                onClick={() => scrollToSection('how-to-buy')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-center md:text-left text-base md:text-lg"
              >
                How to Buy
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-center md:text-left text-base md:text-lg"
              >
                Gallery
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-xl md:text-2xl text-white mb-3 md:mb-4">Follow Us</h3>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start mb-3 md:mb-4">
              <a 
                href="https://x.com/HoopLandSol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <motion.img
                  src="/Ref/hoop_page/button_x.png"
                  alt="Twitter/X"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a 
                href="https://t.me/HoopLandSol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <motion.img
                  src="/Ref/hoop_page/button_tg.png"
                  alt="Telegram"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            </div>
            <div className="text-center md:text-left">
              <a 
                href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GQACuDNEgVYB49gSeyrPWJ1NA3xbzvwnRACtcicspump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#bd4b4b] px-4 md:px-6 py-2 md:py-3 rounded-full font-gulkave font-bold hover:bg-pink-100 transition-colors text-sm md:text-lg"
              >
                <span>GET $HOOP</span>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-xl md:text-2xl text-white mb-3 md:mb-4">Disclaimer:</h3>
            <p className="font-gulkave text-white text-sm md:text-base leading-relaxed">
              This website is for entertainment only. Meme coins are
              risky, so DYOR and only invest what you can afford to
              lose.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-4 md:pt-8">
          <p className="font-gulkave text-lg md:text-xl text-white">
            © 2025 HOOP the coin. All rights HOOPED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 