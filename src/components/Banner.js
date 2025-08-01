import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Banner = () => {
  const { scrollY } = useScroll();
  
  // Создаем трансформации для анимации
  const y = useTransform(scrollY, [0, 500], [200, 0]);
  const scale = useTransform(scrollY, [0, 500], [0.3, 1]);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header with image background */}
      <header className="relative">
        <img 
          src="/Ref/hoop_page/top.png" 
          alt="Header background" 
          className="w-full h-auto"
        />
        
        {/* Navigation buttons overlay */}
        <div className="absolute inset-0 flex justify-between items-center px-6 py-3">
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
                left: '20%',
                top: '50%',
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
                left: '36.5%',
                top: '50%',
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
                left: '54%',
                top: '50%',
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
                left: '73%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              
            </button>
          </div>
          
          {/* Right side - BUY HOOP button */}
          <button className="bg-transparent text-white font-bold px-4 py-2 rounded-full hover:bg-white/10 transition-colors text-sm">
            
          </button>
        </div>
      </header>

      {/* Main HOOP Block */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <motion.div
          className="relative"
          style={{
            y,
            scale,
            opacity
          }}
        >
          <img 
            src="/Ref/hoop_page/title.png" 
            alt="HOOP Title" 
            className="max-w-full h-auto"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Banner; 