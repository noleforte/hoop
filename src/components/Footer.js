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
    <footer className="bg-[#bd4b4b] py-16" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
                    {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-2xl text-white mb-4">Navigation</h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-left text-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-left text-lg"
              >
                About HOOP
              </button>
              <button 
                onClick={() => scrollToSection('how-to-buy')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-left text-lg"
              >
                How to Buy
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="font-gulkave text-white hover:text-pink-200 transition-colors cursor-pointer text-left text-lg"
              >
                Gallery
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-2xl text-white mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <a 
                href="https://twitter.com/hoop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <motion.img
                  src="/Ref/hoop_page/button_x.png"
                  alt="Twitter/X"
                  className="w-10 h-10 object-contain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
              <a 
                href="https://t.me/hoop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <motion.img
                  src="/Ref/hoop_page/button_tg.png"
                  alt="Telegram"
                  className="w-10 h-10 object-contain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>
            </div>
            <a 
              href="https://jup.ag/swap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#bd4b4b] px-6 py-3 rounded-full font-gulkave font-bold hover:bg-pink-100 transition-colors text-lg"
            >
              <span>GET $HOOP</span>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center md:text-left">
            <h3 className="font-gulkave text-2xl text-white mb-4">Disclaimer:</h3>
            <p className="font-gulkave text-white text-base leading-relaxed">
              This website is for entertainment only. Meme coins are
              risky, so DYOR and only invest what you can afford to
              lose.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-8">
          <p className="font-gulkave text-xl text-white">
            © 2025 HOOP the coin. All rights HOOPED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 