import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import SwapAndSocials from './components/SwapAndSocials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

       function App() {
         return (
           <div className="min-h-screen">
             {/* Main content with unified gradient */}
             <div style={{
               background: 'linear-gradient(to bottom, #fee7bf 0%, #ffa6b0 100%)',
               minHeight: 'calc(100vh - 80px)', // Adjust for footer height
               paddingLeft: '20px',
               paddingRight: '0px',
               '@media (min-width: 768px)': {
                 paddingLeft: '80px',
                 paddingRight: '0px'
               }
             }}>
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