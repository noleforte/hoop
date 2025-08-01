import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwapAndSocials = () => {
  

  
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Step 1:",
      subtitle: "Setup a wallet",
      description: "And take off with $HOOP!",
      details: [
        "Download Phantom or Solflare wallet",
        "Add SOL to your wallet",
        "Connect wallet to Jupiter",
        "Swap SOL for HOOP tokens"
      ]
    },
    {
      title: "Step 2:",
      subtitle: "Connect to Jupiter",
      description: "The best DEX aggregator!",
      details: [
        "Visit jup.ag in your browser",
        "Connect your wallet",
        "Select SOL as input token",
        "Select HOOP as output token"
      ]
    },
    {
      title: "Step 3:",
      subtitle: "Execute the swap",
      description: "Get your HOOP tokens!",
      details: [
        "Enter the amount of SOL to swap",
        "Review the transaction details",
        "Confirm the swap in your wallet",
        "Wait for transaction confirmation"
      ]
    },
    {
      title: "Step 4:",
      subtitle: "Join the community",
      description: "Welcome to the HOOP family!",
      details: [
        "Join our Telegram group",
        "Follow us on Twitter/X",
        "Share your HOOP journey",
        "Stay updated with announcements"
      ]
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
            className="w-full lg:w-[800px] h-[300px] md:h-[500px] lg:h-[600px] bg-black rounded-lg overflow-hidden shadow-xl"
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
            className="w-full lg:w-[1000px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#f5a1a1] rounded-lg p-4 md:p-8 text-left shadow-lg relative"
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
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">{steps[currentStep].title}</h3>
                <p className="font-semibold text-base md:text-xl mb-1 md:mb-2 text-white">{steps[currentStep].subtitle}</p>
                <p className="text-sm md:text-base opacity-80 text-white mb-3 md:mb-4">{steps[currentStep].description}</p>

                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">Quick Steps:</h4>
                  <ul className="text-white space-y-1 md:space-y-2">
                    {steps[currentStep].details.map((detail, index) => (
                      <li key={index} className="flex items-center text-xs md:text-sm">
                        <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

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