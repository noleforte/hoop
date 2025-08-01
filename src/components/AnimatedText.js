import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ children, className = "", delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText; 