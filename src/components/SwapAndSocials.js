import React from 'react';
import { motion } from 'framer-motion';

const SwapAndSocials = () => {
  return (
    <section id="how-to-buy" className="py-32 px-4 text-center min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          HOW TO BUY
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          
          {/* Swap Widget */}
          <motion.div 
            className="w-[400px] h-[320px] bg-black rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://jup.ag/swap?outputCurrency=SOL"
              className="w-full h-full border-none"
              title="Jupiter Swap Widget"
            />
          </motion.div>

          {/* Info Block */}
          <motion.div 
            className="w-[400px] h-[320px] bg-[#f5a1a1] rounded-lg p-8 text-left shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Step 1:</h3>
            <p className="font-semibold text-2xl mb-2 text-white">Setup a wallet</p>
            <p className="text-lg opacity-80 text-white">And take off with $HOOP!</p>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-white mb-4">Quick Steps:</h4>
              <ul className="text-white space-y-3">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                  Download Phantom or Solflare wallet
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                  Add SOL to your wallet
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                  Connect wallet to Jupiter
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-4"></span>
                  Swap SOL for HOOP tokens
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Logos */}
        <motion.div 
          className="flex justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 rounded-full shadow bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">SOL</span>
          </div>
          <div className="w-12 h-12 rounded-full shadow bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">HOOP</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SwapAndSocials; 