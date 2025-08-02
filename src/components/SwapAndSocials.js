import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwapAndSocials = () => {
  

  
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step 1:",
      subtitle: "Create a wallet",
      description: "You're one step closer to the HOOP universe!"
    },
    {
      title: "Step 2:",
      subtitle: "Buy some SOL",
      description: "At HOOP, we believe it's a magical internet coin with the ecosystem of the future"
    },
    {
      title: "Step 3:",
      subtitle: "Head to jup.ag",
      description: "You're almost there - copy the contract address, go to jup.ag, and paste it into the search bar"
    },
    {
      title: "Step 4:",
      subtitle: "Swap SOL for $HOOP",
      description: "Congratulations — you're now part of the HOOP story!"
    }
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentStep, steps.length]);

  // Function to handle manual step change
  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <section id="how-to-buy" className="py-8 md:py-16 lg:py-32 text-center min-h-screen flex items-center justify-center">
      <div className="w-full max-w-none md:max-w-7xl mx-auto flex flex-col items-center px-0 md:px-8">
        <div className="section-heading-container">
          <motion.img
            src="/Ref/hoop_page/n3.png"
            alt="How to Buy"
            className="mx-auto mb-4 md:mb-8 lg:mb-16 max-w-full h-auto"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-16 w-full px-4 md:px-0">
          {/* Swap Widget */}
          <motion.div
            className="w-full lg:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] bg-black rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <iframe
              src="https://jup.ag/swap?outputCurrency=SOL"
              className="w-full h-full border-none"
              title="Jupiter Swap Widget"
            />
          </motion.div>

          {/* Interactive Info Block */}
          <motion.div
            className="w-full lg:w-[1000px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] bg-[#fb928b] p-3 md:p-6 lg:p-8 text-left shadow-lg relative rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col"
              >
                <h3 className="font-gulkave text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6 lg:mb-8 text-white">{steps[currentStep].title}</h3>
                <p className="font-gulkave font-semibold text-lg sm:text-xl md:text-2xl lg:text-5xl mb-3 md:mb-5 lg:mb-6 text-white">{steps[currentStep].subtitle}</p>
                <p className="font-gulkave text-sm sm:text-base md:text-lg lg:text-3xl opacity-80 text-white mb-4 md:mb-6 lg:mb-10">{steps[currentStep].description}</p>

                {/* Step Indicators */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepChange(index)}
                      className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentStep
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Logos */}
        <motion.div
          className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-16 md:h-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 relative"
          >
            <img 
              src="/Ref/hoop_page/dex_button.png" 
              alt="DEX Screener" 
              className="w-full h-full object-contain"
              style={{
                opacity: 0.8
              }}
            />
            {/* Fade-out effect for DEX Screener */}
            <div className="absolute inset-0 pointer-events-none"
                 style={{
                   background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(254,184,180,0.6) 70%, rgba(254,184,180,1) 100%)',
                   filter: 'blur(8px)'
                 }}
            />
          </a>
          <a 
            href="https://dextools.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-16 md:h-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 relative"
          >
            <img 
              src="/Ref/hoop_page/button_dex.png" 
              alt="DEX Tools" 
              className="w-full h-full object-contain"
              style={{
                opacity: 0.8
              }}
            />
            {/* Fade-out effect for DEX Tools */}
            <div className="absolute inset-0 pointer-events-none"
                 style={{
                   background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(254,184,180,0.6) 70%, rgba(254,184,180,1) 100%)',
                   filter: 'blur(8px)'
                 }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SwapAndSocials; 