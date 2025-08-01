import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

           return (
           <section id="about" className="w-full py-12 md:py-24">
                          <div className="section-heading-container">
          <motion.img
            src="/Ref/hoop_page/n2.png"
            alt="About Hoop"
            className="mx-auto mb-8 md:mb-16 max-w-full h-auto"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
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
          viewport={{ once: false }}
          alt="Character Left"
        />
        
                       {/* Center content box */}
               <div className="w-full flex flex-col items-center max-w-4xl mx-auto px-6">
                 <div className="bg-[#fb928b] backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
                   <div className="space-y-6">
                     <p className="font-gulkave text-white text-base sm:text-lg md:text-xl text-center leading-relaxed md:leading-loose">
                       Project HOOP is a collection of unique characters, each embodying a vivid archetype and carrying a one-of-a-kind story.
                     </p>
                     <p className="font-gulkave text-white text-base sm:text-lg md:text-xl text-center leading-relaxed md:leading-loose">
                       Among them are a charismatic leader, a mischievous trickster, and a kind-hearted jester — their personalities are yours to shape.
                     </p>
                     <p className="font-gulkave text-white text-base sm:text-lg md:text-xl text-center leading-relaxed md:leading-loose">
                       This isn't just a collection — these are fragments of the HOOP universe, each revealing new sides of themselves over time.
                     </p>
                   </div>
                 </div>
               </div>
        
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
          viewport={{ once: false }}
          alt="Character Right"
        />
        
      </div>
    </section>
  );
};

export default About; 