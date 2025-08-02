import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import SwapAndSocials from './components/SwapAndSocials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

       function App() {
         return (
           <div className="min-h-screen overflow-x-hidden">
             {/* Main content with unified gradient */}
             <div 
               className="px-0 md:px-20"
               style={{
                 background: 'linear-gradient(to bottom, #fee7bf 0%, #ffa6b0 100%)',
                 minHeight: 'calc(100vh - 80px)', // Adjust for footer height
               }}
             >
               <Banner />
               <About />
               <SwapAndSocials />
               <Gallery />
             </div>

             {/* Footer */}
             <Footer />
           </div>
         );
       }

export default App; 