import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    '/Ref/forGallery/1.png',
    '/Ref/forGallery/2.png',
    '/Ref/forGallery/3.png',
    '/Ref/forGallery/4.png',
    '/Ref/forGallery/5.png',
    '/Ref/forGallery/6.png'
  ];

           return (
           <section id="gallery" className="relative py-32 text-center overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="section-heading-container">
                           <motion.h2
                   className="text-8xl font-bold mb-16 font-gulkave text-gradient-heading fade-out-effect"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            GALLERY
          </motion.h2>
        </div>
        
        {/* Two separate tunnels with moving images */}
                       <div className="relative mx-auto max-w-6xl fade-out-effect">
                           {/* First tunnel - moving right */}
                 <div className="relative h-[400px] overflow-hidden mb-6">
                   {/* Blur overlay for first tunnel edges */}
                   <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to right, rgba(255,166,176,0.9) 0%, rgba(255,166,176,0.6) 5%, rgba(255,166,176,0.3) 15%, transparent 30%, transparent 70%, rgba(255,166,176,0.3) 85%, rgba(255,166,176,0.6) 95%, rgba(255,166,176,0.9) 100%)',
                          filter: 'blur(20px)'
                        }}>
                   </div>
                   <div className="flex gap-6 gallery-tunnel-right" style={{ width: '200%' }}>
                     {/* Original images - first 4 */}
                     {galleryImages.slice(0, 4).map((image, index) => (
                       <div key={`tunnel1-original-${index}`} className="w-1/4 flex-shrink-0 fade-out-effect">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300"
                           alt={`Gallery ${index + 1}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                     {/* Duplicated images for seamless loop - first 4 */}
                     {galleryImages.slice(0, 4).map((image, index) => (
                       <div key={`tunnel1-duplicate-${index}`} className="w-1/4 flex-shrink-0 fade-out-effect">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300"
                           alt={`Gallery ${index + 1}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                   </div>
                 </div>
          
                           {/* Second tunnel - moving left */}
                 <div className="relative h-[400px] overflow-hidden">
                   {/* Blur overlay for second tunnel edges */}
                   <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to right, rgba(255,166,176,0.9) 0%, rgba(255,166,176,0.6) 5%, rgba(255,166,176,0.3) 15%, transparent 30%, transparent 70%, rgba(255,166,176,0.3) 85%, rgba(255,166,176,0.6) 95%, rgba(255,166,176,0.9) 100%)',
                          filter: 'blur(20px)'
                        }}>
                   </div>
                   <div className="flex gap-6 gallery-tunnel-left" style={{ width: '200%' }}>
                     {/* Original images - last 4 */}
                     {galleryImages.slice(4, 8).map((image, index) => (
                       <div key={`tunnel2-original-${index}`} className="w-1/4 flex-shrink-0 fade-out-effect">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300"
                           alt={`Gallery ${index + 5}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                     {/* Duplicated images for seamless loop - last 4 */}
                     {galleryImages.slice(4, 8).map((image, index) => (
                       <div key={`tunnel2-duplicate-${index}`} className="w-1/4 flex-shrink-0 fade-out-effect">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300"
                           alt={`Gallery ${index + 5}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                   </div>
                 </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 