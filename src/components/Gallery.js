import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    '/Ref/forGallery/1.png',
    '/Ref/forGallery/2.png',
    '/Ref/forGallery/3.png',
    '/Ref/forGallery/4.png',
    '/Ref/forGallery/5.png',
    '/Ref/forGallery/6.png',
    '/Ref/forGallery/7.png',
    '/Ref/forGallery/8.png',
    '/Ref/forGallery/9.png'
  ];

  return (
    <section id="gallery" className="relative py-32 px-4 text-center overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          GALLERY
        </motion.h2>
        
        {/* Container with blur edges */}
        <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
          {/* Optional: backdrop filters */}
          <div className="absolute inset-0 pointer-events-none z-10"
               style={{
                 maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                 backdropFilter: 'blur(8px)'
               }}>
          </div>

          {/* Images */}
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image} 
                className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" 
                alt={`Gallery ${index + 1}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 