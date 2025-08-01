import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollY } = useScroll();
  
  // Создаем трансформации для анимации заголовка
  const titleY = useTransform(scrollY, [0, 150], [100, 0]);
  const titleScale = useTransform(scrollY, [0, 150], [0.5, 1]);
  const titleOpacity = useTransform(scrollY, [0, 100], [0, 1]);

           return (
           <section id="about" className="w-full py-12 md:py-24">
                  <div className="section-heading-container">
                             <motion.img
                 src="/Ref/hoop_page/n2.png"
                 alt="About Hoop"
                 className="mx-auto mb-8 md:mb-16 max-w-full h-auto"
                 style={{
                   y: titleY,
                   scale: titleScale,
                   opacity: titleOpacity
                 }}
                 initial={{ opacity: 0, y: 100, scale: 0.5 }}
              />
            </div>
      
                   <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 relative px-4 lg:px-0">
        
                                      {/* Left character */}
               <motion.img
                 src="/Ref/hoop_page/char_1.png"
                 className="w-48 sm:w-64 md:w-[350px] lg:w-[400px] xl:w-[450px] object-contain fade-bottom"
                 style={{
                   maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                   WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                   marginTop: '10%'
                 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          alt="Character Left"
        />
        
                       {/* Center content box */}
               <motion.div
                 className="bg-[#fff4ef] rounded-xl p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center shadow-md text-[#444] text-xs sm:text-sm leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
          Project HOOP is a collection of unique characters, each embodying a vivid archetype and carrying a one-of-a-kind story. Among them are a charismatic leader, a mischievous trickster, and a kind-hearted jester — their personalities are yours to shape. This isn’t just a collection — these are fragments of the HOOP universe, each revealing new sides of themselves over time.
          </p>
        </motion.div>
        
                                      {/* Right character */}
               <motion.img
                 src="/Ref/hoop_page/char_2.png"
                 className="w-48 sm:w-64 md:w-[350px] lg:w-[400px] xl:w-[450px] object-contain fade-bottom"
                 style={{
                   maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                   WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                   marginTop: '-10%'
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