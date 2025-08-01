import React from 'react';
import { motion } from 'framer-motion';
import InfiniteScrollRow from './InfiniteScrollRow';

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
    '/Ref/forGallery/9.png',
    '/Ref/forGallery/10.png',
    '/Ref/forGallery/11.png',
    '/Ref/forGallery/12.png',
    '/Ref/forGallery/13.png'
  ];

           return (
           <section id="gallery" className="relative py-16 md:py-32 text-center overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
                <div className="section-heading-container">
          <motion.img
            src="/Ref/hoop_page/n1.png"
            alt="Gallery"
            className="mx-auto mb-8 md:mb-16 max-w-full h-auto"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />
        </div>
        
        {/* Two separate tunnels with moving images */}
        <div className="relative mx-auto max-w-7xl space-y-2">
          {/* First tunnel - moving right */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
            <InfiniteScrollRow 
              images={galleryImages.slice(0, 8)} 
              direction="right" 
              speed={45} 
              blurTop={true}
              blurBottom={false}
            />
          </div>
          
          {/* Second tunnel - moving left */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
            <InfiniteScrollRow 
              images={galleryImages.slice(6, 13)} 
              direction="left" 
              speed={40} 
              blurTop={false}
              blurBottom={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 