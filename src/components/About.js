import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-24 px-4">
                  <motion.h2
              className="text-center text-8xl font-bold mb-16 uppercase tracking-wide font-gulkave text-gradient-heading"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Hoop
            </motion.h2>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative">
        
        {/* Left character */}
        <motion.img 
          src="/Ref/hoop_page/char_1.png" 
          className="w-72 md:w-[320px] object-contain fade-bottom"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)'
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          alt="Character Left"
        />
        
        {/* Center content box */}
        <motion.div 
          className="bg-[#fff4ef] rounded-xl p-6 max-w-md text-center shadow-md text-[#444] text-sm leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            HOOP is a revolutionary NFT collection that brings together the best of gaming, art, and community.
            Each character is uniquely designed with distinctive traits and personalities that make them truly special.
          </p>
          <br />
          <p>
            Join our vibrant community and discover the endless possibilities that await in the HOOP universe.
            From rare collectibles to exclusive experiences, there's something for everyone in the HOOP ecosystem.
          </p>
        </motion.div>
        
        {/* Right character */}
        <motion.img 
          src="/Ref/hoop_page/char_2.png" 
          className="w-72 md:w-[320px] object-contain fade-bottom"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)'
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          alt="Character Right"
        />
        
      </div>
    </section>
  );
};

export default About; 