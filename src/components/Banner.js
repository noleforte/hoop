import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Создаем трансформации для анимации
  const y = useTransform(scrollY, [0, 200], [200, 0]);
  const scale = useTransform(scrollY, [0, 200], [0.3, 1]);
  const opacity = useTransform(scrollY, [0, 150], [0, 1]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Header - Fixed at top */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#fb928b]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Ref/hoop_page/title.png"
              alt="HOOP"
              className="h-6 w-auto"
            />
          </div>

          {/* Burger Menu Button - Moved further left */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 -mr-4"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#bd4b4b] border-t border-white/20"
            >
              <div className="px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white font-gulkave text-lg font-bold hover:text-pink-200 transition-colors text-left py-2"
                  >
                    HOME
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-white font-gulkave text-lg font-bold hover:text-pink-200 transition-colors text-left py-2"
                  >
                    ABOUT HOOP
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('how-to-buy')}
                    className="text-white font-gulkave text-lg font-bold hover:text-pink-200 transition-colors text-left py-2"
                  >
                    HOW TO BUY
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="text-white font-gulkave text-lg font-bold hover:text-pink-200 transition-colors text-left py-2"
                  >
                    GALLERY
                  </button>

                  {/* Social Links */}
                  <div className="flex space-x-4 pt-4 border-t border-white/20">
                    <a 
                      href="https://dexscreener.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10"
                    >
                      <img 
                        src="/Ref/hoop_page/dex_button.png" 
                        alt="DEX Screener" 
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <a 
                      href="https://dextools.io" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10"
                    >
                      <img 
                        src="/Ref/hoop_page/button_dex.png" 
                        alt="DEX Tools" 
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <a 
                      href="https://twitter.com/hoop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10"
                    >
                      <img 
                        src="/Ref/hoop_page/button_x.png" 
                        alt="Twitter/X" 
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <a 
                      href="https://t.me/hoop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10"
                    >
                      <img 
                        src="/Ref/hoop_page/button_tg.png" 
                        alt="Telegram" 
                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Header with image background - Hidden on mobile */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 px-0 md:px-20 pt-8 md:pt-8">
        <img
          src="/Ref/hoop_page/top.png"
          alt="Header background"
          className="w-full h-auto mx-auto"
        />

        {/* Desktop Navigation buttons overlay */}
        <div className="absolute inset-0 flex justify-between items-center py-3 px-0 md:px-20">
          {/* Left side - Character icon area */}
          <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-white/10 transition-colors"></div>
          
          {/* Center - Navigation links with adjusted positioning */}
          <div className="flex-1 flex justify-center items-center gap-20 px-8">
            {/* HOME - scroll to top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-bold text-sm hover:bg-white/10 px-4 py-2 rounded transition-colors cursor-pointer"
              style={{ 
                minWidth: '60px', 
                textAlign: 'center',
                position: 'absolute',
                left: '22%',
                top: '59%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              
            </button>
            
            {/* ABOUT HOOP */}
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white font-bold text-sm hover:bg-white/10 px-4 py-2 rounded transition-colors cursor-pointer"
              style={{ 
                minWidth: '100px', 
                textAlign: 'center',
                position: 'absolute',
                left: '37.5%',
                top: '60%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              
            </button>
            
            {/* HOW TO BUY */}
            <button 
              onClick={() => scrollToSection('how-to-buy')}
              className="text-white font-bold text-sm hover:bg-white/10 px-4 py-2 rounded transition-colors cursor-pointer"
              style={{ 
                minWidth: '100px', 
                textAlign: 'center',
                position: 'absolute',
                left: '53.5%',
                top: '60%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              
            </button>
            
            {/* GALLERY */}
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white font-bold text-sm hover:bg-white/10 px-4 py-2 rounded transition-colors cursor-pointer"
              style={{ 
                minWidth: '80px', 
                textAlign: 'center',
                position: 'absolute',
                left: '71.5%',
                top: '59%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              
            </button>
          </div>
          
          {/* Right side - BUY HOOP button */}
          <a 
            href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GQACuDNEgVYB49gSeyrPWJ1NA3xbzvwnRACtcicspump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent text-white font-bold px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm cursor-pointer"
            style={{
              paddingLeft: '8.5rem',
              marginRight: '2rem',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              width: '120px',
              height: '40px'
            }}
          >
            
          </a>
        </div>
      </header>

      {/* Main HOOP Block - Mobile optimized */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 md:px-0" style={{ 
        marginTop: '60px',
        '@media (min-width: 768px)': {
          marginTop: '15%'
        }
      }}>
        <motion.div
          className="relative w-full max-w-full"
          style={{
            y,
            scale,
            opacity
          }}
        >
          <img
            src="/Ref/hoop_page/title.png"
            alt="HOOP Title"
            className="w-full max-w-[85vw] md:max-w-[70vw] lg:max-w-[60vw] h-auto mx-auto"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Banner; 