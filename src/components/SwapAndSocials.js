import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwapAndSocials = () => {
  

  
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step 1:",
      subtitle: "Create a wallet",
      description: "You’re one step closer to the HOOP universe!"
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
      description: "Congratulations — you’re now part of the HOOP story!"
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
    <section id="how-to-buy" className="py-16 md:py-32 text-center min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="section-heading-container">
          <motion.img
            src="/Ref/hoop_page/n3.png"
            alt="How to Buy"
            className="mx-auto mb-8 md:mb-16 max-w-full h-auto"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {/* Swap Widget */}
          <motion.div
            className="w-full lg:w-[600px] h-[300px] md:h-[500px] lg:h-[400px] bg-black rounded-lg overflow-hidden shadow-xl"
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
            className="w-full lg:w-[1000px] h-[300px] md:h-[500px] lg:h-[400px] bg-[#fb928b] p-4 md:p-8 text-left shadow-lg relative rounded-2xl"
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
                <h3 className="font-gulkave text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white">{steps[currentStep].title}</h3>
                <p className="font-gulkave font-semibold text-3xl md:text-5xl mb-5 md:mb-6 text-white">{steps[currentStep].subtitle}</p>
                <p className="font-gulkave text-2xl md:text-3xl opacity-80 text-white mb-8 md:mb-10">{steps[currentStep].description}</p>

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
          className="flex justify-center gap-6 mt-16 relative left-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 relative"
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
            className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-200 relative"
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