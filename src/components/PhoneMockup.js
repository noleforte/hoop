import React from 'react';
import { motion } from 'framer-motion';

const PhoneMockup = () => {
  return (
    <motion.div 
      className="relative flex justify-center items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* iPhone Mockup */}
      <motion.div 
        className="relative w-[28rem] h-[56rem]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl border-8 border-gray-800">
          {/* Screen */}
          <div className="absolute inset-2 bg-gradient-to-br from-hoop-dark to-hoop-accent rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-black rounded-b-3xl z-10"></div>
            
            {/* Jupiter Swap iframe */}
            <div className="w-full h-full">
              <iframe
                src="https://jup.ag/swap/SOL-HOOP"
                title="Jupiter Swap"
                className="w-full h-full border-0"
                allow="clipboard-write"
              />
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-white rounded-full opacity-60"></div>
        </div>
        
        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneMockup; 