import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
           return (
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
  );
};

export default Footer; 