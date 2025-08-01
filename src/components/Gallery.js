import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Gallery = () => {
  const { scrollY } = useScroll();
  
  // Создаем трансформации для анимации заголовка
  const titleY = useTransform(scrollY, [0, 150], [100, 0]);
  const titleScale = useTransform(scrollY, [0, 150], [0.5, 1]);
  const titleOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const galleryImages = [
    '/Ref/forGallery/1.png',
    '/Ref/forGallery/2.png',
    '/Ref/forGallery/3.png',
    '/Ref/forGallery/4.png',
    '/Ref/forGallery/5.png',
    '/Ref/forGallery/6.png'
  ];

           return (
           <section id="gallery" className="relative py-16 md:py-32 text-center overflow-hidden min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="section-heading-container">
                           <motion.img
                   src="/Ref/hoop_page/n1.png"
                   alt="Gallery"
                   className="mx-auto mb-8 md:mb-16 max-w-full h-auto"
                   style={{
                     y: titleY,
                     scale: titleScale,
                     opacity: titleOpacity
                   }}
                   initial={{ opacity: 0, y: 100, scale: 0.5 }}
          />
        </div>
        
        {/* Two separate tunnels with moving images */}
                       <div className="relative mx-auto max-w-6xl">
                           {/* First tunnel - moving right */}
                 <div className="relative h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden mb-4 md:mb-6">
                   {/* Blur overlay for first tunnel edges */}
                   <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to right, rgba(255,166,176,1) 0%, rgba(255,166,176,0.9) 2%, rgba(255,166,176,0.7) 5%, rgba(255,166,176,0.4) 12%, rgba(255,166,176,0.1) 25%, transparent 45%, rgba(255,166,176,0.1) 75%, rgba(255,166,176,0.4) 88%, rgba(255,166,176,0.7) 95%, rgba(255,166,176,0.9) 98%, rgba(255,166,176,1) 100%)',
                          filter: 'blur(40px)'
                        }}>
                   </div>
                   <div className="flex gap-6 gallery-tunnel-right" style={{ width: '200%' }}>
                     {/* Original images - first 4 */}
                     {galleryImages.slice(0, 4).map((image, index) => (
                       <div key={`tunnel1-original-${index}`} className="w-1/4 flex-shrink-0">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
                           style={{
                             filter: index === 0 ? 'blur(8px)' : index === 1 ? 'blur(4px)' : index === 2 ? 'blur(2px)' : 'none',
                             opacity: index === 0 ? 0.5 : index === 1 ? 0.75 : index === 2 ? 0.9 : 1
                           }}
                           alt={`Gallery ${index + 1}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                     {/* Duplicated images for seamless loop - first 4 */}
                     {galleryImages.slice(0, 4).map((image, index) => (
                       <div key={`tunnel1-duplicate-${index}`} className="w-1/4 flex-shrink-0">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
                           style={{
                             filter: index === 0 ? 'blur(8px)' : index === 1 ? 'blur(4px)' : index === 2 ? 'blur(2px)' : 'none',
                             opacity: index === 0 ? 0.5 : index === 1 ? 0.75 : index === 2 ? 0.9 : 1
                           }}
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
                 <div className="relative h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
                   {/* Blur overlay for second tunnel edges */}
                   <div className="absolute inset-0 pointer-events-none z-10"
                        style={{
                          background: 'linear-gradient(to right, rgba(255,166,176,1) 0%, rgba(255,166,176,0.9) 2%, rgba(255,166,176,0.7) 5%, rgba(255,166,176,0.4) 12%, rgba(255,166,176,0.1) 25%, transparent 45%, rgba(255,166,176,0.1) 75%, rgba(255,166,176,0.4) 88%, rgba(255,166,176,0.7) 95%, rgba(255,166,176,0.9) 98%, rgba(255,166,176,1) 100%)',
                          filter: 'blur(40px)'
                        }}>
                   </div>
                   <div className="flex gap-6 gallery-tunnel-left" style={{ width: '200%' }}>
                     {/* Original images - last 4 */}
                     {galleryImages.slice(4, 8).map((image, index) => (
                       <div key={`tunnel2-original-${index}`} className="w-1/4 flex-shrink-0">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
                           style={{
                             filter: index === 0 ? 'blur(8px)' : index === 1 ? 'blur(4px)' : index === 2 ? 'blur(2px)' : 'none',
                             opacity: index === 0 ? 0.5 : index === 1 ? 0.75 : index === 2 ? 0.9 : 1
                           }}
                           alt={`Gallery ${index + 5}`}
                           onError={(e) => {
                             e.target.style.display = 'none';
                           }}
                         />
                       </div>
                     ))}
                     {/* Duplicated images for seamless loop - last 4 */}
                     {galleryImages.slice(4, 8).map((image, index) => (
                       <div key={`tunnel2-duplicate-${index}`} className="w-1/4 flex-shrink-0">
                         <img
                           src={image}
                           className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
                           style={{
                             filter: index === 0 ? 'blur(8px)' : index === 1 ? 'blur(4px)' : index === 2 ? 'blur(2px)' : 'none',
                             opacity: index === 0 ? 0.5 : index === 1 ? 0.75 : index === 2 ? 0.9 : 1
                           }}
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